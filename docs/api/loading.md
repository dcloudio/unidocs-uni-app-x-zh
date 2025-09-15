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

## Bug & Tips@tips

* 在 Android、iOS、微信小程序、Web 平台，showLoading 是和页面（包括 dialogPage）绑定的。
	+ 当showLoading执行时，会寻找当前页面栈顶的窗体（包括 dialogPage），找到后进行绑定，然后弹出loading。
	+ 在弹出loading后，再次打开新页面，新页面会覆盖原页面弹出的 loading。
		+ 如需在新页面（包括 dialogPage）弹出 loading，需要再次调用 showLoading
* 在 HarmonyOS 平台，showLoading 是和 App window 绑定的，目前未与页面关联，当打开新页面时，原页面弹出的 loading 不会被遮挡。
	+ 未来 harmonyOS 平台也会提供与页面绑定的 showLoading
* 在所有平台，当前页面（包括 dialogPage）关闭时，弹出的 loading 都会被自动取消
	+ 如需在dialogPage关闭后，仍然弹出 Loading，需要在关闭dialogPage后再次调用 showLoading
+ 注意在支持 dialogPage 的平台（Web和App），[uni.showModal](./modal.md)、[uni.showActionSheet](./action-sheet.md) 也是 dialogPage 实现的，此时 showLoading 会绑定到这些 dialogPage 上
