## uni.createRewardedVideoAd(option) @createrewardedvideoad

<!-- UTSAPIJSON.createRewardedVideoAd.description -->

激励视频，顾名思义，播放一段视频广告，手机用户看完广告后需向其发放奖励。

激励视频是一种播放时间较长、CPM单价较高的广告类型，是广告变现中的优质工具。

1. 开通激励视频，需在 [https://uniad.dcloud.net.cn/](https://uniad.dcloud.net.cn/) 管理后台开通。

uni-ad是DCloud提供的聚合广告平台，激励视频的广告来源主要来自于聚合的优量汇、穿山甲、快手、百度、sigmob，通过竞价模型优先展示出价高的广告。

开通时需要进行开发者认证和应用资质审核。

- uni-ad的业务介绍：[详见](https://uniapp.dcloud.net.cn/uni-ad/intro.html)
- 激励视频的业务：[详见](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html)

上述文档是uni-app和uni-app x的通用文档，如遇到uni-app x不一致的文档，需以uni-app x文档为准。

2. 获取和使用广告位id

开通uni-ad后，在[uni-ad后台](https://uniad.dcloud.net.cn/)给App创建激励视频广告位后，需要拿到广告位id（adpid），传入下面的api `createRewardedVideoAd `中。

3. 配置广告模块

App平台在manifest中配置添加三方广告SDK。具体配置可参考[文档](../collocation/manifest-modules.md#uni-ad)。

打正式包或自定义基座后可生效。标准基座包含的是测试广告位，无法为你产生收益。

4. 发放奖励

激励视频播放完毕后，需给手机用户发放奖励。一般是虚拟权益，如游戏道具、查看优质内容（小说、代码、图片、音视频）的资质、vip会员时长。

如果手机用户未看完视频广告，中途退出广告，则不发放奖励。

但为了防止客户端伪造看完广告的凭据，播放完毕广告是由服务器来做回调的。这是业内通行的安全方案，包括支付也是服务器回调。

由uniCloud服务器从各家广告平台接受到视频播放完毕后，通知业务服务进行奖励发放。[详见](https://uniapp.dcloud.net.cn/uni-ad/ad-rewarded-video.html#callback)

<!-- UTSAPIJSON.createRewardedVideoAd.compatibility -->

<!-- UTSAPIJSON.createRewardedVideoAd.param -->

<!-- UTSAPIJSON.createRewardedVideoAd.returnValue -->

## Tips

+ uni-app x 标准基座激励视频广告测试广告位id为`1507000689`。正式开发需配置自己的广告位id，并且打包自定义基座后生效。
+ 激励视频广告目前仅支持API形式，暂不支持组件形式。
+ 部分广告渠道不支持模拟器，最终效果及服务器回调应以真机为准。

<!-- UTSAPIJSON.createRewardedVideoAd.example -->

<!-- UTSAPIJSON.createRewardedVideoAd.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
