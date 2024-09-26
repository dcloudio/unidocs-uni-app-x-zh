# 全局 API

## 应用实例 @app-instance

### 兼容性 @compatibility

<!-- VUEJSON.application.compatibility -->

### app.component

如果同时传递一个组件名字符串及其定义，则注册一个全局组件；如果只传递一个名字，则会返回用该名字注册的组件 (如果存在的话)。

示例 [详情](<!-- VUEJSON.E_app-instance.component_component.gitUrl -->)

::: preview <!-- VUEJSON.E_app-instance.component_component.webUrl -->

> 注册全局组件

```ts
import App from './App.uvue'
import CompForAppComponent from '@/components/CompForAppComponent.uvue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('CompForAppComponent', CompForAppComponent)
}
```

> 使用全局组件

<!-- VUEJSON.E_app-instance.component_component.code -->

:::

### app.use

`app.use` 支持通过对象字面量、函数及 `definePlugin` 方式定义插件。

支持传递插件参数，当传递插件参数时，`app` 的类型需要指定为 `VueApp`。

示例 [详情](<!-- VUEJSON.E_app-instance.use_use-options.gitUrl -->)

::: preview <!-- VUEJSON.E_app-instance.use_use-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_app-instance.use_use-options.code -->

> 组合式 API
<!-- VUEJSON.E_app-instance.use_use-composition.code -->
:::

### app.config.globalProperties

请注意，`globalProperties` 是一个保留关键字，因此在项目中请勿声明名为 `globalProperties` 的变量。

在向 `globalProperties` 注册方法时，请使用直接函数表达式方式进行赋值。不支持先声明函数，再将其注册到 `globalProperties` 上的方式。同时，注册的函数一旦被赋值，不允许进行修改。

`globalProperties` 在编译时处理，因此确保你的操作在编译时是可知的。例如，将变量赋值给 `globalProperties` 时，这个变量在编译时必须是已知的，而不能是在运行时才能确定的变量。
当传递插件参数时，`app` 的类型需要指定为 `VueApp`。

示例 [详情](<!-- VUEJSON.E_app-instance.globalProperties_globalProperties-options.gitUrl -->)

[设置 app.config.globalProperties](https://gitcode.net/dcloud/hello-uvue/-/blob/alpha/main.uts)

::: preview <!-- VUEJSON.E_app-instance.globalProperties_globalProperties-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_app-instance.globalProperties_globalProperties-options.code -->

> 组合式 API
<!-- VUEJSON.E_app-instance.globalProperties_globalProperties-composition.code -->
:::

## 应用生命周期 @app-lifecycle

uni-app x 新增了 [onLastPageBackPress](../collocation/App.md#applifecycle) 和 [onExit](../collocation/App.md#applifecycle) 应用级生命周期，Android退出应用逻辑写在app.uvue里，新建项目的模板自动包含相关代码。如需修改退出逻辑，请直接修改相关代码。

示例 [详情](<!-- VUEJSON.E_App.example.gitUrl -->)

::: preview <!-- VUEJSON.E_App.example.webUrl -->

<!-- VUEJSON.E_App.example.code -->
:::

## 通用 @general

<!-- VUEJSON.general.compatibility -->

<!-- VUEJSON.general.example -->

### nextTick 使用注意事项 @nexttick

目前 nextTick 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的的，所以 nextTick 不能保证 DOM 排版以及渲染完毕。如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/unielement.md) 对象。在修改 DOM 后，立刻使用 [Element](../dom/unielement.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。
