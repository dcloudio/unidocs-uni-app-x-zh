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

<!-- MANIFESTJSON.manifest_uni-app-x.description -->

<!-- MANIFESTJSON.manifest_uni-app-x.table -->


### APP配置 @manifest-app

<!-- MANIFESTJSON.manifest_app.description -->

<!-- MANIFESTJSON.manifest_app.table -->

uni-app 项目可配置原生的隐私弹框。这是因为开发者的js执行较慢，在原生代码获取隐私前来不及弹框，不能满足先弹隐私政策后采集数据的合规要求。

但uni-app x 项目是原生驱动执行的，开发者的代码执行非常快，无需再提供隐私政策弹框配置。自行弹框即可。

但开发者需注意在用户同意隐私政策前，不要采集涉及隐私的数据。如果违反当地法律或应用商店的要求，会无法上架应用商店甚至被处罚。

hello uni-app x中提供了基于dialogPage的隐私政策弹框示例代码，在app.uvue的代码中搜索`uni.getPrivacySetting`可见，[详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/App.uvue)

该示例代码在应用启动的onLauch中，判断隐私协议是否已经被同意，未同意的话通过dialogPage弹出一个页面，该页面有隐私协议的内容及同意、取消按钮。
其中同意按钮为[button组件](../component/button.md)的`open-type=agreePrivacyAuthorization`


#### DISTRIBUTE配置 @app-distribute

<!-- MANIFESTJSON.app_distribute.description -->

<!-- MANIFESTJSON.app_distribute.table -->


##### App端图标配置 @distribute-icons

<!-- MANIFESTJSON.distribute_icons.description -->

<!-- MANIFESTJSON.distribute_icons.table -->

