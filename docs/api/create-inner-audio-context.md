## uni.createInnerAudioContext() @createinneraudiocontext

**注意：使用完后，必须调用destory方法将资源进行释放**

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

App平台播放的网络音频，默认会缓存到应用cache目录的uni-audio文件夹下，默认大小为100M，超过后会根据最近最少使用的缓存算法自动进行清除


<!-- UTSAPIJSON.createInnerAudioContext.description -->

<!-- UTSAPIJSON.createInnerAudioContext.compatibility -->

iOS App音频播放：[见插件市场](https://ext.dcloud.net.cn/search?q=%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE&orderBy=Relevance&uni-appx=1)

<!-- UTSAPIJSON.createInnerAudioContext.param -->

<!-- UTSAPIJSON.createInnerAudioContext.returnValue -->

<!-- UTSAPIJSON.createInnerAudioContext.tutorial -->

<!-- UTSAPIJSON.createInnerAudioContext.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
