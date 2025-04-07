## video

<!-- UTSCOMJSON.video.description -->

<!-- UTSCOMJSON.video.compatibility -->

<!-- UTSCOMJSON.video.attribute -->

<!-- UTSCOMJSON.video.event -->

<!-- UTSCOMJSON.video.component_type -->


### 视频格式
- web端支持的视频格式，不同浏览器有差异，可查询caniuse。
- 小程序平台支持的视频格式，需要具体查阅小程序平台的video组件文档。
- 鸿蒙next平台的video组件使用arkUI的video组件，视频格式[另见](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-media-components-video)
	* [x] mp4
	* [x] m4v
	* [x] mov
	* [x] 3gp
	* [x] flv
	* [x] m3u8 (本地 m3u8 文件不支持)
- Android和iOS平台支持的视频格式如下：
	* [x] mp4
	* [x] m4v
	* [x] mov
	* [x] 3gp
	* [x] flv
	* [x] webm (安卓端支持，iOS端不支持)
	* [x] m3u8 (本地m3u8文件安卓端需3.99+，iOS端需4.11+)

如需其他视频格式，可自行开发uts组件插件或搜索插件市场。

### src路径支持说明
- 本地路径/static方式
	由于uni-app/uni-app x编译时，只把/static目录下的静态资源copy到app中，所以src均需指向/static目录下。
	其他目录的视频文件由于不会被打包进去，所以无法访问。
	app平台文件路径会存在大小写敏感问题，为了有更好的兼容性，建议统一按大小写敏感原则处理 [详情](../api/file-system-spec.md#casesensitive)

- iOS/Android支持的网络路径
	* 网络媒体 http、https协议
	* 流媒体 rtmp/hls/rtsp 协议

### app平台组件实现
App-Android/iOS平台video组件使用ijkplayer库实现：[https://github.com/bilibili/ijkplayer](https://github.com/bilibili/ijkplayer)；

弹幕功能使用DanmakuFlameMaster库实现：[https://github.com/bilibili/DanmakuFlameMaster](https://github.com/bilibili/DanmakuFlameMaster)

ijkplayer库底层又使用了ffmpeg，这些库的功能较多，官方的video组件并非完全封装。有需要的开发者可以使用uts直接操作这些库。插件市场已经有一批uts库直接调用该库，[见插件市场](https://ext.dcloud.net.cn/search?q=ffmpeg&orderBy=Relevance&uni-appx=1)

video组件的源码[详见](https://gitcode.net/dcloud/uni-component/-/tree/master/uni_modules/uni-video)。下载该uni_modules到工程下，修改源码打包，可覆盖内置的video组件。

另外ijkplayer作为一个开源库，比腾讯视频等商业sdk仍有差距。如无法在开源库上满足需求，可在插件市场寻找其他插件：见插件市场[视频播放](https://ext.dcloud.net.cn/search?q=%E8%A7%86%E9%A2%91%E6%92%AD%E6%94%BE&orderBy=Relevance&uni-appx=1)

<!-- UTSCOMJSON.video.children -->

- 小程序平台、web平台均支持子组件
- App-Android平台需HBuilderX 4.25+
- App-iOS平台需HBuilderX 4.33+

子组件，可自定义视频全屏时的UI表现。开发者可以通过子组件替换默认的控件样式以及进一步扩展组件能力。hello uni-app x中给出了如何通过子组件实现自定义快进、快退控件的示例。


### 上下文对象API

video的操作api为[uni.createVideoContext()](../api/create-video-context.md)。

给video组件设一个id属性，将id的值传入uni.createVideoContext()，即可得到video组件的上下文对象，进一步可使用`.play()`、`.stop()`等方法。

<!-- UTSCOMJSON.video.example -->

<!-- UTSCOMJSON.video.reference -->

### Bug & Tips@tips
- 标准运行基座默认不包含intel x86 cpu的兼容so库，所以video组件在标准基座运行时无法在x86 cpu的设备上运行（常见于模拟器）。如需支持x86 cpu，请在manifest里配置`abiFilters`，打包或自定义基座后生效 [详见](https://uniapp.dcloud.net.cn/uni-app-x/manifest.html#android)
- App的video默认拦截触摸事件，目前会导致父组件无法响应触摸事件
- video 默认宽度为300px，高度为225px。（App平台从 uni-app x 4.0起支持该默认宽高）
- `HarmonyOS` 平台适配小窗需要在 `modules.json5` 中配置 `"preferMultiWindowOrientation": "landscape_auto"` [详情](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V13/module-configuration-file-V13#abilities%E6%A0%87%E7%AD%BE)

#### 本地文件播放
本地视频文件，有2种方式：
- static目录下（项目下或uni_modules下都支持static目录）
- 使用绝对路径。相对路径转绝对路径[详见](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#convert2absfullpath)
