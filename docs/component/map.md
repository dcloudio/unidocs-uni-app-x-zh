<!-- ## map -->

<!-- UTSCOMJSON.map.name -->

<!-- UTSCOMJSON.map.description -->

地图由三方专业地图厂商提供SDK。在App和Web中，使用三方SDK需在[manifest](../collocation/manifest.md)中进行配置。

<!-- UTSCOMJSON.map.compatibility -->

不同图商在不同平台的兼容性
|图商		|Web|Android|iOS	|harmony|
|:-:		|:-:|:-:		|:-:	|:-:		|
|腾讯		|√	|4.31+	|4.31+|4.61+	|
|高德		|√	|x			|x		|x			|
|Google	|√	|x			|x		|x			|

除了内置支持的图商，还可以在插件市场寻找更多地图解决方案：
1. [插件市场的三方地图插件](https://ext.dcloud.net.cn/search?q=%E5%9C%B0%E5%9B%BE&orderBy=Relevance&uni-appx=1)
2. 使用web-view中的地图

<!-- UTSCOMJSON.map.attribute -->

<!-- UTSCOMJSON.map.event -->

<!-- UTSCOMJSON.map.component_type -->

<!-- UTSCOMJSON.map.children -->

::: warning 注意事项
- App平台 `layer-style` 属性用于设置个性化地图样式，可用于适配实现地图的暗黑模式。使用前需在腾讯位置服务后台 “个性化样式” 的 “[我的样式](https://lbs.qq.com/dev/console/custom/mapStyle)” 中创建，并在 “[样式应用](https://lbs.qq.com/dev/console/custom/apply)” 中将相应的Key绑定样式，`layer-style` 的值为绑定样式的序号。更多信息可参考腾讯地图官方文档[Android平台个性化地图](https://lbs.qq.com/mobile/androidMapSDK/developerGuide/personalized)、[iOS平台个性化地图](https://lbs.qq.com/mobile/iOSMapSDK/mapGuide/mapStyle)。
:::

### 上下文对象API

map组件的操作api为[uni.createMapContext()](../api/create-map-context.md)。

给map组件设一个id属性，将id的值传入uni.createMapContext()，即可得到map组件的上下文对象，进一步可使用`.addMarkers()`等方法。


<!-- UTSCOMJSON.map.example -->

## 三方地图SDK@mapsdk  

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
- Harmony平台：需要在`/harmony-configs/entry/src/main/module.json5`的metadata属性内配置Key，同时 manifest.json 内还需要配置 app.distribute.modules.uni-map 参考[Harmony平台配置腾讯地图Key](../collocation/manifest-modules.md#uni-map-tencent-harmony-key)

### 地图扩展

所谓地图扩展就是可以通过获取map组件的形式扩展地图功能，暂时只有Android支持，步骤如下：

1. 新建一个uts插件，配置依赖腾讯地图SDK 
2. 在uvue页面调用`uni.getElementById()`获取组件对象`UniElement`，将`UniElement`对象传入uts插件
3. 在uts插件中通过`UniElement`的`getAndroidView`获取原生地图View，使用原生地图view与地图SDK提供的API开发扩展功能,例：

```ts
import { CameraUpdateFactory } from "com.tencent.tencentmap.mapsdk.maps"
import { MapView } from "com.tencent.tencentmap.mapsdk.maps"
export function setScale(element : UniElement, scale : number) : void {
	(element?.getAndroidView() as MapView)?.map?.moveCamera(CameraUpdateFactory.zoomTo(scale.toFloat()));
}
```


## Tips
- 在App和Web平台，没有在manifest中配置好图商的sdk key信息，将无法使用地图。某些图商的sdk key，区分Web、Android、iOS，注意别配混了。有些sdk key，会绑定校验web的域名或app的包名和签名证书摘要，都要匹配准确才能使用地图。
- 谷歌地图仅支持 `wgs84` 坐标，中国的各个地图仅支持 `gcj02` 坐标，注意使用定位API获取的位置，需与map组件的图商需求一致，把 wgs84 的坐标显示在中国地图上会导致偏移。
- 地图是商业服务，需购买商业地图授权（5万/年）。如果没有授权，不但使用会被限频，还会被某些应用商店拒绝上架。DCloud与地图厂商谈判，给开发者提供了优惠，点此详询 [地图商业授权咨询](https://ask.dcloud.net.cn/explore/map/)。

<!-- UTSCOMJSON.map.reference -->

