
const fs = require('fs');
const path = require('path');
const { parse: jsoncParse } = require('jsonc-parser');
const { preprocess } = require('@dcloudio/uni-preprocess');

const { createPreviewCode, createCode } = require('./code');

function processSubPackages(pagesJsonStr) {
  const pagesJson = jsoncParse(pagesJsonStr)
  if (Array.isArray(pagesJson.subPackages)) {
    pagesJson.subPackages.forEach(subPackage => {
      if (Array.isArray(subPackage.pages)) {
        let root = subPackage.root
        if (root.endsWith('/')) {
          root = root.slice(0, -1)
        }
        subPackage.pages.forEach(page => {
          pagesJson.pages.push({
            ...page,
            path: path.posix.join(root, page.path)
          })
        })
      }
    })
    delete pagesJson.subPackages
  }
  return JSON.stringify(pagesJson, null, 2)
}

// 缓存每个项目路径对应的 pagesJsonStr
const _pagesJsonCache = {}
function getPagesJsonStr(projectPath) {
  if (_pagesJsonCache[projectPath]) return _pagesJsonCache[projectPath]
  const pagesJsonPath = path.posix.join(projectPath, 'pages.json')
  const originPagesJson = fs.readFileSync(pagesJsonPath, 'utf-8')
  const pagesJsonWeb = processSubPackages(
    preprocess(
      originPagesJson,
      { context: { APP: false, APP_ANDROID: false, APP_HARMONY: false, APP_IOS: false,  VUE3_VAPOR: false, H5: true, WEB: true }, type: 'js' }
    ).code
  )
  const pagesJsonApp = processSubPackages(
    preprocess(
      originPagesJson,
      { context: { APP: true, APP_ANDROID: true, APP_HARMONY: true, APP_IOS: true, VUE3_VAPOR: true, H5: false, WEB: false }, type: 'js' }
    ).code
  )
  const result = { pagesJsonWeb, pagesJsonApp }
  _pagesJsonCache[projectPath] = result
  return result
}

/**
 * 获取示例文件内容及 pages.json 匹配信息。
 * 从 getHelloUniAppXExample 改造而来，支持 _projects 中的任意项目。
 *
 * @param {string} pagePath  pages.json 中的页面目录，如 "pages/component/text"
 * @param {object} [projectConfig] 项目配置对象，包含 path/webPath/gitCodePath 等字段，若不传则使用默认项目
 */
function getExample(pagePath, projectConfig) {
  if (!projectConfig || !projectConfig.path) return null

  const { pagesJsonWeb, pagesJsonApp } = getPagesJsonStr(projectConfig.path)
  const pagePathWithoutExtra = pagePath.replace(/^\//, '').replace(/\.uvue$/, '')

  const isInWebPagesJson = pagesJsonWeb.includes(`${pagePathWithoutExtra}"`)
  const isInAppPagesJson = pagesJsonApp.includes(`${pagePathWithoutExtra}"`)

  const uvuePath = path.posix.join(projectConfig.path, pagePath)
  let content
  try {
    content = fs.readFileSync(uvuePath, 'utf-8')
  } catch (e) {
    return null
  }

  // 示例代码之前
  const before = [
    `示例为[hello uni-app x alpha分支](${projectConfig.gitCodePath}/${pagePath})，与最新HBuilderX Alpha版同步`,
    ''
  ]
  let res = before.join('\n')

  let preview = ''
  if (isInWebPagesJson) {
    const previewItems = [{ name: '示例', lang: 'uvue', code: content }]
    preview = createPreviewCode(
      previewItems,
      `${projectConfig.webPath}/${pagePathWithoutExtra}`,
      isInAppPagesJson ? pagePathWithoutExtra : undefined
    )
  } else {
    res = `${res}>\n> 不支持 Web，请运行 hello uni-app x 到 App 平台体验 \n`
    preview = `${createCode('uvue', content, isInAppPagesJson ? pagePathWithoutExtra : undefined)}`
  }

  if (preview.length > 0) {
    return res + preview
  }
  return ''
}

module.exports = {
  getPagesJsonStr,
  getExample
}
