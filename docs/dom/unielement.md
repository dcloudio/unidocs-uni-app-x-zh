## UniElement

<!-- CUSTOMTYPEJSON.UniElement.description -->

<!-- CUSTOMTYPEJSON.UniElement.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.extends -->

<!-- CUSTOMTYPEJSON.UniElement.param -->

#### style@style
- App端
获取的是元素对象计算后的CSS样式集合对象，包括通过样式选择器设置的CSS样式。

- Web端
获取的是元素对象style属性设置的CSS样式集合对象，不包括通过样式选择器设置的CSS样式。

- 小程序端
获取的是元素对象style属性设置的CSS样式集合对象（仅限通过 UniElement.style 的API设置的），不包括通过样式选择器设置的CSS样式，也不包含在模板上绑定的style属性。

### UniElement 的方法 @unielement-methods

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore_1.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore_1.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore_1.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore_1.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore_1.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore_1.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.compatibility -->

**注意**
- setAttribute从HBuilderX 3.93起，调整为只能保存string类型属性值，需要保存其它类型数据请使用dataset属性。
- 为保证多端一致setAttribute不推荐用于修改本文档中的UniElement属性，如有此类需求应使用element.xxx设置，如element.scrollTop。其余绑定到内置组件的属性也尽量使用数据驱动而不是绕过vue去设置。

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.returnValue -->

