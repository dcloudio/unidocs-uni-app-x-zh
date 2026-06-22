const fs = require('fs')
const path = require('path')

const ROOT_DIR = path.resolve(__dirname, '..')
const DOCS_DIR = path.join(ROOT_DIR, 'docs')
const UTILS_DIR = path.join(DOCS_DIR, '.vuepress/utils')
const MISSING_PLACEHOLDER_LOG = path.join(ROOT_DIR, 'inject-json-missing-placeholders.log')
const IS_STRICT = process.argv.includes('--strict')

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

const JSON_PLACEHOLDER_REGEXP = new RegExp(
  `<!--\\s*(${Object.keys(JSON_FILES).join('|')})\\.([A-Za-z0-9_$.-]+)\\s*-->`,
  'g'
)
const EXAMPLE_PLACEHOLDER_REGEXP = /<!--\s*EXAMPLEJSON\.([A-Za-z0-9_$.-]+)\s*-->/g

function readJson(fileName) {
  return JSON.parse(fs.readFileSync(path.join(UTILS_DIR, fileName), 'utf8'))
}

function walkMarkdownFiles(dir, result = []) {
  for (const name of fs.readdirSync(dir)) {
    const filePath = path.join(dir, name)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkMarkdownFiles(filePath, result)
    } else if (filePath.endsWith('.md')) {
      result.push(filePath)
    }
  }
  return result
}

function getValueByPath(json, jsonPath) {
  return jsonPath.split('.').reduce((temp, key) => {
    if (temp == null) return undefined
    return temp[key]
  }, json)
}

function checkJsonPlaceholder(jsonMap, filePath, line, lineNumber, missing) {
  JSON_PLACEHOLDER_REGEXP.lastIndex = 0
  let match
  while ((match = JSON_PLACEHOLDER_REGEXP.exec(line))) {
    const prefix = match[1]
    const jsonPath = match[2]
    const value = getValueByPath(jsonMap[prefix], jsonPath)
    if (typeof value === 'undefined') {
      missing.push({
        filePath,
        lineNumber,
        placeholder: `${prefix}.${jsonPath}`
      })
    }
  }
}

function checkExamplePlaceholder(exampleMapping, filePath, line, lineNumber, missing) {
  EXAMPLE_PLACEHOLDER_REGEXP.lastIndex = 0
  let match
  while ((match = EXAMPLE_PLACEHOLDER_REGEXP.exec(line))) {
    const fullKey = match[1]
    const dotIndex = fullKey.indexOf('.')
    if (dotIndex === -1) {
      missing.push({ filePath, lineNumber, placeholder: `EXAMPLEJSON.${fullKey}` })
      continue
    }

    const entryKey = fullKey.slice(0, dotIndex)
    const exampleName = fullKey.slice(dotIndex + 1)
    const entry = exampleMapping[entryKey]
    if (!entry || typeof entry !== 'object' || !entry[exampleName]) {
      missing.push({ filePath, lineNumber, placeholder: `EXAMPLEJSON.${fullKey}` })
    }
  }
}

function loadJsonMap() {
  const jsonMap = {}
  for (const [prefix, fileName] of Object.entries(JSON_FILES)) {
    jsonMap[prefix] = readJson(fileName)
  }
  return jsonMap
}

function writeLog(lines) {
  fs.writeFileSync(MISSING_PLACEHOLDER_LOG, `${lines.join('\n')}\n`)
}

function main() {
  const jsonMap = loadJsonMap()
  const exampleMapping = readJson('example-mapping.json')
  const missing = []
  const files = walkMarkdownFiles(DOCS_DIR)
  let total = 0

  for (const filePath of files) {
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/)
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index]
      JSON_PLACEHOLDER_REGEXP.lastIndex = 0
      EXAMPLE_PLACEHOLDER_REGEXP.lastIndex = 0
      total += (line.match(JSON_PLACEHOLDER_REGEXP) || []).length
      total += (line.match(EXAMPLE_PLACEHOLDER_REGEXP) || []).length
      checkJsonPlaceholder(jsonMap, filePath, line, index + 1, missing)
      checkExamplePlaceholder(exampleMapping, filePath, line, index + 1, missing)
    }
  }

  if (missing.length > 0) {
    const summary = `[check-md-placeholders] missing placeholders: ${missing.length}/${total}`
    const logLines = [summary]
    for (const item of missing) {
      logLines.push(`${item.filePath}:${item.lineNumber} ${item.placeholder}`)
    }
    writeLog(logLines)
    console.log(`${summary}, see ${path.relative(ROOT_DIR, MISSING_PLACEHOLDER_LOG)}`)
    if (IS_STRICT) {
      process.exitCode = 1
    }
    return
  }

  const summary = `[check-md-placeholders] all placeholders resolved: ${total}`
  writeLog([summary])
  console.log(`${summary}, see ${path.relative(ROOT_DIR, MISSING_PLACEHOLDER_LOG)}`)
}

main()
