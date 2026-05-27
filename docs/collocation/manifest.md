# manifest.json

`manifest.json` 是 uni-app x 项目的配置文件，用于设置应用的名称、版本、图标等信息。在 HBuilderX 中创建项目时此文件保存在根目录。

uni-app x 默认没有splash启动界面，因uni-app x打包后启动速度非常快，可以自己做一个简单的uvue页面来当做splash。HBuilderX3.99+版本新增支持配置splash启动界面，详情参考[启动界面配置](manifest-splashscreen.md)。

uni-app x 目前不提供内置模块选择，而是提供了摇树机制自动选择内置模块，详情参考[模块配置](manifest-modules.md#treeshaking)。

## 配置项列表

<!-- MANIFESTJSON.manifest.table -->

**注意**
- `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- `uni-app-x` 节点必须存在，它是一个项目是否是 uni-app x项目的核心标识。
	* 缺少该节点时，HBuilderX 会把项目识别为 uni-app js引擎版项目（方形项目图标）。
	* 含有该节点时，HBuilderX 会把项目识别为 uni-app x 项目，项目图标是圆形的。

### UNI-APP-X配置 @manifest-uni-app-x

<!-- MANIFESTJSON.uni-app-x.description -->

<!-- MANIFESTJSON.uni-app-x.table -->


### APP配置 @manifest-app

<!-- MANIFESTJSON.app.description -->

<!-- MANIFESTJSON.app.table -->

uni-app 项目可配置原生的隐私弹框。这是因为开发者的js执行较慢，在原生代码获取隐私前来不及弹框，不能满足先弹隐私政策后采集数据的合规要求。

但uni-app x 项目是原生驱动执行的，开发者的代码执行非常快，无需再提供隐私政策弹框配置。自行弹框即可。

但开发者需注意在用户同意隐私政策前，不要采集涉及隐私的数据。如果违反当地法律或应用商店的要求，会无法上架应用商店甚至被处罚。

hello uni-app x中提供了基于dialogPage的隐私政策弹框示例代码，在app.uvue的代码中搜索`uni.getPrivacySetting`可见，[详见](https://gitcode.com/dcloud/hello-uni-app-x/blob/alpha/App.uvue)

该示例代码在应用启动的onLauch中，判断隐私协议是否已经被同意，未同意的话通过dialogPage弹出一个页面，该页面有隐私协议的内容及同意、取消按钮。
其中同意按钮为[button组件](../component/button.md)的`open-type=agreePrivacyAuthorization`


#### DISTRIBUTE配置 @app-distribute

<!-- MANIFESTJSON.app_distribute.description -->

<!-- MANIFESTJSON.app_distribute.table -->


##### App端图标配置 @distribute-icons

<!-- MANIFESTJSON.app_distribute_icons.description -->

<!-- MANIFESTJSON.app_distribute_icons.table -->

**注意**
- App端图片相关配置，建议在HBuilderX中 manifest.json 的可视化界面操作，不推荐手动在源码视图中修改
- manifest中只能配置一个icon。如需在应用发布后动态修改icon，可在插件市场搜索[动态图标插件](https://ext.dcloud.net.cn/search?q=%E5%8A%A8%E6%80%81%E5%9B%BE%E6%A0%87&orderBy=Relevance&cat1=8&cat2=81)。

###### Android图标配置 @icons-android

<!-- MANIFESTJSON.app_distribute_icons_android.description -->

<!-- MANIFESTJSON.app_distribute_icons_android.table -->

> 必须使用 `png` 格式图标

###### iOS图标配置 @icons-ios

<!-- MANIFESTJSON.app_distribute_icons_ios.description -->

<!-- MANIFESTJSON.app_distribute_icons_ios.table -->

> 必须使用 `png` 格式图标，图片中不能存在透明区域

<!-- MANIFESTJSON.app_distribute_icons_ios.compatibility -->

##### App端启动界面配置 @distribute-splashScreens

<!-- MANIFESTJSON.app_distribute_splashScreens.description -->


###### Android平台启动界面配置 @splashScreens-android

<!-- MANIFESTJSON.app_distribute_splashScreens_android.description -->

<!-- MANIFESTJSON.app_distribute_splashScreens_android.table -->


###### Android12启动界面配置 @splashScreen-_android12

<!-- MANIFESTJSON.app_distribute_splashScreens_android12.description -->

<!-- MANIFESTJSON.app_distribute_splashScreens_android12.table -->


###### Android12启动界面Logo图标配置 @android12-icon

<!-- MANIFESTJSON.app_distribute_splashScreens_android12_icon.description -->

<!-- MANIFESTJSON.app_distribute_splashScreens_android12_icon.table -->

###### Android12启动界面底部品牌图标 @android12-brand

<!-- MANIFESTJSON.app_distribute_splashScreens_android12_brand.description -->

<!-- MANIFESTJSON.app_distribute_splashScreens_android12_brand.table -->

<!-- MANIFESTJSON.app_distribute_splashScreens_android12_brand.compatibility -->

##### ANDROID配置 @distribute-android

<!-- MANIFESTJSON.app_distribute_android.description -->

<!-- MANIFESTJSON.app_distribute_android.table -->

###### manifestPlaceholders @manifestplaceholders

manifest.json中不提供配置 `manifestPlaceholders` 数据，如果应用使用的插件或三方SDK需要使用，可在项目的 `nativeResources/android/manifestPlaceholders.json` 文件中配置，详情参考[Android原生应用清单文件和资源](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#manifestplaceholders)。


##### IOS配置 @distribute-ios

<!-- MANIFESTJSON.app_distribute_ios.description -->

<!-- MANIFESTJSON.app_distribute_ios.table -->

<!-- MANIFESTJSON.app_distribute_ios.compatibility -->


##### distribute modules 配置项列表 @distribute-modules

<!-- MANIFESTJSON.app_distribute_modules.description -->

<!-- MANIFESTJSON.app_distribute_modules.table -->

<!-- MANIFESTJSON.app_distribute_modules.compatibility -->


###### uni-ad 配置项列表 @modules-uni-ad

<!-- MANIFESTJSON.app_distribute_modules_uni-ad.description -->

<!-- MANIFESTJSON.app_distribute_modules_uni-ad.table -->

<!-- MANIFESTJSON.app_distribute_modules_uni-ad.compatibility -->


###### uni-location 配置项列表 @modules-uni-location

<!-- MANIFESTJSON.app_distribute_modules_uni-location.description -->

<!-- MANIFESTJSON.app_distribute_modules_uni-location.table -->

<!-- MANIFESTJSON.app_distribute_modules_uni-location.compatibility -->


###### uni-payment 配置项列表 @modules-uni-payment

<!-- MANIFESTJSON.app_distribute_modules_uni-payment.description -->

<!-- MANIFESTJSON.app_distribute_modules_uni-payment.table -->

<!-- MANIFESTJSON.app_distribute_modules_uni-payment.compatibility -->


###### uni-payment-wxpay 配置项列表 @uni-payment-wxpay

<!-- MANIFESTJSON.app_distribute_modules_uni-payment_wxpay.description -->

<!-- MANIFESTJSON.app_distribute_modules_uni-payment_wxpay.table -->

<!-- MANIFESTJSON.app_distribute_modules_uni-payment_wxpay.compatibility -->


###### wxpay ios 配置项列表 @wxpay-ios

<!-- MANIFESTJSON.app_distribute_modules_uni-payment_wxpay_ios.description -->

<!-- MANIFESTJSON.app_distribute_modules_uni-payment_wxpay_ios.table -->

<!-- MANIFESTJSON.app_distribute_modules_uni-payment_wxpay_ios.compatibility -->



### 安卓App配置 @manifest-app-android

<!-- MANIFESTJSON.app-android.description -->

<!-- MANIFESTJSON.app-android.table -->

<!-- MANIFESTJSON.app-android.compatibility -->


#### DISTRIBUTE配置 @app-android-distribute

<!-- MANIFESTJSON.app-android_distribute.description -->

<!-- MANIFESTJSON.app-android_distribute.table -->

<!-- MANIFESTJSON.app-android_distribute.compatibility -->


##### Android平台图标配置 @distribute-icons

<!-- MANIFESTJSON.app-android_distribute_icons.description -->

<!-- MANIFESTJSON.app-android_distribute_icons.table -->

<!-- MANIFESTJSON.app-android_distribute_icons.compatibility -->


##### Android平台启动界面配置 @distribute-splashscreens

<!-- MANIFESTJSON.app-android_distribute_splashScreens.description -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens.table -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens.compatibility -->


###### Android平台启动图配置 @splashscreens-default

<!-- MANIFESTJSON.app-android_distribute_splashScreens_default.description -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens_default.table -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens_default.compatibility -->


###### Android12启动界面中部Logo图标 @splashscreens-icon

<!-- MANIFESTJSON.app-android_distribute_splashScreens_icon.description -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens_icon.table -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens_icon.compatibility -->


###### Android12启动界面底部品牌图标 @splashscreens-brand

<!-- MANIFESTJSON.app-android_distribute_splashScreens_brand.description -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens_brand.table -->

<!-- MANIFESTJSON.app-android_distribute_splashScreens_brand.compatibility -->


###### modulesuni-location 配置项列表 @modules-uni-location

<!-- MANIFESTJSON.app-android_distribute_modules_uni-location.description -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-location.table -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-location.compatibility -->


###### uni-locationtencent 配置项列表 @uni-location-tencent

<!-- MANIFESTJSON.app-android_distribute_modules_uni-location_tencent.description -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-location_tencent.table -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-location_tencent.compatibility -->


###### modulesuni-map 配置项列表 @modules-uni-map

<!-- MANIFESTJSON.app-android_distribute_modules_uni-map.description -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-map.table -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-map.compatibility -->


###### uni-maptencent 配置项列表 @uni-map-tencent

<!-- MANIFESTJSON.app-android_distribute_modules_uni-map_tencent.description -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-map_tencent.table -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-map_tencent.compatibility -->


###### modulesuni-payment 配置项列表 @modules-uni-payment

<!-- MANIFESTJSON.app-android_distribute_modules_uni-payment.description -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-payment.table -->

<!-- MANIFESTJSON.app-android_distribute_modules_uni-payment.compatibility -->


### iOS App配置 @manifest-app-ios

<!-- MANIFESTJSON.app-ios.description -->

<!-- MANIFESTJSON.app-ios.table -->

<!-- MANIFESTJSON.app-ios.compatibility -->


#### DISTRIBUTE配置 @app-ios-distribute

<!-- MANIFESTJSON.app-ios_distribute.description -->

<!-- MANIFESTJSON.app-ios_distribute.table -->

<!-- MANIFESTJSON.app-ios_distribute.compatibility -->


##### iOS平台图标配置 @distribute-icons

<!-- MANIFESTJSON.app-ios_distribute_icons.description -->

<!-- MANIFESTJSON.app-ios_distribute_icons.table -->

<!-- MANIFESTJSON.app-ios_distribute_icons.compatibility -->


##### iOS平台启动界面配置 @distribute-splashscreens

<!-- MANIFESTJSON.app-ios_distribute_splashScreens.description -->

<!-- MANIFESTJSON.app-ios_distribute_splashScreens.table -->

<!-- MANIFESTJSON.app-ios_distribute_splashScreens.compatibility -->


##### distributemodules 配置项列表 @distribute-modules

<!-- MANIFESTJSON.app-ios_distribute_modules.description -->

<!-- MANIFESTJSON.app-ios_distribute_modules.table -->

<!-- MANIFESTJSON.app-ios_distribute_modules.compatibility -->


###### modulesuni-location 配置项列表 @modules-uni-location

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-location.description -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-location.table -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-location.compatibility -->


###### uni-locationtencent 配置项列表 @uni-location-tencent

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-location_tencent.description -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-location_tencent.table -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-location_tencent.compatibility -->


###### modulesuni-map 配置项列表 @modules-uni-map

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-map.description -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-map.table -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-map.compatibility -->


###### uni-maptencent 配置项列表 @uni-map-tencent

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-map_tencent.description -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-map_tencent.table -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-map_tencent.compatibility -->


###### modulesuni-payment 配置项列表 @modules-uni-payment

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-payment.description -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-payment.table -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-payment.compatibility -->


###### uni-paymentwxpay 配置项列表 @uni-payment-wxpay

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-payment_wxpay.description -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-payment_wxpay.table -->

<!-- MANIFESTJSON.app-ios_distribute_modules_uni-payment_wxpay.compatibility -->


### HarmonyOS配置 @manifest-app-harmony

<!-- MANIFESTJSON.app-harmony.description -->

<!-- MANIFESTJSON.app-harmony.table -->

<!-- MANIFESTJSON.app-harmony.compatibility -->


#### app-harmonydistribute 配置项列表 @app-harmony-distribute

<!-- MANIFESTJSON.app-harmony_distribute.description -->

<!-- MANIFESTJSON.app-harmony_distribute.table -->

<!-- MANIFESTJSON.app-harmony_distribute.compatibility -->


##### distributemodules 配置项列表 @distribute-modules

<!-- MANIFESTJSON.app-harmony_distribute_modules.description -->

<!-- MANIFESTJSON.app-harmony_distribute_modules.table -->

<!-- MANIFESTJSON.app-harmony_distribute_modules.compatibility -->


###### modulesuni-oauth 配置项列表 @modules-uni-oauth

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-oauth.description -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-oauth.table -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-oauth.compatibility -->


###### uni-oauthweixin 配置项列表 @uni-oauth-weixin

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-oauth_weixin.description -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-oauth_weixin.table -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-oauth_weixin.compatibility -->


###### modulesuni-share 配置项列表 @modules-uni-share

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-share.description -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-share.table -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-share.compatibility -->


###### uni-shareweixin 配置项列表 @uni-share-weixin

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-share_weixin.description -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-share_weixin.table -->

<!-- MANIFESTJSON.app-harmony_distribute_modules_uni-share_weixin.compatibility -->


### Web配置 @manifest-web

<!-- MANIFESTJSON.web.description -->

<!-- MANIFESTJSON.web.table -->

<!-- MANIFESTJSON.web.compatibility -->


#### web router 配置项列表 @web-router

<!-- MANIFESTJSON.web_router.description -->

<!-- MANIFESTJSON.web_router.table -->

<!-- MANIFESTJSON.web_router.compatibility -->


#### web devServer 配置项列表 @web-devserver

<!-- MANIFESTJSON.web_devServer.description -->

<!-- MANIFESTJSON.web_devServer.table -->

<!-- MANIFESTJSON.web_devServer.compatibility -->


#### web optimization 配置项列表 @web-optimization

<!-- MANIFESTJSON.web_optimization.description -->

<!-- MANIFESTJSON.web_optimization.table -->

<!-- MANIFESTJSON.web_optimization.compatibility -->


##### treeShaking 配置项列表 @optimization-treeshaking

<!-- MANIFESTJSON.web_optimization_treeShaking.description -->

<!-- MANIFESTJSON.web_optimization_treeShaking.table -->

<!-- MANIFESTJSON.web_optimization_treeShaking.compatibility -->


#### web unipush 配置项列表 @web-unipush

<!-- MANIFESTJSON.web_unipush.description -->

<!-- MANIFESTJSON.web_unipush.table -->

<!-- MANIFESTJSON.web_unipush.compatibility -->


#### web sdkConfigs 配置项列表 @web-sdkconfigs

<!-- MANIFESTJSON.web_sdkConfigs.description -->

<!-- MANIFESTJSON.web_sdkConfigs.table -->

<!-- MANIFESTJSON.web_sdkConfigs.compatibility -->


##### 定位和地图（只能选一个） @sdkconfigs-maps

<!-- MANIFESTJSON.web_sdkConfigs_maps.description -->

<!-- MANIFESTJSON.web_sdkConfigs_maps.table -->

<!-- MANIFESTJSON.web_sdkConfigs_maps.compatibility -->


###### 腾讯地图，旧配置项为qqmap @maps-tencent

<!-- MANIFESTJSON.web_sdkConfigs_maps_tencent.description -->

<!-- MANIFESTJSON.web_sdkConfigs_maps_tencent.table -->

<!-- MANIFESTJSON.web_sdkConfigs_maps_tencent.compatibility -->


###### 谷歌地图 @maps-google

<!-- MANIFESTJSON.web_sdkConfigs_maps_google.description -->

<!-- MANIFESTJSON.web_sdkConfigs_maps_google.table -->

<!-- MANIFESTJSON.web_sdkConfigs_maps_google.compatibility -->


###### samap 配置项列表 @maps-amap

<!-- MANIFESTJSON.web_sdkConfigs_maps_amap.description -->

<!-- MANIFESTJSON.web_sdkConfigs_maps_amap.table -->

<!-- MANIFESTJSON.web_sdkConfigs_maps_amap.compatibility -->

### mp-weixin 配置项列表 @manifest-mp-weixin

<!-- MANIFESTJSON.mp-weixin.description -->

<!-- MANIFESTJSON.mp-weixin.table -->

<!-- MANIFESTJSON.mp-weixin.compatibility -->

### HBuilderX配置 @manifest-__hbuilderx

<!-- MANIFESTJSON.__hbuilderx.description -->

<!-- MANIFESTJSON.__hbuilderx.table -->

<!-- MANIFESTJSON.__hbuilderx.compatibility -->


<!-- MANIFESTJSON.tutorial -->
