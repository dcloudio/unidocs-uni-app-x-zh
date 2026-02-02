# uni-app x iOS原生SDK

## 正式版

### 4.87.2025121004

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%404.87.zip)**

* 修复 API uni.request 访问某些 url 地址可能引起崩溃[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21823)
* 修复 4.76版本引发的 CSS 某些情况下部分属性可能不生效[详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23230)


**[历史版本](https://pan.baidu.com/s/1PVLzui3QRkG5brzTxSYJlg?pwd=amqt)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.65.2025051206.html)**


## alpha版

### 5.0.2026013113-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/iOS/UniAppX-iOS%405.0.zip)**

* 【重要】新增 CSS 样式隔离策略2.0，统一全平台样式隔离策略 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/style-isolation.html)
* 【重要】新增 CSS 组件支持external-class规范，用于组件通过属性方式修改子组件样式 [文档](https://doc.dcloud.net.cn/uni-app-x/css/common/style-isolation.html#external-class)
* 调整 CSS line-height 默认值为 normal。不再固定1.2 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25246)
* 新增 组件 loading [文档](https://doc.dcloud.net.cn/uni-app-x/component/loading.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=21140>
* 新增 目标语言为js时为对象字面量指定类型时不再进行字段值类型校验以便更高性能的使用type [文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#type)
* 升级 API uni.showLoading 基于loading组件重构showLoading [文档](https://doc.dcloud.net.cn/uni-app-x/api/loading.html#showloading) <https://issues.dcloud.net.cn/pages/issues/detail?id=25025>
* 新增 UniPage API 支持 querySelector/querySelectorAll 方法 [文档](https://doc.dcloud.net.cn/uni-app-x/api/unipage.html#queryselector) <https://issues.dcloud.net.cn/pages/issues/detail?id=25211>
* 调整 CSS white-space 调整靠近Web规范。App默认值调整为 keep [文档](https://doc.dcloud.net.cn/uni-app-x/css/white-space.html#hbuilderx5-0%E7%89%88%E6%9C%AC%E8%B0%83%E6%95%B4) <https://issues.dcloud.net.cn/pages/issues/detail?id=24206>
* 【重要】新增 API uni.request enableQuic 属性支持 Quic/h3 协议 [文档](https://doc.dcloud.net.cn/uni-app-x/api/request.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=24727>
* 新增 App.uvue 支持组合式 [文档](https://doc.dcloud.net.cn/uni-app-x/vue/composition-api.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=24585>

* 新增 API uni.setInnerAudioOption 支持speakerOn、obeyMuteSwitch等参数 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html#setinneraudiooption-兼容性) <https://issues.dcloud.net.cn/pages/issues/detail?id=22476>
* 新增 API uni.getBackgroundAudioManager 支持 offPlay、offPause、offStop 等取消监听相关方法 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-background-audio-manager.html#offcanplay) <https://issues.dcloud.net.cn/pages/issues/detail?id=23448>
* 升级 组件 web-view 使用 uts 标准组件模式重构 [文档](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=23174>
* 修复 CSS align-items 设置min-width后, align-items: center 不起作用 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23067)
* 新增 CSS border-radius 支持百分比 [文档](https://doc.dcloud.net.cn/uni-app-x/css/border-radius.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=25460>
* 新增 发行 云端打包支持配置应用名称国际化 [文档](https://doc.dcloud.net.cn/uni-app-x/i18n.html#manifest) <https://issues.dcloud.net.cn/pages/issues/detail?id=24944>
* 修复 CSS background 设置为 none 时可能不会设置背景透明 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23350)
* 升级 组件 rich-text 使用 uts 标准组件模式重构 [文档](https://doc.dcloud.net.cn/uni-app-x/component/rich-text.html) <https://issues.dcloud.net.cn/pages/issues/detail?id=24578>
* 新增 match-media 组件 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25783)
* 新增 API uni.createInnerAudioContext 支持 obeyMuteSwitch 控制是否遵循系统静音开关 [文档](https://doc.dcloud.net.cn/uni-app-x/api/create-inner-audio-context.html#createinneraudiocontext-%E5%85%BC%E5%AE%B9%E6%80%A7) <https://issues.dcloud.net.cn/pages/issues/detail?id=25457>
* 升级 API uni.getUniVerifyManager 更新使用的 个验SDK 为 3.1.3.0 版 [文档](https://doc.dcloud.net.cn/uni-app-x/api/get-univerify-manager.html#getuniverifymanager) <https://issues.dcloud.net.cn/pages/issues/detail?id=24273>
* 新增 发行 支持配置 uts插件 的 Bundle Identifier [文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#iosconfigjson) <https://issues.dcloud.net.cn/pages/issues/detail?id=23555>
* 修复 vue 持续渲染场景下 onReady 不触发导致渲染异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25459)
* 修复 组件 Click 事件 持续渲染场景下点击事件不响应 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25381)
* 修复 组件 scroll-view 开启下拉刷新时设置 refresher-default-style为 none 时无刷新效果 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25593)
* 修复 组件 nested-scroll 嵌套在 swiper 组件中时切换不同子滚动视图可能无法滚动 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23850)
* 修复 组件 rich-text 不支持自定义node节点（含超长链接）自动换行 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23897)
* 修复 组件 video 竖屏全屏时返回键被安全区域遮挡无法点击 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25323)
* 修复 组件 camera 退出页面时可能引起应用崩溃 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=19701)
* 修复 4.84版本引发的 API uni.showModal 参数 showCancel 默认值失效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25411)
* 修复 4.62版本引发的 API uni.setAppTheme 重启应用后无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=25244)
* 修复 API uni.downloadFile 使用 encoding 编码后的地址会引起失败 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23369)
* 修复 API uni.connectSocket 设置 header 属性值可能出现异常 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=22639)
* 修复 API uni.createPushMessage 设置 cover 属性覆盖消息无效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=21635)
* 修复 发行 设置 CFBundleName 未生效 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=23236)

**[历史版本](https://pan.baidu.com/s/130Rvlh2jdsp3aJ4YtigoJQ?pwd=xy7s)**
 
**[历史版本更新日志](https://download1.dcloud.net.cn/hbuilderx/changelog/4.63.2025042307-alpha.html)**
