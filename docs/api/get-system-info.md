<!-- ## uni.getSystemInfo(options) @getsysteminfo -->

<!-- UTSAPIJSON.getSystemInfo.name -->

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

微信小程序已经不推荐使用getSystemInfo，建议使用上述分拆的3个API。

<!-- UTSAPIJSON.getSystemInfo.param -->

<!-- UTSAPIJSON.getSystemInfo.returnValue -->

::: warning 注意事项
- appTheme如取值为`auto`，代表跟随系统。此时需查询osTheme获取当前到底是light还是dark。
- 获取OAID、AndroidID等其他设备信息，[见插件市场](https://ext.dcloud.net.cn/search?q=oaid&orderBy=Relevance&uni-appx=1)
- Android端的`windowHeight`属性是有时机的考量的，如果在全局作用域获取`windowHeight`，有可能当前Activity还未加载，所以导航栏和Tabbar的高度是不会计算进去的，稳妥起见，建议在`onReady`或者`onPageShow`内获取`windowheight`。
- `windowHeight`属性是依赖于调用Api时栈顶Page的，比如延迟获取`windowHeight`，很可能页面已经切换了，这时候获取的高度是新的页面的。
- 4.25开始，Android端安全区域top调整为手机状态栏高度
:::

#### romName 返回值说明 @romname

|值|解释|
|:-|:-|
|MIUI|小米|
|EMUI|华为|
|HarmonyOS|华为鸿蒙|
|Magic OS|荣耀|
|ColorOS|oppo|
|Funtouch OS|vivo|
|FLymeOS|魅族|
|SmartisanOS|锤子|

注意：不同rom的版本号规则不同，比如`MIUI`版本号是`V130`，而`HarmonyOS`的版本号是`2.0.0`

#### hostName 返回值说明 @hostname

|值|解释|
|:-|:-|
|WeChat|微信|
|wxwork|微信企业版|
|[百度宿主平台枚举值列表](https://smartprogram.baidu.com/docs/develop/api/device_sys/hostlist/)|百度|
|alipay|支付宝|
|amap|高德|
|DINGTALK|钉钉|
|UC|UC浏览器|
|QUARK|夸克浏览器|
|AK|阿里健康|
|YK|优酷|
|[抖音宿主平台枚举值列表](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/device/system-information/tt-get-system-info/#appname-%E8%AF%B4%E6%98%8E)|抖音系列|
|qq|QQ|
|KUAISHOU|快手|

<!-- UTSAPIJSON.getSystemInfo.example -->

<!-- UTSAPIJSON.getSystemInfo.tutorial -->

<!-- ## uni.getSystemInfoSync() @getsysteminfosync -->

<!-- UTSAPIJSON.getSystemInfoSync.name -->

<!-- UTSAPIJSON.getSystemInfoSync.description -->

本API是同步API，仅为上面异步API的同步形式，返回值内容没有区别。但由于本API涉及的查询内容较多，耗时长，一般情况下不推荐同步获取。\
如果希望使用同步方式，推荐使用分拆后的API：[uni.getDeviceInfo](./get-device-info.md)、[uni.getWindowInfo](./get-window-info.md)、[uni.getAppBaseInfo](./get-app-base-info.md)。

<!-- UTSAPIJSON.getSystemInfoSync.compatibility -->

<!-- UTSAPIJSON.getSystemInfoSync.param -->

<!-- UTSAPIJSON.getSystemInfoSync.returnValue -->

<!-- UTSAPIJSON.getSystemInfoSync.example -->

<!-- UTSAPIJSON.getSystemInfoSync.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
