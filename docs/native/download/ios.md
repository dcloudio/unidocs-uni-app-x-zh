# uni-app x iOS原生SDK

## 正式版

### 4.76.2025082103

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.76.zip)**

* 更新 API uni.requestPayment 微信支付 使用的微信 SDK 为 2.0.5 版 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request-payment.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=19870>
* 修复 pages.json tabBar 设置 text 内容为泰语显示异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=16947)
* 修复 组件 input 通过 v-model 绑定变量更新 value 不触发 @change 事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19615)
* 修复 组件 textarea 添加 value 属性后 textAlign 不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19706)
* 修复 API uni.chooseImage 选择照片时弹出系统提示  是否选择更多照片 或者 保留当前所选内容 时，选择 保留当前所选内容 后再次点击+号添加更多图片引发崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19763)
* 修复 API uni.chooseMedia 点击“取消”按钮关闭正常触发 fail 回调，下拉手势关闭没有触发 fail 回调 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19026)
* 修复 API uni.getBackgroundAudioManager 背景音频播放结束事件 onEnded 回调中播放下一曲无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=17691)
* 修复 4.71版本引发的 CSS 某些情况可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19746)


**[历史版本](https://pan.baidu.com/s/1PVLzui3QRkG5brzTxSYJlg?pwd=amqt)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.65.2025051206.html)**


## alpha版

### 4.82.2025093004-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.82.zip)**

* 更新 uni-ad 优量汇SDK 为 4.15.60 版 [文档](https://doc.dcloud.net.cn/uni-app-x/component/ad.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21887>
* 修复 4.81版本引发的 发行 提交 AppStore 审核报"二进制文件无效"，提示`ITMS-91065: Missing signature - Your app includes “Frameworks/SDWebImage.framework/SDWebImage”` [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21949)
* 修复 组件 input 在 scrollView 中获取焦点弹起键盘遮挡输入框时，点击 webview 自动收起键盘后界面异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21902)
* 修复 组件 video 在 iOS15 及以上系统播放时静音，开始播放后无法通过音量键调大音量 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2860)

**[历史版本](https://pan.baidu.com/s/130Rvlh2jdsp3aJ4YtigoJQ?pwd=xy7s)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.63.2025042307-alpha.html)**
