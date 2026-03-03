## page-container

<!-- UTSCOMJSON.page-container.description -->

<!-- UTSCOMJSON.page-container.compatibility -->

<!-- UTSCOMJSON.page-container.attribute -->

<!-- UTSCOMJSON.page-container.event -->

<!-- UTSCOMJSON.page-container.component_type -->

- 组件支持拦截用户的返回操作，包括右滑手势、安卓物理返回键和调用 navigateBack API
- Web 设置 `overlay: true` 时，组件会禁止背景页面滚动，避免滚动穿透
- 微信小程序 `uni.navigateBack` 无法在页面栈顶调用，此时没有上一级页面
- 微信小程序 `enter` 和 `leave` 相关事件的回调函数有参数 `event`，App 和 Web 平台没有
- 微信小程序不支持 `左侧弹出`，App 和 Web 支持
- 开启 `closeOnSlideDown` 后，微信小程序需要快速下滑才生效，App 和 Web 会跟着手指拖动滑动

<!-- UTSCOMJSON.page-container.children -->

<!-- UTSCOMJSON.page-container.example -->

<!-- UTSCOMJSON.page-container.reference -->

