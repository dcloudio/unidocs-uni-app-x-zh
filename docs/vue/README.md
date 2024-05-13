# uvue概述

[vue.js](https://vuejs.org/) 是流行的js框架，它提供了：
1. 简易的模板式写法。降低使用门槛，UI和逻辑分离更清晰。
2. 数据双向绑定。减少手写dom，diff机制提高性能。
3. 组件机制。封装UI和逻辑，让轮子更加丰富。

但 vue.js 并不支持web之外的其他平台，也不支持uts。

uni-app x 为vue开发者提供了跨平台的解决方案。

uni-app x 中，web平台内置了vue.js，其他平台为 DCloud 参考vue规范提供的兼容实现。

在 uni-app x 中，页面和组件的文件后缀名均为 `*.uvue`。u 即 uni 的意思。

页面与组件均符合vue的单文件组件规范，只不过页面需要在pages.json中注册且多了一批生命周期和API。

在非web平台，uvue 尽可能拉齐了vue.js的功能，但仍有些不常用的功能暂未提供，需注意查看相关文档的兼容性。同时 uvue 也新增了 [easycom](./component.md#easycom) 等技术，简化组件的使用。

hello uvue 是非常重要的vue示例，演示了各种vue功能的应用。

- 插件地址：[https://ext.dcloud.net.cn/plugin?id=15021](https://ext.dcloud.net.cn/plugin?id=15021)
- 源码地址：[https://gitcode.net/dcloud/hello-uvue](https://gitcode.net/dcloud/hello-uvue)，注意有master和alpha分支，对应HBuilderX最新的正式版和alpha版。

# 版本对应@ver
HBuilderX/uni-app x，会跟踪vue版本的升级，版本映射表如下

|HBuilderX	|vue版本	|
|--	|--	|
|4.14	|3.4	|

# 页面/组件内容构成@sfc

一个 uvue 页面/组件，符合vue单文件组件规范（SFC），有3个根节点标签：

1. 模板组件区 `<template>`
2. 脚本区 `<script>`
3. 样式区 `<style>`

注意html中，根节点是`<html>`，`<script>`和`<style>`是子节点。但在uvue中，这3个节点都是一级节点。

一个简单的选项式页面示例：
```vue
<template>
	<view class="content">
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hello world", // 定义绑定在页面上的data数据
			}
		},
		onLoad() {
			// 页面启动的生命周期，这里编写页面加载时的逻辑
		},
		methods: {
			buttonClick: function () {
				console.log("按钮被点了")
			},
		}
	}
</script>

<style>
	.content {
		width: 750rpx;
		background-color: white;
	}
</style>
```

## template

template中文名为`模板`，它类似html的标签。但有2个区别：

1. html中 `script` 和 `style` 是 html 的二级节点。但在 uvue 文件中，`template`、`script`、`style` 这3个是平级关系。
2. html 中写的是 web 标签，但 vue 的 `template` 中写的全都是 vue 组件（包括[内置基础组件](../component/README.md)、自定义uvue组件、[uts原生插件组件](../plugin/uts-component.md)），每个组件支持属性、事件、vue 指令，还可以绑定 vue 的 data 数据。

组件，即component，是vue中非常重要的概念，或者说现代开发框架都离不开组件概念。

我们知道js逻辑可以封装为函数或类库。而对于页面上可视的元素，则可以将ui、样式、逻辑一起封装为组件。详见[uvue组件规范](./component.md)

在 uni-app x 中， `<view>`是最基本的视图容器组件，`<text>`则是文字组件，`<button>`是按钮组件。这些都是[内置组件](../component/README.md)

一个页面或组件只能有一个template标签，template下面可以有多个二级节点，如下：

```vue
<template>
	<view>
		<text>标题</text>
	</view>
	<scroll-view>

	</scroll-view>
</template>
```

## script

script中编写逻辑代码。

uvue中只能有一个script标签。

script标签的属性如下：
- lang
lang 仅支持uts，不管script的lang属性写成什么，都按uts编译。
- setup
setup属性声明代表script里的代码为组合式写法，如果没有setup属性则为选项式写法。

### 组合式API
组合式 API，也称 Composition API，或 setup函数。

组合式提供了更灵活自由、更简洁的编程方式，通过代码而不是通过规范约定死的选项来定义data、method和生命周期。

如下页面代码的逻辑是：

1. 定义了一个响应式`title`，初始值是"Hello world"。
2. 在页面中放置了一个button组件，按钮文字区使用`{{}}`模板写法，里面写响应式变量`title`，那么`title`的值就会绑定到按钮的文字区，即按钮的初始文字是"Hello world"
3. 按钮的点击事件`@click`，指向了一个方法`buttonClick`，点击按钮即触发这个方法的执行
4. 页面onReady生命周期中打印日志

```vue
<template>
	<view>
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script setup>
  let title = ref("Hello world") //定义一个响应式变量。类似于选项式的定义data
	function buttonClick() { //方法不再需要写在method下面。这里从简使用了function，实际业务中推荐使用箭头函数，有更好的平台一致性
	  console.log("按钮被点了")
	}
	onReady(() => {
		console.log("页面onReady触发") // 页面生命周期，编写页面加载后的逻辑
	})
</script>

```

### 选项式API
选项式 API，也称 Option API，指在script中写`export default {}`，在其中通过多个选项的对象来定义data、method和生命周期。选项所定义的属性都会暴露在函数内部的 this 上，它会指向当前的组件实例。

以下代码的逻辑与上一章节组合式API的示例相同，只是写法改成了选项式写法。

```vue
<template>
	<view>
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hello world", // 定义绑定在页面上的data数据
			}
		},
		onReady() {
			console.log("页面onReady触发") // 页面生命周期，编写页面加载后的逻辑
		},
		methods: {
			buttonClick: function () {
				console.log("按钮被点了")
			},
		}
	}
</script>
```

#### `export default` 外的代码

既然有写在写`export default {}`里的代码，那么就有 `export default {}` 外面的代码。

写在外面一般有几种情况：

1. 引入第三方 uts 模块
2. 引入非 easycom 的组件（一般组件推荐使用[easycom](./component.md#easycom)，无需导入注册）
3. 定义 type，对 data 进行类型定义
4. 定义作用域更大的变量

```html
<script>
	const TAB_OFFSET = 1; // 外层静态变量不会跟随页面关闭而回收
	import charts from 'charts.uts'; // 导入外部js/ts模块
	import swiperPage from 'swiper-page.uvue'; //导入非easycom的组件
	type GroupType = {
		id : number,
		title : string
	} // 在uts中，为下面data数据的 groupList 定义类型
	export default {
		components: {
		    swiperPage
		}, // 注册非easycom组件
		data() {
			return {
				groupList: [
					{ id: 1, title: "第一组" },
					{ id: 2, title: "第二组" },
				] as GroupType[], // 为数据groupList定义ts类型
			}
		},
		onLoad() {},
		methods: {}
	}
</script>
```

开发者应谨慎编写 `export default {}` 外面的代码，这里的代码有2个注意事项：

1. 影响应用性能。不管写在哪个页面，这部分代码都在应用启动时执行，而不是页面加载。如果`export default {}`外的代码写的太复杂，会影响应用启动速度，占用更多内存。
2. 不跟随组件、页面关闭而回收。在外层的静态变量不会跟随页面关闭而回收。如果必要，你需要手动处理。比如 `beforeDestroy` 或 `destroyed` 生命周期进行处理。

## style（CSS功能） @css

style的写法与web的css基本相同。但在App端，由于并非webview渲染，支持的css有限。[详见](../css/README.md)

本章节重点讲解uvue下样式的使用注意事项。

一个页面/组件允许有多个style标签。

style通过lang属性，可以支持less、scss、stylus等css预处理语言。

### style 标签 @style

<!-- VUEJSON.style.description -->

<!-- VUEJSON.style.attribute -->

<!-- VUEJSON.style.event -->

<!-- VUEJSON.style.example -->

<!-- VUEJSON.style.compatibility -->

<!-- VUEJSON.style.children -->

<!-- VUEJSON.style.reference -->


### Class 与 Style 绑定 @class-style

- `uni-app x` 支持绑定  `UTSJSONObject` 和 `Map` 类型数据。
- 在App-Android平台上 `Map` 的性能高于 `UTSJSONObject` 数据类型。从 `uni-app x 4.01` 起，Web平台也支持了 `Map` 类型绑定。

如下示例中，给view组件的style和class分别绑定了2个data，就可以通过在逻辑代码里修改data而实现动态修改样式。
```vue
<template>
  <view>
    <view :style="styleMap" :class="classMap"></view>
  </view>
</template>

<script lang="uts">
  export default {
    data() {
      return {
        styleMap: new Map<string, string>([['border', '2px solid red'], ['background-color', 'green']]),
        classMap: new Map<string, boolean>([['w-100', true], ['h-100', true], ['rounded', false]])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .w-100 {
    width: 100px;
  }
  .h-100 {
    height: 100px;
  }
  .rounded {
    border-radius: 8px;
  }
</style>
```

- [参见](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A)

### 深度选择器 @scoped

> 处于 `scoped` 样式中的选择器如果想要做更“深度”的选择，也即：影响到子组件，可以使用 `:deep()` 这个伪类：

```vue
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>
```

### CSS Modules @css-module

一个 `<style module>` 标签会被编译为 `CSS Modules` 并且将生成的 CSS class 作为 `$style` 对象暴露给组件：

```vue
<template>
  <text :class="$style.red">This should be red</text>
</template>

<style module>
.red {
  color: red;
}
</style>
```

得出的 class 将被哈希化以避免冲突，实现了同样的将 CSS 仅作用于当前组件的效果。

#### CSS Modules 自定义注入名称 @css-module-custom-injection

你可以通过给 `module` attribute 一个值来自定义注入 class 对象的属性名：

```vue
<template>
  <text :class="classes.red">red</text>
</template>

<style module="classes">
.red {
  color: red;
}
</style>
```

#### CSS Modules 与组合式 API 一同使用 @css-module-composition-api

可以通过 `useCssModule` API 在 `setup()` 和 `<script setup>` 中访问注入的 class。对于使用了自定义注入名称的 `<style module>` 块，useCssModule 接收一个匹配的 module attribute 值作为第一个参数：

```ts
import { useCssModule } from 'vue'

// 在 setup() 作用域中...
// 默认情况下, 返回 <style module> 的 class
useCssModule()

// 具名情况下, 返回 <style module="classes"> 的 class
useCssModule('classes')
```

### CSS 中的 v-bind() @css-v-bind

|App|Web|
|:-:|:-:|
|x  |4.13+  |

[示例](./data-bind.md#v-bind-css-data)

单文件组件的 `<style>` 标签支持使用 `v-bind` CSS 函数将 CSS 的值链接到动态的组件状态：

```vue
<template>
  <text class="text">hello</text>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
}
</style>
```

这个语法同样也适用于 `<script setup>`，且支持 UTS 表达式 (需要用引号包裹起来)：

```vue
<script setup>
const theme = {
  color: 'red'
}
</script>

<template>
  <text class="view">hello</text>
</template>

<style scoped>
.text {
  color: v-bind('theme.color');
}
</style>
```
