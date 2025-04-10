## uni.getBackgroundAudioManager() @getbackgroundaudiomanager

<!-- UTSAPIJSON.getBackgroundAudioManager.description -->

背景音频，常见于音乐播放、听书等场景。在页面关闭、应用切换到后台时，仍然可以继续播放，并且可以在手机的通知栏里进行播放、暂停、拖进度等操作。

**支持格式**

|格式	|Android|iOS|HarmonyOS|
|:-		|:-			|:-	|:-	|
|mp3	|√			|√	|√|
|mp4	|√			|√	|x|
|m4a	|√			|√	|√|
|wav	|√			|√	|√|
|aac	|√			|√	|√|
|flac	|√			|√	|x|
|aiff	|x			|√	|x|
|amr	|√			|x	|√|
|ape	|√			|x	|x|
|caf	|x			|√	|x|
|ogg	|√			|x	|√|
|wma	|√			|x	|x|

- web平台的支持取决于浏览器的实现，一般浏览器上述音频格式均支持
- 小程序平台支持的格式见各家小程序的文档
- HarmonyOS 平台使用 [AudioPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-media#audioplayerdeprecated) 实现

**缓存说明**

- App-Android 平台播放的网络音频，默认会缓存到应用cache目录的uni-audio/background文件夹下，默认大小为100M，超过后会根据最近最少使用的缓存算法自动进行清除；
- 4.51 版本以上 App-iOS 平台支持Cache功能，缓存路径、默认大小和自动清理机制和 Android 一样；

**关于Cookie与UA**

- App 平台会将应用的Cookie与UA信息自动带入到请求链接

<!-- UTSAPIJSON.getBackgroundAudioManager.compatibility -->

<!-- UTSAPIJSON.getBackgroundAudioManager.param -->

<!-- UTSAPIJSON.getBackgroundAudioManager.returnValue -->

<!-- UTSAPIJSON.getBackgroundAudioManager.tutorial -->

<!-- UTSAPIJSON.getBackgroundAudioManager.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 注意
1，audio默认开启了缓存策略
