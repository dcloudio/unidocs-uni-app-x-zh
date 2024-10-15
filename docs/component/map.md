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

<!-- UTSCOMJSON.map.example -->

## Tips
- 在App和Web平台，没有在manifest中配置好图商的sdk key信息，将无法使用地图。某些图商的sdk key，区分Web、Android、iOS，注意别配混了。有些sdk key，会绑定校验web的域名或app的包名和签名证书摘要，都要匹配准确才能使用地图。
- 谷歌地图仅支持 `wgs84` 坐标，中国的各个地图仅支持 `gcj02` 坐标，注意使用定位API获取的位置，需与map组件的图商需求一致，把 wgs84 的坐标显示在中国地图上会导致偏移。
- 地图是商业服务，需购买商业地图授权（5万/年）。如果没有授权，不但使用会被限频，还会被某些应用商店拒绝上架。DCloud与图商谈判，给开发者提供了优惠，点此详询 [地图商业授权咨询](https://ask.dcloud.net.cn/explore/map/)。

<!-- UTSCOMJSON.map.reference -->

