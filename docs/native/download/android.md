# uni-app x Android原生SDK

## 正式版

### 4.45.2025010502

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12905-4.45.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.45.2025010502）版本生成本地打包App资源。
* 修复 4.41版本引发的 String.split 使用了 Kotlin 的 removeFirst/removeLast 扩展函数与 Android15 中的 Java 函数冲突

## alpha版

### 4.52.2025020807-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13076-4.52.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.52.2025020807-alpha）版本生成本地打包App资源。
* 修复 4.51版本引发的 API showActionSheet appTheme 设置 auto 时，未适配系统主题问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15501)
* 修复 API uni.downloadFile 下载时断网不会触发回调事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15497)
* 修复 组件 button 拆分设置border相关样式不起作用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15526)
* 修复 4.51版本引发的 API showActionSheet 某些时机底部安全区适配失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15500)
* 修复 API uni.setAppBadgeNumber 在MIUI12以上系统设置角标不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15231)
### uts插件
* 修复 4.51版本引发的 部分情况下类型收窄编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15491)
