## uni.getBackgroundAudioManager() @getbackgroundaudiomanager

**支持格式**

|格式	|Android|iOS|
|:-		|:-			|:-	|
|mp3	|√			|√	|
|mp4	|√			|√	|
|m4a	|√			|√	|
|wav	|√			|√	|
|aac	|√			|√	|
|flac	|√			|√	|
|aiff	|x			|√	|
|amr	|√			|x	|
|ape	|√			|x	|
|caf	|x			|√	|
|ogg	|√			|x	|
|wma	|√			|x	|

- web平台的支持取决于浏览器的实现，一般浏览器上述音频格式均支持
- 小程序平台支持的格式见各家小程序的文档

**缓存说明**

- App-Android 平台播放的网络音频，默认会缓存到应用cache目录的uni-audio/background文件夹下，默认大小为100M，超过后会根据最近最少使用的缓存算法自动进行清除；
- App-iOS 平台暂不支持Cache功能；

**关于Cookie与UA**

- App-Android 平台会将应用的Cookie与UA信息自动带入到请求链接


<!-- UTSAPIJSON.getBackgroundAudioManager.description -->

<!-- UTSAPIJSON.getBackgroundAudioManager.compatibility -->

<!-- UTSAPIJSON.getBackgroundAudioManager.param -->

<!-- UTSAPIJSON.getBackgroundAudioManager.returnValue -->

<!-- UTSAPIJSON.getBackgroundAudioManager.tutorial -->

<!-- UTSAPIJSON.getBackgroundAudioManager.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 注意
1，audio默认开启了缓存策略
