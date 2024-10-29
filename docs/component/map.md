## map

<!-- UTSCOMJSON.map.description -->

地图由三方专业地图厂商提供SDK。在App和Web中，使用三方SDK需在[manifest](../collocation/manifest.md)中进行配置。

<!-- UTSCOMJSON.map.compatibility -->

不同图商在不同平台的兼容性
|图商|App|Web|
|:-:|:-:|:-:|
|腾讯|4.31+|√|
|高德|x|√|
|Google|x|√|

除了内置支持的图商，还可以在插件市场寻找更多地图解决方案：
1. [插件市场的三方地图插件](https://ext.dcloud.net.cn/search?q=%E5%9C%B0%E5%9B%BE&orderBy=Relevance&uni-appx=1)
2. 使用web-view中的地图

<!-- UTSCOMJSON.map.attribute -->

<!-- UTSCOMJSON.map.event -->

<!-- UTSCOMJSON.map.component_type -->

<!-- UTSCOMJSON.map.children -->

::: warning 注意事项
- App平台 `layer-style` 属性需要在腾讯地图服务商后台创建，值设置为腾讯后台申请的字符串，[详情](https://lbs.qq.com/dev/console/custom/mapStyle)
- App平台暂未支持
    - Marker的callout、customCallout、label属性
    - 点聚合
:::

<!-- UTSCOMJSON.map.example -->

## 三方地图SDK  

### 腾讯地图

#### app-android平台仓储依赖
- com.tencent.map:tencent-map-vector-sdk:5.6.0
- com.tencent.map:sdk-utilities:1.0.9
- com.tencent.map.geolocation:TencentLocationSdk-openplatform:7.5.4.3
- com.github.bumptech.glide:glide:4.16.0

#### app-ios平台Cocoapods依赖
- {"name":"Tencent-MapSDK", "version": "5.1.0"}
- {"name": "Tencent-MapVisualPlugin", "version": "3.1.0"}
- {"name": "Tencent-MapFoundation", "version": ">=3.3.0"}
- {"name": "Tencent-MapUtils", "version": "1.2.3"}

#### 审图号

GS粤（2023）1171号

#### Map Key配置

app平台目前还没有可视化界面，采用摇树机制，即调用地图相关api才会把地图组件编译到基座中，Map Key配置方式如下：

- iOS平台：需要在info.plist中配置对应的Key，参考[iOS平台配置腾讯地图Key](../collocation/manifest-modules.md#uni-map-tencent-ios-key)
- Android平台：需要在AndroidManifest.xml配置Key， 参考[Andoird平台配置腾讯地图Key](../collocation/manifest-modules.md#uni-map-tencent-android-key)


## Tips
- 在App和Web平台，没有在manifest中配置好图商的sdk key信息，将无法使用地图。某些图商的sdk key，区分Web、Android、iOS，注意别配混了。有些sdk key，会绑定校验web的域名或app的包名和签名证书摘要，都要匹配准确才能使用地图。
- 如地图适配暗黑模式，需要在[腾讯地图服务商后台](https://lbs.qq.com/dev/console/custom/mapStyle)创建相应样式配置，使用`layer-style`进行设置。
- 谷歌地图仅支持 `wgs84` 坐标，中国的各个地图仅支持 `gcj02` 坐标，注意使用定位API获取的位置，需与map组件的图商需求一致，把 wgs84 的坐标显示在中国地图上会导致偏移。
- 地图是商业服务，需购买商业地图授权（5万/年）。如果没有授权，不但使用会被限频，还会被某些应用商店拒绝上架。DCloud与地图厂商谈判，给开发者提供了优惠，点此详询 [地图商业授权咨询](https://ask.dcloud.net.cn/explore/map/)。

<!-- UTSCOMJSON.map.reference -->

