# 数据绑定模型

vue的一大特色，就是可以定义一个响应式变量，通过模板绑定的写法，更方便的实现对dom的更改。

在组合式里，定义响应式变量是`ref()`，在选项式里，定义方式是在data里return。

虽然组合式和选项式的定义方式不一样，但在模板里的绑定和使用方式是一样的。

响应式变量被绑定到UI界面后（template和style都可以），
1. 在逻辑script中修改变量，UI界面会自动更新。省却再编写dom代码操作UI。
2. 响应式变量有diff更新机制。比如对于一个大列表的UTSJSONObject数据，其中一项变更时，框架底层会自动计算diff，给UI层差量同步数据。这在大多数情况是很好的，但注意diff这个计算过程本身也会增加耗时。

下面分别讲解各种方式的用法。

## 声明响应式状态 @declaring-reactive-state

### 选项式 API @options-api

选用选项式 API 时，会用 `data` 选项来声明组件的响应式状态。此选项的值应为返回一个对象的函数。Vue 将在创建新组件实例的时候调用此函数，并将函数返回的对象用响应式系统进行包装。此对象的所有顶层属性都会被代理到组件实例 (即方法和生命周期钩子中的 `this`) 上。

data需要特殊类型时，通过 as 来转换。

如下示例中，
- 首先在data的return中定义了响应式变量：str、num、arr，并赋值了初始值。
- 第2步在模板template中通过`{{}}`的方式绑定和显示在text组件的内容区中。即右边预览区显示的3行内容，显示了3个响应式变量的初始值。
- 第3步点击按钮“update data”，触发`updateData()`，在这个方法里通过`this.`来访问响应式变量，给它们重新赋值。然后界面上3行内容会被自动更新为新值。

示例 [详情](<!-- VUEJSON.E_component-instance.data_data-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.data_data-options.webUrl -->
<!-- VUEJSON.E_component-instance.data_data-options.code -->
:::

data中的响应式变量，如需在script中使用，需通过 `this.xx` 的方式，比如上述的`this.str`。

### 组合式 API @composition-api

组合式 API 没有 data 这种选项，而是通过 `ref`、`reactive` 方法来声明组件的响应式状态。

这种定义方式更加灵活和简洁。

建议把 `ref` 定义都写在开头，否则到处都写也不好找。

#### ref

使用 `ref()` 函数来定义一个响应式变量。

需要给 `ref` 标注类型时，可通过泛型的写法，如：`ref<string>()`， 或使用 `as` 的写法。

当然 uts 有一定的自动推导能力，对于特别简单的布尔值/数字/字符串的字面量，不写泛型或as，也可以自动推导类型。

`ref()` 接收参数，并将其包裹在一个带有 `.value` 属性的 `ref` 对象中返回。这个对象，

- 在 uts 中取值时，需要使用 `.value`属性。
- 而在模板中使用 ref 时，不需要附加 `.value`（为了方便起见，在模板中使用时，ref 会自动解包，这样模板里的写法和选项式保持了一致）。

如下示例中，
- 首先在明确script为setup，即组合式API。
- 通过ref定义了3个响应式变量：count1、count2、counter（注意是小写），并赋值了初始值。
- 在模板template中通过`{{}}`的方式绑定和显示在text组件的内容区中。即右边预览区显示的3行内容，显示了3个响应式变量的初始值。
- 点击按钮“increment”，触发`increment()`，在这个方法里通过`.value`属性给响应式变量自增。然后界面上3行内容会被自动更新为新值。
<!-- TODO 为什么加2 -->
示例 [详情](<!-- VUEJSON.E_reactivity.core_ref_ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_ref_ref.webUrl -->
<!-- VUEJSON.E_reactivity.core_ref_ref.code -->
:::

#### reactive

还有另一种声明响应式状态的方式，即使用 reactive() API。与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性，还可以使用 `readOnly` 来禁止修改。

需要注意：reactive() 返回的是一个原始对象的代理（Proxy），它和原始对象是不相等的。

只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是仅使用你声明对象的代理版本。

示例 [详情](<!-- VUEJSON.E_reactivity.core_readonly_readonly.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_readonly_readonly.webUrl -->
<!-- VUEJSON.E_reactivity.core_readonly_readonly.code -->
:::

#### defineExpose

使用 `<script setup>` 的组件是**默认关闭**的——即通过模板引用或者 `$parent` 链获取到的组件的公开实例，**不会**暴露任何在 `<script setup>` 中声明的绑定。

可以通过 `defineExpose` 编译器宏来显式指定在 `<script setup>` 组件中要暴露出去的属性：

> 在示例中，使用 `defineExpose` 导出一个方法供自动化测试脚本使用

示例 [详情](<!-- VUEJSON.E_component-instance.define-expose_define-expose.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.define-expose_define-expose.webUrl -->
<!-- VUEJSON.E_component-instance.define-expose_define-expose.code -->
:::

## 绑定变量 @bind-data

### 在模板里绑定 @bind-template-data

当使用 `Options API` `data` 或 `Composition API` 的 `ref` 、 `reactive` 定义了响应式数据后，可以在模板中使用。

- 组件的text区域，使用`{{}}` 语法绑定数据。这常见于`<text>`组件。
- 组件的vue指令中，直接写变量名称。

比如下述组件的vue指令：

- `v-bind` 或 `:`（简写）。它后面跟着组件的属性名称，可以动态修改组件的属性。
- `v-if`、`v-else-if` 或 `v-else`
- `v-for`

示例 [详情](<!-- VUEJSON.E_built-in.special-elements_template_template-options.gitUrl -->)

::: preview <!-- VUEJSON.E_built-in.special-elements_template_template-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_built-in.special-elements_template_template-options.code -->

> 组合式 API
<!-- VUEJSON.E_built-in.special-elements_template_template-composition.code -->
:::

### 在样式里绑定 @v-bind-css-data

|App|Web|
|:-:|:-:|
|x  |4.13+  |

单文件组件的 `<style>` 标签支持使用 `v-bind` CSS 函数将 CSS 的值链接到动态的组件状态

这个语法同样也适用于 `<script setup>`，且支持 UTS 表达式 (需要用引号包裹起来)

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

示例 [详情](<!-- VUEJSON.E_reactivity.core_ref_ref.gitUrl -->)

::: preview <!-- VUEJSON.E_reactivity.core_ref_ref.webUrl -->
<!-- VUEJSON.E_reactivity.core_ref_ref.code -->
:::
