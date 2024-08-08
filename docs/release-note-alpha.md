#### 4.23.2024070309-alpha
##### uni-app-x
* 新增 API uni.setTabBarStyle/pages.json 支持传递 borderColor 设定自定义边框颜色，优先级高于 borderStyle [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
* Web平台、App-Android平台 调整 API uni.setTabBarStyle/pages.json 中 borderStyle 只支持 black/white [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
* Web平台 修复 4.22版本引出的 开发阶段内置浏览器白屏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2722)
* Web平台 修复 4.21版提供的 canvas API 缺失 toDataURL/toBlob 方法的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2811)
* App平台 调整 API uni.getDeviceInfo 返回数据中的 devicePixelRatio 属性类型为 number [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC)
* App-iOS平台 修复 4.22版本引出的 自定义组件样式污染造成渲染变慢的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2592)
* App-iOS平台 修复 组件 form submit/reset 事件 target 属性为 null 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2798)
* App-iOS平台 修复 uts组件插件触发 event 事件参数中缺少 type、target 等属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2801)
* App-Android平台 修复 组件 list-view 设置 scroll-top 属性值域与 upper-threshold 属性值域相同时，部分安卓设备可能不触发 scrolltoupper 事件的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2847)
##### uts
* App-iOS平台 新增 UTSJSONObject 支持 assign、keys 等静态方法 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/utsjsonobject.html#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
* App-iOS平台 修复 UTSJSONObject 中包含 Map 类型数据可能会引起崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2047)

#### 4.22.2024062415-alpha
##### uni-app-x
* Web平台 修复 input 在 type="digit"，在有初始值的情况下输入小数点时输入框清空的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2601)
* Web平台 修复 tabBar切换时不能记忆滚动位置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2516)
* App-Android平台 修复 响应式API可能存在内存泄漏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2543)
* App-Android平台 修复 组件 switch 在 list-view 组件中显示状态可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2482)
* App-iOS平台 新增 uni-ad 开屏广告 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad)
* App-iOS平台 新增 uni-ad 激励视频广告 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html)
* App-iOS平台 修复 组件 button 动态设置 text 文本重复显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2507)
* App-iOS平台 修复 API uni.setTabBarStyle 参数 backgroundImage 无效的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2523)
* App-iOS平台 修复 自定义组件样式污染的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2592)
* App-iOS平台 修复 `Info.plist` 中配置应用支持的横竖屏后云端打包无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2639)

#### 4.21.2024061818-alpha
##### uni-app-x
* 新增 onError 应用生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html)
* Web平台 调整 移除老版 canvas 规范, 使用 W3C 规范及微信小程序新版规范 [详情](https://doc.dcloud.net.cn/uni-app-x/component/canvas.html)
* Web平台 修复 暗黑模式下，theme.json 中配置 tabbar 的 iconPath 或 selectedIconPath 或 midButton -> backgroundImage 的路径不以 / 开头时在发行模式下图片 404 不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2472)
* Web平台 修复 uni.setTabBarStyle后minbutton消失的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2513)
* App-Android平台 调整 系统底栏背景色与页面 backgroundColorContent 颜色一致 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-tips)
* App-Android平台 修复 离线打包 number 类型判断相等可能与云打包结果不一致的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2422)
* App-Android平台 修复 响应式数组调用 unshift 方法不触发响应式变更 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2151)
* App-Android平台 调整 input/textarea 组件同时设置 modelValue 和 value 时，modelValue 优先级更高 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2236)
* App-iOS平台 修复 uts 插件事件包含大写触发后无法接收事件的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2525)
##### uts
* App-Android平台 修复 可选 number 类型判断相等结果可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2439)
* App-Android平台 修复 UTSJSONObject 通过 getXXX 方法获取对象属性返回的不是引用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2340)
* App-Android平台 修复 JSON.parse 返回的数字类型通过 console.log 打印输出类型不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2427)
* App-iOS平台 修复 4.18版本引出的 uts组件插件使用时设置 style 可能会被默认 style 覆盖的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2411)

#### 4.19.2024060704-alpha
##### uni-app-x
* 新增 uni_modules 前端 easycom 组件支持加密付费销售 [详情](https://uniapp.dcloud.net.cn/plugin/publish.html#components-pay)
* App平台 新增 uniCloud.chooseAndUploadFile 支持选择视频并上传 [详情](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/storage.html#chooseanduploadfile)
* App平台 调整 API uni.onAppThemeChange 计算后的应用主题值变化才会触发监听回调 [详情](https://doc.dcloud.net.cn/uni-app-x/api/theme.html#onappthemechange)
* App-iOS平台 修复 4.18版本引出的 触发 @longpress 事件引起应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2334)
* App-iOS平台 修复 组件 list-item 在 v-for 使用数组方法会错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2287)
* App-iOS平台 修复 API uni.setAppTheme 设置主题状态应用退出后未保存的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2372)
* App-iOS平台 修复 uts 付费插件编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2085)
##### uts
* App-Android平台 修复 可选链调用的后续连续调用也必须手动增加可选链的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2144)
* App-iOS平台 修复 uts 插件中导出 class 包含 init 构造函数编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2177)
* App-iOS平台 修复 uts 插件中 interface 定义 Promise 返回值编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2251)

