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

**提示**
- requestAnimationFrame/cancelAnimationFrame 为全局 API，如果需要跨平台处理 canvas 动画应使用 [uni.createCanvasContextAsync](./create-canvas-context-async.md)
- `Android uni-app x` requestAnimationframe 目前仅支持有参数callback，示例：`requestAnimationFrame((timestamp : number) => {})`
