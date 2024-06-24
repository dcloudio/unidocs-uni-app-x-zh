## uni-ad

### aar说明

|广告SDK	|aar依赖																		|线上依赖	|说明							|
|:--		|:--																			|:--		|:--							|
|基础模块	|uni-ad-release.aar<br/>uni-ad-splash-release.aar<br/>uniad-native-release.aar	|-			|广告基础模块及开屏广告，必选	|
|优量汇		|uniad-gdt-release.aar<br/>GDTSDK.unionNormal.aar								|-			|可选							|
|GroMore	|uniad-gromore-release.aar<br/>open_ad_sdk.aar									|-			|可选							|
|快手		|uniad-ks-release.aar<br/>ks_adsdk-ad.aar										|-			|可选							|
|百度		|uniad-bd-release.aar<br/>Baidu_MobAds_SDK.aar									|-			|可选							|
|sigmob		|uniad-sgm-release.aar<br/>windAd.aar<br/>wind-common.aar						|-			|可选							|

广告需要根据[uni_AD后台](https://uniad.dcloud.net.cn/)按照广告开通情况将对应的广告渠道aar拷贝到libs下。**基础模块必须添加。**

### 添加联盟ID

在主项目的build.gradle的下添加联盟ID：

```groovy
	defaultConfig {
        ...
        buildConfigField "String", "DCLOUDUnionId", "\"联盟ID\""
    }
```

***
说明：联盟ID位于：[uni-AD后台](https://uniad.dcloud.net.cn/)->首页->联盟ID
***
