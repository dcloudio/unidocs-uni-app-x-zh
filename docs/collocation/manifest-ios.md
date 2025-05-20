## IOS配置  

### URL Scheme @urlScheme
uni-app x 项目 manifest.json 文件不再提供 url scheme 配置，HBuilderX4.18及以上版本支持在 app 原生应用配置文件中进行设置，详情参考：[iOS平台 url scheme 配置](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#urlscheme)

**注意**
- uni-app x项目标准基座已配置 url scheme 值："uniappx"
- 配置 url scheme 需提交云端打包才能生效

标准基座可通过此网页体验 Url Scheme 启动 App：[https://uniappx.dcloud.net.cn/scheme.html](https://uniappx.dcloud.net.cn/scheme.html)


### 隐私信息访问的许可描述@usageDescription

uni-app x 的隐私信息访问的许可描述配置，需要在项目下的[Info.plist](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#infoPlist)中配置。

使用[uni内置模块](./manifest-modules.md#utsmodules)时，云端打包回自动添加模块需要的隐私信息访问的许可描述，但许可描述信息是通用描述，不一定适合应用的实际使用场景描述，需根据应用的实际情况在[Info.plist](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#infoPlist)中配置准确的许可描述。


### 通用链接（universal link） @ulink

uni-app x 项目 manifest.json 文件暂未提供 iOS 平台的 通用链接（universal link）可视化相关配置，HBuilderX4.18及以上版本支持在 iOS原生应用配置文件中通过 `关联域（Associated Domains）` 配置通用链接，详情参考：[iOS平台通用链接配置教程](https://uniapp.dcloud.net.cn/tutorial/app-ios-capabilities.html#%E9%80%9A%E7%94%A8%E9%93%BE%E6%8E%A5-universal-link)

**注意**
- uni-app x项目标准基座已配置 universal link 值："https://uniappx.dcloud.net.cn/ulink"，但重签名会使得通用链接配置失效，无法通过通用链接启动标准基座
- 配置 universal link 需提交云端打包才能生效


## 示例
```json
{
  "name" : "uni-app x",
  "appid" : "__UNI__XXXXXXX",
  "description" : "描述信息",
  "versionName" : "1.0.0",
  "versionCode" : "100",
  "uni-app-x":{
    "flex-direction": "column"
  },
  "vueVersion" : "3",
  "app": {
    "distribute": {
      "syncDebug": true,
      "android": {
        "abiFilters": [
          "armeabi-v7a","arm64-v8a"
        ],
        "minSdkVersion": "21",
        "targetSdkVersion": "32"
      },
      "ios": {
        "UIRequiresFullScreen": false
      }
    }
  }
}
```


### CFBundleName @cfbundlename

>HBuilder4.34版本新增支持

iOS平台配置应用内部名称，默认值为“UniAppX”，最多支持15个字符，详细说明参考[苹果官方文档](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundlename)。  
如需更改应用内部名称，可在项目 manifest.json 文件的 "app" -> "distribute" -> "ios" 节点配置 CFBundleName，如下示例将应用内部名称修改为“MyApp”：  
```json
{
  "app": {
    "distribute": {
      "ios": {
        "CFBundleName": "MyApp"
      }
    }
  }
}
```


### UIRequiresFullScreen @uirequiresfullscreen

>HBuilder4.34版本新增支持

iOS平台配置应用在iPad设置是否能够与其他应用程序共享屏幕（分屏显示），需配置应用支持iPad设备时有效，默认值为true（可与其他应用程序共享屏幕）。更多信息参考[苹果官方文档](https://developer.apple.com/documentation/bundleresources/information-property-list/uirequiresfullscreen)。  
如需更改此配置，可在项目 manifest.json 文件的 "app" -> "distribute" -> "ios" 节点配置 UIRequiresFullScreen，如下示例为配置应用不与其他应用共享屏幕：
```json
{
  "app": {
    "distribute": {
      "ios": {
        "UIRequiresFullScreen": false
      }
    }
  }
}
```
