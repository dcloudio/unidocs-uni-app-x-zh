<!-- ## web-view -->

<!-- UTSCOMJSON.web-view.name -->

<!-- UTSCOMJSON.web-view.description -->

<!-- UTSCOMJSON.web-view.compatibility -->

<!-- UTSCOMJSON.web-view.attribute -->

<!-- UTSCOMJSON.web-view.event -->

<!-- UTSCOMJSON.web-view.component_type -->


### 组件宽高说明
- web和小程序平台上，web-view是全屏的，即页面只能显示一个铺满的web-view。
- app平台的web-view组件可以自由调整大小和位置。在uni-app x 4.0以前，默认宽、高为0px，页面中使用时需设置相应的 css 属性控制组件宽高才能正常显示。从4.0起改为默认宽高100%。

### 嵌套滚动说明
App平台 web-view 组件可在 scroll-view、list-view/list-item 等可滚动容器中使用，如果 web-view 中的内容可以滚动，则会出现嵌套滚动的问题，细节如下：
- app-android平台，默认开启嵌套滚动，在web-view区域操作时，会优先滚动web页面内容（web页面的body内容），web页面内容无法滚动了再滚动外层嵌套滚动容器。如果web页面使用了区域滚动，嵌套滚动逻辑不会受页面中touch事件的默认行为（[Event：preventDefault](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault)）影响，仅判断web页面内容是否可滚动，web页面内容无法滚动则触发外层嵌套滚动容器，如需配置外层嵌套容器不处理滚动需配置 android-nested-scroll 属性为 none。
- app-ios平台，在web-view区域操作时，会优先滚动web-view内容（web页面的body内容），web页面内容无法滚动并且滚动条消失后才能操作滚动外层嵌套滚动容器。如果web页面使用了区域滚动，则受页面中touch事件的默认行为（[Event：preventDefault](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault)）逻辑控制，即阻止了默认行为则不滚动外层嵌套滚动容器，不阻止默认行为则滚动外层嵌套滚动容器。

### src路径支持说明

