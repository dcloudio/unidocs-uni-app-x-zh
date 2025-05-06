# uni-app x Android原生SDK

## 正式版

### 4.64.2025042916

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13432-4.64.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.64.2025042916）版本生成本地打包App资源。
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
* 新增 API uni.makePhoneCall 支持拨打电话 [文档](https://doc.dcloud.net.cn/uni-app-x/api/make-phone-call.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16592>
* 修复 4.51版本引发的 API uni.showActionSheet 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17201)
* 新增 pages.json 支持 androidThreeButtonNavigationStyle 配置系统虚拟导航栏前景色 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15762>
* 新增 组件 web-view 支持 android-nested-scroll 属性配置嵌套滚动行为 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16675>
* 新增 API uni.connectEventSource 支持 header 设置请求头 [文档](https://doc.dcloud.net.cn/uni-app-x/api/connect-event-source.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15956>
* 新增 UniPage API getAndroidActivity 获取安卓平台Activity对象 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#getandroidactivity) <https://issues.dcloud.net.cn/pages/issues/detail?id=16239>
* 修复 vue 响应式 Array 调用 reverse 后结果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16108)
* 修复 vue 组件:style绑定`<script setup>`中定义的非响应式数据运行时报类型不兼容错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16699)
* 修复 4.51版本引发的 vue script setup对外导出属性的getter、setter命名函数可能调用失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15543)
* 修复 vue inject在指定了默认值时仍告警not found [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16459)
* 修复 pages.json androidThreeButtonNavigationTranslucent 设置为 false 时，通过 backgroundColorContent 修改虚拟按键区域颜色无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15828)
* 修复 pages.json 横屏、分屏模式下页面默认导航栏高度可能不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16107)
* 修复 组件 Touch 事件 设置 transform 为 rotate 后 touch 事件返回的坐标信息不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13842)
* 修复 组件 Touch 事件 设置 scale 后触摸修改 translate 会引起闪烁 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15894)
* 修复 组件 scroll-view 嵌套 web-view 后，操作 web-view 无法滚动 scroll-view [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13460)
* 修复 组件 scroll-view 组件无法动态调整宽高 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16020)
* 修复 组件 swiper 组件设置 border-radius 不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16163)
* 修复 组件 list-view 开启下拉刷新后 sticky-header 动态加载的数据导致无法吸顶 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15395)
* 修复 组件 list-view 父容器设置 overflow 为 visible 时导致自定义下拉刷新样式无法隐藏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16718)
* 修复 组件 list-item 内元素绑定 longpress 事件，list-view 滚动几页后部分 list-item 内 longpress 事件不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15559)
* 修复 4.51版本引发的 组件 sticky-header 反复切换显示后停靠位置可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16118)
* 修复 组件 sticky-header 父容器内容高度发生变化 sticky-header 未能及时更新停靠位置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16216)
* 修复 组件 sticky-section 绑定的数据源动态 push 添加数据后引起显示错乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15591)
* 修复 4.53版本引发的 组件 text tap/click 事件可能不响应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16132)
* 修复 组件 textarea 的 line-height 属性不支持 em 单位 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12900)
* 修复 组件 image 加载长图片显示模糊 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15915)
* 修复 组件 web-view 页面关闭后播放的背景音乐未关闭 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15549)
* 修复 组件 web-view 网页中输入框获取焦点后可能被软键盘遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17222)
* 修复 API uni.downloadFile 下载超时判断逻辑不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16354)
* 修复 API uni.createInnerAudioContext uni.getBackgroundAudioManager 返回的 buffered 属性值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16770)
* 修复 API uni.getBackgroundAudioManager 播放背景音乐在 App 设置中的通知权限中通知类别显示为 uniappx [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16564)
* 修复 3.99版本引发的 CSS box-shadow 子元素改变尺寸后导致设置 box-shadow 样式的元素渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15698)
* 修复 UniPage API 使用自定义基座包真机运行热更新可能引起页面大小异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15434)
* 修复 UniPage API 应用生命周期 onLaunch 中弹出 DialogPage 后可能引起 tabBar 页面显示不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16307)
* 修复 DOM API UniElement 未设置 background-color、border-color 时执行 animate 动画将默认色修改为白色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15767)
* 修复 DOM API UniElement animate 方法设置 opacity 导致动画不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17191)
* 修复 运行调试 应用启动过程中代码报错没有日志输出 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16294)
* 修复 API dialogPage 在android5.0系统设备内容显示不全 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16939)

## alpha版

### 4.63.2025042307-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13393-4.63.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.63.2025042307-alpha）版本生成本地打包App资源。
* 新增 组件 web-view 支持获取内容高度及内容高度变化事件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16625>
* 新增 API uni.makePhoneCall 支持拨打电话 [文档](https://doc.dcloud.net.cn/uni-app-x/api/make-phone-call.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16592>
* 修复 4.51版本引发的 API uni.showActionSheet 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17201)
* 修复 4.61版本引发的 API uni.showModal 主题监听导致内存泄漏问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17230)
* 修复 4.61版本引发的 API uni.showModal 应用主题设置为跟随系统时暗黑效果不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17226)
* 修复 组件 web-view 网页中输入框获取焦点后可能被软键盘遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17222)
* 修复 DOM API UniElement animate 方法设置 opacity 导致动画不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17191)
