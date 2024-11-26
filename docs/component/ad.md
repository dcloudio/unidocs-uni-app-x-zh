## ad

<!-- UTSCOMJSON.ad.description -->

ad组件是一种展现在页面中间的广告。它可以用于banner广告，也可以用于信息流广告。

- uni-ad的业务介绍：[详见](https://uniapp.dcloud.net.cn/uni-ad/intro.html)

上述文档是uni-app和uni-app x的通用文档，如遇到uni-app x不一致的文档，需以uni-app x文档为准。

开通广告，需在 [https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/) 管理后台开通。

开通时需要进行开发者认证和应用资质审核。

2. 获取和使用广告位id

开通uni-ad后，在[uni-ad后台](https://uniad.dcloud.net.cn/)给应用创建信息流广告位后，需要拿到广告位id（adpid），传入ad组件的属性 `adpid`中。

3. 配置广告模块

App平台在manifest中配置添加三方广告SDK。具体配置可参考[文档](../collocation/manifest-modules.md#uni-ad)。

打正式包或自定义基座后可生效。标准基座包含的是测试广告位，无法为你产生收益。

<!-- UTSCOMJSON.ad.compatibility -->

<!-- UTSCOMJSON.ad.attribute -->

<!-- UTSCOMJSON.ad.event -->

<!-- UTSCOMJSON.ad.component_type -->

<!-- UTSCOMJSON.ad.children -->

## Tips

+ uni-app x 标准基座信息流广告测试广告位id为`1111111111`。正式开发需配置自己的广告位id，并且打包自定义基座后生效。
+ `<ad>` 组件测试广告位是上图下文，uni-ad后台申请的广告位默认左图右文。
+ 信息流广告不需要设置`height`属性，广告渲染成功之后会自动撑开。

<!-- UTSCOMJSON.ad.example -->

<!-- UTSCOMJSON.ad.reference -->

