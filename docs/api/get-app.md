## getApp() @getapp

<!-- UTSAPIJSON.getApp.description -->

- HBuilderX 4.31 以前，`getApp()` 返回的是 Vue 实例，且无法在 uts 插件中使用。
- 从 HBuilderX 4.31+ 起，新增 `UniApp` 对象用于管理 app，`getApp()` 返回 `UniApp` 对象；Vue 实例则作为 `UniApp` 对象的 `vm` 属性提供。
- `getApp()` 只能在 `script` 中调用，不能直接在模板中使用。

`UniApp` 对象可同时在 uts 插件和 uvue 页面中使用，但 `vm` 属性及其相关的 `globalData` 仍然只能在 uvue 页面中使用。

<!-- UTSAPIJSON.getApp.compatibility -->

<!-- UTSAPIJSON.getApp.param -->

<!-- UTSAPIJSON.getApp.returnValue -->

<!-- UTSAPIJSON.getApp.example -->

### 全局方法调用@appmethods
以上示例，getApp()后调用了app.uvue里定义的increasetLifeCycleNum方法。app.uvue的源码[另见](https://gitcode.com/dcloud/hello-uni-app-x/blob/alpha/App.uvue)

**调整** ：HBuilderX 4.31 `getApp()` 返回值调整为 `UniApp` 类型，调用 `App.uvue` 中定义的全局方法，需要由 `getApp().methodName()` 调整为 `getApp().vm?.methodName()`。

<!-- UTSAPIJSON.getApp.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
