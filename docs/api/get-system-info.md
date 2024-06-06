## uni.getSystemInfo(options) @getsysteminfo

> HBuilderX4.13-alpha版本，uniPlatform属性在 app 平台临时调整过，由 `app` 改为 `app-android`、`app-ios`，HBuilderX 4.14-alpha版本已回撤此调整。如果开发者使用HBuilderX4.13-alpha版发布项目时使用了uni-id-common、uni-id、uni-id-pages或uni-id-pages-x，则需要分别升级到如下版本来兼容此次临时调整：uni-id@3.3.32、uni-id-common@1.0.17、uni-id-pages@1.1.20、uni-id-pages-x@1.1.1

<!-- UTSAPIJSON.getSystemInfo.description -->

<!-- UTSAPIJSON.getSystemInfo.compatibility -->

uni-app 提供了异步(`uni.getSystemInfo`)和同步(`uni.getSystemInfoSync`)的2个API获取系统信息。

按照运行环境层级排序，从底层向上，systemInfo有6个概念：
- `device`：运行应用的设备，如iphone、huawei
- `os`：设备的操作系统，如 ios、andriod、windows、mac、linux
- `rom`：基于操作系统的定制，Android系统特有概念，如miui、鸿蒙
- `host`：运行应用的宿主程序，即OS和应用之间的运行环境，如浏览器、微信等小程序宿主、集成uniMPSDK的App
- `uni`：uni-app框架相关的信息，如uni-app框架的编译器版本、运行时版本
- `app`：开发者的应用相关的信息，如应用名称、版本

因本API涉及的信息越来越多，查询速度会逐渐变慢。由此拆解分出3个新API，[uni.getDeviceInfo](get-device-info.md)、[uni.getAppBaseInfo](get-app-base-info.md)、[uni.getWindowInfo](get-window-info.md)。新API包含的信息更多。

<!-- UTSAPIJSON.getSystemInfo.param -->

<!-- UTSAPIJSON.getSystemInfo.returnValue -->

- appTheme如取值为`auto`，代表跟随系统。此时需查询osTheme获取当前到底是light还是dark。
- 获取OAID、AndroidID等其他设备信息，[见插件市场](https://ext.dcloud.net.cn/search?q=oaid&orderBy=Relevance&uni-appx=1)

<!-- UTSAPIJSON.getSystemInfo.example -->

<!-- UTSAPIJSON.getSystemInfo.tutorial -->

## uni.getSystemInfoSync() @getsysteminfosync

<!-- UTSAPIJSON.getSystemInfoSync.description -->

<!-- UTSAPIJSON.getSystemInfoSync.compatibility -->

<!-- UTSAPIJSON.getSystemInfoSync.param -->

<!-- UTSAPIJSON.getSystemInfoSync.returnValue -->

<!-- UTSAPIJSON.getSystemInfoSync.example -->

<!-- UTSAPIJSON.getSystemInfoSync.tutorial -->

<!-- UTSAPIJSON.get-system-info.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
