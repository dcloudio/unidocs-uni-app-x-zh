<!-- ## uni.getLocation(options) @getlocation -->

<!-- UTSAPIJSON.getLocation.name -->

<!-- UTSAPIJSON.getLocation.description -->

<!-- UTSAPIJSON.getLocation.compatibility -->

<!-- UTSAPIJSON.getLocation.param -->

<!-- UTSAPIJSON.getLocation.returnValue -->

### 注意

### 坐标系、系统定位、三方定位等概念

wgs84坐标是国际GPS坐标系，gcj02是中国国内坐标系。同一个位置，2种坐标系数值不同。

中国的地图厂商（如高德、腾讯、百度），仅能使用gcj02坐标。如果将wgs84坐标显示在中国地图上，就会发现偏移。

同理，将gcj02坐标显示在google地图上，也会偏移。

|						|Web					|Android			|iOS					|harmonyOS|微信小程序		|支付宝小程序	|抖音小程序						|
|--					|--						|--						|--						|--				|--						|--						|--										|
|wgs84			|系统定位			|系统定位			|系统定位			|系统定位	|内置定位			|内置定位			|内置定位							|
|gcj02			|需三方SDK定位	|需三方SDK定位	|需三方SDK定位	|系统定位	|内置定位			|内置定位			|内置定位							|
|逆地址解析	|需三方SDK定位	|需三方SDK定位	|系统定位			|系统定位	|需三方SDK定位	|内置定位			|内置定位iOS上有限支持	|

逆地址解析：指传入坐标、返回地址信息（城市、街道等）。

三方SDK定位是需要商业授权的，需要在地图厂商注册开发者账户、创建应用、申请key或secret信息，并且在发行时要把三方SDK打包进去。

