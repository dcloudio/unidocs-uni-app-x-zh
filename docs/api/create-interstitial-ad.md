## uni.createInterstitialAd(option) @createinterstitialad

<!-- UTSAPIJSON.createInterstitialAd.description -->

插屏是一种弹出在屏幕中间的、带有关闭按钮的广告。大部分插屏广告是半屏的，个别广告会全屏。这取决于广告聚合渠道的设置。

- uni-ad的业务介绍：[详见](https://uniapp.dcloud.net.cn/uni-ad/intro.html)

上述文档是uni-app和uni-app x的通用文档，如遇到uni-app x不一致的文档，需以uni-app x文档为准。

开通插屏广告，需在 [https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/) 管理后台开通。

开通时需要进行开发者认证和应用资质审核。

2. 获取和使用广告位id

开通uni-ad后，在[uni-ad后台](https://uniad.dcloud.net.cn/)给应用创建插屏广告位后，需要拿到广告位id（adpid），传入下面的api `createInterstitialAd`中。

3. 配置广告模块

App平台在manifest中配置添加三方广告SDK。具体配置可参考[文档](../collocation/manifest-modules.md#uni-ad)。

打正式包或自定义基座后可生效。标准基座包含的是测试广告位，无法为你产生收益。


<!-- UTSAPIJSON.createInterstitialAd.compatibility -->

<!-- UTSAPIJSON.createInterstitialAd.param -->

<!-- UTSAPIJSON.createInterstitialAd.returnValue -->

## Tips

+ uni-app x 标准基座插屏广告测试广告位id为`1111111113`。正式开发需配置自己的广告位id，并且打包自定义基座后生效。
+ 插屏广告目前仅支持API形式，暂不支持组件形式。

<!-- UTSAPIJSON.createInterstitialAd.example -->

<!-- UTSAPIJSON.createInterstitialAd.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