#### 4.18.2024060311-alpha
##### uni-app-x
* 新增 theme.json 用于pages.json中颜色主题变量定义，处理暗黑模式的pages.json兼容 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/themejson.html)
* 新增 switch 组件属性 backgroundColor/activeBackgroundColor/foreColor/activeForeColor [详情](https://doc.dcloud.net.cn/uni-app-x/component/switch.html)
* 新增 slider 组件属性 activeBackgroundColor/foreColor/valueColor [详情](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
* 新增 radio 组件属性 foreColor 替代 iconColor/color [详情](https://doc.dcloud.net.cn/uni-app-x/component/radio-group.html)
* 新增 checkbox 组件属性 foreColor 替代 iconColor/color [详情](https://doc.dcloud.net.cn/uni-app-x/component/checkbox-group.html)
* 新增 API $setPageStyle 支持更多属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html#setpagestyle)
* 调整 vue框架 validateProp 方法, required prop 存在 default value 时不告警 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1600)
* Web平台 新增 服务端渲染（ssr） [详情](https://doc.dcloud.net.cn/uni-app-x/web/ssr.html)
* Web平台 调整 去除 uni-text、uni-input、uni-textarea、uni-view 组件根节点的`color: black`样式
* Web平台 修复 pages.json 下拉刷新默认背景色不为透明的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1726)
* Web平台 修复 组件 input/textarea 同时设置 modelValue 和 value 显示效果不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2236)
* Web平台 修复 组件 list-item 包含在自定义组件内时在 list-view 内不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2199)
* Web平台 修复 API uni.getAppBaseInfo、uni.getSystemInfo 内缺少部分属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1917)
* Web平台 修复 API uni.getVideoInfo 返回的 size 属性单位不为KB的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2250)
* Web平台 修复 API $getPageStyle获取到的对象不是UTSJSONObject的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1916)
* App平台 新增 manifest 设置 url scheme，可从外部打开App [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#urlscheme)
* App平台 新增 API uni.chooseVideo 支持拍摄视频或从手机相册中选视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html)
* App平台 新增 API uni.saveVideoToPhotosAlbum 支持保存视频到相册 [详情](https://doc.dcloud.net.cn/uni-app-x/api/save-video-to-photos-album.html)
* App平台 新增 API uni.getProvider 成功回调参数支持 providers [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-provider.html)
* App平台 新增 API uni.getDeviceInfo 返回数据支持os、rom相关属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html)
* App平台 新增 API uni.setAppTheme 设置应用主题；uni.onAppThemeChange 监听应用主题变化；uni.onOsThemeChange 监听系统主题变化 [详情](https://doc.dcloud.net.cn/uni-app-x/api/theme.html)
* App平台 新增 API uni.getSystemInfo、uni.getAppBaseInfo 返回数据支持 `appTheme` 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html)
* App平台 修复 部分内置组件事件触发缺少target属性的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1932)
* App平台 修复 组件 textarea 设置 flex 为 1 时高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2045)
* App-Android平台 新增 `uni-app x 原生SDK`，可用于原生App集成和离线打包 [详情](https://doc.dcloud.net.cn/uni-app-x/native/)
* App-Android平台 新增 API uni.getImageInfo 支持获取图片信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-image-info.html)
* App-Android平台 新增 API uni.compressImage 支持压缩图片 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-image.html)
* App-Android平台 新增 API uni.getVideoInfo 支持获取视频信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-video-info.html)
* App-Android平台 新增 API uni.compressVideo 支持压缩视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-video.html)
* App-Android平台 新增 API uni.navigateTo/uni.navigateBack 参数 animationType [详情](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#navigateto)
* App-Android平台 新增 组件 navigator 参数 animationType [详情](https://doc.dcloud.net.cn/uni-app-x/component/navigator.html)
* App-Android平台 新增 pages.json 配置页面动画属性 animationType [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html)
* App-Android平台 修复 首次安装可能重复打开首页的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2231)
* App-Android平台 修复 小窗口模式应用导航栏高度不正确的问题Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2117)
* App-Android平台 修复 异步创建组件时可能会崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2133)
* App-Android平台 修复 组件内发生异常可能不会输出到控制台的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=880)
* App-Android平台 修复 tabBar 同时设置 borderStyle、backgroundColor 为深色时会显示一条白线的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2116)
* App-Android平台 修复 组件 scroll-view 设置 scroll-top 属性不触发 scroll 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2249)
* App-Android平台 修复 组件 swiper 竖向滑动动画过快的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1550)
* App-Android平台 修复 组件 swiper 嵌套时在部分场景可能滑动冲突Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1069)
* App-Android平台 修复 组件 swiper 部分场景事件触发顺序可能错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1944)
* App-Android平台 修复 组件 video 未设置 direction 属性时进入全屏视频方向可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2042)
* App-Android平台 修复 组件 video 通过 uni.createVideoContext 调用 stop 后重新播放不显示视频封面图的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2314)
* App-Android平台 修复 组件 web-view 在滚动容器中可能出现滑动冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1488)
* App-Android平台 修复 组件 web-view 设置 android-layer-type 属性无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2088)
* App-Android平台 修复 组件 web-view 中输入框获取焦点后可能被软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1771)
* App-Android平台 修复 API uni.showToast 同时弹出多个提示框显示异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1663)
* App-Android平台 修复 uniIdRouter 在首页是需要登录的页面时未自动跳转到登录页面的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2027)
* App-Android平台 修复 VUE ref、reactive、readonly、shallowRef、shallowReactive、shallowReadonly 使用泛型+对象/数组字面量编译报错的Bug [详情](http://git.dcloud.io/uni-app-next/uts/commit/5f9278a020c435a35b0a782e2d56fcc9dbd78f08)
* App-Android平台 修复 VUE v-for 不支持循环 UTSJSONObject 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1839)
* App-Android平台 修复 VUE inject 不支持泛型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1787)
* App-Android平台 更新 一键登录使用的个推核心组件SDK为 3.2.13.0 版，个验SDK为 3.1.6.3 版，解决与 uni-push 一起使用存在冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1749)
* App-Android平台 优化 组件 slider 在滚动容器中的行为 [详情](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
* App-iOS平台 新增 splash 在 manifest.json 中配置`storyboard`启动界面 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-splashscreen.html#ios)
* App-iOS平台 补齐 tabbar 支持 fontSize、iconWidth、spacing、iconfontSrc、backgroundImage 等属性 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-tabbar)
* App-iOS平台 补齐 API uni-push [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/push.html)
* App-iOS平台 补齐 API uni.requestPayment 支持支付宝支付、微信支付 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
* App-iOS平台 补齐 API uni.getUniverifyManager 支持一键登录 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
* App-iOS平台 补齐 API UniResizeObserver 监视 UniElement 元素的大小变化 [详情](https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
* App-iOS平台 调整 onShow 生命周期由页面动画完成时触发改为固定在 onCreate 之后触发 [详情](https://doc.dcloud.net.cn/uni-app-x/page.html#lifecycle)
* App-iOS平台 调整 组件 text 渲染高度计算逻辑，靠近 safari 浏览器渲染逻辑
* App-iOS平台 修复 云端打包 未勾选`支持iPad`生成的安装包仍然可全屏运行在iPad设备的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2105)
* App-iOS平台 修复 组件 touch 事件返回数据不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2165)
* App-iOS平台 修复 组件 scroll-view 自定义下拉刷新可能引起某些元素不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1669)
* App-iOS平台 修复 组件 progress 回调事件不完整的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2237)
* App-iOS平台 修复 组件 事件回调包装不完整的 Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2240)
* App-iOS平台 修复 CSS 样式支持 cubic-bezier [详情](https://doc.dcloud.net.cn/uni-app-x/css/transition-timing-function.html)
* App-iOS平台 修复 CSS background-image 动态设置空字符时没有恢复默认值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2033)
* App-iOS平台 修复 CSS opacity 值为 0 时不响应点击事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2200)
* App-iOS平台 修复 API uni.downloadFile 下载地址中含有特殊字符会导致失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2235)
##### uts
* Web平台 App-iOS平台 调整 uts 编译为 js 时 any 类型调整为包含 null 类型 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html#any%E7%B1%BB%E5%9E%8B)
* Web平台 App-iOS平台 修复 JSON.parse传入泛型为Map时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1985)
* App平台 修复 类的成员变量使用对象字面量初始化 type 类型时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1924)
* App-Android平台 新增 UTSJSONObject 支持 assign、keys 等静态方法 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/utsjsonobject.html#%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95)
* App-Android平台 新增 UTSAndroid.onActivityCallback 监听 activity 各种生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#onactivitycallback-callback-pageroute)
* App-Android平台 新增 UTSAndroid.onPrivacyAgreeChange 监听同意应用隐私政策状态变更 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#onprivacyagreechange)
* App-Android平台 优化 JSON.parse 解析数据速度 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1561)
* App-Android平台 修复 JSON.parse 在部分场景下输出日志错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1952)
* App-Android平台 修复 Date 构造函数不支持部分格式字符串的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1774)
* App-Android平台 修复 console.log 无法打印复杂对象的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1399)
* App-Android平台 修复 Math.ceil/floor/round 不支持64位整型数字的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1817)
* App-Android平台 修复 UTSAndroid.offAppActivityPause 可能会引发应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1613)
* App-Android平台 修复 模板字符串不支持转义的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=883)
* App-iOS平台 修复 uni.request 携带泛型报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2049)
* App-iOS平台 修复 参数签名传递 function 表达式编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1852)
* App-iOS平台 修复 当 switch 的 case 语句块仅包含break时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1640)
* App-iOS平台 修复 部分情况下赋值语句编译不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1520)

#### 4.17.2024051110-alpha
##### uni-app-x
* Web平台 修复 4.16 引出的 input 组件 type="number" 时触发不了 input 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1960)
##### uts插件
* App-iOS平台 修复 HBuilderX安装路径中包含空格或者中文时，UTS插件真机运行编译失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1950)

#### 4.16.2024051009-alpha
##### uni-app-x
* Web平台 新增 $setPageStyle、$getPageStyle 支持 backgroundColorContent 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html#setpagestyle)
* Web平台 补齐 API UniResizeObserver 监视 UniElement 元素的大小变化 [详情](https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
* Web平台 修复 4.11版本引出的 因升级vue版本导致 css内使用v-bind且值包含rpx时无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1830)
* App平台 修复 CSS border 在某些情况下渲染导常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1701)
* App平台 修复 CSS position 设置为 fixed 时某些情况下位置不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1681)
* App平台 修复 CSS flex-direction 设置为 row，flex-wrap 为 wrap 且设置 min-height 时可能高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1528)
* App-Android平台 修复 组件 image 设置 mode 为 widthFix 在部分场景图片显示可能不完整的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1764)
* App-Android平台 修复 组件 input、textarea 的 keyboardheightchange、focus 事件某些情况下返回键盘高度为 0 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1362)
* App-Android平台 修复 组件 input、textarea 在 list-view 中获取焦点可能被弹出软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1846)
* App-Android平台 修复 4.11版引出的 组件 list-view 设置 scroll-top 属性滚动位置与预期不符的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1922)
* App-Android平台 修复 组件 list-item 子元素使用 v-show 控制是否显示时可能出现异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1857)
* App-Android平台 修复 组件 text 设置宽高和边框时 text-align 居中效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1383)
* App-Android平台 修复 API uni.getSystemInfo 返回 osTheme 字段值为 null 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1688)
* App-Android平台 修复 UniElement 获取 offsetLeft 属性值异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1539)
* App-Android平台 修复 CSS 同时设置 display 和 visibility 可能出现其中一个属性不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1923)
* App-iOS平台 新增 组件 textarea 支持 confirm-type 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html)
* App-iOS平台 修复 组件 video 在 list-view 中全屏播放后退出全屏无法回到原来位置上的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1491)
* App-iOS平台 修复 组件 video 在 iPad 设备全屏播放时可能无法横屏显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1565)
* App-iOS平台 修复 API uni.setNavigationBarColor 传入非法值时导航栏背景色变为白色的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1841)
* App-iOS平台 修复 API $setPageStyle 在 page.json 中关闭页面下拉刷新时，无法通过 $setPageStyle 方法动态开启页面下拉刷新的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1838)
* App-iOS平台 修复 API $setPageStyle 动态设置页面容器背景色不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1837)
* App-iOS平台 修复 API $getPageStyle 返回值可能是旧值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1871)
* App-iOS平台 修复 Tab 页面创建时 onShow 触发次数有误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1809)
* App-iOS平台 修复 调用 uni.createWebviewContext 打印警告的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1902)

