## 鸿蒙平台配置

### modules@modules

鸿蒙平台目前有如下需要自行配置方可使用的模块。如需启用下述模块需要在manifest.json的`app -> distribute -> modules`节点下配置。示例如下

```json
{
  // ...
  "app": {
    "distribute": {
      "modules": {
        "uni-getLocation": {
          "system": {} // 启用系统定位
        }
        // ...
      }
    }
  }
}
```

#### uni-getLocation-system

系统定位模块，启用后uni.getLocation接口内可使用系统定位。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-getLocation": {
      "system": {}
    }
    // ...
  }
}
```

**注意**

- 鸿蒙平台的系统定位支持返回gcj02坐标及逆地址解析
- 目前此模块会默认加载
- 使用此模块还需要配置定位权限（准确位置及大致位置），参考：[鸿蒙平台权限配置](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#permission)

#### uni-map-tencent

腾讯地图模块，支持map组件内加载腾讯地图。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-map": {
      "tencent": {}
    }
    // ...
  }
}
```

**注意**

- 鸿蒙平台的腾讯地图组件如需使用定位相关能力需要依赖`uni-getLocation-system`模块

#### uni-oauth-huawei

华为登录，uni.login内使用华为登录。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-oauth": {
      "huawei": {}
    }
    // ...
  }
}
```

#### uni-payment-alipay

支付宝支付，uni.requestPayment接口使用支付宝支付。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-payment": {
      "alipay": {}
    }
    // ...
  }
}
```

#### uni-payment-wxpay

微信支付，uni.requestPayment接口使用微信支付。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-payment": {
      "wxpay": {}
    }
    // ...
  }
}
```

#### uni-push

uni-push 2.0。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-push": {}
    // ...
  }
}
```

#### uni-verify

一键登录。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-verify": {}
    // ...
  }
}
```

#### uni-facialRecognitionVerify

uni实人认证。对应manifest.json内的模块配置如下：

```json
{
  "modules": {
    "uni-facialRecognitionVerify": {}
    // ...
  }
}
```