# uni-app x iOS原生SDK

## 正式版

### 4.64.2025042916

[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.64.zip)

* 重构 uni.showModal，基于dialogPage，支持 uni.hideModal、国际化、暗黑主题、横屏 [文档](https://doc.dcloud.net.cn/uni-app-x/api/show-modal.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16800>
* 修复 4.51版本引发的 API uni.showActionSheet 菜单分割线太粗 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15574)
* 新增 组件 camera组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/camera.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16169>
* 新增 组件 text 支持 css 属性 text-shadow [文档](https://doc.dcloud.net.cn/uni-app-x/css/text-shadow.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15524>
* 新增 API uni.requestMerchantTransfer 支持调起微信请求用户确认收款 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-recorder-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15360>
* 新增 API uni.getRecorderManager 支持录音功能 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-recorder-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15781>
* 新增 API UniPage 支持 width、height、statusBarHeight 等属性 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15946>
* 新增 API websocket 支持 ArrayBuffer 类型数据 [文档](https://doc.dcloud.net.cn/uni-app-x/api/websocket.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15780>
* 新增 API uni.previewImage 完善图片加载失败逻辑 [文档](https://doc.dcloud.net.cn/uni-app-x/api/preview-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16001>
* 新增 API uni.getVideoInfo 返回结果支持 thumbTempFilePath 获取视频缩略图 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-video-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14521>
* 新增 API uni.getVideoInfo uni.compressVideo 支持返回文件字节大小 byteSize 数据，统一调整 duration、size 等属性值精度 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-video-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15892>
* 新增 CSS var变量 --status-bar-height 支持动态更新 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/function.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16070>
* 新增 CSS justify-content 支持 space-evenly [文档](https://doc.dcloud.net.cn/uni-app-x/css/justify-content.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13351>
* 新增 CSS rpx 长度单位统一在排版引擎层计算，解决在应用窗口大小发生变化时可能显示不正确的问题 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/length.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16115>
* 新增 DOM API UniElement 支持 requestFullscreen 请求全屏显示功能 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#requestFullscreen) <https://issues.dcloud.net.cn/pages/issues/detail?id=14131>
* 新增 组件 web-view 支持 bounces 配置是否开启回弹效果 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15066>
* 修复 组件 nested-scroll-header 不能动态自适应内容高度 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15744)
* 新增 组件 web-view 支持获取内容高度及内容高度变化事件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16625>
* 修复 API uni.createInnerAudioContext、uni.getBackgroundAudioManager无法播放m3u8音频直播源 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16202)
* 修复 DOM API UniElement takeSnapshot 截屏时会阻塞UI [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16044)
* Android平台、iOS平台 新增 API uni.makePhoneCall 支持拨打电话 [文档](https://doc.dcloud.net.cn/uni-app-x/api/make-phone-call.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16592>
* 修复 4.51版本引发的 API uni.showActionSheet 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17201)
* 新增 API uni.base64ToArrayBuffer 、uni.arrayBufferToBase64 [文档](https://doc.dcloud.net.cn/uni-app-x/api/base64.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15969>
* 新增 API uni.request 支持 ArrayBuffer 数据 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15802>
* 新增 API uni.chooseFile 选择文件 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-file.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15672>
* 新增 API uni.getFileSystemManager 支持在UTS插件中调用，补齐之前未支持的 readFileSync、writeFileSync 等API [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15551>
* 新增 API uni.connectEventSource 支持SSE [文档](https://doc.dcloud.net.cn/uni-app-x/api/connect-event-source.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15664>
* 新增 运行调试 CocoaPods 仓储支持配置自定义source [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-ios-cocoapods.html#usecocoapods) <https://issues.dcloud.net.cn/pages/issues/detail?id=16671>
* 新增 发行 uts插件支持原生iOS Extension [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#iosextension) <https://issues.dcloud.net.cn/pages/issues/detail?id=4949>
* 修复 pages.json 非刘海屏设备上隐藏状态栏导致导航栏显示异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16747)
* 修复 4.25版本引发的 组件 list-view 宽度动态变化时引起子组件 list-item 复用时显示异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16126)
* 修复 组件 list-item CSS 设置 margin 为负数时可能引起应用闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15701)
* 修复 组件 rich-text 嵌入 list-item 中可能引起应用闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15179)
* 修复 组件 input 设置 selection-start、selection-end 在某些场景失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16047)
* 修复 组件 input placeholder-style 设置 background-color 无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16563)
* 修复 组件 textarea CSS 设置 line-height 无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15274)
* 修复 组件 textarea 设置 hold-keyboard 为 true，scroll-view 滚动时软键盘还是会收起 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15512)
* 修复 组件 textarea 在 class 中设置 width、height 无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15703)
* 修复 组件 textarea 使用v-model 修改文本内容时光标位置会被重置到最后一行 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15895)
* 修复 组件 textarea 同时设置auto-height与max-height，内容高度大于max-height时视图无法滚动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16560)
* 修复 4.55版本引发的 组件 text selectable 文本可选效果可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17199)
* 修复 4.25版本引发的 组件 list-view scroll-into-view 属性可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16934)
* 修复 组件 waterflow scroll-into-view 属性可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16443)
* 修复 组件 input 某些场景下 hold-keyboard 设置为 true 滑动 scroll-view 依然隐藏软键盘 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17060)
* 修复 组件 web-view web页面中 a 标签 target 属性值为 _blank 时点击无法跳转 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16740)
* 修复 4.51版本引发的 组件 web-view evaLJS 注入localstorage 数据没有在页面加载前生效，导致一开始获取不到token [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15865)
* 修复 API uni.getProviderSync 返回属性providerObject: Array<UniProvider>不支持JSON.stringify()的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16557)
* 修复 API uni.reLaunch relaunch后跳转到新页面 还能侧滑返回到tabbar页面  原因是relaunch没有关闭tabbar页面 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15961)
* 修复 API uni.compressImage 压缩compressImg_开头的文件会覆盖 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16003)
* 修复 API uni.requestPayment 微信支付跳转微信失败且没有返回错误码的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15902)
* 修复 CSS transition transform 同时应用多个变换时效果可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15161)
* 修复 CSS transition-duration 只设置transition-duration没有动画效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15881)
* 修复 CSS text-decoration-line 属性运行在 iOS18 及以上设备无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16838)
* 修复 DOM API UniCanvasElement 设置宽高和安卓不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15732)
* 修复 getString/getNumber 等get方法默认值参数部分情况不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16094)
* 修复 逻辑空赋值(??=)编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15735)
* 修复 联合类型参数传递给匹配的函数时可能编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16139)
* 新增 支持 atob, btoa 函数 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/global.html#atob-encodeddata-string-string) <https://issues.dcloud.net.cn/pages/issues/detail?id=15987>
* 修复 项目路径包含空格时，修改uts插件会报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15919)


## alpha版

### 4.63.2025042307-alpha

[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.63.zip)

* 新增 API uni.connectEventSource 支持SSE [文档](https://doc.dcloud.net.cn/uni-app-x/api/connect-event-source.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15664>
* 新增 API uni.makePhoneCall 支持拨打电话 [文档](https://doc.dcloud.net.cn/uni-app-x/api/make-phone-call.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16592>
* 新增 组件 web-view 支持获取内容高度及内容高度变化事件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16625>
* 修复 4.51版本引发的 API uni.showActionSheet 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17201)
* 修复 4.61版本引发的 API uni.showModal 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17230)
* 修复 4.61版本引发的 API uni.showModal 应用主题设置为跟随系统时暗黑效果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17226)
* 修复 4.55版本引发的 组件 text selectable 文本可选效果可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17199)

