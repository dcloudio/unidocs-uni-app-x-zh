# modules

## 模块的摇树@treeShaking

uni-app x的Android基础库体积是7M，打包后的apk体积是基础库的体积加上开发者的代码及代码引用的模块的体积。有些模块涉及so库，覆盖的cpu指令越多，包体积越大。

在uni-app js引擎版中，内置模块如video，是开发者在manifest.json中手动勾选配置的。

但在uni-app x中，不需要手动配置。

HBuilderX3.93版本起，编译器支持扫描代码，摇树treeShaking，自动引入或剔除不需要的内置模块。

如应用中没有使用video组件相关功能，将不再包含video内置模块，减少安装包体积。

**摇树注意事项：**  
当你打包自定义基座时，如果你的工程代码没有使用video、定位、相册、摄像头等涉及三方sdk或敏感权限的api，打出的自定义基座包就不会包含这些组件和api的功能，那么在这些自定义基座上运行时，调用相关的组件和api就会报错。  
此时您需要在工程中写相关的代码，如引用video组件或调用定位api，保存代码后重新打包自定义基座，才会包含相关模块。

您在工程中下载的ext api、三方uts插件也同理，没有引用就不会打进去。

摇树不支持 `provider` 机制，定位（[uni-getLocation](#uni-getLocation)） 和 支付（[uni-payment](#uni-payment)） 模块需要手动配置使用 Provider 依赖的三方SDK模块。

### app平台支持摇树的内置模块列表@utsmodules

- uni-ad
  uni-ad[广告联盟](https://uniad.dcloud.net.cn/)模块（`HBuilderX4.0+`）  
    + 包括API：[uni.createRewardedVideoAd](../api/create-rewarded-video-ad.md)
    + 依赖的模块：无
  
  注意：此模块仅包含基础广告模块，配置聚合广告平台需手动配置，详情参考[uni-ad](#uni-ad)章节

- uni-canvas
  [canvas画布组件](../component/canvas.md)模块（`HBuilderX4.25+`）
    + 包括内置组件：[canvas](../component/canvas.md)
    + 包括API：[UniCanvasElement](../dom/unicanvaselement.md)、[CanvasRenderingContext2D](../api/canvasrenderingcontext2d.md)
    + 依赖的模块：无

- uni-cloud-client
  调用uniCloud[云函数/云对象](https://doc.dcloud.net.cn/uniCloud/cf-functions.html)模块
    + 包括API：[uniCloud.importObject](https://doc.dcloud.net.cn/uniCloud/cloud-obj.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B0%83%E7%94%A8)、[uniCloud.callFunction](https://doc.dcloud.net.cn/uniCloud/cf-callfunction.html#callfunction%E6%96%B9%E6%B3%95)
    + 依赖的模块：uni-media、uni-network

- uni-createRequestPermissionListener
  监听权限申请模块（`HBuilderX4.0+`）
    + 包括API：[uni.createRequestPermissionListener](../api/create-request-permission-listener.md)
    + 依赖的模块：无

  注意：HBuilderX4.0版本新增，仅App-Android平台支持。

- uni-createWebviewContext
  创建 web-view 组件的上下文对象模块
    + 包括API：[uni.createWebviewContext](../api/create-webview-context.md)
    + 依赖的模块：无

- uni-facialRecognitionVerify
  [uni实人认证](https://doc.dcloud.net.cn/uniCloud/frv/intro.html)模块
    + 包括API：[uni.getFacialRecognitionMetaInfo](../api/facial-recognition-verify.md#getfacialrecognitionmetainfo)、[uni.startFacialRecognitionVerify](../api/facial-recognition-verify.md#startfacialrecognitionverify)
    + 依赖的模块：无

- uni-fileSystemManager
  文件管理模块（`HBuilderX3.99+`）
    + 包括API：[uni.getFileSystemManager](../api/get-file-system-manager.md)
    + 依赖的模块：无

- uni-getLocation
  定位模块
    + 包括API：[uni.getLocation](../api/get-location.md)
    + 依赖的模块：无

  注意：此模块仅包含定位provider管理功能，需手动配置使用的定位实现模块，详情参考[uni-getlocation](#uni-getlocation)章节

- uni-getNetworkType
  获取网络类型模块
    + 包括API：[uni.getNetworkType](../api/get-network-type.md)
    + 依赖的模块：无

- uni-installApk
  安装apk模块（`HBuilderX3.99+`）
    + 包括API：[uni.installApk](../api/install-apk.md)
    + 依赖的模块：无
  
  注意：仅App-Android平台支持。

- uni-payment
  uni-payment请求支付模块
    + 包括API：[uni.requestPayment](../api/request-payment.md)
    + 依赖的模块：无
  
  注意：此模块仅包含基础支付模块，需手动配置支付方式，详情参考[uni-payment](#uni-payment)章节

- uni-getProvider
  获取服务供应商模块（`HBuilderX4.11+`）
    + 包括API：[uni.getProvider](../api/get-provider.md#getprovider)
    + 依赖的模块：无

- uni-push
  [uni-push统一推送](https://uniapp.dcloud.net.cn/unipush-v2.html)模块（`HBuilderX3.97+`）
    + 包括API：[uni.createPushMessage](../api/push.md#createpushmessage)、[uni.getPushClientId](../api/push.md#getpushclientid)、[uni.offPushMessage](../api/push.md#offpushmessage)、[uni.onPushMessage](../api/push.md#onpushmessage)
    + 依赖的模块：无

- uni-media
  多媒体相关API模块
    + 包括API：[uni.chooseImage](../api/choose-image.md)、[uni.previewImage](../api/preview-image.md)、[uni.saveImageToPhotosAlbum](../api/save-image-to-photos-album.md)、[uni.getImageInfo](../api/get-image-info.md)、[uni.compressImage](../api/compress-image.md)、[uni.chooseVideo](../api/choose-video.md)、[uni.saveVideoToPhotosAlbum](../api/save-video-to-photos-album.md)、[uni.getVideoInfo](../api/get-video-info.md)、[uni.compressVideo](../api/compress-video.md)
    + 依赖的模块：无

- uni-network
  网络请求（文件上传/下载）模块
    + 包括API：[uni.downloadFile](../api/download-file.md)、[uni.request](../api/request.md)、[uni.uploadFile](../api/upload-file.md)
    + 依赖的模块：无

- uni-virtualPayment
  虚拟支付模块（`HBuilderX4.25+`）
    + 包括API：[uni.requestVirtualPayment](../api/virtual-payment.md#requestvirtualpayment)、[uni.getVirtualPaymentManager](../api/virtual-payment.md#getvirtualpaymentmanager)
    + 依赖的模块：无

- uni-video
  [video视频组件](../component/video.md)模块
    + 包括内置组件：[video](../component/video.md)
    + 包括API：[uni.createVideoContext](../api/create-video-context.md)
    + 依赖的模块：无

- uni-websocket
  WebSocket模块
    + 包括API：[uni.connectSocket](../api/websocket-global.md)、[uni.onSocketOpen](../api/websocket-global.md#onsocketopen)、[uni.onSocketError](../api/websocket-global.md#onsocketerror)、[uni.sendSocketMessage](../api/websocket-global.md#sendsocketmessage)、[uni.onSocketMessage](../api/websocket-global.md#onsocketmessage)、[uni.closeSocket](../api/websocket-global.md#closesocket)、[uni.onSocketClose](../api/websocket-global.md#onsocketclose)
    + 依赖的模块：无

- uni-verify
  [App一键登录](../api/get-univerify-manager.md)模块（`HBuilderX3.99+`）
    + 包括API：[uni.getUniverifyManager](../api/get-univerify-manager.md#getuniverifymanager)、[UniverifyManager.preLogin](../api/get-univerify-manager.md#prelogin)、[UniverifyManager.login](../api/get-univerify-manager.md#login)
    + 依赖的模块：无

再次强调，以上模块不属于ext组件或api，是内置模块。但如果你的代码中没有使用这些组件和api，打正式包或自定义基座时会被摇掉。

**注意**
uts插件中暂不支持摇树，如果uts插件中使用了以上模块，需在使用此uts插件的 uni-app x 项目 manifest.json 文件的 app -> distribute -> modules 下手动添加对应节点：
```json
	//以下示例手动添加  uni-media  模块
	modules:{
		"uni-media":{}
	}
```

## uni-ad@uni-ad

**开屏广告兼容性**

|Web|Android|iOS	|
|--	|--			|--		|
|x	|3.99		|4.22	|


[uni-ad](https://uniad.dcloud.net.cn/) 是DCloud提供的聚合广告服务，使用前需先登录 [uni-ad 广告联盟](https://uniad.dcloud.net.cn/) 开通。

在uni-app x客户端，uni-ad是一个独立模块。该SDK已经在工信部完成SDK备案，确保隐私合规。

广告包括很多形式，其中有的需要开发代码调用，比如激励视频广告，另参考：[uni.createRewardedVideoAd](../api/create-rewarded-video-ad.md)

使用开屏广告不需要调用任何API，应用启动时会自动拉取并展示开屏广告。

这也导致 uni-ad 模块无法参与摇树。需要开发者在 manifest.json 中手动配置，打包后才能生效。

使用 uni-ad 模块需在 manifest.json 文件中添加 uni-ad 节点，并配置使用的广告 SDK。

### 配置三方广告SDK
在 app -> distribute -> modules 下添加 uni-ad 节点：
```json
	modules:{
		"uni-ad":{
			"gdt":{},
			"gm":{},
			"ks":{},
			"sgm":{},
			"bd":{}
		}
	}
```

其中 uni-ad 下的节点表示要聚合的广告平台：
| 标识 | 广告平台名称 |
| :-  | :- |
| gdt | 腾讯优量汇广告联盟 |
| gm | 穿山甲GroMore |
| ks | 快手广告联盟 |
| sgm | Sigmob广告联盟 |
| bd | 百度百青藤广告联盟 |

添加相应的节点，云端打包就会将对应的广告平台 SDK 打包到最终安装包中。

注意：
- 穿山甲GroMore、快手广告联盟、腾讯优量汇广告联盟仅支持`armeabi-v7a`和`arm64-v8a`两个CPU平台。
- 目前仅支持上述国内广告平台，国际广告暂不支持。

::: warning 注意事项
开屏广告展示前会先显示`splash启动界面`，等待开屏广告服务器返回数据后渲染开屏广告，超过2.5秒未成功加载广告则不显示开屏广告，直接进入应用首页。
app平台默认`启动界面`为白色（暗黑模式下为黑色），为了避免等待加载开屏广告时白屏，建议开通开屏广告后在manifest中配置`启动界面`，详情参考[splash启动界面](./manifest-splashscreen.md)
:::

## uni-payment@uni-payment
> HBuilderX 4.11+ 新增支持 uni-payment 请求支付

在uni-app x客户端，uni-payment是一个独立模块。需要开发者在 manifest.json 中手动配置，并提交云端打包后才能生效。

使用 uni-payment 模块需在 manifest.json 文件中添加如下配置：

### 配置支付SDK
在 app -> distribute -> modules 下添加 uni-payment 节点：
```json
  	modules:{
	     	"uni-payment": {
              "alipay": {},//支付宝支付
              "wxpay": {//微信支付
                "android": {},
                "ios": {
                    "appid": "wxd569c7238830733b",
                    "universalLink": "https://uniappx.dcloud.net.cn/ulink/"
                }
              }
          }
	}
```

其中 uni-payment 下的节点表示要聚合的支付方式：
| 标识 | 支付方式 |
| :-  | :- |
| alipay | 支付宝支付 |
| wxpay | 微信支付 |

添加相应的节点，云端打包就会将对应的支付 SDK 打包到最终安装包中。

- 支付宝支付
  app平台无需配置参数，配置`alipay`节点表示应用云端打包包含支付宝SDK
- 微信支付
  app-android平台无需配置参数，app-ios平台需配置以下参数：
  + `appid`：微信开放平台申请的应用ID（AppID）
  + `universalLink`：iOS平台的通用链接（Universal Link），通用链接配置参考：[https://uniapp.dcloud.net.cn/tutorial/app-ios-capabilities.html#通用链接-universal-link](https://uniapp.dcloud.net.cn/tutorial/app-ios-capabilities.html#%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5-universal-link)
    注意：通用链接必须与微信开放平台 “管理中心” > “应用详情” > “开发信息” 中的“Universal Links”项中配置一致


> app-ios平台支付模块需HBuilderX4.18及以上版本

## uni-getLocation@uni-getLocation
> HBuilderX 4.25+ 新增支持 provider 机制的获取定位API（支持system、tencent定位）

在uni-app x客户端，uni-getLocation是一个独立模块。需要开发者在 manifest.json 中手动配置，并提交云端打包后才能生效。

使用 uni-getLocation 模块需在 manifest.json 文件中添加如下配置：

其中 uni-getLocation 下的节点表示要聚合的定位方式：
| 标识 | 定位方式 |
| :-  | :- |
| system | 系统定位 |
| tencent | 腾讯定位 |

添加相应的节点，云端打包就会将对应的定位 SDK 打包到最终安装包中。


### 配置定位SDK
在 app -> distribute -> modules 下添加 uni-getLocation 节点：
```json
	modules:{
		"uni-getLocation":{
			"system":{},
			"tencent":{}
		}
	}
```

### 配置腾讯定位SDK的参数

使用腾讯定位SDK需到 [腾讯位置服务](https://lbs.qq.com/) 官网申请TencentLBSAPIKey，并配置到应用中。 

#### iOS平台配置腾讯定位相关参数 @uni-getLocation-key

需在项目根目录下的 Info.plist 中配置，包括以下内容：
- 腾讯定位的 TencentLBSAPIKey  
- 使用定位权限弹出的授权提示信息：NSLocationAlwaysAndWhenInUseUsageDescription、NSLocationAlwaysUsageDescription、NSLocationWhenInUseUsageDescription  
- 应用需要使用高精度定位时还需配置 NSLocationTemporaryUsageDescriptionDictionary 的 PurposeKey，说明高精度定位的原因 
- 如果应用需要后台定位能力，配置 UIBackgroundModes 的 location，注意需苹果后台配置描述文件是勾选`后台运行能力`  

配置教程参考： [iOS原生配置文件Info.plist文档](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#infoplist)

以下为配置示例：  
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
	<dict>
		<key>TencentLBSAPIKey</key>
		<string>腾讯位置服务官网申请的Key</string>

		<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
		<string>允许使用定位权限吗</string>
		<key>NSLocationAlwaysUsageDescription</key>
		<string>允许一直使用定位权限</string>
		<key>NSLocationWhenInUseUsageDescription</key>
		<string>允许仅在app运行期间使用定位权限</string>
		<key>NSLocationTemporaryUsageDescriptionDictionary</key>
		<dict>
			<key>PurposeKey</key>
			<string>这里需要您临时授权高精度定位权限,一次临时授权时效仅app一个周期内, 每次硬启动都需要临时授权</string>
		</dict>

  	<key>UIBackgroundModes</key>
		<array>
			<string>location</string>
		</array>

	</dict>
</plist>
```

#### Andoird平台配置腾讯定位key到项目 @uni-getLocation-android-key

在项目根目录下添加 AndroidManifest.xml 文件，详情参考：[Android原生应用清单文件](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#%E5%BA%94%E7%94%A8%E6%B8%85%E5%8D%95%E6%96%87%E4%BB%B6-androidmanifest-xml)。将申请的 key 配置到项目 AndroidManifest.xml 的 application 节点中，如下：
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" xmlns:tools="http://schemas.android.com/tools"
>
  <application>

    <!-- 将申请到的 key 配置在 android:value 属性中 -->
    <meta-data android:name="TencentMapSDK" android:value="您申请的Key" />

  </application>

</manifest>
```


