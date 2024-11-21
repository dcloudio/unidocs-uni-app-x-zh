# uni-app x Android原生SDK

## 正式版

### 4.29.2024093009

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12359-4.29.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.29.2024093009）版本生成本地打包App资源。
* 修复 4.28版本引发的 vue3项目 页面组件setup情况下子组件无法通过$root.$scope获取getAppWebview的Bug [详情](https://ask.dcloud.net.cn/question/199111)
* 修复 4.28版本引发的 UTSJSONObject 包含 number 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9447)

## alpha版

### 4.34.2024112020-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12629-4.34.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.34.2024112020-alpha）版本生成本地打包App资源。
* 修复 API uni.chooseLocation input输入框点击会闪、POI显示不准确等问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12940)
* 修复 组件 video 云打包后应用static目录下视频无法播放 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12871)
* 修复 API uni.saveVideoToPhotosAlbum 云打包后保存应用static目录下的视频文件失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12867)
* 修复 API uni.shareWithSystem shareWithSystem 云打包后应用static目录下文件无法分享 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12851)
* 修复 API uni.downloadFile 部分情况下可能引起应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12869)
* 修复 API uni.createInnerAudioContext 播放倍速仅支持平台专有Double数据类型而不支持number类型的 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12862)