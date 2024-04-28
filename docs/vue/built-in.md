# 内置内容

## 指令 @directives

<!-- VUEJSON.directives.compatibility -->
<!-- VUEJSON.directives.example -->

::: warning 注意
- **v-html:** 在 `App-android` 平台，`v-html` 指令通过编译为 [rich-text](../component/rich-text.md) 组件实现。因此，`v-html` 指令的内容必须是 `rich-text` 支持的格式, 并且要遵循标签嵌套规则，例如， `swiper` 标签内只允许嵌套 `swiper-item` 标签。\
同时，受限于 `rich-text` 组件不支持 `class` 样式，`v-html` 指令中同样不支持 `class` 样式。\
绑定 `v-html` 的标签内的内容会被忽略，`v-html` 指令的内容会编译为 `rich-text` 组件渲染为该标签的子节点。
:::

## 事件处理

- [事件修饰符](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) 只支持 `stop` 和 `once`。

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
