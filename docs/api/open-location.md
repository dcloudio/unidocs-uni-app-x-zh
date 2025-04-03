## uni.openLocation(options) @openlocation

::: warning 注意
- Android 和 iOS 需 HBuilderX 4.41+
- Harmony 需 HBuilderX 4.61+
- App端的 openlocation 是一个独立的UTS插件，以满足自定义需求，请前往插件市场导入插件 uni-openlocation [插件地址](https://ext.dcloud.net.cn/plugin?name=uni-openLocation)
- 在使用 uni-openlocation 插件后，无论是在Web端还是App端，通过 uni.openlocation 打开的页面会以 dialogPage 的形式呈现。此时，当你执行 getDialogPages 方法时，会发现由 openlocation 打开的页面也包含在返回的页面数组中，这属于正常现象

- `HarmonyOS平台`调用此 API 需要申请定位权限`ohos.permission.APPROXIMATELY_LOCATION`、`ohos.permission.LOCATION`，需自行在项目中配置权限。
:::

<!-- UTSAPIJSON.openLocation.description -->

<!-- UTSAPIJSON.openLocation.compatibility -->

<!-- UTSAPIJSON.openLocation.param -->

<!-- UTSAPIJSON.openLocation.returnValue -->

<!-- UTSAPIJSON.openLocation.example -->

<!-- UTSAPIJSON.openLocation.tutorial -->
