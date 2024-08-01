# manifest.json

`manifest.json` 是 uni-app x 项目的配置文件，用于设置应用的名称、版本、图标等信息。在 HBuilderX 中创建项目时此文件保存在根目录。

uni-app x 默认没有splash启动界面，因uni-app x打包后启动速度非常快，可以自己做一个简单的uvue页面来当做splash。HBuilderX3.99+版本新增支持配置splash启动界面，详情参考[启动界面配置](manifest-splashscreen.md)。

uni-app x 不再提供内置模块选择，而是提供了摇树机制自动选择内置模块，详情参考[模块配置](manifest-modules.md#treeshaking)。

## 配置项列表

<!-- MANIFESTJSON.manifest.table -->

**注意**
- `appid` 由 DCloud 云端分配，主要用于 DCloud 相关的云服务，请勿自行修改。[详见](https://ask.dcloud.net.cn/article/35907)
- `uni-app-x` 节点必须存在，它是一个项目是否是 uni-app x项目的核心标识。
	* 缺少该节点时，HBuilderX 会把项目识别为 uni-app js引擎版项目（方形项目图标）。
	* 含有该节点时，HBuilderX中的项目图标是圆形的。

### UNI-APP-X配置 @manifest-uni-app-x

<!-- MANIFESTJSON.manifest_uni-app-x.description -->

<!-- MANIFESTJSON.manifest_uni-app-x.table -->


### APP配置 @manifest-app

<!-- MANIFESTJSON.manifest_app.description -->

<!-- MANIFESTJSON.manifest_app.table -->

老uni-app可配置原生的隐私弹框。这是因为开发者的js执行较慢，在原生代码获取隐私前来不及弹框，不能满足先弹隐私政策后采集数据的合规要求。

但uni-app x是原生的，开发者的代码执行非常快，无需再提供隐私政策弹框配置。自行弹框即可。

#### Android权限配置@permissions

uni-app x 的权限配置，移入了[AndroidManifest.xml](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions)中。

使用[uni内置模块](./manifest-modules.md#utsmodules)时，云端打包会自动添加模块需要的Android权限，不需要在[AndroidManifest.xml](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions)中配置。

- HBuilderX3.97+版本标准基座已经包含了所有Android权限，在 uvue 页面中直接通过 uts 调用需要权限的 Android 系统 API 时，使用标准基座真机运行可直接通过[UTSAndroid.requestSystemPermission](../uts/utsandroid.md#requestsystempermission)申请；
- 使用自定义基座则需要在项目的[AndroidManifest.xml](https://uniapp.dcloud.io/tutorial/app-nativeresource-android.html#permissions)中配置要使用的权限，重新提交云端打包。

#### iOS隐私信息访问的许可描述@usageDescription

uni-app x 的隐私信息访问的许可描述配置，移入了[Info.plist](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#infoPlist)中。

使用[uni内置模块](./manifest-modules.md#utsmodules)时，云端打包回自动添加模块需要的隐私信息访问的许可描述，但许可描述信息是通用描述，不一定适合应用的实际使用场景描述，需根据应用的实际情况在[Info.plist](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#infoPlist)中配置准确的许可描述。


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

**注意**
- `abiFilters` 用于指定应用需要支持的CPU类型，字符串数组类型，字符串可取值"armeabi-v7a"、"arm64-v8a"、"x86"、"x86_64"，默认值为["arm64-v8a"]。
- `minSdkVersion` 用于指定应用运行所需最低 API 级别的整数。如果系统的 API 级别低于该属性中指定的值，Android 系统将阻止用户安装应用。
- `targetSdkVersion` 一个用于指定应用的目标 API 级别的整数。如果未设置，其默认值与为 minSdkVersion 指定的值相等。该值用于通知系统，您已针对目标版本进行了测试，并且系统不应通过启用任何兼容性行为，以保持您的应用与目标版本的向前兼容性。
- `minSdkVersion` 和 `targetSdkVersion` 设置的值是 API 级别（API Level），完整API级别信息请参考[Android API级别说明](https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=zh-cn#ApiLevels)

##### IOS配置 @distribute-ios

<!-- MANIFESTJSON.distribute_ios.description -->

<!-- MANIFESTJSON.distribute_ios.table -->

<!-- MANIFESTJSON.distribute_ios.compatibility -->


## 其它设置  

### url scheme@urlScheme  
uni-app x 项目 manifest.json 文件不再提供 url scheme 配置，HBuilderX4.18及以上版本支持在 app 原生应用配置文件中进行设置，详情参考：  
- [Android平台 url scheme 配置](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#urlscheme)  
- [iOS平台 url scheme 配置](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#urlscheme)  

**注意**  
- uni-app x项目标准基座已配置 url scheme 值："uniappx"
- 配置scheme需提交云端打包才能生效  


## 示例
```json
{
    "name" : "uni-app x",
    "appid" : "__UNI__XXXXXXX",
    "description" : "描述信息",
    "versionName" : "1.0.0",
    "versionCode" : "100",
    "uni-app-x":{
      "flex-direction": "column"
    },
    "vueVersion" : "3",
	"app": {
		"distribute": {
			"syncDebug": true,
			"android": {
				"packagename": "Android包名",
				"abiFilters": [
					"armeabi-v7a","arm64-v8a"
				],
				"minSdkVersion": "21",
				"targetSdkVersion": "32"
			}
		}
	}
}
```

<!-- MANIFESTJSON.tutorial -->

