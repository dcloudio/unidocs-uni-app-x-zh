# uni-app x Android原生SDK

## 正式版

### 4.66.2025051912

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13516-4.66.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.66.2025051912）版本生成本地打包App资源。

**[历史版本](https://pan.baidu.com/s/1M6XHzokpQYJqfICTzjuQ_g?pwd=93yh)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.66.2025051912.html)**

## alpha版

### 4.71.2025061206-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13636-4.71.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.71.2025061206-alpha）版本生成本地打包App资源。
* 新增 API uni.request RequestTask 支持 onHeadersReceived、onChunkReceived 等方法。可通过POST请求AI大模型并流式接受返回 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request.html#onchunkreceived) <https://issues.dcloud.net.cn/pages/issues/detail?id=17392>
* 修复 4.51版本引发的 API actionSheet 非用户交互 actionSheet 导致 actionSheet 关闭时不触发 fail 回调 [文档](https://doc.dcloud.net.cn/uni-app-x/api/action-sheet.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17394>
* 优化 API uni.showModal content内容超长时不再截断而是滚动显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17661)
* 新增 CSS 支持自定义变量 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/function.html#customvar) <https://issues.dcloud.net.cn/pages/issues/detail?id=17083>
* 新增 组件 rich-text 支持 mode 属性，使用 web-view 组件重构，解决各平台差异 [文档](https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16884>
* 新增 组件 camera 支持 mode 属性，支持扫码 [文档](https://doc.dcloud.net.cn/uni-app-x/component/camera.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=17663>
* 新增 API uni.scanCode 支持扫码 [文档](https://doc.dcloud.net.cn/uni-app-x/api/scan-code.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15407>
* 新增 API uni.hideKeyboard、uni.onKeyboardHeightChange、uni.offKeyboardHeightChange 操作软键盘 [文档](https://doc.dcloud.net.cn/uni-app-x/api/keyboard.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16200>
* 新增 API uni.getClipboardData/uni.setClipboardData 读写系统剪贴板 [文档](https://doc.dcloud.net.cn/uni-app-x/api/clipboard.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16591>
* 新增 API uni.getBackgroundAudioManager 支持 cache 属性控制音频播放是否缓存到本地 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16840>
* 新增 API uni.openDocument 打开文档 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-document.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=16593>
* 修复 组件 canvas 的 context 对象画线部分函数存在内存泄漏导致应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17253)
* 新增 支持安全网络 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/function.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18154>
* 新增 组件 match-media 安卓和鸿蒙平台支持 match-media 组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/match-media.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18227>
* 修复 编译器 使用`<script setup>`时template中的错误部分情况无法正确回源 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18546)
* 修复 vue 响应式数组indexOf、lastIndexOf、includes方法部分情况返回值不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18527)
* 修复 vue 响应式数组调用sort方法后不触发依赖收集 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18263)
* 修复 vue app.use省略插件可选参数时运行报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15663)
* 修复 vue 在函数里面返回计算属性会报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16559)
* 修复 vue 组合式部分情况下类型推断不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17213)
* 修复 组件 view 切换如果有视频在里面，只能截视频其它层截不出来 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17456)
* 修复 4.51版本引发的 组件 swiper autoplay = true 且 设置了duration 动画时长，且元素个数为2时会出现一张空白的轮播图 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15860)
* 修复 4.51版本引发的 组件 swiper current 值使用计算属性时不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16302)
* 修复 组件 list-view 设置 refresher-enabled 为 false 导致嵌套滚动失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17635)
* 修复 组件 waterflow 瀑布流设置为 1 列无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16826)
* 修复 组件 sticky-section 下 list-item 通过 DOM API 修改 style 高度后不更新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17982)
* 修复 组件 image 未支持 uni.env 目录图片地址 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17288)
* 修复 组件 camera 多个页面使用 camera 组件，返回上一页面时 camera 组件黑屏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17760)
* 修复 组件 camera 在部分设备拍照会旋转 90° [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18429)
* 修复 组件 web-view 网页iframe中输入框获取焦点后可能被软键盘遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17365)
* 修复 组件 web-view 在部分低版本设备上获取内容高度不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18463)
* 修复 API modal 隐藏系统底部导航栏后调用 uni.showModal/uni.showActionSheet 会显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15498)
* 修复 4.61版本引发的 API uni.showModal 部分场景不能正常弹窗 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17002)
* 修复 API uni.getRecorderManager 设置 duration 后调用 stop 函数后会继续触发 onStop 回调 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16923)
* 修复 API uni.getRecorderManager 应用关闭麦克风权限还能继续录音 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17045)
* 修复 API uni.getRecorderManager onStop 回调不返回任何内容 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17713)
* 修复 4.61版本引发的 CSS text 部分机型无法触发 click 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17347)
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
* 修复 可选链部分情况下包含索引访问时编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18549)
* 修复 静态属性内定义的局部class不能被继承 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16899)
* 修复 部分情况下 class 构造器定义的参数属性没有正确补充 override 修饰符 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16901)
* 修复 UTSJSONObject多层嵌套时访问外部this作用域编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16690)
* 修复 UInt8Array/UInt16Array 迭代异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16496)
* 修复 for of 遍历 UInt8Array 获得的数字与web 不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18121)
* 修复 setTimeout 必须要指定 时间参数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16768)

**[历史版本](https://pan.baidu.com/s/1OXvFjfGW6zDAyzTZGpY7hQ?pwd=aa2c)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.63.2025042307-alpha.html)**
