# UTS 编译器已知问题

本文档用于记录与追踪 UTS 编译器的已知问题，便于定位、规避与修复。

## withDefaults 与可选 Props 推断异常 @error1

- 发生版本：HBuilderX-4.75
- 问题描述：在 `<script setup lang="uts">` 中，将 `Props.text` 声明为可选（`text?: string`），并通过 `withDefaults` 以函数形式提供默认值时，编译器未正确处理，可能导致渲染或类型推断异常。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		{{ props.text }}
	</view>
</template>

<script setup lang="uts">
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

<script setup lang="uts">
interface Props {
	text: string;
}

const props = withDefaults(defineProps<Props>(), {
	text: () => "123123",
});
</script>
```


## data 中对象未显式类型，模板访问属性导致编译问题 @error2

- 发生版本：HBuilderX-4.75
- 问题描述：`data()` 中返回的对象字段未显式类型时，模板访问其子属性可能触发编译/类型检查问题。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		{{ key.name }}
	</view>
</template>

<script lang="uts">
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

<script lang="uts">
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

## 仅在uni_modules插件下interface.uts定义的类型在页面中引用导致编译失败 @error3

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


## 页面 onTabItemTap 生命周期（编译失败） @error4


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

## 组件同名前缀 + ComponentPublicInstance 类型别名 @error5

- 发生版本：HBuilderX-4.75
- 问题描述：这个类型是easycom组件规范的，不能自行定义，类似的可能还有很多内置类型，如果开发者自己去定义这些类型，都可能产生非预期的问题。

复现代码：

```vue
<template>
	<view>
		<MyTest></MyTest>
	</view>
	</template>

<script setup lang="uts">
import { ref } from 'vue'

type MyTestComponentPublicInstance = {}

const myTestRef = ref<MyTestComponentPublicInstance>({})

console.log(myTestRef)
</script>
```

修改建议 / 临时规避：
- 避免将类型别名命名为以 `ComponentPublicInstance` 结尾的形式，改为如 `MyTestInst`、`MyTestInstance`、`IMyTest` 等；
- 或避免类型别名前缀与现有组件名完全一致；


## 在 createApp 中向 globalProperties 挂载对象导致异常/编译失败 @error6

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


## props 与 data 字段仅大小写差异导致编译/冲突问题 @error7

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

<script lang="uts">
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

<script lang="uts">
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

## RequestOptions.header 声明为 object 且默认值 {} 时编译失败 @error8

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

## defineComponent + Class 类型 Prop 默认值（函数）导致编译失败 @error9

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

## defineProps 默认值返回空数组需要显式数组类型 @error10

- 发生版本：HBuilderX-4.75
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


## props 使用 UTSArray 类型且默认值为 [] 导致问题 @error11

- 发生版本：HBuilderX-4.75
- 问题描述：UTSArray是部分平台的内部实现，不是一个跨端类型，应该用Array类型。
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="uts">
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

<script lang="uts">
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

## props和data大小写问题 @error12

- 发生版本：HBuilderX-4.75
- 问题描述：data和props存在相同名称，但大小写不一样的字段时编译器报错
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="uts">
    export default {
        props: {
            aa: {
                type: Boolean
            }
        },
        data() {
            return {
                Aa: null as boolean | null,
            }
        }
    }
</script>
```

修复代码：避免出现同名属性

```vue
<template>
	<view>
		123
	</view>
</template>

<script lang="uts">
    export default {
        props: {
            aa: {
                type: Boolean
            }
        },
        data() {
            return {
                bb: null as boolean | null,
            }
        }
    }
</script>
```

## setup模式下, 函数定义语句位于该函数调用语句之前时报错 @error13
- 发生版本：HBuilderX-4.75
- 问题描述：编译器在处理时有特殊处理，导致存在问题
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script setup lang="uts">
    test();
    function test(){
        console.log('test')
    }
</script>
```

修复代码：将函数调用放在函数定义之后

```vue
<template>
	<view>
		123
	</view>
</template>

<script setup lang="uts">
    function test(){
        console.log('test')
    }
	test();
</script>
```

## 在 `computed` 中的函数返回数组类型但没有声明返回值类型时报错 @error14

- 发生版本：HBuilderX-4.75
- 问题描述：在`computed` 中函数返回为数组，但没有声明返回值类型
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script>
    export default{
        computed:{
            test4(){
                return [{id: 1, orderNo: '11'}]
            }
        }
    }
</script>
```

