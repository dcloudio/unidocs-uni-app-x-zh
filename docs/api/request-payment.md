## uni.requestPayment(options) @requestpayment

<!-- UTSAPIJSON.requestPayment.description -->

<!-- UTSAPIJSON.requestPayment.param -->

<!-- UTSAPIJSON.requestPayment.returnValue -->

<!-- UTSAPIJSON.requestPayment.compatibility -->

<!-- UTSAPIJSON.requestPayment.tutorial -->

### orderInfo参数说明
| 支付平台 | 参数说明 
|---|---|
| 支付宝 | App 支付请求参数字符串，主要包含商家的订单信息，key=value 形式，以 & 连接。示例如下app_id=2015052600090779&biz_content=%7B%22timeout_express%22%3A%2230m%22%2C%22seller_id%22%3A%22%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22total_amount%22%3A%220.02%22%2C%22subject%22%3A%221%22%2C%22body%22%3A%22%E6%88%91%E6%98%AF%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE%22%2C%22out_trade_no%22%3A%22314VYGIAGG7ZOYY%22%7D&charset=utf-8&method=alipay.trade.app.pay&sign_type=RSA2&timestamp=2016-08-15%2012%3A12%3A15&version=1.0&sign=MsbylYkCzlfYLy9PeRwUUIg9nZPeN9SfXPNavUCroGKR5Kqvx0nEnd3eRmKxJuthNUx4ERCXe552EV9PfwexqW%2B1wbKOdYtDIb4%2B7PL3Pc94RZL0zKaWcaY3tSL89%2FuAVUsQuFqEJdhIukuKygrXucvejOUgTCfoUdwTi7z%2BZzQ%3D |

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