#### 4.14.2024042905-alpha
##### uni-app-x
* Web平台 修复 $setPageStyle 动态修改 enablePullDownRefresh 为 true 无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1632)
* App平台 调整 4.13版引出的 uni.getSystemInfo 返回 uniPlatform 字段值，从`app-android`和`app-ios`回退为 `app` [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html#getsysteminfo-%E5%85%BC%E5%AE%B9%E6%80%A7)
* App-Android平台 修复 DOM API UniResizeObserver 监视元素大小变化在部分场景回调不准确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1696)
* App-Android平台 调整 组件 switch 关闭时的背景色由 #e5e5e5 调整为 #e9e9ea，与其他平台拉齐 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1705)
* App-iOS平台 修复 app.uvue 不支持多个 style 标签的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1699)
* App-iOS平台 修复 keep-alive 渲染结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1627)
* App-iOS平台 修复 组件 swiper 某些情况下首个 swiper-item 内容不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1618)
* App-iOS平台 修复 组件 swiper 开启循环后 change 事件回调参数 detail.current 值可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1706)
* App-iOS平台 修复 API uni.uploadFile 上传多个文件时崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1625)
* App-iOS平台 修复 API uni.getAppBaseInfo 标准基座真机运行获取 appId 属性值不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1672)
* App-iOS平台 修复 CSS background-image 某些情况下无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1667)
* App-iOS平台 修复 CSS border-radius 动态设置可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1619)
* App-iOS平台 修复 CSS transition 的 transform 动画设置 translate 值为百分比时动画效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1633)
* App-iOS平台 修复 CSS border-color 运行时展开样式错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1537)
* App-iOS平台 修复 在 iOS15 以下部分组件写法会导致页面初始化报错的Bug（该改动可能引起原生插件回调与 vue 任务队列先后顺序的细微变化） [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1671)
##### uts插件
* App-Android平台 修复 setInterval 间隔时间参数为0或者负数会不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1111)
* App-Android平台 修复 UTS组件不支持Map类型参数的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1153)

#### 4.13.2024042321-alpha
##### uni-app-x
* 新增 API $getPageStyle 和 $setPageStyle，获取和设置pages.json的页面style [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html)
* 新增 云对象及云函数调用时支持传泛型 [云对象客户端API文档](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/object.html)、[云函数客户端API文档](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/function.html)
* 编译器 修复 script 节点内语法报错时，行号不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1290)
* Web平台、App-iOS平台 补齐 $callMethod支持调用defineExpose导出的方法 [详情](https://doc.dcloud.net.cn/uni-app-x/component/#callmethod)
* Web平台、App-iOS平台 修复 构造UniError时不支持无参数及一个参数的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1455)
* Web平台 修复 css内使用v-bind无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1370)
* Web平台 修复 backgroundColorContent显示高度不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1427)
* Web平台 修复 textarea组件动态切换autoHeight不能实时生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1502)
* Web平台 修复 textarea、input组件disable状态下设置cursor样式无效的Bug
* Web平台 修复 request接口返回数组时错误的处理为了UTSJSONObject的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1582)
* Web平台 调整 界面相关Api（showLoading、showToast、showModal、showActionSheet）样式调整，对齐App端
* App平台 调整 组件 web-view 的 message 事件回调参数 detail.data 类型为 Array<UTSJSONObject>，load、loading 事件回调参数 detail.url 为 detail.src 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html#%E4%BA%8B%E4%BB%B6)
* App平台 调整 uni.getSystemInfo 返回 uniPlatform 字段值域分为 `app-android` 与 `app-ios` [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html#getsysteminfo-%E5%85%BC%E5%AE%B9%E6%80%A7)
* App平台 修复 CSS position 设置 absolute 时父元素的 padding 布局与 web 不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1219)
* App-Android平台 新增 页面 style 配置项支持 pageOrientation 来实现横屏或自旋转适应 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-json)
* App-Android平台 新增 API FileSystemManager 支持 appendFile、readCompressedFile 等文件操作方法 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html)
* App-Android平台 新增 API uni.$off 支持第二个参数为可选 [详情](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#off)
* App-Android平台 新增 API UniResizeObserver 监视 UniElement 元素的大小变化 [详情](https://doc.dcloud.net.cn/uni-app-x/dom/uniresizeobserver.html)
* App-Android平台 修复 项目下包含云对象但是页面内未使用uniCloud时云打包报错的Bug
* App-Android平台 修复 template 节点运行时异常导致应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1578)
* App-Android平台 修复 script setup 下 defineSlots 定义作用域插槽编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1551)
* App-Android平台 修复 uts插件打包自定义基座后，编译报错依赖找不到的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1379)
* App-Android平台 修复 ref 类型数据在模板上插值显示不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1344)
* App-Android平台 修复 script setup 下定义 ref 类型绑定 v-model 时，编译可能报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1338)
* App-Android平台 修复 script setup 下函数声明不能递归调用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1312)
* App-Android平台 修复 4.02版引出的运行时异常信息显示不正确[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1518)
* App-Android平台 修复 组件 view 设置 overflow 为 visible 时超出父元素区域无法响应点击和触摸事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=157)
* App-Android平台 修复 组件 scroll-view 子元素设置 overflow 为 visible 不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1175)
* App-Android平台 修复 组件 sticky-header 吸顶后可能与 list-view 下拉刷新区域重叠的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1242)
* App-Android平台 修复 组件 sticky-header 吸顶后部分场景中可能被 list-view 覆盖的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1241)
* App-Android平台 修复 组件 swiper 嵌套 scroll-view 后触发下拉刷新可能会阻碍 swiper 左右滑动的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1231)
* App-Android平台 修复 组件 input、textarea 在某些情况下可能被输入法遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=947)
* App-Android平台 修复 组件 textarea 设置 auto-height 导致高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1298)
* App-Android平台 修复 组件 slider 宽度发生变化或父容器大小发生变化后显示错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=296)
* App-Android平台 修复 组件 keep-alive 和 component 结合使用，切换打开过的组件可能出现空白的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1189)
* App-Android平台 修复 组件 web-view 无法获取精准位置信息的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1563)
* App-Android平台 修复 4.11版引出的 组件 scroll-view 自定义下拉刷新时 refresher-max-drag-distance 属性不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1512)
* App-Android平台 修复 4.11版引出的 CSS transition-duration 设置为 0ms 时 transform 可能不执行的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1473)
* App-Android平台 修复 退出应用时会可能短暂显示白屏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=896)
* App-iOS平台 新增 运行时的异常信息显示源码位置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1519)
* App-iOS平台 新增 onPageScroll 生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/page.html)
* App-iOS平台 新增 组件 web-view 支持 horizontalScrollBarAccess、verticalScrollBarAccess 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html#%E5%B1%9E%E6%80%A7)
* App-iOS平台 新增 API uni.downloadFile 的 filePath 属性支持 uni.env [详情](https://doc.dcloud.net.cn/uni-app-x/api/download-file.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
* App-iOS平台 新增 CSS transition-property 支持 all | none [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1381)
* App-iOS平台 修复 组件 scroll-view 因为计算精度问题可能导致横向竖向同时能滑动的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1463)
* App-iOS平台 修复 组件 text 通过 class 设置 line-height 不带单位的值时高度不正常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1458)
* App-iOS平台 修复 组件 switch 父元素有点击事件时不能响应点击手势的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1475)
* App-iOS平台 修复 组件 input type 属性动态赋值时 v-modol 无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1510)
* App-iOS平台 修复 组件 textarea 设置 cursor 属性会触发 focus 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1465)
* App-iOS平台 修复 组件 textarea 设置 cursor-color 为空时光标颜色会变成白色的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1469)
* App-iOS平台 修复 组件 textarea 设置 auto-height 导致高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1298)
* App-iOS平台 修复 组件 textarea 输入内容后 placeholder 没隐藏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1526)
* App-iOS平台 修复 组件 progress 组件初始化未能正确赋值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1504)
* App-iOS平台 修复 组件 slider 点击滑轨不会触发 change 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1485)
* App-iOS平台 修复 组件 picker-view 初始化赋值不能立即执行的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1506)
* App-iOS平台 修复 组件 video 仅使用video组件，不使用createVideoContext时，云打包缺少video模块的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1556)
* App-iOS平台 修复 组件 web-view 不触发 load 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1322)
* App-iOS平台 修复 组件 swiper 设置 current 默认值无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1543)
* App-iOS平台 修复 组件 嵌套子组件样式不能继承父组件样式的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1505)
* App-iOS平台 修复 API selectorQuery.in 传入组件实例无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1507)
* App-iOS平台 修复 API DrawableContext 设置 font 存在字体信息(如"13px Arial")时文字绘制失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1472)
* App-iOS平台 修复 API uni.showModal 点击取消按钮回调函数中 confirm 参数值为 true 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1326)
* App-iOS平台 修复 API uni-getSystemInfo 返回的 windowTop 值不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1577)
* App-iOS平台 修复 CSS 元素宽或高为0时设置背景渐变色导致应用闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1471)
* App-iOS平台 修复 CSS box-shadow 设置为 none 时可能显示白色阴影的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1467)
* App-iOS平台 修复 CSS backgroundColor 做 transition 动画时缺失透明度导致颜色不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1468)
* App-iOS平台 修复 CSS border-style 为 solid 且设置 border-width 时 border-radius无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1470)
* App-iOS平台 修复 CSS position 从 fixed 动态切换成其他值无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1527)
* App-iOS平台 修复 CSS pointer-events 设置为 none 不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1530)
* App-iOS平台 修复 CSS transition 动画在某些情况下异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1531)
* App-iOS平台 修复 CSS 元素动态设置 Style 空值切换不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1589)
* App-iOS平台 修复 事件冒泡在部分情况下可能自动停止的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1509)
##### uts插件
* App平台 优化 API插件模板中 unierror.uts 错误对象构造函数，兼容 web 平台使用
* App平台 修复 正则表达式包含双引号时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1428)
* App-Android平台 修复 Date toISOString/toJSON 返回日期数据可能偏差一天的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1464)
* App-iOS平台 修复 if else 空语句时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1351)
* App-iOS平台 修复 class定义无参constructor时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1342)
* App-iOS平台 修复 class定义boolean类型的getter、setter时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1332)

