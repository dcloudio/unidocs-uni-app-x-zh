# uvue组件概述

uni-app x支持的组件包括：
- 内置基础组件
- 自定义vue组件
- uts组件插件

除了微信小程序，其他平台不支持的小程序wxml组件。

支持[easycom](https://uniapp.dcloud.net.cn/component/index.html#easycom)。

内置组件比较简单，扩展组件的2种方式详细介绍下

- 自定义vue组件
	在components目录新建一个uvue/vue文件，按vue组件规范编写代码。

	组件界面通过uvue构造，script使用uts编写。

	返回的类型是组件实例[ComponentPublicInstance](../vue/)。

- uts组件插件
	`uts组件插件`的名称可能有点拗口，这是因为是相对于另一个分类`uts api插件`。

	它们同属于`uts插件`，是[uni_modules](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)。api插件指能力扩展，比如蓝牙api。而组件插件指界面元素扩展，比如video、map、lottie动画等。

	uts组件插件，指把原生的、需要在界面上显示的、内嵌于页面中整体排版的组件，编写uts代码调用原生sdk，通过uni_modules插件的方式集成到uni-app项目中。比如
	* lottie组件，使用uts调用原生的lottie sdk来开发组件，再引入页面中。[详见](https://ext.dcloud.net.cn/plugin?name=uni-animation-view)
	* video组件，其实官方的video，也是用uts组件插件实现的。[详见](https://gitcode.net/dcloud/uni-component/-/tree/master/uni_modules/uni-video)

	uts组件插件，主要用于原生sdk涉及界面时，将其封装为界面组件。当然uts组件也是全端支持的。上述lottie组件也支持web端。

	在app端，它的内部界面是由原生sdk绘制的，而不是uvue代码绘制的。通过封装嵌入到uvue/nvue页面中。

	一个uts插件都是可以同时兼容uni-app x和uni-app js引擎版的。目前js引擎版仅支持内嵌于nvue页面中。所以上述lottie组件也是可以在app-nvue页面中使用的。

	uts组件的返回类型是dom元素[Element](../dom/element.md)

	uts组件插件的开发教程，[详见](https://uniapp.dcloud.net.cn/plugin/uts-component.html)

**vue组件兼容性及注意事项：**

## props

- 支持[对象方式](https://cn.vuejs.org/guide/components/props.html#props-declaration)声明。从 4.0+ 支持字符串数组方式声明。使用字符串数组方式声明时，所有 prop 类型均为 any | null。
- 仅支持直接在 `export default` 内部声明，不支持其他位置定义后，在 `export default` 中引用。
- 复杂数据类型需要通过 `PropType` 标记类型，[详见](https://cn.vuejs.org/guide/typescript/options-api.html#typing-component-props)。
- `type` 不支持使用自定义的构造函数。

::: preview
> 选项式 API
```ts
<script lang="uts">
  export default {
    // 字符串数组方式声明，所有 prop 类型均为 any | null
    props: ['num', 'str', 'obj', 'arr']
  }
</script>
```
> 组合式 API
```ts
<script setup lang="uts">
  // 字符串数组方式声明，所有 prop 类型均为 any | null
  const props = defineProps(['num', 'str', 'obj', 'arr'])
</script>
```
:::

::: preview
> 选项式 API
```ts
  <script lang="uts">
  type Obj = { a: number }

  export default {
    props: {
      num: {
        type: Number,
        required: true
      },
      str: {
        type: String,
        default: 'str',
        validator(value: string): boolean {
          return value.length > 0
        }
      },
      obj: {
        type: UTSJSONObject as PropType<Obj>,
        default: (): Obj => ({ a: 1 } as Obj)
      },
      arr: {
        type: Array as PropType<number[]>,
        default: (): number[] => [1, 2, 3]
      }
    }
  }
</script>
```
> 组合式 API
```ts
<script setup lang="uts">
  type Obj = { a: number }
  
  const props = defineProps({
    num: {
      type: Number,
      required: true
    },
    str: {
      type: String,
      default: 'str',
      validator(value : string) : boolean {
        return value.length > 0
      }
    },
    obj: {
      type: UTSJSONObject as PropType<Obj>,
      default: () : Obj => ({ a: 1 } as Obj)
    },
    arr: {
      type: Array as PropType<number[]>,
      default: () : number[] => [1, 2, 3]
    }
  })
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

## 作用域插槽的类型

作用域插槽需在组件中指定插槽数据类型
::: preview
> 选项式 API
```ts
// components/Foo.uvue
<template>
  <slot msg="test msg" />
</template>

<script lang="uts">
  import { SlotsType } from 'vue'
  
  export default {
    slots: Object as SlotsType<{
      default: { msg: string }
    }>
  }
</script>

// page.uvue
<template>
  <Foo>
    <template v-slot="{ msg }">
      <text>{{ msg }}</text>
    </template>
  </Foo>
</template>

<script lang="uts">
  import Foo from './Foo.uvue'
  export default {
    components: { Foo },
  }
</script>
```
> 组合式 API
```ts
// components/Foo.uvue
<template>
  <slot msg="test msg" />
</template>

<script setup lang="uts">
  defineSlots<{
    default(props: { msg: string }): null
  }>()
</script>

// page.uvue
<template>
  <Foo>
    <template v-slot="{ msg }">
      <text>{{ msg }}</text>
    </template>
  </Foo>
</template>

<script setup lang="uts">
  import Foo from './Foo.uvue'
</script>
```
:::

## ref

在 `uni-app js 引擎版`中，非 `Web端` 只能用于获取自定义组件，不能用于获取内置组件实例（如：`view`、`text`）。\
在 `uni-app x` 中，内置组件会返回组件根节点的引用，自定义组件会返回组件实例。

**注意事项：**
- 如果多个节点或自定义组件绑定相同 `ref` 属性，将获取到最后一个节点或组件实例的引用。
- 在 `v-for` 循环时，绑定 `ref` 属性会获取到节点或组件实例的集合。
- 在 `uni-app x` 中，要访问 `$refs` 中的属性，需要使用索引方式。

::: preview
> uni-app x
```ts
// 选项式 API
<template>
	<view>
		<text ref="textRef">text node</text>
		<Foo ref="fooRef" />
	</view>
</template>

<script lang="uts">
  import type { ComponentPublicInstance } from 'vue'

  export default {
    onReady() {
      const text = this.$refs["textRef"] as Element
      const foo = this.$refs["fooRef"] as ComponentPublicInstance
    }
  }
</script>

// 组合式 API
<template>
	<view>
		<text ref="textRef">text node</text>
		<Foo ref="fooRef" />
	</view>
</template>

<script setup lang="uts">
  import type { ComponentPublicInstance } from 'vue'
  import Foo from './Foo.uvue'
  
  const textRef = ref<null | Element>(null)
  const fooRef = ref<null | ComponentPublicInstance>(null)
</script>
```
> uni-app js 引擎版
```ts
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

## 监听页面生命周期

`4.0` 起可通过组合式 API 实现组件中监听页面生命周期，[示例代码](https://gitcode.net/dcloud/hello-uvue/-/blob/alpha/pages/composition-api/lifecycle/component-lifecycle/component-lifecycle.uvue)。


## 调用组件方法@methods

需要把组件分为 内置组件、easycom组件、非easycom组件，这3种组件有不同的方法调用方式。

### 内置组件的方法调用或设置属性

> 3.93+ 支持

使用 `this.$refs` 获取组件并as转换为组件对应的element类型，通过 `.`操作符 调用组件方法或设置属性。

**语法**

```(this.$refs['组件ref属性值'] as Uni[xxx]Element).foo();```

**内置组件的element类型规范**

Uni`组件名(驼峰)`Element

如：

`<button>`: UniButtonElement
`<picker-view>`: UniPickerViewElement

**示例代码**

::: preview
> 选项式 API
```html
<template>
  <slider ref="sliderRef" />
</template>

<script lang="uts">
  export default {
    onReady() {
      // value 为属性
      (this.$refs["sliderRef"] as UniSliderElement).value = 90;
      //此处注意 sliderRef 必须存在，如不存在，把 null as 成 UniSliderElement 会引发崩溃
    }
  }
</script>
```
> 组合式 API
```html
<template>
  <slider ref="sliderRef" />
</template>

<script setup lang="uts">
  const sliderRef = ref<null | UniSliderElement>(null)

  onReady(() => {
    (sliderRef.value!).value = 90
  })
</script>
```
:::

**bug&tips**

- 目前uts组件，即封装原生ui给uni-app或uni-app x的页面中使用，类型与内置组件的 Uni`组件名(驼峰)`Element 方式相同。目前没有代码提示。

### easycom组件调用方法或设置属性@method_easycom

> 3.97+ 支持 uni_modules 目录下的组件

easycom组件，用法和内置组件一样。也是使用 `this.$refs` 获取组件并转换为组件的类型，通过 `.`操作符 调用组件方法或设置属性。

**语法**

```(this.$refs['组件ref属性值'] as 驼峰ComponentPublicInstance).foo();```

**easycom组件的类型规范**

组件标签名首字母大写，驼峰+ComponentPublicInstance

如：

`<test/>` 类型为：TestComponentPublicInstance
`<uni-data-checkbox/>` 类型为：UniDataCheckboxComponentPublicInstance

**示例代码**

假使有一个 `Foo` 组件，其有若干方法 `foo1` 等，如下。

::: preview
> 选项式 API
```html
<script lang="uts">
  export default {
    methods: {
      foo1() {
		    console.log("foo1 triggered");
      },
      foo2(num : number) {
        console.log('foo2 triggered by num:', num);
      },
      foo3(callback : (() => void)) {
        callback()
      }
    }
  }
</script>
```
> 组合式 API
```html
<script setup lang="uts">
  const foo1 = () => {
    console.log("foo1 triggered");
  }
  const foo2 = (num : number) => {
    console.log('foo2 triggered by num:', num);
  }
  const foo3 = (callback : (() => void)) => {
    callback()
  }
  defineExpose({
    foo1,
    foo2,
    foo3,
  })
</script>
```
:::

`Foo` 组件符合[easycom规范](https://uniapp.dcloud.net.cn/component/#easycom)

那么在页面中调用 `Foo` 组件的方法如下：

::: preview
> 选项式 API
```html
<template>
  <Foo ref="fooRef" />
</template>

<script lang="uts">
  export default {
    onReady() {
      //注意组件必须存在，注意类型首字母大写
      const fooRef = (this.$refs["fooRef"] as FooComponentPublicInstance)
      fooRef.foo1();
      fooRef.foo2(100);
      fooRef.foo3(() => {console.log('foo3 triggered')});
    }
  }
</script>
```
> 组合式 API
```html
<template>
  <Foo ref='fooRef' />
</template>

<script setup lang="uts">
  const fooRef = ref<null | FooComponentPublicInstance>(null) 

  onReady(() => {
    (fooRef.value!).foo1();
    (fooRef.value!).foo2(100);
    (fooRef.value!).foo3(() => {console.log('foo3 triggered')});
  })
</script>
```
:::


### 其它自定义组件的方法调用使用callMethod@$callMethod

如果不是内置组件，也不是easycom组件，那么无法使用`.`操作符了。

此时需使用 `this.$refs` 获取组件实例，然后通过 `$callMethod` 调用组件的方法。也就是把组件的方法名、参数，当做callMethod的参数来传递。此时也就没有`.`操作符那样的代码提示和校验了。

callMethod可用于所有自定义组件，包括easycom组件也可以使用，只不过easycom组件有更简单的用法。

**语法**

```(this.$refs['组件ref属性值'] as ComponentPublicInstance).$callMethod('方法名', ...args)```

**组件类型**

ComponentPublicInstance


页面示例代码 `page.uvue`

::: preview
> 选项式 API
```html
<template>
  <Foo ref="fooRef" />
</template>

<script lang="uts">
  import Foo from './Foo.uvue'

  export default {
    components: {
      Foo
    },
    onReady() {
      const fooRef = this.$refs['fooRef'] as ComponentPublicInstance

      fooRef.$callMethod('foo1')

      const res = fooRef.$callMethod('foo2', 100, 10)
      console.log('res of foo2', res)

      fooRef.$callMethod('foo3', () => {
        console.log('foo3 triggered')
      })
    }
  }
</script>
```
> 组合式 API
```html
<template>
  <Foo ref="fooRef" />
</template>

<script setup lang="uts">
  import Foo from './Foo.uvue'

  const fooRef = ref<null | ComponentPublicInstance>(null)

  onReady(() => {
    (fooRef.value!).$callMethod('foo1')

    const res = (fooRef.value!).$callMethod('foo2', 100, 10)
    console.log('res of foo2', res);

    (fooRef.value!).$callMethod('foo3', () => {
      console.log('foo3 triggered')
    })
  })
</script>
```
:::

组件示例代码 `Foo.uvue`

::: preview
> 选项式 API
```html
<script lang="uts">
  export default {
    methods: {
      foo1() {
		    console.log("foo1 triggered");
      },
      foo2(num1 : number, num2: number){
        console.log(`foo2 triggered by num1: ${num1}, num2: ${num2}`)
        return num1 + num2
      },
      foo3(callback : (() => void)) {
        callback()
      }
    }
  }
</script>
```
> 组合式 API
```html
<script setup lang="uts">
  const foo1 = () => {
    console.log("foo1 triggered");
  }
  const foo2 = (num1 : number, num2: number): number => {
    console.log(`foo2 triggered by num1: ${num1}, num2: ${num2}`)
    return num1 + num2
  }
  const foo3 = (callback : (() => void)) => {
    callback()
  }
  defineExpose({
    foo1,
    foo2,
    foo3,
  })
</script>
```
:::

**注意：**
- App-Android 平台 `4.0` 版本开始支持 `$callMethod` 调用 `defineExpose` 导出的方法
- Web 平台、App-iOS 平台 `4.13` 版本开始支持 `$callMethod` 调用 `defineExpose` 导出的方法


## 如何开发同时兼容 uni-app x 和 uni-app 的组件

目前有两种方案：

- 目录下同时提供uvue，vue文件，分别适配 uni-app x 和 uni-app

组件作者在 uvue 和 vue 文件中可以自由使用各自的特性，比如 vue 中可以任意使用 js 或 ts 来书写代码，

如果部分组件逻辑被抽离为单独的文件，需要分别命名为各自环境支持的文件类型，导入时不同平台支持的文件类型也不同，

比如 uvue 文件目前不支持引入js或ts，而 vue 文件不能引入 uts 文件

对于现有的 uni-app 组件，通过新建 uvue 文件来渐进式支持 uni-app x，可以避免对已有 uni-app 项目造成影响

- 仅提供一个vue文件，同时适配 uni-app x 和 uni-app

该方案，需要script节点配置lang="ts"，这样才可以在 uni-app 项目中正常书写带有类型的代码，而在 uni-app x 项目中，则会忽略 lang="ts"，当做 uts 代码编译。

当需要区分平台或项目类型时，可以使用对应的条件编译。

<!-- 比如，当需要在 css 中区分原生渲染和webview渲染时

可以通过 APP-UVUE（表示在 uni-app x 项目app端的Android和iOS原生渲染）、APP-NVUE（表示在 uni-app 项目app端的nvue页面原生渲染） 区分，

`#ifdef APP-UVUE || APP-NVUE` 可以表示原生渲染，使用 `ifndef` 则可以取反表示为webview渲染，如 `#ifndef APP-UVUE || APP-NVUE`
 -->
比如通过 UNI-APP-X 来区分项目类型，更多条件编译见：[详情](https://uniapp.dcloud.net.cn/tutorial/platform.html)


### vue 与 uvue 不同文件后缀的优先级 @priority

新建组件时，默认组件的后缀名为.uvue，但也支持.vue。

.vue里面写uvue的语法，可以正常被.uvue页面引用和编译。

.vue里写条件编译，可以制作同时满足uni-app和uni-app x的组件。

.vue中适用于uni-app x的条件编译区域内的代码，必须符合uni-app x的规范。如果使用uni-app x不支持的、uni-app js引擎版特有的功能，会报错。

当你手动import或easycom手动配置规则，可以指定文件名后缀。比如`import PageHead from '@/components/page-head.uvue'`

但如果未明确指定组件后缀名的情况，且同一个组件目录下即存在.vue文件、又存在.uvue文件，
此时 `vue` 组件和 `uvue` 组件的优先级如下：
- 在 `uni-app x` 中，优先使用 `uvue` 组件，如果不存在 `uvue` 组件，则使用 `vue` 组件。
- 在 `uni-app` 中，只支持使用 `vue` 组件。
