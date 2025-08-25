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

function getRegExp(key, text) {
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
      if (src && getJSON(src).match) {
        const lines = src.split(NEWLINE_CHARACTER)
        for (let index = 0; index < lines.length; index++) {
          const line = lines[index]

          const { match, json, regExp } = getJSON(line)
          if (match && regExp) {
            const jsonPath = match[1]
            const path = jsonPath.split('.')
            let temp = json
            path.forEach(key => {
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
