## uni.getSystemInfo(options) @getsysteminfo

> 自HBuilderX 4.13版本起，uniPlatform属性在 app 平台由 `app` 改为 `app-android`、`app-ios`。如果开发者的项目内使用uni-id-common、uni-id、uni-id-pages或uni-id-pages-x，则需要分别升级到如下版本来兼容本次调整：uni-id@3.3.32、uni-id-common@1.0.17、uni-id-pages@1.1.20、uni-id-pages-x@1.1.1

<!-- UTSAPIJSON.getSystemInfo.description -->

uni-app 提供了异步(`uni.getSystemInfo`)和同步(`uni.getSystemInfoSync`)的2个API获取系统信息。

按照运行环境层级排序，从底层向上，systemInfo有6个概念：
- `device`：运行应用的设备，如iphone、huawei
- `os`：设备的操作系统，如 ios、andriod、windows、mac、linux
- `rom`：基于操作系统的定制，Android系统特有概念，如miui、鸿蒙
- `host`：运行应用的宿主程序，即OS和应用之间的运行环境，如浏览器、微信等小程序宿主、集成uniMPSDK的App。uni-app直接开发的app没有host概念
- `uni`：uni-app框架相关的信息，如uni-app框架的编译器版本、运行时版本
- `app`：开发者的应用相关的信息，如应用名称、版本

因本API涉及的信息越来越多，查询速度会逐渐变慢。由此拆解分出3个新API，[uni.getDeviceInfo](get-device-info.md)、[uni.getAppBaseInfo](get-app-base-info.md)、[uni.getWindowInfo](get-window-info.md)。新API包含的信息更多。

<!-- UTSAPIJSON.getSystemInfo.param -->

<!-- UTSAPIJSON.getSystemInfo.returnValue -->

获取OAID、AndroidID等其他设备信息，[见插件市场](https://ext.dcloud.net.cn/search?q=oaid&orderBy=Relevance&uni-appx=1)

<!-- UTSAPIJSON.getSystemInfo.example -->

<!-- UTSAPIJSON.getSystemInfo.compatibility -->

<!-- UTSAPIJSON.getSystemInfo.tutorial -->

## uni.getSystemInfoSync() @getsysteminfosync

<!-- UTSAPIJSON.getSystemInfoSync.description -->

<!-- UTSAPIJSON.getSystemInfoSync.param -->

<!-- UTSAPIJSON.getSystemInfoSync.returnValue -->

<!-- UTSAPIJSON.getSystemInfoSync.example -->

<!-- UTSAPIJSON.getSystemInfoSync.compatibility -->

<!-- UTSAPIJSON.getSystemInfoSync.tutorial -->

<!-- UTSAPIJSON.get-system-info.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
