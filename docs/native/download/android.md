# uni-app x Android原生SDK

## 正式版

### 4.75.2025071105

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13795-4.75.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.75.2025071105）版本生成本地打包App资源。
* 新增 API uni.request RequestTask 支持 onHeadersReceived、onChunkReceived 等方法。可通过POST请求AI大模型并流式接受返回 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request.html#onchunkreceived) <https://issues.dcloud.net.cn/pages/issues/detail?id=17392>
* 修复 API dialogPage .route 路径格式错误问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18727)
* 修复 4.51版本引发的 API actionSheet 非用户交互 actionSheet 导致 actionSheet 关闭时不触发 fail 回调 [文档](https://doc.dcloud.net.cn/uni-app-x/api/action-sheet.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17394>
* 优化 API uni.showModal content内容超长时不再截断而是滚动显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17661)
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
* 新增 组件 match-media 安卓和鸿蒙平台支持 match-media 组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/match-media.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18227>
* 修复 API uni.createInnerAudioContext 与微信小程序平台 音频、背景音频 播放细节存在的差异 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18479)
* 新增 组件 textarea confirm-type 属性支持send/search/next/go/done类型 [文档](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18616>
* 新增 API uni.createInnerAudioContext uni.setInnerAudioOption 支持配置音频能否与其他音频混播 [文档](https://doc.dcloud.net.cn/uni-app-x/api/set-inner-audio-option.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15042>
* 修复 编译器 使用`<script setup>`时template中的错误部分情况无法正确回源 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18546)
* 修复 vue 响应式数组indexOf、lastIndexOf、includes方法部分情况返回值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18527)
* 修复 vue 响应式数组调用sort方法后不触发依赖收集 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18263)
* 修复 vue app.use省略插件可选参数时运行报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15663)
* 修复 vue 在函数里面返回计算属性会报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16559)
* 修复 vue 组合式部分情况下类型推断不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17213)
* 修复 组件 text 嵌套 text 子组件时行高可能不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7529)
* 修复 组件 text 文本中存在换行符“\n”时 white-space 设置为 nowrap 效果与web平台不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18612)
* 修复 组件 button 组件 设置居中可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1957)
* 修复 组件 input keyboardheightchange 事件回调中返回的软键盘高度不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18750)
* 修复 组件 input 点击收起键盘时，被点击的组件点击事件无法响应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18795)
* 修复 组件 textarea focus 事件返回的键盘高度异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16996)
* 修复 组件 video 组件竖屏全屏时自定义子组件无法正确显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18076)
* 修复 组件 video 竖屏方向进入全屏时 fullscreenchange 事件返回的 direction 属性值仍为 horizontal [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18561)
* 修复 组件 view 切换如果有视频在里面，只能截视频其它层截不出来 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17456)
* 修复 4.51版本引发的 组件 swiper autoplay = true 且 设置了duration 动画时长，且元素个数为2时会出现一张空白的轮播图 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15860)
* 修复 4.51版本引发的 组件 swiper current 值使用计算属性时不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16302)
* 修复 组件 text 嵌套 text 可能出现闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18770)
* 修复 4.61版本引发的 CSS transition 动态修改style执行动画可能闪烁 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18799) [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18799)
* 修复 组件 list-view 设置 refresher-enabled 为 false 导致嵌套滚动失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17635)
* 修复 组件 waterflow 瀑布流设置为 1 列无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16826)
* 修复 组件 sticky-section 下 list-item 通过 DOM API 修改 style 高度后不更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17982)
* 修复 组件 image 未支持 uni.env 目录图片地址 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17288)
* 修复 组件 camera 多个页面使用 camera 组件，返回上一页面时 camera 组件黑屏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17760)
* 修复 组件 camera 在部分设备拍照会旋转 90° [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18429)
* 修复 组件 web-view 在部分低版本设备上获取内容高度不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18463)
* 修复 API uni.getBackgroundAudioManager 可能会重复下载音乐封面图 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19233)
* 修复 API dialogPage tabBar 页面 showDialogPage，切换 tabBar 后 dialogPage 无法关闭 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16059)
* 修复 API dialogPage 中 textarea 组件 keyboardheightchange 事件返回的键盘弹出高度错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16513)
* 修复 API uni.showToast 自定义 image 正式打包模式下无法展示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18597)
* 修复 API uni.scanCode 部分设备闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18488)
* 修复 API uni.saveVideoToPhotosAlbum 在部分设备上保存同一个文件几十次可能会失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18861)
* 修复 API uni.getBackgroundAudioManager 在Android 13 设备上播放结束再次调用 play 报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18804)
* 修复 API modal 隐藏系统底部导航栏后调用 uni.showModal/uni.showActionSheet 会显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15498)
* 修复 4.61版本引发的 API uni.showModal 部分场景不能正常弹窗 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17002)
* 修复 API uni.getRecorderManager 设置 duration 后调用 stop 函数后会继续触发 onStop 回调 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16923)
* 修复 API uni.getRecorderManager 应用关闭麦克风权限还能继续录音 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17045)
* 修复 API uni.getRecorderManager onStop 回调不返回任何内容 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17713)
* 修复 CSS width 父级设置横向居中，子text定位absolute时宽度受限 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11847)
* 修复 CSS overflow 设置为 visible 同时设置 box-shadow 后子元素可能被裁剪 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18136)
* 修复 CSS box-shadow 多次触发渲染导致显示尺寸不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18383)
* 修复 4.61版本引发的 CSS text 部分机型无法触发 click 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17347)
* 修复 DOM API UniElement requestFullscreen 在fixed定位时异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18539)
* 修复 DOM API UniElement 安卓使用animation会报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17858)
* 修复 type联合类型在interface和class中编译结果不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17241)
* 修复 变量判断非空后，后续使用仍需强制非空或可选链 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17771)
* 修复 interface中定义可为空属性类型为方法时缺少括号 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17249)
* 修复 浮点数字面量位运算编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17847)
* 修复 for循环中部分continue用法运行时死循环 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17519)
* 新增 Date 重构优化性能，并补齐 toLocaleString、toUTCString、getUTCMonth、valueOf 等方法 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/date.html#date) <https://issues.dcloud.net.cn/pages/issues/detail?id=17272>
* 新增 UniActivityLifeCycleCallback 的方法中 UniActivityParams 类型参数支持 activity 属性 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/utsactivitycallback.html#uniactivitylifecyclecallback) <https://issues.dcloud.net.cn/pages/issues/detail?id=16876>
* 新增 UTSAndroid.getKotlinClass [文档](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17252>
* 修复 vue 使用 ::v-deep 深度选择器控制台告警 [文档](https://issues.dcloud.net.cn/pages/issues/detail?id=18266)
* 修复 UTS 部分正则表现与Web平台不一致的问题，项目中使用的`PCRE`风格正则表达式需调整为标准`ECMAScript`正则表达式 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/regexp.html#regexp) <https://issues.dcloud.net.cn/pages/issues/detail?id=16951>
* 修复 可选链部分情况下包含索引访问时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18549)
* 修复 静态属性内定义的局部class不能被继承 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16899)
* 修复 部分情况下 class 构造器定义的参数属性没有正确补充 override 修饰符 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16901)
* 修复 UTSJSONObject多层嵌套时访问外部this作用域编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16690)
* 修复 UInt8Array/UInt16Array 迭代异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16496)
* 修复 for of 遍历 UInt8Array 获得的数字与web 不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18121)
* 修复 setTimeout 必须要指定 时间参数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16768)

**[历史版本](https://pan.baidu.com/s/1M6XHzokpQYJqfICTzjuQ_g?pwd=93yh)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.75.2025071105.html)**

## alpha版

### 4.75.2025070414-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13775-4.75.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.75.2025070414-alpha）版本生成本地打包App资源。
* 修复 组件 text 优化部分text嵌套时行高不正确的情况 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7529)
* 修复 API uni.getBackgroundAudioManager 可能会重复下载音乐封面图 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19233)

**[历史版本](https://pan.baidu.com/s/1OXvFjfGW6zDAyzTZGpY7hQ?pwd=aa2c)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.75.2025070414-alpha.html)**