**App平台**
app平台 setAttribute 不支持设置 class、style 属性，设置了也不会生效，class 属性需在 uvue/vue 页面中设置，style 信息可以通过 [style](#style) 属性设置。

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAnyAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAnyAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAnyAttribute.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAnyAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAnyAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAnyAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.compatibility -->

**注意**
- getAttribute返回值从HBuilderX 3.93起，调整为string类型，不要使用此方法获取非string类型的属性值。如有非string需求，请使用对象的点操作符直接访问dateset属性，不通过getAttribute方法。
- 为保证多端一致getAttribute不应用于获取本文档中的UniElement属性，如有此类需求应使用element.xxx获取，如element.scrollTop。

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.returnValue -->

**App平台**
app平台 getAttribute 不支持获取 class、style 属性， uvue/vue 页面中设置的 class 属性暂不支持通过 UniElement 对象获取，style 信息可以通过 [style](#style) 属性获取。

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.example -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAnyAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAnyAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAnyAttribute.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAnyAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAnyAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAnyAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.tutorial -->

**getAndroidView获取原生View：**

```uts
//通过组件定义的id属性值，获取到UniElement对象
const element = uni.getElementById(id)
//getAndroidView不设置泛型，获取到安卓View
if(element != null) {
	const view = element.getAndroidView()
}
```

更多示例请参考 uts 插件 [uts-get-native-view](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)

**注意事项：**

+ 安卓平台页面渲染时元素才会构建View，所以元素刚创建就获取View大概率是null，推荐页面onReady时获取。
+ 安卓平台获取的原生View尽可能的避免设置View的background属性，会导致元素background、border、boxshadow css效果失效或设置的background不生效，与设置background时机有关。

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.tutorial -->

**getAndroidView通过泛型定义获取原生View：**

```uts
//导入安卓原生WebView对象
import WebView from "android.webkit.WebView"

//通过web-view组件定义的id属性值，获取web-view标签的UniElement对象
const webViewElement = uni.getElementById(id)
//getAndroidView设置泛型为安卓底层WebView对象, 直接获取WebView 如果泛型不匹配会返回null
if(webViewElement != null) {
	const webview = webViewElement.getAndroidView<WebView>()
}
```

获取到原生的WebView对象后，可以直接使用其所有属性和方法。原生对象的方法非常多，远多于 uni-app x 封装的API。这些方法都可以直接调用了。

在 hello uni-app x 的 组件 -> web-view 示例中，获取原生WebView对象，然后进一步使用了可否前进后退的方法。
- [Android](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-android/index.uts)
- [iOS](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)

**可通过getAndroidView泛型明确定义View类型的组件：**

| 组件      | 对应 android 平台原生View         |
| --------- | -------------------------------- |
| [view](https://doc.dcloud.net.cn/uni-app-x/component/view.html) | [ViewGroup](https://developer.android.google.cn/reference/android/view/ViewGroup) |
| [input](https://doc.dcloud.net.cn/uni-app-x/component/input.html) | [AppCompatEditText](https://developer.android.google.cn/reference/kotlin/androidx/appcompat/widget/AppCompatEditText) |
| [textarea](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html) | [AppCompatEditText](https://developer.android.google.cn/reference/kotlin/androidx/appcompat/widget/AppCompatEditText) |
| [web-view](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) | [WebView](https://developer.android.google.cn/reference/android/webkit/WebView) |

**注意事项：**

+ 安卓平台页面渲染时元素才会构建View，所以元素刚创建就获取View大概率是null，推荐页面onReady时获取。
+ 安卓平台获取的原生View尽可能的避免设置View的background属性，会导致元素background、border、boxshadow 失效或设置的background不生效，与设置background时机有关。

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRectAsync.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRectAsync.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRectAsync.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRectAsync.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRectAsync.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRectAsync.example -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRectAsync.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.tutorial -->

**getIOSView 获取原生 View：**

```uts
//通过 webViewElementId 获取 web-view 标签的 UniElement 对象
const webViewElement = uni.getElementById(webViewElementId)
//获取原生 view
const view = webViewElement?.getIOSView();
//判断 view 是否存在，类型是否为 WKWebView
if (view != null && view instanceof WKWebView) {
    //将 view 转换为 WKWebView 类型
    const webView = view! as WKWebView;
}
```

获取到原生的WebView对象后，可以直接使用其所有属性和方法。原生对象的方法非常多，远多于 uni-app x 封装的API。这些方法都可以直接调用了。

在 hello uni-app x 的 组件 -> web-view 示例中，获取原生WebView对象，然后进一步使用了可否前进后退的方法。
- [Android](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-android/index.uts)
- [iOS](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)


**组件对应原生 View 类型：**

| 组件      | 对应 iOS 平台原生 View         |
| --------- | -------------------------------- |
| [view](https://doc.dcloud.net.cn/uni-app-x/component/view.html) | [UIView](https://developer.apple.com/documentation/uikit/uiview) |
| [input](https://doc.dcloud.net.cn/uni-app-x/component/input.html) | [UITextField](https://developer.apple.com/documentation/uikit/uitextfield) |
| [textarea](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html) | [UITextView](https://developer.apple.com/documentation/uikit/uitextview) |
| [web-view](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) | [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) |

**注意事项：**

+ iOS平台 uvue 环境使用 js 驱动无法处理原生类型，getIOSView 方法需要在 uts 插件中使用。
+ iOS平台页面渲染时元素才会构建View，所以元素刚创建就获取 View 大概率是 null，推荐页面 onReady 时获取。

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.example -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.tutorial -->

完整示例代码参考[hello uni-app x](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/API/element-takesnapshot/element-takesnapshot.uvue)

* 截图会在应用沙盒目录的cache目录产生临时文件，位置[详见](../api/file-system-spec.md#cache)。
* app端如需主动删除临时文件，使用[uni.getFileSystemManager](../api/get-file-system-manager.md)。
* app端list-view、web-view组件性能优化仅渲染屏幕显示的内容，所以截图仅能截取到当前屏幕展示的内容。
* app端scroll-view组件设置padding后，截图内容不会包含padding区域。
* app端由于组件背景默认透明，所以截图图片默认底色为白色。

<!-- CUSTOMTYPEJSON.UniElement.methods.getPage.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getPage.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getPage.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getPage.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getPage.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getPage.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.animate.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.animate.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.animate.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.animate.param -->

- keyframes 支持的属性值

|名称				|描述																				|
|:--				|:--																				|
|width				|控制宽度属性的过渡效果																|
|height				|控制高度属性的过渡效果																|
|margin				|控制外边距属性的过渡效果																|
|marginTop			|控制上外边距属性的过渡效果															|
|marginBottom		|控制下外边距属性的过渡效果															|
|marginLeft		|控制左外边距属性的过渡效果															|
|marginRight		|控制右外边距属性的过渡效果															|
|left				|控制左侧位置属性的过渡效果															|
|right				|控制右侧位置属性的过渡效果															|
|top				|控制顶部位置属性的过渡效果															|
|bottom				|控制底部位置属性的过渡效果															|
|padding			|控制内边距属性的过渡效果																|
|paddingLeft		|控制左内边距属性的过渡效果															|
|paddingRight		|控制右内边距属性的过渡效果															|
|paddingTop		|控制上内边距属性的过渡效果															|
|paddingBottom		|控制下内边距属性的过渡效果															|
|opacity			|控制透明度属性的过渡效果																|
|backgroundColor	|控制背景颜色属性的过渡效果															|
|borderColor		|控制边框颜色属性的过渡效果															|
|borderTopColor	|控制上边框颜色属性的过渡效果															|
|borderBottomColor|控制下边框颜色属性的过渡效果															|
|borderLeftColor	|控制左边框颜色属性的过渡效果															|
|borderRightColor	|控制右边框颜色属性的过渡效果															|
|transform			|控制变换属性的过渡效果																|
|transformOrigin	|控制元素变形的原点的过渡效果															|
|offset				|关键帧的偏移量。为0.0和1.0之间的数字。如果此值缺失，则关键帧将在相邻关键帧之间均匀分布。	|

:::tip Tips
- App平台keyframes支持的属性值不支持设置百分比。
- 微信小程序平台 keyframes 使用 wxs + transition 方案实现，不支持多个 keyframes 之间使用缺省属性。微信内置的 `this.animate` 方案支持 [css 属性有限](https://developers.weixin.qq.com/miniprogram/dev/framework/view/animation.html#%E5%85%B3%E9%94%AE%E5%B8%A7%E5%8A%A8%E7%94%BB)，可以配合使用。
:::

- options 支持的属性

|名称		|描述																				|
|:--		|:--																				|
|delay		|动画延迟的毫秒数	。默认值为0															|
|direction	|动画运行方向。Android/微信小程序平台仅支持alternate和normal，默认为normal							|
|duration	|动画时长。默认值为0																	|
|easing		|动画曲线。支持ease、ease-in、ease-out、ease-in-out、linear和贝塞尔函数。默认值为linear（微信小程序平台支持 linear）	|
|fill		|决定动画效果是否应在播放前反映在元素中（Android仅支持forwards）							|
|iterations	|动画应重复的次数。默认值为1。	当设置为`Infinity`时，动画将一直重复执行。					|

<!-- CUSTOMTYPEJSON.UniElement.methods.animate.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.animate.tutorial -->


<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController.example -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController.tutorial -->


<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController_1.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController_1.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController_1.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController_1.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController_1.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController_1.example -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getHarmonyController_1.tutorial -->


<!-- CUSTOMTYPEJSON.UniElement.methods.requestFullscreen.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.requestFullscreen.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.requestFullscreen.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.requestFullscreen.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.requestFullscreen.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.requestFullscreen.example -->

<!-- CUSTOMTYPEJSON.UniElement.methods.requestFullscreen.tutorial -->

:::tip Tips
- requestFullscreen仅支持`view`组件。其他组件调用会触发失败回调。
- app-ios平台，横屏时系统会自动隐藏状态栏。
:::
