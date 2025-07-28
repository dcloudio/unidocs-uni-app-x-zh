const PREFIX = '/uni-app-x'

const routerMap = {
  '/api/show-modal.html': `${PREFIX}/api/modal.html`,
  '/api/show-action-sheet.html': `${PREFIX}/api/action-sheet.html`,
  '/api/show-loading.html': `${PREFIX}/api/loading.html`,
  '/api/show-toast.html': `${PREFIX}/api/toast.html`,
  '/api/capturescreen.html': `${PREFIX}/api/capture-screen.html`,
  '/api/facial-recognition-verify.html': `${PREFIX}/api/facial-recognition-meta-info.html`,
  '/api/get-element.html': `${PREFIX}/api/get-element-by-id.html`,
  '/api/get-launch-options-sync.html': `${PREFIX}/api/launch.html`,
  '/api/get-provider.html': `${PREFIX}/api/provider.html`,
  '/api/nodes-info.html': `${PREFIX}/api/create-selector-query.html`,
  '/api/set-tabbar.html': `${PREFIX}/api/set-tab-bar.html`,
  '/api/theme.html': `${PREFIX}/api/theme-change.html`,
  '/api/websocket-global.html': `${PREFIX}/api/websocket.html`,
}

export default ({ fullPath, path, hash }) => {
  fullPath = decodeURIComponent(fullPath)
  const matchFullPath = routerMap[fullPath.replace('?id=', '#').replace('.html', '')];
  if (matchFullPath) {
    return {
      path: matchFullPath,
      replace: true
    }
  }

  const matchPath = routerMap[path] || routerMap[path.replace('.html', '')]
  if (matchPath) {
    return {
      path: matchPath,
      hash,
      replace: true
    }
  }


  const routerMapKeys = Object.keys(routerMap)
  let returnPathConfig = null
  routerMapKeys.forEach(key => {
    if (path.indexOf(key) === 0 && routerMap[key].indexOf(key) !== 0 && routerMap[key] !== path) {
      return returnPathConfig = {
        path: path.replace(key, routerMap[key]),
        hash,
        replace: true
      }
    }
  })
  if (returnPathConfig) return returnPathConfig
}
