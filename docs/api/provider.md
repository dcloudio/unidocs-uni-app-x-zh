## provider机制介绍

uni-app的API，统一了多平台的差异。但某个API，可以由很多三方SDK来支撑，所以提供了provider机制用于抹平SDK之间的差异。

比如
- 支付API：有支付宝支持、微信支付
- 定位API：有系统定位、腾讯定位

不同的SDK，本身的API是完全不同的，甚至同一个SDK的Android和iOS的API也不一样。

uni-app 通过 provider 机制来统一不同的SDK，屏蔽他们的差异。

同一个功能的不同的SDK，都被称为该功能的 provider，即供应商。

比如对于支付模块，有 支付宝 和 微信 这2个 provider 供应商。

由于这些[模块和SDK](../collocation/manifest-modules.md)在打包时是可选的，那么在运行时可以通过 `uni.getProvider`，来获取到本App包中包含的provider清单。

**注意**

我们要把SDK和App的概念区分清楚。对于支付的2个provider，支付宝和微信，它们除了有SDK外，也有各自的主App。

`uni.getProviders`，只是动态获取开发者的App包中的provider清单，即打包了哪些SDK。但本API不负责判断这些provider的主App是否安装在同一台手机上。

但微信比较特殊，如果没有微信App，微信支付无法完成。并且Appstore审核要求本机未安装微信时，不能显示微信的登录支付。这就要求开发者必须判断本机是否安装了微信。

所以微信的SDK，自身提供了获取微信主App是否安装的API，那么这个API也被封装到了provider返回的对象里。

除微信外，其他SDK无此特殊情况。

### 自注册provider

除了官方提供的provider，uni-app x 于 `4.24版`开放了provider自注册机制，允许三方插件注册provider。

- [自定义支付provider](request-payment.md#customprovider)

- [自定义定位provider](get-location.md#customprovider)

**注意**

- 标准基座android需要在manifest.json中配置才能获取到对应的provider，ios不需要。自定义基座都需要配置
- 自定义的provider不要在构造函数中写逻辑，因为现在provider会预先实例化，如果在构造函数中写逻辑，会导致代码在应用启动的时候就被执行

<!-- UTSAPIJSON.getProvider.name -->

<!-- UTSAPIJSON.getProvider.description -->

<!-- UTSAPIJSON.getProvider.compatibility -->

<!-- UTSAPIJSON.getProvider.param -->

<!-- UTSAPIJSON.getProvider.returnValue -->

::: warning uni.getProvider 返回顺序说明：
1. 目前标准基座中注册的 provider 返回顺序如下：
    支付： 微信支付、支付宝；
    定位： 系统定位、腾讯定位

2. 相同 service 下，其他的自注册 provider，返回顺序在官方预置的 provider 之后

3. 自注册的 provider 无法保障顺序， 请不要依赖自注册 provider 的顺序

4. 如果自定义的 service 与 provider 配置与内置的一样，优先采用自定义的

5. 如果自定义的 service 下存在多个同名的 provider，编译器会报错

:::


<!-- UTSAPIJSON.getProvider.tutorial -->

<!-- UTSAPIJSON.getProviderSync.name -->

<!-- UTSAPIJSON.getProviderSync.description -->

<!-- UTSAPIJSON.getProviderSync.compatibility -->

<!-- UTSAPIJSON.getProviderSync.param -->

<!-- UTSAPIJSON.getProviderSync.returnValue -->

<!-- UTSAPIJSON.getProviderSync.tutorial -->

<!-- UTSAPIJSON.getProvider.example -->


### UniProvider说明文档链接

- 支付Provider：[UniPaymentAlipayProvider](./request-payment.md#providerdes),[UniPaymentWxpayProvider](./request-payment.md#providerdes)

- 定位Provider：[UniLocationSystemProvider](./get-location.md#providerdes),[UniLocationTencentProvider](./get-location.md#providerdes)

## UniProvider

<!-- CUSTOMTYPEJSON.UniProvider.description -->

<!-- CUSTOMTYPEJSON.UniProvider.extends -->

<!-- CUSTOMTYPEJSON.UniProvider.param -->

<!-- CUSTOMTYPEJSON.UniProvider.compatibility -->

<!-- CUSTOMTYPEJSON.UniProvider.example -->

<!-- UTSAPIJSON.provider.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
