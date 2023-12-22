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