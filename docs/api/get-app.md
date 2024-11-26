## getApp() @getapp

<!-- UTSAPIJSON.getApp.description -->

- HBuilderX 4.31以前，getApp返回的是vue实例。并且在uts插件中无法使用。
- HBuilderX 4.31+，新增了UniApp对象，用于管理app，getApp返回的是UniApp对象。而vue实例，则是UniApp对象的一个vm属性。

UniApp对象可以在uts插件和uvue页面中同时使用，但vm属性以及相关的globalData仍然只能在uvue页面中才能使用。

<!-- UTSAPIJSON.getApp.compatibility -->

<!-- UTSAPIJSON.getApp.param -->

<!-- UTSAPIJSON.getApp.returnValue -->

<!-- UTSAPIJSON.getApp.example -->

### 全局方法调用@appmethods
以上示例，getApp()后调用了app.uvue里定义的increasetLifeCycleNum方法。app.uvue的源码[另见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/App.uvue)

**调整** ：HBuilderX 4.31 `getApp()` 返回值调整为 `UniApp` 类型，调用 `App.uvue` 中定义的全局方法，需要由 `getApp().methodName()` 调整为 `getApp().vm?.methodName()`。

<!-- UTSAPIJSON.getApp.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
