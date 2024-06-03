## uni-payment

### 微信支付

项目应用下的build.gradle添加：

```
dependencies {
    implementation 'com.tencent.mm.opensdk:wechat-sdk-android:6.8.0'
}
```

|本地依赖库名称									|
|:--											|
|uni-payment-release.aar	|
|uni-payment-wxpay-release.aar	|

### 支付宝支付

项目应用下的build.gradle添加：

```
dependencies {
    implementation 'com.alipay.sdk:alipaysdk-android:15.8.17'
}
```

|本地依赖库名称									|
|:--											|
|uni-payment-release.aar	|
|uni-payment-alipay-release.aar	|


将本地依赖库复制到app项目的libs下