地图厂商的商业授权较贵，如需购买，请点击[获取优惠](https://ask.dcloud.net.cn/explore/map/)。

如果运行在微信浏览器中的Web应用，可以使用微信的jssdk的定位能力。此时开发者无需配置自己的key，不涉及商业授权。

Android/iOS手机厂商默认都是wgs84坐标，也即入参type设为system或不填时，只能返回wgs84坐标。

iOS设备的系统定位会返回逆地址解析，即geocode，将坐标转换为城市街道信息。Android设备的系统定位不支持逆地址解析。

某些老型号国产Android Rom（常见于Android6以下）因gms阉割问题不支持系统定位，另部分国产Rom可能不支持高度信息。

纯血鸿蒙手机的系统定位功能较全面，wgs84、gcj02坐标、逆地址解析都支持。

在Android/iOS上，如不使用系统定位，而使用专业地图厂商provider，则可以使用gcj02坐标、逆地址解析geocode功能、以及稳定的所有设备均支持的定位服务。

获取gcj02坐标，有2种方式：
1. 使用国内地图厂商的SDK，也即使用provider，打包时需包含相应模块，并配置向地图厂商申请的key信息。
2. 手机端获取系统定位，拿到wgs84坐标后，使用国内地图厂商的web接口，将wgs84坐标转换为gcj02坐标，web接口也有逆地址解析功能。

不管通过哪种方式获取gcj02坐标，都需要向地图厂商缴纳商业授权费用。DCloud提供了优惠获取地图商业授权的方案，[详见](https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic)

使用三方定位，需要在地图厂商注册账户、创建应用、获取key。然后将key填写到manifest.json中。

Android/iOS平台目前还没有可视化界面，需要在manifest的源码视图中配置。

- app需要在manifest.json文件中配置`uni-location`节点, `HXBuilderX 4.61-`之前为`uni-getLocation`节点，[详见](../collocation/manifest-modules.md#uni-location)
- iOS平台：如果应用需要后台定位能力，需要在 info.plist 中配置 UIBackgroundModes 的 location，注意需Xcode工程中添加相对应 Capabilities 中的 Background Modes，并且勾选 Location updates。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  	<key>UIBackgroundModes</key>
		<array>
			<string>location</string>
		</array>

	</dict>
</plist>
```
- iOS平台：使用内置腾讯定位和iOS14以上高精度定位时，需要在info.plist中配置对应的Key，参考[iOS平台在info.plist配置定位相关的Key](../collocation/manifest-modules.md#uni-getlocation-key)
- Android平台：使用内置腾讯定位时，配置 Key 参考[Andoird平台配置腾讯定位key](../collocation/manifest-modules.md#uni-getlocation-android-key)

地图厂商在App端大多会校验包名和证书，请务必保证在地图厂商后台创建的应用，填写的包名、证书摘要，和实际运行的应用匹配，否则无法使用三方定位。

web平台也分系统定位的SDK定位。系统定位只有wgs84坐标。三方SDK定位，在manifest的Web配置中寻找定位和地图。填入key后需注意校验，如果在地图厂商后台开启了域名、ip校验，那么如果Web运行或发行后的域名与地图厂商后台配置的不符，就无法获取定位。

小程序平台的定位，是小程序引擎自身集成的定位SDK。比如微信小程序使用的是腾讯定位、支付宝小程序使用的是高德定位。由小程序平台免费给开发者提供。

### 权限@permission

定位属于隐私权限，不管在浏览器、App还是小程序，都需要用户同意授权才可以获取。

并且普通精度定位和高精度定位的权限也不同。

获取手机端app是否拥有定位权限，请使用API [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)

除了用户未给app赋予定位权限，有的设备可能直接关闭了定位功能。此时可通过 [uni.getSystemSetting](get-system-setting.md) 来获取系统定位开关。

HarmonyOS平台调用此 API 需要申请定位权限`ohos.permission.APPROXIMATELY_LOCATION`、`ohos.permission.LOCATION`，需自行在项目中配置权限。

### 定位的原理和精度

定位包括gps等卫星定位和基站wifi等网络定位。

卫星定位的精度较高，但卫星定位要求手机设备与高空卫星之间没有阻挡，在阴天、室内，卫星定位会受影响。

有时设备可连接的高空卫星数量较少，定位精度就会较差。如果连接不到任何卫星，定位会失败。

而基于基站和wifi路由的网络定位，精度要被卫星定位差很多。网络定位的核心是手机要有网，无需顾忌和高空卫星之间的阻挡。网络定位一般只能知道设备在某个基站周围，但没有很精细的位置。

- 当设备无法获取定位坐标时，需检查：
	* 手机定位开关是否关闭
	* web站或App是否被拒绝了定位权限
	* 设备是否即没有卫星信号又没有网络
	* 使用三方定位时，地图厂商的校验是否通过，web的域名、ip、签名；app的包名、证书摘要，这些信息在地图厂商配置的和实际运行的，是否一致
	* 地图厂商后台的配额是否足够、权限是否开通

- 当设备可以获取坐标，但在地图上有偏差时，需检查：
	* 是否没有卫星信号，只有网络定位的话精度确实有误差
	* 是否没有高精度定位权限
	* 坐标系是否匹配，把wgs84坐标显示在只支持gcj02的中国地图上肯定是会偏差的

<!-- UTSAPIJSON.getLocation.tutorial -->

<!-- UTSAPIJSON.getLocation.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## 定位provider对象描述 @providerdes

UniLocationSystemProvider(系统定位)继承自[UniProvider](./provider.md#uniprovider)

UniLocationTencentProvider(腾讯定位)继承自[UniProvider](./provider.md#uniprovider)

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
        "uni-location":{
          "amap":{}
        }
      }
    }
  }
```

第四步，打包自定义基座然后运行

通过以上步骤就可以实现自定义定位provider接入到uni API。

由于uni-app x自带的腾讯定位，也是基于provider注册机制开发的，可参考[腾讯定位插件的实现源码](https://gitcode.net/dcloud/uni-api/-/tree/alpha/uni_modules/uni-getLocation-tencent)

App平台，腾讯定位SDK，除了本API封装的功能，还有一些其他功能。如开发者需要调用这些SDK的其他API，可以使用uts直接调用，同样参考上述源码。

## 历史变更
- Web平台本API调用了腾讯地图的免费gcj02坐标转换接口，该接口从2024年7月18日起被腾讯下线，导致老版本中本API无法使用。请立即升级到 `uni-app 4.24版`。

升级后注意：
1. manifest中配置好自己的地图厂商key
2. 确保在地图厂商那里配额足够
3. 确保在地图厂商那里有周边服务的权限。否则无法获取周围地址
4. 确保自己的域名在地图厂商那里正确配置了域名白名单