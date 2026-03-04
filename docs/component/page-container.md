<!-- ## page-container -->

<!-- UTSCOMJSON.page-container.name -->

<!-- UTSCOMJSON.page-container.description -->

`page-container` 是跨平台弹层容器组件，具备以下特点：

- 该组件支持多种弹出位置，可自定义层级、弹出层样式和遮罩层样式，支持进入前/中/后与离开前/中/后等生命周期事件，同时可覆盖底部导航栏（tabBar）
- 普通弹层组件和 `dialogPage` 在用户进行返回操作时，往往会关闭弹层并执行页面返回；而 `page-container` 组件会拦截右滑手势、安卓物理返回键、和调用 `navigateBack` 接口三种返回情形，只关闭容器本身，不离开当前页面。

<!-- UTSCOMJSON.page-container.compatibility -->

<!-- UTSCOMJSON.page-container.attribute -->

<!-- UTSCOMJSON.page-container.event -->

<!-- UTSCOMJSON.page-container.component_type -->

### 注意事项

- 组件支持拦截用户的返回操作，包括右滑手势、安卓物理返回键和调用 navigateBack API
- Web 设置 `overlay: true` 时，组件会禁止背景页面滚动，避免滚动穿透
- 微信小程序 `uni.navigateBack` 无法在页面栈顶调用，此时没有上一级页面
- 微信小程序 `enter` 和 `leave` 相关事件的回调函数有参数 `event`，App 和 Web 平台没有
- 微信小程序不支持 `左侧弹出`，App 和 Web 支持
- 开启 `closeOnSlideDown` 后，微信小程序需要快速下滑才生效，App 和 Web 会跟着手指拖动滑动
- 微信小程序页面最多只有 1 个容器，若已存在容器的情况下，无法增加新的容器，App 和 Web 支持弹出多个容器

<!-- UTSCOMJSON.page-container.children -->

<!-- UTSCOMJSON.page-container.example -->

<!-- UTSCOMJSON.page-container.reference -->
