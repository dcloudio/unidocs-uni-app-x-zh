# uni-app x Android离线打包SDK

## 正式版

### 4.23.2024070804

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android-uni-app-x-SDK@11973-4.23.zip)**

* 更新uni-app离线打包支持，需使用HBuilderX（4.22.2024062415-alpha）版本生成本地打包App资源。
* 新增 uni_modules 前端 easycom 组件支持加密付费销售 [详情](https://uniapp.dcloud.net.cn/plugin/publish.html#components-pay)
* 新增 theme.json 用于pages.json中颜色主题变量定义，处理暗黑模式的pages.json兼容 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/themejson.html)
* 新增 onError 应用生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html)
* 新增 switch 组件属性 backgroundColor/activeBackgroundColor/foreColor/activeForeColor [详情](https://doc.dcloud.net.cn/uni-app-x/component/switch.html)
* 新增 slider 组件属性 activeBackgroundColor/foreColor/valueColor [详情](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
* 新增 radio 组件属性 foreColor 替代 iconColor/color [详情](https://doc.dcloud.net.cn/uni-app-x/component/radio-group.html)
* 新增 checkbox 组件属性 foreColor 替代 iconColor/color [详情](https://doc.dcloud.net.cn/uni-app-x/component/checkbox-group.html)
* 新增 API uni.setTabBarStyle/pages.json 支持传递 borderColor 设定自定义边框颜色，优先级高于 borderStyle [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
* 新增 API $setPageStyle 支持更多属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-current-pages.html#setpagestyle)
* 调整 vue框架 validateProp 方法, required prop 存在 default value 时不告警 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1600)
* 新增 manifest 设置 url scheme，可从外部打开App [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest.html#urlscheme)
* 新增 API uni.setAppTheme 设置应用主题；uni.onAppThemeChange 监听应用主题变化；uni.onOsThemeChange 监听系统主题变化 [详情](https://doc.dcloud.net.cn/uni-app-x/api/theme.html)
* 新增 API uni.getSystemInfo、uni.getAppBaseInfo 返回数据支持 `appTheme` 属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html)
* 新增 API uni.getDeviceInfo 返回数据支持os、rom相关属性 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html)
* 新增 API uni.chooseVideo 拍摄视频或从手机相册中选视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/choose-video.html)
* 新增 API uni.saveVideoToPhotosAlbum 保存视频到相册 [详情](https://doc.dcloud.net.cn/uni-app-x/api/save-video-to-photos-album.html)
* 新增 API uni.getProvider 成功回调参数支持 providers [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-provider.html)
* 新增 uniCloud.chooseAndUploadFile 选择视频并上传 [详情](https://doc.dcloud.net.cn/uni-app-x/api/unicloud/storage.html#chooseanduploadfile)
* 调整 API uni.getDeviceInfo 返回数据中的 devicePixelRatio 属性类型为 number [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC)
* 修复 部分内置组件事件触发缺少target属性的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1932)
* 修复 组件 textarea 设置 flex 为 1 时高度异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2045)
* 修复 CSS border 在某些情况下渲染导常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1701)
* 修复 CSS position 设置为 fixed 时某些情况下位置不对的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1681)
* 修复 CSS flex-direction 设置为 row，flex-wrap 为 wrap 且设置 min-height 时可能高度计算不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1528)
* 新增 `uni-app x 原生SDK`，可用于原生App集成和离线打包 [详情](https://doc.dcloud.net.cn/uni-app-x/native/)
* 新增 pages.json 配置页面动画属性 animationType [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html)
* 新增 API uni.getImageInfo 获取图片信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-image-info.html)
* 新增 API uni.compressImage 压缩图片 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-image.html)
* 新增 API uni.getVideoInfo 获取视频信息 [详情](https://doc.dcloud.net.cn/uni-app-x/api/get-video-info.html)
* 新增 API uni.compressVideo 压缩视频 [详情](https://doc.dcloud.net.cn/uni-app-x/api/compress-video.html)
* 新增 API uni.navigateTo/uni.navigateBack 参数 animationType [详情](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#navigateto)
* 新增 组件 navigator 参数 animationType [详情](https://doc.dcloud.net.cn/uni-app-x/component/navigator.html)
* 优化 组件 slider 在滚动容器中的行为 [详情](https://doc.dcloud.net.cn/uni-app-x/component/slider.html)
* 调整 input/textarea 组件同时设置 modelValue 和 value 时，modelValue 优先级更高 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2236)
* 调整 系统底栏背景色与页面 backgroundColorContent 颜色一致 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-tips)
* 更新 一键登录使用的个推核心组件SDK为 3.2.13.0 版，个验SDK为 3.1.6.3 版，解决与 uni-push 一起使用存在冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1749)
* 修复 响应式API可能存在内存泄漏的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2543)
* 修复 响应式数组调用 unshift 方法不触发响应式变更的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2151)
* 修复 首次安装可能重复打开首页的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2231)
* 修复 小窗口模式应用导航栏高度不正确的问题Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2117)
* 修复 异步创建组件时可能会崩溃的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2133)
* 修复 组件内发生异常可能不会输出到控制台的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=880)
* 修复 tabBar 同时设置 borderStyle、backgroundColor 为深色时会显示一条白线的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2116)
* 修复 组件 list-view 设置 scroll-top 属性值域与 upper-threshold 属性值域相同时，部分安卓设备可能不触发 scrolltoupper 事件的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2847)
* 修复 组件 list-item 子元素使用 v-show 控制是否显示时可能出现异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1857)
* 修复 4.11版引出的 组件 list-view 设置 scroll-top 属性滚动位置与预期不符的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1922)
* 修复 组件 switch 在 list-view 组件中显示状态可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2482)
* 修复 组件 scroll-view 设置 scroll-top 属性不触发 scroll 事件的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2249)
* 修复 组件 swiper 竖向滑动动画过快的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1550)
* 修复 组件 swiper 嵌套时在部分场景可能滑动冲突Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1069)
* 修复 组件 swiper 部分场景事件触发顺序可能错乱的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1944)
* 修复 组件 text 设置宽高和边框时 text-align 居中效果不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1383)
* 修复 组件 input、textarea 的 keyboardheightchange、focus 事件某些情况下返回键盘高度为 0 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1362)
* 修复 组件 input、textarea 在 list-view 中获取焦点可能被弹出软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1846)
* 修复 组件 video 未设置 direction 属性时进入全屏视频方向可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2042)
* 修复 组件 video 通过 uni.createVideoContext 调用 stop 后重新播放不显示视频封面图的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2314)
* 修复 组件 web-view 在滚动容器中可能出现滑动冲突的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1488)
* 修复 组件 web-view 设置 android-layer-type 属性无效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2088)
* 修复 组件 web-view 中输入框获取焦点后可能被软键盘遮挡的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1771)
* 修复 API uni.showToast 同时弹出多个提示框显示异常的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1663)
* 修复 API uni.getSystemInfo 返回 osTheme 字段值为 null 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1688)
* 修复 CSS 同时设置 display 和 visibility 可能出现其中一个属性不生效的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1923)
* 修复 uniIdRouter 在首页是需要登录的页面时未自动跳转到登录页面的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2027)
* 修复 VUE ref、reactive、readonly、shallowRef、shallowReactive、shallowReadonly 使用泛型+对象/数组字面量编译报错的Bug [详情](http://git.dcloud.io/uni-app-next/uts/commit/5f9278a020c435a35b0a782e2d56fcc9dbd78f08)
* 修复 VUE v-for 不支持循环 UTSJSONObject 的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1839)
* 修复 VUE inject 不支持泛型的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=1787)
* 修复 离线打包 number 类型判断相等可能与云打包结果不一致的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2422)

## alpha版

### 4.23.2024070309-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android-uni-app-x-SDK@11973-4.23.zip)**

* 更新uni-app离线打包支持，需使用HBuilderX（4.22.2024062415-alpha）版本生成本地打包App资源。
* 新增 API uni.setTabBarStyle/pages.json 支持传递 borderColor 设定自定义边框颜色，优先级高于 borderStyle [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
* 调整 API uni.setTabBarStyle/pages.json 中 borderStyle 只支持 black/white [详情](https://doc.dcloud.net.cn/uni-app-x/api/set-tabbar.html#settabbarstyle)
* 修复 组件 list-view 设置 scroll-top 属性值域与 upper-threshold 属性值域相同时，部分安卓设备可能不触发 scrolltoupper 事件的Bug[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2847)