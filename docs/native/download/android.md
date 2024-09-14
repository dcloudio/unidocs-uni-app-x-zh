# uni-app x Android原生SDK

## 正式版

### 4.24.2024072208

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12048-4.24.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.24.2024072208）版本生成本地打包App资源。

## alpha版

### 4.27.2024091308-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12281-4.27.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.27.2024091308-alpha）版本生成本地打包App资源。
* 新增 发行 云端打包支持配置 packagingOptions [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#distribute-android) <https://issues.dcloud.net.cn/pages/issues/detail?id=8067>
* 修复 组件 input 部分情况下，input在ScrollView中键盘弹起时，不会自动上推页面 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5364)
* 修复 4.25版本引发的 组件 video 不指定宽高时全屏后可能宽高不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8363)
* 修复 uni-AD 上架小米应用市场提示`未经用户同意，存在收集SD卡数据的行为` [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7896)
* 修复 API push 使用的个推消息推送 SDK 默认获取应用列表、位置相关信息可能导致无法通过合规检测 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8054)
* 修复 API uni.getImageInfo 云端打包后获取图片信息可能失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=7688)
* 修复 API uni.getVideoInfo 云端打包后获取视频信息可能失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8332)
* 修复 4.26版本引发的 API uni.getWindowInfo 在非全面屏手机上screenHeight、windowHeight不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8179)
* 修复 4.26版本引发的 运行调试 打开二级页修改保存后应用重启直达失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8177)
* 新增 支持通过装饰器(注解)的方式定义回调函数是否一直存活 [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#keepalive) <https://issues.dcloud.net.cn/pages/issues/detail?id=8436>
* 修复 函数返回的UTSJSONObject属性下的数据对象为空 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=6735)
* 修复 UTSJSONObject 检索内部属性耗时过多 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5147)
* 修复 无法声明 RegExpExecArray 类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=5529)
* 修复 4.26版本引发的 uni-app项目中 函数 默认参数与可选参数不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8199)
* 修复 4.26版本引发的 JSON.stringify 可能将 UTSJSONObject 中绝对值小于1的数据值转换为0 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=8365)
