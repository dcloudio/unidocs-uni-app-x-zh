<!-- ## page-container -->

<!-- UTSCOMJSON.page-container.name -->

<!-- UTSCOMJSON.page-container.description -->

page-container 的特点：
- 与普通前端popup类组件相比，page-container组件能响应返回操作。返回操作具体指：右滑手势、安卓物理返回键、和调用 `navigateBack` 接口三种返回情形。小程序未提供监听返回的API，想实现返回操作关闭弹层而不是页面，只能使用page-container组件。
- 与[dialogPage](../api/dialog-page.md)相比，`page-container` 是组件而不是页面；`page-container` 跨端，而 dialogPage 不支持小程序；dialogPage 支持覆盖pages.json中定义的顶部导航栏和tabbar，而 `page-container`不支持。

<!-- UTSCOMJSON.page-container.compatibility -->

<!-- UTSCOMJSON.page-container.attribute -->

<!-- UTSCOMJSON.page-container.event -->

<!-- UTSCOMJSON.page-container.component_type -->

### Tips
- uni ui组件库中曾广泛使用的uni-popup组件，在uni-app x中推荐改用 page-container 组件替代
- 组件支持拦截用户的返回操作，包括右滑手势、安卓物理返回键和调用 navigateBack API
- Web 设置 `overlay: true` 时，组件会禁止背景页面滚动，避免滚动穿透
- 小程序 `uni.navigateBack` 无法在页面栈顶调用，此时没有上一级页面
- 小程序不支持 `左侧弹出`，App 和 Web 支持
- 微信小程序 `enter` 和 `leave` 相关事件的回调函数有参数 `event`，App 和 Web 平台没有
- 开启 `closeOnSlideDown` 后，微信小程序需要快速下滑才生效，App 和 Web 会跟着手指拖动滑动
- 小程序页面最多只有 1 个容器，若已存在容器的情况下，无法增加新的容器。App 和 Web 支持弹出多个容器

<!-- UTSCOMJSON.page-container.children -->

<!-- UTSCOMJSON.page-container.example -->

<!-- UTSCOMJSON.page-container.reference -->
