# uni-app x iOS原生SDK

## 正式版

### 4.84.2025110307

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.84.zip)**

* 【重要】新增 API uni.createWorker 支持 Worker 线程 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-worker.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=19898>
* 新增 uni-ad 国外广告 支持 AppLovin 渠道 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-ad) <https://issues.dcloud.net.cn/pages/issues/detail?id=20516>
* 更新 uni-ad 腾讯优量汇SDK 为 4.15.60 版；快手广告和快手内容联盟SDK 为 4.9.20.1 版；穿山甲&GroMore SDK 为 7.2.0.0 版；Sigmob广告联盟SDK 为 4.20.3 版；百度百青藤广告SDK 为 10.02 版；章鱼广告SDK 为 2.5.10.10 版；泛连广告SDK 为 2.8.8.0.0 版；华夏乐游SDK 为 2.16.0 版；Google AdMob SDK 为 12.9.0 版；Pangle SDK 为 7.6.0.0 版；Unity SDK 为 4.16.0 版；Liftoff SDK 为 7.5.2 版；InMobi SDK 为 10.8.6 版；IronSource SDK 为 8.10.0 版；Meta SDK 为 6.20.1 版；Mintegral SDK 为 7.7.9 版；支持双十一预算 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-rewarded-video-ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=22382>
* 新增 组件 image 支持 svg 格式图片 [文档](https://doc.dcloud.net.cn/uni-app-x/component/image.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6560>
* 新增 组件 live-player 支持实时音视频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/component/live-player.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21339>
* 新增 组件 live-pusher 支持实时音视频录制 [文档](https://doc.dcloud.net.cn/uni-app-x/component/live-pusher.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21340>
* 新增 组件 ad 支持展示视频广告 [文档](https://doc.dcloud.net.cn/uni-app-x/component/ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=19926>
* 新增 组件 web-view 支持 disable-user-select-menu 设置是否禁用文本选择时弹出系统菜单 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21581>
* 新增 API uni.onNetworkStatusChange 监听网络状态变化 [文档](https://doc.dcloud.net.cn/uni-app-x/api/network-status-change.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20054>
* 新增 API locationChange 支持 uni.onLocationChange、uni.startLocationUpdate、uni.startLocationUpdateBackground 等用于监听位置变化信息 [文档](https://doc.dcloud.net.cn/uni-app-x/api/location-change.html#onlocationchange) <https://issues.dcloud.net.cn/pages/issues/detail?id=16595>
* 新增 原生SDK UniAppXSDK.start() 方法来启动应用 [文档](https://doc.dcloud.net.cn/uni-app-x/native/use/iosapi.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=18560>
* 新增 CSS white-space 支持 pre、preLine、preWrap、breakSpaces 属性值 [文档](https://doc.dcloud.net.cn/uni-app-x/css/white-space.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20454>
* 修复 组件 canvas 使用 takeSnapshot 截图会存在默认背景色，无法截出背景透明图片 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20169)
* 修复 API uni.uploadFile 不传 file 字段报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19511)
* 修复 API uni.scanCode 相册选择图标可能被遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19121)
* 修复 CSS 使用不支持的 @media css 规则控制台无告警，编译产物不符合预期 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19396)
* 修复 DOM API CSSStyleDeclaration Android在 transitionend 中修改元素的属性会一直执行 transitionend 事件；iOS设置元素的高度为 auto时，元素看不到了 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19405)
* 新增 API uni.setInnerAudioOption 支持配置音频是否可与其他音频混播 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html#setinneraudiooption) <https://issues.dcloud.net.cn/pages/issues/detail?id=19401>
* 新增 API uni.getUniVerifyManager 更新 个验SDK 为3.1.1.0 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html#getuniverifymanager) <https://issues.dcloud.net.cn/pages/issues/detail?id=21559>
* 新增 API uni.getDeviceInfo 返回的 deviceModel 支持 iPhone 17、iPhone 17 Pro、iPhone17ProMax、iPhoneAir 等设备型号 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=22381>
* 新增 DOM API UniElement 元素暴露 click 方法 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=20824>
* 修复 4.75版本引发的 manifest.json 设置defaultAppTheme以及uniStatistics可能无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20575)
* 修复 组件 view 默认的view没触发touch导致input的键盘无法收起 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19504)
* 修复 组件 swiper 组件circular=true时往左第一次不执行change事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19208)
* 修复 4.71版本引发的 组件 waterflow 通过 v-if 切换闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21415)
* 修复 组件 button 组件无法设置字体颜色 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19317)
* 修复 4.55版本引发的 组件 button 取消自定义button style后，button无法恢复默认样式 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20523)
* 修复 组件 slider 更新slider阴影效果，和其他端保持一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21533)
* 修复 组件 video 开启静音且将音量设置为0，进入视频播放页播放视频此时调整声音视频声音也不会出来 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20750)
* 修复 组件 video 在 iOS15 及以上系统播放时静音，开始播放后无法通过音量键调大音量 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2860)
* 修复 组件 canvas 样式opacity设为0时takeSnapshot函数截屏空白 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20294)
* 修复 组件 web-view ios端，webview的网页中如果给iframe设置了链接，则uni向 webview发送消息就会收不到 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19858)
* 修复 组件 web-view webview里的loading事件，经过测试发现在ios上会多次触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20090)
* 修复 组件 input 在 scrollView 中获取焦点弹起键盘遮挡输入框时，点击 webview 自动收起键盘后界面异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21902)
* 修复 API uni.setTabBarItem 在pages.json中tabBar.list的item设置visible=false，在ios中动态调用uni.setTabBarItem({index:0,visible:ture})显示空白但有占位，安卓端正常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20388)
* 修复 4.72版本引发的 API uni.pageScrollTo 设置相同值时只会执行一次 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20664)
* 修复 4.71版本引发的 API uni.request onChunkReceived 导致的偶发crash [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20476)
* 修复 API uni.previewImage 设置current不生效，不管填入的是几，都从第一个开始预览 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20411)
* 修复 API push uni-push 后台服务器故障排查中点击`一键检测`引起应用闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16228)
* 修复 API uni.createPushMessage createPushMessage创建的通知点击异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16230)
* 修复 4.76版本引发的 CSS position fixed 可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21144)
* 修复 CSS border 给 scroll-view 设置 border ios 样式存在问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=18797)
* 修复 CSS text-shadow 使用 rgb/rgba 色值无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16989)
* 修复 4.71版本引发的 CSS var自定义变量 默认值缺省时样式不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20486)
* 修复 DOM API UniElement takeSnapshot 对 web-view 组件截图时会出现页面回滚至顶端的现象 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19449)
* 修复 DOM API UniElement takeSnapshot 方法不触发 complete 回调 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21138)
* 修复 4.61版本引发的 发行 IOS云打包的APP，无法读取static目录下文件内容 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20141)

