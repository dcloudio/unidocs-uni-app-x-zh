<!-- ## uni.showLoading(options) @showloading -->

<!-- UTSAPIJSON.showLoading.name -->

<!-- UTSAPIJSON.showLoading.description -->

它是一个悬浮弹出的、非组件内嵌的加载中提示。

<!-- UTSAPIJSON.showLoading.compatibility -->

<!-- UTSAPIJSON.showLoading.param -->

<!-- UTSAPIJSON.showLoading.returnValue -->

<!-- UTSAPIJSON.showLoading.example -->

<!-- UTSAPIJSON.showLoading.tutorial -->

<!-- ## uni.hideLoading() @hideloading -->

<!-- UTSAPIJSON.hideLoading.name -->

<!-- UTSAPIJSON.hideLoading.description -->

<!-- UTSAPIJSON.hideLoading.compatibility -->

<!-- UTSAPIJSON.hideLoading.param -->

<!-- UTSAPIJSON.hideLoading.returnValue -->

<!-- UTSAPIJSON.hideLoading.example -->

<!-- UTSAPIJSON.hideLoading.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips@tips

* 关于uni.showLoading和[loading组件](../component/loading.md)的区别：
	+ showLoading是一个简易的API，使用简单。因为它悬浮在页面上方、让页面整体失去响应。主流的App较少使用这种方式。
	+ loading组件是内置组件，无需在页面显式引入，可以嵌入页面中、按钮中。
* 从HBuilderX 5.0+，在App和Web平台，showLoading统一成一套代码，使用dialogPage的页面中显示一个loading组件来实现。dialogPage是模态的，不支持点击空白消失，但支持back关闭。需要非模态的使用场景时，请在页面中直接使用[loading组件](../component/loading.md)。
* showLoading 是和页面（包括 dialogPage）绑定的。
	+ 当showLoading执行时，会寻找当前页面栈顶的窗体（包括 dialogPage），找到后进行绑定，然后弹出loading。
	+ 在弹出loading后，再次打开新页面，新页面会覆盖原页面弹出的 loading。
		+ 如需在新页面（包括 dialogPage）弹出 loading，需要再次调用 showLoading
* 在HBuilderX 5.0以前，HarmonyOS 平台，showLoading 是和 App window 绑定的，目前未与页面关联，当打开新页面时，原页面弹出的 loading 不会被遮挡。HBuilderX 5.0拉齐了实现，与上条策略一致。
* 当前页面（包括 dialogPage）关闭时，弹出的 loading 都会被自动取消
	+ 如需在dialogPage关闭后，仍然弹出 Loading，需要在关闭dialogPage后再次调用 showLoading
+ 注意在支持 dialogPage 的平台（Web和App），[uni.showModal](./modal.md)、[uni.showActionSheet](./action-sheet.md) 也是 dialogPage 实现的，此时 showLoading 会绑定到这些 dialogPage 上
