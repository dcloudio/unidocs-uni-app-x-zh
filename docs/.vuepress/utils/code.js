const APP_REDIRECT_KEYWORD = 'appRedirect'

function createAppRedirectInPreviewContainer(appRedirectPagePath) {
  return `> ${APP_REDIRECT_KEYWORD} https://hellouniappx.dcloud.net.cn/appredirect.html?path=${appRedirectPagePath}`
}

/**
 * @param {string} code
 * @param {string} lang
 * @param {{ ext?: string }} [opts]
 * @returns {string}
 */
function codeBlock(code, lang, opts) {
  return `\`\`\`${lang || ''}${opts?.ext ? ` ${opts.ext}` : ''}\n${code}\n\`\`\``
}

/**
 * @param {string} lang
 * @param {string} code
 * @param {string} [appRedirectPagePath]
 * @returns {string}
 */
const createCode = (lang, code, appRedirectPagePath) => {
  if (!code) return 'code 为空'
  const normalizeCode = codeBlock(code, lang)
  if (appRedirectPagePath) {
    return ['\n::: preview', createAppRedirectInPreviewContainer(appRedirectPagePath), normalizeCode, ':::'].join('\n')
  }
  return normalizeCode
}

/**
 * @typedef {{ name: string, lang: string, code: string }} PreviewCodeItem
 */

/**
 * @param {PreviewCodeItem[]} previewCodeItems
 * @param {string} [url]
 * @param {string} [appRedirectPagePath]
 * @returns {string}
 */
const createPreviewCode = (previewCodeItems, url = '', appRedirectPagePath) => {
  const res = [`::: preview ${url}`]

  if (appRedirectPagePath) {
    res.push(createAppRedirectInPreviewContainer(appRedirectPagePath))
  }
  previewCodeItems.forEach(item => {
    res.push(`>${item.name}\n${createCode(item.lang, item.code)}`)
  })

  res.push(':::')

  return res.join('\n\n')
}

module.exports = {
  codeBlock,
  createCode,
  createPreviewCode
}