**注意**
- App端图片相关配置，建议在HBuilderX中 manifest.json 的可视化界面操作，不推荐手动在源码视图中修改
- manifest中只能配置一个icon。如需在应用发布后动态修改icon，可在插件市场搜索[动态图标插件](https://ext.dcloud.net.cn/search?q=%E5%8A%A8%E6%80%81%E5%9B%BE%E6%A0%87&orderBy=Relevance&cat1=8&cat2=81)。

###### Android图标配置 @icons-android

<!-- MANIFESTJSON.icons_android.description -->

<!-- MANIFESTJSON.icons_android.table -->

> 必须使用 `png` 格式图标

###### iOS图标配置 @icons-ios

<!-- MANIFESTJSON.icons_ios.description -->

<!-- MANIFESTJSON.icons_ios.table -->

> 必须使用 `png` 格式图标，图片中不能存在透明区域

<!-- MANIFESTJSON.icons_ios.compatibility -->

##### App端启动界面配置 @distribute-splashScreens

<!-- MANIFESTJSON.distribute_splashScreens.description -->


###### Android平台启动界面配置 @splashScreens-android

<!-- MANIFESTJSON.splashScreens_android.description -->

<!-- MANIFESTJSON.splashScreens_android.table -->


###### Android12启动界面配置 @splashScreen-_android12

<!-- MANIFESTJSON.splashScreens_android12.description -->

<!-- MANIFESTJSON.splashScreens_android12.table -->


###### Android12启动界面Logo图标配置 @android12-icon

<!-- MANIFESTJSON.android12_icon.description -->

<!-- MANIFESTJSON.android12_icon.table -->

###### Android12启动界面底部品牌图标 @android12-brand

<!-- MANIFESTJSON.android12_brand.description -->

<!-- MANIFESTJSON.android12_brand.table -->

<!-- MANIFESTJSON.android12_brand.compatibility -->

##### ANDROID配置 @distribute-android

<!-- MANIFESTJSON.distribute_android.description -->

<!-- MANIFESTJSON.distribute_android.table -->

###### manifestPlaceholders @manifestplaceholders

manifest.json中不提供配置 `manifestPlaceholders` 数据，如果应用使用的插件或三方SDK需要使用，可在项目的 `nativeResources/android/manifestPlaceholders.json` 文件中配置，详情参考[Android原生应用清单文件和资源](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#manifestplaceholders)。


##### IOS配置 @distribute-ios

<!-- MANIFESTJSON.distribute_ios.description -->

<!-- MANIFESTJSON.distribute_ios.table -->

<!-- MANIFESTJSON.distribute_ios.compatibility -->


##### distribute modules 配置项列表 @distribute-modules

<!-- MANIFESTJSON.distribute_modules.description -->

<!-- MANIFESTJSON.distribute_modules.table -->

<!-- MANIFESTJSON.distribute_modules.compatibility -->


###### uni-ad 配置项列表 @modules-uni-ad

<!-- MANIFESTJSON.modules_uni-ad.description -->

<!-- MANIFESTJSON.modules_uni-ad.table -->

<!-- MANIFESTJSON.modules_uni-ad.compatibility -->


###### uni-location 配置项列表 @modules-uni-location

<!-- MANIFESTJSON.modules_uni-getLocation.description -->

<!-- MANIFESTJSON.modules_uni-getLocation.table -->

<!-- MANIFESTJSON.modules_uni-getLocation.compatibility -->


###### uni-payment 配置项列表 @modules-uni-payment

<!-- MANIFESTJSON.modules_uni-payment.description -->

<!-- MANIFESTJSON.modules_uni-payment.table -->

<!-- MANIFESTJSON.modules_uni-payment.compatibility -->


###### uni-payment-wxpay 配置项列表 @uni-payment-wxpay

<!-- MANIFESTJSON.uni-payment_wxpay.description -->

<!-- MANIFESTJSON.uni-payment_wxpay.table -->

<!-- MANIFESTJSON.uni-payment_wxpay.compatibility -->


###### wxpay ios 配置项列表 @wxpay-ios

<!-- MANIFESTJSON.wxpay_ios.description -->

<!-- MANIFESTJSON.wxpay_ios.table -->

<!-- MANIFESTJSON.wxpay_ios.compatibility -->


### Web配置 @manifest-web

<!-- MANIFESTJSON.manifest_web.description -->

<!-- MANIFESTJSON.manifest_web.table -->

<!-- MANIFESTJSON.manifest_web.compatibility -->


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

<!-- MANIFESTJSON.optimization_treeShaking.description -->

<!-- MANIFESTJSON.optimization_treeShaking.table -->

<!-- MANIFESTJSON.optimization_treeShaking.compatibility -->


#### web unipush 配置项列表 @web-unipush

<!-- MANIFESTJSON.web_unipush.description -->

<!-- MANIFESTJSON.web_unipush.table -->

<!-- MANIFESTJSON.web_unipush.compatibility -->


#### web sdkConfigs 配置项列表 @web-sdkconfigs

<!-- MANIFESTJSON.web_sdkConfigs.description -->

<!-- MANIFESTJSON.web_sdkConfigs.table -->

<!-- MANIFESTJSON.web_sdkConfigs.compatibility -->


##### 定位和地图（只能选一个） @sdkconfigs-maps

<!-- MANIFESTJSON.sdkConfigs_maps.description -->

<!-- MANIFESTJSON.sdkConfigs_maps.table -->

<!-- MANIFESTJSON.sdkConfigs_maps.compatibility -->


###### 腾讯地图，旧配置项为qqmap @maps-tencent

<!-- MANIFESTJSON.maps_tencent.description -->

<!-- MANIFESTJSON.maps_tencent.table -->

<!-- MANIFESTJSON.maps_tencent.compatibility -->


###### 谷歌地图 @maps-google

<!-- MANIFESTJSON.maps_google.description -->

<!-- MANIFESTJSON.maps_google.table -->

<!-- MANIFESTJSON.maps_google.compatibility -->


###### samap 配置项列表 @maps-amap

<!-- MANIFESTJSON.maps_amap.description -->

<!-- MANIFESTJSON.maps_amap.table -->

<!-- MANIFESTJSON.maps_amap.compatibility -->

### mp-weixin 配置项列表 @manifest-mp-weixin

<!-- MANIFESTJSON.manifest_mp-weixin.description -->

<!-- MANIFESTJSON.manifest_mp-weixin.table -->

<!-- MANIFESTJSON.manifest_mp-weixin.compatibility -->

### HBuilderX配置 @manifest-__hbuilderx

<!-- MANIFESTJSON.manifest___hbuilderx.description -->

<!-- MANIFESTJSON.manifest___hbuilderx.table -->

<!-- MANIFESTJSON.manifest___hbuilderx.compatibility -->


<!-- MANIFESTJSON.tutorial -->
