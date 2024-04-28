# 选项式 API @options-api

## 状态选项

::: warning 注意
- `watch immediate` 第一次调用时，App-Android 平台旧值为初始值，web 平台为 null。
:::

<!-- VUEJSON.options_state.compatibility -->

### 示例代码

#### data

示例 [详情](<!-- VUEJSON.E_component-instance.data_data-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.data_data-options.webUrl -->
<!-- VUEJSON.E_component-instance.data_data-options.code -->
:::

### props

示例 [详情](<!-- VUEJSON.E_component-instance.props_props-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.props_props-options.webUrl -->
<!-- VUEJSON.E_component-instance.props_props-options.code -->
:::

#### computed

示例 [详情](<!-- VUEJSON.E_reactivity.core_computed_computed-options.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_computed_computed-options.webUrl -->

<!-- VUEJSON.E_reactivity.core_computed_computed-options.code -->

:::

#### methods

[详情点击查看](./component.md#page-call-component-method)

#### watch

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch_watch-options.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch_watch-options.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch_watch-options.code -->

:::

#### emits

示例 [详情](<!-- VUEJSON.E_component-instance.emit-function_child-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.emit-function_child-options.webUrl -->

<!-- VUEJSON.E_component-instance.emit-function_child-options.code -->

:::

## 渲染选项 @rendering-options

<!-- VUEJSON.options_rendering.compatibility -->

### 示例代码

#### template

示例 [详情](<!-- VUEJSON.E_built-in.component_template_template-options.gitUrl -->)

::: preview <!-- VUEJSON.E_built-in.component_template_template-options.webUrl -->
<!-- VUEJSON.E_built-in.component_template_template-options.code -->
:::

#### render

- 选项式 API

示例 [详情](<!-- VUEJSON.E_rendering.render_render.gitUrl -->)

::: preview <!-- VUEJSON.E_rendering.render_render.webUrl -->
<!-- VUEJSON.E_rendering.render_render.code -->
:::

- \<script setup>

示例 [详情](<!-- VUEJSON.E_component-instance.setup-function_RenderFunction.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.setup-function_RenderFunction.webUrl -->
<!-- VUEJSON.E_component-instance.setup-function_RenderFunction.code -->
:::

#### slots

示例 [详情](<!-- VUEJSON.E_component-instance.slots_slots-options.gitUrl -->)

作用域插槽需在组件中指定插槽数据类型
::: preview <!-- VUEJSON.E_component-instance.slots_slots-options.webUrl -->

<!-- VUEJSON.E_component-instance.slots_slots-options.code -->

:::

## 生命周期选项 @lifecycle-options

<!-- VUEJSON.options_lifecycle.compatibility -->

### mounted、unmounted 使用注意事项

目前 mounted、unmounted 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的的，所以 mounted、unmounted 不能保证 DOM 排版以及渲染完毕。\
如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/unielement.md) 对象。\
在修改 DOM 后，立刻使用 [Element](../dom/unielement.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。


示例 [详情](<!-- VUEJSON.E_lifecycle.page_page-options.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.page_page-options.webUrl -->

<!-- VUEJSON.E_lifecycle.page_page-options.code -->

:::


## 组合选项 @options-composition

<!-- VUEJSON.options_composition.compatibility -->

### inject

当使用 `inject` 声明从上层提供方注入的属性时，支持两种写法：字符串数组和对象。推荐使用对象写法，因为当使用数组方法时，类型会被推导为 `any | null` 类型。\
使用对象写法时，额外增加 `type` 属性用于标记类型。如果注入的属性类型不是基础数据类型，需要通过 `PropType` 来标记类型：

示例 [详情](<!-- VUEJSON.E_component-instance.inject_inject-options-1.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.inject_inject-options-1.webUrl -->

> inject 1

<!-- VUEJSON.E_component-instance.inject_inject-options-1.code -->

> inject 2

<!-- VUEJSON.E_component-instance.inject_inject-options-2.code -->

:::


### mixins

- `mixins` 仅支持通过字面量对象方式和 `defineMixin` 函数方式定义。\
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

::: preview <!-- VUEJSON.E_component-instance.mixins-app-page-namesake.webUrl -->

示例 [详情](<!-- VUEJSON.E_component-instance.mixins-app-page-namesake.gitUrl -->)

> mixins-app-page-namesake

<!-- VUEJSON.E_component-instance.mixins-app-page-namesake.code -->

> mixins-app

<!-- VUEJSON.E_component-instance.mixins-app.code -->

> mixins-web

<!-- VUEJSON.E_component-instance.mixins-web.code -->

:::


## 其他杂项

<!-- VUEJSON.options_misc.compatibility -->
<!-- VUEJSON.options_misc.example -->

### 示例代码

#### name

示例 [详情](<!-- VUEJSON.E_component-instance.circular-reference_ChildB-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.circular-reference_ChildB-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.circular-reference_ChildB-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.circular-reference_ChildC-composition.code -->

:::

#### inheritAttrs

示例 [详情](<!-- VUEJSON.E_component-instance.mixins_components_Comp1.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.mixins_components_Comp1.webUrl -->

> inheritAttrs: true

<!-- VUEJSON.E_component-instance.mixins_components_Comp1.code -->

> inheritAttrs: false

<!-- VUEJSON.E_component-instance.mixins_components_Comp2.code -->

:::

#### components

示例 [详情](<!-- VUEJSON.E_component-instance.circular-reference_ChildB-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.circular-reference_ChildB-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.circular-reference_ChildB-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.circular-reference_ChildB-composition.code -->

:::

## 组件实例 @component-instance

<!-- VUEJSON.component_instance.compatibility -->
<!-- VUEJSON.component_instance.example -->

### $nextTick 使用注意事项 @options-nextTick

目前 $nextTick 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的，所以 $nextTick 不能保证 DOM 排版以及渲染完毕。\
如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/unielement.md) 对象。\
在修改 DOM 后，立刻使用 [Element](../dom/unielement.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。

### $data 使用注意事项 @options-data

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
