# App.uvue

`App.uvue`是uni-app-x的主组件。

所有页面都是在`App.uvue`下进行切换的，是应用入口文件。但`App.uvue`本身不是页面，这里不能编写视图元素，也就是没有`<template>`。

这个文件的作用包括：监听应用生命周期、配置全局样式、配置全局的存储globalData

应用生命周期仅可在`App.uvue`中监听，在页面监听无效。

`App.uvue`仅支持选项式，暂不支持组合式写法。

## 应用生命周期@applifecycle

`uni-app-x` 支持如下应用生命周期函数：

<!-- VUEJSON.application.onLaunch.name -->

<!-- VUEJSON.application.onLaunch.description -->

<!-- VUEJSON.application.onLaunch.compatibility -->

<!-- VUEJSON.application.onLaunch.param -->

<!-- VUEJSON.application.onLaunch.returnValue -->

<!-- VUEJSON.application.onLaunch.tutorial -->

<!-- VUEJSON.application.onShow.name -->

<!-- VUEJSON.application.onShow.description -->

<!-- VUEJSON.application.onShow.compatibility -->

<!-- VUEJSON.application.onShow.param -->

<!-- VUEJSON.application.onShow.returnValue -->

<!-- VUEJSON.application.onShow.tutorial -->

<!-- VUEJSON.application.onHide.name -->

<!-- VUEJSON.application.onHide.description -->

<!-- VUEJSON.application.onHide.compatibility -->

<!-- VUEJSON.application.onHide.param -->

<!-- VUEJSON.application.onHide.returnValue -->

<!-- VUEJSON.application.onHide.tutorial -->

<!-- VUEJSON.application.onLastPageBackPress.name -->

<!-- VUEJSON.application.onLastPageBackPress.description -->

<!-- VUEJSON.application.onLastPageBackPress.compatibility -->

<!-- VUEJSON.application.onLastPageBackPress.param -->

<!-- VUEJSON.application.onLastPageBackPress.returnValue -->

<!-- VUEJSON.application.onLastPageBackPress.tutorial -->

<!-- VUEJSON.application.onExit.name -->

<!-- VUEJSON.application.onExit.description -->

<!-- VUEJSON.application.onExit.compatibility -->

<!-- VUEJSON.application.onExit.param -->

<!-- VUEJSON.application.onExit.returnValue -->

<!-- VUEJSON.application.onExit.tutorial -->

<!-- VUEJSON.application.onError.name -->

<!-- VUEJSON.application.onError.description -->
:::warning
`onError` 只能监听到如生命周期、事件以及模板渲染等中的同步错误，\
无法监听异步逻辑（例如：`setTimeout`）中的错误和应用初始化之前、 App 崩溃等错误。
:::
<!-- VUEJSON.application.onError.compatibility -->

<!-- VUEJSON.application.onError.param -->

<!-- VUEJSON.application.onError.returnValue -->

<!-- VUEJSON.application.onError.tutorial -->

**示例代码**

<!-- VUEJSON.E_App.example.code -->

**注意**
- **应用生命周期仅可在`App.uvue`中监听，在其它页面监听无效**。
- 应用启动参数，可以在API `uni.getLaunchOptionsSync`获取，[详见](../api/launch.md#getlaunchoptionssync)
- 由于Android的`uni.exit()`是[热退出](../api/exit.md)，此时很多代码逻辑仍然在运行，有些on的事件监听并没有off，需要开发者在onExit生命周期中编写代码处理。比如在app的onLaunch里通过onXX监听了某事件，那么就需要在onExit里调用offXX取消某事件的监听，否则反复热退出、启动，会多次on而不会off，这会引发内存泄露。

## globalData

> HBuilderX 3.99+

小程序有 globalData，这是一种简单的全局变量机制。这套机制在 uni-app-x 里也可以使用，并且全端通用。

**以下是 App.uvue 中定义globalData的相关配置：**

```ts
<script lang="uts">
  export default {
    globalData: {
      str: 'global data str',
      num: 123,
      bool: true
    }
  }
</script>
```

页面或组件中通过 `getApp().globalData` 访问。

```ts
<script lang="uts">
  export default {
    methods: {
      getGlobalData() {
        const app = getApp()
        this.globalDataStr = app.globalData.str
        this.globalDataNum = app.globalData.num
        this.globalDataBool = app.globalData.bool
      }
    }
  }
</script>
```

**注意：** `uni-app x` 中 `globalData` 的数据结构与类型通过 `App.uvue` 中的 `globalData` 初始值定义，后续只能读取或修改，不能新增或删除。

globalData是简单的全局变量，其他状态管理方式，可参考文档[全局变量和状态管理](../tutorial/store.md)。

## 全局样式

在`App.uvue`中，可以定义一些全局通用样式，这里定义的class，每个页面都可以直接使用。
