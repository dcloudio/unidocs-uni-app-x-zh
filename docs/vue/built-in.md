# 内置内容

## 指令 @directives

<!-- VUEJSON.directives.compatibility -->

### v-text

更新元素的文本内容。

- 期望的绑定值类型：string
- 详细信息

  v-text 将覆盖元素中所有现有的内容。

示例 [详情](<!-- VUEJSON.E_directive.v-text_v-text-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-text_v-text-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-text_v-text-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-text_v-text-composition.code -->

:::

### v-html

更新元素的内容，并且不会被解析。

::: warning 注意
在 `App-android` 平台，`v-html` 指令通过编译为 [rich-text](../component/rich-text.md) 组件实现。因此，`v-html` 指令的内容必须是 `rich-text` 支持的格式, 并且要遵循标签嵌套规则，例如， `swiper` 标签内只允许嵌套 `swiper-item` 标签。\
同时，受限于 `rich-text` 组件不支持 `class` 样式，`v-html` 指令中同样不支持 `class` 样式。\
绑定 `v-html` 的标签内的内容会被忽略，`v-html` 指令的内容会编译为 `rich-text` 组件渲染为该标签的子节点。
:::

示例 [详情](<!-- VUEJSON.E_directive.v-html_v-html-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-html_v-html-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-html_v-html-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-html_v-html-composition.code -->

:::


### v-show

基于表达式值的真假性，来改变元素的可见性。

示例 [详情](<!-- VUEJSON.E_directive.v-show_v-show-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-show_v-show-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-show_v-show-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-show_v-show-composition.code -->

:::

### v-if

基于表达式值的真假性，来条件性地渲染元素或者模板片段。

- 详细信息

  当 `v-if` 元素被触发，元素及其所包含的指令/组件都会销毁和重构。如果初始条件是假，那么其内部的内容根本都不会被渲染。

  可用于 `<template>` 表示仅包含文本或多个元素的条件块。

示例 [详情](<!-- VUEJSON.E_directive.v-if_v-if-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-if_v-if-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-if_v-if-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-if_v-if-composition.code -->

:::

### v-for

基于原始数据多次渲染元素或模板块。

- 期望的绑定值类型：`Array | UTSJSONObject | number | string | Iterable`

- 详细信息

  指令值必须使用特殊语法 `alias in expression` 为正在迭代的元素提供一个别名：

  ```vue
  <view v-for="item in items">
  {{ item.text }}
  </view>
  ```
  `v-for` 的默认方式是尝试就地更新元素而不移动它们。要强制其重新排序元素，你需要用特殊 attribute `key` 来提供一个排序提示：

  ```vue
  <view v-for="item in items" :key="item.id">
  {{ item.text }}
  </view>
  ```

示例 [详情](<!-- VUEJSON.E_directive.v-for_v-for-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-for_v-for-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-for_v-for-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-for_v-for-composition.code -->

:::

### v-on

给元素绑定事件监听器。

- 缩写：`@`

- 期望的绑定值类型：`Function | Object (不带参数)`

- 参数：`event` (使用对象语法则为可选项)

- 修饰符
  - `.stop` - 调用 `event.stopPropagation()`
  - `.once` - 最多触发一次处理函数。

- 详见[事件修饰符](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)。

示例 [详情](<!-- VUEJSON.E_directive.v-on_v-on-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-on_v-on-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-on_v-on-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-on_v-on-composition.code -->

:::

### v-bind

动态的绑定一个或多个 attribute，也可以是组件的 prop。

- 缩写：
  - `:` 或者 `.` (当使用 `.prop` 修饰符)
  - 值可以省略 (当 attribute 和绑定的值同名时)

- 期望：`any (带参数) | Object (不带参数)`

- 参数：`attrOrProp (可选的)`

- 用途

  当用于绑定 `class` 或 `style` attribute，`v-bind` 支持额外的值类型如数组或对象。

  当用于组件 props 绑定时，所绑定的 props 必须在子组件中已被正确声明。

  当不带参数使用时，可以用于绑定一个包含了多个 attribute 名称-绑定值对的对象。

示例 [详情](<!-- VUEJSON.E_directive.v-bind_v-bind-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-bind_v-bind-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-bind_v-bind-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-bind_v-bind-composition.code -->

:::

### v-model

在表单输入元素或组件上创建双向绑定。

- 期望的绑定值类型：根据表单输入元素或组件输出的值而变化

- 仅限：
  - `<input>`
  - `<textarea>`

- 修饰符 <Badge text="仅 Android"/>
  - `.lazy` - 监听 `change` 事件而不是 `input` 事件
  - `.number` - 将输入的合法字符串转为数字
  - `.trim` - 移除输入内容两端空格

示例 [详情](<!-- VUEJSON.E_directive.v-model_v-model-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-model_v-model-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-model_v-model-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-model_v-model-composition.code -->

:::

### v-pre

跳过该元素及其所有子元素的编译。

- 无需传入

- 详细信息

  元素内具有 `v-pre`，所有 Vue 模板语法都会被保留并按原样渲染。最常见的用例就是显示原始双大括号标签及内容。

示例 [详情](<!-- VUEJSON.E_directive.v-pre_v-pre.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-pre_v-pre.webUrl -->

<!-- VUEJSON.E_directive.v-pre_v-pre.code -->

:::

### v-once

仅渲染元素和组件一次，并跳过之后的更新。

- 无需传入

- 详细信息

  在随后的重新渲染，元素/组件及其所有子项将被当作静态内容并跳过渲染。这可以用来优化更新时的性能。

示例 [详情](<!-- VUEJSON.E_directive.v-once_v-once-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-once_v-once-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-once_v-once-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-once_v-once-composition.code -->

:::

### v-slot

用于声明具名插槽或是期望接收 props 的作用域插槽。

- 缩写：`#`

- 期望的绑定值类型：能够合法在函数参数位置使用的 JavaScript 表达式。支持解构语法。绑定值是可选的——只有在给作用域插槽传递 props 才需要。

- 参数：插槽名 (可选，默认是 `default`)

- 仅限：
  - `<template>`
  - [components](./component.md) (用于带有 prop 的单个默认插槽)

示例 [详情](<!-- VUEJSON.E_directive.v-slot_v-slot-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-slot_v-slot-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-slot_v-slot-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-slot_v-slot-composition.code -->

:::

### v-memo

- 期望的绑定值类型：`any[]`

- 详细信息

  缓存一个模板的子树。在元素和组件上都可以使用。为了实现缓存，该指令需要传入一个固定长度的依赖值数组进行比较。如果数组里的每个值都与最后一次的渲染相同，那么整个子树的更新将被跳过。举例来说：

    ```vue
    <view v-memo="[valueA, valueB]">
      ...
    </view>
    ```

  当组件重新渲染，如果 `valueA` 和 `valueB` 都保持不变，这个 `<view>` 及其子项的所有更新都将被跳过。实际上，甚至虚拟 DOM 的 vnode 创建也将被跳过，因为缓存的子树副本可以被重新使用。

  正确指定缓存数组很重要，否则应该生效的更新可能被跳过。`v-memo` 传入空依赖数组 (`v-memo="[]"`) 将与 `v-once` 效果相同。

  v-memo 仅用于性能至上场景中的微小优化，应该很少需要。最常见的情况可能是有助于渲染海量 v-for 列表 (长度超过 1000 的情况)：

  当组件的 `selected` 状态改变，默认会重新创建大量的 vnode，尽管绝大部分都跟之前是一模一样的。`v-memo` 用在这里本质上是在说“只有当该项的被选中状态改变时才需要更新”。这使得每个选中状态没有变的项能完全重用之前的 vnode 并跳过差异比较。注意这里 memo 依赖数组中并不需要包含 `item.id`，因为 Vue 也会根据 item 的 `:key` 进行判断。

  ::: warning 警告
  当搭配 `v-for` 使用 `v-memo`，确保两者都绑定在同一个元素上。`v-memo` 不能用在 `v-for` 内部。
  :::

  `v-memo` 也能被用于在一些默认优化失败的边际情况下，手动避免子组件出现不需要的更新。但是一样的，开发者需要负责指定正确的依赖数组以免跳过必要的更新。

示例 [详情](<!-- VUEJSON.E_directive.v-memo_v-memo-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-memo_v-memo-options.webUrl -->

>选项式 API

<!-- VUEJSON.E_directive.v-memo_v-memo-options.code -->

> 组合式 API

<!-- VUEJSON.E_directive.v-memo_v-memo-composition.code -->

:::

## 组件 @component

- [props](../component/README.md#props)
- [自定义事件](../component/README.md#自定义事件)
- [计算属性和侦听器](../component/README.md#计算属性和侦听器)
- [作用域插槽的类型](../component/README.md#作用域插槽的类型)
- [监听页面生命周期](../component/README.md#监听页面生命周期)
- [vue 与 uvue 不同文件后缀的优先级](../component/README.md#priority)

::: warning 注意
- App 端，如需页面级滚动，根节点必须是 `scroll-view` 标签。
:::

### \<KeepAlive> @keep-alive

<!-- VUEJSON.keep-alive.description -->

<!-- VUEJSON.keep-alive.attribute -->

<!-- VUEJSON.keep-alive.event -->

<!-- VUEJSON.keep-alive.example -->

<!-- VUEJSON.keep-alive.compatibility -->

<!-- VUEJSON.keep-alive.children -->

<!-- VUEJSON.keep-alive.reference -->

### \<Transition> @transition

<!-- VUEJSON.transition.description -->

<!-- VUEJSON.transition.attribute -->

<!-- VUEJSON.transition.event -->

<!-- VUEJSON.transition.example -->

<!-- VUEJSON.transition.compatibility -->

<!-- VUEJSON.transition.children -->

<!-- VUEJSON.transition.reference -->


### \<TransitionGroup> @transition-group

<!-- VUEJSON.transition-group.description -->

<!-- VUEJSON.transition-group.attribute -->

<!-- VUEJSON.transition-group.event -->

<!-- VUEJSON.transition-group.example -->

<!-- VUEJSON.transition-group.compatibility -->

<!-- VUEJSON.transition-group.children -->

<!-- VUEJSON.transition-group.reference -->


### \<Teleport> @teleport

<!-- VUEJSON.teleport.description -->

<!-- VUEJSON.teleport.attribute -->

**注意：**
- App-Android 平台暂不支持动态修改 `to` 属性。

<!-- VUEJSON.teleport.event -->

<!-- VUEJSON.teleport.example -->

<!-- VUEJSON.teleport.compatibility -->

<!-- VUEJSON.teleport.children -->

<!-- VUEJSON.teleport.reference -->

## 特殊元素 @special-elements

### \<template> @template

<!-- VUEJSON.template.description -->

`<template>` 有2个用途：
1. 作为单文件组件规范的模板根节点。在 `<template>` 下面放置页面模板真正的组件内容。
此时lang属性生效。但vue指令不生效。

2. 在根 `<template>` 下面，继续放置`<template>`虚节点，可以让多个组件遵守相同的vue指令。
比如下面的示例中，通过`<template v-if="isShow">`包裹了text和button，让2个组件共同遵守同一个`v-if`指令，且不增加层级。
如果把这个子`<template>`改成`<view>`，会增加一层节点，层级太多会影响性能。
```vue
<template>
  <view>
    <template v-if="isShow">
      <text>abc</text>
      <button>按钮</button>
    </template>
		<view></view>
  </view>
</template>
```

此时lang属性不生效。

::: warning 注意
对非根的 `<template>` 的特殊处理，只有在它与以下任一指令一起使用时才会被触发：

- `v-if`、`v-else-if` 或 `v-else`
- `v-for`
- `v-slot`

正常情况下，应该搭配如上vue指令使用。但异常情况下，如果这些指令都不存在，那么容错策略如下：\
在 `Web` 端将被渲染成一个[原生的 `<template>` 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)；\
在 `App` 端将被渲染成 `view`。此时会多个层级。

:::

<!-- VUEJSON.template.attribute -->

<!-- VUEJSON.template.event -->

<!-- VUEJSON.template.example -->

<!-- VUEJSON.template.compatibility -->

<!-- VUEJSON.template.children -->

<!-- VUEJSON.template.reference -->


### \<slot> @slot

<!-- VUEJSON.slot.description -->

<!-- VUEJSON.slot.attribute -->

<!-- VUEJSON.slot.event -->

<!-- VUEJSON.slot.example -->

<!-- VUEJSON.slot.compatibility -->

<!-- VUEJSON.slot.children -->

<!-- VUEJSON.slot.reference -->

### \<component> @component

<!-- VUEJSON.component.description -->

<!-- VUEJSON.component.attribute -->

<!-- VUEJSON.component.event -->

<!-- VUEJSON.component.example -->

<!-- VUEJSON.component.compatibility -->

<!-- VUEJSON.component.children -->

<!-- VUEJSON.component.reference -->

## 特殊 Attributes @special-attributes

<!-- VUEJSON.special_attributes.compatibility -->

<!-- VUEJSON.special_attributes.example -->

### key

`key` 这个特殊的 attribute 主要作为 Vue 的虚拟 DOM 算法提示，在比较新旧节点列表时用于识别 vnode。

- 预期：`number | string | symbol`

- 详细信息

  在没有 key 的情况下，Vue 将使用一种最小化元素移动的算法，并尽可能地就地更新/复用相同类型的元素。如果传了 key，则将根据 key 的变化顺序来重新排列元素，并且将始终移除/销毁 key 已经不存在的元素。

  同一个父元素下的子元素必须具有唯一的 key。重复的 key 将会导致渲染异常。

  最常见的用例是与 `v-for` 结合：

  ```vue
  <view>
    <text v-for="item in items" :key="item.id">...</text>
  </view>
  ```

  也可以用于强制替换一个元素/组件而不是复用它。当你想这么做时它可能会很有用：

  - 在适当的时候触发组件的生命周期钩子
  - 触发过渡

  举例来说：

  ```vue
  <transition>
    <text :key="text">{{ text }}</text>
  </transition>
  ```

  当 `text` 变化时，`<text>` 总是会被替换而不是更新，因此 transition 将会被触发。

### ref

用于注册模板引用。

- 预期：`string | Function`

- 详细信息

`ref` 用于注册元素或子组件的引用。

使用选项式 API，引用将被注册在组件的 `this.$refs` 对象里：

```vue
<script lang="uts">
  import Foo from '@/components/Foo.uvue'

  export default {
    components: { Foo },
    mounted() {
      // #ifdef APP
      (this.$refs['input'] as UniInputElement).setAttribute('value', 'input value');
      // #endif
      // #ifdef WEB
      (this.$refs['input'] as UniInputElement).value = 'input value';
      // #endif
      // 当在 v-for 中使用模板引用时，this.$refs 中对应的值是一个数组
      (this.$refs['textItems'] as UniTextElement[]).forEach((item : UniTextElement) => {
        item.style.setProperty('color', 'red')
      });
      // 调用自定义组件方法
      (this.$refs['foo'] as ComponentPublicInstance).$callMethod('updateTitle');
      // 获取自定义组件响应式数据
      console.log((this.$refs['foo'] as ComponentPublicInstance).$data['title']); // new title
    }
  }
</script>

<template>
  <view>
    <input ref="input" />
    <text v-for="item in 3" ref="textItems" :key="item">{{
      item
    }}</text>
    <Foo ref="foo" />
  </view>
</template>
```
`this.$refs` 也是非响应式的，因此你不应该尝试在模板中使用它来进行数据绑定。

使用组合式 API，引用将存储在与名字匹配的 ref 里：
```vue
<script setup lang="uts">
  import Foo from '@/components/Foo.uvue'

  // 声明一个 ref 来存放该元素的引用, 必须和模板里的 ref 同名
  const input = ref<UniInputElement | null>(null)
  // 当在 v-for 中使用模板引用时，对应的 ref 中包含的值是一个数组
  const textItems = ref<UniTextElement[] | null>(null)
  // 声明一个 ref 来存放自定义组件的引用, 必须和模板里的 ref 同名
  const foo = ref<ComponentPublicInstance | null>(null)

  onMounted(() => {
    // #ifdef APP
    input.value!.setAttribute('value', 'input value')
    // #endif
    // #ifdef WEB
    input.value!.value = 'input value'
    // #endif
    textItems.value!.forEach((item: UniTextElement) => {
      item.style.setProperty('color', 'red')
    })
    // 调用自定义组件方法
    foo.value!.$callMethod('updateTitle')
    // 获取自定义组件响应式数据
    console.log(foo.value!.$data['title']) // new title
  })
</script>

<template>
  <view>
    <input ref="input" />
    <text v-for="item in 3" ref="textItems" :key="item">{{
      item
    }}</text>
    <Foo ref="foo" />
  </view>
</template>
```

```vue
<!-- components/Foo.uvue -->
<template>
  <view>
    <text>title: {{title}}</text>
  </view>
</template>

<script>
  export default {
    name:"Foo",
    data() {
      return {
        title: 'default title'
      }
    },
    methods: {
      updateTitle(){
        this.title = 'new title'
      }
    }
  }
</script>
```

#### 获取内置组件与自定义组件的区别
- 使用 `ref` 获取内置组件实例时会获取到对应的 `Element`，例如上述代码示例中，`input` 组件获取到的是 `UniInputElement`, `text` 组件获取到的是 `UniTextElement`，可以调用 `Element` 的方法和属性。
- 使用 `ref` 获取自定义组件实例时会获取到对应的 vue 组件实例，例如上述代码示例中，`Foo` 组件获取到的是 `ComponentPublicInstance`，可以获取自定义组件的属性或调用方法，[详情](./component.md#page-call-component-method)。
- 小程序平台如果期望使用`ref`获取到`UniElement`需要在此`UniElement`上设置id，此外小程序平台的`UniElement`使用是受限的，详情参考：[UniElement](../mp/README.md#unielement)


### is

用于绑定动态组件。

- 预期：`string | Component`
