# 其它api

## Web平台

uni-app x的web版从uni-app的js引擎版迁移而来，理论上所有uni-app js引擎版的uni api在uni-app x的web版中都可以使用。但4.0版本的uni-app x的web版暂未对其他api进行测试。

## App平台uni api替代@uni
插件市场和hello示例中还有一批可替代uni内置api的插件或示例代码，比如：
- [剪切板](https://ext.dcloud.net.cn/search?q=%E5%89%AA%E5%88%87%E6%9D%BF&orderBy=Relevance&cat1=8&cat2=81)：`uni.setClipboardData`、`uni.getClipboardData`
- [拨打电话](https://ext.dcloud.net.cn/plugin?id=15235)：`uni.makePhoneCall`
- [打开三方应用](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/template/schema/schema.uvue)：打开浏览器、应用商店、地图并传参。`plus.openUrl`
- [分享](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/template/share/share.uvue)：`uni.shareWithSystem`
- 打开文件：`uni.openDocument`。[hello uts示例](https://gitcode.net/dcloud/hello-uts/-/blob/dev/uni_modules/uts-nativepage/utssdk/app-android/index.uts)、[插件市场](https://ext.dcloud.net.cn/plugin?id=12731)
- [扫码](https://ext.dcloud.net.cn/search?q=%E6%89%AB%E7%A0%81&cat1=8&type=UpdatedDate)：`uni.scanCode`
- [文件选择](https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9%80%89%E6%8B%A9&cat1=8&cat2=81)：`uni.chooseFile`
- [蓝牙](https://ext.dcloud.net.cn/search?q=%E8%93%9D%E7%89%99&orderBy=Relevance&cat1=8&cat2=81)
- [NFC](https://ext.dcloud.net.cn/search?q=nfc&orderBy=Relevance&cat1=8&cat2=81)
- 播放音频：`uni.getBackgroundAudioManager`、`uni.createInnerAudioContext`，参考如下代码：
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
  
还有一些plus API未封装为 uni 的API，但可以直接使用如下代码调用。
- plus.runtime.openURL
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