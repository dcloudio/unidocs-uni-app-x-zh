# uni-app x iOS原生SDK

## 正式版

### 4.36.2024112817

[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.36.zip)

* 调整 API getApp 返回值类型为 UniApp，新增若干方法，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3847>
* 调整 API getCurrentPages 返回值类型为 UniPage数组，新增UniPage对象若干方法，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3847>
* 新增 vue 页面实例.options 及 onLoad 参数调整为 UTSJSONObject 类型 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9323>
* 新增 API `uni.openDialogPage`、`uni.closeDialogPage` 打开和关闭模态弹框页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3870>
* 新增 API eventBus 支持通过 id 移除自定义事件监听器，并支持在uts插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html#on) <https://issues.dcloud.net.cn/pages/issues/detail?id=9068>
* 新增 uni统计功能 [文档](https://uniapp.dcloud.net.cn/uni-stat-uniappx) <https://issues.dcloud.net.cn/pages/issues/detail?id=12350>
* 新增 编译器 优化uts类型推导 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/#%E7%B1%BB%E5%9E%8B%E8%87%AA%E5%8A%A8%E6%8E%A8%E5%AF%BC) <https://issues.dcloud.net.cn/pages/issues/detail?id=9967>
* 新增 组件 native-view组件和UniNativeViewElement，支持vue规范开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/native-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3846>
* 新增 `标准模式`组件，即通过vue规范和native-view来开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-component-vue.html)
* 新增 组件 button 支持open-type=agreePrivacyAuthorization 用于同意隐私政策 [文档](https://doc.dcloud.net.cn/uni-app-x/component/button.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8245>
* 新增 组件 map 地图 [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3849>
* 新增 uni-ad 国内广告新增章鱼渠道 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad) <https://issues.dcloud.net.cn/pages/issues/detail?id=9102>
* 新增 组件 ad 信息流广告 [文档](https://doc.dcloud.net.cn/uni-app-x/component/ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9414>
* 新增 API 隐私信息授权相关API [文档](https://doc.dcloud.net.cn/uni-app-x/api/privacy.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7900>
* 新增 API uni.getAppBaseInfo 支持渠道包的channel渠道信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8190>
* 新增 API uni.createInterstitialAd 插屏广告 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-interstitial-ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7113>
* 新增 API uni.requestPayment 支付失败错误码 700607 和 700608 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html#irequestpaymentfail-values) <https://issues.dcloud.net.cn/pages/issues/detail?id=8366>
* 新增 API uni.chooseLocation 打开地图选择位置 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12430>
* 新增 API uni.shareWithSystem 调用系统分享 [文档](http://doc.dcloud.net.cn/uni-app-x/api/share-with-system.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10687>
* 新增 API uni.chooseImage 支持 pageOrientation 参数适配横竖屏 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10683>
* 新增 API uni.chooseVideo 支持 pageOrientation 参数适配横竖屏 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12342>
* 新增 CSS 支持内置 uni-icon 字体图标 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/at-rules.html#uniicon) <https://issues.dcloud.net.cn/pages/issues/detail?id=11994>
* 新增 app.uvue 原生捕获异常触发应用生命周期onError [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html#onerror) <https://issues.dcloud.net.cn/pages/issues/detail?id=7116>
* 新增 pages.json 支持 hideBottomNavigationIndicator 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-style) <https://issues.dcloud.net.cn/pages/issues/detail?id=10478>
* 新增 pages.json 支持 hideStatusBar 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-globalstyle) <https://issues.dcloud.net.cn/pages/issues/detail?id=10554>
* 新增 组件 video 支持子组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/video.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10477>
* 新增 API eventBus 支持在UTS插件中使用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9254>
* 新增 API uni.exit 支持在原生SDK环境中退出应用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/exit.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11654>
* 新增 uts插件支持Promise [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/promise.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3914>
* 优化 provider注册机制 [文档](https://doc.dcloud.net.cn/uni-app-x/api/provider.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7394>
* 修复 API uni.createCanvasContextAsync 在生命周期 onLoad/onMount 中无法获取width/height [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13212)
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
* 修复 组件 全局事件 onResize 回调参数缺少 size 数据 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8186)
* 修复 组件 picker-view pickerview 上下蒙版颜色设置被覆盖 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2600)
* 修复 组件 slider 设置滑块颜色不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9361)
* 修复 组件 canvas : Path2D 绘制原点与 Context 绘制原点不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8748)
* 修复 组件 canvas 中使用的 image 更新 src 时可能触发图片重复加载导致绘制异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11136)
* 修复 组件 rich-text 点击不会触发父组件 click 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6986)
* 修复 组件 rich-text 设置固定高度时内容不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10999)
* 修复 组件 slider 设置的 max 不能整除 step 时滑动到最右侧返回值可能会大于 max [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12503)
* 修复 组件 canvas 在自定义组件中处理高清屏逻辑不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11696)
* 修复 4.23版本引发的 API uni.setTabBarStyle 设置backgroundColor或backgroundImage时borderColor受影响 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6567)
* 修复 4.25版本引发的 API uni.showActionSheet 适配横竖屏切换布局错乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8542)
* 修复 API uni.showToast 显示位置不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8123)
* 修复 API uni.chooseVideo 选择苹果手机拍摄的延时视频报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9886)
* 修复 API uni.openDialogPage 可能无法遮挡原生 tabBar 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11129)
* 修复 API uni.getDeviceInfo 返回的 deviceId 值异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11436)
* 修复 API uni.request 返回数据类型为不为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11697)
* 修复 API uni.getWindowInfo 返回 safeArea 中的 bottom、height 属性值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10935)
* 修复 API uni.addInterceptor 【ios端】uni.addInterceptor拦截'switchTab'无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10147)
* 修复 4.18版本引发的 DOM API UniResizeObserver 监视元素的大小变化可能导致内存泄露 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11451)
* 修复 4.25版本引发的 CSS border-radius 父视图添加圆角某些场景下无法裁剪子视图 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10188)
* 修复 非根目录 config.json 资源文件打包后不存在 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8989)
* 修复 4.19版本引发的 uts加密插件包含easycom组件时，云打包报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12775)
* 修复 iOS uts组件 props 数组参数 没有作用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8582)

