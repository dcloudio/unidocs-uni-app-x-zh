# uni-app x Android原生SDK

## 正式版

### 4.45.2025010502

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12905-4.45.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.45.2025010502）版本生成本地打包App资源。
* 修复 4.41版本引发的 String.split 使用了 Kotlin 的 removeFirst/removeLast 扩展函数与 Android15 中的 Java 函数冲突

## alpha版

### 4.53.2025022409-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@13128-4.53.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.53.2025022409-alpha）版本生成本地打包App资源。
* 新增 组件 兼容支持 cover-view、cover-image [文档](https://doc.dcloud.net.cn/uni-app-x/component/cover-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=15771>
* 修复 组件 canvas 设置textBaseline="Top"绘制位置不准确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15634)
* 修复 组件 canvas Image释放后不会立即回收内存 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15645)
* 修复 组件 web-view 底部textarea弹出的软键盘遮挡界面元素 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15678)
* 修复 API dialogPage 在app的onLaunch或在页面的onLoad中打开dialogPage时获取不到安全区域信息 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15489)
* 修复 CSS border 安卓运行时解析 border 和编译时表现不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=15510)
