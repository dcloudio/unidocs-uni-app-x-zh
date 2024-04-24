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
try {
  cssJson = require('../utils/cssJson.json')
} catch (error) {}
try {
  utsJson = require('../utils/utsJson.json')
} catch (error) {}
try {
  utsApiJson = require('../utils/utsApiJson.json')
} catch (error) {}
try {
  utsComJson = require('../utils/utsComJson.json')
} catch (error) {}
try {
  utsUnicloudApiJson = require('../utils/utsUnicloudApiJson.json')
} catch (error) {}
try {
  customTypeJson = require('../utils/customTypeJson.json')
} catch (error) {}
try {
  vueJson = require('../utils/vueJson.json')
} catch (error) {}
try {
  manifestJson = require('../utils/manifestJson.json')
} catch (error) {}
try {
  pagesJson = require('../utils/pagesJson.json')
} catch (error) {}
try {
  specialStringJson = require('../utils/specialStringJson.json')
} catch (error) {}
try {
  pageInstanceJson = require('../utils/pageInstanceJson.json')
} catch (error) {}

function getRegExp(key) {
  return new RegExp(`<!--\\s*${key}.([\\w\\W]+[^\\s])\\s*-->`)
}

/**
 *
 * @param {string} text
 * @returns {{match: RegExpMatchArray | null, json: {}}
 */
const getJSON = text => {
  let match = text.match(getRegExp('CSSJSON'))
  if (match) {
    return {
      match,
      json: cssJson,
    }
  }

  match = text.match(getRegExp('UTSJSON'))
  if (match) {
    return {
      match,
      json: utsJson,
    }
  }

  match = text.match(getRegExp('UTSAPIJSON'))
  if (match) {
    return {
      match,
      json: utsApiJson,
    }
  }

  match = text.match(getRegExp('UTSCOMJSON'))
  if (match) {
    return {
      match,
      json: utsComJson,
    }
  }

  match = text.match(getRegExp('UTSUNICLOUDAPIJSON'))
  if (match) {
    return {
      match,
      json: utsUnicloudApiJson,
    }
  }

  match = text.match(getRegExp('CUSTOMTYPEJSON'))
  if (match) {
    return {
      match,
      json: customTypeJson,
    }
  }

  match = text.match(getRegExp('VUEJSON'))
  if (match) {
    return {
      match,
      json: vueJson,
    }
  }

  match = text.match(getRegExp('MANIFESTJSON'))
  if (match) {
    return {
      match,
      json: manifestJson,
    }
  }

  match = text.match(getRegExp('PAGESJSON'))
  if (match) {
    return {
      match,
      json: pagesJson,
    }
  }

  match = text.match(getRegExp('SPECIALSTRINGJSON'))
  if (match) {
    return {
      match,
      json: specialStringJson,
    }
  }

  match = text.match(getRegExp('PAGEINSTANCE'))
  if (match) {
    return {
      match,
      json: pageInstanceJson,
    }
  }

  return {
    match: null,
    json: {},
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

          const { match, json } = getJSON(line)
          if (match) {
            const jsonPath = match[1]
            const path = jsonPath.split('.')
            let temp = json
            path.forEach(key => {
              if (!temp) return false
              temp = temp[key]
            })
            if (!temp) continue
            lines[index] = temp
          }
        }

        return MD_PARSE.bind(this)(lines.join('\n'), ...args)
      }
      return MD_PARSE.bind(this)(src, ...args)
    }
  })(md.parse)
}
