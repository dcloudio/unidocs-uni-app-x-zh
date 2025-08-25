# UTS 编译器已知问题

本文档用于记录与追踪 UTS 编译器的已知问题，便于定位、规避与修复。

## withDefaults 与可选 Props 推断异常

- 发生版本：HBuilderX-4.75
- 问题描述：在 `<script setup lang="ts">` 中，将 `Props.text` 声明为可选（`text?: string`），并通过 `withDefaults` 以函数形式提供默认值时，编译器未正确处理，可能导致渲染或类型推断异常。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		{{ props.text }}
	</view>
</template>

<script setup lang="ts">
interface Props {
	text?: string;
}

const props = withDefaults(defineProps<Props>(), {
	text: () => "123123",
});
</script>
```

临时规避：将 `text` 改为必选（`text: string`），仍保留 `withDefaults` 的默认值。

```vue
<template>
	<view>
		{{ props.text }}
	</view>
</template>

<script setup lang="ts">
interface Props {
	text: string;
}

const props = withDefaults(defineProps<Props>(), {
	text: () => "123123",
});
</script>
```


## data 中对象未显式类型，模板访问属性导致编译问题

- 发生版本：待补充
- 问题描述：`data()` 中返回的对象字段未显式类型时，模板访问其子属性可能触发编译/类型检查问题。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		{{ key.name }}
	</view>
</template>

<script lang="ts">
export default {
	data() {
		return {
			key: { name: 'xxxx' }
		}
	},
}
</script>
```

修复代码：为对象显式声明类型，并在赋值处断言为该类型。

```vue
<template>
	<view>
		{{ key.name }}
	</view>
</template>

<script lang="ts">
type Key = {
	name: string
}

export default {
	data() {
		return {
			key: { name: 'xxxx' } as Key
		}
	},
}
</script>
```

## 仅在uni_modules插件下interface.uts定义的类型在页面中引用导致编译失败

- 发生版本：HBuilderX-4.75
- 问题描述：若类型仅存在于 `interface.uts` 且未在对应平台目录下的 uts 源文件中参与编译，编译器不会将该类型打包到最终产物，页面引用时将导致编译失败。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
	</view>
</template>

<script lang="uts" setup>
import { DrivceType } from '@/uni_modules/aa-bb'

let msg : DrivceType = {
	type: '123'
}
console.log(msg.type);
</script>
```

修改建议：
- 将 `DrivceType` 放到对应平台目录下的 uts 源文件中（如 app-android/app-ios/app-harmony 等），确保参与该平台编译；
- 或在平台 uts 模块中导出后，从页面按平台路径进行引用；
- 保持 `uni_modules/aa-bb` 的类型与实现位置一致，避免仅在 `interface.uts` 中存在。

修复状态：设计约束/使用限制，按上述建议调整工程结构。


## 页面 onTabItemTap 生命周期（编译失败）


复现代码：

```vue
<template>
	<view>
    </view>
</template>

<script>
	export default {
		onTabItemTap() {
		}
	}
</script>
```

修改建议：部分平台目前不支持onTabItemTap[兼容性](https://doc.dcloud.net.cn/uni-app-x/page.html#ontabitemtap)

## 组件同名前缀 + ComponentPublicInstance 类型别名

- 发生版本：HBuilderX-4.75
- 问题描述：这个类型是easycom组件规范的，不能自行定义，类似的可能还有很多内置类型，如果开发者自己去定义这些类型，都可能产生非预期的问题。

复现代码：

```vue
<template>
	<view>
		<MyTest></MyTest>
	</view>
	</template>

<script setup lang="ts">
import { ref } from 'vue'

type MyTestComponentPublicInstance = {}

const myTestRef = ref<MyTestComponentPublicInstance>({})

