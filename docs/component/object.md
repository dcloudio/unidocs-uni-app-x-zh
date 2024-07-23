## object

<!-- UTSCOMJSON.object.description -->

<!-- UTSCOMJSON.object.compatibility -->

<!-- UTSCOMJSON.object.attribute -->

<!-- UTSCOMJSON.object.event -->

<!-- UTSCOMJSON.object.component_type -->

### 使用场景

自定义元素的view层，开发各平台原生组件

### 使用教程

+ 获取UniObjectElement

`object`提供 @init 监听元素初始化，通过事件[UniObjectInitEvent](#uniobjectinitevent)的 detail.element 获取到 [UniObjectElement](../dom/uniobjectelement.md)。

+ 绑定原生view

[UniObjectElement](../dom/uniobjectelement.md) 提供了[bindAndroidView](../dom/uniobjectelement.md#bindandroidview)与`object`绑定安卓原生view, [bindIOSView](../dom/uniobjectelement.md#bindiosview)与`object`绑定IOS原生view, 绑定后view则自动适配[组件全局属性](common.md#组件全局属性)。

+ 分发自定义事件

[UniObjectElement](../dom/uniobjectelement.md) 提供了dispatchEvent分发event事件API，注意：事件对象暂时只支持[UniObjectCustomEvent](#uniobjectcustomevent)类型。

具体示例请参考：[native-button](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/uni_modules/uni-native-button/components/native-button/native-button.vue)插件，该插件使用`object`封装原生button实现的native-button。

**注意：**

+ android平台绑定的view暂时不支持[组件全局事件](common.md#组件全局事件)，后续会提供相关实现方式响应组件公共事件。
+ android平台绑定的view暂时不支持[list-item复用机制](list-item.md#list-item复用机制)，list-item其他子元素不受影响正常启动复用业务。
+ android平台绑定的view不支持overflow: visible。

<!-- UTSCOMJSON.object.children -->

<!-- UTSCOMJSON.object.example -->

<!-- UTSCOMJSON.object.reference -->


## UniObjectCustomEvent

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.description -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.extends -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.param -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.example -->

### UniObjectCustomEvent 的方法 @uniobjectcustomevent-methods
<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.UniObjectCustomEvent.methods.preventDefault.tutorial -->
