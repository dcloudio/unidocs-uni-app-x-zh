## uni.requestPayment(options) @requestpayment

<!-- UTSAPIJSON.requestPayment.description -->

<!-- UTSAPIJSON.requestPayment.compatibility -->

uni.requestPayment是一个统一各平台的客户端支付API，客户端均使用本API调用支付。

本API运行在各端时，会自动转换为各端的原生支付调用API。

注意支付不仅仅需要客户端的开发，还需要服务端开发。虽然客户端API统一了，但各平台的支付申请开通、配置回填仍然需要看各个平台本身的支付文档。

比如微信有App支付的申请入口和使用流程，对应到uni-app，在App端要申请微信的App支付。

如果服务端使用[uniCloud](https://uniapp.dcloud.io/uniCloud/README)，那么官方提供了[uniPay](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html)云端统一支付服务，把App、微信小程序、支付宝小程序里的服务端支付开发进行了统一的封装。

前端统一的`uni.requestPayment`和云端统一的`uniPay`搭配，可以极大提升支付业务的开发效率，强烈推荐给开发者使用。`uniPay`的文档另见：[https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html)

<!-- UTSAPIJSON.requestPayment.param -->

### orderInfo参数说明

 - 支付宝支付  
  App 支付请求参数字符串，主要包含商家的订单信息，key=value 形式，以 & 连接。示例
  ```
  app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%
  22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%
  91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22
  %2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=R
  SA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552
  EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJd
  hIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D<br>
  ```
  [更多详情参考[支付宝官方文档](https://opendocs.alipay.com/open/204/105296?pathHash=22ed0058&ref=api)]
 
 -  微信支付  
  App 支付请求参数字符串,需要打自定义基座。示例
  ```json
  {
   "appid":"wxd569c7238830733b",
   "noncestr":"6N47VnR42bqIm4xq",
   "package":"Sign=WXPay",
   "partnerid":"1230636401",
   "prepayid":"wx26174750316675ac54b89c224eb3250000",
   "timestamp":1711446470,
   "sign":"EE987459B9CFF6462462147130110D31"
  }
  ```
  [更多详情参考[微信官方文档]( https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)]



<!-- UTSAPIJSON.requestPayment.returnValue -->

<!-- UTSAPIJSON.requestPayment.tutorial -->

### 支付SDK错误码

支付失败时可通过错误回调参数`IRequestPaymentFail`中的`cause`属性获取支付SDK的源错误信息，类型为[SourceError](https://uniapp.dcloud.net.cn/tutorial/err-spec.html#sourceerror)，其包含 code 属性存储了支付SDK的原始错误码。 

#### 支付宝支付
| 支付宝错误码 | 错误信息 |
|---|---|
| -9000 | 订单支付成功 |
| -8000 | 正在处理中，支付结果未知（有可能已经支付成功），请查询商家订单列表中订单的支付状态 |
| -4000 | 订单支付失败 |
| -5000 | 重复请求 |
| -6001 | 用户中途取消 |
| -6002 | 网络连接出错 |
| -6004 | 支付结果未知（有可能已经支付成功），请查询商家订单列表中订单的支付状态 |
|  其它  | 其它支付错误 |

#### 微信支付

| 微信支付错误码 | 错误信息 |
|---|---|
| 0 | 成功 |
| -1 | 可能的原因：签名错误、未注册APPID、项目设置APPID不正确、注册的APPID与设置的不匹配、其他异常原因等 |
| -2 | 无需处理。发生场景：用户不支付了，点击取消，返回APP |
| -3 | 发送失败 |
| -4 | 授权被拒绝 |
| -5 | 不支持 |
| -6 | 禁止 |
| 其它 | 其它支付错误 |





### 注意
- App平台开发支付宝支付，无需自定义基座，真机运行可直接开发
- App平台判断微信是否安装可以通过`uni.getProvider`的方式，详见[uni.getProvider](https://doc.dcloud.net.cn/uni-app-x/api/get-provider.html#getprovider)

```ts
   uni.getProvider({
      service: "payment",
      success: (e) => {
         const provider = e.providers.find((item): boolean => {
            return item.id == 'wxpay'
         })

         if (provider?.isAppExist == false) {
            console.log('WeChat 没有安装')
         } else {
            console.log('WeChat 已安装')
         }
      },
      fail: (e) => {
         console.log("获取支付通道失败：", e);
      }
   })
```

- **app需要在根目录manifest.json文件中配置`uni-payment`节点，详见 [https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-payment模块配置](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-modules.html#uni-payment)**
- app-android平台微信支付需要4.11及以上版本
- app-ios平台微信支付需要4.18及以上版本


<!-- UTSAPIJSON.requestPayment.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## 支付provider对象描述

### UniPaymentAlipayProvider(阿里支付)

| 名称           | 类型      | 必备 | 默认值  | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| id             | string    | 是   | -      | 服务供应商标识                        |
| description    | string    | 是   | -      | 服务供应商描述                        |
| ~~isAppExist~~      | boolean   | 是   | -      | 已废弃,判断服务供应商依赖的App是否安装（仅支持微信支付） |

### UniPaymentWxpayProvider(微信支付)

| 名称           | 类型      | 必备 | 默认值  | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| id             | string    | 是   | -      | 服务供应商标识                        |
| description    | string    | 是   | -      | 服务供应商描述                        |
| ~~isAppExist~~      | boolean   | 是   | -      | 已废弃,判断服务供应商依赖的App是否安装（仅支持微信支付） |
| isWeChatInstalled     | boolean   | 是    | -      | 判断微信是否安装 |



## 自定义支付provider接入到uni API 

背景：目前基座已经内置了阿里支付，微信支付，基于开放的原则，在以上支付不满足用户需求的情况下，

用户可以基于我们规范化的接口，错误信息描述等实现自己的支付需求，而在最终使用方式上与内置API无任何差别。

举个例子，用户想使用uni.requestPayment()的方式调用阿里支付，但是内置支付api不支持（这里假设内置api不支持阿里支付），

那只需要按照下面四个步骤实现即可:

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

[完整示例可参考支付宝支付插件的实现源码](https://gitcode.net/dcloud/uni-api/-/tree/master/uni_modules/uni-payment-alipay)

