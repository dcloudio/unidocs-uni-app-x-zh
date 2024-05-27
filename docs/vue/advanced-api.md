# 进阶 API

## 渲染函数

<!-- VUEJSON.render_function.compatibility -->

### 示例代码 @example

#### h()

创建虚拟 DOM 节点 (vnode)。

- 详细信息

  第一个参数既可以是一个字符串 (用于原生元素) 也可以是一个 Vue 组件定义。第二个参数是要传递的 prop，第三个参数是子节点。

  当创建一个组件的 vnode 时，子节点必须以插槽函数进行传递。如果组件只有默认槽，可以使用单个插槽函数进行传递。否则，必须以插槽函数的对象形式来传递。

  为了方便阅读，当子节点不是插槽对象时，可以省略 prop 参数。

- 示例 [详情](<!-- VUEJSON.E_render-function.render_render-options.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.render_render-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_render-function.render_render-options.code -->

> 组合式 API
<!-- VUEJSON.E_render-function.render_render-composition.code -->
:::

#### mergeProps()

合并多个 props 对象，用于处理含有特定的 props 参数的情况。

- 详细信息

  mergeProps() 支持以下特定 props 参数的处理，将它们合并成一个对象。

  - class
  - style
  - onXxx 事件监听器——多个同名的事件监听器将被合并到一个数组。
  如果你不需要合并行为而是简单覆盖，可以使用原生 object spread 语法来代替。

- 示例 [详情](<!-- VUEJSON.E_render-function.mergeProps_mergeProps-options.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.mergeProps_mergeProps-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_render-function.mergeProps_mergeProps-options.code -->

> 组合式 API
<!-- VUEJSON.E_render-function.mergeProps_mergeProps-composition.code -->
:::

#### cloneVNode()

克隆一个 vnode。

- 详细信息

  返回一个克隆的 vnode，可在原有基础上添加一些额外的 prop。

  Vnode 被认为是一旦创建就不能修改的，你不应该修改已创建的 vnode 的 prop，而应该附带不同的/额外的 prop 来克隆它。

  Vnode 具有特殊的内部属性，因此克隆它并不像 object spread 一样简单。cloneVNode() 处理了大部分这样的内部逻辑。

- 示例 [详情](<!-- VUEJSON.E_render-function.cloneVNode_cloneVNode-options.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.cloneVNode_cloneVNode-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_render-function.cloneVNode_cloneVNode-options.code -->

> 组合式 API
<!-- VUEJSON.E_render-function.cloneVNode_cloneVNode-composition.code -->
:::

#### isVNode()

判断一个值是否为 vnode 类型。

- 示例 [详情](<!-- VUEJSON.E_render-function.isVNode_isVNode-options.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.isVNode_isVNode-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_render-function.isVNode_isVNode-options.code -->

> 组合式 API
<!-- VUEJSON.E_render-function.isVNode_isVNode-composition.code -->
:::

#### resolveComponent()

按名称手动解析已注册的组件。

- 详细信息

  备注：如果你可以直接引入组件就不需使用此方法。

  为了能从正确的组件上下文进行解析，`resolveComponent()` 必须在 `setup()` 或渲染函数内调用。

  如果组件未找到，会抛出一个运行时警告，并返回组件名字符串。

- 示例 [详情](<!-- VUEJSON.E_render-function.resolveComponent_resolveComponent-options.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.resolveComponent_resolveComponent-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_render-function.resolveComponent_resolveComponent-options.code -->

> 组合式 API
<!-- VUEJSON.E_render-function.resolveComponent_resolveComponent-composition.code -->
:::

#### withDirectives()

用于给 vnode 增加自定义指令。

- 详细信息

  用自定义指令包装一个现有的 vnode。第二个参数是自定义指令数组。每个自定义指令也可以表示为 `[Directive, value, argument, modifiers]` 形式的数组。如果不需要，可以省略数组的尾元素。

- 示例 [详情](<!-- VUEJSON.E_render-function.withDirectives_withDirectives-options.gitUrl -->)

::: preview <!-- VUEJSON.E_render-function.withDirectives_withDirectives-options.webUrl -->

> 选项式 API
<!-- VUEJSON.E_render-function.withDirectives_withDirectives-options.code -->

> 组合式 API
<!-- VUEJSON.E_render-function.withDirectives_withDirectives-composition.code -->
:::

#### withModifiers()

用于向事件处理函数添加内置 [v-on](./built-in.md#v-on) 修饰符。
