# uni-app x Android原生SDK

## 正式版

### 4.36.2024112817

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12683-4.36.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.36.2024112817）版本生成本地打包App资源。
* 新增 uni统计功能 [文档](https://uniapp.dcloud.net.cn/uni-stat-uniappx) <https://issues.dcloud.net.cn/pages/issues/detail?id=12350>
* 新增 vue 页面实例.options 及 onLoad 参数调整为 UTSJSONObject 类型 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9323>
* 新增 API `uni.openDialogPage`、`uni.closeDialogPage` 打开和关闭模态弹框页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3870>
* 调整 API getApp 返回值类型为 UniApp，新增若干方法，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3847>
* 调整 API getCurrentPages 返回值类型为 UniPage数组，新增UniPage对象若干方法，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3847>
* 新增 API eventBus 支持通过 id 移除自定义事件监听器，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#on) <https://issues.dcloud.net.cn/pages/issues/detail?id=9068>
* 修复 API uni.createCanvasContextAsync 在生命周期 onLoad/onMount 中无法获取width/height [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13212)
* 新增 编译器 优化uts类型推导 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/#%E7%B1%BB%E5%9E%8B%E8%87%AA%E5%8A%A8%E6%8E%A8%E5%AF%BC) <https://issues.dcloud.net.cn/pages/issues/detail?id=9967>
* 新增 pages.json pageStyle支持隐藏状态栏和底部指示器，实现全屏效果 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3854>
* 新增 组件 native-view组件和UniNativeViewElement，支持vue规范开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/native-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3846>
* 新增 `标准模式`组件，即通过vue规范和native-view来开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-component-vue.html)
* 新增 组件 map 地图 [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3849>
* 新增 组件 ad 信息流广告 [文档](https://doc.dcloud.net.cn/uni-app-x/component/ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9414>
* 新增 uni-ad Android平台国内广告新增华为、倍孜、聚力阅盟、泛连渠道；App平台国内广告新增章鱼渠道 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad) <https://issues.dcloud.net.cn/pages/issues/detail?id=9102>
* 新增 组件 button 支持open-type=agreePrivacyAuthorization 用于同意隐私政策 [文档](https://doc.dcloud.net.cn/uni-app-x/component/button.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8245>
* 新增 API 隐私信息授权相关API [文档](https://doc.dcloud.net.cn/uni-app-x/api/privacy.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7900>
* 新增 API uni.createInterstitialAd 插屏广告 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-interstitial-ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7113>
* 新增 API uni.chooseLocation 打开地图选择位置 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12430>
* 新增 API uni.shareWithSystem 调用系统分享 [文档](http://doc.dcloud.net.cn/uni-app-x/api/share-with-system.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10687>
* 新增 API uni.getAppBaseInfo 支持渠道包的channel渠道信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8190>
* 新增 API uni.requestPayment 支付失败错误码 700607 和 700608 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html#irequestpaymentfail-values) <https://issues.dcloud.net.cn/pages/issues/detail?id=8366>
* 新增 API uni.chooseImage 支持 pageOrientation 参数适配横竖屏 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10683>
* 新增 API uni.chooseVideo 支持 pageOrientation 参数适配横竖屏 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12342>
* 新增 CSS 支持内置 uni-icon 字体图标 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/at-rules.html#uniicon) <https://issues.dcloud.net.cn/pages/issues/detail?id=11994>
* 新增 app.uvue 原生捕获异常触发应用生命周期onError [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#onerror) <https://issues.dcloud.net.cn/pages/issues/detail?id=7116>
* 优化 provider注册机制 [文档](https://doc.dcloud.net.cn/uni-app-x/api/provider.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7394>
* 修复 编译器 在 windows 系统上运行同步文件可能不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10570)
* 修复 4.2版本引发的 编译器 软链的插件编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7397)
* 修复 4.19版本引发的 pages.json 下拉刷新loading的样式设置backgroundTextStyle属性无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2537)
* 修复 vue 设置样式 display: flex 时，v-show="false" 首次渲染会显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11473)
* 修复 pages.json tabbar不支持字体图标在theme.json配置颜色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11289)
* 修复 组件 list-view 组件的@scroll事件参数deltaY数据异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9121)
* 修复 组件 canvas source-atop与web效果不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11284)
* 修复 3.99版本引发的 组件 picker-view，给picker-view动态设置indicator-style、mask-top-style、mask-bottom-style无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6620)
* 修复 API getCurrentPages getPageStyle 返回页面样式信息不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10274)
* 修复 API uni.loadFontFace 不支持 base64 格式数据URL [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12105)
* 修复 3.99版本引发的 CSS border 动态设置 boder/background 样式切换不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7236)
* 新增 发行 云端打包支持aab格式 [文档](https://doc.dcloud.net.cn/uni-app-x/tutorial/app-package.html#aab) <https://issues.dcloud.net.cn/pages/issues/detail?id=7171>
* 新增 发行 云端打包支持 aaptOptions、buildFeatures 配置 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#aaptoptions) <https://issues.dcloud.net.cn/pages/issues/detail?id=10770>
* 新增 发行 云端打包支持 enableResourceOptimizations 配置关闭原生res资源文件名称混淆 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#enableresourceoptimizations) <https://issues.dcloud.net.cn/pages/issues/detail?id=12424>
* 新增 API uni.createInnerAudioContext 支持音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10686>
* 新增 API uni.getFileSystemManager 文件管理模块支持Arraybuffer [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6881>
* 新增 API uni.chooseImage 支持 albumMode 参数配置使用系统相册选择图片 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12344>
* 新增 API uni.chooseVideo 支持 albumMode 参数配置使用系统相册选择视频 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10685>
* 调整 页面内容可渲染到全面屏手势指示条区域 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-window-info.html#safearea)
* 优化 API uni.$emit 支持不传参数或传多个参数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11588)
* 修复 vue UTSJSONObject使用keyPath不触发响应式变更 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8845)
* 修复 vue keepAlive 组件切换时，触发了 update 生命周期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7420)
* 修复 vue app.config.globalProperties无法在app.uvue中使用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9417)
* 修复 vue defineModel如果父级没有接收，则安卓没有变化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8741)
* 修复 vue 使用h()函数时无法使用具名插槽 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12388)
* 修复 vue v-bind与其他绑定混合使用编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12488)
* 修复 pages.json 横屏参数导致启动页面的时候会有一个切换的动作 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11147)
* 修复 组件 scroll-view 安卓端4.23scroll-view子元素最后一个元素margin-bottom无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=3866)
* 修复 组件 scroll-view 组件是list-item组件的子元素时可能会不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6623)
* 修复 4.18版本引发的 组件 scroll-view 嵌套滚动时 scroll-view触发了滚动行为但未触发@scroll事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7006)
* 修复 3.91版本引发的 组件 swiper 在app端，swiper第一次触发@animationfinish事件得到detail中的source为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2342)
* 修复 组件 text 设置宽高后文本无法修改为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9870)
* 修复 组件 rich-text 组件设置selectable为true时itemclick事件无法触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=285)
* 修复 组件 video 全屏播放时点击返回键，直接返回到上一个页面了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2184)
* 修复 组件 video 返回桌面，在进入是黑屏，不是暂停到当前页面 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7689)
* 修复 组件 canvas Contex.measureText 安卓端绘制文字会抖动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6631)
* 修复 组件 canvas Context2d arc方法counterclockwise默认值不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7107)
* 修复 组件 canvas .toDataURL() 在部分安卓模拟器上卡顿 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7118)
* 修复 组件 canvas 放在swiper里面无法绘制，可见current项可以绘制，但是切换之后回来绘制的内容就不见了  【安卓】 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7188)
* 修复 组件 canvas 绘制的文字为空字符串会闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8772)
* 修复 组件 触发 @click 事件没有音效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11066)
* 修复 组件 list-item 中的子元素在某些场景 boder 和 background-color 样式不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12341)
* 修复 4.02版本引发的 组件 rich-text 中的 a 标签某些场景下可能出现点击不触发 itemclick 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11051)
* 修复 组件 video 云打包后应用static目录下视频无法播放 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12871)
* 修复 API uni.setTabBarItem 【安卓端】uni.setTabBarItem设置iconfont报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9969)
* 修复 CSS transform 设置rotateX或者rotateY为180度时，view消失的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5570)
* 修复 API uni.redirectTo 某些场景窗口动画失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11158)
* 修复 API push 某些情况点击离线消息不能触发 `click` 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11268)
* 修复 API push 模块使用的 gson 库可能与uts插件的依赖库冲突 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11861)
* 修复 API uni.saveVideoToPhotosAlbum 云打包后保存应用static目录下的视频文件失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12867)
* 修复 API uni.downloadFile 部分情况下可能引起应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12869)

## alpha版

### 4.43.2024122419-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12863-4.43.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.43.2024122419-alpha）版本生成本地打包App资源。