console.log(myTestRef)
</script>
```

修改建议 / 临时规避：
- 避免将类型别名命名为以 `ComponentPublicInstance` 结尾的形式，改为如 `MyTestInst`、`MyTestInstance`、`IMyTest` 等；
- 或避免类型别名前缀与现有组件名完全一致；


## 在 createApp 中向 globalProperties 挂载对象导致异常/编译失败

- 发生版本：HBuilderX-4.75
- 问题描述：将对象直接赋值给 `app.config.globalProperties.mydata` 在部分场景会导致编译或运行异常。
- 修复状态：修复中

复现代码：

```ts
import App from './App.uvue'
import { createSSRApp } from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	const data = { type: 123 }
	app.config.globalProperties.mydata = data
	return {
		app
	}
}
```

修改建议：暂时仅挂载基础类型，避免直接挂载对象。

```ts
import App from './App.uvue'
import { createSSRApp } from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.mydata = 123
	return {
		app
	}
}
```


## props 与 data 字段仅大小写差异导致编译/冲突问题

- 发生版本：HBuilderX-4.75
- 问题描述：当 `props` 字段名与 `data` 中的字段名仅大小写不同，可能触发编译冲突或运行时行为异常。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="ts">
export default {
	props: {
		aa: {
			type: Boolean,
		},
	},
	data() {
		return {
			Aa: null as boolean | null,
		}
	},
}
</script>
```

修复代码：将 `data` 字段更名，避免与 `props` 仅大小写差异（示例改为 `ab`）。

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="ts">
export default {
	props: {
		aa: {
			type: Boolean,
		},
	},
	data() {
		return {
			ab: null as boolean | null,
		}
	},
}
</script>
```

## RequestOptions.header 声明为 object 且默认值 {} 时编译失败

- 发生版本：HBuilderX-4.75
- 问题描述：当 `RequestOptions.header?: object` 且函数参数使用解构默认值 `header = {}` 时，编译阶段可能失败。(object本身就不是一个跨端类型)
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="uts" setup>
	type Header = {}
	type RequestOptions = { 
		msg?: string,
		header?: object
	}
	function test({ msg = "", header = {} } : RequestOptions) {
		console.log(msg);
		if (header != null) {
			for (const key in header) {
				console.log(key)
			}
		}
	}
	test({} as RequestOptions)
</script>
```

修复代码：将 `header` 明确为自定义 `Header` 类型（而非 `object`），并保留默认值 `{}`。

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="uts" setup>
	type Header = {}
	type RequestOptions = { 
		msg?: string,
		header?: Header
	}
	function test({ msg = "", header = {} } : RequestOptions) {
		console.log(msg);
		if (header != null) {
			for (const key in header) {
				console.log(key)
			}
		}
	}
	test({} as RequestOptions)
</script>
```

## defineComponent + Class 类型 Prop 默认值（函数）导致编译失败

- 发生版本：HBuilderX-4.75
- 问题描述：当 props 的 `type` 为自定义 Class，且 `default` 使用工厂函数返回 `new Abc()` 时，编译阶段会报错。
- 修复状态：修复中

复现代码：

```ts
import { defineComponent } from 'vue'

class Abc {}

export default defineComponent({
	props: {
		a: {
			type: Abc,
			default: () => {
				return new Abc()
			},
		},
	},
})
```

修改建议 / 临时规避：使用对象式导出，并将默认值改为直接实例化，而非函数返回。

```ts
class Abc {}

export default {
	props: {
		propName: {
			type: Abc,
			default: new Abc(),
		},
	},
}
```

## defineProps 默认值返回空数组需要显式数组类型

- 发生版本：待补充
- 影响范围：`<script setup lang="uts">` 中使用 `defineProps`，默认值为 `[]`
- 问题描述：为 props 提供默认值 `[]` 且缺少明确的数组元素类型断言时，可能导致编译或类型推断异常。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script setup lang="uts">
const props = defineProps({
	value: {
		default() {
			return [] as any
		}
	}
})
</script>
```

修复代码：显式标注具体数组类型（示例为 `string[]`）。

```vue
<template>
	<view>
		123
	</view>
</template>

<script setup lang="uts">
const props = defineProps({
	value: {
		default() {
			return [] as string[]
		}
	}
})
</script>
```


## props 使用 UTSArray 类型且默认值为 [] 导致问题

- 发生版本：待补充
- 问题描述：UTSArray是部分平台的内部实现，不是一个跨端类型，应该用Array类型。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="ts">
export default {
	props: {
		modelValue: {
			type: UTSArray,
			default: [],
		},
	},
}
</script>
```

修复代码：将类型改为标准 `Array`。

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="ts">
export default {
	props: {
		modelValue: {
			type: Array,
			default: [],
		},
	},
}
</script>
```




