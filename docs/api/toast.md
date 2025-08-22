---
title : uni.showToast(options)
---

<!-- ## uni.showToast(options) @showtoast -->

<!-- UTSAPIJSON.showToast.name -->

<!-- UTSAPIJSON.showToast.description -->

> Android 11 及以上版本，应用进入后台后，调用系统toast (设置了position的情况) 不弹出。 [文档地址](https://developer.android.google.cn/about/versions/11/behavior-changes-11?hl=nb#toasts)

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

- toast 行为描述
  - 在 Android、iOS 端，是和页面绑定的，当打开新页面（包括 dialogPage）时，原页面弹出的 toast 会被遮挡
  - 在 HarmonyOS 端和 Android 端设置 position 为 bottom 时，是和 App window 绑定的，当打开新页面时，原页面弹出的 toast 不会被遮挡
  - 在所有端，当前页面关闭时，弹出的 toast 都会被自动取消
