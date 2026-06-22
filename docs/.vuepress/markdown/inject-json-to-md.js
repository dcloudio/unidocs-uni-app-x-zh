const fs = require('fs')
const path = require('path')
const { getExample } = require('../utils/example');

require('dotenv').config()

const JSON_FILES = {
  CSSJSON: 'cssJson.json',
  UTSJSON: 'utsJson.json',
  UTSAPIJSON: 'utsApiJson.json',
  UTSCOMJSON: 'utsComJson.json',
  UTSUNICLOUDAPIJSON: 'utsUnicloudApiJson.json',
  CUSTOMTYPEJSON: 'customTypeJson.json',
  VUEJSON: 'vueJson.json',
  MANIFESTJSON: 'maniFestJson.json',
  PAGESJSON: 'pagesJson.json',
  SPECIALSTRINGJSON: 'specialStringJson.json',
  PAGEINSTANCE: 'pageInstanceJson.json',
  UTSDIFFTSJSON: 'utsDiffTSJson.json'
}

const ROOT_DIR = path.resolve(__dirname, '../../..')
const DOCS_DIR = path.join(ROOT_DIR, 'docs')
const UTILS_DIR = path.resolve(__dirname, '../utils')
const MISSING_PLACEHOLDER_LOG = path.join(ROOT_DIR, 'inject-json-missing-placeholders.log')
const JSON_PLACEHOLDER_REGEXP = new RegExp(
  `<!--\\s*(${Object.keys(JSON_FILES).join('|')})\\.([A-Za-z0-9_$.-]+)\\s*-->`,
  'g'
)
const EXAMPLE_REGEXP = /<!--\s*EXAMPLEJSON\.([A-Za-z0-9_$.-]+)\s*-->/g
const jsonCache = new Map()
const reportedLoadErrors = new Set()
const reportedMissingPlaceholders = new Set()
let missingPlaceholderLogInitialized = false
let missingPlaceholderLogDisabled = false

function warnOnce(cache, key, message) {
  if (cache.has(key)) return
  cache.add(key)
  console.warn(message)
}

function loadJson(fileName) {
  const filePath = path.join(UTILS_DIR, fileName)
  try {
    const stat = fs.statSync(filePath)
    const cached = jsonCache.get(fileName)
    if (cached && cached.mtimeMs === stat.mtimeMs) {
      return cached.value
    }

    const value = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    jsonCache.set(fileName, {
      mtimeMs: stat.mtimeMs,
      value
    })
    reportedLoadErrors.delete(fileName)
    return value
  } catch (error) {
    warnOnce(
      reportedLoadErrors,
      fileName,
      `[inject-json-to-md] load ${fileName} failed: ${error.message}`
    )
    return {}
  }
}

function getJsonByPrefix(prefix) {
  const fileName = JSON_FILES[prefix]
  return fileName ? loadJson(fileName) : {}
}

function getExampleMapping() {
  return loadJson('example-mapping.json')
}

function getExampleProjects(exampleMapping) {
  return exampleMapping._projects || {}
}

function getDefaultProjectName(exampleProjects) {
  return Object.keys(exampleProjects)[0] || ''
}

// 从 _projects 映射中读取项目配置（每个项目包含 path / webPath / gitCodePath 等环境变量名）
/**
 * 根据项目名称从 _projects 配置中获取项目配置
 * @param {string} [projectName] 项目名称，默认为 _projects 中第一个
 * @param {{}} exampleProjects 示例项目配置
 * @returns {{ path: string, webPath: string, gitCodePath: string } | null}
 */
function getProjectConfig(projectName, exampleProjects) {
  const name = projectName || getDefaultProjectName(exampleProjects)
  const config = exampleProjects[name]
  if (!config) return null
  return {
    path: process.env[config.path] || '',
    webPath: process.env[config.webPath] || '',
    gitCodePath: process.env[config.gitCodePath] || '',
  }
}

/**
 * 将 example-mapping.json 中的 key 渲染为 Markdown 代码块内容。
 * 用法：<!-- EXAMPLEJSON.entryKey.exampleName -->
 *   entryKey  —— example-mapping.json 中的顶层 key（如 text / swiper）
 *   exampleName —— entry 下的子 key（如 text-props / text-writer）
 * @param {string} fullKey  形如 "text.text-props"
 * @returns {string}
 */
