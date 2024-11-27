# uni-app x Android原生SDK

## 正式版

### 4.29.2024093009

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12359-4.29.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.29.2024093009）版本生成本地打包App资源。
* 修复 4.28版本引发的 vue3项目 页面组件setup情况下子组件无法通过$root.$scope获取getAppWebview的Bug [详情](https://ask.dcloud.net.cn/question/199111)
* 修复 4.28版本引发的 UTSJSONObject 包含 number 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9447)

## alpha版

### 4.36.2024112612-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12661-4.36.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.36.2024112612-alpha）版本生成本地打包App资源。
* 修复 API uni.createCanvasContextAsync 在生命周期 onLoad/onMount 中无法获取width/height [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13212)
* 修复 4.35版本引发的 vue keepAlive 组件切换时，触发了 update 生命周期的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13261)