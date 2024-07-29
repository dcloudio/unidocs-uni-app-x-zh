## UniElement

<!-- CUSTOMTYPEJSON.UniElement.description -->

<!-- CUSTOMTYPEJSON.UniElement.extends -->

<!-- CUSTOMTYPEJSON.UniElement.param -->

#### style@style
- App端
获取的是元素对象计算后的CSS样式集合对象，包括通过样式选择器设置的CSS样式。

- Web端
获取的是元素对象style属性设置的CSS样式集合对象，不包括通过样式选择器设置的CSS样式。

### 方法
<!-- CUSTOMTYPEJSON.UniElement.methods.getNodeId.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getNodeId.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getNodeId.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getNodeId.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getNodeId.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getNodeId.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.appendChild.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.insertBefore.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.description -->

**注意**
- setAttribute从HBuilderX 3.93起，调整为只能保存string类型属性值，需要保存其它类型数据请使用dataset属性。
- 为保证多端一致setAttribute不应用于修改本文档中的UniElement属性，如有此类需求应使用element.xxx设置，如element.scrollTop。其余绑定到内置组件的属性也尽量使用数据驱动而不是绕过vue去设置。

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.compatibility -->

**App平台**
app平台 setAttribute 不支持设置 class、style 属性，设置了也不会生效，class 属性需在 uvue/vue 页面中设置，style 信息可以通过 [style](#style) 属性设置。

<!-- CUSTOMTYPEJSON.UniElement.methods.setAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.description -->

**注意**
- getAttribute返回值从HBuilderX 3.93起，调整为string类型，不要使用此方法获取非string类型的属性值。如有非string需求，请使用对象的点操作符直接访问dateset属性，不通过getAttribute方法。
- 为保证多端一致getAttribute不应用于获取本文档中的UniElement属性，如有此类需求应使用element.xxx获取，如element.scrollTop。

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.compatibility -->

**App平台**
app平台 getAttribute 不支持获取 class、style 属性， uvue/vue 页面中设置的 class 属性暂不支持通过 UniElement 对象获取，style 信息可以通过 [style](#style) 属性获取。

<!-- CUSTOMTYPEJSON.UniElement.methods.getAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.hasAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeAttribute.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView.tutorial -->

```uts
//通过elementId 获取到UniElement对象
const element = uni.getElementById(elementId)
//getElementById不设置泛型，获取到安卓View
if(element != null) {
	const view = element.getAndroidView()
}
```

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidView_1.tutorial -->

```uts
//通过elementId 获取web-view便签的UniElement对象
const element = uni.getElementById(elementId)
//getElementById设置泛型为安卓底层WebView对象, 直接获取WebView 如果泛型不匹配会返回null
if(element != null) {
	const webview = element.getAndroidView<WebView>()
}
```

#### 可通过getAndroidView泛型明确定义View类型的组件

| 组件      | android平台原生View类型         |
| --------- | ------------------------------ |
| [view](https://doc.dcloud.net.cn/uni-app-x/component/view.html) | [ViewGroup](https://developer.android.google.cn/reference/android/view/ViewGroup) |
| [input](https://doc.dcloud.net.cn/uni-app-x/component/input.html) | [EditText](https://developer.android.google.cn/reference/android/widget/EditText) |
| [textarea](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html) | [EditText](https://developer.android.google.cn/reference/android/widget/EditText) |
| [web-view](https://doc.dcloud.net.cn/uni-app-x/component/web-view.html) | [WebView](https://developer.android.google.cn/reference/android/webkit/WebView) |

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getAndroidActivity.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getBoundingClientRect.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getDrawableContext.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.getIOSView.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.addEventListener.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeEventListener.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.removeChild.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.remove.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.dispatchEvent.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollTo.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.scrollBy.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelector.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.querySelectorAll.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.focus.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.blur.tutorial -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.name -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.description -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.param -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.returnValue -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.compatibility -->

<!-- CUSTOMTYPEJSON.UniElement.methods.takeSnapshot.tutorial -->

```ts
// 找到需要截图节点
const view = uni.getElementById('snapshot-content')!
// 进行截图
view.takeSnapshot({
    success: function (res) {
        // 打印截图文件临时路径
        console.log(res.tempFilePath)
        uni.showToast({
            title: '截图成功，路径：' + res.tempFilePath,
            icon: "none"
        })
    },
    fail: function (res) {
        console.log(res)
        uni.showToast({
            icon: 'error',
            title: '截图失败'
        })
    }
})
```

完整示例代码参考[hello uni-app x](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/API/element-takesnapshot/element-takesnapshot.uvue)

* 截图会在应用沙盒目录的cache目录产生临时文件，位置[详见](../api/file-system-spec.md#cache)。
* app端如需主动删除临时文件，使用[uni.getFileSystemManager](../api/get-file-system-manager.md)。
* app端list-view、web-view组件性能优化仅渲染屏幕显示的内容，所以截图仅能截取到当前屏幕展示的内容。
* app端scroll-view组件设置padding后，截图内容不会包含padding区域。
* app端由于组件背景默认透明，所以截图图片默认底色为白色。

