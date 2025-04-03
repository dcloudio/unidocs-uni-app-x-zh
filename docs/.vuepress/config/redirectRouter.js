const routerMap = {
  '/api/show-modal': '/uni-app-x/api/modal.html',
  '/api/show-action-sheet': '/uni-app-x/api/action-sheet.html',
  '/api/show-loading': '/uni-app-x/api/loading.html',
  '/api/show-toast': '/uni-app-x/api/toast.html',
  '/api/capturescreen': '/uni-app-x/api/capture-screen.html',
  '/api/facial-recognition-verify': '/uni-app-x/api/facial-recognition-meta-info.html',
  '/api/get-element': '/uni-app-x/api/get-element-by-id.html',
  '/api/get-launch-options-sync': '/uni-app-x/api/launch.html',
  '/api/get-provider': '/uni-app-x/api/provider.html',
  '/api/nodes-info': '/uni-app-x/api/create-selector-query.html',
  '/api/set-tabbar': '/uni-app-x/api/set-tab-bar.html',
  '/api/theme': '/uni-app-x/api/theme-change.html',
  '/api/websocket-global': '/uni-app-x/api/websocket.html',
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
