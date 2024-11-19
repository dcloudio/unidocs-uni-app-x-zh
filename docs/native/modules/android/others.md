## API与对应的库参照表

|模块名称							|本地依赖库												|线上依赖库																																								|最低支持安卓版本	|依赖的模块																							|
|:--								|:--													|:--																																									|:--			|:--																								|
|uni-createRequestPermissionListener|uni-createRequestPermissionListener-release.aar		|-																																										|-				|-																									|
|uni-createWebviewContext			|uni-createWebviewContext-release.aar					|-																																										|-				|-																									|
|uni-fileSystemManager				|uni-fileSystemManager-release.aar						|org.brotli:dec:0.1.2																																					|-				|-																									|
|uni-getLocation-system				|uni-getLocation-system-release.aar						|-																																										|-				|-																									|
|uni-getNetworkType					|uni-getNetworkType-release.aar							|-																																										|-				|-																									|
|uni-installApk						|uni-installApk-release.aar								|-																																										|-				|-																									|
|uni-network						|uni-network-release.aar								|com.squareup.okhttp3:okhttp:3.12.12																																	|-				|-																									|
|uni-websocket						|uni-websocket-release.aar								|com.squareup.okhttp3:okhttp:3.12.12																																	|-				|-																									|
|uni-cloud-client					|uni-cloud-client-release.aar							|-																																										|-				|uni-network<br/>uni-storage<br/>uni-getSystemInfo<br/>uni-prompt<br/>uni-media<br/>uni-websocket	|
|uni-media							|uni-media-release.aar<br/>nativeobj-preview-release.aar|com.github.bumptech.glide:glide:4.9.0<br/>androidx.recyclerview:recyclerview:1.0.0<br/>androidx.appcompat:appcompat:1.6.1<br/>"androidx.activity:activity-ktx:1.9.2"	|-				|uni-prompt																							|
|uni-privacy						|uni-privacy-release.aar								|-																																										|-				|-																									|
|uni-getProvider					|uni-getProvider-release.aar							|-																																										|-				|-	
|uni-shareWithSystem				|uni-shareWithSystem-release.arr						|-																																										|-				|-		
|uni-createInnerAudioContext		|uni-createInnerAudioContext-release.aar				|com.google.android.exoplayer:exoplayer-core:2.18.0																																										|-				|-																								|
		
各模块对应的API可参考文档[App端支持的内置模块列表](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#utsmodules)

## 配置

根据编译出来的`unpackage/resource/app-android/{appid}/www/manifest.json`中的`app->distribute->modules`下的模块配置。

### 配置本地依赖库

将上表中本地依赖库对应的aar拷贝到app模块的libs目录下

### 配置线上依赖库

将上表中的线上依赖库添加到app模块的build.gradle中。以`uni-network`为例，参考：

```
	dependencies {
		implementation 'com.squareup.okhttp3:okhttp:3.12.12'
	}
```

## 其他模块

### canvas

#### 本地依赖库

|名称								|
|:--								|
|uni-canvas-release.aar				|
|uni-canvas-component-release.aar	|

#### 组件注册

将以下内容添加到主模块的build.gradle，详见[根据configjson配置应用](../../use/android.md#utscomponents)。

```groovy
defaultConfig {
    buildConfigField "String", "UTSRegisterComponents", "\"[{\\\"name\\\":\\\"canvas\\\",\\\"class\\\":\\\"io.dcloud.canvas.CanvasComponent\\\",\\\"node\\\":\\\"io.dcloud.canvas.UniCanvasElementImpl\\\"}]\""
}
```

[uni-ad](/native/modules/android/uni-ad.md)

[uni-video](/native/modules/android/uni-video.md)

[uni-push](/native/modules/android/uni-push.md)

[uni-facialRecognitionVerify](/native/modules/android/uni-facialRecognitionVerify.md)

[uni-verify](/native/modules/android/uni-verify.md)

[uni-payment](/native/modules/android/uni-payment.md)

[uni-map-tencent](/native/modules/android/uni-map-tencent.md)