## alpha版

### 4.41.2024121203-alpha

[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.41.zip)

* 新增 DOM API UniElement getBoundingClientRectAsync 异步获取元素位置信息 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#getBoundingClientRectAsync) <https://issues.dcloud.net.cn/pages/issues/detail?id=12092>
* 新增 API uni.openDialogPage triggerParentHide 参数控制是否触发父页面 onHide 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html#opendialogpage) <https://issues.dcloud.net.cn/pages/issues/detail?id=13636>
* 新增 API uni.chooseLocation 打开时触发当前页面 onHide 生命周期，关闭时触发当前页面 onShow 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13836>
* 修复 编译器 返回值类型推断不支持函数类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13046)
* 修复 dialogPage 实例上 getElementById 等部分方法不支持的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14047)
* 新增 组件 waterflow 瀑布流 [文档](https://doc.dcloud.net.cn/uni-app-x/component/waterflow.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11016>
* 新增 组件 input placeholderStyle支持font-family、font-style、text-align [文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13052>
* 新增 API uni.getBackgroundAudioManager 背景音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12144>
* 新增 API uni.openLocation 打开当前位置 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-location.html)
* 新增 API uni.getUniverifyManager 支持自定义一键登录页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11020>
* 新增 API uni.getUniverifyManager 调整参数类名以及返回值类名 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13772>
* 新增 API uni.closeDialogPage 调整 animationType 默认值为 auto [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13942>
* 修复 组件 canvas 动画过程中圆弧闪动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13487)
* 修复 CSS background-color 十六进制颜色语法与web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13371)
* 新增 API uni.createInnerAudioContext 支持音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12829>
* 新增 API uni.chooseLocation 支持 uts 插件环境调用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13780>
* 修复 组件 scroll-view 内容高度小于容器高度时无法触发自定义下拉刷新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13747)
* 修复 组件 input iOS 输入框长按粘贴与touch事件冲突，导致input失焦，键盘被收起 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12621)
* 修复 组件 slider 点击时事件触发错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13783)
* 修复 组件 canvas Image支持width、height属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12687)
* 修复 组件 canvas 通过style.setProperty方法动态修改尺寸导致渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12904)
* 修复 组件 canvas 反复退出进入应用偶发闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13093)
* 修复 API uni.$emit 不支持参数为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12615)
* 修复 API navigator iOS页面边界不应该带有阴影效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11585)
* 修复 API dialogPage 关闭后，状态栏颜色无法更新为当前页面的设置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13765)
* 修复 API uni.createSelectorQuery 在视图滚动期间 callback 回调不及时 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13368)
* 修复 API uni.getWindowInfo 在 iPhone16 Pro Max 设备获取的屏幕宽、高可能不正确
* 修复 CSS transform 修改transform值页面闪动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12850)
* 新增 支持迭代协议 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/iterable.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6511>
* 新增 编译器 编译 uts 到 js 时支持 import type 的用法 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html#import-type)
* 新增 UTSJSONObject 支持点号表示法访问属性。注意返回值类型为any [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#_1-%E6%93%8D%E4%BD%9C%E7%AC%A6) <https://issues.dcloud.net.cn/pages/issues/detail?id=11072>
* 修复 vue2项目下导出的class实例被vue响应式后调用方法报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13685&ask_id=202006)