#### 4.12.2024041009-alpha
##### uni-app-x
* Web平台 调整 回滚HBuilderX 4.11版本将z-index默认值设为0的调整 [详情](https://doc.dcloud.net.cn/uni-app-x/css/z-index.html)
* App-Android平台 修复 4.11版引出的 CSS z-index 可能引发下标越界异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1272)
* App-iOS平台 新增 组件 text 支持嵌套子 text 组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/text.html#%E5%AD%90%E7%BB%84%E4%BB%B6)
* App-iOS平台 修复 进入应用首页立即调用 uni.hideTabbar 可能导致页面底部区域高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1364)
* App-iOS平台 修复 页面 onReady 生命周期在特定设备触发时机不准确可能导致页面显示异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1367)
* App-iOS平台 修复 uni-id-pages-x 云端打包后报`undefined class: UTSSDKModulesDCloudUniNetworkIndexSwift`错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1353)
##### uts插件
* iOS平台 修复 对象字面量as成uni-module app-js内的type时未能转为指定类型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1314)

#### 4.11.2024040401-alpha
##### uni-app-x
* 【重要】新增 编译到iOS平台
* 【重要】Web平台 调整 vue版本由3.2.47升级为3.4.21，支持defineOptions、defineModel、toValue等新特性
* Web平台 新增 scroll-view、list-view支持自定义下拉刷新 [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html)
* Web平台 新增 list-view支持下拉刷新相关属性、事件 [详情](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html)
* Web平台 新增 页面样式及globalStyle支持backgroundColorContent [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-globalstyle)
* Web平台 修复 scroll-view组件下拉刷新相关事件缺少dy属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=932)
* Web平台 修复 navigator组件内子元素部分样式无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1025)
* Web平台 修复 input、textarea组件内maxlength无法限制uts内设置的值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1204)
* Web平台 调整 textarea、input maxlength属性调整为传入非法值时不限制长度，默认调整为不限制长度
* Web平台 调整 progress组件percent属性传入非法值时显示为0%，此前为NaN
* Web平台 调整 内置组件、页面容器默认z-index由auto调整为0
* Web平台 调整 body的font-family调整为`"-apple-system", HelveticaNeue;`，iOS上与系统字体保持一致
* Web平台 调整 组件 switch 关闭时的背景色由 rgba(0,0,0,.1) 调整为 #e9e9ea
* App-Android平台 新增 computed 支持类型自动推导 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=833)
* App-Android平台 新增 v-for 指令支持循环Map、Set对象 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1200)
* App-Android平台 新增 组件 nested-scroll-header、nested-scroll-body [详情](https://doc.dcloud.net.cn/uni-app-x/component/nested-scroll-header.html)
* App-Android平台 新增 组件 scroll-view 支持 type 属性设置 `nested` 嵌套模式 [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html#nested-scroll-view)
* App-Android平台 新增 组件 web-view 支持 horizontalScrollBarAccess、verticalScrollBarAccess 属性设置是否显示横向、竖向滚动条 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=598)
* App-Android平台 新增 API uni.requestPayment 支持微信支付 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
* App-Android平台 新增 CSS transition-property 支持 `all` 和 `none`，默认值调整为 `all`
* App-Android平台 修复 静态引入 static 目录中的只读资源，编译可能报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=992)
* App-Android平台 修复 uts 插件内 easycom 组件不能正常使用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1034)
* App-Android平台 修复 复杂的响应式对象修改后可能不触发页面渲染的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1123)
* App-Android平台 修复 模板上文本插值Map、Set类型不显示实际内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1182)
* App-Android平台 修复 defineProps 定义 any 类型属性时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1198)
* App-Android平台 修复 组件 list-view 的 show-scrollbar 属性默认不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1050)
* App-Android平台 修复 组件 input、textarea 未设置 placeholder 时设置 placeholder-style 可能引起异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1042)
* App-Android平台 修复 组件 input、textarea 在 scroll-view 中获取焦点可能被弹出软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1128)
* App-Android平台 修复 组件 input、textarea 的 keyboardheightchange 事件返回的键盘高度可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1158)
* App-Android平台 修复 组件 input 设置 password 属性先于 value 属性可能导致 value 不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=990)
* App-Android平台 修复 组件 web-view 加载的网页中 `<input type="file"/>` 文件选择不支持 multiple 属性的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=541)
* App-Android平台 修复 组件 web-view 加载网页默认无法显示全部宽度且无法缩放的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1047)
* App-Android平台 修复 组件 video 无法加载本地绝对路径资源的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=786)
* App-Android平台 修复 组件 video 设置 header 属性无效Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1210)
* App-Android平台 修复 CSS background-image 属性动态修改不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1160)
* App-Android平台 修复 CSS font-size 属性动态修改后文本高度可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=377)
* App-Android平台 修复 CSS z-index 可能引发下标越界异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1077)
* App-Android平台 修复 CSS white-space 属性为 nowrap 时 text-overflow 的 ellipsis 效果可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=959)
* App-Android平台 修复 Windows 系统 本机不含 vcruntime 时编译报错的Bug [详情](https://ask.dcloud.net.cn/question/187931)
* uni-ui 新增 `<uni-recycle-view>`虚拟长列表组件，解决长列表初始化卡顿和内存占用问题 [详见](https://ext.dcloud.net.cn/plugin?id=17385)
##### uts插件
* 编译器 修复 Windows 平台 编译器相关动态库没有数字签名导致可能被某些防病毒软件拦截进而导致编译失败的Bug
* Web平台 修复 解构时默认值无法覆盖null的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1076)
* App平台 修复 interface 中可选属性可能编译不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1202)
* App-Android平台 修复 声明 UTSJSONObject 类型后，无法二次赋值的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=851)
* App-Android平台 修复 switch 语句 default 语句仅包含 break 时，编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=852)
* App-Android平台 修复 String.match 与web平台不一致的Bug [详情]( https://issues.dcloud.net.cn/pages/issues/detail?id=835)
* App-Android平台 修复 String.replace 匹配的捕获组结果与web平台不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1056)
* App-Android平台 修复 RegExp.exec 匹配的捕获组结果与web平台不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=954)

#### 4.07.2024032807-alpha
##### uni-app x 插件
* Web平台 修复 4.06版引出的 button 更改 border-radius 后边框样式不对的Bug

#### 4.05.2024032021-alpha
##### uni-app-x
* Web平台 修复 部分情况下picker-view、picker-view-column值显示错误并额外触发了change事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1009)
* App-Android平台 修复 4.02版引出的 uni.createSelectorQuery 获取的组件对象调用 boundingClientRect 返回数据不准的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=948)
* App-Android平台 修复 组件 button 设置 hover-class 属性在特定情况与web平台效果不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1028)

