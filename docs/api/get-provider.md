## uni.getProvider(options) @getprovider

<!-- UTSAPIJSON.getProvider.description -->

uni-app的api，统一了多平台的差异。但在app平台，有的功能可以由很多SDK来支撑。比如
- 支付：有支付宝支持、微信支付、iap支付
- 定位：有系统定位、腾讯定位、高德定位

不同的SDK，本身的api是完全不同的，甚至同一个SDK的Android和iOS的API也不一样。

uni-app 通过 provider 机制来统一不同的SDK，屏蔽他们的差异。同一个功能的不同的SDK，都被称为该功能的 provider，即供应商。

比如对于支付模块，有 支付宝 和 微信 这2个 provider 可用。

由于这些[模块和SDK](../collocation/manifest-modules.md)在打包时是可选的，那么在运行时可以通过 `uni.getProvider`，来获取到本App包中包含的provider清单。

注意我们要把SDK和App的概念区分清楚。对于支付的2个provider，支付宝和微信，它们也有各自的主App。

本API `uni.getProvider`，只是获取开发者的App包中的provider清单。但本API不负责判断这些provider的主App是否安装在同一台手机上。

微信比较特殊，如果没有微信App，微信支付无法完成。其他SDK无此限制。

所以微信支付SDK，自身提供了获取微信主App是否安装的API，那么这个API也被封装到了本API返回的对象里。

<!-- UTSAPIJSON.getProvider.compatibility -->

<!-- UTSAPIJSON.getProvider.param -->

<!-- UTSAPIJSON.getProvider.returnValue -->

<!-- UTSAPIJSON.getProvider.tutorial -->

<!-- UTSAPIJSON.getProvider.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 自定义provider

### 自定义支付provider

以自定义alipay为例

第一步，在interface.uts 中定义接口,继承UniPaymentProvider，代码如下

```ts
export interface UniPaymentAlipayProvider extends UniPaymentProvider{}
```

第二步，在app-android或者app-ios的index.uts中实现接口，代码如下

```ts
import { UniPaymentAlipayProvider } from '../interface.uts'
export class UniPaymentAlipayProviderImpl implements UniPaymentAlipayProvider{
	override id : String = "alipay"
	override description : String = "Alipay"
	override isAppExist : boolean | null = null
	
	constructor(){}

	override requestPayment(options : RequestPaymentOptions) {
		//todo 具体逻辑
	}
}
```

第三步，在manifest.json中配置

```ts
  "app": {
    "distribute": {
      /* android打包配置 */
      "modules": {
        "uni-payment":{
          "alipay":{}
        }
      }
    }
  }
```

第四步，打自定义基座

### 自定义定位provider

以自定义腾讯定位为例

第一步，在interface.uts 中定义接口,继承UniLocationProvider，代码如下

```ts
export interface UniLocationTencentProvider extends UniLocationProvider{}
```

第二步，在app-android或者app-ios的index.uts中实现接口，代码如下

```ts
import { UniLocationTencentProvider } from '../interface';

export class UniLocationTencentProviderImpl implements UniLocationTencentProvider{


	override id : String = 'tencent'

	override description : String = "tencent"

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
          "tencent":{}
        }
      }
    }
  }
```

第四步，打自定义基座

### 注意点

标准基座android需要在manifest.json中配置才能获取到对应的provider，ios不需要，自定义基座都需要配置


