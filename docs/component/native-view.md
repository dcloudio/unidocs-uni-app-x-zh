## native-view

<!-- UTSCOMJSON.native-view.description -->

`native-view`自身没有渲染内容，开发者提供对应平台原生view与`native-view`进行绑定，`native-view`将展示该view的渲染内容。vue组件集成`native-view`，实现可展示原生view渲染内容的vue组件

<!-- UTSCOMJSON.native-view.compatibility -->

<!-- UTSCOMJSON.native-view.attribute -->

<!-- UTSCOMJSON.native-view.event -->

<!-- UTSCOMJSON.native-view.component_type -->

### 使用场景

vue组件开发规范开发集成原生view渲染内容的通用组件

### 使用教程

+ 获取 UniNativeViewElement

`native-view`提供 @init 监听元素初始化，通过事件[UniNativeViewInitEvent](#uninativeviewinitevent)的 detail.element 获取到 [UniNativeViewElement](../dom/uninativeviewelement.md)。

+ 绑定原生view

[UniNativeViewElement](../dom/uninativeviewelement.md) 提供了[bindAndroidView](../dom/uninativeviewelement.md#bindandroidview)与`native-view`绑定安卓原生view, [bindIOSView](../dom/uninativeviewelement.md#bindiosview)与`native-view`绑定IOS原生view, 绑定后view则自动适配[组件全局属性](common.md#组件全局属性)。

+ 分发自定义事件

[UniNativeViewElement](../dom/uninativeviewelement.md) 提供了dispatchEvent分发event事件API，注意：事件数据类型暂时只支持[UniNativeViewEvent](#uninativeviewevent)。

具体示例请参考：[native-button](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/native-button/components/native-button/native-button.uvue)插件，该插件使用`native-view`封装原生button实现的native-button。

**注意：**

+ android平台`native-view`组件不支持[list-item复用机制](list-item.md#list-item复用机制)，list-item其他子组件不受影响正常启动复用业务。
+ android平台`native-view`组件不支持background、border、boxshadow属性
+ android平台`native-view`组件不支持子组件
+ android平台`native-view`组件不支持overflow属性设置visible，仅支持hidden

<!-- UTSCOMJSON.native-view.children -->

<!-- UTSCOMJSON.native-view.example -->

<!-- UTSCOMJSON.native-view.reference -->

## UniNativeViewEvent

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.description -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.extends -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.param -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.example -->
