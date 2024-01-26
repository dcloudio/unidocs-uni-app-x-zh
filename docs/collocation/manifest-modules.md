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

- uni-network  
  网络请求（文件上传/下载）模块，包括API：[uni.downloadFile](../api/download-file.md)、[uni.request](../api/request.md)、[uni.uploadFile](../api/upload-file.md)  
  依赖的模块：无  

- uni-getLocation-system  
  系统定位模块，包括API：[uni.getLocation](../api/get-location.md)  
  依赖的模块：无  

- uni-video  
  [video视频组件](../component/video.md)模块，包括内置组件：[video](../component/video.md)；包括API：[uni.createVideoContext](../api/create-video-context.md)  
  依赖的模块：无  

- uni-media  
  多媒体相关API模块，包括API：[uni.chooseImage](../api/choose-image.md)、[uni.previewImage](../api/preview-image.md)、[uni.saveImageToPhotosAlbum](../api/save-image-to-photos-album.md)  
  依赖的模块：无  

- uni-cloud-client  
  调用uniCloud[云函数/云对象](https://doc.dcloud.net.cn/uniCloud/cf-functions.html)模块，包括API：[uniCloud.importObject](https://doc.dcloud.net.cn/uniCloud/cloud-obj.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B0%83%E7%94%A8)、[uniCloud.callFunction](https://doc.dcloud.net.cn/uniCloud/cf-callfunction.html#callfunction%E6%96%B9%E6%B3%95)  
  依赖的模块：uni-media、uni-network  

- uni-push  
  [uni-push统一推送](https://uniapp.dcloud.net.cn/unipush-v2.html)模块（`HBuilderX3.97+`），包括API：[uni.createPushMessage](../api/push.md#createpushmessage)、[uni.getPushClientId](../api/push.md#getpushclientid)、[uni.offPushMessage](../api/push.md#offpushmessage)、[uni.onPushMessage](../api/push.md#onpushmessage)  
  依赖的模块：无  

- uni-verify  
  [App一键登陆](../api/get-univerify-manager.md)模块（`HBuilderX3.99+`），包括API：[uni.getUniverifyManager](../api/get-univerify-manager.md#getuniverifymanager)、[UniverifyManager.preLogin](../api/get-univerify-manager.md#prelogin)、[UniverifyManager.login](../api/get-univerify-manager.md#login)  
  依赖的模块：无  

- uni-facialRecognitionVerify  
  [uni实人认证](https://doc.dcloud.net.cn/uniCloud/frv/intro.html)模块，包括API：[uni.getFacialRecognitionMetaInfo](../api/facial-recognition-verify.md#getfacialrecognitionmetainfo)、[uni.startFacialRecognitionVerify](../api/facial-recognition-verify.md#startfacialrecognitionverify)  
  依赖的模块：无  

再次强调，以上模块不属于ext组件或api，是内置模块。但如果你的代码中没有使用这些组件和api，打正式包或自定义基座时会被摇掉。  

**注意**  
uts插件中暂不支持摇树，如果uts插件中使用了以上模块需在 app -> distribute -> modules 下手动添加对应节点：  
```json
	//以下示例手动添加  uni-media  模块  
	modules:{
		"uni-media":{}
	}
```

## uni-ad@uni-ad

> HBuilderX 3.99+ 新增支持 uni-ad 开屏广告

[uni-ad](https://uniad.dcloud.net.cn/) 是DCloud提供的聚合广告服务。

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

