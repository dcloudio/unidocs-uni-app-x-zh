# 组合式 API

::: warning 注意
- 暂不支持 `<script setup>` 和 `<script>` 同时使用，如果需要配置 `options` 内容，比如 `name`，可以使用 `defineOptions`。
- 暂不支持顶层 `await`。
- 暂不支持 `<script setup>` 配置 `generic` 泛型类型参数。
- `App.uvue` 暂不支持组合式 API。
:::

## 响应式: 核心

<!-- VUEJSON.reactivity_core.compatibility -->
<!-- VUEJSON.reactivity_core.example -->

::: warning 注意
- `computed()` 需通过泛型指定返回值类型。
  ```ts
  const count = ref(0)
  const doubleCount = computed<number>(() : number => {
    return count.value * 2
  })
  ```
:::

### 示例代码

#### ref

- 定义相应式数据

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

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch_watch-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch_watch-composition.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch_watch-composition.code -->

:::


#### computed

示例 [详情](<!-- VUEJSON.E_reactivity.core_computed_computed-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_computed_computed-composition.webUrl -->

<!-- VUEJSON.E_reactivity.core_computed_computed-composition.code -->

:::

#### reactive

示例 [详情](<!-- VUEJSON.E_reactivity.core_reactive_reactive.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_reactive_reactive.webUrl -->

<!-- VUEJSON.E_reactivity.core_reactive_reactive.code -->

:::

#### readonly

示例 [详情](<!-- VUEJSON.E_reactivity.core_readonly_readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_readonly_readonly.webUrl -->

<!-- VUEJSON.E_reactivity.core_readonly_readonly.code -->

:::

#### watchEffect

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch-effect_watch-effect.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch-effect_watch-effect.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch-effect_watch-effect.code -->

:::

#### watchPostEffect

示例 [详情](<!-- VUEJSON.E_reactivity.core_watch-post-effect_watch-post-effect.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_watch-post-effect_watch-post-effect.webUrl -->

<!-- VUEJSON.E_reactivity.core_watch-post-effect_watch-post-effect.code -->

:::

#### watchSyncEffect

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

### 示例代码

#### isRef

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-ref_is-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-ref_is-ref.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-ref_is-ref.code -->

:::

#### unref

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_un-ref_un-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_un-ref_un-ref.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_un-ref_un-ref.code -->

:::

#### toRef

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_to-ref_to-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_to-ref_to-ref.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_to-ref_to-ref.code -->

:::

#### toValue

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_to-value_to-value.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_to-value_to-value.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_to-value_to-value.code -->

:::

#### toRefs

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_to-refs_to-refs.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_to-refs_to-refs.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_to-refs_to-refs.code -->

:::

#### isProxy

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-proxy_is-proxy.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-proxy_is-proxy.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-proxy_is-proxy.code -->

:::

#### isReactive

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-reactive_is-reactive.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-reactive_is-reactive.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-reactive_is-reactive.code -->

:::

#### isReadonly

示例 [详情](<!-- VUEJSON.E_reactivity.utilities_is-readonly_is-readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.utilities_is-readonly_is-readonly.webUrl -->

<!-- VUEJSON.E_reactivity.utilities_is-readonly_is-readonly.code -->

:::

## 响应式: 进阶

<!-- VUEJSON.reactivity_advanced.compatibility -->
<!-- VUEJSON.reactivity_advanced.example -->

### 示例代码

#### customRef

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_custom-ref_custom-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_custom-ref_custom-ref.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_custom-ref_custom-ref.code -->

:::

#### effectScope

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_effect-scope_effect-scope.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_effect-scope_effect-scope.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_effect-scope_effect-scope.code -->

:::

#### getCurrentScope

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_get-current-scope_get-current-scope.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_get-current-scope_get-current-scope.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_get-current-scope_get-current-scope.code -->

:::

#### onScopeDispose

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_on-scope-dispose_on-scope-dispose.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_on-scope-dispose_on-scope-dispose.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_on-scope-dispose_on-scope-dispose.code -->

:::

#### shallowReactive

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_shallow-reactive_shallow-reactive.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_shallow-reactive_shallow-reactive.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_shallow-reactive_shallow-reactive.code -->

:::

#### shallowReadonly

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_shallow-readonly_shallow-readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_shallow-readonly_shallow-readonly.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_shallow-readonly_shallow-readonly.code -->

:::

#### shallowRef

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_shallow-ref_shallow-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_shallow-ref_shallow-ref.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_shallow-ref_shallow-ref.code -->

:::

#### toRaw

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_to-raw_to-raw.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_to-raw_to-raw.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_to-raw_to-raw.code -->

:::

#### triggerRef

示例 [详情](<!-- VUEJSON.E_reactivity.advanced_trigger-ref_trigger-ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.advanced_trigger-ref_trigger-ref.webUrl -->

<!-- VUEJSON.E_reactivity.advanced_trigger-ref_trigger-ref.code -->

:::

## 生命周期钩子 @page-lifecycle

<!-- VUEJSON.composition_lifecycle.compatibility -->

示例 [详情](<!-- VUEJSON.E_lifecycle.page_page-composition.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.page_page-composition.webUrl -->

<!-- VUEJSON.E_lifecycle.page_page-composition.code -->

:::

[页面及组件生命周期流程图](../page.md#lifecycleflow)
