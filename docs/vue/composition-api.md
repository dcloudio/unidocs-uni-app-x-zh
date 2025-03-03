# 组合式 API

::: warning 注意
- 暂不支持 `<script setup>` 和 `<script>` 同时使用，如果需要配置 `options` 内容，比如 `name`，可以使用 `defineOptions`。
- 暂不支持顶层 `await`。
- 暂不支持 `<script setup>` 配置 `generic` 泛型类型参数。
- `App.uvue` 暂不支持组合式 API。
:::

## 响应式: 核心

<!-- VUEJSON.reactivity_core.compatibility -->

### 示例代码 @example

#### ref

接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性 `.value`。

示例 [详情](<!-- VUEJSON.E_reactivity.core_ref_ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_ref_ref.webUrl -->

<!-- VUEJSON.E_reactivity.core_ref_ref.code -->

:::

- 使用 `<template ref>`

示例 [详情](<!-- VUEJSON.E_component-instance.refs_refs-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.refs_refs-composition.webUrl -->

<!-- VUEJSON.E_component-instance.refs_refs-composition.code -->

:::

#### watch

侦听一个或多个响应式数据源，并在数据源变化时调用所给的回调函数。

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch_watch-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch_watch-composition.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch_watch-composition.code -->

:::


#### computed

接受一个 getter 函数，返回一个只读的响应式 [ref](#ref) 对象。该 ref 通过 `.value` 暴露 getter 函数的返回值。它也可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 ref 对象。

::: warning 注意
- `computed()` 需通过泛型指定返回值类型。
  ```ts
  const count = ref(0)
  const doubleCount = computed<number>(() : number => {
    return count.value * 2
  })
  ```
- 目前需要可传参的计算属性时，需要手动指定返回值类型
  ```ts
  const stateText = computed(() : (state : number) => string => {
    return (state : number) : string => {
      const stateArr = ['未审核', '审核中', '审核通过']
      return stateArr[state]
    }
  })
  stateText.value(1)
  ```  
:::

示例 [详情](<!-- VUEJSON.E_reactivity.core_computed_computed-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_computed_computed-composition.webUrl -->

<!-- VUEJSON.E_reactivity.core_computed_computed-composition.code -->

:::

#### reactive

返回一个对象的响应式代理。

- 详细信息

  响应式转换是“深层”的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何 [ref](#ref) 属性，同时保持响应性。

  若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 [shallowReactive()](#shallowreactive) 作替代。

::: warning 注意
- `reactive` 在 app-android 平台目前不支持对 class 做响应式，推荐使用 type 定义存储数据的对象类型。
:::

- 示例 [详情](<!-- VUEJSON.E_reactivity.core_reactive_reactive.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_reactive_reactive.webUrl -->

<!-- VUEJSON.E_reactivity.core_reactive_reactive.code -->

:::

#### readonly

接受一个对象 (不论是响应式还是普通的) 或是一个 [ref](#ref)，返回一个原值的只读代理。

- 详细信息

  只读代理是深层的：对任何嵌套属性的访问都将是只读的。它的 [ref](#ref) 解包行为与 `reactive()` 相同，但解包得到的值是只读的。

  要避免深层级的转换行为，请使用 [shallowReadonly()](#shallowreadonly) 作替代。

示例 [详情](<!-- VUEJSON.E_reactivity.core_readonly_readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_readonly_readonly.webUrl -->

<!-- VUEJSON.E_reactivity.core_readonly_readonly.code -->

:::

#### watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

- 详细信息

  第一个参数就是要运行的副作用函数。这个副作用函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求 (参见下面的示例)。

  第二个参数是一个可选的选项，可以用来调整副作用的刷新时机或调试副作用的依赖。

  默认情况下，侦听器将在组件渲染之前执行。设置 `flush: 'post'` 将会使侦听器延迟到组件渲染之后再执行。在某些特殊情况下 (例如要使缓存失效)，可能有必要在响应式依赖发生改变时立即触发侦听器。这可以通过设置 `flush: 'sync'` 来实现。然而，该设置应谨慎使用，因为如果有多个属性同时更新，这将导致一些性能和数据一致性的问题。

  返回值是一个用来停止该副作用的函数。

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch-effect_watch-effect.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch-effect_watch-effect.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch-effect_watch-effect.code -->

:::

#### watchPostEffect

[watchEffect()](#watcheffect) 使用 `flush: 'post'` 选项时的别名。

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch-post-effect_watch-post-effect.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch-post-effect_watch-post-effect.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch-post-effect_watch-post-effect.code -->

:::

#### watchSyncEffect

[watchEffect()](#watcheffect) 使用 `flush: 'sync'` 选项时的别名。

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch-sync-effect_watch-sync-effect.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch-sync-effect_watch-sync-effect.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch-sync-effect_watch-sync-effect.code -->

:::

## 响应式: 工具

<!-- VUEJSON.reactivity_utilities.compatibility -->
<!-- VUEJSON.reactivity_utilities.example -->

::: warning 注意
- `toRefs()` 仅支持 `Array` 和 `UTSJSONObject`, 不支持自定义类型。
:::

### 示例代码 @example

#### isRef

检查某个值是否为 ref。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-ref_is-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-ref_is-ref.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-ref_is-ref.code -->

:::

#### unref

如果参数是 ref，则返回内部值，否则返回参数本身。这是 `val = isRef(val) ? val.value : val` 计算的一个语法糖。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_un-ref_un-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_un-ref_un-ref.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_un-ref_un-ref.code -->

:::

#### toRef

可以将值、refs 或 getters 规范化为 refs。

也可以基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_to-ref_to-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_to-ref_to-ref.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_to-ref_to-ref.code -->

:::

#### toValue

将值、refs 或 getters 规范化为值。这与 [unref()](#unref) 类似，不同的是此函数也会规范化 getter 函数。如果参数是一个 getter，它将会被调用并且返回它的返回值。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_to-value_to-value.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_to-value_to-value.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_to-value_to-value.code -->

:::

#### toRefs

将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 [toRef()](#toref) 创建的。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_to-refs_to-refs.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_to-refs_to-refs.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_to-refs_to-refs.code -->

:::

#### isProxy

检查一个对象是否是由 [reactive()](#reactive)、[readonly()](#readonly)、[shallowReactive()](#shallowreactive) 或 [shallowReadonly()](#shallowreadonly) 创建的代理。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-proxy_is-proxy.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-proxy_is-proxy.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-proxy_is-proxy.code -->

:::

#### isReactive

检查一个对象是否是由 [reactive()](#reactive) 或 [shallowReactive()](#shallowreactive) 创建的代理。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-reactive_is-reactive.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-reactive_is-reactive.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-reactive_is-reactive.code -->

:::

#### isReadonly

检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。

通过 [readonly()](#readonly) 和 [shallowReadonly()](#shallowreadonly) 创建的代理都是只读的，因为他们是没有 set 函数的 [computed()](#computed) ref。

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-readonly_is-readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-readonly_is-readonly.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-readonly_is-readonly.code -->

:::

## 响应式: 进阶

<!-- VUEJSON.reactivity_advanced.compatibility -->
<!-- VUEJSON.reactivity_advanced.example -->

### 示例代码 @example

#### customRef

创建一个自定义的 ref，显式声明对其依赖追踪和更新触发的控制方式。

- 详细信息

  `customRef()` 预期接收一个工厂函数作为参数，这个工厂函数接受 `track` 和 `trigger` 两个函数作为参数，并返回一个带有 get 和 set 方法的对象。

  一般来说，`track()` 应该在 `get()` 方法中调用，而 `trigger()` 应该在 `set()` 中调用。然而事实上，你对何时调用、是否应该调用他们有完全的控制权。

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_custom-ref_custom-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_custom-ref_custom-ref.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_custom-ref_custom-ref.code -->

:::

#### effectScope

创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。对于该 API 的使用细节

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_effect-scope_effect-scope.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_effect-scope_effect-scope.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_effect-scope_effect-scope.code -->

:::

#### getCurrentScope

如果有的话，返回当前活跃的 effect 作用域。

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_get-current-scope_get-current-scope.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_get-current-scope_get-current-scope.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_get-current-scope_get-current-scope.code -->

:::

#### onScopeDispose

在当前活跃的 effect 作用域上注册一个处理回调函数。当相关的 effect 作用域停止时会调用这个回调函数。

这个方法可以作为可复用的组合式函数中 `onUnmounted` 的替代品，它并不与组件耦合，因为每一个 Vue 组件的 `setup()` 函数也是在一个 effect 作用域中调用的。

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_on-scope-dispose_on-scope-dispose.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_on-scope-dispose_on-scope-dispose.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_on-scope-dispose_on-scope-dispose.code -->

:::

#### shallowReactive

[reactive()](#reactive) 的浅层作用形式。

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_shallow-reactive_shallow-reactive.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_shallow-reactive_shallow-reactive.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_shallow-reactive_shallow-reactive.code -->

:::

#### shallowReadonly

[readonly()](#readonly) 的浅层作用形式

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_shallow-readonly_shallow-readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_shallow-readonly_shallow-readonly.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_shallow-readonly_shallow-readonly.code -->

:::

#### shallowRef

[ref()](#ref) 的浅层作用形式。

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_shallow-ref_shallow-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_shallow-ref_shallow-ref.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_shallow-ref_shallow-ref.code -->

:::

#### toRaw

根据一个 Vue 创建的代理返回其原始对象。

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_to-raw_to-raw.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_to-raw_to-raw.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_to-raw_to-raw.code -->

:::

#### triggerRef

强制触发依赖于一个[浅层 ref](#shallowref) 的副作用，这通常在对浅引用的内部值进行深度变更后使用。

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_trigger-ref_trigger-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_trigger-ref_trigger-ref.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_trigger-ref_trigger-ref.code -->

:::


## 生命周期钩子 @lifecycle-composition

> [页面及组件生命周期流程图](../page.md#lifecycleflow)

### 页面生命周期 @page-lifecycle-composition

#### 兼容性 @page-lifecycle-compatibility

[页面生命周期](../page.md#lifecycle)

示例 [详情](<!-- VUEJSON.E_lifecycle.page_page-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.page_page-composition.webUrl -->

<!-- VUEJSON.E_lifecycle.page_page-composition.code -->

:::

### 组件生命周期 @page-component-composition

#### 兼容性 @component-lifecycle-compatibility

<!-- VUEJSON.composition_lifecycle.compatibility -->

#### onMounted、onUnmounted 使用注意事项 @mounted-unmounted-tips

目前 App平台 onMounted、onUnmounted 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的的，所以 onMounted、onUnmounted 不能保证 DOM 排版以及渲染完毕。\
如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/unielement.md) 对象。\
在修改 DOM 后，立刻使用 [Element](../dom/unielement.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。

注：页面的 onReady 生命周期可以获取到排版后的节点信息

#### onActivated、onDeactivated 使用注意事项 @activated-deactivated-tips

当 A 页面存在 `keepAlive` 组件，A 页面 `navigateTo` B 页面时
- Web 端 A 页面中 `keepAlive` 的组件会触发 `onDeactivated` 生命周期
- App 端 A 页面中 `keepAlive` 的组件不会触发 `onDeactivated` 生命周期

当 B 页面 back 返回 A 页面时
- Web 端 A 页面中 `keepAlive` 的组件会触发 `onActivated` 生命周期
- App 端 A 页面中 `keepAlive` 的组件不会触发 `onActivated` 生命周期

示例 [详情](<!-- VUEJSON.E_lifecycle.component_ChildComponentComposition.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.component_ChildComponentComposition.webUrl -->

<!-- VUEJSON.E_lifecycle.component_ChildComponentComposition.code -->

:::


## \<script setup> @script_setup

### 基本语法 @basic-syntax

- 仅支持 `export default {}` 方式定义组件。
- `data` 仅支持函数返回对象字面量方式。
  ```ts
  <script lang="uts">
    export default {
      data() {
        return {
          // 必须写这里
        }
      }
    }
  </script>
  ```
<!-- VUEJSON.script.description -->

<!-- VUEJSON.script.attribute -->

<!-- VUEJSON.script.event -->

<!-- VUEJSON.script.example -->

<!-- VUEJSON.script.compatibility -->

<!-- VUEJSON.script.children -->

<!-- VUEJSON.script.reference -->

### 示例 @example

示例 [详情](<!-- VUEJSON.E_component-instance.setup-function_setup-function.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.setup-function_setup-function.webUrl -->

<!-- VUEJSON.E_component-instance.setup-function_setup-function.code -->

:::


## 单文件组件中方法兼容性 @single-file-component-script-methods

<!-- VUEJSON.single_file_component_script.compatibility -->


### defineProps()

仅支持数组字面量、对象字面量定义（等同于 `options` 中的 `props`规则）及使用纯类型参数的方式来声明。

#### 示例

[详情](<!-- VUEJSON.E_component-instance.props_props-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.props_props-composition.webUrl -->

<!-- VUEJSON.E_component-instance.props_props-composition.code -->

:::


### defineEmits()

仅支持数组字面量和纯类型参数的方式来声明。

```ts
// 数组字面量
const emit = defineEmits(['change'])

// 纯类型参数
const emit = defineEmits<{
  (e : 'change', id : number) : void
}>()
const emit = defineEmits<{
  // 具名元组语法
  change : [id: number]
}>()

```

#### 示例

[详情](<!-- VUEJSON.E_component-instance.emit-function_emit-function-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.emit-function_emit-function-composition.webUrl -->

<!-- VUEJSON.E_component-instance.emit-function_child-composition.code -->

:::

### defineOptions()

仅支持对象字面量方式定义。

```ts
defineOptions({
  data() {
    return {
      count: 0,
      price: 10,
      total: 0
    }
  },
  computed: {
    doubleCount() : number {
      return this.count * 2
    },
  },
  watch: {
    count() {
      this.total = this.price * this.count
    },
  },
  methods: {
    increment() {
      this.count++
    }
  }
})
```

#### 示例

[详情](<!-- VUEJSON.E_component-instance.options_options-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.options_options-composition.webUrl -->

<!-- VUEJSON.E_component-instance.options_options-composition.code -->

:::

### defineExpose()

使用 `<script setup>` 的组件是默认关闭的——即通过模板引用或者 $parent 链获取到的组件的公开实例，不会暴露任何在 `<script setup>` 中声明的绑定。

可以通过 `defineExpose` 编译器宏来显式指定在 `<script setup>` 组件中要暴露出去的属性，注意：

- 仅支持对象字面量方式定义 `defineExpose` 导出的属性, 例如：
```js
defineExpose({
  count
})
```
- 导出的变量或方法，必须是 `setup` 中定义的，暂不支持外部定义

示例 [详情](<!-- VUEJSON.E_component-instance.data_data-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.data_data-composition.webUrl -->
<!-- VUEJSON.E_component-instance.data_data-composition.code -->
:::


### defineModel()

这个宏可以用来声明一个双向绑定 prop，通过父组件的 `v-model` 来使用。组件 [v-model](./built-in.md#v-model) 指南中也讨论了示例用法。

在底层，这个宏声明了一个 model prop 和一个相应的值更新事件。如果第一个参数是一个字符串字面量，它将被用作 prop 名称；否则，prop 名称将默认为 `"modelValue"`。在这两种情况下，你都可以再传递一个额外的对象，它可以包含 prop 的选项和 model ref 的值转换选项。

**注意：** android 端 `defineModel` 暂不支持创建 `Array` 类型 `prop`。

#### 示例

[详情](<!-- VUEJSON.E_directive.v-model_Foo-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-model_v-model-composition.webUrl -->

<!-- VUEJSON.E_directive.v-model_Foo-composition.code -->

:::


### defineSlots()

这个宏可以用于为 IDE 提供插槽名称和 props 类型检查的类型提示。

`defineSlots()` 只接受类型参数，没有运行时参数。类型参数应该是一个类型字面量，其中属性键是插槽名称，值类型是插槽函数。函数的第一个参数是插槽期望接收的 props，其类型将用于模板中的插槽 props。返回类型目前被忽略，可以是 `any`，但我们将来可能会利用它来检查插槽内容。

它还返回 `slots` 对象，该对象等同于在 setup 上下文中暴露或由 `useSlots()` 返回的 `slots` 对象。

#### 示例

[详情](<!-- VUEJSON.E_directive.v-slot_Foo-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-slot_v-slot-composition.webUrl -->

<!-- VUEJSON.E_directive.v-slot_Foo-composition.code -->

:::

### useSlots() 和 useAttrs()

在 `<script setup>` 使用 `slots` 和 `attrs` 的情况应该是相对来说较为罕见的，因为可以在模板中直接通过 `$slots` 和 `$attrs` 来访问它们。在你的确需要使用它们的罕见场景中，可以分别用 `useSlots` 和 `useAttrs` 两个辅助函数：

#### useSlots() 示例 @useslots-example

[详情](<!-- VUEJSON.E_directive.v-slot_v-slot-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-slot_v-slot-composition.webUrl -->

<!-- VUEJSON.E_directive.v-slot_v-slot-composition.code -->

:::

#### useAttrs() 示例 @useattrs-example

[详情](<!-- VUEJSON.E_component-instance.attrs_child-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.attrs_attrs-composition.webUrl -->

<!-- VUEJSON.E_component-instance.attrs_child-composition.code -->

:::

### 与渲染函数一起使用


示例 [详情](<!-- VUEJSON.E_render-function.render_render-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.render_render-composition.webUrl -->
<!-- VUEJSON.E_render-function.render_render-composition.code -->
:::
