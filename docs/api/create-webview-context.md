## uni.createWebviewContext(webviewId, component?) @createwebviewcontext

<!-- UTSAPIJSON.createWebviewContext.description -->

参考：[web-view组件](../component/web-view.md)

在不传入第2个component参数时，默认从页面栈顶的页面来查找这个webviewContext。

在选项式和组合式中，获取组件实例略有差别。

- 选项式中，this代表当前vue实例。如果是在页面的export default内、函数外使用this，即代表该页面的组件实例。
```js
let v1 = uni.createWebviewContext("wv1", this) //获取id为wx1的web-view组件的context
```
- 组合式中，通过getCurrentInstance()!.proxy! 获取当前页面的组件实例。
```js
let v1 = uni.createWebviewContext("wv1", getCurrentInstance()!.proxy!) //获取id为wx1的web-view组件的context
```

由于本API仅在App端支持。也可以直接使用DOM API操作。UniWebViewElement比webviewContext有更多属性和方法。例如：
```js
let wv = uni.getElementById("wv1") as UniWebViewElement
```


<!-- UTSAPIJSON.createWebviewContext.compatibility -->

<!-- UTSAPIJSON.createWebviewContext.param -->

<!-- UTSAPIJSON.createWebviewContext.returnValue -->

<!-- UTSAPIJSON.createWebviewContext.example -->

<!-- UTSAPIJSON.createWebviewContext.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

示例代码另见[web-view组件](../component/web-view.md)
