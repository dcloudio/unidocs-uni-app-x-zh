# uni-app x Android原生SDK

## 说明

- 从HBuilderX 4.81-alpha版开始，为了适配Kotlin版本，对gradle插件做了升级，升级SDK时需要替换原有插件。插件配置及说明参考[文档](../use/android.md#gradleplugin)。

## 正式版

### 5.03.2026031210

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@14591-5.03.zip)**

* 更新uni-app离线打包支持，需使用HBuilderX（5.03.2026031210）版本生成本地打包App资源。
* 新增 vue useComputedStyle用于监听组件根节点计算后样式变化 [文档](https://doc.dcloud.net.cn/uni-app-x/vue/composition-api.html#use-computed-style)
* 调整 CSS line-height 默认值为 normal。不再固定1.2 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25246)
* 新增 组件 loading [文档](https://doc.dcloud.net.cn/uni-app-x/component/loading.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21140>
* 升级 API uni.showLoading 基于loading组件重构showLoading。并不再支持点击空白区关闭loading [文档](https://doc.dcloud.net.cn/uni-app-x/api/loading.html#showloading) <https://issues.dcloud.net.cn/pages/issues/detail?id=25025>
* 新增 组件 page-container 组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/page-container.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26320>
* 新增 UniPage API 支持 querySelector/querySelectorAll 方法 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#queryselector) <https://issues.dcloud.net.cn/pages/issues/detail?id=25211>
* 调整 CSS white-space 调整靠近Web规范。App默认值调整为 keep [文档](https://doc.dcloud.net.cn/uni-app-x/css/white-space.html#hbuilderx5-0%E7%89%88%E6%9C%AC%E8%B0%83%E6%95%B4) <https://issues.dcloud.net.cn/pages/issues/detail?id=24206>
* 修复 页面存在多个 onBackPress 任一返回 true 时拦截返回操作失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26833)
* 【重要】新增 API uni.request enableQuic 属性支持 Quic/h3 协议 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=24727>
* 新增 App.uvue 支持组合式 [文档](https://doc.dcloud.net.cn/uni-app-x/vue/composition-api.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=24585>
* 新增 API uni.setInnerAudioOption 支持speakerOn、obeyMuteSwitch等参数 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html#setinneraudiooption-兼容性) <https://issues.dcloud.net.cn/pages/issues/detail?id=22476>
* 新增 API uni.getBackgroundAudioManager 支持 offPlay、offPause、offStop 等取消监听相关方法 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html#offcanplay) <https://issues.dcloud.net.cn/pages/issues/detail?id=23448>
* 新增 UniPage API takeSnapshot 对页面进行截图 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26398>
* 升级 组件 web-view 使用 uts 标准组件模式重构 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=23174>
* 修复 API uni.previewImage 设置过多图片时显示速度变慢 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26383)
* 修复 CSS align-items 设置min-width后, align-items: center 不起作用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23067)
* 修复 样式隔离2.0时自定义组件透传hover-class不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26676)
* 新增 CSS border-radius 支持百分比 [文档](https://doc.dcloud.net.cn/uni-app-x/css/border-radius.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=25460>
* 新增 发行 云端打包支持配置应用名称国际化 [文档](https://doc.dcloud.net.cn/uni-app-x/i18n.html#manifest) <https://issues.dcloud.net.cn/pages/issues/detail?id=24944>
* 修复 CSS background 设置为 none 时可能不会设置背景透明 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23350)
* 升级 组件 rich-text 使用 uts 标准组件模式重构 [文档](https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=24578>
* 新增 API uni.previewImage 未设置 longPressActions 默认长按行为为保存到系统相册 [文档](https://doc.dcloud.net.cn/uni-app-x/api/preview-image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=25441>
* 调整 组件 全局事件 touch 事件的 preventDefault 仅在当前事件周期内生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23412)
* 修复 ref和reactive后的UTSJSONObject不支持.操作符访问第一层数据 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15846)
* 修复 组件 scroll-view 嵌套时设置子scroll-view 的 direction 属性值为 none 会导致父 scroll-view 无法滚动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21662)
* 修复 组件 list-view 子节点为多根节点的封装组件时，更新子节点报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17610&ask_id=208416)
* 修复 4.85版本引发的 组件 waterflow 在 swiper 组件中使用会出现加载更多报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23912)
* 修复 组件 text 在 list-view 组件中使用 text 嵌套会导致 tap/click 事件无法触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22215)
* 修复 组件 button 设置 border 样式无效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18878)
* 修复 组件 input 设置 type 为 none 时部分情况获取焦点依然弹出软键盘 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23856)
* 修复 组件 textarea 设置 confirm 事件后点击软键盘的`换行`会失去焦点 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21759)
* 修复 组件 image 使用 svg 格式图片可能显示不正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22591)
* 修复 组件 video 播放部分视频源可能没有声音 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16434)
* 修复 组件 camera 设置默认使用前置摄像头无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22248)
* 修复 组件 camera 部分情况可能引起内存泄漏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22660)
* 修复 组件 camera 设置 mode 为 scanCode 模式时双击返回桌面可能引起应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24239)
* 修复 4.31版本引发的 API getCurrentPages 可能报 `expected 'UTSArray<UniPage>', actual 'UTSArray<UniNormalPage>'`异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23798)
* 修复 API uni.arrayBufferToBase64 转换使用 slice 方法截取获得的 arrayBuffer 数据输出内容为空字符串 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20232)
* 修复 API uni.addInterceptor `return false` 无法阻止 API 执行 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23133)
* 修复 API navigator 页面跳转失败时未输出具体错误信息 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22667)
* 修复 API uni.redirectTo 跳转页面引起内存泄漏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22277)
* 修复 API dialogPage uni.setNavigationBarColor 无法修改 dialogPage 状态栏前景色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21804)
* 修复 API dialogPage 在 tabBar 页面中打开时获取区域信息不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23928)
* 修复 API uni.getBoundingClientRectAsync 获取元素信息在部分情况可能不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24033)
* 修复 API uni.request 请求 gzip 资源时不会自动解压数据 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21720)
* 修复 API uni.downloadFile 偶发下载无响应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25489)
* 修复 API uni.scanCode 选择图片可能出现识别二维码失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20833)
* 修复 API uni.chooseImage 在部分设备会出现顶部菜单被系统状态栏档住 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22709)
* 修复 API uni.chooseImage 部分情况可能引起内存泄漏 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24195)
* 修复 API uni.getBackgroundAudioManager 调用 pause/stop 方法后系统音频控制面板中播放状态没有改变 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24065)
* 修复 API uni.getRecorderManager 设置采样率sampleRate为16000不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25204)
* 修复 API uni.getFileSystemManager 调用 unzip 方法解压部分压缩文件失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21458)
* 修复 API uni.getFileSystemManager 调用 write 方法可能出现 java.io.IOExcePtion:Bad file descriptor 错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24228)
* 修复 API uni.getFileSystemManager 调用 write 方法写入长字符串可能引起失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=24946)
* 修复 API uni.getLocation 无法获取 speed 速度信息 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23828)
* 修复 API uni.createCanvasContextAsync drawImage 可能出现异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26145)
* 修复 CSS scss margin简写报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23316)
* 修复 CSS overflow 设置为 visible 时超出父元素范围时可能显示异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22823)
* 修复 CSS overflow 在部分情况可能导致事件触发混乱 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22897)
* 修复 CSS overflow 设置为 hidden 时父元素的 border 可能会被覆盖 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23497)
* 修复 CSS transition 设置 box-shadow 后 background-color 动画可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20603)
* 修复 DOM API UniElement animate 动画 iterations 设置为 1 时执行 2 次动画 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22132)
* 修复 DOM API UniElement querySelectorAll 返回值可能为 null [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25589)
* 修复 4.81版本引发的 DOM API UniElement animate 方法触发 margin、padding 动画仅第一次生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26744)
* 修复 DOM API CSSStyleDeclaration 获取部分通过 class 设置的样式返回空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26352)
* 修复 发行 应用市场合规检测可能报 Glide Mocks SDK 在同意隐私政策前读取图片头信息的位置信息 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25539)

**[历史版本](https://pan.baidu.com/s/1M6XHzokpQYJqfICTzjuQ_g?pwd=93yh)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/5.03.2026031210.html)**

## alpha版

### 5.03.2026031009-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@14591-5.03.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（5.03.2026031009-alpha）版本生成本地打包App资源。
* 修复 5.0版本引发的 CSS overflow 设置为 visible 时，在滚动视图中点击事件可能触发多次 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26426)

**[历史版本](https://pan.baidu.com/s/1OXvFjfGW6zDAyzTZGpY7hQ?pwd=aa2c)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/5.03.2026031009-alpha.html)**
