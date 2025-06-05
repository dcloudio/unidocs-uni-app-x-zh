## uni.onUserCaptureScreen(callback?) @onusercapturescreen

<!-- UTSAPIJSON.onUserCaptureScreen.description -->

<!-- UTSAPIJSON.onUserCaptureScreen.compatibility -->

<!-- UTSAPIJSON.onUserCaptureScreen.param -->

<!-- UTSAPIJSON.onUserCaptureScreen.returnValue -->

<!-- UTSAPIJSON.onUserCaptureScreen.tutorial -->

## uni.offUserCaptureScreen(callback?) @offusercapturescreen

<!-- UTSAPIJSON.offUserCaptureScreen.description -->

<!-- UTSAPIJSON.offUserCaptureScreen.compatibility -->

<!-- UTSAPIJSON.offUserCaptureScreen.param -->

<!-- UTSAPIJSON.offUserCaptureScreen.returnValue -->

<!-- UTSAPIJSON.offUserCaptureScreen.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## uni.setUserCaptureScreen(options) @setusercapturescreen

<!-- UTSAPIJSON.setUserCaptureScreen.description -->

<!-- UTSAPIJSON.setUserCaptureScreen.compatibility -->

<!-- UTSAPIJSON.setUserCaptureScreen.param -->

<!-- UTSAPIJSON.setUserCaptureScreen.returnValue -->

<!-- UTSAPIJSON.setUserCaptureScreen.example -->

<!-- UTSAPIJSON.setUserCaptureScreen.tutorial -->

<!-- UTSAPIJSON.captureScreen.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## tips
- 本文的截屏指手机自带的截屏事件的监听和取消监听，由用户操作手机按键触发。App平台如需通过代码对view截屏，另见API [takeSnapshot](../dom/unielement.md#takesnapshot)
- iOS平台该API在iOS 13.0及以上系统支持,在iOS 13.0以下系统调用该API会返回12001:system not support的错误。
- 因iOS 15.1系统bug，在该系统上调用此API会返回12010:system internal error的错误。
- Android平台在某些页面暂不支持（如：图片选择、图片预览、一键登录等页面以及App原生插件内部原生页面）。
- `HarmonyOS` 平台使用时需要添加受限开放权限 [ohos.permission.PRIVACY_WINDOW](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/restricted-permissions-V5#section498771912414?ha_source=Dcloud&ha_sourceId=89000448)
