const { getExample } = require('../utils/example');

require('dotenv').config()

let cssJson = {}
let utsJson = {}
let utsApiJson = {}
let utsComJson = {}
let utsUnicloudApiJson = {}
let customTypeJson = {}
let vueJson = {}
let manifestJson = {}
let pagesJson = {}
let specialStringJson = {}
let pageInstanceJson = {}
let utsDiffTSJson = {}
let exampleMapping = {}
try {
  cssJson = require('../utils/cssJson.json')
} catch (error) { }
try {
  utsJson = require('../utils/utsJson.json')
} catch (error) { }
try {
  utsApiJson = require('../utils/utsApiJson.json')
} catch (error) { }
try {
  utsComJson = require('../utils/utsComJson.json')
} catch (error) { }
try {
  utsUnicloudApiJson = require('../utils/utsUnicloudApiJson.json')
} catch (error) { }
try {
  customTypeJson = require('../utils/customTypeJson.json')
} catch (error) { }
try {
  vueJson = require('../utils/vueJson.json')
} catch (error) { }
try {
  manifestJson = require('../utils/manifestJson.json')
} catch (error) { }
try {
  pagesJson = require('../utils/pagesJson.json')
} catch (error) { }
try {
  specialStringJson = require('../utils/specialStringJson.json')
} catch (error) { }
try {
  pageInstanceJson = require('../utils/pageInstanceJson.json')
} catch (error) { }
try {
  utsDiffTSJson = require('../utils/utsDiffTSJson.json')
} catch (error) { }
try {
  exampleMapping = require('../utils/example-mapping.json')
} catch (error) { }

// 从 _projects 映射中读取项目配置（每个项目包含 path / webPath / gitCodePath 等环境变量名）
const exampleProjects = exampleMapping._projects || {}
const defaultProjectName = Object.keys(exampleProjects)[0] || ''

/**
 * 根据项目名称从 _projects 配置中获取项目配置
 * @param {string} [projectName] 项目名称，默认为 _projects 中第一个
 * @returns {{ path: string, webPath: string, gitCodePath: string } | null}
 */
function getProjectConfig(projectName) {
  const name = projectName || defaultProjectName
  const config = exampleProjects[name]
  if (!config) return null
  return {
    path: process.env[config.path] || '',
    webPath: process.env[config.webPath] || '',
    gitCodePath: process.env[config.gitCodePath] || '',
  }
}

const EXAMPLE_REGEXP = /<!--\s*EXAMPLEJSON\.(\S+)\s*-->/

/**
 * 将 example-mapping.json 中的 key 渲染为 Markdown 代码块内容。
 * 用法：<!-- EXAMPLEJSON.entryKey.exampleName -->
 *   entryKey  —— example-mapping.json 中的顶层 key（如 text / swiper）
 *   exampleName —— entry 下的子 key（如 text-props / text-writer）
 * @param {string} fullKey  形如 "text.text-props"
 * @returns {string}
 */
function renderExampleBlock(fullKey) {
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

  const projectConfig = getProjectConfig(projectName)
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

function getRegExp(key) {
  return new RegExp(`<!--\\s*${key}.([\\w\\W]+[^\\s])\\s*-->`)
}

/**
 *
 * @param {{}} json
 * @param {string} regExpKey
 * @returns {{match: RegExpMatchArray | null, json: {}, regExp: RegExp | null} | undefined}
 */
function createMatch(json, text, regExpKey) {
  const regExp = getRegExp(regExpKey)
  let match = text.match(regExp)
  regExp.lastIndex = 0
  if (match) {
    return {
      match,
      json: json,
      regExp: regExp,
    }
  }
}

/**
 * @param {string} text
 */
const getJSON = text => {
  return createMatch(cssJson, text, 'CSSJSON') ||
    createMatch(utsJson, text, 'UTSJSON') ||
    createMatch(utsApiJson, text, 'UTSAPIJSON') ||
    createMatch(utsComJson, text, 'UTSCOMJSON') ||
    createMatch(utsUnicloudApiJson, text, 'UTSUNICLOUDAPIJSON') ||
    createMatch(customTypeJson, text, 'CUSTOMTYPEJSON') ||
    createMatch(vueJson, text, 'VUEJSON') ||
    createMatch(manifestJson, text, 'MANIFESTJSON') ||
    createMatch(pagesJson, text, 'PAGESJSON') ||
    createMatch(specialStringJson, text, 'SPECIALSTRINGJSON') ||
    createMatch(pageInstanceJson, text, 'PAGEINSTANCE') ||
    createMatch(utsDiffTSJson, text, 'UTSDIFFTSJSON') ||

  {
    match: null,
    json: {},
    regExp: null,
  }
}

const NEWLINE_CHARACTER = /\r?\n/

module.exports = md => {
  md.parse = (function (MD_PARSE) {
    return function (src, ...args) {
      if (!src) return MD_PARSE.bind(this)(src, ...args)

      const hasJsonTag = getJSON(src).match
      const hasExampleTag = EXAMPLE_REGEXP.test(src)

      if (hasJsonTag || hasExampleTag) {
        const lines = src.split(NEWLINE_CHARACTER)
        for (let index = 0; index < lines.length; index++) {
          const line = lines[index]

          // 处理 <!-- EXAMPLEJSON.key -->
          const exampleMatch = line.match(EXAMPLE_REGEXP)
          if (exampleMatch) {
            lines[index] = line.replace(EXAMPLE_REGEXP, renderExampleBlock(exampleMatch[1]))
            continue
          }

          // 处理原有 JSON 注入标签
          const { match, json, regExp } = getJSON(line)
          if (match && regExp) {
            const jsonPath = match[1]
            const pathParts = jsonPath.split('.')
            let temp = json
            pathParts.forEach(key => {
              if (!temp) return false
              temp = temp[key]
            })
            if (typeof temp === 'undefined') continue
            lines[index] = lines[index].replace(regExp, temp)
          }
        }

        return MD_PARSE.bind(this)(lines.join('\n'), ...args)
      }
      return MD_PARSE.bind(this)(src, ...args)
    }
  })(md.parse)
}
