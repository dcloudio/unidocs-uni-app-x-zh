## web-view

<!-- UTSCOMJSON.web-view.description -->

<!-- UTSCOMJSON.web-view.compatibility -->

<!-- UTSCOMJSON.web-view.attribute -->

<!-- UTSCOMJSON.web-view.event -->

<!-- UTSCOMJSON.web-view.component_type -->

- web平台web-view组件底层使用iframe实现，会有浏览器安全策略限制。一般不推荐在web平台使用web-view组件，如确需使用，且需要通信，请自行根据iframe的浏览器规范进行通信。
- web和小程序平台上，web-view是全屏的，即页面只能显示一个铺满的web-view。
- app/web平台的web-view组件可以自由调整大小和位置。在uni-app x 4.0以前，默认宽、高为0px，页面中使用时需设置相应的 css 属性控制组件宽高才能正常显示。从4.0起改为默认宽高100%。

<!-- UTSCOMJSON.web-view.children -->

<!-- UTSCOMJSON.web-view.example -->

<!-- UTSCOMJSON.web-view.reference -->

### 上下文对象API

web-view的操作api为[uni.createWebviewContext()](../api/create-webview-context.md)。

给web-view组件设一个id属性，将id的值传入uni.createWebviewContext()，即可得到web-view组件的上下文对象，进一步可使用`.evalJS()`、`.reload()`等方法。

### web-view组件的内外通信
- uts向web-view的网页发消息

	使用`evalJS()`方法，详见上方示例代码

- web-view里的网页向uts发消息

	在网页中引入[uni.webview.1.5.5.js](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/hybrid/html/uni.webview.1.5.5.js)。即可在网页中调用一批uni的api，包括：

|方法名|说明|平台差异说明|
|:-|:-|:-|
|uni.webView.navigateTo|[navigateTo](../api/navigator.md#uni-navigateto)|Web平台暂不支持|
|uni.webView.redirectTo|[redirectTo](../api/navigator#redirectto)|Web平台暂不支持|
|uni.webView.reLaunch|[reLaunch](../api/navigator#relaunch)|Web平台暂不支持|
|uni.webView.switchTab|[switchTab](../api/navigator#switchtab)|Web平台暂不支持|
|uni.webView.navigateBack|[navigateBack](../api/navigator#navigateback)|Web平台暂不支持|
|uni.webView.postMessage|向应用发送消息|Web平台暂不支持|

在网页中使用`uni.postMessage()`即可向uts发送消息。

uts端在 `<web-view>` 组件的 `message` 事件回调 `event.detail.data` 中接收消息。

示例代码详见[hello-uni-app-x/hybrid/html/local.html](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/hybrid/html/local.html)

**Tips**

- 传递的消息信息，必须写在 data 对象中。
- `event.detail.data` 中的数据，以数组的形式接收每次 post 的消息。（注：支付宝小程序除外，支付宝小程序中以对象形式接受）

## 注意
- web-view组件为系统web-view，内核版本号不由uni-app x框架控制。
- Android上，web-view版本不是手机默认浏览器的版本。在部分手机上系统web-view的升级需要升级rom，部分手机则可以单独升级Android System Webview包。如需x5等三方webview，需使用uts插件，[见插件市场](https://ext.dcloud.net.cn/search?q=x5)。使用三方webview可减少系统webview的碎片化问题。
- iOS上，web-view的版本与iOS的版本绑定，也即是手机Safari浏览器的版本。
- 一个页面的web-view组件数量不宜太多，每个web-view都会占用不少内存