function renderExampleBlock(fullKey) {
  const exampleMapping = getExampleMapping()
  const exampleProjects = getExampleProjects(exampleMapping)
  const defaultProjectName = getDefaultProjectName(exampleProjects)
  const dotIndex = fullKey.indexOf('.')
  if (dotIndex === -1) {
    return `<!-- EXAMPLEJSON.${fullKey}: 格式错误，应为 EXAMPLEJSON.entryKey.exampleName -->`
  }

  const entryKey = fullKey.slice(0, dotIndex)
  const exampleName = fullKey.slice(dotIndex + 1)

  const entry = exampleMapping[entryKey]
  if (!entry || typeof entry !== 'object') {
    return `<!-- EXAMPLEJSON.${fullKey}: 未找到映射 ${entryKey}，请检查 example-mapping.json -->`
  }

  const item = entry[exampleName]
  if (!item || typeof item !== 'object' || !item.path) {
    return `<!-- EXAMPLEJSON.${fullKey}: 未找到示例 ${exampleName}，请检查 example-mapping.json -->`
  }

  const entryProjectName = entry.project || defaultProjectName
  const projectName = item.project || entryProjectName
  const relPath = item.path
  const title = item.title || null

  const _projectConfig = exampleProjects[projectName]

  const projectConfig = getProjectConfig(projectName, exampleProjects)
  if (!projectConfig) {
    return `<!-- EXAMPLEJSON.${fullKey}: 未知项目 ${projectName}，请检查 _projects 配置 -->`
  }

  if (!projectConfig.path) {
    return `<!-- EXAMPLEJSON.${fullKey}: 请设置环境变量 ${_projectConfig.path} 指向 ${projectName} 项目路径 -->`
  }

  const exampleCode = getExample(relPath, projectConfig)
  if (!exampleCode) {
    return `<!-- EXAMPLEJSON.${fullKey}: 获取示例代码失败 ${relPath} -->`
  }

  return [title, '', exampleCode].filter(Boolean).join('\n')
}

function getValueByPath(json, jsonPath) {
  return jsonPath.split('.').reduce((temp, key) => {
    if (temp == null) return undefined
    return temp[key]
  }, json)
}

function getSourceFile(args) {
  const env = args[0] || {}
  return env.filePath || env.path || env.relativePath || env._filePath || '<unknown>'
}

function normalizeSourceFile(sourceFile) {
  if (sourceFile === '<unknown>' || path.isAbsolute(sourceFile)) {
    return sourceFile
  }
  if (sourceFile.startsWith('docs/')) {
    return path.join(ROOT_DIR, sourceFile)
  }
  return path.join(DOCS_DIR, sourceFile)
}

function warnMissingPlaceholder(sourceFile, lineNumber, prefix, jsonPath) {
  const normalizedSourceFile = normalizeSourceFile(sourceFile)
  const key = `${normalizedSourceFile}:${lineNumber}:${prefix}.${jsonPath}`
  if (reportedMissingPlaceholders.has(key)) return
  reportedMissingPlaceholders.add(key)

  if (missingPlaceholderLogDisabled) return
  try {
    if (!missingPlaceholderLogInitialized) {
      fs.writeFileSync(MISSING_PLACEHOLDER_LOG, '')
      missingPlaceholderLogInitialized = true
    }
    fs.appendFileSync(
      MISSING_PLACEHOLDER_LOG,
      `[inject-json-to-md] missing placeholder: ${normalizedSourceFile}:${lineNumber} ${prefix}.${jsonPath}\n`
    )
  } catch (error) {
    missingPlaceholderLogDisabled = true
  }
}

function replaceExamplePlaceholders(line) {
  EXAMPLE_REGEXP.lastIndex = 0
  return line.replace(EXAMPLE_REGEXP, (_, fullKey) => renderExampleBlock(fullKey))
}

function replaceJsonPlaceholders(line, sourceFile, lineNumber) {
  JSON_PLACEHOLDER_REGEXP.lastIndex = 0
  return line.replace(JSON_PLACEHOLDER_REGEXP, (raw, prefix, jsonPath) => {
    const value = getValueByPath(getJsonByPrefix(prefix), jsonPath)
    if (typeof value === 'undefined') {
      warnMissingPlaceholder(sourceFile, lineNumber, prefix, jsonPath)
      return raw
    }
    return value
  })
}

const NEWLINE_CHARACTER = /\r?\n/

module.exports = md => {
  md.parse = (function (MD_PARSE) {
    return function (src, ...args) {
      if (!src) return MD_PARSE.bind(this)(src, ...args)

      JSON_PLACEHOLDER_REGEXP.lastIndex = 0
      EXAMPLE_REGEXP.lastIndex = 0
      const hasJsonTag = JSON_PLACEHOLDER_REGEXP.test(src)
      const hasExampleTag = EXAMPLE_REGEXP.test(src)

      if (hasJsonTag || hasExampleTag) {
        const sourceFile = getSourceFile(args)
        const lines = src.split(NEWLINE_CHARACTER)
        for (let index = 0; index < lines.length; index++) {
          const line = replaceExamplePlaceholders(lines[index])
          lines[index] = replaceJsonPlaceholders(line, sourceFile, index + 1)
        }

        return MD_PARSE.bind(this)(lines.join('\n'), ...args)
      }
      return MD_PARSE.bind(this)(src, ...args)
    }
  })(md.parse)
}
