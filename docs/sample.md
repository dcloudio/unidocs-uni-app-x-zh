# 源码和示例

官方有5个开源项目比较重要
- [hello uts](https://gitcode.net/dcloud/hello-uts)：uts的语法和内置对象的使用示例
- [hello uvue](https://gitcode.net/dcloud/hello-uvue)：vue语法的使用示例
- [hello uni-app x](https://gitcode.net/dcloud/hello-uni-app-x)：uni内置组件和API的使用示例，也包括一些常见但复杂的模板示例
- [uni-api](https://gitcode.net/dcloud/uni-api)：uni api的实现源码。大量uts API插件源码，适合uts插件作者学习
- [uni-component](https://gitcode.net/dcloud/uni-component)：内置组件的实现源码。uts组件插件源码，适合uts插件作者学习

这些开源项目的master分支对应着HBuilderX最新正式版，alpha分支对应着最新alpha版。

关于[uni-api](https://gitcode.net/dcloud/uni-api)和[uni-component](https://gitcode.net/dcloud/uni-component)，再强调说明下：

uni-app x的组件和API，大多是uts语言开发的。和开发者做的uts插件是一样的。\
它们都符合[exi api](https://uniapp.dcloud.net.cn/api/extapi.html)规范，也就是说，把这些uni_modules复制到工程下，会替换内置API和组件的实现。

所以如需修改uni-app x的组件和API，比如修复一些bug或添加一些功能，可以通过这种方式来实现。

如果这些改动有助于其他开发者，欢迎给开源项目回提pr。

除此之外，插件市场还有众多插件，[详见](https://ext.dcloud.net.cn/?uni-appx=1)

目前插件市场已经有近千款适配uni-app x的插件，不管是uts还是uvue，已有大量开发者在使用。

上线的App案例：
- 鲨推AI：[Android](https://sj.qq.com/appdetail/com.shatui.ai)
- 小溪相册（智能硬件）：[Android](https://app.mi.com/details?id=com.yanxi.xiaoxizaijia)、[iOS](https://apps.apple.com/vn/app/%E5%B0%8F%E6%BA%AA%E7%9B%B8%E5%86%8C/id6593673873)
- 易瓜优选：[Android](https://sj.qq.com/appdetail/huaban.yigua)
- 槟购跨境：[Android](https://sj.qq.com/appdetail/com.bingo.bg)、[iOS](https://apps.apple.com/hk/app/%E6%A7%9F%E8%B4%AD%E8%B7%A8%E5%A2%83/id1463306856)
- 金股讯：[Android](https://sj.qq.com/appdetail/com.jinguxun.app)、[iOS](https://apps.apple.com/cn/app/%E9%87%91%E8%82%A1%E8%AE%AF/id1615272585)
- 时一助手：[App端](http://app.yuteng.vip/sy/index.html)
- 佰销宝：[Android](https://app.mi.com/details?id=com.dianxiaotongbao)
- 智能PPT生成器：[Android](https://app.mi.com/details?id=com.pptgen.Intelligent)
- 灵犀一点（智能硬件）：[Android](https://sj.qq.com/appdetail/uni.qinhua)、[iOS](https://apps.apple.com/cn/app/%E7%81%B5%E7%8A%80%E4%B8%80%E7%82%B9/id1661770402)
- 云旅迹：[Android](https://sj.qq.com/appdetail/com.yunlvji.trip)
- 176乐园[Android](https://sj.qq.com/appdetail/uni.UNI1A7CD2D)

插件市场的云端一体项目模板，这些项目的客户端和服务器的源码都是现成的，可直接购买：
- 快亿商城：[App端插件](https://ext.dcloud.net.cn/plugin?id=15458)、[管理端插件](https://ext.dcloud.net.cn/plugin?id=15568)
- [ai(chatGPT)聊天对话，uni-app x(uvue+uts)和uniCloud云端一体完整项目模板](https://ext.dcloud.net.cn/plugin?id=17075)