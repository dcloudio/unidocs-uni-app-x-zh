# uni-app x Android原生SDK

## 正式版

### 4.44.2024123110

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12890-4.44.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.44.2024123110）版本生成本地打包App资源。
* 新增 DOM API UniElement getBoundingClientRectAsync 异步获取元素位置信息 [文档](https://doc.dcloud.net.cn/uni-app-x/dom/unielement.html#getBoundingClientRectAsync) <https://issues.dcloud.net.cn/pages/issues/detail?id=12092>
* 新增 API uni.openDialogPage triggerParentHide 参数控制是否触发父页面 onHide 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html#opendialogpage) <https://issues.dcloud.net.cn/pages/issues/detail?id=13636>
* 新增 API uni.chooseLocation 打开时触发当前页面 onHide 生命周期，关闭时触发当前页面 onShow 生命周期 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-location.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13836>
* 修复 编译器 返回值类型推断不支持函数类型 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13046)
* 新增 组件 waterflow 瀑布流 [文档](https://doc.dcloud.net.cn/uni-app-x/component/waterflow.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11016>
* 新增 组件 input placeholderStyle支持font-family、font-style、text-align [文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13052>
* 新增 API uni.getBackgroundAudioManager 背景音频播放 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=12144>
* 新增 API uni.openLocation 打开当前位置 [文档](https://doc.dcloud.net.cn/uni-app-x/api/open-location.html)
* 新增 API uni.getUniverifyManager 支持自定义一键登录页面 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11020>
* 新增 API uni.getUniverifyManager 调整参数类名以及返回值类名 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13772>
* 新增 API uni.closeDialogPage 调整 animationType 默认值为 auto [文档](https://doc.dcloud.net.cn/uni-app-x/api/dialog-page.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=13942>
* 修复 组件 canvas 动画过程中圆弧闪动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13487)
* 修复 CSS background-color 十六进制颜色语法与web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13371)
* 新增 pages.json 支持 androidThreeButtonNavigationTranslucent 配置页面内容可渲染到系统导航栏的虚拟按键区域 [文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=11021>
* 新增 API uni.chooseImage uni.saveImageToPhotosAlbum uni.getImageInfo uni.compressImage uni.chooseVideo uni.saveVideoToPhotosAlbum uni.getVideoInfo 支持内容URI地址 [文档](https://doc.dcloud.net.cn/uni-app-x/api/choose-image.html)
* 修复 vue 使用defineModel嵌套绑定v-model编译报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11505)
* 修复 vue ref变量类型推导优化 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12042)
* 修复 组件 list-view 自定义刷新样式显示异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13511)
* 修复 组件 textarea 部分情况下input事件不触发 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=9081)
* 修复 组件 canvas new Image没有触发onload事件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12336)
* 修复 4.33版本引发的 API getCurrentPages 部分场景 getPageStyle 返回的 navigationStyle 值域不准 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13133)
* 修复 API dialogPage animationType设置zoom-fade-out不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12655)
* 修复 API dialogPage navigationBarTextStyle属性不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13281)
* 修复 API showToast 被 dialogPage 遮挡 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12993)
* 修复 API uni.request 指定泛型为string，接口返回404时解析失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13054)
* 修复 API uni.getUniverifyManager 更新个验SDK解决合规风险问题 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14276)
* 修复 云对象返回的errSubject无法在客户端获取 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13228)
* 修复 CSS font-family 自定义字体、内置字体设置font-style、font-weight属性不生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13100)
* 新增 UTSJSONObject 支持点号表示法访问属性。注意返回值类型为any [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#_1-%E6%93%8D%E4%BD%9C%E7%AC%A6) <https://issues.dcloud.net.cn/pages/issues/detail?id=11072>
* 修复 vue2项目下导出的class实例被vue响应式后调用方法报错 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13685&ask_id=202006)
* 新增 优化number类型的实现 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/number.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=7119>
* 新增 JSON.Parse 新增ignoreError参数，用于隐藏解析报错 [文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/json.html#parse) <https://issues.dcloud.net.cn/pages/issues/detail?id=13219>
* 修复 JSON.parse<string> 解析失败时返回数据应该是输入参数 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13274)
* 修复 4.25版本引发的 UTSJSONObject 包含 自定义type 类型数据时调用 toJSONObject 序列化可能异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=13110)
* 修复 数组every、some、filter、find、findIndex返回值类型推断不正确 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=12985)
* 修复 split 函数返回结果与web不一致 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=10884)
* 修复 java混编模式下，不能使用 console.log [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=11532)
* 修复 uni-app项目 uts插件中修改的代码真机运行到Android14及以上系统设备未生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=14275)

## alpha版

### 4.43.2024122419-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android/Android-uni-app-x-SDK@12863-4.43.zip)**

* 更新 uni-app x 原生SDK打包支持，需使用HBuilderX（4.43.2024122419-alpha）版本生成本地打包App资源。