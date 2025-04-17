# 组件

我们可以对一段要复用的js/uts逻辑代码进行封装，抽出function、module等形式。

那么涉及UI的复用时，该如何抽象？

这就是vue的组件机制，把视图template、script、style都封装到独立的uvue组件文件中，在其他需要的地方使用组件的名称进行引用。

每个组件，包括如下几个部分：以组件名称为标记的开始标签和结束标签、组件text内容、组件属性、组件属性值。

组件还可以封装方法、事件、插槽，提供了[组件的生命周期](#component-lifecycle)，提供了组件和页面的[互通信机制](#use-and-communication)，满足了各种高级需求。

如果您还不了解这些概念，请务必先阅读 [组件概述文档](../compiler/README.md)

## 组件内容构成 @component-structure

uni-app x 组件基于 vue 单文件组件规范，一个组件内，有 3 个根节点标签：

- `<template>`：组件的模板内容
- `<script>`：组件的脚本代码
- `<style>`：组件的样式

### 和页面的区别 @component-page-difference

组件的内容构成和页面大体上一致，都符合vue的sfc规范。

事实上，一个在pages.json注册的页面uvue文件，也可以被当做一个组件引入到其他页面。

组件和页面的差别有：
1. 组件中不支持页面相关的生命周期和API，比如 `onLoad`、`onShow` 等[页面生命周期](../page.md#lifecycle)，比如$setPageStyle等API。
2. 组件中有一批组件独有的生命周期和API，比如 `mounted`、`unmounted` 等[组件生命周期](#component-lifecycle)，比如页面和组件通信的API。
3. 组件文件不需要在pages.json中注册


## 创建及引用组件 @create-and-import-component
<!-- TODO：此处需要重写 -->
### 创建组件 @create-component

#### easycom

1. 在 `项目根目录/components` 目录上右键（如果没有，在根目录新建一个 `components` 目录即可），选择 `新建组件`，输入组件名称，选择一个模板；可勾选创建同名目录，将组件放在同名目录下。
2. 在 `项目根目录/uni_modules` 目录上右键（如果没有，在根目录新建一个 `uni_modules` 目录即可），选择 `新建uni_modules插件`，输入`插件ID`，分类选择`前端组件-通用组件`；将组件放在和插件ID同名的目录下。

#### 创建自定义组件 @create-custom-component

3. 在项目 `pages 目录` 下的任意地方创建 `.uvue/.vue` 文件并编写组件代码

::: warning 注意事项
uni-app x 项目支持使用 `.vue`、`.uvue` 文件作为组件使用，但同文件名的两个文件同时存在，`.uvue` 文件会优先编译。
:::

### 引用组件 @import-component
#### easycom

传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。`easycom` 将其精简为一步。

只要组件安装在项目的 `components` 目录下或 `uni_modules/插件 id/components/插件 id/插件 id.uvue` 目录下，并符合 `组件名称/组件名称.(vue|uvue)` 目录结构。就可以不用引用、注册，直接在页面中使用。

- 比如 [uni-loading](https://ext.dcloud.net.cn/plugin?id=15980)，它导入到项目后，存放在了目录 /uni_modules/uni-loading/components/uni-loading/uni-loading.uvue

  同时它的组件名称也叫 uni-loading，所以这样的组件，不用在 script 里注册和引用。如下：

  ```html
  <template>
      <view>
        <uni-loading></uni-loading><!-- 这里会显示一个loading -->
      </view>
    </template>
  <script>
    // 这里不用import引入，也不需要在components内注册组件。template里就可以直接用
    // ...
  </script>
  ```

这里出现了`uni_module`的概念，简单说下，它是uni-app的一种包管理方案。

`uni_module`其实不止服务于组件，它可以容纳组件、script库、页面、项目等所有DCloud插件市场所支持的种类。

在HBuilderX中点右键可方便的更新插件，插件作者也可以方便的上传插件。

uni_module有详细的专项文档，请另行查阅[uni_module规范](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)。

如果你的组件不满足easycom标准的目录规范，还有一种办法是在[pages.json](../collocation/pagesjson.md#pages-easycom)里声明自己的目录规则，以便编译器查找到你的组件。自定义easycom路径规则的详细教程[详见](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)

##### easycom组件的类型规范 @easycom-component-type

组件标签名首字母大写，`驼峰+ComponentPublicInstance`，如：

`<test/>` 类型为：TestComponentPublicInstance
`<uni-data-checkbox/>` 类型为：UniDataCheckboxComponentPublicInstance

#### 手动引入组件 @manual-import-component

不符合 easycom 规范的组件，则需要手动引入：

```vue
<!-- 组件 child.vue -->
<template>
  <view>Child Component</view>
</template>

<!-- 页面（与 child.vue 组件在同级目录 -->
<template>
  <view>
    <child ref="component1"></child>
  </view>
</template>
<script>
// 引入 child 组件
import child from './child.vue'
export default {
  components: {
    child
  },
  data() {
    return {
      component1: null as ComponentPublicInstance | null // 手动引入组件时的类型
    }
  }
}
</script>
```

##### 手动引入组件的类型规范 @manual-import-component-type

类型为：ComponentPublicInstance


## 使用及通信 @use-and-communication

### 页面与页面通信 @page-page-communication

1. 使用 [navigateTo](https://doc.dcloud.net.cn/uni-app-x/api/navigator.html#navigateto) 在 `url` 地址中携带参数
2. 使用 [event-bus](https://doc.dcloud.net.cn/uni-app-x/api/event-bus.html)

### 页面与组件通信 @page-component-communication

#### 向组件传递 `props` @transfer-component-props

示例 [详情](<!-- VUEJSON.E_component-instance.props_props-options.gitUrl -->)

::: warning 注意
- 选项式 API：`this.$props` 是 `Map` 类型，需要使用 `this.$props["propName"]` 来访问
- 组合式 API：可以使用 `.` 点操作符来访问
:::

::: preview <!-- VUEJSON.E_component-instance.props_props-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.props_props-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.props_props-composition.code -->

:::

#### 向组件传递回调函数 @transfer-component-method

示例 [详情](<!-- VUEJSON.E_component-instance.emit-function_emit-function-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.emit-function_emit-function-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.emit-function_emit-function-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.emit-function_emit-function-composition.code -->

:::

#### 使用 `provide/inject` 来向下传递参数 @provide-inject

示例 [详情](<!-- VUEJSON.E_component-instance.provide_provide-options-1.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.provide_provide-options-1.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.provide_provide-options-1.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.provide_provide-composition.code -->

:::

#### 使用 [全局变量与状态管理](../tutorial/store.md) @global-store

> store/index.uts [文件详情](https://gitcode.net/dcloud/hello-uvue/-/blob/alpha/store/index.uts)

示例 [详情](<!-- VUEJSON.E_examples.nested-component-communication_nested-component-communication-options.gitUrl -->)

::: preview <!-- VUEJSON.E_examples.nested-component-communication_nested-component-communication-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_examples.nested-component-communication_nested-component-communication-options.code -->

> 组合式 API

<!-- VUEJSON.E_examples.nested-component-communication_nested-component-communication-composition.code -->

:::

#### 在 `main.uts` 中使用 `app.config.globalProperties`

如在 `main.uts` 中的 `createApp` 方法中使用：
```ts
app.config.globalProperties.globalPropertiesReactiveObj = reactive({
  str: 'default reactive string',
  num: 0,
  bool: false,
} as UTSJSONObject)
```

示例 [详情](<!-- VUEJSON.E_app-instance.globalProperties_globalProperties-options.gitUrl -->)

::: preview <!-- VUEJSON.E_app-instance.globalProperties_globalProperties-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_app-instance.globalProperties_globalProperties-options.code -->

> 组合式 API

<!-- VUEJSON.E_app-instance.globalProperties_globalProperties-composition.code -->

:::


### 父组件与子组件通信 @parent-child-communication

上述 [页面与组件通信](#page-component-communication) 方法同样适用于父组件与子组件通信。

### 页面调用组件方法 @page-call-component-method

#### 调用 `easycom` 组件方法 @call-easycom-component-method

> 在调用组件方法的时候如报错 `error: Reference has a nullable type` 则需要使用 `?.` 操作符（如：a?.b?.()）。

easycom组件，用法和内置组件一样。也是使用 `this.$refs` 获取组件并转换为组件的类型，通过 `.`操作符 调用组件方法或设置属性。

**语法**

```(this.$refs['组件ref属性值'] as 驼峰ComponentPublicInstance)?.foo?.();```

示例 [详情](<!-- VUEJSON.E_component-instance.methods_call-method-easycom-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.methods_call-method-easycom-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.methods_call-method-easycom-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.methods_call-method-easycom-composition.code -->

:::

##### 调用 `uni_modules easycom` 组件方法 <Badge text="HBuilderX 3.97+"/> @call-uni-modules-easycom-component-method

使用 `ref` 属性拿到组件实例，调用 `easycom` 组件方法时不需要使用 `$callMethod` 方法，直接使用点操作符即可 `.`

> 在调用组件方法的时候如报错 `error: Reference has a nullable type` 则需要使用 `?.` 操作符（如：a?.b?.()）。

示例 [详情](<!-- VUEJSON.E_component-instance.methods_call-method-easycom-uni-modules-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.methods_call-method-easycom-uni-modules-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.methods_call-method-easycom-uni-modules-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.methods_call-method-easycom-uni-modules-composition.code -->

:::

#### 使用 `ref` 属性搭配 `$callMethod` 方法 @call-component-method

如果不是内置组件，也不是easycom组件，那么无法使用`.`操作符了。

此时需使用 `this.$refs` 获取组件实例，然后通过 `$callMethod` 调用组件的方法。也就是把组件的方法名、参数，当做callMethod的参数来传递。此时也就没有`.`操作符那样的代码提示和校验了。

callMethod可用于所有自定义组件，包括easycom组件也可以使用，只不过easycom组件有更简单的用法。

**语法**

```(this.$refs['组件ref属性值'] as ComponentPublicInstance)?.$callMethod('方法名', ...args)```

**组件类型**

ComponentPublicInstance

示例 [详情](<!-- VUEJSON.E_component-instance.parent_parent-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.parent_parent-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.parent_parent-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.parent_parent-composition.code -->

:::

**注意：**
- App-Android 平台 `4.0` 版本开始支持 `$callMethod` 调用 `defineExpose` 导出的方法
- Web 平台、App-iOS 平台 `4.13` 版本开始支持 `$callMethod` 调用 `defineExpose` 导出的方法
- 小程序 平台 支持 `$callMethod` 调用 `defineExpose` 导出的方法


#### 内置组件的方法调用或设置属性 <Badge text="HBuilderX 3.93+"/> @call-builtin-component-method

使用 `this.$refs` 获取组件并as转换为组件对应的element类型，通过 `.`操作符 调用组件方法或设置属性。

**语法**

```(this.$refs['组件ref属性值'] as Uni[xxx]Element)?.foo?.();```

**内置组件的element类型规范**

Uni`组件名(驼峰)`Element

如：

`<button>`: UniButtonElement
`<picker-view>`: UniPickerViewElement


示例 [详情](<!-- VUEJSON.E_component-instance.methods_call-method-uni-element-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.methods_call-method-uni-element-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_component-instance.methods_call-method-uni-element-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.methods_call-method-uni-element-composition.code -->

:::

**bug&tips**

- 目前uts组件，即封装原生ui给uni-app或uni-app x的页面中使用，类型与内置组件的 Uni`组件名(驼峰)`Element 方式相同。目前没有代码提示。

### 组件监听应用、页面生命周期 @component-page-lifecycle

> 选项式 API 和 组件式 API 在监听页面生命周期时有所不同
>
> 比如选项式 API 中的 `onShow`、`onHide` 监听页面生命周期在组合式 API 中分别对应 `onPageShow`、`onPageHide`（在组合式 API 时会和 App 的生命周期冲突）
>
> 具体请查看 [页面生命周期](../page.md#lifecycle)

::: warning 注意
1. onAppHide、onAppShow 目前只有 Android 支持
2. onPageHide、onPageShow 需要写在选项式的 setup 函数 或者 组合式 `<script setup>` 中才能生效
:::

示例 [详情](<!-- VUEJSON.E_lifecycle.page_monitor-page-lifecycle-options.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.page_page-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_lifecycle.page_monitor-page-lifecycle-options.code -->

> 组合式 API

<!-- VUEJSON.E_lifecycle.page_monitor-page-lifecycle-composition.code -->

:::

## 组件的生命周期 @component-lifecycle

### 组件生命周期（选项式 API）兼容性 @component-lifecycle-options-compatibility

<!-- VUEJSON.options_lifecycle.compatibility -->

### 组件生命周期（组合式 API）兼容性 @component-lifecycle-composition-compatibility

<!-- VUEJSON.composition_lifecycle.compatibility -->

示例 [详情](<!-- VUEJSON.E_lifecycle.component_ChildComponentOptions.gitUrl -->)

::: preview <!-- VUEJSON.E_lifecycle.component_component-options.webUrl -->

> 选项式 API

<!-- VUEJSON.E_lifecycle.component_ChildComponentOptions.code -->

> 组合式 API

<!-- VUEJSON.E_lifecycle.component_ChildComponentComposition.code -->

:::

## 全局组件 @global-component

[详情见 app.component](./global-api.md#app-component)

## props

- 支持[对象方式](https://cn.vuejs.org/guide/components/props.html#props-declaration)声明。从 4.0+ 支持字符串数组方式声明。使用字符串数组方式声明时，所有 prop 类型均为 any | null。
- 仅支持直接在 `export default` 内部声明，不支持其他位置定义后，在 `export default` 中引用。
- 复杂数据类型需要通过 `PropType` 标记类型，[详见](https://cn.vuejs.org/guide/typescript/options-api.html#typing-component-props)。
- `type` 不支持使用自定义的构造函数。

示例 [详情](<!-- VUEJSON.E_component-instance.props_props-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.props_props-options.webUrl -->
> 选项式 API

<!-- VUEJSON.E_component-instance.props_props-options.code -->

> 组合式 API

<!-- VUEJSON.E_component-instance.props_props-composition.code -->

:::

## ref

在 `uni-app js 引擎版`中，非 `Web端` 只能用于获取自定义组件，不能用于获取内置组件实例（如：`view`、`text`）。\
在 `uni-app x` 中，内置组件会返回组件根节点的引用，自定义组件会返回组件实例。

**注意事项：**
- 如果多个节点或自定义组件绑定相同 `ref` 属性，将获取到最后一个节点或组件实例的引用。
- 在 `v-for` 循环时，绑定 `ref` 属性会获取到节点或组件实例的集合。
- 在 `uni-app x` 中，要访问 `$refs` 中的属性，需要使用索引方式。

示例 [详情](<!-- VUEJSON.E_component-instance.refs_refs-options.gitUrl -->)

::: preview <!-- VUEJSON.E_component-instance.refs_refs-options.webUrl -->
> uni-app x（选项式）

<!-- VUEJSON.E_component-instance.refs_refs-options.code -->

> uni-app x（组合式）

<!-- VUEJSON.E_component-instance.refs_refs-composition.code -->

> uni-app js 引擎版

```vue
<template>
	<view>
		<text ref="textRef">text node</text>
		<Foo ref="fooRef" />
	</view>
</template>

<script lang="ts">
  import type { ComponentPublicInstance } from 'vue'

	export default {
		onReady() {
			const text = this.$refs.textRef as Element // 仅H5端支持
			const foo = this.$refs.fooRef as ComponentPublicInstance
		}
	}
</script>
```
:::

## 自定义组件 v-model 绑定复杂表达式 @v-model-complex-expression

自定义组件 `v-model` 绑定复杂表达式时，需要通过 `as` 指定类型(仅App-Android 平台)。

::: preview
> 选项式 API
```ts
<template>
  <input v-model="obj.str as string" />
</template>

<script lang="uts">
	type Obj = {
		str : string
	}
	export default {
		data() {
			return {
				obj: {
					str: "str"
				} as Obj
			}
		}
	}
</script>
```
> 组合式 API
```ts
<template>
  <input v-model="obj.str as string" />
</template>

<script setup lang="uts">
  type Obj = {
    str: string
  }
  const obj = reactive({
      str: "str"
    } as Obj)
</script>
```
:::


## 作用域插槽的类型 @scoped-slot-type

示例 [详情](<!-- VUEJSON.E_built-in.special-elements_slots_child-options.gitUrl -->)

作用域插槽需在组件中指定插槽数据类型
::: preview <!-- VUEJSON.E_built-in.special-elements_slots_child-options.webUrl -->
> 选项式 API

<!-- VUEJSON.E_built-in.special-elements_slots_child-options.code -->

> 组合式 API

<!-- VUEJSON.E_built-in.special-elements_slots_child-composition.code -->

:::

## 递归组件

实现递归组件时不要使用组件 import 自身的写法，直接在模板内使用组件名即可。

```vue
// component-a.uvue
<template>
  <view>
    <text>component-a::{{text}}</text>
    <component-a v-if="!end" :text="text" :limit="limit-1"></component-a>
  </view>
</template>

<script>
  // import componentA from './component-a' // 错误用法
  export default {
    name: "component-a",
    props: {
      text: {
        type: String,
        default: ''
      },
      limit: {
        type: Number,
        default: 2
      }
    },
    computed: {
      end() : boolean {
        return this.limit <= 0
      }
    }
  }
</script>
```
