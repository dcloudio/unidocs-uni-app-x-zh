## native-view

<!-- UTSCOMJSON.native-view.description -->

<!-- UTSCOMJSON.native-view.compatibility -->

<!-- UTSCOMJSON.native-view.attribute -->

<!-- UTSCOMJSON.native-view.event -->

<!-- UTSCOMJSON.native-view.component_type -->

### 使用场景

自定义元素的view层，开发各平台原生组件

### 使用教程

+ 获取 UniNativeViewElement

`object`提供 @init 监听元素初始化，通过事件[UniNativeViewInitEvent](#uninativeviewinitevent)的 detail.element 获取到 [UniNativeViewElement](../dom/uninativeviewelement.md)。

+ 绑定原生view

[UniNativeViewElement](../dom/uninativeviewelement.md) 提供了[bindAndroidView](../dom/uninativeviewelement.md#bindandroidview)与`object`绑定安卓原生view, [bindIOSView](../dom/uninativeviewelement.md#bindiosview)与`object`绑定IOS原生view, 绑定后view则自动适配[组件全局属性](common.md#组件全局属性)。

+ 分发自定义事件

[UniNativeViewElement](../dom/uninativeviewelement.md) 提供了dispatchEvent分发event事件API，注意：事件对象暂时只支持[UniNativeViewEvent](#uninativeviewevent)类型。

具体示例请参考：[native-button](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/uni_modules/native-button/components/native-button/native-button.uvue)插件，该插件使用`object`封装原生button实现的native-button。

**注意：**

+ android平台绑定的View暂时不支持[组件全局事件](common.md#组件全局事件)，后续会提供相关实现方式响应组件公共事件。
+ android平台绑定的View暂时不支持[list-item复用机制](list-item.md#list-item复用机制)，list-item其他子组件不受影响正常启动复用业务。
+ android平台绑定的View不能设置原生的background，会导致`object`组件的background、border、boxshadow 失效。
+ android平台`object`封装的是容器视图，不能自带子View，子组件插入时可能导致子View被其组件覆盖显示不出来。
+ android平台绑定的View不支持overflow: visible。

<!-- UTSCOMJSON.native-view.children -->

<!-- UTSCOMJSON.native-view.example -->

<!-- UTSCOMJSON.native-view.reference -->

## UniNativeViewEvent

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.description -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.extends -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.param -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.example -->
