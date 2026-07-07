# uni-app x iOS原生SDK

## 正式版

### 5.14.2026070214

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%405.14.zip)**

### uni-app x
* 【重要】新增 iOS平台 蒸汽模式，比原生更快的渲染系统 [详情](https://doc.dcloud.net.cn/uni-app-x/app-vapor.html)
* 【重要】App平台 蒸汽模式 新增 编译为字节码，大幅提升编译速度 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29492)
* 【重要】 新增 uni-ui x 组件库 [文档](https://doc.dcloud.net.cn/uni-app-x/component/uni-ui-x/)
* 修复 5.0版本引发的 编译器 部分async function内使用await编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27721)
* 修复 4.84版本引发的 编译器 manifest.json中启用https之后服务无法在浏览器中打开 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28064)
* 修复 编译器 同一个页面或组件内包含多个match-media时提示存在重复导入 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29050)
* 修复 编译器 当代码中定义的对象体积过大、嵌套层级过深时，编译器会抛出Method too large异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27177)
* 修复 编译器 鸿蒙蒸汽模式下textNode后的动态渲染节点无法正常更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27552)
* Web平台、App平台 新增 组件 editor 支持输入HTML内容。支持插入 code、link、blockquote [文档](https://doc.dcloud.net.cn/uni-app-x/component/editor.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26637>
* Web平台、App平台 新增 API screenBrightness uni.getScreenBrightness、uni.setScreenBrightness、setKeepScreenOn 屏幕亮度获取和设置，以及设置常亮 [文档](https://doc.dcloud.net.cn/uni-app-x/api/screen-brightness.html)<https://issues.dcloud.net.cn/pages/issues/detail?id=28158>
* Web平台、App平台 修复 组件 video 非全屏时不阻止 touch 事件冒泡 [文档](https://doc.dcloud.net.cn/uni-app-x/component/video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=30007>
* Web平台、App平台 修复 5.02版本引发的 组件 page-container 居中、右侧和左侧弹出改为全屏显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27619)
* Web平台、App平台 修复 组件 navigator url 为不存在的页面时，未正确输出错误信息 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27563)
* Web平台、App平台 新增 API dialogPage 页面跳转时，触发 dialogPage hide 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/keyboard.html#onkeyboardheightchange) <https://issues.dcloud.net.cn/pages/issues/detail?id=26530>
* Web平台、App平台 修复 API dialogPage 非栈顶页面打开 dialogPage 时非预期触发 onShow 生命周期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26547)
* Web平台 新增 组件 list-view 支持scroll-into-view属性 [文档](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26894>
* Web平台 修复 4.87版本引发的 pages.json web 端 切换到不设置 backgroundColorContent 的页面时背景色仍为上一个页面的背景色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27536)
* Web平台、iOS平台、鸿蒙平台 修复 API uni.showModal 显示输入框时默认未获取焦点 [文档](https://doc.dcloud.net.cn/uni-app-x/api/modal.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26896>
* Web平台、微信小程序平台 修复 API uni.getSystemInfo osName、platform、deviceType 信息不完整和多端不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29495)
* Web平台 修复 API modal PC宽屏时窗口宽度过宽 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29731)
* Web平台 修复 CSS scroll-view等容器组件flex-wrap样式不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29282)
* App平台 新增 API contact 操作通讯录联系人 [文档](https://doc.dcloud.net.cn/uni-app-x/api/contact.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28887>
* App平台 新增 API calendar 向系统日历添加事件 [文档](https://doc.dcloud.net.cn/uni-app-x/api/calendar.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28522>
* App平台 新增 API compass 获取罗盘数据 [文档](https://doc.dcloud.net.cn/uni-app-x/api/compass.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28884>
* App平台 新增 API accelerometer 获取加速度数据 [文档](https://doc.dcloud.net.cn/uni-app-x/api/accelerometer.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28881>
* App平台 新增 API gyroscope 获取陀螺仪数据 [文档](https://doc.dcloud.net.cn/uni-app-x/api/gyroscope.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28885>
* App平台 新增 API vibrate 振动 [文档](https://doc.dcloud.net.cn/uni-app-x/api/vibrate.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28507>
* App平台 调整 API uni.openLocation 调整为内置 API [文档](https://uniapp.dcloud.net.cn/api/location/open-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28556>
* 【重要】App平台 蒸汽模式 调整 页面默认可滚动，与web、小程序拉齐。除非在pages.json里配置disableScroll:true。[文档](https://doc.dcloud.net.cn/uni-app-x/page.html#disablescroll) <https://issues.dcloud.net.cn/pages/issues/detail?id=29551>
* App平台 蒸汽模式 新增 CSS class 支持page选择器 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/selector.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=30283>
* App平台 蒸汽模式 修复 编译器 不支持编译加密插件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29733)
* App平台 蒸汽模式 修复 vue 动态片段延迟渲染时 slot 上下文丢失导致作用域插槽不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29737)
* App平台 蒸汽模式 修复 vue 字节码模式 v-for 动态插槽崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29976)
* App平台 蒸汽模式 修复 组件 swiper 开启循环模式 衔接后的第一个item滑动有阻尼感的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29579)
* App平台 蒸汽模式 修复 组件 swiper 快速切换current属性时 transition事件的dx偏移量不正确的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29589)
* App平台 蒸汽模式 修复 组件 swiper 组件预销毁后的后续处理，避免销毁后仍然执行相关逻辑 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29300)
* App平台 蒸汽模式 修复 组件 list-view 上方list-item尺寸未获取时向上滚动可能出现跳动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30084)
* App平台 蒸汽模式 修复 组件 list-view 初次渲染后未发生滚动缓冲区一直不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30240)
* App平台 蒸汽模式 修复 组件 list-view 不含可回收区域时自定义下拉刷新无法使用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30358)
* App平台 蒸汽模式 修复 组件 sticky-section 设置横向padding时list-item及sticky-header宽度异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30529)
* App平台 蒸汽模式 修复 组件 text 插值节点后使用嵌套子text导致崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30018)
* App平台 蒸汽模式 修复 组件 button 开启 disabled 和 plain 时，type 为 primary 和 warn 的 border-color 和 color 不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30528)
* App平台 蒸汽模式 修复 组件 unicloud-db 内置的方法不存在问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30340)
* App平台 蒸汽模式 修复 CSS flex-basis/line-height 关键字样式被错误解析为数值 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29916)
* App平台 蒸汽模式 修复 CSS transform 编译为字节码 transform: scaleY(0.5) 导致元素宽度不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29775)
* App平台 蒸汽模式 修复 CSS class 自定义组件使用 a.b 时 b无法覆盖a [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29633)
* App平台 蒸汽模式 修复 CSS height flex+height配合布局异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29915)
* App平台 VDOM模式 修复 vue useComputedStyle计算外部传入样式时class优先级高于style [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26988)
* Android平台、iOS平台 新增 组件 picker [文档](https://doc.dcloud.net.cn/uni-app-x/component/picker.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=27040>
* Android平台、iOS平台 调整 组件 video 使用 uts 标准组件模式重构 [文档](https://doc.dcloud.net.cn/uni-app-x/component/video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16883>
* Android平台、iOS平台 新增 API uni.login 微信登录 [文档](https://doc.dcloud.net.cn/uni-app-x/api/sign-in.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26003>
* Android平台、iOS平台 新增 API uni.share 微信分享 [文档](https://doc.dcloud.net.cn/uni-app-x/api/share.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26820>
* Android平台、iOS平台 新增 API authentication 生物认证，包括指纹和人脸识别 [文档](https://doc.dcloud.net.cn/uni-app-x/api/authentication.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28883>
* Android平台、iOS平台 修复 5.0版本引发的 组件 web-view 默认宽高不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27726)
* Android平台 新增 组件 image 支持avif格式 [文档](https://doc.dcloud.net.cn/uni-app-x/component/image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26819>
* Android平台 新增 CSS font-weight 支持自定义字体粗细 [文档](https://doc.dcloud.net.cn/uni-app-x/css/font-weight.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=23943>
* Android平台 更新 云端打包环境 compileSdk为36 [文档](https://doc.dcloud.net.cn/uni-app-x/tutorial/app-env.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=29259>
* Android平台 修复 发行 云端打包无法强制移除INTERNET、WRITE_EXTERNAL_STORAG权限 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29426)
* Android平台 修复 组件 scroll-view 属性 scroll-into-view 未支持孙子元素 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27931)
* Android平台 修复 组件 text decode属性值动态更新无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25842)
* Android平台 修复 组件 text 设置 border-radius 无法裁剪文本 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26200)
* Android平台 修复 5.0版本引发的 组件 rich-text 在 dialogPage 中无法正常显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26809)
* Android平台 修复 组件 input 在 list-view 中 blur 事件可能无法正常触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25846)
* Android平台 修复 组件 canvas x86_64类型CPU的so库未适配支持 16KB 内存页面大小 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29311)
* Android平台 修复 组件 canvas 某些情况偶现闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27348)
* Android平台 修复 组件 web-view 不支持unifile://static/路径 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27344)
* Android平台 修复 组件 web-view 网页中的视频全屏不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27420)
* Android平台 修复 API uni.switchTab 页面栈多时switchTab逐层返回跳转 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26984)
* Android平台 修复 API uni.getBoundingClientRectAsync 设置 box-shadow 时返回值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25684)
* Android平台 修复 API uni.uploadFile MIME 类型不正确可能导致上传的文件无法正常下载 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24858)
* Android平台 修复 API uni.chooseMedia 部分情况下自定义基座图片选择报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24994)
* Android平台 修复 API uni.createCameraContext CameraContextCameraFrameListener 的 start 方法可能引发崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25800)
* Android平台 修复 CSS overflow view多层嵌套时 overflow 属性可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28606)
* Android平台 修复 5.0版本引发的 CSS overflow 设置为 hidden 时可能无法隐藏子元素 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27215)
* Android平台 修复 4.81版本引发的 CSS bottom 动画效果异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24808)
* Android平台 修复 DOM API UniElement takeSnapshot 截图时渐变色背景的渐变尺度超出元素范围 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19982)
* Android平台 修复 DOM API UniElement requestFullscreen 方法的 navigationUI 设置为 hide 时点击事件首次不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27397)
* Android平台 修复 运行调试 控制台可能提示`WebSocketService`内存泄漏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24437)
* iOS平台 新增 组件 web-view 支持 ios-allows-inline-media-playback 属性设置视频是否支持内联播放 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26974>
* iOS平台 新增 发行 支持配置原生资源保存到编译uts插件生成的动态库Framework Bundle中 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#embedresources) <https://issues.dcloud.net.cn/pages/issues/detail?id=28723>
* iOS平台 更新 API facialRecognitionMetaInfo 使用的 金融级实人认证 SDK 为 2.3.45 版 [文档](https://doc.dcloud.net.cn/uni-app-x/api/facial-recognition-meta-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=29622>
* iOS平台 更新 云端打包环境 XCode 为 26.3 版、iOS SDK 为 26.2 版，支持iOS13及以上系统 [详情](https://doc.dcloud.net.cn/uni-app-x/tutorial/app-env.html)
* iOS平台 修复 manifest.json uni-ad Gromore开屏广告偶现无法关闭启动页 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27613)
* iOS平台 修复 API uni.request response 中的 header 键名大小写不统一 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25399)
* iOS平台 修复 API uni.getRecorderManager 默认录音时间不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26958)
* iOS平台 VDOM模式 修复 组件 nested-scroll-header 嵌套横向 scroll-view 组件时手势冲突 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29957)
* 鸿蒙平台 新增 组件 input 支持 type="none" [文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28294>
* 鸿蒙平台 新增 组件 web-view 默认使用 base64 编码以防止特殊字符导致页面加载失败 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-webview-context.html#loaddata) <https://issues.dcloud.net.cn/pages/issues/detail?id=29926>
* 鸿蒙平台 新增 API memory 监听内存不足告警事件 [文档](https://doc.dcloud.net.cn/uni-app-x/api/memory.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=28886>
* 鸿蒙平台 新增 API keyboard 监听键盘高度变化事件 [文档](https://doc.dcloud.net.cn/uni-app-x/api/keyboard.html#offkeyboardheightchange) <https://issues.dcloud.net.cn/pages/issues/detail?id=27621>
* 鸿蒙平台 修复 组件 input placeholder-class 设置为空字符串后，附带的样式未清空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26826)
* 鸿蒙平台 修复 组件 map 触发 markertap 事件时的 markertId 不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30041)
* 鸿蒙平台 修复 UniPage API $getPageStyle 获取到的 `backgroundColor` 值不随主题变化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29642)
* 鸿蒙平台 修复 API uni.downloadFile 超长且不返回 content-disposition 的 url 下载时失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29937)
* 鸿蒙平台 修复 API uni.share 微信分享图片时特定 url 分享失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29902&ask_id=220170)
* 鸿蒙平台 修复 API uni.createCanvasContextAsync CanvasRenderingContext2D.addColorStop不支持颜色值transparent [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28826)
* 鸿蒙平台 修复 API uni.getLocation highAccuracyExpireTime 参数默认值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27752)
* 鸿蒙平台 VDOM模式 修复 组件 input type 设置为 number 且 password 为 false 时弹不出数字键盘 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29769)
* 鸿蒙平台 蒸汽模式 新增 pages.json中的tabBar [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-tabbar) <https://issues.dcloud.net.cn/pages/issues/detail?id=28670>
* 鸿蒙平台 蒸汽模式 新增 组件 支持sticky-section和sticky-header [文档](https://doc.dcloud.net.cn/uni-app-x/component/sticky-section.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26591>
* 鸿蒙平台 蒸汽模式 新增 组件 rich-text 基于内容高度动态 Slot 分配 [文档](https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=27816>
* 鸿蒙平台 蒸汽模式 新增 组件 textarea 支持 auto-height 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=27846>
* 鸿蒙平台 蒸汽模式 新增 CSS transition-timing-function 支持 cubic-bezier 函数 [文档](https://doc.dcloud.net.cn/uni-app-x/css/transition-timing-function.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=30184>
* 鸿蒙平台 蒸汽模式 新增 CSS transition 支持 padding 和 margin 属性动画 [文档](https://doc.dcloud.net.cn/uni-app-x/css/transition-property.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=27175>
* 鸿蒙平台 蒸汽模式 新增 DOM API UniElement 支持 animate 动画 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dom/unielement.html#animate) <https://issues.dcloud.net.cn/pages/issues/detail?id=26671>
* 鸿蒙平台 蒸汽模式 新增 支持 onPageScroll、onReachBottom 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/page.html#onpagescroll) <https://issues.dcloud.net.cn/pages/issues/detail?id=28175>
* 鸿蒙平台 蒸汽模式 修复 vue v-if 内部嵌套 v-for 时反复切换条件后应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29086)
* 鸿蒙平台 蒸汽模式 修复 vue 组件动态根节点切换后更新样式应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29102)
* 鸿蒙平台 蒸汽模式 修复 vue 在自定义组件中同时使用动态命名插槽和隐式默认插槽时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27543)
* 鸿蒙平台 蒸汽模式 修复 vue v-for部分场景下渲染顺序错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27239)
* 鸿蒙平台 蒸汽模式 修复 vue scoped slot搭配v-for使用时界面渲染数据不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27027)
* 鸿蒙平台 蒸汽模式 修复 组件 全局事件 嵌套text子元素为动态节点时其事件无法触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30059)
* 鸿蒙平台 蒸汽模式 修复 组件 Touch 事件 多点触控图片没有复位 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28547)
* 鸿蒙平台 蒸汽模式 修复 组件 view hover-class在hover状态未恢复时又更新style，hover恢复不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29478)
* 鸿蒙平台 蒸汽模式 修复 组件 view 设置hover后点击view区域不触发page的touchend事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28390)
* 鸿蒙平台 蒸汽模式 修复 组件 text 嵌套时子 text 组件的 click 事件不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29263)
* 鸿蒙平台 蒸汽模式 修复 组件 scroll-view 滑动嵌套子 scroll-view 的惯性可能导致父容器显示不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29951)
* 鸿蒙平台 蒸汽模式 修复 组件 scroll-view 嵌套时子scroll-view组件的下拉刷新无法触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29458)
* 鸿蒙平台 蒸汽模式 修复 组件 scroll-view 滚动动画时长过长的问题 [文档](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=27561>
* 鸿蒙平台 蒸汽模式 修复 组件 scroll-view scroll-into-view属性在跳转到非直接子节点时跳转位置错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26927)
* 鸿蒙平台 蒸汽模式 修复 组件 scroll-view 组件内部的元素拖拽时的preventDefault未能阻止bounce效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27622)
* 鸿蒙平台 蒸汽模式 修复 组件 scroll-view getAttribute获取不到属性问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28788)
* 鸿蒙平台 蒸汽模式 修复 组件 swiper 移除 swiper-item 后指示器数量不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29465)
* 鸿蒙平台 蒸汽模式 修复 组件 canvas 页面包含 canvas 组件返回上一级页面会报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29777)
* 鸿蒙平台 蒸汽模式 修复 组件 sticky-section 某些情况下可能会导致 sticky-section 不随滚动更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29412)
* 鸿蒙平台 蒸汽模式 修复 组件 button hover-class 属性设置为 button-hover 时默认的 hover 效果覆盖了设置的效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27400)
* 鸿蒙平台 蒸汽模式 修复 5.02版本引发的 组件 button 组件开启 plain 后设置 type 背景色异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29289)
* 鸿蒙平台 蒸汽模式 修复 组件 input 组件点击闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29264)
* 鸿蒙平台 蒸汽模式 修复 组件 textarea 设置 padding 样式后高度不符合预期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29078)
* 鸿蒙平台 蒸汽模式 修复 组件 page-container 动态设置 transition:none 无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27296)
* 鸿蒙平台 蒸汽模式 修复 组件 rich-text native模式 优化table效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27986)
* 鸿蒙平台 蒸汽模式 修复 组件 rich-text native模式 支持emoji表情 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27987)
* 鸿蒙平台 蒸汽模式 修复 组件 rich-text native模式 快速滚动到图片位置有概率出现闪烁的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27984)
* 鸿蒙平台 蒸汽模式 修复 组件 rich-text native模式 偶现页面无法滚动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30207)
* 鸿蒙平台 蒸汽模式 修复 组件 rich-text mode 从 native 切换为 web 时无法正常显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29728)
* 鸿蒙平台 蒸汽模式 修复 组件 rich-text 组件设置 line-height 属性值不带单位时无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29089)
* 鸿蒙平台 蒸汽模式 修复 组件 picker 时间选择器设置 range 多次打开出现 range 失效的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27848)
* 鸿蒙平台 蒸汽模式 修复 API uni.redirectTo 可能引发应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29726)
* 鸿蒙平台 蒸汽模式 修复 API uni.createSelectorQuery 查询元素位置时受fixed祖先之外的滚动位置影响返回错误数据 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30142)
* 鸿蒙平台 蒸汽模式 修复 API uni.redirectTo 可能引发应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29726)
* 鸿蒙平台 蒸汽模式 修复 API uni.navigateBack 页面进入动画未结束时退出页面显示白屏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26224)
* 鸿蒙平台 蒸汽模式 修复 API uni.getBoundingClientRectAsync translateY设置为百分比时getBoundingClientRect取值错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27520)
* 鸿蒙平台 蒸汽模式 修复 CSS transition-timing-function 某些场景下 Animator curve handle 过早释放导致 transition 崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=30221)
* 鸿蒙平台 蒸汽模式 修复 CSS z-index 属性值设置为 -1 时无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29084)
* 鸿蒙平台 蒸汽模式 修复 CSS text-align 文本内容渲染位置不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29164)
* 鸿蒙平台 蒸汽模式 修复 CSS transform 部分transform组合效果和web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28205)
* 鸿蒙平台 蒸汽模式 修复 CSS env环境变量 进入和退出全屏安全区相关CSS变量更新异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29079)
* 鸿蒙平台 蒸汽模式 修复 CSS hover-start-time/hover-stay-time 属性的行为不符合预期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27221)
* 鸿蒙平台 蒸汽模式 修复 CSS position 切换fixed元素后显示位置不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27787)
* 鸿蒙平台 蒸汽模式 修复 CSS transition 动画过程中修改属性的目标值有可能导致动画终态错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27382)
* 鸿蒙平台 蒸汽模式 修复 CSS transition width/height 的 transition 动画只有自身的效果，没有影响父子兄弟节点 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27338)
* 鸿蒙平台 蒸汽模式 修复 CSS pointer-events : none 不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27783)
* 鸿蒙平台 蒸汽模式 修复 CSS var自定义变量 color 样式不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26648)
* 鸿蒙平台 蒸汽模式 修复 CSS var自定义变量 点击触发 hover 后再切换 theme 自定义变量不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26742)
* 鸿蒙平台 蒸汽模式 修复 CSS var自定义变量 class 中使用的 css 变量动态修改不生效、移除后不重置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26876)
* 鸿蒙平台 蒸汽模式 修复 CSS var自定义变量 text 组件中 line-height 使用css变量时无单位回退值计算异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27484)
* 鸿蒙平台 蒸汽模式 修复 DOM API UniElement Element元素异步清理监听事件时出现闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29831)
* 鸿蒙平台 蒸汽模式 修复 DOM API UniElement 部分组件作为页面根节点时的classList和设置的不一样 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28846)
* 鸿蒙平台 蒸汽模式 修复 DOM API CSSStyleDeclaration getPropertyValue 取到的值不符合预期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27959)
* 鸿蒙平台 VDOM模式 修复 组件 rich-text 的链接转译问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28962)
* 鸿蒙平台 VDOM模式 修复 组件 input 没有其他样式约束组件高度时，设置 font-size 组件高度无法自动适应字体大小 [文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=27558>
* 鸿蒙平台 VDOM模式 修复 5.03版本引发的 组件 input 设置 font-size 样式优先级高于 placeholder-class 设置的 font-size [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27510)
* 鸿蒙平台 VDOM模式 修复 API pullDownRefresh 开启下拉刷新的页面在退出页面时会触发一个jscrash [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27797)
* 鸿蒙平台 VDOM模式 修复 API uni.hideLoading app onShow 中 showLoading() 页面加载异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27403)
* 微信小程序平台 新增 UniElement 支持获取 scrollTop、scrollLeft、scrollWidth 和 scrollHeight 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dom/unielement.html#unielement-values) <https://issues.dcloud.net.cn/pages/issues/detail?id=30039>
* 微信小程序平台 新增 API uni.getAppBaseInfo 支持返回 packagename 字段 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html#%E5%8F%82%E8%A7%81) <https://issues.dcloud.net.cn/pages/issues/detail?id=30196>
* 微信小程序平台 修复 组件 scroll-view 组合表达式修改direction属性不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29448)
* 微信小程序平台 修复 API uni.request 请求一个不存在的api url返回的参数和文档不符 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=28815)
* 微信小程序平台 修复 5.04版本引发的 CSS 微信小程序 开启 virtualHost 时父组件动态更新 class 子组件不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27515)
* 微信小程序平台 修复 非 tabBar 页面 --uni-safe-area-inset-bottom 的值一直是 0px 的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27872)

### uts插件
* 新增 UTSJSONObject多层嵌套时，可通过`.`来访问属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26652)
* 新增 条件判断语句中判断string/number/object时拉齐和JavaScript的表现 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26054)
* 修复 函数入参为type对象类型且包含UTSJSONObject数组时运行闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29085)
* 修复 编译器 当代码中定义的对象体积过大、嵌套层级过深时，编译器会抛出Method too large异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=27177)


**[历史版本](https://pan.baidu.com/s/1PVLzui3QRkG5brzTxSYJlg?pwd=amqt)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/5.07.2026041006.html)**


## alpha版

###  5.14.2026062614-alpha
**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%405.14.zip)

### uni-app x

* 修复 5.08版本引发的 组件 video 设置 object-fit 为 cover 无效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29170)
* 修复 5.08版本引发的 组件 video 首次加载可能闪烁 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=29628)
* 修复 vue2 项目在 iOS 26.4 之后有概率启动白屏 [文档](https://ask.dcloud.net.cn/question/218144)

**[历史版本](https://pan.baidu.com/s/130Rvlh2jdsp3aJ4YtigoJQ?pwd=xy7s)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/5.13.2026061207-alpha.html)**
