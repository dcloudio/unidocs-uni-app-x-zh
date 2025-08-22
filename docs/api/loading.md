---
title : uni.showLoading(options)
---

<!-- ## uni.showLoading(options) @showloading -->

<!-- UTSAPIJSON.showLoading.name -->

<!-- UTSAPIJSON.showLoading.description -->

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

- loading 行为描述
  - 在 Android、iOS 端，是和页面绑定的，当打开新页面（包括 dialogPage）时，原页面弹出的 loading 会被遮挡
  - 在 HarmonyOS 端，是和 App window 绑定的，当打开新页面时，原页面弹出的 loading 不会被遮挡
  - 在所有端，当前页面关闭时，弹出的 loading 都会被自动取消
