# App.uvue

`App.uvue`是uni-app-x的主组件。

所有页面都是在`App.uvue`下进行切换的，是应用入口文件。但`App.uvue`本身不是页面，这里不能编写视图元素，也就是没有`<template>`。

这个文件的作用包括：
1. 监听应用生命周期
2. 配置全局变量globalData
3. 编写全局可用的method方法
4. 配置全局样式

应用生命周期仅可在`App.uvue`中监听，在页面监听无效。

`App.uvue`仅支持选项式，暂不支持组合式写法。

## 应用生命周期@applifecycle

`uni-app-x` 支持如下应用生命周期函数：

<!-- VUEJSON.application.onLaunch.name -->

<!-- VUEJSON.application.onLaunch.description -->

<!-- VUEJSON.application.onLaunch.compatibility -->

<!-- VUEJSON.application.onLaunch.param -->

<!-- VUEJSON.application.onLaunch.returnValue -->

- 如果应用通过scheme或applink（通用链接）启动，可在本生命周期获取相应参数。配置scheme或applink需在AndroidManifest.xml或info.plist中配置，打包后生效。

<!-- VUEJSON.application.onLaunch.tutorial -->

<!-- VUEJSON.application.onShow.name -->

<!-- VUEJSON.application.onShow.description -->

<!-- VUEJSON.application.onShow.compatibility -->

<!-- VUEJSON.application.onShow.param -->

<!-- VUEJSON.application.onShow.returnValue -->

- 如果应用通过scheme或applink（通用链接）启动（不管首次启动还是后台激活到前台，均触发本生命周期），可在本生命周期获取。配置scheme或applink需在AndroidManifest.xml或info.plist中配置，打包后生效。
- 如开发App页面直达功能，在配置scheme或通用链接并打包后，一般在onShow生命周期里解析scheme或applink参数，然后自行写navigatorTo等路由API跳转页面。onShow的好处是不管首页启动还是后台激活到前台，都触发。当然如果是初次启动，仍然会先打开App的首页再执行开发者编写的路由代码。
- Web的页面直达无需使用scheme或通用链接，所有页面地址都可以直接在地址栏访问。

在微信小程序下，关闭弹出的原生窗体也会触发应用的onShow。比如关闭chooseImage、chooseVideo、chooseMedia、previewImage、chooseLocation、openLocation、scanCode等弹出的窗体。

<!-- VUEJSON.application.onShow.tutorial -->

<!-- VUEJSON.application.onHide.name -->

<!-- VUEJSON.application.onHide.description -->

<!-- VUEJSON.application.onHide.compatibility -->

<!-- VUEJSON.application.onHide.param -->

<!-- VUEJSON.application.onHide.returnValue -->

在微信小程序下，打开全屏原生窗体也会触发应用的onHide。比如chooseImage、chooseVideo、chooseMedia、previewImage、chooseLocation、openLocation、scanCode。可以简单理解为弹出的这些原生窗体盖住了js写的小程序。

<!-- VUEJSON.application.onHide.tutorial -->

<!-- VUEJSON.application.onExit.name -->

<!-- VUEJSON.application.onExit.description -->

<!-- VUEJSON.application.onExit.compatibility -->

<!-- VUEJSON.application.onExit.param -->

<!-- VUEJSON.application.onExit.returnValue -->

<!-- VUEJSON.application.onExit.tutorial -->
* 参见 [uni.exit](https://doc.dcloud.net.cn/uni-app-x/api/exit.html#exit) 相关文档

<!-- VUEJSON.application.onError.name -->

<!-- VUEJSON.application.onError.description -->
:::warning
`onError` 可以监听以下来源中的同步错误：
- 组件渲染器
- 事件处理器
- 生命周期钩子
- setup() 函数
- 侦听器

无法监听异步逻辑（例如：`setTimeout`）中的错误和应用初始化之前、 App 崩溃等错误。
:::
<!-- VUEJSON.application.onError.compatibility -->

<!-- VUEJSON.application.onError.param -->

<!-- VUEJSON.application.onError.returnValue -->

<!-- VUEJSON.application.onError.tutorial -->


<!-- VUEJSON.application.onLastPageBackPress.name -->

<!-- VUEJSON.application.onLastPageBackPress.description -->

<!-- VUEJSON.application.onLastPageBackPress.compatibility -->

<!-- VUEJSON.application.onLastPageBackPress.param -->

<!-- VUEJSON.application.onLastPageBackPress.returnValue -->

<!-- VUEJSON.application.onLastPageBackPress.tutorial -->


<!-- VUEJSON.application.onPageNotFound.name -->

<!-- VUEJSON.application.onPageNotFound.description -->

<!-- VUEJSON.application.onPageNotFound.compatibility -->

<!-- VUEJSON.application.onPageNotFound.param -->

<!-- VUEJSON.application.onPageNotFound.returnValue -->

<!-- VUEJSON.application.onPageNotFound.tutorial -->


<!-- VUEJSON.application.onUnhandledRejection.name -->

<!-- VUEJSON.application.onUnhandledRejection.description -->

<!-- VUEJSON.application.onUnhandledRejection.compatibility -->

<!-- VUEJSON.application.onUnhandledRejection.param -->

<!-- VUEJSON.application.onUnhandledRejection.returnValue -->

<!-- VUEJSON.application.onUnhandledRejection.tutorial -->


<!-- VUEJSON.application.onThemeChange.name -->

<!-- VUEJSON.application.onThemeChange.description -->

<!-- VUEJSON.application.onThemeChange.compatibility -->

监听主题变化一般不推荐这个生命周期。而是使用uni api方式。详见：[uni-app x主题适配](../api/theme-change.md)

<!-- VUEJSON.application.onThemeChange.param -->

<!-- VUEJSON.application.onThemeChange.returnValue -->

<!-- VUEJSON.application.onThemeChange.tutorial -->

**示例代码**

<!-- VUEJSON.E_App.example.code -->

**注意**
- **应用生命周期仅可在`App.uvue`中监听，在其它页面监听无效**。
- 应用启动参数，也可以在API `uni.getLaunchOptionsSync`获取，[详见](../api/launch.md#getlaunchoptionssync)
- 由于Android的`uni.exit()`是[热退出](../api/exit.md)，此时很多代码逻辑仍然在运行，有些on的事件监听并没有off，需要开发者在onExit生命周期中编写代码处理。比如在app的onLaunch里通过onXX监听了某事件，那么就需要在onExit里调用offXX取消某事件的监听，否则反复热退出、启动，会多次on而不会off，这会引发内存泄露。

## globalData

> HBuilderX 3.99+

小程序有 globalData，这是一种简单的全局变量机制。这套机制在 uni-app-x 里也可以使用，仅 `iOS uts 插件` 环境不支持。

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

## 全局方法
在 `App.uvue methods` 中，可以定义全局方法，这里定义的方法，在项目中可以通过 `getApp().vm?.methodName()` 调用, 例如：

<!-- UTSAPIJSON.getApp.example -->

::: warning 注意
HBuilderX 4.31 `getApp()` 返回值调整为 `UniApp` 类型，调用 `App.uvue` 中定义的全局方法，需要由 `getApp().methodName()` 调整为 `getApp().vm?.methodName()`。
:::

## 全局样式

在`App.uvue`中，可以定义一些全局通用样式，这里定义的class，每个页面都可以直接使用。
