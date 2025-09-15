<!-- ## uni.showToast(options) @showtoast -->

<!-- UTSAPIJSON.showToast.name -->

<!-- UTSAPIJSON.showToast.description -->

<!-- UTSAPIJSON.showToast.compatibility -->

<!-- UTSAPIJSON.showToast.param -->

<!-- UTSAPIJSON.showToast.returnValue -->

<!-- UTSAPIJSON.showToast.example -->

<!-- UTSAPIJSON.showToast.tutorial -->

<!-- ## uni.hideToast() @hidetoast -->

<!-- UTSAPIJSON.hideToast.name -->

<!-- UTSAPIJSON.hideToast.description -->

<!-- UTSAPIJSON.hideToast.compatibility -->

<!-- UTSAPIJSON.hideToast.param -->

<!-- UTSAPIJSON.hideToast.returnValue -->

<!-- UTSAPIJSON.hideToast.example -->

<!-- UTSAPIJSON.hideToast.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Bug & Tips@tips
- 在 iOS、微信小程序、Web 平台，showToast 是和页面（包括 dialogPage）绑定的
- 在 Android 平台
	* position 设为 bottom 时，为系统toast，此时与 App 绑定，而不是与页面绑定。position 不为 bottom 时仍与页面绑定
	* 系统toast 不支持 icon 图标，仅支持文字
	* 部分 Android ROM，如 MIUI，调用系统 toast 时，会在 toast 行首自动加上 App 图标。此为 ROM 行为，目的是帮助用户区分该 toast 是哪个 App 弹出的
- 在 HarmonyOS 平台，目前只有系统 toast ，和 App window 绑定
- 当 Toast 和页面绑定时：
  + 当showToast执行时，会寻找当前页面栈顶的窗体（包括 dialogPage），找到后进行绑定，然后弹出 Toast。
	+ 在支持 dialogPage 的平台（Web和App），[uni.showModal](./modal.md)、[uni.showActionSheet](./action-sheet.md) 也是 dialogPage 实现的，此时 toast 会绑定到这些 dialogPage 上
	+ 在弹出 Toast 后，再次打开新页面，新页面会覆盖原页面弹出的 Toast。
		+ 如需在新页面（包括 dialogPage）弹出 Toast，需要再次调用 showToast
  + 关闭页面（包括 dialogPage）时，Toast 会跟随页面（包括 dialogPage）一起消失
		+ 如需在dialogPage关闭后，仍然弹出 Toast，需要在关闭dialogPage后再次调用 showToast
- 当 Toast 和应用绑定时，也即系统 toast：
	弹出和关闭页面，系统 toast 都不会跟随页面被遮挡或消失。
- Android 11 及以上版本，应用进入后台后，调用系统 toast 不弹出。 [文档地址](https://developer.android.google.cn/about/versions/11/behavior-changes-11?hl=nb#toasts)
- showToast 里的 Loading，和 showLoading 的区别是，showLoading 需要手动调用 HideLoading 才会关闭。而 showToast 里的 Loading 显示指定时间后会自动关闭。一般情况都需要精准控制关闭时机，所以大多使用 showLoading 和 hideLoading
