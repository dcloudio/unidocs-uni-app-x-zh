# uni-app x Android原生SDK

## 说明

- 从HBuilderX 4.81-alpha版开始，为了适配Kotlin版本，对gradle插件做了升级，升级SDK时需要替换原有插件。插件配置及说明参考[文档](../use/android.md#gradleplugin)。

## 正式版

### 4.87.2025121004

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@14196-4.87.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.87.2025121004）版本生成本地打包App资源。

**[历史版本](https://pan.baidu.com/s/1M6XHzokpQYJqfICTzjuQ_g?pwd=93yh)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.87.2025121004.html)**

## alpha版

### 5.02.2026030616-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@14585-5.02.zip)**

* 新增 组件 page-container 组件 [文档](https://doc.dcloud.net.cn/uni-app-x/component/page-container.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26320>
* 修复 页面存在多个 onBackPress 任一返回 true 时拦截返回操作失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26833)
* 新增 UniPage API takeSnapshot 对页面进行截图 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=26398>
* 修复 样式隔离2.0时自定义组件透传hover-class不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26676)
* 修复 5.0版本引发的 组件 web-view 组件进度条无法关闭 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26391)
* 修复 API uni.createCanvasContextAsync drawImage 可能出现异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26145)
* 修复 CSS border-radius 值为百分比时阴影效果异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26783)
* 修复 4.81版本引发的 DOM API UniElement animate 方法触发 margin、padding 动画仅第一次生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26744)
* 修复 DOM API CSSStyleDeclaration 获取部分通过 class 设置的样式返回空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=26352)
* 修复 字符串中出现`/f`时编译器报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25844)

**[历史版本](https://pan.baidu.com/s/1OXvFjfGW6zDAyzTZGpY7hQ?pwd=aa2c)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/5.02.2026030616-alpha.html)**
