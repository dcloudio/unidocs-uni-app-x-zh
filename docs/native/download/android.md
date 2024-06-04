# uni-app x Android离线打包SDK

## alpha版

### 4.18.2024053127

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android-uni-app-x-SDK@11831.zip)**

* 更新uni-app离线打包支持，需使用HBuilderX（4.18.2024053127）版本生成本地打包App资源。
* 新增 radio 组件属性 foregroundColor 替代 iconColor/color[详情](https://doc.dcloud.net.cn/uni-app-x/component/radio-group.html)
* 新增 checkbox 组件属性 foregroundColor 替代 iconColor/color[详情](https://doc.dcloud.net.cn/uni-app-x/component/checkbox-group.html)
* 新增 switch 组件属性 backgroundColor/activeBackgroundColor/foregroundColor/activeForegroundColor[详情](https://doc.dcloud.net.cn/uni-app-x/component/switch.html)
* 新增 slider 组件属性 activeBackgroundColor/foregroundColor/valueColor[详情](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
* 新增 manifest 设置 url scheme，可从外部打开App [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#urlscheme)
* 新增 pages.json tabBar的midButton功能 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pages-tabbar)
* 新增 API uni.chooseVideo 支持拍摄视频或从手机相册中选视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html)
* 新增 API uni.saveVideoToPhotosAlbum 支持保存视频到相册 [详情](https://doc.dcloud.net.cn/uni-app-x/api/save-video-to-photos-album.html)
* 新增 API uni.getProvider 成功回调参数支持 providers [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-provider.html)
* 新增 API uni.getDeviceInfo 返回数据支持os、rom相关属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html)
* 新增 API uni.getSystemInfo、uni.getAppBaseInfo 返回数据支持 `appTheme` 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html)
* 修复 部分内置组件事件触发缺少target属性的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1932)
* 修复 组件 textarea 设置 flex 为 1 时高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2045)
* 新增 API uni.getImageInfo 支持获取图片信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-image-info.html)
* 新增 API uni.compressImage 支持压缩图片 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-image.html)
* 新增 API uni.getVideoInfo 支持获取视频信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-video-info.html)
* 新增 API uni.compressVideo 支持压缩视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-video.html)
* 修复 小窗口模式应用导航栏高度不正确的问题Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2117)
* 修复 异步创建组件时可能会崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2133)
* 修复 组件内发生异常可能不会输出到控制台的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=880)
* 修复 组件 swiper 竖向滑动动画过快的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1550)
* 修复 组件 swiper 嵌套时在部分场景可能滑动冲突Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1069)
* 修复 组件 swiper 部分场景事件触发顺序可能错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1944)
* 修复 组件 video 未设置 direction 属性时进入全屏视频方向可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2042)
* 修复 组件 web-view 在滚动容器中可能出现滑动冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1488)
* 修复 组件 web-view 设置 android-layer-type 属性无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2088)
* 修复 组件 web-view 中输入框获取焦点后可能被软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1771)
* 修复 API uni.showToast 同时弹出多个提示框显示异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1663)
* 修复 uniIdRouter 在首页是需要登录的页面时未自动跳转到登录页面的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2027)
* 修复 VUE ref、reactive、readonly、shallowRef、shallowReactive、shallowReadonly 使用泛型+对象/数组字面量编译报错的Bug [详情](http://git.dcloud.io/uni-app-next/uts/commit/5f9278a020c435a35b0a782e2d56fcc9dbd78f08)
* 修复 VUE v-for 不支持循环 UTSJSONObject 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1839)
* 修复 VUE inject 不支持泛型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1787)
* 更新 一键登录使用的个推核心组件SDK为 3.2.13.0 版，个验SDK为 3.1.6.3 版，解决与 uni-push 一起使用存在冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1749)