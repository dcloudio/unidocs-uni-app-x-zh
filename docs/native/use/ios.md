# uni-app x 原生SDK iOS版

## 准备环境
* HBuilder X (4.26及以上版本）
* Xcode 15.2及以上版本

## 接入流程
1. 在 `HBuilder X` 中导出资源文件，根据资源内容，配置`原生主工程`环境，添加基础模块需要的依赖库以及资源文件
2. 根据资源文件中的`manifest.json`文件中包含的模块，制作`DCloudUTSExtAPI.xcframework`，并将其添加到`原生主工程`中，详见[集成内置模块](../modules/ios/modules.md)
3. 根据资源文件中的`manifest.json`文件中包含的模块，向`原生主工程`添加工程配置以及内置模块需要的资源文件等，详见[集成内置模块](../modules/ios/modules.md)
4. 根据资源文件中的`uni_modules`文件夹中包含的UTS插件，制作对应的原生xcframework，并将其添加到`原生主工程`(付费购买的uts插件不支持原生工程接入)，详见[制作UTS插件](iosuts.md)
5. 在原生工程中，通过API启动uni原生SDK，详见[API文档](iosapi.md)

## 导出资源文件
1. 打开 `HBuilder X -> 发行 -> 原生App-本地打包 -> 生成本地打包App资源` 勾选iOS点击生成  
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/export.png)


2. 导出成功之后会在项目的`unpackage/resources`目录下生成资源文件   

    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/resources.png)

3. 在原生工程根目录创建文件夹`uni-app-x/apps`,将 `app-ios` 目录下与`appid`对应的目录拷贝到该目录下，然后打开工程将`uni-app-x`文件夹拖入到`Target -> Build Phases -> Copy Bundle Resources`下, 勾选`Copy Items if needed`以及`Create folder references`

    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/copy_resources.png)



## 原生工程配置

`Target -> General -> Minimum Deployments` 选择 `12.0`   

`Target -> Build Settings -> Other Linker Flags` 中添加`-ObjC`、`-ld_classic`、`-weak_framework SwiftUI`

1. 若HBuilderX项目`根目录`下包含`Info.plist`文件，需要将该文件内容拷贝到`原生主工程`的`Target -> Info` 下
2. 在`Target -> Info` 下，添加如下配置
```xml
<dict>
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
	</dict>
	<key>UIFileSharingEnabled</key>
	<true/>
	<key>uniapp-x</key>
	<dict>
		<key>appid</key>
		<string>应用的appid</string>
		<key>ipatype</key>
		<integer>1</integer>
		<key>singleThread</key>
		<true/>
		<key>uniRuntimeVersion</key>
		<string>SDK版本号</string>
		<key>unionid</key>
		<string>广告联盟id，如未开通uniad可不填</string>
		<key>channel</key>
		<string>appstore</string>
		<key>initPrivacyAuthorization</key>
		<true/>
	</dict>
</dict>
```
![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/uniappx_app_info.png)



## 集成基础模块
将以下依赖库(`SDK/Libs 目录下`)添加到工程中

| 依赖库 | 系统依赖库 |
| ---   | ---|
| DCloudDebugServe.xcframework `（Do Not Embed）Debug环境下集成）` <br> DCloudUTSFoundation.xcframework `（Embed & Sign）` <br> DCloudUniappRuntime.xcframework `（Embed & Sign）` <br> SDWebImage.xcframework `（Embed & Sign）` <br> DCloudUTSExtAPI.xcframework `（Embed & Sign）` <br> KSCrash.xcframework `（Embed & Sign）`   |   JavaScriptCore.framework <br> c++ |

> `Target -> Build Phases -> Link Binary With Libraries` 下添加依赖库
> `Target -> General -> Frameworks,Libraries,and Embedded Content` 下设置`Embed & Sign`
> DCloudUTSExtAPI.xcframework如何获取详见[集成内置模块](../modules/ios/modules.md)

## 集成内置模块
根据[集成内置模块](../modules/ios/modules.md)制作`DCloudUTSExtAPI`以及向主工程添加相关配置

## 集成UTS插件
根据[集成UTS插件](iosuts.md)制作插件库以及向主工程添加相关配置

## 启动与通信
根据[API文档](iosapi.md)在主工程编写代码完成接入