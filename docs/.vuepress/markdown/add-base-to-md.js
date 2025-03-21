module.exports = function (md, { base = '/' } = {}) {
  if (base !== '/') {
    md.core.ruler.after('inline', 'add-base-to-md', function (state) {
      state.tokens.forEach(function (blockToken) {
        if (blockToken.type === 'inline' && blockToken.content && blockToken.children && blockToken.children.length) {
          if (blockToken.content.indexOf('](') > -1) {
            blockToken.children.forEach(function (inlineToken) {
              if (inlineToken.type === 'link_open' && inlineToken.attrs && inlineToken.attrs.length) {
                inlineToken.attrs.forEach(function (attr) {
                  if (attr[0] === 'href') {
                    /**
                     * /abc/def.md => /abc/def.md
                     * /abc/ => /abc/
                     * /abc/def => ${base}/abc/def
                     */
                    if (attr[1].indexOf('/') === 0 && attr[1].indexOf(base) !== 0 && !attr[1].endsWith('.md') && attr[1].includes('.md#') && !attr[1].endsWith('.html') && !attr[1].endsWith('/')) {
                      attr[1] = base + attr[1].slice(1)
                    }
                    // abc/def.md => ./abc/def.md
                    if (/^\w/.test(attr[1]) && !/^\w+:/.test(attr[1])) attr[1] = './' + attr[1]
                  }
                })
              }
            })
          }
        }
      })
      return false
    })
  }
}
