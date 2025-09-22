# uni-app x Android原生SDK

## 说明

- 从HBuilderX 4.81-alpha版开始，为了适配Kotlin版本，对gradle插件做了升级，升级SDK时需要替换原有插件。插件配置及说明参考[文档](../use/android.md#gradleplugin)。

## 正式版

### 4.76.2025082103

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13832-4.76.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.76.2025082103）版本生成本地打包App资源。

**[历史版本](https://pan.baidu.com/s/1M6XHzokpQYJqfICTzjuQ_g?pwd=93yh)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.76.2025082103.html)**

## alpha版

### 4.81.2025091909-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@14045-4.81.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.81.2025091909-alpha）版本生成本地打包App资源。
* 【重要】新增 API uni.createWorker 支持 Worker 线程 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-worker.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=19898>
* 新增 uni-AD 国外广告 支持 AppLovin 渠道 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad) <https://issues.dcloud.net.cn/pages/issues/detail?id=20516>
* 更新 uni-AD 优量汇SDK Android为4.650.1520版，iOS为4.15.50版；快手SDK Android为4.6.30.1版，iOS为4.6.30.1版；华夏乐游SDK Android为3.12.2版，iOS为2.14.0版；Sigmob Android SDK为4.24.4版 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad) <https://issues.dcloud.net.cn/pages/issues/detail?id=19871>
* 新增 CSS white-space 支持 pre、preLine、preWrap、breakSpaces 属性值 [文档](https://doc.dcloud.net.cn/uni-app-x/css/white-space.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20454>
* 新增 组件 image 支持 svg 格式图片 [文档](https://doc.dcloud.net.cn/uni-app-x/component/image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6560>
* 新增 组件 live-player 支持实时音视频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/component/live-player.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21339>
* 新增 组件 live-pusher 支持实时音视频录制 [文档](https://doc.dcloud.net.cn/uni-app-x/component/live-pusher.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21340>
* 新增 组件 ad 支持展示视频广告 [文档](https://doc.dcloud.net.cn/uni-app-x/component/ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=19926>
* 新增 API uni.onNetworkStatusChange 监听网络状态变化 [文档](https://doc.dcloud.net.cn/uni-app-x/api/network-status-change.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20054>
* 新增 API locationChange 支持 uni.onLocationChange、uni.startLocationUpdate、uni.startLocationUpdateBackground 等用于监听位置变化信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/location-change.html#onlocationchange) <https://issues.dcloud.net.cn/pages/issues/detail?id=16595>
* 新增 发行 UniAppXSDK.start方式启动应用 [文档](https://doc.dcloud.net.cn/uni-app-x/native/use/iosapi.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18560>
* 修复 组件 canvas 使用 takeSnapshot 截图会存在默认背景色，无法截出背景透明图片 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20169)
* 修复 API uni.uploadFile 不传 file 字段报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19511)
* 修复 API uni.scanCode 相册选择图标可能被遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19121)
* 修复 CSS 使用不支持的 @media css 规则控制台无告警，编译产物不符合预期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19396)
* 修复 DOM API CSSStyleDeclaration Android在 transitionend 中修改元素的属性会一直执行 transitionend 事件；iOS设置元素的高度为 auto时，元素看不到了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19405)
* 【重要】适配 Google Play 要求应用支持 16KB 内存页面大小 [文档](https://doc.dcloud.net.cn/uni-app-x/tutorial/android-16kb.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=19117>
* 新增 组件 camera 支持 photo-resolution 属性设置拍照图片分辨率 [文档](https://doc.dcloud.net.cn/uni-app-x/component/camera.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20679>
* 新增 组件 web-view 支持 disable-user-select-menu 设置是否禁用文本选择时弹出系统菜单 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21581>
* 新增 API uni.request 补充 json解析类型失败的错误码 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20329>
* 新增 API uni.getLocation 更新 腾讯定位SDK 为 7.6.1.3 版 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21586>
* 新增 API uni.requestPayment 更新 支付宝SDK 为 15.8.38 版 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21576>
* 新增 API push uni-push 支持 FCM [文档](https://doc.dcloud.net.cn/uni-app-x/api/uni-push.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18885>
* 新增 DOM API UniTextElement 支持 UniTextLayout 文本测量 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unitextelement.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20365>
* 修复 vue 通过type定义的带泛型的对象类型不支持响应式 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19971)
* 修复 vue defineProps传入复杂嵌套type类型编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21325)
* 修复 组件 scroll-view 嵌套 textarea 组件后无法滚动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15280)
* 修复 组件 nested-scroll-body 存在动态加载元素时滚动视图可能会自动滚动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19617)
* 修复 组件 waterflow load-more 插槽显示异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20342)
* 修复 组件 share-element 中 swiper 组件 circular 设置为 true 时无共享元素效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19506)
* 修复 组件 input maxlength 属性首次渲染时无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7709)
* 修复 组件 input 光标移动异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11324)
* 修复 组件 input auto-focus 与 focus 属性冲突时效果异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16717)
* 修复 组件 input v-model.number 时无法正确清空内容问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19584)
* 修复 组件 input v-model.number 输入小数点后非预期补零问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19585)
* 修复 组件 input 使用v-model的同时绑定一个无参input函数编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19799)
* 修复 组件 video 在安卓7设备播放 webm 视频没有背景音乐 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9856)
* 修复 组件 video 自动播放结束后中间会出现一个刷新的图标 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14227)
* 修复 组件 camera 组件滑动时渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20436)
* 修复 API uni.showModal 成功回调中调用 uni.navigateBack 报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19068)
* 修复 API uni.uploadFile 增加 User-Agent 请求头无法覆盖默认值 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19825)
* 修复 API uni.getSystemInfoSync 返回的 appLanguage 值异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18926)
* 修复 API uni.getClipboardData 在页面生命周期 onShow 中可能无法获取数据 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19482&ask_id=211227)
* 修复 API uni.scanCode 扫码有概率发生闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19093)
* 修复 API uni.scanCode 部分设备多码选择画面异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19573)
* 修复 API uni.getRecorderManager 生成的 WAV 格式文件大小不对 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20035)
* 修复 API uni.getFileSystemManager 调用 getFileInfo 传入 uni.chooseFile 返回的地址无法获取文件信息 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19993)
* 修复 API uni.getFileSystemManager 复制大文件报内存超限的错误 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20265)
* 修复 API uni.getFileSystemManager 调用 open 打开项目中 static 目录下的文件报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21074)
* 修复 4.25版本引发的 API uni.getLocation 缺失权限时报错信息不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19257)
* 修复 API uni.createPushMessage 部分情况点击推送消息无法拉起App [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20088)
* 修复 API uni.createCameraContext takePhoto 时间过长 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20512)
* 修复 CSS vue style 中直接定义 css 变量导致应用编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20359)
* 修复 CSS overflow 设置为 visible 时事件分发异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8932)
* 修复 CSS text-shadow 设置为 rgb 颜色时可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21125)
* 修复 CSS var自定义变量 设置 border-style 从 solid 切换为 dashed 时颜色不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20488)
* 修复 运行调试 自定义基座真机运行调用uts插件可能抛 stub 异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19968)
* 修复 字符串或模板字符串部分字符编译失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19131)
* 修复 4.75版本引发的 type类型嵌套部分情况下编译失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20724)
* 【重要】新增 kotlin 版本升级2.2.0 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-android.html#kotlin2-%E5%8D%87%E7%BA%A7%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9) <https://issues.dcloud.net.cn/pages/issues/detail?id=20278>
* 修复 安卓端  | 和 >>> 运算符 在部分场景下与web不一致的问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17838)
* 修复 使用符号.作为key会引发无法获取值 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19443)
* 修复 watch方法中包含的async方法抛出的异常信息不够准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19436)
* 修复 4.61版本引发的 在 uni-app 项目中 uts插件调用 uni.showModal 不展示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19773)

**[历史版本](https://pan.baidu.com/s/1OXvFjfGW6zDAyzTZGpY7hQ?pwd=aa2c)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.81.2025091909-alpha.html)**
