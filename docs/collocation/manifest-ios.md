## IOS配置  


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