#### 4.04.2024031519-alpha
##### uni-app x 插件
* Web平台 优化 减少编译耗时
* Web平台 修复 uni.rpx2px在项目发行后调用报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=930)
* Web平台 修复 instanceof UniXXXElement 报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=940)
* App-Android平台 修复 组件 text 内容从非空设置为空文本无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=950)
* App-Android平台 修复 组件 text 设置高度后无法修改文本内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=981)
* App-Android平台 修复 4.02版引出的 组件 button 属性样式部分情况可能无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=900)
* App-Android平台 修复 4.02版引出的 组件 button 组件 hover-class 设置为 none 无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=958)

#### 4.03.2024031101-alpha
##### uni-app x 插件
* 修复 3.98 引发的 pages.json 检查页面文件是否存在时，部分条件编译不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=909)
* Web平台 调整 运行到浏览器时将script标签内代码编译为可以在低版本浏览器运行的兼容代码
* App-Android平台 修复 APP-PLUS 条件编译的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=910)
* App-Android平台 修复 4.02版引出的 组件 button 的 disabled 属性在部分场景设置无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=900)
* App-Android平台 修复 4.02版引出的 组件 button 的对象类型 `UniButtonElement` 编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=907)

#### 4.02.2024030621-alpha
##### uni-app x 插件
* 新增 API uni.rpx2px [详情](https://doc.dcloud.net.cn/uni-app-x/api/rpx2px.html)
* 调整 pages.json 中配置的页面路径大小写敏感
* 修复 UniElement tagName、nodeName获取内置组件的标签与组件名不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=766)
* 修复 vue $parent未跳过内置组件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=773)
* Web平台 新增 组件 list-view、list-item组件 [详情](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html)
* Web平台 新增 组件 sticky-section、sticky-header组件 [详情](https://doc.dcloud.net.cn/uni-app-x/component/sticky.html)
* Web平台 修复 部分场景下类型推断时未将对象字面量作为UTSJSONObject使用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=819)
* Web平台 修复 类型字面量内带有any[]时无法正确创建实例的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=767)
* Web平台 修复 非全局声明的type在变量声明为此类型时不会自动创建实例的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=782)
* Web平台 修复 vue $forceUpdate未能更新内置组件插槽内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=776)
* Web平台 修复 使用热更新uts文件内新导出的type时报找不到导出的type的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=823)
* Web平台 修复 API request、uploadFile、downloadFile接口timeout参数传null时会直接超时的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=805)
* App-Android平台 新增 API uni.requestPayment，支持支付宝支付 [详情](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html)
* App-Android平台 修复 组件 button 渲染宽高与Web端不一致的问题 [详情](https://doc.dcloud.net.cn/uni-app-x/component/button.html)
* App-Android平台 修复 组件 text 无文本内容时组件宽度不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=777)
* App-Android平台 修复 组件 text 子组件设置 background-color 样式无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=276)
* App-Android平台 修复 组件 text 子组件无法修改文本内容的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=562)
* App-Android平台 修复 组件 image 请求网络图片无法共享cookie的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=820)
* App-Android平台 修复 组件 list-item 动态调整宽高不生效的Bug [详情](https://ask.dcloud.net.cn/question/185517)
* App-Android平台 修复 组件 list-view 部分场景修改refresher-triggered属性值域可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=796)
* App-Android平台 修复 组件 list-view 部分场景删除插槽子元素报错Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=769)
* App-Android平台 修复 CSS 4.0版本引出的 position 属性设置为 fixed 后 z-index 属性无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=726)
* App-Android平台 修复 tabBar 配置 pagePath 有误时点击 tab 切换崩溃的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=779)
* App-Android平台 修复 使用 UTSAndroid.getJavaClass 获取导入的类时可能编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=809)
* App-Android平台 优化 type类型响应式对象的构造方式，避免使用反射，优化性能
* App-Android平台 修复 关联其他项目的服务空间并使用其中的云对象时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=817)
* App-Android平台 修复 unicloud-db组件，使用 setup 语法，作用域插槽中无法使用data的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=761)
* App-Android平台 修复 云对象返回数字错误码时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=840)
* App-Android平台 更新 云端打包环境 compileSdkVersion 为 34
##### uts插件
* Android平台 新增 `typeof` 操作符支持平台专有字符类型 `Char` [详情](https://doc.dcloud.net.cn/uni-app-x/uts/operator.html#typeof)
* App-Android平台 修复 局部定义 class 时，构造函数使用 super 报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=802)
* App-Android平台 新增 interface.uts 文件支持 export declare 语法 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=744)
* App-Android平台 修复 import * as Types from 'xxx' 导入 type 类型编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=696)
* App-iOS平台 新增 @UTSiOS.keyword('fileprivate') 注解，用于解决自定义swift类，属性的访问控制

#### 4.01.2024020211-alpha
##### uni-app x 插件
* Web平台 新增 绑定class、style时支持Map类型 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A)
* Web平台 调整 类型校验失败由报错调整为警告且不中断编译
* Web平台 调整 navigator组件真实渲染出的节点中a标签由uni-navigator标签外部移动到uni-navigator标签内部
* Web平台 调整 getStorage、getStorageSync接口返回对象类型数据时转化为UTSJSONObject类型
* Web平台 调整 request接口返回的data转化为UTSJSONObject类型
* Web平台 修复 未使用到的easycom组件内包含错误或web端不支持的用法导致编译报错的Bug
* Web平台 修复 部分场景下对象字面量as为指定类型时报错的Bug
* Web平台 修复 引用.uvue文件时未带后缀提示找不到模块的Bug
* Web平台 修复 部分场景下uts文件内使用条件编译无效的Bug
* App-Android平台 新增 组件 公共属性 `android-layer-type` 支持配置视图渲染模型，开启硬件加速 [详情](https://doc.dcloud.net.cn/uni-app-x/component/common.html#android-layer-type)
* App-Android平台 修复 特殊元素(list-view等)删除插槽内子元素报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=388)
* App-Android平台 修复 data 中定义的变量名，与外部导入的变量同名时，引发运行时报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=701)
* App-Android平台 修复 pages.json 中使用条件编译时，可能报错 must contain at least 1 page 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=690)
* App-Android平台 修复 4.0 引发的部分复杂场景运行时报错 Comparison method violates its general contract! 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=687)
* App-Android平台 修复 仅使用 easycom 组件类型编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=678)
* App-Android平台 修复 @import 引入的 scss 文件内部条件编译不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=671)
* App-Android平台 修复 组件里import uts文件路径不对，但编译时不会指向正确的源码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=275)
* App-Android平台 修复 组件 input 默认高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=693)
* App-Android平台 修复 组件 input 设置 value 属性后首次输入文字时 input 事件不触发的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=699)
* App-Android平台 修复 组件 textarea 行高计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=695)
* App-Android平台 修复 组件 textarea 多行滚动时不显示滚动条的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=694)
* App-Android平台 修复 组件 input、textarea 获取焦点弹出的软键盘隐藏时关闭页面可能引起异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=716)
* App-Android平台 修复 组件 image 的 src 属性设置 `file:///android_asset/` 格式图片路径无法正常显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=723)
* App-Android平台 修复 组件 video 播放PCM音频格式的视频可能没有声音的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=713)
* App-Android平台 修复 API uni.createSelectorQuery 无法查询根节点的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=672)
##### uts插件
* App-Android平台 修复 async 方法参数数量超过一个时运行报错的Bug

