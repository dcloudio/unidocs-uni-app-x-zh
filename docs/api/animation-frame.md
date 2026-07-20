### requestAnimationFrame(callback)@requestanimationframe

<!-- UTSJSON.Global.requestAnimationFrame.description -->

<!-- UTSJSON.Global.requestAnimationFrame.param -->

<!-- UTSJSON.Global.requestAnimationFrame.returnValue -->

<!-- UTSJSON.Global.requestAnimationFrame.test -->

<!-- UTSJSON.Global.requestAnimationFrame.compatibility -->

<!-- UTSJSON.Global.requestAnimationFrame.tutorial -->

### cancelAnimationFrame(taskId) @cancelanimationframe

<!-- UTSJSON.Global.cancelAnimationFrame.description -->

<!-- UTSJSON.Global.cancelAnimationFrame.param -->

<!-- UTSJSON.Global.cancelAnimationFrame.returnValue -->

<!-- UTSJSON.Global.cancelAnimationFrame.test -->

<!-- UTSJSON.Global.cancelAnimationFrame.compatibility -->

<!-- UTSJSON.Global.cancelAnimationFrame.tutorial -->

<!-- CUSTOMTYPEJSON.animation-frame.example -->

**提示**
- requestAnimationFrame/cancelAnimationFrame 为全局 API，如果需要跨平台处理 canvas 动画应使用 [uni.createCanvasContextAsync](./create-canvas-context-async.md)
- `Android uni-app x` requestAnimationframe 目前仅支持有参数callback，示例：`requestAnimationFrame((timestamp : number) => {})`
- HBuilderX 5.21 及以上版本 iOS 平台的 requestAnimationFrame 接口支持使用高刷新率
- HBuilderX 5.22 及以上版本 安卓/鸿蒙 应用启动后即申请最高刷新率，影响 requestAnimationFrame 以及 CSS 动画。鸿蒙平台受系统策略以及用户设置影响应用申请最高刷新率最终不一定得到最高刷新率。