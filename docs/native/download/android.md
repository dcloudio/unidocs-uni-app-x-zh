# uni-app x Android原生SDK

## 正式版

### 4.29.2024093009

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12359-4.29.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.29.2024093009）版本生成本地打包App资源。
* 修复 4.28版本引发的 vue3项目 页面组件setup情况下子组件无法通过$root.$scope获取getAppWebview的Bug [详情](https://ask.dcloud.net.cn/question/199111)
* 修复 4.28版本引发的 UTSJSONObject 包含 number 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9447)

## alpha版

### 4.35.2024112402-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12646-4.35.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.35.2024112402-alpha）版本生成本地打包App资源。
* 优化 API uni.chooseLocation 新增请求参数payload，原样透传给uni-map-co，可用于用户鉴权 [详情](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13108>
* 修复 4.31版本引发的 vue 无法使用v-show隐藏自定义组件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13061)