#### 4.0.2024012711-alpha
##### uni-app x 插件
* 【重要】新增 编译到Web平台 [详情](https://doc.dcloud.net.cn/uni-app-x/web/)
* 【重要】App-Android平台 新增 vue 组合式 API [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#composition-api)
* 【重要】调整 组件事件类型名称增加 Uni 前缀，避免与浏览器全局事件冲突 [详情](https://doc.dcloud.net.cn/uni-app-x/component/common.html#rename-event-type)
* 编译器 修复 pages.json 中 APP-ANDROID、APP-IOS 不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=523)
* App-Android平台 新增 uni-ad 激励视频广告 [详情](https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html)
* App-Android平台 新增 vue 内置组件 KeepAlive [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#component)
* App-Android平台 新增 vue 内置组件 Teleport [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#component)
* App-Android平台 新增 vue watch 支持 deep、immediate 配置 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/#options-api-compatibility)
* App-Android平台 新增 vue 组件 props 支持字符串数组方式声明，此时所有 prop 类型为 any | null [详情](https://doc.dcloud.net.cn/uni-app-x/component/#props)
* App-Android平台 新增 API 监听权限申请事件，适用于应用商店要求申请权限时弹出用途说明 [详情](https://doc.dcloud.net.cn/uni-app-x/api/create-request-permission-listener.html)
* App-Android平台 新增 css变量 [详情](https://doc.dcloud.net.cn/uni-app-x/css/#variable)
* App-Android平台 新增 CSS white-space [详情](https://doc.dcloud.net.cn/uni-app-x/css/white-space)
* App-Android平台 新增 pages.json 中 backgroundColorContent 配置页面容器背景色 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-globalstyle)
* App-Android平台 新增 组件 input、textarea 支持 hold-keyboard [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=291)
* App-Android平台 新增 组件 input 的 blur 事件回调参数支持 cursor 属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=512)
* App-Android平台 调整 二级页面导航栏标题文字居中显示
* App-Android平台 调整 组件 scroll-view、list-view 设置横向或纵向滚动属性为 direction，设置回弹效果属性为 bounces [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html)
* App-Android平台 调整 组件 scroll-view、list-view 默认高度为子元素高度之和，即默认不出现滚动条，需通过 css 属性设置容器高度才会出现滚动条 [详情](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html#app%E5%B9%B3%E5%8F%B0)
* App-Android平台 调整 组件 view 的 hover-class 按下状态在组件区域内移动不会取消，移动到组件区域外才会取消 [详情](https://doc.dcloud.net.cn/uni-app-x/component/view.html#app)
* App-Android平台 调整 组件 click/tap 事件在组件区域内移动不会取消，移动到组件区域外才会取消 [详情](https://doc.dcloud.net.cn/uni-app-x/component/common.html#tap)
* App-Android平台 调整 组件 text 渲染 baseline 计算逻辑，靠近浏览器渲染逻辑
* App-Android平台 调整 组件 input、textarea 点击输入框外的屏幕，默认关闭软键盘
* App-Android平台 调整 组件 input 的 font-size 默认值为 16px
* App-Android平台 调整 组件 textarea 的 font-size 默认值为 16px，line-height 默认值为 1.2em，width 默认值为300px [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=492)
* App-Android平台 调整 组件 web-view 默认宽高为100%
* App-Android平台 调整 组件 web-view 网页加载完成事件名称 loaded 改为 load
* App-Android平台 调整 组件 video 默认宽度为300px，高度为225px [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=457)
* App-Android平台 调整 API uni.getSystemInfo、uni.getAppBaseInfo 返回的uni编译器版本属性命名中的`Compile`改为`Compiler` [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-system-info.html)
* App-Android平台 调整 css transition-duration 动画时长不设置单位时不再当做毫秒，统一为web的策略，必须设置单位，无单位当做非法值，造成动画不生效 [详情](https://doc.dcloud.net.cn/uni-app-x/css/transition-duration.html)
* App-Android平台 修复 template 非预期的将 object 编译为 map 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=244)
* App-Android平台 修复 部分组件嵌套导致页面关闭时无法回收的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=535)
* App-Android平台 修复 MuMu模拟器多次切换页面后再次进入白屏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=436)
* App-Android平台 修复 vue 不同组件同名props且default均为通过Function返回时，默认值被污染的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=374)
* App-Android平台 修复 vue 组件配置 mixins，emits 丢失 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=348)
* App-Android平台 修复 组件 scroll-view 设置 border 导致滚动视图显示不完整的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=510)
* App-Android平台 修复 组件 scroll-view 动态修改 refresher-default-style 属性不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=641)
* App-Android平台 修复 组件 scroll-view 的 show-scrollbar 属性默认值不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=648)
* App-Android平台 修复 组件 scroll-view 开启下拉刷新，设置 padding 属性后滚动条位置异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=661)
* App-Android平台 修复 组件 swiper 监听 animationfinish 事件可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=502)
* App-Android平台 修复 组件 swiper 设置 autoplay 未设置 circluar 滚动到顶没有从头开始运行的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=556)
* App-Android平台 修复 组件 swiper 相互嵌套时只能滚动外层 swiper 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=558)
* App-Android平台 修复 组件 swiper 在 scroll-view 中滑动效果异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=500)
* App-Android平台 修复 组件 list-view 嵌套在 scroll-view 中反复滚动后可能出现无法再滚动的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=289)
* App-Android平台 修复 组件 list-view 设置隐藏再显示可能无法正常显示内容的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=283)
* App-Android平台 修复 组件 sticky-header 在部分场景吸顶位置与父容器顶部位置存在偏移的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=323)
* App-Android平台 修复 组件 text 多次更新后高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=563)
* App-Android平台 修复 组件 input、textarea 在 list-view 中复用时内容异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=382)
* App-Android平台 修复 组件 input、textarea 的 auto-focus 属性多次生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=491)
* App-Android平台 修复 组件 input、textarea 的 cusor、selection-start、selection-end 属性多次设置不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=516)
* App-Android平台 修复 组件 textarea 监听 focus 事件返回可能导致闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=609)
* App-Android平台 修复 组件 textarea 设置 padding 尺寸不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=618)
* App-Android平台 修复 组件 image mode 属性设置为 widthFix、heightFix 显示效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=493)
* App-Android平台 修复 组件 image 设置 border-radius 时 mode 属性失效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=332)
* App-Android平台 修复 组件 video 在 list-view 中使用可能出现异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=288)
* App-Android平台 修复 组件 click/tap 事件在连续点击操作时因触发双击导致丢失事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=364)
* App-Android平台 修复 CSS height 小于 padding 时排版高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=496)
* App-Android平台 修复 CSS flex-basis 为百分比父节点存在 padding 时排版换行计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=352)
* App-Android平台 修复 CSS flex 设置为 1 且最外层和叶子结点未设置高度时排版高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=497)
* App-Android平台 修复 CSS position 设置为 fixed 节点相互嵌套时，动态更新内层节点不显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=537)
* App-Android平台 修复 CSS transition、transform 同时设置后动态修改 transform 可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=353)
* App-Android平台 修复 CSS transition、transform 同时设置后在系统`开发者选项`中关闭所有动画 transform 可能不执行的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=634)
* App-Android平台 修复 API uni.toast、uni.showModal等交互反馈弹窗在 onShow 生命周期调用可能无法正常显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=520)
* App-Android平台 修复 API uni.request、uni.uploadFile、uni.downloadFile 等网络请求无法共享 cookie 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=335)
* App-Android平台 修复 API uni.showModal、uni.showActionSheet 交互反馈弹窗通过手势操作关闭不触发 `complete` 回调的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=597)
* App-Android平台 修复 API uni.showModal 弹窗在英文系统中 `确认` 按钮上的文字不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=589)
* App-Android平台 修复 API Event 事件对象通过 JSON.stringify 输出字符串内容不全的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=495)
* App-Android平台 修复 API uni.saveImageToPhotosAlbum 可能无法保存 `static` 目录下图片的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=525)
* App-Android平台 修复 API uni.previewImage 可能无法保存 `static` 目录下图片的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=524)
* App-Android平台 修复 API uni.getWindowInfo 在页面 onReady 生命周期获取 windowHeight 可能不准确的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=260)
* App-Android平台 修复 API uni.getStorageSync 获取保存为 json 格式字符串数据返回空字符串的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=572)
* App-Android平台 修复 DOM API UniElement 对象的 getBoundingClientRect() 方法，在页面 onResize 生命周期获取元素的 DOMRect 信息可能异常的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=266)
* App-Android平台 修复 DOM API 部分组件无法通过 getAttribute 方法获取 value 的Bug
##### uts插件
* 编译器 修复 特殊值域string构成的数组类型编译报错的Bug
* App-Android平台 新增 UTSAndroid.getJavaClass 获取 Android 原生对象的 Java Class [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#getjavaclass)
* App-Android平台 修复 Date 无法解析日期时间格式字符串（如“2024-01-09 22:00:00”）的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=499)
* App-Android平台 修复 typeof 运算符返回 NaN、INFINITY 的数据类型不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=557)
* App-Android平台 修复 Array.includes 判断元素类型为 number 时可能返回结果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=559)
* App-Android平台 修复 Number.toString 不支持指定转换进制基数的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=308)
* App-Android平台 修复 Number.toFixed 方法在 android6.0 以下设备返回值异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=233)
* App-Android平台 修复 不同属性名编译可能冲突报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=568)
* App-Android平台 修复 编译告警 No cast needed 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=527)
* App-Android平台 修复 当顶部存在多个相同变量名时可能存在访问错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=334)
* App-Android平台 修复 部分情况下正则表达式转换错误的Bug [详情](https://ask.dcloud.net.cn/question/183344)
* App-Android平台 优化 类型不匹配时的错误提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=358)
* App-Android平台 修复 interface 中泛型方法编译不正确的Bug
* App-Android、App-iOS 平台 修复 interface 中 readonly 属性不生效的Bug
* App-Android、App-iOS 平台 修复 负数小数点0可能被移除的问题，比如 -1.0 => -1

