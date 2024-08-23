# uni-app x Android原生SDK

## 正式版

### 4.24.2024072208

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12048-4.24.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.24.2024072208）版本生成本地打包App资源。

## alpha版

### 4.26.2024082213-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12222-4.26.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.26.2024082213-alpha）版本生成本地打包App资源。
* 新增 组件 canvas 支持绘制自定义字体 [文档](https://doc.dcloud.net.cn/uni-app-x/api/canvasrenderingcontext2d.html#custonfont) <https://issues.dcloud.net.cn/pages/issues/detail?id=5359>
* 调整 API uni.getWindowInfo 返回的 screenTop 属性废弃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7095)
* 修复 4.25版本引发的 编译器 当代码中定义一个包含大量数据的UTSJSONObject数组字面量时，编译报 method too large [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6906)
* 修复 4.25版本引发的 API uni.getLocation 导入uni-getLocation-tencent插件云打包报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6890)
* 修复 4.25版本引发的 API uni.getWindowInfo 返回的 screenHeight 值可能不是设备屏幕高度 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7058)
* 修复 4.14版本引发的 CSS overflow 多级子 view 全部设置 overflow 为 visible 后点击 view 可能引起崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6957)