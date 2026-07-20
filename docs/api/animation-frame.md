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

## 高刷专题@High-refresh-rate

早期手机的刷新率为60Hz，后来陆续出现90Hz、120Hz、144Hz等更高刷新率。

更高的刷新率意味着UI更丝滑，但也更费电。

60Hz的刷新率是16.6ms绘制一帧图像，而120高刷是8.3ms绘制一帧。

如何在流畅和节电之间取舍，是手机系统厂商、app开发者、最终用户的3方平衡，在不同手机系统中的表现也不相同。

通用的规则有：
1. 手机进入节能模式时，会关闭高刷
2. 部分手机提供给用户手动开启/关闭高刷的设置
3. 除非在节能模式下，否则应用在滚动时会自动开启高刷，这点无需应用申请
4. 某些动画、帧回调API，需要应用开发者主动申请高刷。但手机厂商仍然会选择性允许，这种选择规则各厂商不同且大多不公开，可能存在包名白名单。而如果应用不申请，则这些API无法获取到高刷的细腻体验。

具体到uni-app x的情况：
- iOS平台，从HBuilderX 5.21+，requestAnimationFrame 接口支持申请高刷新率。css动画和UniElement.animate动画一直支持高刷。web-view组件，被iOS强制限制在60Hz，网页内无法体验高刷。
- 安卓和鸿蒙平台，从HBuilderX 5.22+，requestAnimationFrame 以及 CSS 动画和UniElement.animate动画支持申请高刷。
- 暂未提供关闭申请高刷的设置

注意无论哪个平台，最终高刷是否生效仍受手机系统策略以及用户设置影响。