#### 3.99.2023121601-alpha
##### uni-app x插件
* 修复 编译器 部分情况下报错信息未回溯到源码的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=246) [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=253) [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=264)
* 修复 编译器 组件递归使用时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=225)
* 优化 编译器 真机运行调用未包含的被摇掉的api的错误提示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=227)
* 修复 应用 onLaunch 生命周期调用 route API 异常的Bug
* 新增 vue框架 支持 app.use 注册 vue 插件 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
* 新增 vue框架 app.config.globalProperties 注册全局属性 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#app-instance)
* 新增 vue框架 动态组件 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#special-elements)
* 新增 vue框架 provide/inject 用于组件通信 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
* 新增 vue框架 mixin 混入 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#composition-options)
* 新增 vue框架 v-html 指令 [详情](https://doc.dcloud.net.cn/uni-app-x/component/index.html#directives)
* 新增 vue框架 v-once 指令、v-memo 指令、v-pre 指令 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#directives)
* 新增 vue框架 componentInstance.$forceUpdate [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#component-instance)
* 新增 vue框架 支持 render 函数 [详情](https://doc.dcloud.net.cn/uni-app-x/vue/index.html#rendering-options)
* 新增 全局变量 globalData [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#globaldata)
* 新增 splash 在 manifest.json 中配置启动封面 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-splashscreen.html)
* 新增 uni-ad 开屏广告 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad)
* 新增 组件 input 的属性 cursor-color，用于调整光标颜色 [详情](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)
* 新增 API uni.getUniverifyManager，App一键登陆 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html)
* 新增 API uni.getFileSystemManager，本地文件管理 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html)
* 优化 规范了文件系统使用，对cache文件进行了详细约定 [详情](https://doc.dcloud.net.cn/uni-app-x/api/file-system-spec.html)
* 新增 API uni-push 支持荣耀厂商推送
* 修复 API uni.toast、uni.showModal等交互反馈弹窗在 onReady 生命周期前调用可能无法正常显示的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=312)
* 补齐 CSS background-image 的 linear-gradient 渐变方向支持 to bottom left 、to top right [详情](https://doc.dcloud.net.cn/uni-app-x/css/background-image.html)
* 修复 CSS 先后设置 box-shadow 与 border 属性导致后设置的样式不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=280)
* 修复 CSS z-index 属性可能引发下标越界异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=215)
* 修复 CSS position 设置为 fixed 时 z-index 可能不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=274)
* 修复 CSS transition 初始值为百分比时动态设置 length 值动画效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=262)
* 修复 CSS transition-property 属性值动态更新为 background-color 时不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=298)
* 修复 CSS transform-origin 在设置 transition-property 为 transform 时不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=299)
* 修复 组件 text 在某些情况设置 max-width 后高度不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=257)
* 修复 组件 video 无法播放本地m3u8文件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=229)
* 修复 组件 list-view 无法通过 scroll-into-view 属性滚动到 sticky-header 组件位置的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=261)
* 修复 组件 list-item 被复用后 click 事件无法正常触发的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=271)
* 修复 组件 view 设置 overflow 为 visible 后需同时对父元素设置 overflow 为 visible 才能生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=259)
* 修复 组件 view 设置 overflow 为 hidden 后子元素显示区域可能占用 border 边框区域的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=304)
* 修复 TouchEvent 事件在超出父视图可视区域后 screenX、screenY 属性值可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=245)
* 修复 系统切换暗黑模式导致应用白屏
* 优化 App打release包后，应用资源不再释放到存储卡，提升首次启动速度
* 调整 API uni.installApk 安装apk，从ext api改为内置api [详情](https://doc.dcloud.net.cn/uni-app-x/api/install-apk.html)
* 调整 App真机运行标准基座内置 uni-facialRecognitionVerify 实人认证模块，方便调试开发
* 修复 App真机运行调用 uni.exit 后可能导致应用异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=169)
* 新增 ui库 uni-icons 支持uni-app x [详情](https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html)
* 新增 ui库 uni-data-picker 支持uni-app x [详情](https://uniapp.dcloud.net.cn/component/uniui/uni-data-picker.html)
* 新增 uni-cms 客户端插件 uni-cms-article [详情](https://ext.dcloud.net.cn/plugin?id=11701)
* 更新 模板 App升级中心 支持在通知栏显示下载进度
* 更新 模板 uni-id-pages-x v1.0.4+ 不再支持配置项：`config.needLogin`，改用uni-id-router替代 [详情](https://ext.dcloud.net.cn/plugin?name=uni-id-pages-x)
##### uts插件
* 新增 Android平台 UTSAndroid.getFileProviderUri，方便控制应用内文件对外分享 [详情](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#getfileprovideruri)
* 优化 新建uni_modules插件的UTS插件模板，默认包含完整演示UTS插件API/组件示例
* 修复 Android平台 本地 libs 三方依赖变更后不生效的Bug [详情](https://ask.dcloud.net.cn/question/182382)
* 修复 多个解构语句可能编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=217)
* 修复 App-iOS平台 类继承时属性 override 报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=207)
* 修复 App-Android平台 UTSJSONObject对象定义方法后，不能通过索引调用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=234)
* 修复 App-Android平台 顶层变量、type 属性、类实例属性、类静态属性仅首字母大小写区分时编译报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=286)

#### 3.98.2023112011-alpha
##### uni-app x插件
* 优化 编译器 项目存在大量css代码时的编译速度
* 新增 组件 sticky-section 分段吸顶 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/sticky.html#sticky-section)
* 新增 API uni-push [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/push.html)
* 新增 css position 属性设置为 absolute 时，margin 支持取值 auto
* 调整 API uni.downloadFile 下载默认目录调整为app的cache目录下的uniDownloads目录，方便被rom的清理工具清理 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=201)
* 修复 组件 video 部分 event 回调没有属性值的Bug [详情](https://ask.dcloud.net.cn/question/180748)
* 修复 组件 swiper current 属性可能不生效的Bug [详情](https://ask.dcloud.net.cn/question/181396)
* 修复 组件 list-item 执行复用时遇到 text 组件嵌套可能会闪退的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=216)
* 修复 组件 checkbox-group 动态修改 checkbox 组件的 check 属性时，form 组件提交的 value 不正确的Bug
* 修复 组件 radio-group 动态修改 radio 组件的 check 属性时，form 组件提交的 value 不正确的Bug
* 修复 组件 slider 当父容器可滚动且显示 value 且当前滑块值为最大值时，无法直接在滑块的右半径上按下拖动的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=218)
* 修复 组件 scroll-view、list-view 同时设置 scroll-y、scroll-x属性为 false 时，组件的 touch 相关事件不触发的Bug
* 修复 easycom组件类型在非uvue页面中使用报错的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=177)
* 修复 3.97引出的 首页面 onLoad 生命周期调用 uni.showLoading 可能会崩溃的Bug [详情](https://ask.dcloud.net.cn/question/181567)
* 修复 css 代码中引用非 static 目录的静态资源失败的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=231)
* 修复 部分情况下真机运行 appid 为空导致应用异常崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=162)
* 修复 使用 v-if 显示组件的 background 样式设置为线性渐变可能引起崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=164)
* 调整 各项目模板的 index.html （web平台专有文件）中引入入口文件从 main.js 改为 main（即main.uts，后缀可省略）
* 新增 模板 App升级中心兼容uni-app x [详见](https://ext.dcloud.net.cn/plugin?id=4542)
* 新增 模板 uni-id-pages-x [详情](https://uniapp.dcloud.net.cn/uniCloud/uni-id/app-x.html)
##### uts插件
* 优化 异步函数在 uni-app x 中使用时默认与框架运行在同一线程
* 修复 部分位运算组合使用时优先级不正确的Bug
* 修复 App-Android平台 Array join 返回值与 web 不一致的Bug
* 修复 自定义基座真机运行时hooksClass 相关回调重复调用的Bug
* 修复 App-iOS平台 使用 uts 插件（含ext api）后因底层依赖 uni-getDeviceInfo 有读取 IDFA 的代码导致可能影响应用上架审核的Bug
* 修复 Number 参与的运算结果可能整型溢出的Bug
* 修复 Number 参与的除法运算除数不能为0的Bug

#### 3.97.2023110504-alpha
##### uni-app x插件
* 新增 form 组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/form.html)
* 新增 uni.addInterceptor 拦截器，可拦截部分API [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/interceptor.html)
* 新增 uni.setNavigationBarTitle [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/set-navigation-bar-title.html)
* 新增 uni.getAppBaseInfo 获取获取包名、签名信息 [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/get-app-base-info.html)
* 新增 scroll-view 组件支持 nested-scroll-child，可将嵌套滚动的父滚动视图滚动余量传递给子视图 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/scroll-view.html)
* 新增 web-view 组件支持 download 事件，以及 loading、loaded 事件回调参数支持 url 属性 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/web-view.html)
* 新增 image、video 组件 src 支持非 static 目录的静态资源
* 新增 uvue 文件支持引入 ts 后缀的文件，等同于 uts 后缀
* 新增 App-Android平台 真机运行标准基座内置所有常用权限
* 修复 动态创建的根节点 class 样式丢失的Bug
* 修复 v-model 绑定的表达式包裹 () 运行失败的Bug
* 修复 在自定义组件中使用 class 定制另一个自定义组件根节点样式不生效的Bug
* 修复 data 中定义的 UTSJSONObject 修改后，不触发渲染的Bug
* 修复 uvue 页面文件名与 easycom 组件同名时渲染不正确Bug
* 修复 text 组件固定宽高时，设置 padding-left 和 padding-right 可能导致文本不居中的Bug
* 修复 text 组件设置 space 属性时，换行符 \n 有时无法正常显示的Bug
* 修复 text 组件设置 line-height 属性可能不生效的Bug
* 修复 swiper-item 组件 overflow 属性值为 hidden 时子元素未被裁剪的Bug
* 修复 uni.loadFontFace 多次请求同一网络字体时可能触发错误回调的Bug
* 修复 Element 的 style 调用 setProperty 更新 transition-duration 属性值不支持单位为s(秒)的Bug
* 修复 uni.toast、uni.showModal等交互反馈弹窗在onLoad等特定场景可能引起应用崩溃的Bug
* 修复 App-Android平台 uni.getLocation 使用系统定位获取位置信息慢的Bug
##### uts插件
* 修复 位移赋值类操作符，当右侧为复杂表达式，计算结果不正确的Bug
* 修复 相同interface、class定义了不同属性，方法调用失败的Bug
* 修复 App-Android平台 string 的 indexOf 方法参数类型不正确的Bug
* 新增 App-Android平台 uni-app x项目开发的uts原生组件定义的对外方法支持返回值
* 新增 App-iOS平台 真机运行适配支持 XCode15
* 新增 uts插件支持监听应用的原生生命周期回调函数 [详情](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html#hooksclass)
* 新增 uts组件插件支持 NVUpdateStyles 生命周期监听组件的样式更新 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
* 调整 App-Android平台 uts组件插件内置对象 $androidContext 可为空 [详情](https://uniapp.dcloud.net.cn/plugin/uts-component.html#%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%E5%92%8C%E5%87%BD%E6%95%B0)
* 修复 uni-app 项目 vue2 下开发uts插件报错可能未指向源码的Bug

#### 3.94.2023102311-alpha
##### uni-app x插件
* 修复 多根节点时，uni.getElementById 获取失败的Bug
* 修复 web-view 组件点击网页中的输入框无法弹出软键盘的Bug
* 修复 scroll-view 组件的子组件滑动松手后惯性滚动时没有触发 nestedprescroll 事件的Bug
##### uts插件
* App-Android平台 更新 编译使用的 Android SDK 为 33
* App-Android平台 修复 number 的 toFixed 方法返回结果可能异常的Bug
* App-Android平台 修复 number 数据类型的位运算操作可能引起崩溃的Bug

#### 3.93.2023101913-alpha
##### uni-app x插件
* 新增 sticky-header 吸顶组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/sticky-header.html)
* 新增 unicloud-db 组件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/unicloud-db.html)
* 新增 takeSnapshot 截图api [详情](https://uniapp.dcloud.net.cn/uni-app-x/dom/element.html#takeSnapshot)
* 新增 transitionend 动画结束事件 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/common.html#transitionend)
* 新增 css border-*-width 属性值支持 thin | medium | thick
* 新增 摇树优化 代码中未使用的内置模块（如video）会自动摇掉，减少安装包体积 [详情](https://uniapp.dcloud.net.cn/uni-app-x/manifest.html#treeShaking)
* 优化 组件类型，内置组件和自定义组件可更方便的获取类型并调用组件方法 [详情](https://uniapp.dcloud.net.cn/uni-app-x/component/#methods)
* 优化 uni.getElementById 支持泛型 [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/get-element.html)
* 新增 list-view 组件的下拉刷新支持自定义样式
* 修复 list-view 组件嵌套 swiper 时 swiper-item 可能重复显示的Bug
* 修复 list-view 组件某些情况子节点位置错乱的Bug
* 修复 video 组件在 Android8.0 以下设备使用硬解码可能引起崩溃的Bug
* 修复 web-view 组件在 Android11 及以上设备可能无法加载本地网页的Bug
* 修复 text 组件动态修改 display 属性可能出现渲染异常的Bug
* 修复 css position 属性设置为 fixed 时，z-index 属性可能不生效的Bug
* 修复 uvue 文件 methods 中定义的方法不能递归访问的Bug [详情](https://ask.dcloud.net.cn/question/179395)
* 修复 目录包含特殊字符编译报错的Bug
* 修复 ref 绑定节点移除时，$refs 数据未更新的Bug
##### uts插件
* 新增 await 支持与 Promise 一同使用 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#await)
* 新增 UTSJSONObject 支持 hasOwnProperty [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/utsjsonobject.html#hasOwnProperty)
* 修复 parseInt 解析超过整型数据范围返回值为 NaN 的Bug
* App-Android平台 修复 console 输出对象信息中包含 private 属性和方法的Bug
* App-Android平台 修复 number 数据类型在某些情况除法运行结果不正确的Bug
* App-iOS平台 修复 vue 页面中调用 API 参数不支持 null 的Bug

#### 3.92.2023101106-alpha
##### uni-app x插件
* App-Android平台 修复 uni-app-x 项目 onLoad 生命周期调用 route API 交互异常的Bug
* App-Android平台 修复 uni-app-x 项目非 tabBar 首页调用 uni.switchTab 应用崩溃的Bug
##### uts插件
* 修复 App-Android平台 vue 页面调用 API 传参对象中包含`Any`类型字段时可能出现异常的Bug

#### 3.91.2023092719-alpha
##### uts插件
* 调整 通过数字字面量定义变量未申明类型时默认推导为 number 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#autotypefornumber)
* 调整 typeof 获取实例对象类型支持平台专有数字类型 Int、Float、Double等 [详情](https://uniapp.dcloud.net.cn/uts/operator.html#typeof)
* 调整 instanceof 不再支持判断基础类型 number、string、boolean [详情](https://uniapp.dcloud.net.cn/uts/operator.html#instanceof)
* 调整 JSON.parse 解析json字符串支持返回 Array、number、boolean、string 等数据类型 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/json.html#parse)
* 新增 JSON.parse 支持传入泛型解析为指定 type 类型 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E6%8A%8Ajson%E5%AF%B9%E8%B1%A1%E8%BD%AC%E4%B8%BAtype)
* 新增 UTSJSONObject 通过 getBoolean、getString、getNumber、getJSON 等方法访问属性，并支持传入 keyPath 格式参数 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#%E8%AE%BF%E9%97%AE-utsjsonobject-%E4%B8%AD%E7%9A%84%E5%B1%9E%E6%80%A7%E6%95%B0%E6%8D%AE)
* 新增 number 类型支持与平台专有数字类型相互转换方法 toInt、toFloat、toDouble、from 等 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/number.html)
* 新增 type 自定义类型支持 for...in 遍历 [详情](https://uniapp.dcloud.net.cn/uts/data-type.html#type)
* 新增 Regexp 正则表达式支持 flags 属性 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/regexp.html#flags)
* 新增 支持 encodeURI、decodeURI、encodeURIComponent、decodeURIComponent 等全局方法 [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/global.html#encodeuri)
* 新增 支持使用数值字面量和字符串字面量用作类型注解 [详情](https://uniapp.dcloud.net.cn/uts/literal.html)
* 新增 uni.request 请求的 method 支持 OPTIONS [详情](https://uniapp.dcloud.net.cn/uni-app-x/api/request.html)
* 新增 App-Android平台 Promise [详情](https://uniapp.dcloud.net.cn/uts/buildin-object-api/promise.html)
* 新增 App-Android平台 支持 Array.fromNative 方法将原生 ByteArray/LongArray/ShortArray 类型转换为 Array
* 修复 App-Android平台 部分场景下位运算符异常的Bug
* 修复 App-iOS平台 class 实例对象调用带参数标签的方法编译报错的Bug
* 补齐 App-iOS平台 支持 parseInt、parseFloat、isNan、isFinite 等全局方法
* 补齐 App-iOS平台 string 类型支持 toString、valueOf 等方法
* 补齐 App-iOS平台 Array 类型支持 toString、sort 等方法
* 补齐 App-iOS平台 Date 类型支持 toString、 valueOf、toUTCString、toTimeString、toDateString、parse 等方法
* 修复 App-iOS平台 函数参数不支持 class 数组类型的Bug
* 修复 for 循环中包含复杂continue、break时，执行不正确的Bug
* 修复 class 中无法访问外部定义的与类内部属性、方法同名的变量的Bug
