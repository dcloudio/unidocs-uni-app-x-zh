# uni-app x iOS原生SDK

## 正式版

### 4.44.2024123110

[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.44.zip)

* 新增 DOM API UniElement getBoundingClientRectAsync 异步获取元素位置信息 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#getBoundingClientRectAsync) <https://issues.dcloud.net.cn/pages/issues/detail?id=12092>
* 新增 API uni.openDialogPage triggerParentHide 参数控制是否触发父页面 onHide 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html#opendialogpage) <https://issues.dcloud.net.cn/pages/issues/detail?id=13636>
* 新增 API uni.chooseLocation 打开时触发当前页面 onHide 生命周期，关闭时触发当前页面 onShow 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13836>
* 修复 编译器 返回值类型推断不支持函数类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13046)
* 修复 dialogPage 实例上 getElementById 等部分方法不支持的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14047)
* 新增 组件 waterflow 瀑布流 [文档](https://doc.dcloud.net.cn/uni-app-x/component/waterflow.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11016>
* 新增 组件 input placeholderStyle支持font-family、font-style、text-align [文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13052>
* 新增 API uni.getBackgroundAudioManager 背景音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12144>
* 新增 API uni.openLocation 打开当前位置 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-location.html)
* 新增 API uni.getUniverifyManager 支持自定义一键登录页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11020>
* 新增 API uni.getUniverifyManager 调整参数类名以及返回值类名 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13772>
* 新增 API uni.closeDialogPage 调整 animationType 默认值为 auto [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13942>
* 修复 组件 canvas 动画过程中圆弧闪动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13487)
* 修复 CSS background-color 十六进制颜色语法与web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13371)
* 新增 API uni.createInnerAudioContext 支持音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12829>
* 新增 API uni.chooseLocation 支持 uts 插件环境调用 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13780>
* 修复 组件 scroll-view 内容高度小于容器高度时无法触发自定义下拉刷新 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13747)
* 修复 组件 input iOS 输入框长按粘贴与touch事件冲突，导致input失焦，键盘被收起 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12621)
* 修复 组件 slider 点击时事件触发错误的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13783)
* 修复 组件 canvas Image支持width、height属性 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12687)
* 修复 组件 canvas 通过style.setProperty方法动态修改尺寸导致渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12904)
* 修复 组件 canvas 反复退出进入应用偶发闪退 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13093)
* 修复 API uni.$emit 不支持参数为UTSJSONObject [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12615)
* 修复 API navigator iOS页面边界不应该带有阴影效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11585)
* 修复 API dialogPage 关闭后，状态栏颜色无法更新为当前页面的设置 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13765)
* 修复 API uni.createSelectorQuery 在视图滚动期间 callback 回调不及时 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13368)
* 修复 API uni.getSystemInfoSync 在iphone 16 pro max 设备获取的屏幕宽、高可能不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11898)
* 修复 CSS transform 修改transform值页面闪动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12850)
* 更新 云端打包环境 XCode 为 16.1 版、iOS SDK 为 18.1 版
* 新增 支持迭代协议 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/iterable.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=6511>
* 新增 支持import type的用法 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/type-compatibility.html#import-type) <https://issues.dcloud.net.cn/pages/issues/detail?id=12941>
* 新增 UTSJSONObject 支持点号表示法访问属性。注意返回值类型为any [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#_1-%E6%93%8D%E4%BD%9C%E7%AC%A6) <https://issues.dcloud.net.cn/pages/issues/detail?id=11072>
* 修复 vue2项目下导出的class实例被vue响应式后调用方法报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13685&ask_id=202006)


## alpha版

### 4.43.2024122419-alpha

[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.43.zip)

无



