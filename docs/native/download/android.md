# uni-app x Android原生SDK

## 正式版

### 4.29.2024093009

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12359-4.29.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.29.2024093009）版本生成本地打包App资源。
* 修复 4.28版本引发的 vue3项目 页面组件setup情况下子组件无法通过$root.$scope获取getAppWebview的Bug [详情](https://ask.dcloud.net.cn/question/199111)
* 修复 4.28版本引发的 UTSJSONObject 包含 number 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9447)

## alpha版

### 4.31.2024102414-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12447-4.31.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.31.2024102414-alpha）版本生成本地打包App资源。
* 新增 编译器 优化uts类型推导 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/#%E7%B1%BB%E5%9E%8B%E8%87%AA%E5%8A%A8%E6%8E%A8%E5%AF%BC) <https://issues.dcloud.net.cn/pages/issues/detail?id=9967>
* 新增 组件 native-view组件和UniNativeViewElement，支持vue规范开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/native-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3846>
* 新增 `标准模式`组件，即通过vue规范和native-view来开发原生组件 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-component-vue.html)
* 新增 组件 button 支持open-type=agreePrivacyAuthorization 用于同意隐私政策 [文档](https://doc.dcloud.net.cn/uni-app-x/component/button.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8245>
* 新增 组件 map 地图 [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3849>
* 新增 uni-ad Android平台国内广告新增华为、倍孜、聚力阅盟、泛连渠道；App平台国内广告新增章鱼渠道 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad) <https://issues.dcloud.net.cn/pages/issues/detail?id=9102>
* 新增 组件 ad 信息流广告 [文档](https://doc.dcloud.net.cn/uni-app-x/component/ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9414>
* 新增 API 隐私信息授权相关API [文档](https://doc.dcloud.net.cn/uni-app-x/api/privacy.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7900>
* 新增 API uni.getAppBaseInfo 支持渠道包的channel渠道信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=8190>
* 新增 API uni.createInterstitialAd 插屏广告 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-interstitial-ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7113>
* 新增 API uni.requestPayment 支付失败错误码 700607 和 700608 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html#irequestpaymentfail-values) <https://issues.dcloud.net.cn/pages/issues/detail?id=8366>
* 优化 provider注册机制 [文档](https://doc.dcloud.net.cn/uni-app-x/api/provider.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7394>
* 修复 编译器 在 windows 系统上运行同步文件可能不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10570)
* 修复 4.19版本引发的 pages.json 下拉刷新loading的样式设置backgroundTextStyle属性无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2537)
* 修复 组件 list-view 组件的@scroll事件参数deltaY数据异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9121)
* 修复 3.99版本引发的 组件 picker-view，给picker-view动态设置indicator-style、mask-top-style、mask-bottom-style无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6620)
* 修复 3.99版本引发的 CSS border 动态设置 boder/background 样式切换不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7236)
* 修复 4.2版本引发的 编译器 软链的插件编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7397)
* 新增 pages.json pageStyle支持隐藏状态栏和底部指示器，实现全屏效果 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=3854>
* 新增 API uni.getFileSystemManager 文件管理模块支持Arraybuffer [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6881>
* 新增 发行 云端打包支持aab格式 [文档](https://doc.dcloud.net.cn/uni-app-x/tutorial/app-package.html#aab) <https://issues.dcloud.net.cn/pages/issues/detail?id=7171>
* 新增 发行 支持 aaptOptions、buildFeatures 配置 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#aaptoptions) <https://issues.dcloud.net.cn/pages/issues/detail?id=10770>
* 调整 页面内容可渲染到全面屏手势指示条区域 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-window-info.html#safearea)
* 修复 vue UTSJSONObject使用keyPath不触发响应式变更 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8845)
* 修复 vue keepAlive 组件切换时，触发了 update 生命周期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7420)
* 修复 vue app.config.globalProperties无法在app.uvue中使用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9417)
* 修复 vue defineModel如果父级没有接收，则安卓没有变化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8741)
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
* 修复 API uni.setTabBarItem 【安卓端】uni.setTabBarItem设置iconfont报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9969)
* 修复 CSS transform 设置rotateX或者rotateY为180度时，view消失的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5570)
* 修复 非根目录 config.json 资源文件打包后不存在 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8989)
* 新增 app-android 支持TextDecoder [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/textdecoder.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=9044>
* 修复 4.21版本引发的 number类型的数据在改变之后显示为3.0，4.0，5.0..... [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6450)
* 修复 Number 类型 toString 方法与web有差异 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6791)
* 修复 响应式数组扩展运算结果为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7897)
* 修复 typeof null 编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9392)
* 修复 h函数 第二个参数如何使用变量传入安卓只能使用Map,web端只能使用UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1337)
* 修复 UTSJSONObject getXXX 数据不存在时期望返回null [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9253)
* 修复 4.25版本引发的 UTSJSONObject 包含 number 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9447)
* 修复 4.25版本引发的 JSON.stringify  replacer 函数 key 参数类型 应该是 string [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9242)
* 修复 Math.round(NaN) 运行报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7509)
* 修复 容器组件中子组件和排版相关的CSS样式设置无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6060)
* 修复 4.26版本引发的 uts：调用返回参数为promise类型的函数会报UTS: targetFunction does not exists 错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10051)
