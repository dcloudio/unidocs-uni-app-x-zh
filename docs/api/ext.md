# 其它api

## Web平台

uni-app x的web版从uni-app的js引擎版迁移而来，理论上所有uni-app js引擎版的uni api在uni-app x的web版中都可以使用。但4.0版本的uni-app x的web版暂未对hello uni-app x列出的以外的其他api进行测试。

## App平台uni api替代@uni
插件市场和hello示例中还有一批可替代uni内置api的插件或示例代码，比如：
- 剪切板、剪贴板、复制黏贴、粘贴：`uni.setClipboardData`、`uni.getClipboardData` [见插件市场](https://ext.dcloud.net.cn/search?q=%E5%89%AA%E5%88%87%E6%9D%BF&orderBy=Relevance&cat1=8&cat2=81)
- 拨打电话：`uni.makePhoneCall` [见插件市场](https://ext.dcloud.net.cn/search?q=%E7%94%B5%E8%AF%9D&orderBy=Relevance&uni-appx=1)
- 打开三方应用：打开浏览器、应用商店、地图并传参。`plus.openUrl` [见hello uni-app x示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/template/schema/schema.uvue)
- 分享：`uni.shareWithSystem`已内置。其他三方sdk分享 [见插件市场](https://ext.dcloud.net.cn/search?q=%E5%88%86%E4%BA%AB&orderBy=Relevance&uni-appx=1)，
- 微信登录、分享、企业客服：[见插件市场](https://ext.dcloud.net.cn/search?q=%E5%BE%AE%E4%BF%A1%E7%99%BB%E5%BD%95&orderBy=Relevance&cat1=8&cat2=81&uni-appx=1)
- 谷歌登录：[见插件市场](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E7%99%BB%E5%BD%95&orderBy=Relevance&uni-appx=1)
- 谷歌支付：[见插件市场](https://ext.dcloud.net.cn/search?q=%E8%B0%B7%E6%AD%8C%E6%94%AF%E4%BB%98&orderBy=Relevance&uni-appx=1)
- 打开文件：`uni.openDocument` [见hello uts示例](https://gitcode.net/dcloud/hello-uts/-/blob/dev/uni_modules/uts-nativepage/utssdk/app-android/index.uts)、[插件市场](https://ext.dcloud.net.cn/plugin?id=12731)
- 扫码：`uni.scanCode` [见插件市场](https://ext.dcloud.net.cn/search?q=%E6%89%AB%E7%A0%81&cat1=8&type=UpdatedDate)
- 文件选择：`uni.chooseFile` [见插件市场](https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9%80%89%E6%8B%A9&cat1=8&cat2=81)
- 蓝牙：Bluetooth。[见插件市场](https://ext.dcloud.net.cn/search?q=%E8%93%9D%E7%89%99&orderBy=Relevance&cat1=8&cat2=81)
- NFC：[见插件市场](https://ext.dcloud.net.cn/search?q=nfc&orderBy=Relevance&cat1=8&cat2=81)
- 地图：chooseLocation [见插件市场](https://ext.dcloud.net.cn/search?q=%E5%9C%B0%E5%9B%BE&orderBy=Relevance&uni-appx=1)
- 陀螺仪：`uni.onGyroscopeChange`、`uni.startGyroscope`、`uni.stopGyroscope` [见插件市场](https://ext.dcloud.net.cn/plugin?id=17540)
- 加速度传感器：`uni.onAccelerometerChange`、`uni.startAccelerometer` [见插件市场](https://ext.dcloud.net.cn/plugin?id=17540)
- 生物识别：指纹识别。`uni.startSoterAuthentication` [见插件市场](https://ext.dcloud.net.cn/search?q=%E7%94%9F%E7%89%A9%E8%AE%A4%E8%AF%81&uni-appx=1)
- 震动：`uni.vibrate` [见插件市场](https://ext.dcloud.net.cn/search?q=%E9%9C%87%E5%8A%A8&uni-appx=1)
- 亮度：`uni.setScreenBrightness`、`uni.getScreenBrightness`、`uni.setKeepScreenOn` [见插件市场](https://ext.dcloud.net.cn/search?q=%E4%BA%AE%E5%BA%A6&uni-appx=1)
- 自定义相机：`uni.createCameraContext` [见插件市场](https://ext.dcloud.net.cn/search?q=%E7%9B%B8%E6%9C%BA&uni-appx=1)
- 录音：`uni.getRecorderManager` [见插件市场](https://ext.dcloud.net.cn/search?q=%E5%BD%95%E9%9F%B3&uni-appx=1)
- 播放音频：`uni.getBackgroundAudioManager`、`uni.createInnerAudioContext`，[见插件市场](https://ext.dcloud.net.cn/search?q=%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE&orderBy=Relevance&uni-appx=1)或参考如下代码：
```vue
<template>
	<button @click="playAudio">播放音频</button>
</template>
<script>
	import MediaPlayer from "android.media.MediaPlayer"; //hx中对这里alt+左键转到定义，查看该库的方法清单
	export default {
		data() {
			return {}
		},
		methods: {
			playAudio() {
				let mediaPlayer = new MediaPlayer()
				try {
					mediaPlayer.setDataSource("https://www.w3cschool.cn/statics/demosource/horse.mp3") // 网络音频文件URL  //大体积的网络音频应在协程里加载，否则容易卡ui
					// mediaPlayer.setDataSource(UTSAndroid.convert2AbsFullPath("/static/horse.mp3")) // 本地音频文件
					mediaPlayer.prepare()
					mediaPlayer.start() // 开始播放
					// mediaPlayer.pause()
					// mediaPlayer.stop()
					// mediaPlayer.release() // 释放MediaPlayer对象
					// 倍速播放参考：https://developer.android.google.cn/reference/android/media/MediaPlayer#setPlaybackParams(android.media.PlaybackParams)
				} catch (e) {
					console.log(e);
				}
			}
		}
	}
</script>
```

## plus api替代@plus
uni-app x 中不再支持plus和weex的API。过于plus api中一些常用的api，在uni-app x中进行了替换增补。
- plus.runtime.quit => [uni.exit](./exit.md)
- plus.runtime.install => [uni.installApk](./install-apk.md)

一些plus api在插件市场有替代：
- plus.sqlite [插件市场](https://ext.dcloud.net.cn/search?q=sqlite&uni-appx=1)
- plus.speech [插件市场](https://ext.dcloud.net.cn/search?q=%E6%96%87%E5%AD%97%E8%BD%AC%E8%AF%AD%E9%9F%B3&orderBy=Relevance&uni-appx=1)
- plus.runtime.openURL [插件市场](https://ext.dcloud.net.cn/plugin?id=17828)
或者参考如下代码调用。

```vue
<template>
	<view>
		<button @click="openSchema('https://uniapp.dcloud.io/uni-app-x')">使用浏览器打开指定URL</button>
		<button @click="openSchema('market://details?id=com.tencent.mm')">使用应用商店打开指定App</button>
		<button @click="openSchema('androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0')">打开地图坐标</button>
	</view>
</template>
<script>
	import Intent from 'android.content.Intent';
	import Uri from 'android.net.Uri';
	export default {
		data() {
			return {}
		},
		methods: {
			openSchema(url : string) {
				const context = UTSAndroid.getUniActivity()!;
				const uri = Uri.parse(url)
				const intent = new Intent(Intent.ACTION_VIEW, uri)
				intent.setData(uri);
				context.startActivity(intent);
			}
		}
	}
</script>
```

## kotlin代码转uts简易指南@kt2uts

以上面的打开schema代码为例。

1. 打开一个靠谱的ai，询问："kotlin中打开系统浏览器的代码"，得到如下代码：
```kotlin
import android.content.Intent  
import android.net.Uri  
  
fun openSystemBrowser(url: String) {  
    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))  
    startActivity(intent)  
}
```

2. 再问ai："把上述代码转为ts代码""
```ts
import Intent from 'android.content.Intent';
import Uri from 'android.net.Uri';

function openSystemBrowser(url: string): void {  
  const intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));  
  startActivity(intent);  
}
```

这里注意几个差别：
- kotlin中import包，是`import android.content.Intent`，而uts是`import Intent from 'android.content.Intent'`。import后面需要跟名字，from后面需要引号括起来。
- kotlin定义一个函数是`fun`，而uts是`function`
- kotlin中定义一个常量是val，而uts是const；kotlin的变量定义是var，而uts推荐使用let。
- uts中实例化对象需要使用new关键字。
- kotlin中是自己创建activity、自己管理。而uts中activity已经被uni-app x框架创建好了，要获取当前activity，有专门的api，`const context = UTSAndroid.getUniActivity()!`

有时你得到的kotlin代码可能是简写，或者ai转ts时搞错了，需要自己推理一下缺什么，简单补补改改。

官方的uni api，都是uts代码调用系统api，这里面很多例子可以参考：[https://gitcode.net/dcloud/uni-api](https://gitcode.net/dcloud/uni-api)

完整的uts插件开发指南，[详见](../plugin/uts-plugin.md)