- 本地路径/static方式
	由于uni-app/uni-app x编译时，只把/static目录下的静态资源copy到app中，所以src均需指向/static目录下。
	其他目录的html文件由于不会被打包进去，所以无法访问。
	app平台文件路径会存在大小写敏感问题，为了有更好的兼容性，建议统一按大小写敏感原则处理 [详情](../api/file-system-spec.md#casesensitive)

- 支持网络路径
	支持http、https。
	app平台使用系统Webview组件，由系统Webview管理缓存。

<!-- UTSCOMJSON.web-view.children -->

<!-- UTSCOMJSON.web-view.example -->

<!-- UTSCOMJSON.web-view.reference -->

### 上下文对象API

web-view的操作api为[uni.createWebviewContext()](../api/create-webview-context.md)。

给web-view组件设一个id属性，将id的值传入uni.createWebviewContext()，即可得到web-view组件的上下文对象，进一步可使用`.evalJS()`、`.reload()`等封装好的跨平台方法。

#### 获取原生WebView对象@nativeview

为增强uni-app x组件的开放性，从 `HBuilderX 4.25` 起，UniElement对象提供了 [getAndroidView](../dom/unielement.md#getandroidview) 和 [getIOSView](../dom/unielement.md#getiosview) 方法。

该方法可以获取到 web-view 组件对应的原生 `WebView` 对象，从而可以调用原生 API 以扩展当前 web-view 组件和上下文对象未提供的能力。

比如：Android 平台和 iOS 平台的原生 WebView 都提供了 canGoBack 和 canGoForward 两个 API，用来判断当前网页是否可以回退和前进。但 uni-app x 的 web-view 组件上下文对象没有封装上述 API。

下面则举例说明在 Android 平台如何通过获取原生 WebView 对象来实现上述能力（iOS 平台写法类似）。

```js
import WebView from 'android.webkit.WebView';

function canGoBack() : boolean {
	// 第一步获取web-view组件的UniElement对象
	const element = uni.getElementById(elementId); //elementId为页面上web-view组件的id。不过一般建议从uvue页面给uts插件传入指定的UniElement对象，而不是在uts插件中直接获取页面组件的id。
	// 第二步通过UniElement的getAndroidView方法，通过泛型指定的方式，获取Android原生的WebView对象。泛型参数即为原生对象的类型名称
  const webview = element?.getAndroidView<WebView>();
	// 然后就可以调用原生WebView的各种方法，比如 canGoBack 方法
  return webview == null ? false : webview.canGoBack();
}

function canGoForward() : boolean {
  const element = uni.getElementById(elementId); //elementId为页面上web-view组件的id
  const webview = element?.getAndroidView<WebView>();
  return webview == null ? false : webview.canGoForward();
}
```

详细的示例源码，在 hello uni-app x 的 组件 -> [web-view 示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/component/web-view/web-view.uvue) 中，
获取原生WebView对象，然后进一步使用了可否前进后退的方法，封装代码如下：
- [Android](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-android/index.uts)
- [iOS](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)


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
|uni.webView.getEnv|获取当前webView环境|uvue/nvue/plus/h5|
|uni.webView.postMessage|向应用发送消息|Web平台暂不支持|

在网页中使用`uni.webView.postMessage()`即可向uts发送消息。

uts端在 `<web-view>` 组件的 `message` 事件回调 `event.detail.data` 中接收消息。

示例代码详见[hello-uni-app-x/hybrid/html/local.html](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/hybrid/html/local.html)

**Tips**

- 传递的消息信息，必须写在 data 对象中。
- `event.detail.data` 中的数据，以数组的形式接收每次 post 的消息。（注：支付宝小程序除外，支付宝小程序中以对象形式接受）
- web平台web-view组件底层使用iframe实现，会有浏览器安全策略限制。一般不推荐在web平台使用web-view组件，如确需使用，且需要通信，请自行根据iframe的浏览器规范进行通信。

### 本地网页跨域@cors
web-view组件有跨域问题，服务器网页的跨域问题属于常规web开发范畴，请自行查阅文档。\
但当App平台加载本地磁盘的html文件时，跨域问题需要单独说明。

各App平台的webview对本地网页跨域的策略不同，Android、iOS、鸿蒙，要求依次严格。

#### 鸿蒙
鸿蒙其自身有设计问题，在同一时间，web-view只能配置允许访问下列2种本地目录中的一种。
1. App 包资源（如项目 static 文件夹内容）
2. 沙盒文件（如使用 uni.downloadFile 下载的文件等，[详见](../api/file-system-spec.md)）

uni-app x中，web-view组件在鸿蒙上**默认**配置为允许跨域访问 App包资源。

所以，默认情况下，**web-view访问应用沙盒文件会报不允许访问**。

- 如果开发者需要访问应用沙盒，需要用如下代码对web-view切换设置：

```ts
// 获取web-view组件对应的鸿蒙原生Controller
const webviewController = uni.getElementById(elementId)?.getHarmonyController() as webview.WebviewController | null
// 修改跨域设置
webviewController?.setPathAllowingUniversalAccess([])
```

- 上述修改将允许该web-view访问应用沙箱目录，但会造成该web-view无法再访问 App包资源。如需再访问 App 资源（如项目 static 文件夹内容），需要再调用如下代码切换：
```ts
const webviewController = uni.getElementById(elementId)?.getHarmonyController() as webview.WebviewController | null

webviewController?.setPathAllowingUniversalAccess([
	getContext()!.filesDir,
	getContext()!.getApplicationContext().filesDir,
	getContext()!.resourceDir,
	getContext()!.getApplicationContext().resourceDir
].filter(item => !!item).map(item => item + '/uni-app-x/apps'))
```

鸿蒙的安全团队认为过多开放目录访问会造成安全漏洞，但同时也限制了开发者需求的实现。DCloud正在与华为交涉，[详见](https://issuereporter.developer.huawei.com/detail/250515172631027/comment)

## 注意
- app平台web-view组件为系统Webview组件，内核版本号不由uni-app x框架控制。
- app-android平台，web-view版本不一定是手机默认浏览器的版本。在部分手机上系统web-view的升级需要升级rom，部分手机则可以单独升级Android System Webview包。如需x5等三方webview，需使用uts插件，[见插件市场](https://ext.dcloud.net.cn/search?q=x5)。使用三方webview可减少系统webview的碎片化问题。
- app-ios平台，web-view的版本与iOS的版本绑定，也即是手机Safari浏览器的版本。WKWebview的限制比Android要多一些，比如无法使用跨域cookie，具体见Apple开发者文档。
- 页面中的web-view组件数量不宜太多，每个web-view都会占用不少内存。
- uni.postMessage已不推荐使用（将废弃），功能与uni.webView.postMessage一致，推荐使用uni.webView.postMessage。
