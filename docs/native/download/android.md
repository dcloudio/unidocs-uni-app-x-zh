# uni-app x Android原生SDK

## 正式版

### 4.45.2025010502

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12905-4.45.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.45.2025010502）版本生成本地打包App资源。
* 修复 4.41版本引发的 String.split 使用了 Kotlin 的 removeFirst/removeLast 扩展函数与 Android15 中的 Java 函数冲突

## alpha版

### 4.51.2025012108-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13034-4.51.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.51.2025012108-alpha）版本生成本地打包App资源。
* 新增 API UniPage 补充更多信息属性 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=10587>
* 重构 showActionSheet，基于dialogPage，支持国际化、主题、横屏、更多item数量、自定义颜色 [文档](https://doc.dcloud.net.cn/uni-app-x/api/show-action-sheet.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6259>
* 新增 API uni.hideActionSheet 关闭栈顶页面的 actionSheet [文档](https://doc.dcloud.net.cn/uni-app-x/api/show-action-sheet.html#hideactionsheet) <https://issues.dcloud.net.cn/pages/issues/detail?id=15304>
* 修复 API dialogPage pages.json 中 navigationStyle、backgroundColorContent 配置无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14225)
* 新增 vue v-on 支持 prevent 修饰符 [文档](https://doc.dcloud.net.cn/uni-app-x/vue/modifier.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15333>
* 新增 组件 共享元素动画 [文档](https://doc.dcloud.net.cn/uni-app-x/component/share-element.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14354>
* 新增 组件 text 嵌套为子组件时响应点击事件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/text.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=362>
* 新增 组件 map 更改tap相关Event类型继承自UniPointerEvent [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html#unimappoitapevent) <https://issues.dcloud.net.cn/pages/issues/detail?id=14280>
* 新增 组件 map 支持Marker的callout属性 [文档](https://doc.dcloud.net.cn/uni-app-x/component/map.html#%E5%B1%9E%E6%80%A7) <https://issues.dcloud.net.cn/pages/issues/detail?id=14595>
* 新增 API uni.openAppAuthorizeSetting 打开系统的应用授权管理页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-app-authorize-setting.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12833>
* 新增 API uni.chooseMedia 选择图片或视频 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-media.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13164>
* 新增 API uni.previewImage 基于dialogPage重构，优化指示器效果，补充长按事件，开放源码方便自定义 [文档](https://doc.dcloud.net.cn/uni-app-x/api/preview-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15200>
* 新增 API uni.getUniverifyManager 基于dialogPage重构内置UI，适配暗黑模式 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14332>
* 新增 CSS 支持env方法 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/function.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7296>
* 调整 DOM API CSSStyleDeclaration getPropertyValue获取不存在的样式值时，与web一样返回空字符串 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/cssstyledeclaration.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14749>
* 修复 4.31版本引发的 组件 map marker不支持title属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14270)
* 修复 CSS 某些情况下未处理百分比导致view没有显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14572)
* 新增 pages.json 支持androidThreeButtonNavigationBackgroundColor配置虚拟按键导航栏背景色 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14135>
* 新增 API 支持chooseFile [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-file.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14362>
* 新增 API uni.isSimulator() 判断是否为模拟器 [文档](https://doc.dcloud.net.cn/uni-app-x/api/is-simulator.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15225>
* 新增 API getAccessibilityInfo 获取无障碍服务相关信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-accessibility-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15303>
* 新增 API uni.base64ToArrayBuffer 、uni.arrayBufferToBase64 [文档](https://doc.dcloud.net.cn/uni-app-x/api/base64.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12771>
* 新增 API uni.request 支持 ArrayBuffer 数据 [文档](http://localhost:8081/uni-app-x/api/request.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11652>
* 新增 API uni.request 支持sse 用于流式响应服务器推送消息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/connect-event-source.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14290>
* 新增 API uni.getFileSystemManager 读取文件支持content://路径 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=14130>
* 新增 DOM API 关键帧动画 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#animate) <https://issues.dcloud.net.cn/pages/issues/detail?id=13135>
* 修复 编译器 无法使用相对路径引入uni_modules下插件static目录 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14427)
* 修复 vue Array和Map的forEach、Map的for of不触发响应式收集 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15065)
* 修复 vue props 使用数组定义 type 类型包含 null 时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14252)
* 修复 组件 list-view 对v-if的元素缓存异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13869)
* 修复 组件 list-view 安卓下listview中sticky-header如果是动态加载的数据，无法吸顶 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14705)
* 修复 组件 input 部分情况下keyboardheightchange事件不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13334)
* 修复 组件 image 配置border-radius属性后边缘锯齿严重 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15258)
* 修复 4.31版本引发的 组件 video 使用view.takeSnapshot（）方法对暂停的video视频暂停页面进行截图，4.29版本使用该方法可以进行截图，更新至4.36无法进行截图，截图后图片是全黑 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14013)
* 修复 组件 video 组件缺少开关弹幕的API [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14195)
* 修复 组件 canvas y轴参数，文字却写成了X轴 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14980)
* 修复 组件 ad 升级腾讯优量汇广告SDK到4.611.1481版，适配android 15 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15262)
* 修复 API setTabBar 切换tabbar页面时图标会出现短暂的闪白 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15288)
* 修复 API showActionSheet uni.showActionSheet 数组超过6就报错了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14821)
* 修复 CSS text-overflow : ellipsis 在某些尺寸时会换行 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13663)
* 新增 支持更多联合类型 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#union-type) <https://issues.dcloud.net.cn/pages/issues/detail?id=15131>
* 新增 支持类型保护、类型收窄 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#narrowing) <https://issues.dcloud.net.cn/pages/issues/detail?id=15132>
* 新增 Array支持静态方法 from、fromAsync、isArray、of [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/array.html#from-arraylike-arraylike-t) <https://issues.dcloud.net.cn/pages/issues/detail?id=6394>
* 修复 await 一个非 Promise 类型的值编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14481)
* 修复 class静态getter、setter编译错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15168)
* 修复 switch case 语句中使用return代替break时，case 语句不会自动合并 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9158)
* 修复 Array.push数组中添加数据，运行调试一切正常，打包后就不能渲染了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14417)
* 修复 promise异常安卓环境未带出文件位置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15056)
* 修复 promise调用链抛出reject异常安卓结果和web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15083)
* 修复 uni-app环境下 setPrivacyAgree/isPrivacyAgree 数值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14367)
* 修复 4.42版本引发的 uni-app项目 uts插件中修改的代码真机运行到Android14及以上系统设备非首次更新未生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15213)