#### UTS插件相关
* 修复 对象属性中如果包含??导致对象类型变更为object，无法使用getString等属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20323)
* 修复 字符串或模板字符串部分字符编译失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19131)
* 修复 4.75版本引发的 type类型嵌套部分情况下编译失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20724)
* 新增 重构正则引擎，解决部分正则表达式与web表现不一致的问题 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/regexp.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21001>
* 新增 支持 currentThreadContext 获取当前线程信息、executeOnThread 指定线程执行任务和指定 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/utsios.html#utsios) <https://issues.dcloud.net.cn/pages/issues/detail?id=20466>
* 修复 插件依赖的 pod 库包含 PrivacyInfo.xcprivacy 文件时云端打包失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20585)
* 修复 4.64版本引发的 atob 方法未兼容 base64 url 格式字符串 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=20222)


**[历史版本](https://pan.baidu.com/s/1PVLzui3QRkG5brzTxSYJlg?pwd=amqt)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.65.2025051206.html)**


## alpha版

### 4.84.2025102304-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.84.zip)**

* 新增 组件 web-view 支持 disable-user-select-menu 设置是否禁用文本选择时弹出系统菜单 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21728>

**[历史版本](https://pan.baidu.com/s/130Rvlh2jdsp3aJ4YtigoJQ?pwd=xy7s)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.63.2025042307-alpha.html)**
