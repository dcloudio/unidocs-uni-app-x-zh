---
title : uni.showToast(options)
---

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

- toast 行为描述
  - 在 Android 端并且 position 字段生效时，页面打开关闭行为不会影响 toast 的显示
  - 在 HarmonyOS 端，是系统 toast 和 App window 绑定，页面打开关闭行为不会影响 toast 的显示
  - 当打开新页面（包括 dialogPage）
    - 在 Android、iOS 端，toast 行为与页面绑定，原页面弹出的 toast 会被遮挡 (Android 端 position 字段生效时除外)
  - 关闭页面时
    - 在除 HarmonyOS 端和 Android 端 position 字段生效外，弹出的 toast 都会被自动取消
  - Android 11 及以上版本，应用进入后台后，调用系统 toast (position 字段生效时) 不弹出。 [文档地址](https://developer.android.google.cn/about/versions/11/behavior-changes-11?hl=nb#toasts)
