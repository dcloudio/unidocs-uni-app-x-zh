## uni.getLocation(options) @getlocation

<!-- UTSAPIJSON.getLocation.description -->

::: warning 注意
Web平台本API调用了腾讯地图的免费gcj02坐标转换接口，该接口从2024年7月18日起被腾讯逐步下线，导致老版本中本API无法使用。请立即升级到 `uni-app 4.24版`。

升级后注意：
1. manifest中配置好自己的地图厂商key
2. 确保在地图厂商那里配额足够
3. 确保在地图厂商那里有周边服务的权限。否则无法获取周围地址
4. 确保自己的域名在地图厂商那里正确配置了域名白名单

如果运行在微信浏览器中，可以使用微信的jssdk的定位能力。这个是微信向腾讯地图申请的key，开发者无需配置自己的key。

地图厂商的商业授权较贵，如需购买，请点击[获取优惠](https://ask.dcloud.net.cn/explore/map/)。
:::

<!-- UTSAPIJSON.getLocation.compatibility -->

<!-- UTSAPIJSON.getLocation.param -->

<!-- UTSAPIJSON.getLocation.returnValue -->

### 注意

### 坐标系、系统定位、三方定位等概念

wgs84坐标是国际GPS坐标系，gcj02是中国国内坐标系。同一个位置，2种坐标系数值不同。

中国的地图厂商（如高德、腾讯），仅能使用gcj02坐标。如果将wgs84坐标显示在中国地图上，就会发现偏移。

同理，将gcj02坐标显示在google地图上，也会偏移。

手机厂商默认预置的都是wgs84坐标，也即入参type设为system或不填时，只能返回wgs84坐标。

iOS设备的系统定位还会返回逆地址解析，即geocode，将坐标转换为城市街道信息。Android设备的系统定位不支持逆地址解析。

某些老型号国产Android Rom（常见于Android6以下）因gms阉割问题不支持系统定位，另部分国产Rom可能不支持高度信息。

如不使用系统定位，而使用专业地图厂商provider，则可以使用gcj02坐标、逆地址解析geocode功能、以及稳定的所有设备均支持的定位服务。

获取gcj02坐标，有2种方式：
1. 使用国内地图厂商的SDK，也即使用provider，打包时需包含相应模块，并配置向地图厂商申请的key信息。
2. 手机端获取系统定位，拿到wgs84坐标后，使用国内地图厂商的web接口，将wgs84坐标转换为gcj02坐标，web接口也有逆地址解析功能。

不管通过哪种方式获取gcj02坐标，都需要向地图厂商缴纳商业授权费用。DCloud提供了优惠获取地图商业授权的方案，[详见](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)

uni-app x的App标准基座定位在4.25前仅支持系统定位，4.25起集成了腾讯定位。

4.25及以下低版本单独可下载[腾讯定位插件](https://ext.dcloud.net.cn/plugin?id=14569)，在插件中配置key打包后生效。

上述腾讯定位插件属于[ext api插件](https://uniapp.dcloud.net.cn/api/extapi.html)，引用到工程后，会覆盖uni.getLocation的实现，替换掉系统定位。

使用三方定位，需要在地图厂商注册账户、创建应用、获取key。然后将key填写到manifest.json中。

web平台有可视化界面，在manifest的Web配置中寻找定位和地图。填入key后需注意校验，如果在地图厂商后台开启了域名、ip校验，那么如果Web运行或发行后的域名与地图厂商后台配置的不符，就无法获取定位。

app平台目前还没有可视化界面，需要在manifest的源码视图中配置。

- app需要在manifest.json文件中配置`uni-getLocation`节点，[详见](../collocation/manifest-modules.md#uni-getLocation)
- 使用内置腾讯定位和iOS14以上高精度定位时，需要在info.plist中配置对应的Key，参考[在info.plist配置定位相关的Key](../collocation/manifest-modules.md#uni-getLocation-key)

### 权限

定位属于隐私权限，不管在浏览器、App还是小程序，都需要用户同意授权才可以获取。

获取手机端app是否拥有定位权限，请使用API [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)


<!-- UTSAPIJSON.getLocation.tutorial -->

<!-- UTSAPIJSON.getLocation.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## 定位provider对象描述

### UniLocationSystemProvider(系统定位)@locationsystemprovider

| 名称           | 类型      | 必备 | 默认值 | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| id             | string    | 是   | -      | 服务供应商标识                        |
| description    | string    | 是   | -      | 服务供应商描述                        |
| ~~isAppExist~~      | boolean   | 是   | -      | 已废弃,判断服务供应商依赖的App是否安装（仅支持微信支付） |

### UniLocationTencentProvider(腾讯定位)@locationtencentprovider

| 名称           | 类型      | 必备 | 默认值 | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| id             | string    | 是   | -      | 服务供应商标识                        |
| description    | string    | 是   | -      | 服务供应商描述                        |
| ~~isAppExist~~      | boolean   | 是   | -      | 已废弃,判断服务供应商依赖的App是否安装（仅支持微信支付） |


## 自定义定位provider接入到uni API @customprovider

背景：目前uni-app x引擎已经内置了系统定位、腾讯定位。但还有高德定位等其他定位SDK。

以往这些SDK可以通过独立插件的方式集成到uni-app x中，但需要提供单独的API给开发者使用，无法使用uni.getLocation。

uni-app x从4.25起，开放了App平台的provider自接入机制，让三方SDK可以以[provider](./provider.md)方式被开发者集成。

开发一个UTS插件，对接uni规范化的API、错误信息描述等实现自己的定位插件，这样插件使用者就可以通过uni的标准API使用三方SDK。

举个例子，用户想使用uni.getLocation()的方式调用高德定位，但是内置定位api不支持，

那只需要按照下面四个步骤实现即可:

第一步，新建一个UTS插件，在interface.uts 中定义接口，继承 UniLocationProvider，代码如下

```ts
export interface UniLocationAMapProvider extends UniLocationProvider{}
```

第二步，在app-android或者app-ios的index.uts中实现接口，代码如下

```ts
import { UniLocationAMapProvider } from '../interface';

export class UniLocationAMapProviderImpl implements UniLocationAMapProvider{

	override id : String = 'amap' //id必须有插件作者前缀，避免冲突，避免不同插件作者的插件id重名

	override description : String = "高德地图"

	override isAppExist : boolean | null = null

	override getLocation(options : GetLocationOptions) {
		//todo 具体逻辑，接收uni规范的入参，进行业务处理，返回uni规范的返回值。如遇到错误，按uni的规范返回错误码
	}

	constructor() {
	}

}
```

第三步，在manifest.json中配置

```ts
  "app": {
    "distribute": {
      /* android打包配置 */
      "modules": {
        "uni-getLocation":{
          "amap":{}
        }
      }
    }
  }
```

第四步，打包自定义基座然后运行

通过以上步骤就可以实现自定义定位provider接入到uni API。

由于uni-app x自带的腾讯定位，也是基于provider注册机制开发的，可参考[腾讯定位插件的实现源码](https://gitcode.net/dcloud/uni-api/-/tree/alpha/uni_modules/uni-getLocation-tencent)
