# uni-app x Android原生SDK

## 正式版

### 4.24.2024072208

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12048-4.24.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.24.2024072208）版本生成本地打包App资源。

## alpha版

### 4.23.2024070309-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android-uni-app-x-SDK@11973-4.23.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.23.2024070309-alpha）版本生成本地打包App资源。
* 新增 API uni.setTabBarStyle/pages.json 支持传递 borderColor 设定自定义边框颜色，优先级高于 borderStyle [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
* 调整 API uni.setTabBarStyle/pages.json 中 borderStyle 只支持 black/white [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
* 修复 组件 list-view 设置 scroll-top 属性值域与 upper-threshold 属性值域相同时，部分安卓设备可能不触发 scrolltoupper 事件的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2847)