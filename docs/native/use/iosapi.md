> * 仅需要离线打包可直接使用或参考`HBuilder`工程
> * 原生项目接入离线SDK可参考示例`UniAppXDemo`工程
> * 离线SDK基于Swift开发，因此原生Objective-C语言开发的应用需要新建一个Swift文件用于添加Swift运行环境以及桥接离线SDK的API，详情可参考UniAppXDemo工程中的`UniAppBridge`

# 仅离线打包
参考如下示例修改AppDelegate(建议直接使用示例中的`HBuilder`工程)
```
import DCloudUniappRuntime
@main
class AppDelegate: UniAppRootAppDelegate {
}
```
# 采用SDK方式接入

## 初始化SDK
在 AppDelegate 的 didFinishLaunchingWithOptions 中初始化
```
import DCloudUniappRuntime

UniSDKEngine.shared.create()
```
## 监听应用生命周期函数回调
在 AppDelegate 的 didFinishLaunchingWithOptions调用
```
UniSDKEngine.applicationDidFinishLaunchingWithOptions(application, launchOptions)
```
在 AppDelegate 的 applicationDidBecomeActive 调用
```
UniSDKEngine.applicationDidBecomeActive(application)
```
在 AppDelegate 的 applicationWillResignActive 调用
```
UniSDKEngine.applicationWillResignActive(application)
```
在 AppDelegate 的 applicationDidEnterBackground 调用
```
UniSDKEngine.applicationDidEnterBackground(application)
```
在 AppDelegate 的 applicationWillEnterForeground 调用
```
UniSDKEngine.applicationWillEnterForeground(application)
```
在 AppDelegate 的 openURL 调用
```
UniSDKEngine.applicationOpenURLOptions(application, url, options)
```
在 AppDelegate 的 continueUserActivity 调用
```
UniSDKEngine.applicationContinueUserActivityRestorationHandler(application, userActivity, restorationHandler)
```

## 监听推送相关函数回调(可选)
在 AppDelegate 的 didRegisterForRemoteNotificationsWithDeviceToken 调用
```
UniSDKEngine.didRegisterForRemoteNotifications(deviceToken)
```
在 AppDelegate 的 didFailToRegisterForRemoteNotificationsWithError 调用
```
UniSDKEngine.didFailToRegisterForRemoteNotifications(error)
```
在 AppDelegate 的 didReceiveRemoteNotification 调用
```
UniSDKEngine.applicationDidReceiveRemoteNotificationCompletionHandler(application, userInfo, completionHandler)
```

## 开始渲染
```
UniSDKEngine.shared.render(toView: toView)
```


# 通信
iOS平台目前不支持直接在uvue页面调用原生API，开发者可通过UTS插件`发送or接收Notification`实现与原生通信
