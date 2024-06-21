# modules

## 模块的摇树@treeShaking

uni-app x的Android基础库体积是7M，打包后的apk体积是基础库的体积加上开发者的代码及代码引用的模块的体积。有些模块涉及so库，覆盖的cpu指令越多，包体积越大。

在uni-app js引擎版中，内置模块如video，是开发者在manifest.json中手动勾选配置的。

但在uni-app x中，不需要手动配置。

HBuilderX3.93版本起，编译器支持扫描代码，摇树treeShaking，自动引入或剔除不需要的内置模块。

如应用中没有使用video组件相关功能，将不再包含video内置模块，减少安装包体积。

**摇树注意事项：**
当你打包自定义基座时，如果你的工程代码没有使用video、定位、相册、摄像头等涉及三方sdk或敏感权限的api，打出的自定义基座包就不会包含这些组件和api的功能，那么在这些自定义基座上运行时，调用相关的组件和api就会报错。\
此时您需要在工程中写相关的代码，如引用video组件或调用定位api，保存代码后重新打包自定义基座，才会包含相关模块。

您在工程中下载的ext api、三方uts插件也同理，没有引用就不会打进去。

### App端支持摇树的内置模块列表@utsmodules

- uni-createRequestPermissionListener  
  监听权限申请模块（`HBuilderX4.0+`），包括API：[uni.createRequestPermissionListener](../api/create-request-permission-listener.md)  
  依赖的模块：无  
  注意：HBuilderX4.0版本新增，仅App-Android平台支持。  

- uni-createWebviewContext  
  创建 web-view 组件的上下文对象模块，包括API：[uni.createWebviewContext](../api/create-webview-context.md)  
  依赖的模块：无  

- uni-fileSystemManager  
  文件管理模块（`HBuilderX3.99+`），包括API：[uni.getFileSystemManager](../api/get-file-system-manager.md)  
  依赖的模块：无  

- uni-getLocation-system  
  系统定位模块，包括API：[uni.getLocation](../api/get-location.md)  
  依赖的模块：无  

- uni-getNetworkType  
  获取网络类型模块，包括API：[uni.getNetworkType](../api/get-network-type.md)  
  依赖的模块：无  

- uni-installApk  
  安装apk模块（`HBuilderX3.99+`），包括API：[uni.installApk](../api/install-apk.md)  
  依赖的模块：无  
  注意：HBuilderX3.99版本新增，仅App-Android平台支持。 

- uni-media  
  多媒体相关API模块，包括API：[uni.chooseImage](../api/choose-image.md)、[uni.previewImage](../api/preview-image.md)、[uni.saveImageToPhotosAlbum](../api/save-image-to-photos-album.md)、[uni.getImageInfo](../api/get-image-info.md)、[uni.compressImage](../api/compress-image.md)、[uni.chooseVideo](../api/choose-video.md)、[uni.saveVideoToPhotosAlbum](../api/save-video-to-photos-album.md)、[uni.getVideoInfo](../api/get-video-info.md)、[uni.compressVideo](../api/compress-video.md)  
  依赖的模块：无  

- uni-network  
  网络请求（文件上传/下载）模块，包括API：[uni.downloadFile](../api/download-file.md)、[uni.request](../api/request.md)、[uni.uploadFile](../api/upload-file.md)  
  依赖的模块：无  

- uni-websocket  
  WebSocket模块，包括API：[uni.connectSocket](../api/websocket-global.md)、[uni.onSocketOpen](../api/websocket-global.md#onsocketopen)、[uni.onSocketError](../api/websocket-global.md#onsocketerror)、[uni.sendSocketMessage](../api/websocket-global.md#sendsocketmessage)、[uni.onSocketMessage](../api/websocket-global.md#onsocketmessage)、[uni.closeSocket](../api/websocket-global.md#closesocket)、[uni.onSocketClose](../api/websocket-global.md#onsocketclose)  
  依赖的模块：无  

- uni-video  
  [video视频组件](../component/video.md)模块，包括内置组件：[video](../component/video.md)；包括API：[uni.createVideoContext](../api/create-video-context.md)  
  依赖的模块：无  

- uni-cloud-client  
  调用uniCloud[云函数/云对象](https://doc.dcloud.net.cn/uniCloud/cf-functions.html)模块，包括API：[uniCloud.importObject](https://doc.dcloud.net.cn/uniCloud/cloud-obj.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B0%83%E7%94%A8)、[uniCloud.callFunction](https://doc.dcloud.net.cn/uniCloud/cf-callfunction.html#callfunction%E6%96%B9%E6%B3%95)  
  依赖的模块：uni-media、uni-network  

- uni-ad  
  uni-AD[广告联盟](https://uniad.dcloud.net.cn/)模块（`HBuilderX4.0+`），包括API：[uni.createRewardedVideoAd](../api/create-rewarded-video-ad.md)  
  依赖的模块：无  
  注意：此模块仅包含基础广告模块，配置聚合广告平台需手动配置，详情参考[uni-ad](#uni-ad)章节  

- uni-push  
  [uni-push统一推送](https://uniapp.dcloud.net.cn/unipush-v2.html)模块（`HBuilderX3.97+`），包括API：[uni.createPushMessage](../api/push.md#createpushmessage)、[uni.getPushClientId](../api/push.md#getpushclientid)、[uni.offPushMessage](../api/push.md#offpushmessage)、[uni.onPushMessage](../api/push.md#onpushmessage)  
  依赖的模块：无  

- uni-facialRecognitionVerify  
  [uni实人认证](https://doc.dcloud.net.cn/uniCloud/frv/intro.html)模块，包括API：[uni.getFacialRecognitionMetaInfo](../api/facial-recognition-verify.md#getfacialrecognitionmetainfo)、[uni.startFacialRecognitionVerify](../api/facial-recognition-verify.md#startfacialrecognitionverify)  
  依赖的模块：无  

- uni-verify  
  [App一键登录](../api/get-univerify-manager.md)模块（`HBuilderX3.99+`），包括API：[uni.getUniverifyManager](../api/get-univerify-manager.md#getuniverifymanager)、[UniverifyManager.preLogin](../api/get-univerify-manager.md#prelogin)、[UniverifyManager.login](../api/get-univerify-manager.md#login)  
  依赖的模块：无  
- uni-payment  
  uni-payment请求支付模块，包括API：[uni.requestPayment](../api/request-payment.md) <br>
  依赖的模块：无  
  注意：此模块仅包含基础支付模块，需手动配置支付方式，详情参考[uni-payment](#uni-payment)章节 

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

> HBuilderX 3.99 app-android平台 新增支持 uni-ad 开屏广告
> HBuilderX 4.22 app-ios平台 新增支持 uni-ad 开屏广告

[uni-ad](https://uniad.dcloud.net.cn/) 是DCloud提供的聚合广告服务。  
激励视频广告请参考：[uni.createRewardedVideoAd](../api/create-rewarded-video-ad.md)  

在uni-app x客户端，uni-ad是一个独立模块。使用开屏广告不需要调用任何API，应用启动时会自动拉取并展示开屏广告。这也导致 uni-ad 模块无法参与摇树。
需要开发者在 manifest.json 中手动配置，并提交云端打包后才能生效。

使用 uni-ad 模块需在 manifest.json 文件中添加如下配置：  

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

注意：穿山甲GroMore、快手广告联盟、腾讯优量汇广告联盟仅支持`armeabi-v7a`和`arm64-v8a`两个CPU平台。

注意：目前仅支持上述国内广告平台，国际广告暂不支持。

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

