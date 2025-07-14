# uni-app x iOS原生SDK

## 正式版

### 4.75.2025071105

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.75.zip)**

* 新增 vue 支持页面作为组件渲染。可用于宽屏、折叠屏适配 [文档](https://doc.dcloud.net.cn/uni-app-x/page.html#page-as-component) <https://issues.dcloud.net.cn/pages/issues/detail?id=16777>
* 新增 vue 支持通过props接收页面参数 [文档](https://doc.dcloud.net.cn/uni-app-x/page.html#page-with-props) <https://issues.dcloud.net.cn/pages/issues/detail?id=16881>
* 修复 vue `<template>`中不能直接访问uni.env [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17184)
* 新增 API 支持uniCloud.SSEChannel [文档](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/sse-channel.html)
* 新增 API uni.request RequestTask 支持 onHeadersReceived、onChunkReceived 等方法。可通过POST请求AI大模型并流式接受返回 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request.html#onchunkreceived) <https://issues.dcloud.net.cn/pages/issues/detail?id=17392>)
* 修复 4.51版本引发的 API actionSheet 非用户交互 actionSheet 导致 actionSheet 关闭时不触发 fail 回调 [文档](https://doc.dcloud.net.cn/uni-app-x/api/action-sheet.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17394>
* 优化 API uni.showModal content内容超长时不再截断而是滚动显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17661)
* 修复 发行 v-model 指定参数类型时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16688)
* 修复 API uni.openDialogPage url 参数使用相对路径时报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18736)
* 新增 组件 input type 属性支持 none/search/email/url 等类型 [文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16245>
* 新增 组件 textarea change 事件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16614>
* 新增 API uni.createWebviewContext 支持 loadData 方法设置字符串来显示网页 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-webview-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17251>
* 调整 API uni.getFileSystemManager 统一 stat、saveFile、getSavedFileList、rmdir、copyFile 实现细节 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-file-system-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17279>
* 【重要】新增 CSS 支持自定义变量 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/function.html#customvar) <https://issues.dcloud.net.cn/pages/issues/detail?id=17083>
* 调整 组件 rich-text 使用 web-view 组件重构，解决各平台差异。Android平台支持mode选项 [文档](https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16884>
* 新增 组件 textarea 组件支持@confirm [文档](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16642>
* 新增 组件 camera 支持 mode 属性，支持扫码 [文档](https://doc.dcloud.net.cn/uni-app-x/component/camera.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17663>
* 新增 API uni.scanCode 支持扫码 [文档](https://doc.dcloud.net.cn/uni-app-x/api/scan-code.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15407>
* 新增 API uni.hideKeyboard、uni.onKeyboardHeightChange、uni.offKeyboardHeightChange 操作软键盘 [文档](https://doc.dcloud.net.cn/uni-app-x/api/keyboard.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16200>
* 新增 API uni.getClipboardData/uni.setClipboardData 读写系统剪贴板 [文档](https://doc.dcloud.net.cn/uni-app-x/api/clipboard.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16591>
* 新增 API uni.getBackgroundAudioManager 支持 cache 属性控制音频播放是否缓存到本地 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16840>
* 新增 API uni.openDocument 打开文档 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-document.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16593>
* 修复 组件 canvas 的 context 对象画线部分函数存在内存泄漏导致应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17253)
* 新增 支持安全网络 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/function.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18154>
* 修复 API uni.createInnerAudioContext 与微信小程序平台 音频、背景音频 播放细节存在的差异 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18479)
* 修复 编译器 发行时依赖的js文件内使用的api没有自动添加对应的模块 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17561)
* 更新 API uni.requestPayment 更新支付宝SDK为 15.8.32.5 版 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17401>
* 修复 组件 video 播放 m3u8 大部分情况没有声音 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17292)
* 修复 组件 text 嵌套显示多行文本时 line-height 样式不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18068)
* 修复 组件 picker-view 切换展示时立即修改数据会引起应用闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18747)
* 修复 组件 view 系统语言设置为土耳其语时 view、image 标签提示不存在 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18046)
* 修复 组件 swiper 在某些场景展示的内容与 current 不匹配 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17321)
* 修复 4.64版本引发的 组件 list-view 高度动态变化时新插入的 list-item 不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17030)
* 修复 组件 web-view 加载网络地址页面时加载进度条高度太高 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18027)
* 修复 4.18版本引发的 API pullDownRefresh 页面级下拉刷新雪花状指示器颜色没有适配 app 主题色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18637)
* 修复 API uni.getSystemSetting 在系统开启了蓝牙的情况获取 bluetoothEnabled 值为 false [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18063)
* 修复 4.61版本引发的 API uni.getFileSystemManager readFile 和 readFileSync 方法参数 encoding 为 base64 时编码错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18802)
* 修复 API uni.navigateBack 返回页面过渡动画不自然，会闪一下 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17941)
* 修复 API uni.startPullDownRefresh 自定义导航栏和页面级下拉刷新共存时页面显示错乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17605)
* 修复 CSS border-color 某些情况下 borderColor 传入特殊字符会导致边框变成白色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18877)
* 修复 CSS border 某些场景边框可能被裁剪 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17109)
* 修复 编译为js时部分情况下对象未转化为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17197)
* 修复 type联合类型在interface和class中编译结果不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17241)
* 修复 变量判断非空后，后续使用仍需强制非空或可选链 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17771)
* 修复 interface中定义可为空属性类型为方法时缺少括号 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17249)
* 修复 浮点数字面量位运算编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17847)
* 修复 for循环中部分continue用法运行时死循环 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17519)
* 修复 vue 使用 ::v-deep 深度选择器控制台告警 [文档](https://issues.dcloud.net.cn/pages/issues/detail?id=18266)
* 新增 支持 TextDecoder、TextEncoder [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/textdecoder.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17905>
* 修复 导出函数参数中存在多层 Object 嵌套且属性 callback 时不能正常触发回调 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17151)
* 修复 instanceof 无法直接判断带泛型的类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17289)
* 修复 RegExp 某些场景下的 lastIndex 值错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18242)

**[历史版本](https://pan.baidu.com/s/1PVLzui3QRkG5brzTxSYJlg?pwd=amqt)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.65.2025051206.html)**


## alpha版

### 4.75.2025070414-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.75.zip)**


* 修复 组件 video 播放 m3u8 大部分情况没有声音 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17292)

**[历史版本](https://pan.baidu.com/s/130Rvlh2jdsp3aJ4YtigoJQ?pwd=xy7s)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.63.2025042307-alpha.html)**