修复代码：明确返回值类型

```vue
<template>
	<view>
		123
	</view>
</template>

<script>
	type Ma = {
		id: number,
		orderNo: string
	}
    export default{
        computed:{
            test4() : Ma[] {
                return [{id: 1, orderNo: '11'}]
            }
        }
    }
</script>
```


## `import * as xx from 'xx'` 时报错 @error15

- 发生版本：HBuilderX-4.75
- 问题描述：使用export导出函数或者类，然后`import * as xx from ''`时报错
- 修复状态：修复中

复现代码：

```vue
<template>
	<view>
		123
	</view>
</template>

<script>
	import * as xxx from './foo.uts'
	console.log(xxx);
    export default{
    }
</script>
```

```ts
export function myFunction() {
   console.log("Hello");
}
```

修复代码：使用`import { xx } from './xx'`

```vue
<template>
	<view>
		123
	</view>
</template>

<script>
	import { myFunction }from './foo.uts'
	myFunction()
    export default{
    }
</script>
```

## 解构时报错 @error16

- 发生版本：HBuilderX-4.75
- 问题描述：解构UTSJSONObject时报错
- 修复状态：修复中

复现代码：

```ts
const someObject = {
    a: 1
}
let { a } = someObject;
console.log(a)
```

修复代码：使用xxx.a来获取属性值

```ts
const someObject = {
    a: 1
}
console.log(someObject.a)
```

## 类型不匹配 @error17

- 发生版本：HBuilderX-4.75
- 问题描述：函数参数要求非空值，但传递了一个可能为空的数值。

复现代码：

```ts
let targetUrl = ""
let url = decodeURI(targetUrl as string)
uni.redirectTo({
	url: url
})
```

修复代码：判断url是否为null

```ts
let targetUrl = ""
const url = decodeURI(targetUrl as string)
if (url != null) {
	uni.redirectTo({
		url: url
	})
}
```

## Unresolved reference 'xxx' @error18

- 发生版本：HBuilderX-4.75
- 问题描述：变量未定义/拼写错误/摇树机制

#### 插件打包失败

```ts
import { xx } from '@/uni_modules/xxx';
console.log(xx())
```

编译时日志中提示:

```bash
uni_module [xxx] (Android) 存在三方依赖或资源引用，请到HBuilderX【设置-运行配置】配置运行环境或者提交云端打自定义基座。详情参考: https://uniapp.dcloud.net.cn/tutorial/run/uts-development-android.html

找不到名称“xx”

```

> 报错原因其实就是因为插件依赖了第三方库，导致编译前需要在HBuilderX中设置运行配置。
> 其他原因导致插件编译失败也会出现`Unresolved reference 'xxx'`的情况，注意查看编译日志中的信息。

如何修复:

根据报错日志来设置运行配置就行。

#### template使用xx.x来访问属性
复现代码：
```vue
<template>
	<view>
		{{ user.name }}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: 'xxx'
				}
			}
		},
	}
</script>
```

修复代码：
```vue
<template>
	<view>
		{{ user['name'] }}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					name: 'xxx'
				}
			}
		},
	}
</script>
```

#### 变量未定义
复现代码：

```ts
function test() {
	xxx() // 这里xxx函数没有定义会导致报错
}
```

修复代码：

```ts
function xxx() {

}
function test() {
	xxx()
}
```

#### 未遵守“先定义后使用”的规定，使用代码在定义代码之前。

复现代码：
```vue
<template>
    <view></view>
</template>

<script setup lang="uts">
	function test() {
		demo() // 这里会报错
	}
	
	function demo() {
		console.log('===')
	}
</script>
```

修复代码：

```vue
<template>
    <view></view>
</template>

<script setup lang="uts">
	function demo() {
		console.log('===')
	}
	function test() {
		demo()
	}
</script>

```

#### 摇树机制(自定义基座、三方插件)

复现代码：

```ts
	uni.request({
		url: ''
	})
```

如何修复：在打包自定义基座时，需确保包含 uni.request 相关代码。这是因为，若项目中未实际使用该接口，打包过程中因为[摇树机制](../collocation/manifest-modules.md#treeshaking)将不会自动把 uni.request 对应的 api或者插件 纳入自定义基座。这种情况下，当用户使用该自定义基座运行包含 uni.request 调用的代码时，会出现接口找不到的错误提示。

::: tip Tips  
其他场景有:

- 拼写错误
:::