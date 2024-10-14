## getApp() @getapp

<!-- UTSAPIJSON.getApp.description -->

<!-- UTSAPIJSON.getApp.compatibility -->

<!-- UTSAPIJSON.getApp.param -->

<!-- UTSAPIJSON.getApp.returnValue -->

<!-- UTSAPIJSON.getApp.example -->

<!-- UTSAPIJSON.getApp.tutorial -->

以上示例，getApp()后调用了app.uvue里定义的increasetLifeCycleNum方法。app.uvue的源码[另见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/App.uvue)

### 全局方法调用@appmethods
HBuilderX 4.31 `getApp()` 返回值调整为 `UniApp` 类型，调用 `App.uvue` 中定义的全局方法，需要由 `getApp().methodName()` 调整为 `getApp().vm?.methodName()`。
<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
