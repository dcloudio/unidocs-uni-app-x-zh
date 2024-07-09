# uni-app x 原生SDK iOS版

## 准备环境
* HBuilder X (4.23及以上版本）
* Xcode 15.2及以上版本

## 接入流程
* 通过 `HBuilder X` 导出离线资源，根据资源内容，配置`原生主工程`环境，添加基础模块需要的依赖库以及资源文件
* 根据离线资源中的`manifest.json`文件中包含的模块，制作`DCloudUTSExtAPI.xcframework`，并将其添加到`原生主工程`中，详见[集成内置模块](../modules/ios/modules.md)
* 根据离线资源中的`manifest.json`文件中包含的模块，向`原生主工程`添加工程配置以及内置模块需要的资源文件等，详见[集成内置模块](../modules/ios/modules.md)
* 根据离线资源中的`uni_modules`文件夹中包含的UTS插件，制作对应的原生xcframework，并将其添加到`原生主工程`(付费购买的uts插件不支持离线打包)，详见[制作UTS插件](iosuts.md)
* 编写代码通过离线API初始化SDK，详见[接入离线SDK](iosapi.md)

## 新建项目(已有可跳过)
1. 启动`Xcode`，点击`File->New->Project`，选择`App`点击`Next`
2. 填写`Product Name`，`Language`选择为`Swift`，点击`Next`即可完成创建

## 主工程环境配置
`Target -> General -> Minimum Deployments` 选择 `12.0`
`Target -> Build Settings -> Other Linker Flags` 中添加`-ObjC`、`-ld_classic`、`-weak_framework SwiftUI`
`Target -> General -> Identity -> Display Name` 输入应用名称(`manifest.json`文件中的`name`)
`Target -> General -> Identity -> Bundle Identifier` 输入应用标识
`Target -> General -> Identity -> Version` 输入应用`versionName`
`Target -> General -> Identity -> Build` 输入应用`versionCode`

## Info.plist配置
1. 若HBuilderX项目`根目录`下包含`Info.plist`文件，需要将该文件内容拷贝到`原生主工程`的`Target -> Info` 下
2. 在`Target -> Info` 下，添加如下配置
```
<dict>
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
	</dict>
	<key>uniapp-x</key>
	<dict>
		<key>appid</key>
		<string>您应用的appid</string>
		<key>ipatype</key>
		<integer>1</integer>
		<key>singleThread</key>
		<true/>
		<key>uniRuntimeVersion</key>
		<string>离线SDK版本号</string>
		<key>unionid</key>
		<string>广告联盟id，如未开通uniad可不填</string>
	</dict>
</dict>
```
![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/uniappx_info.png)


## 导出离线资源
1. 在主工程中新建文件目录`uni-app-x/apps`
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/create_resources_document.png)

2. 打开 `HBuilder X -> 发行 -> 原生App-本地打包 -> 生成本地打包App资源` 勾选iOS 点击生成  
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/export.png)


3. 导出成功之后会在项目的`unpackage/resources`目录下生成资源文件
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/resources.png)

4. 将 `app-ios` 目录下与`appid`对应的目录拷贝到主工程的 `uni-app-x/apps` 目录下
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/copy_resources.png)


## 集成基础模块
将以下依赖库(`SDK/Libs 目录下`)添加到工程中

| 依赖库 | 系统依赖库 |
| ---   | ---|
| DCloudDebugServe.xcframework `（Do Not Embed）Debug环境下集成`、DCloudUTSFoundation.xcframework `（Embed & Sign）`、DCloudUniappRuntime.xcframework `（Embed & Sign）`、SDWebImage.xcframework `（Embed & Sign）`、DCloudUTSExtAPI.xcframework `（Embed & Sign）`   |   JavaScriptCore.framework、c++ |

> `Target -> Build Phases -> Link Binary With Libraries` 下添加依赖库
> `Target -> General -> Frameworks,Libraries,and Embedded Content` 下设置`Embed & Sign`
> DCloudUTSExtAPI.xcframework如何获取详见[集成内置模块](../modules/ios/modules.md)

## 集成内置模块
根据[集成内置模块](../modules/ios/modules.md)制作`DCloudUTSExtAPI`以及向主工程添加相关配置

## 集成UTS插件
根据[集成UTS插件](iosuts.md)制作插件库以及向主工程添加相关配置

## 接入离线SDK
根据[接入离线SDK](iosapi.md)在`主工程`编写代码完成接入