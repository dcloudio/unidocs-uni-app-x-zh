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

uni-app x的App标准基座定位仅支持wgs84坐标系、不支持逆地址解析、且某些老型号国产Android机因gms问题不支持系统定位、国产Rom可能不支持高度信息。

如需更强的定位能力，需加载专业定位sdk。

真机运行基座不包含三方定位sdk。

三方定位sdk方面，暂不支持高德、百度，但支持腾讯定位。

::: warning 4.25及以下低版本使用注意：

可下载[腾讯定位插件](https://ext.dcloud.net.cn/plugin?id=14569)，在插件中配置key打包后生效。

上述腾讯定位插件属于[ext api插件](https://uniapp.dcloud.net.cn/api/extapi.html)，引用到工程后，会覆盖uni.getLocation的实现，替换掉系统定位。

如需其他定位，请在插件市场搜索定位相关的uts插件。

获取手机端app是否拥有定位权限，请使用API [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)

不管系统定位、还是三方sdk定位，都有很多注意事项，包括gms、坐标系、隐私和权限等，请仔细阅读下面的参考链接。
:::

::: warning 4.25及以上版本 uni.getLocation 支持provider机制，使用需注意：

- app需要在根目录manifest.json文件中配置`uni-getLocation`节点，详见 [https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-getLocation模块配置](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-getLocation)
- 使用腾讯定位三方SDK时，需要配置在info.plist中配置对应的Key，参考[在info.plist配置定位相关的Key](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-getlocation)
:::


<!-- UTSAPIJSON.getLocation.tutorial -->

<!-- UTSAPIJSON.getLocation.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## 定位provider对象描述

### UniLocationSystemProvider(系统定位)

| 名称           | 类型      | 必备 | 默认值 | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| id             | string    | 是   | -      | 服务供应商标识                        |
| description    | string    | 是   | -      | 服务供应商描述                        |
| ~~isAppExist~~      | boolean   | 是   | -      | 已废弃,判断服务供应商依赖的App是否安装（仅支持微信支付） |

### UniLocationTencentProvider(腾讯定位)

| 名称           | 类型      | 必备 | 默认值 | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| id             | string    | 是   | -      | 服务供应商标识                        |
| description    | string    | 是   | -      | 服务供应商描述                        |
| ~~isAppExist~~      | boolean   | 是   | -      | 已废弃,判断服务供应商依赖的App是否安装（仅支持微信支付） |


## 自定义定位provider接入到uni API @customprovider

背景：目前基座已经内置了系统定位，腾讯定位，基于开放的原则，在以上定位不满足用户需求的情况下，

用户可以基于我们规范化的接口，错误信息描述等实现自己的定位需求，而在最终使用方式上与内置API无任何差别。

举个例子，用户想使用uni.getLocation()的方式调用高德定位，但是内置定位api不支持，

那只需要按照下面四个步骤实现即可:

第一步，在interface.uts 中定义接口,继承UniLocationProvider，代码如下

```ts
export interface UniLocationAMapProvider extends UniLocationProvider{}
```

第二步，在app-android或者app-ios的index.uts中实现接口，代码如下

```ts
import { UniLocationAMapProvider } from '../interface';

export class UniLocationAMapProviderImpl implements UniLocationAMapProvider{


	override id : String = 'amap'

	override description : String = "amap"

	override isAppExist : boolean | null = null

	override getLocation(options : GetLocationOptions) {
		//todo 具体逻辑
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

第四步，打自定义基座

通过以上步骤就可以实现自定义定位provider接入到uni API 

[完整示例可参考腾讯定位插件的实现源码](https://gitcode.net/dcloud/uni-api/-/tree/alpha/uni_modules/uni-getLocation-tencent)


