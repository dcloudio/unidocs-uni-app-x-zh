const routerMap = {
  '/api/show-modal.html': '/uni-app-x/api/modal.html',
  '/api/show-action-sheet.html': '/uni-app-x/api/action-sheet.html',
  '/api/show-loading.html': '/uni-app-x/api/loading.html',
  '/api/show-toast.html': '/uni-app-x/api/toast.html',
  '/api/capturescreen.html': '/uni-app-x/api/capture-screen.html',
  '/api/facial-recognition-verify.html': '/uni-app-x/api/facial-recognition-meta-info.html',
  '/api/get-element.html': '/uni-app-x/api/get-element-by-id.html',
  '/api/get-launch-options-sync.html': '/uni-app-x/api/launch.html',
  '/api/get-provider.html': '/uni-app-x/api/provider.html',
  '/api/nodes-info.html': '/uni-app-x/api/create-selector-query.html',
  '/api/set-tabbar.html': '/uni-app-x/api/set-tab-bar.html',
  '/api/theme.html': '/uni-app-x/api/theme-change.html',
  '/api/websocket-global.html': '/uni-app-x/api/websocket.html',
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
