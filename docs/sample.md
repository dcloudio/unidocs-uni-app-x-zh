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
- 鲨推AI（工具）：[Android](https://sj.qq.com/appdetail/com.shatui.ai)
- 智能PPT生成器（工具）：[Android](https://app.mi.com/details?id=com.pptgen.Intelligent)
- 格式作坊（工具）：[Android](https://sj.qq.com/appdetail/com.gszf.app)、[iOS](https://apps.apple.com/cn/app/%E6%A0%BC%E5%BC%8F%E4%BD%9C%E5%9D%8A-%E6%A0%BC%E5%BC%8F%E8%BD%AC%E6%8D%A2%E5%99%A8/id6472780051)
- 金股讯（金融）：[Android](https://sj.qq.com/appdetail/com.jinguxun.app)、[iOS](https://apps.apple.com/cn/app/%E9%87%91%E8%82%A1%E8%AE%AF/id1615272585)
- 应安联（政务）：[Android](https://sj.qq.com/appdetail/com.aky.yal)、[iOS](https://apps.apple.com/cn/app/%E5%BA%94%E5%AE%89%E8%81%94/id1566809671)
- 智慧强安（政务）：[Android](https://sj.qq.com/appdetail/com.demlution.aatianfangyetan)、[iOS](https://apps.apple.com/cn/app/%E6%99%BA%E6%85%A7%E5%BC%BA%E5%AE%89/id6476082028)
- 脱单吧：[Android](https://sj.qq.com/appdetail/com.liewu.desingle)、[iOS](https://apps.apple.com/cn/app/%E8%84%B1%E5%8D%95%E5%90%A7/id1560465075)
- 萤科物联（智能硬件）：[Android](https://sj.qq.com/appdetail/iot.ykwl.vip)、[iOS](https://apps.apple.com/cn/app/%E8%90%A4%E7%A7%91%E7%89%A9%E8%81%94/id6741841541)
- 小溪相册（智能硬件）：[Android](https://app.mi.com/details?id=com.yanxi.xiaoxizaijia)、[iOS](https://apps.apple.com/vn/app/%E5%B0%8F%E6%BA%AA%E7%9B%B8%E5%86%8C/id6593673873)
- 灵犀一点（智能硬件）：[Android](https://sj.qq.com/appdetail/uni.qinhua)、[iOS](https://apps.apple.com/cn/app/%E7%81%B5%E7%8A%80%E4%B8%80%E7%82%B9/id1661770402)
- 易瓜优选（电商）：[Android](https://sj.qq.com/appdetail/huaban.yigua)
- 槟购跨境（电商）：[Android](https://sj.qq.com/appdetail/com.bingo.bg)、[iOS](https://apps.apple.com/hk/app/%E6%A7%9F%E8%B4%AD%E8%B7%A8%E5%A2%83/id1463306856)
- 时一助手（工具）：[App端](http://app.yuteng.vip/sy/index.html)
- 176乐园（网赚）：[Android](https://sj.qq.com/appdetail/uni.UNI1A7CD2D)
- 佰销宝：[Android](https://app.mi.com/details?id=com.dianxiaotongbao)
- 云旅迹：[Android](https://sj.qq.com/appdetail/com.yunlvji.trip)
- uyultax（维吾尔族多语言应用）：[Android](https://sj.qq.com/appdetail/com.android.uyultax)、

插件市场的云端一体项目模板，这些项目的客户端和服务器的源码都是现成的，可直接购买：
- 快亿商城：[App端插件](https://ext.dcloud.net.cn/plugin?id=15458)、[管理端插件](https://ext.dcloud.net.cn/plugin?id=15568)
- [ai(chatGPT)聊天对话，uni-app x(uvue+uts)和uniCloud云端一体完整项目模板](https://ext.dcloud.net.cn/plugin?id=17075)