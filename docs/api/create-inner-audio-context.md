<!-- ## uni.createInnerAudioContext() @createinneraudiocontext -->

<!-- UTSAPIJSON.createInnerAudioContext.name -->

<!-- UTSAPIJSON.createInnerAudioContext.description -->

:::warning 注意
使用完后，必须调用destory方法将资源进行释放
:::

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
- HarmonyOS 平台使用 [AudioPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-media#audioplayerdeprecated?ha_source=Dcloud&ha_sourceId=89000448) 实现

**缓存说明**

- App-Android 平台播放的网络音频，默认会缓存到应用cache目录的uni-audio文件夹下，默认大小为100M，超过后会根据最近最少使用的缓存算法自动进行清除；
- 4.51 版本以上 App-iOS 平台支持Cache功能，缓存路径、默认大小和自动清理机制和 Android 一样；

<!-- UTSAPIJSON.createInnerAudioContext.compatibility -->

<!-- UTSAPIJSON.createInnerAudioContext.param -->

<!-- UTSAPIJSON.createInnerAudioContext.returnValue -->

<!-- UTSAPIJSON.createInnerAudioContext.tutorial -->

<!-- UTSAPIJSON.createInnerAudioContext.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
