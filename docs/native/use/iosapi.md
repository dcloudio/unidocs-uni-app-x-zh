> * SDK基于Swift开发，因此原生Objective-C语言开发的应用需要新建一个Swift文件用于添加Swift运行环境以及桥接SDK的API，详情可参考UniAppXDemo工程中的`UniAppBridge`

## 初始化SDK
在 AppDelegate 的 didFinishLaunchingWithOptions 中初始化
``` swift
import DCloudUniappRuntime

UniSDKEngine.shared.create()
```
## 监听应用生命周期函数回调
在 AppDelegate 的 didFinishLaunchingWithOptions 调用
``` swift
UniSDKEngine.applicationDidFinishLaunchingWithOptions(application, launchOptions)
``` 
在 AppDelegate 的 applicationDidBecomeActive 调用
``` swift
UniSDKEngine.applicationDidBecomeActive(application)
```
在 AppDelegate 的 applicationWillResignActive 调用
``` swift
UniSDKEngine.applicationWillResignActive(application)
```
在 AppDelegate 的 applicationDidEnterBackground 调用
``` swift
UniSDKEngine.applicationDidEnterBackground(application)
```
在 AppDelegate 的 applicationWillEnterForeground 调用
``` swift
UniSDKEngine.applicationWillEnterForeground(application)
```
在 AppDelegate 的 openURL 调用
``` swift
UniSDKEngine.applicationOpenURLOptions(application, url, options)
``` 
在 AppDelegate 的 continueUserActivity 调用
``` swift
UniSDKEngine.applicationContinueUserActivityRestorationHandler(application, userActivity, restorationHandler)
```

## 监听推送相关函数回调(可选)
在 AppDelegate 的 didRegisterForRemoteNotificationsWithDeviceToken 调用
``` swift
UniSDKEngine.didRegisterForRemoteNotifications(deviceToken)
```
在 AppDelegate 的 didFailToRegisterForRemoteNotificationsWithError 调用
``` swift
UniSDKEngine.didFailToRegisterForRemoteNotifications(error)
``` 
在 AppDelegate 的 didReceiveRemoteNotification 调用
``` swift
UniSDKEngine.applicationDidReceiveRemoteNotificationCompletionHandler(application, userInfo, completionHandler)
```

## 进入SDK页面
``` swift
if UniSDKEngine.shared.getAppManager()?.getCurrentApp() == nil {
    // uni.exit() 方法会销毁app，所以在这里需要判断currentApp是否为空
    UniSDKEngine.shared.getAppManager()?.create()
}
let viewController = UniAppRootViewController()
self.navigationController?.pushViewController(viewController, animated: true)
```

## 退出SDK页面
通过[uni.exit()](https://doc.dcloud.net.cn/uni-app-x/api/exit.html#exit)退出

# 通信
iOS平台目前不支持直接在uvue页面调用原生API，开发者可通过UTS插件`发送/接收 通知消息`实现与原生App通信，具体实现代码如下：

## 原生APP向SDK发消息
UTS插件添加监听：
``` ts
const name = "com.ios.notification.name1"; //通知消息标识
const notificationName = new Notification.Name(name);
const method = Selector("handleReceiveMessage:")//接收通知消息的方法名
NotificationCenter.default.addObserver(this, selector = method, name = notificationName, object = null)
```

``` ts
@objc static handleReceiveMessage(notification : Notification) {
	let userInfo = notification.userInfo
	if(userInfo != null){
		const message = userInfo!["msg"];
	}
}
```

原生发送通知消息：
``` swift
let name = "com.ios.notification.name1"; //通知消息标识
let message = "消息内容";
let userInfo: [AnyHashable: Any] = [
    "msg": message // 你可以在这里放置任何需要传递的信息
]
NotificationCenter.default.post(name: Notification.Name(name), object: nil, userInfo: userInfo)
```    


## SDK向原生APP发消息
原生添加通知监听：
``` swift
const name = "com.ios.notification.name2"; //通知消息标识
NotificationCenter.default.addObserver(self, selector: #selector(handleNotification(_:)), name: Notification.Name(name), object: nil)
```

``` swift
@objc func handleNotification(_ notification: Notification) {
    if let message = (notification.userInfo?["msg"] as? String) {
        // 使用message
        print(message)
    }
}
```
   
UTS插件发送消息：
``` ts
const name = "com.ios.notification.name2"; //通知消息标识
const message = "消息内容";
const notificationName = new Notification.Name(name);
const userInfo = new Map<string,any>()
userInfo.set("msg", message); // 你可以在这里放置任何需要传递的信息
NotificationCenter.default.post(name = notificationName, object = null, userInfo = userInfo);
```

> 注意：消息接收方必须在发送通知前添加监听事件，否则收不到消息 

## 运行示例
`UniAppXDemo`工程中，`__UNI__00DC103`为通信示例资源文件，将`Info.plist`中`uniapp-x`节点下的`appid`改为`__UNI__00DC103`，并添加`unimoduleTestIosNotification.xcframework`依赖，即可体验通信示例
