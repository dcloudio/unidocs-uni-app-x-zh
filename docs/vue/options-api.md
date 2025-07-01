# 选项式 API @options-api

选项式 API，要求在script里编写`export default {}`，在其中定义data、methods、生命周期等选项。

## 状态选项

<!-- VUEJSON.options_state.compatibility -->

### 示例代码 @example

#### data

用于声明组件初始响应式状态的函数。

示例 [详情](<!-- VUEJSON.E_component-instance.data_data-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.data_data-options.webUrl -->
<!-- VUEJSON.E_component-instance.data_data-options.code -->
:::

#### props

用于声明一个组件的 props。

示例 [详情](<!-- VUEJSON.E_component-instance.props_props-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.props_props-options.webUrl -->
<!-- VUEJSON.E_component-instance.props_props-options.code -->
:::

#### computed

用于声明要在组件实例上暴露的计算属性。

示例 [详情](<!-- VUEJSON.E_reactivity.core_computed_computed-options.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_computed_computed-options.webUrl -->

<!-- VUEJSON.E_reactivity.core_computed_computed-options.code -->

:::

#### methods

用于声明要混入到组件实例中的方法。

声明的方法可以直接通过组件实例访问，或者在模板语法表达式中使用。所有的方法都会将它们的 `this` 上下文自动绑定为组件实例，即使在传递时也如此。

在声明方法时避免使用箭头函数，因为它们不能通过 `this` 访问组件实例。

[详情点击查看](./component.md#page-call-component-method)

#### watch

用于声明在数据更改时调用的侦听回调。

::: warning 注意
- `watch immediate` 第一次调用时，App-Android 平台旧值为初始值，web 平台为 null。
:::

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch_watch-options.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch_watch-options.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch_watch-options.code -->

:::

#### emits

用于声明由组件触发的自定义事件。

示例 [详情](<!-- VUEJSON.E_component-instance.emit-function_emit-function-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.emit-function_emit-function-options.webUrl -->

<!-- VUEJSON.E_component-instance.emit-function_child-options.code -->

:::

## 渲染选项 @rendering-options

<!-- VUEJSON.options_rendering.compatibility -->

### 示例代码 @example

#### template

用于声明组件的字符串模板。

示例 [详情](<!-- VUEJSON.E_built-in.special-elements_template_template-options.gitUrl -->)

::: preview <!-- VUEJSON.E_built-in.special-elements_template_template-options.webUrl -->
<!-- VUEJSON.E_built-in.special-elements_template_template-options.code -->
:::

#### render

用于编程式地创建组件虚拟 DOM 树的函数。

`render` 是字符串模板的一种替代，可以使你利用 JavaScript 的丰富表达力来完全编程式地声明组件最终的渲染输出。

预编译的模板，例如单文件组件中的模板，会在构建时被编译为 `render` 选项。如果一个组件中同时存在 `render` 和 `template，则` `render` 将具有更高的优先级。

示例 [详情](<!-- VUEJSON.E_render-function.render_render-options.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.render_render-options.webUrl -->
<!-- VUEJSON.E_render-function.render_render-options.code -->
:::

#### slots

一个在渲染函数中以编程方式使用插槽时辅助类型推断的选项。

示例 [详情](<!-- VUEJSON.E_directive.v-slot_v-slot-options.gitUrl -->)

作用域插槽需在组件中指定插槽数据类型
::: preview <!-- VUEJSON.E_directive.v-slot_v-slot-options.webUrl -->

<!-- VUEJSON.E_directive.v-slot_v-slot-options.code -->

:::

## 生命周期选项 @lifecycle-options

> [页面及组件生命周期流程图](../page.md#lifecycleflow)

### 页面生命周期 @page-lifecycle-options

#### 兼容性 @page-lifecycle-compatibility

[页面生命周期](../page.md#lifecycle)

示例 [详情](<!-- VUEJSON.E_lifecycle.page_page-options.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.page_page-options.webUrl -->

<!-- VUEJSON.E_lifecycle.page_page-options.code -->

:::

### 组件生命周期 @page-component-options

#### 兼容性 @component-lifecycle-compatibility

<!-- VUEJSON.options_lifecycle.compatibility -->

#### mounted、unmounted 使用注意事项 @mounted-unmounted-tips

目前 mounted、unmounted 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的的，所以 mounted、unmounted 不能保证 DOM 排版以及渲染完毕。\
如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/unielement.md) 对象。\
在修改 DOM 后，立刻使用 [Element](../dom/unielement.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。

#### activated、deactivated 使用注意事项 @activated-deactivated-tips

当 A 页面存在 `keepAlive` 组件，A 页面 `navigateTo` B 页面时
- Web 端 A 页面中 `keepAlive` 的组件会触发 `deactivated` 生命周期
- App 端 A 页面中 `keepAlive` 的组件不会触发 `deactivated` 生命周期

当 B 页面 back 返回 A 页面时
- Web 端 A 页面中 `keepAlive` 的组件会触发 `activated` 生命周期
- App 端 A 页面中 `keepAlive` 的组件不会触发 `activated` 生命周期

示例 [详情](<!-- VUEJSON.E_lifecycle.component_ChildComponentOptions.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.component_ChildComponentOptions.webUrl -->

<!-- VUEJSON.E_lifecycle.component_ChildComponentOptions.code -->

:::


## 组合选项 @options-composition

<!-- VUEJSON.options_composition.compatibility -->

### inject

当使用 `inject` 声明从上层提供方注入的属性时，支持两种写法：字符串数组和对象。推荐使用对象写法，因为当使用数组方法时，类型会被推导为 `any | null` 类型。\
使用对象写法时，额外增加 `type` 属性用于标记类型。如果注入的属性类型不是基础数据类型，需要通过 `PropType` 来标记类型：

示例 [详情](<!-- VUEJSON.E_component-instance.inject_inject-options-1.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.provide_provide-options-1.webUrl -->

> inject 1

<!-- VUEJSON.E_component-instance.inject_inject-options-1.code -->

> inject 2

<!-- VUEJSON.E_component-instance.inject_inject-options-2.code -->

:::


### mixins

一个包含组件选项对象的数组，这些选项都将被混入到当前组件的实例中。

`mixins` 选项接受一个 mixin 对象数组。这些 mixin 对象可以像普通的实例对象一样包含实例选项，它们将使用一定的选项合并逻辑与最终的选项进行合并。举例来说，如果你的 mixin 包含了一个 `created` 钩子，而组件自身也有一个，那么这两个函数都会被调用。

- `mixins` 仅支持通过字面量对象方式和 `defineMixin` 函数方式定义。
- 在 app-android 平台, `App.uvue` 不支持 `mixins`，全局 mixins 也不会对 `App.uvue` 生效，另外也不支持运行时根据条件动态构造mixins。
  ```ts
  const mixin1 = defineMixin({
    onLoad() {
      console.log('mixin1 onLoad')
    }
  })
  export default {
    mixins: [
      mixin1,
      {
        data() {
          return {
            mixin2: 'mixin2'
          }
        }
      }
    ]
  }
  ```
- 同名属性会被覆盖，同名生命周期会依次执行。同名属性的优先级如下：
  - 在 `app.mixin` 内嵌入的 mixin `<` 在 `app.mixin` 中声明的 mixin `<` 在 `page.mixin` 内嵌入的 mixin `<` 在 `page.mixin` 中声明的 mixin `<` 在 `component.mixin` 内嵌入的 mixin `<` 在 `component.mixin` 中声明的 mixin
  - 同名生命周期的执行顺序如下：
    1. 在 `app.mixin` 内嵌入的 mixin
    2. 在 `app.mixin` 中声明的 mixin
    3. 在 `page.mixin` 内嵌入的 mixin
    4. 在 `page.mixin` 中声明的 mixin
    5. 在 `component.mixin` 内嵌入的 mixin
    6. 在 `component.mixin` 中声明的 mixin

::: preview <!-- VUEJSON.E_component-instance.mixins_mixins-web.webUrl -->

示例 [详情](<!-- VUEJSON.E_component-instance.mixins-app-page-namesake.gitUrl -->)

> mixins-web

<!-- VUEJSON.E_component-instance.mixins_mixins-web.code -->

> mixins-app-page-namesake

<!-- VUEJSON.E_component-instance.mixins_mixins-app-page-namesake.code -->

> mixins-app

<!-- VUEJSON.E_component-instance.mixins_mixins-app.code -->

:::


## 其他杂项

<!-- VUEJSON.options_misc.compatibility -->
<!-- VUEJSON.options_misc.example -->

### 示例代码 @example

#### name

用于显式声明组件展示时的名称。

组件的名字有以下用途：

- 在组件自己的模板中递归引用自己时
- 在 Vue 开发者工具中的组件树显示时
- 在组件抛出的警告追踪栈信息中显示时

示例 [详情](<!-- VUEJSON.E_component-instance.circular-reference_circular-reference-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.circular-reference_circular-reference-options.webUrl -->


<!-- VUEJSON.E_component-instance.circular-reference_circular-reference-options.code -->

:::

#### inheritAttrs

用于控制是否启用默认的组件 attribute 透传行为。

默认情况下，父组件传递的，但没有被子组件解析为 props 的 attributes 绑定会被“透传”。这意味着当我们有一个单根节点的子组件时，这些绑定会被作为一个常规的 attribute 应用在子组件的根节点元素上。当你编写的组件想要在一个目标元素或其他组件外面包一层时，可能并不期望这样的行为。我们可以通过设置 `inheritAttrs` 为 `false` 来禁用这个默认行为。这些 attributes 可以通过 `$attrs` 这个实例属性来访问，并且可以通过 `v-bind` 来显式绑定在一个非根节点的元素上。

示例 [详情](<!-- VUEJSON.E_component-instance.mixins_mixins-web.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.mixins_mixins-web.webUrl -->

> inheritAttrs: true

<!-- VUEJSON.E_component-instance.mixins_components_Comp1.code -->

> inheritAttrs: false

<!-- VUEJSON.E_component-instance.mixins_components_Comp2.code -->

:::

#### components

一个对象，用于注册对当前组件实例可用的组件。

示例 [详情](<!-- VUEJSON.E_component-instance.attrs_attrs-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.attrs_attrs-options.webUrl -->

<!-- VUEJSON.E_component-instance.attrs_attrs-options.code -->

:::

- 参考[组件](./component.md)

## 组件实例 @component-instance

<!-- VUEJSON.component_instance.compatibility -->

### 示例代码 @example

#### $data

从 `data` 选项函数中返回的对象，会被组件赋为响应式。组件实例将会代理对其数据对象的属性访问。

##### 使用注意事项 @options-data

data内 $ 开头的属性不可直接使用 `this.$xxx`访问，需要使用 `this.$data['$xxx']` ，这是vue的规范

> 目前安卓端可以使用 this.$xxx 访问是Bug而非特性，请勿使用此特性。

示例

```vue
<template>
  <view></view>
</template>
<script>
export default {
  data() {
    return {
      $a: 1
    }
  },
  onReady() {
    console.log(this.$data['$a'] as number) // 1
  }
}
</script>
```


示例 [详情](<!-- VUEJSON.E_component-instance.data_data-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.data_data-options.webUrl -->
<!-- VUEJSON.E_component-instance.data_data-options.code -->
:::

#### $props

表示组件当前已解析的 props 对象。

示例 [详情](<!-- VUEJSON.E_component-instance.props_props-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.props_props-options.webUrl -->
<!-- VUEJSON.E_component-instance.props_props-options.code -->
:::

#### $el

该组件实例管理的 DOM 根节点。

示例 [详情](<!-- VUEJSON.E_component-instance.el_el-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.el_el-options.webUrl -->
<!-- VUEJSON.E_component-instance.el_el-options.code -->
:::

#### $options

已解析的用于实例化当前组件的组件选项。

示例 [详情](<!-- VUEJSON.E_component-instance.options_options-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.options_options-options.webUrl -->
<!-- VUEJSON.E_component-instance.options_options-options.code -->
:::

#### $parent

当前组件可能存在的父组件实例，如果当前组件是顶层组件，则为 `null`。

示例 [详情](<!-- VUEJSON.E_component-instance.parent_parent-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.parent_parent-options.webUrl -->
<!-- VUEJSON.E_component-instance.parent_parent-options.code -->
:::


#### $root

当前组件树的根组件实例。如果当前实例没有父组件，那么这个值就是它自己。

示例 [详情](<!-- VUEJSON.E_component-instance.root_root-options.gitUrl -->)

::: preview
<!-- VUEJSON.E_component-instance.root_root-options.code -->
:::


#### $slots

一个表示父组件所传入插槽的对象。

示例 [详情](<!-- VUEJSON.E_component-instance.slots_slots-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.slots_slots-options.webUrl -->
<!-- VUEJSON.E_component-instance.slots_slots-options.code -->
:::


#### $refs

一个包含 DOM 元素和组件实例的对象，通过模板引用注册。

示例 [详情](<!-- VUEJSON.E_component-instance.refs_refs-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.refs_refs-options.webUrl -->
<!-- VUEJSON.E_component-instance.refs_refs-options.code -->
:::


#### $attrs

一个包含了组件所有透传 attributes 的对象。

示例 [详情](<!-- VUEJSON.E_component-instance.attrs_attrs-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.attrs_attrs-options.webUrl -->
<!-- VUEJSON.E_component-instance.attrs_attrs-options.code -->
:::


#### $watch()

用于命令式地创建侦听器的 API。

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch_watch-options.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch_watch-options.webUrl -->
<!-- VUEJSON.E_reactivity.core_watch_watch-options.code -->
:::


#### $emit()

在当前组件触发一个自定义事件。任何额外的参数都会传递给事件监听器的回调函数。

示例 [详情](<!-- VUEJSON.E_component-instance.emit-function_emit-function-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.emit-function_emit-function-options.webUrl -->
<!-- VUEJSON.E_component-instance.emit-function_emit-function-options.code -->
:::


#### $forceUpdate()

强制该组件重新渲染。

示例 [详情](<!-- VUEJSON.E_component-instance.force-update_force-update-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.force-update_force-update-options.webUrl -->
<!-- VUEJSON.E_component-instance.force-update_force-update-options.code -->
:::


#### $nextTick()

绑定在实例上的 nextTick() 函数。

##### 使用注意事项 @options-nextTick

目前 $nextTick 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的，所以 $nextTick 不能保证 DOM 排版以及渲染完毕。\
如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/unielement.md) 对象。\
在修改 DOM 后，立刻使用 [Element](../dom/unielement.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。


示例 [详情](<!-- VUEJSON.E_component-instance.nextTick_nextTick-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.nextTick_nextTick-options.webUrl -->
<!-- VUEJSON.E_component-instance.nextTick_nextTick-options.code -->
:::
