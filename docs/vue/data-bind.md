# 数据绑定模型

## 声明响应式状态 @declaring-reactive-state

### 选项式 API @options-api

选用选项式 API 时，会用 `data` 选项来声明组件的响应式状态。此选项的值应为返回一个对象的函数。Vue 将在创建新组件实例的时候调用此函数，并将函数返回的对象用响应式系统进行包装。此对象的所有顶层属性都会被代理到组件实例 (即方法和生命周期钩子中的 `this`) 上。

示例 [详情](<!-- VUEJSON.E_component-instance.data_data-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.data_data-options.webUrl -->
<!-- VUEJSON.E_component-instance.data_data-options.code -->
:::

### 组合式 API @composition-api

选用组合式 API 时，会用 `ref`、`reactive` 来声明组件的响应式状态。使用组合式 API定义的变量，需要通过 [defineExpose](#defineexpose) 导出，才能在模板中使用。

#### ref

在组合式 API 中，推荐使用 `ref()` 函数来声明响应式状态。需要给 `ref` 标注类型，如：`ref<string>()`

`ref()` 接收参数，并将其包裹在一个带有 `.value` 属性的 `ref` 对象中返回

**注意**，在模板中使用 ref 时，我们不需要附加 `.value`。为了方便起见，当在模板中使用时，ref 会自动解包。

示例 [详情](<!-- VUEJSON.E_reactivity.core_ref_ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_ref_ref.webUrl -->
<!-- VUEJSON.E_reactivity.core_ref_ref.code -->
:::

#### reactive

还有另一种声明响应式状态的方式，即使用 reactive() API。与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性，还可以使用 `readOnly` 来禁止修改

值得注意的是，reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的

只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是仅使用你声明对象的代理版本。

示例 [详情](<!-- VUEJSON.E_reactivity.core_readonly_readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_readonly_readonly.webUrl -->
<!-- VUEJSON.E_reactivity.core_readonly_readonly.code -->
:::

#### defineExpose

使用 `<script setup>` 的组件是**默认关闭**的——即通过模板引用或者 `$parent` 链获取到的组件的公开实例，**不会**暴露任何在 `<script setup>` 中声明的绑定。

可以通过 `defineExpose` 编译器宏来显式指定在 `<script setup>` 组件中要暴露出去的属性：

> 在示例中，使用 `defineExpose` 导出一个方法供自动化测试使用

示例 [详情](<!-- VUEJSON.E_component-instance.define-expose_define-expose.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.define-expose_define-expose.webUrl -->
<!-- VUEJSON.E_component-instance.define-expose_define-expose.code -->
:::

## 绑定变量 @bind-data

### 在模板里绑定 @bind-template-data

当使用 `Options API` `data` 或 `Composition API` 的 `ref` 、 `reactive` 定义了响应式数据后，可以在模板中使用 `{{}}` 语法绑定数据

可以在模板中使用以下任一指令一起：

- `v-bind` 或 `:`（简写）
- `v-if`、`v-else-if` 或 `v-else`
- `v-for`

示例 [详情](<!-- VUEJSON.E_built-in.component_template_template-options.gitUrl -->)

::: preview <!-- VUEJSON.E_built-in.component_template_template-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_built-in.component_template_template-options.code -->

> 组合式 API
<!-- VUEJSON.E_built-in.component_template_template-composition.code -->
:::

### 使用 `v-bind` 在样式里绑定 @v-bind-css-data

`v-bind` 也可在样式中使用，可以很方便的在 uts 中改变样式，如下所示：

示例 [详情](<!-- VUEJSON.E_directive.v-bind_v-bind-options.gitUrl -->)

::: preview <!-- VUEJSON.E_directive.v-bind_v-bind-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_directive.v-bind_v-bind-options.code -->

> 组合式 API
<!-- VUEJSON.E_directive.v-bind_v-bind-composition.code -->
:::

## 定义方法 @methods

使用选项式 API 时可以在 `methods` 选项中定义方法，这些方法可以在模板中使用\
而使用组合式 API 时，可以直接在 `<script setup lang="uts">` 中定义方法

定义方法之后，可以传递给子组件，子组件使用 `emit` 调用，也可以在 `script` 中直接使用

::: preview <!-- VUEJSON.E_component-instance.emit-function_emit-function-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_component-instance.emit-function_emit-function-options.code -->

> 组合式 API
<!-- VUEJSON.E_component-instance.emit-function_emit-function-composition.code -->
:::
