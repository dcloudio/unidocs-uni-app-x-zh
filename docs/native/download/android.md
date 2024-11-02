# uni-app x Android原生SDK

## 正式版

### 4.29.2024093009

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12359-4.29.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.29.2024093009）版本生成本地打包App资源。
* 修复 4.28版本引发的 vue3项目 页面组件setup情况下子组件无法通过$root.$scope获取getAppWebview的Bug [详情](https://ask.dcloud.net.cn/question/199111)
* 修复 4.28版本引发的 UTSJSONObject 包含 number 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9447)

## alpha版

### 4.32.2024110103-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12486-4.32.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.32.2024110103-alpha）版本生成本地打包App资源。
* 修复 4.31版本引发的 编译器 pages.json以及外链引入的css/scss/less文件修改后热更新不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11247)
* 修复 4.31版本引发的 pages.json 隐藏tabbar后可能渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11269)
* 修复 组件 触发 @click 事件没有音效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11066)
* 修复 4.31版本引发的 CSS border 某些情况下border不显示 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11225)
* 修复 4.31版本引发的 CSS box-shadow 阴影在某些情况下可能渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11651)
* 修复 4.31版本引发的 number除法可能会触发 java.lang.ArithmeticException: divide by zero [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11331)
* 修复 4.31版本引发的 Math.abs 可能不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11332)
