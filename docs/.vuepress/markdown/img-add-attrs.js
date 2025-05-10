module.exports = function (md, opts) {
  const oldRendererImageRule = md.renderer.rules.image
  md.renderer.rules.image = function (tokens, idx, ...args) {
    var token = tokens[idx]
    var url = token.attrGet('src')
    if (!token.attrGet('loading') && matchSrc(url)) {
      token.attrPush(['loading', 'lazy'])
    }
    return oldRendererImageRule(tokens, idx, ...args)
  }
  md.core.ruler.after('inline', 'image-attrs', function (state) {
    let joinTokenContent = false
    let handleToken = null
    for (let i = 0; i < state.tokens.length; i++) {
      const token = state.tokens[i]
      if (token.type === 'html_block') {
        if (joinTokenContent && handleToken) {
          handleToken.content += token.content
          state.tokens.splice(i, 1)
          i--
        } else {
          if (i === state.tokens.length - 1) {
            // 如果是最后一个token，直接替换
            replaceHTML(token, addLoadingAttr, state.env)
          } else {
            joinTokenContent = true
            handleToken = token
          }
        }
      } else {
        joinTokenContent = false
        if (handleToken) {
          replaceHTML(handleToken, addLoadingAttr, state.env)
        }
        handleToken = null
      }
    }
    return false
  })
}

/**
 *
 * @param {Record<string,any>} attribs
 */
function addLoadingAttr(attribs) {
  if (matchSrc(attribs.src) && !attribs.loading) {
    attribs.loading = 'lazy'
  }
}

/**
 *
 * @param {string} [src] img src
 * @returns
 */
function matchSrc(src) {
  return typeof src === 'string' ? src.indexOf('qiniu-web-assets.dcloud.net.cn') > -1 || src.indexOf('web-ext-storage.dcloud.net.cn') > -1 : false
}

function replaceNodes(nodes, replace, env, token) {
  if (!nodes) return
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    if (node.attribs) {
      if (node.name === 'img' && node.attribs.src) {
        replace(node.attribs)
      }
    }
    replaceNodes(node.children, replace, env, token)
  }
}

function replaceHTML(token, replace, env) {
  const htmlparser = require('htmlparser2')
  const serializer = require('dom-serializer')
  const dom = new htmlparser.parseDocument(token.content, {
    lowerCaseTags: false,
    recognizeCDATA: true,
    recognizeSelfClosing: true,
  })
  replaceNodes(dom.children, replace, env, token)
  token.content = serializer.render(dom, { encodeEntities: 'utf8', xmlMode: 'foreign' })
}
