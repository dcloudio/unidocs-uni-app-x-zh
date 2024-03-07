## uni.requestPayment(options) @requestpayment

<!-- UTSAPIJSON.requestPayment.description -->

<!-- UTSAPIJSON.requestPayment.param -->

### orderInfo参数说明

| 支付平台 | 参数说明 
|---|---|
| 支付宝 | App 支付请求参数字符串，主要包含商家的订单信息，key=value 形式，以 & 连接。[示例](https://opendocs.alipay.com/open/204/105296?pathHash=22ed0058&ref=api) |

<!-- UTSAPIJSON.requestPayment.returnValue -->

<!-- UTSAPIJSON.requestPayment.compatibility -->

<!-- UTSAPIJSON.requestPayment.tutorial -->

### cause支付sdk错误码汇总

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

注意：
- App平台开发支付宝支付，无需自定义基座，真机运行可直接开发

<!-- UTSAPIJSON.requestPayment.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
