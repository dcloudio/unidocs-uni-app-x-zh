# vue

uni-app x的vue规范，按照vue3规范实现，从4.0起支持组合式写法。

本文暂时只包括兼容性表格，vue功能详情另见 [vue3概述](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#)、[Vue3 API](https://uniapp.dcloud.net.cn/tutorial/vue3-api.html)。

uni-app x中vue的用法，有单独的示例应用：[hello uvue](https://gitcode.net/dcloud/hello-uvue)。这里都是可以跑通的使用样例代码。

## 全局 API兼容性

### 应用实例 @app-instance

<!-- VUEJSON.application.compatibility -->
<!-- VUEJSON.application.example -->

**注意：**
- **app.use:** `app.use` 支持通过对象字面量、函数及 `definePlugin` 方式定义插件。\
支持传递插件参数，当传递插件参数时，`app` 的类型需要指定为 `VueApp`。
```ts
// main.uts
export function createApp() {
  const app = createSSRApp(App)

  // 通过对象字面量方式注册插件
  app.use({
    install(app) {
      app.config.globalProperties.plugin1 = "plugin1"
    }
  })

  // 通过函数方式注册插件
  app.use(function (app) {
    app.config.globalProperties.plugin2 = "plugin2"
  })

  // 通过 definePlugin + 对象字面量方式注册插件
  const plugin3= definePlugin({
    install(app) {
      app.config.globalProperties.plugin3 = "plugin3"
    }
  })
  app.use(plugin3)

  // 通过 definePlugin + 函数方式注册插件
  const plugin4= definePlugin(function (app) {
    app.config.globalProperties.plugin4 = "plugin4"
  })
  app.use(plugin4)

  // 注册插件时传递参数
  // 注意：当传递插件参数时，app 的类型需要指定为 VueApp
  app.use(function (app: VueApp, arg1:string, arg2:string) {
	  app.config.globalProperties.plugin5 = `${arg1}-${arg2}`
  }, "arg1", "arg2");
}
```
- **app.config.globalProperties:** 请注意，`globalProperties` 是一个保留关键字，因此在项目中请勿声明名为 `globalProperties` 的变量。\
在向 `globalProperties` 注册方法时，请使用直接函数表达式方式进行赋值。不支持先声明函数，再将其注册到 `globalProperties` 上的方式。同时，注册的函数一旦被赋值，不允许进行修改。\
`globalProperties` 在编译时处理，因此确保你的操作在编译时是可知的。例如，将变量赋值给 `globalProperties` 时，这个变量在编译时必须是已知的，而不能是在运行时才能确定的变量。

### 通用

<!-- VUEJSON.general.compatibility -->
<!-- VUEJSON.general.example -->

#### nextTick 使用注意事项

目前 nextTick 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的的，所以 nextTick 不能保证 DOM 排版以及渲染完毕。如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/element.md) 对象。在修改 DOM 后，立刻使用 [Element](../dom/element.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。

## 组合式 API @composition-api

**注意：**
- 暂不支持 `<script setup>` 和 `<script>` 同时使用，如果需要配置 `options` 内容，比如 `name`，可以使用 `defineOptions`。
- 暂不支持顶层 `await`。
- 暂不支持 `<script setup>` 配置 `generic` 泛型类型参数。
- `App.uvue` 暂不支持组合式 API。

### 响应式: 核心

<!-- VUEJSON.reactivity_core.compatibility -->
<!-- VUEJSON.reactivity_core.example -->

**注意：**
- `computed` 需通过泛型指定返回值类型。
```ts
const count = ref(0)
const doubleCount = computed<number>(() : number => {
  return count.value * 2
})
```

### 响应式: 工具

<!-- VUEJSON.reactivity_utilities.compatibility -->
<!-- VUEJSON.reactivity_utilities.example -->

**注意：**
- `toRefs` 仅支持 `Array` 和 `UTSJSONObject`, 不支持自定义类型。

### 响应式: 进阶

<!-- VUEJSON.reactivity_advanced.compatibility -->
<!-- VUEJSON.reactivity_advanced.example -->

### 生命周期钩子

<!-- VUEJSON.composition_lifecycle.compatibility -->

#### [函数 event 参数的类型](../tutorial/codegap.md#function-event-argument-type)

### 指令 @directives

<!-- VUEJSON.directives.compatibility -->
<!-- VUEJSON.directives.example -->

**注意：**
- **v-html:** 在 `App-android` 平台，`v-html` 指令通过编译为 [rich-text](../component/rich-text.md) 组件实现。因此，`v-html` 指令的内容必须是 `rich-text` 支持的格式, 并且要遵循标签嵌套规则，例如， `swiper` 标签内只允许嵌套 `swiper-item` 标签。\
同时，受限于 `rich-text` 组件不支持 `class` 样式，`v-html` 指令中同样不支持 `class` 样式。\
绑定 `v-html` 的标签内的内容会被忽略，`v-html` 指令的内容会编译为 `rich-text` 组件渲染为该标签的子节点。

### 事件处理

- [事件修饰符](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) 只支持 `stop` 和 `once`。

## script

- 仅支持 `export default {}` 方式定义组件。
- `data` 仅支持函数返回对象字面量方式。
```ts
<script lang="uts">
	export default {
		data() {
			return {
				// 必须写这里
			}
		}
	}
</script>
```

## [Class 与 Style 绑定](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A)

- `uni-app x` 新增支持绑定 `Map` 类型数据，性能高于 `Object` 数据类型。

## 应用生命周期
uni-app x 新增了 [onLastPageBackPress](../collocation/App.md#applifecycle) 和 [onExit](../collocation/App.md#applifecycle) 应用级生命周期，Android退出应用逻辑写在app.uvue里，新建项目的模板自动包含相关代码。如需修改退出逻辑，请直接修改相关代码。

## 组件 @component

- [props](../component/README.md#props)
- [自定义事件](../component/README.md#自定义事件)
- [计算属性和侦听器](../component/README.md#计算属性和侦听器)
- [作用域插槽的类型](../component/README.md#作用域插槽的类型)
- [监听页面生命周期](../component/README.md#监听页面生命周期)
- [vue 与 uvue 不同文件后缀的优先级](../component/README.md#priority)

::: warning 注意
1. App 端，如需页面级滚动，根节点必须是 `scroll-view` 标签。
:::

<!-- VUEJSON.components.compatibility -->
<!-- VUEJSON.components.example -->
### 特殊元素 @special-elements

#### script

<!-- VUEJSON.script.description -->

<!-- VUEJSON.script.attrubute -->

<!-- VUEJSON.script.event -->

<!-- VUEJSON.script.example -->

<!-- VUEJSON.script.compatibility -->

<!-- VUEJSON.script.children -->

<!-- VUEJSON.script.reference -->

#### template

<!-- VUEJSON.template.description -->

<!-- VUEJSON.template.attrubute -->

<!-- VUEJSON.template.event -->

<!-- VUEJSON.template.example -->

<!-- VUEJSON.template.compatibility -->

<!-- VUEJSON.template.children -->

<!-- VUEJSON.template.reference -->


#### slot

<!-- VUEJSON.slot.description -->

<!-- VUEJSON.slot.attrubute -->

<!-- VUEJSON.slot.event -->

<!-- VUEJSON.slot.example -->

<!-- VUEJSON.slot.compatibility -->

<!-- VUEJSON.slot.children -->

<!-- VUEJSON.slot.reference -->



#### style

<!-- VUEJSON.style.description -->

<!-- VUEJSON.style.attrubute -->

<!-- VUEJSON.style.event -->

<!-- VUEJSON.style.example -->

<!-- VUEJSON.style.compatibility -->

<!-- VUEJSON.style.children -->

<!-- VUEJSON.style.reference -->


#### keep-alive

<!-- VUEJSON.keep-alive.description -->

<!-- VUEJSON.keep-alive.attrubute -->

<!-- VUEJSON.keep-alive.event -->

<!-- VUEJSON.keep-alive.example -->

<!-- VUEJSON.keep-alive.compatibility -->

<!-- VUEJSON.keep-alive.children -->

<!-- VUEJSON.keep-alive.reference -->


#### component

<!-- VUEJSON.component.description -->

<!-- VUEJSON.component.attrubute -->

<!-- VUEJSON.component.event -->

<!-- VUEJSON.component.example -->

<!-- VUEJSON.component.compatibility -->

<!-- VUEJSON.component.children -->

<!-- VUEJSON.component.reference -->

#### transition

<!-- VUEJSON.transition.description -->

<!-- VUEJSON.transition.attrubute -->

<!-- VUEJSON.transition.event -->

<!-- VUEJSON.transition.example -->

<!-- VUEJSON.transition.compatibility -->

<!-- VUEJSON.transition.children -->

<!-- VUEJSON.transition.reference -->


#### transition-group

<!-- VUEJSON.transition-group.description -->

<!-- VUEJSON.transition-group.attrubute -->

<!-- VUEJSON.transition-group.event -->

<!-- VUEJSON.transition-group.example -->

<!-- VUEJSON.transition-group.compatibility -->

<!-- VUEJSON.transition-group.children -->

<!-- VUEJSON.transition-group.reference -->


#### teleport

<!-- VUEJSON.teleport.description -->

<!-- VUEJSON.teleport.attrubute -->

**注意：**
- App-Android 平台暂不支持动态修改 `to` 属性。

<!-- VUEJSON.teleport.event -->

<!-- VUEJSON.teleport.example -->

<!-- VUEJSON.teleport.compatibility -->

<!-- VUEJSON.teleport.children -->

<!-- VUEJSON.teleport.reference -->

### 特殊 Attributes @special-attributes

<!-- VUEJSON.special_attributes.compatibility -->
<!-- VUEJSON.special_attributes.example -->

### 生命周期选项 @lifecycle-options

<!-- VUEJSON.options_lifecycle.compatibility -->
<!-- VUEJSON.options_lifecycle.example -->

#### mounted、unmounted 使用注意事项

目前 mounted、unmounted 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的的，所以 mounted、unmounted 不能保证 DOM 排版以及渲染完毕。如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/element.md) 对象。在修改 DOM 后，立刻使用 [Element](../dom/element.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。

## 插件

暂不支持vue插件，比如pinia、vuex、i18n、router。简单的状态管理可以参考文档[全局变量和状态管理](../tutorial/store.md)。

## 选项式 API兼容性 @options-api-compatibility

### 状态选项

<!-- VUEJSON.options_state.compatibility -->
**注意：**
- `watch immediate` 第一次调用时，App-Android 平台旧值为初始值，web 平台为 null。

<!-- VUEJSON.options_state.example -->
### 渲染选项 @rendering-options


<!-- VUEJSON.options_rendering.compatibility -->
<!-- VUEJSON.options_rendering.example -->

### 组合选项 @composition-options


<!-- VUEJSON.options_composition.compatibility -->
<!-- VUEJSON.options_composition.example -->

**注意：**
- **inject:** 当使用 `inject` 声明从上层提供方注入的属性时，支持两种写法：字符串数组和对象。推荐使用对象写法，因为当使用数组方法时，类型会被推导为 `any | null` 类型。\
使用对象写法时，额外增加 `type` 属性用于标记类型。如果注入的属性类型不是基础数据类型，需要通过 `PropType` 来标记类型。
```ts
export default {
  inject: {
    provideString: {
      type: String,
      default: 'default provide string value'
    },
    provideObject: {
      type: Object as PropType<UTSJSONObject>
    },
    provideMap: {
      type: Object as PropType<Map<string, string>>,
      default: (): Map<string, string> => {
        return new Map<string, string>([['key', 'default provide map value']])
      }
    }
  }
}
```
- **mixins:** `mixins` 仅支持通过字面量对象方式和 `defineMixin` 函数方式定义。
```ts
const mixin1 = defineMixin({
  onLoad() {
    console.log('mixin1 onLoad')
  }
})
export default {
  mixins: [
    mixin1,
    {
      data() {
        return {
          mixin2: 'mixin2'
        }
      }
    }
  ]
}
```
同名属性会被覆盖，同名生命周期会依次执行。

同名属性的优先级如下：
- 在 `app.mixin` 内嵌入的 mixin < 在 `app.mixin` 中声明的 mixin < 在 `page.mixin` 内嵌入的 mixin < 在 `page.mixin` 中声明的 mixin < 在 `component.mixin` 内嵌入的 mixin < 在 `component.mixin` 中声明的 mixin

同名生命周期的执行顺序如下：
1. 在 `app.mixin` 内嵌入的 mixin
2. 在 `app.mixin` 中声明的 mixin
3. 在 `page.mixin` 内嵌入的 mixin
4. 在 `page.mixin` 中声明的 mixin
5. 在 `component.mixin` 内嵌入的 mixin
6. 在 `component.mixin` 中声明的 mixin

### 其他杂项


<!-- VUEJSON.options_misc.compatibility -->
<!-- VUEJSON.options_misc.example -->
### 组件实例 @component-instance


<!-- VUEJSON.component_instance.compatibility -->
<!-- VUEJSON.component_instance.example -->

#### $nextTick 使用注意事项

目前 $nextTick 可以保证当前数据已经同步到 DOM，但是由于排版和渲染是异步的的，所以 $nextTick 不能保证 DOM 排版以及渲染完毕。如果需要获取排版后的节点信息推荐使用 [uni.createSelectorQuery](../api/nodes-info.md) 不推荐直接使用 [Element](../dom/element.md) 对象。在修改 DOM 后，立刻使用 [Element](../dom/element.md) 对象的同步接口获取 DOM 状态可能获取到的是排版之前的，而 [uni.createSelectorQuery](../api/nodes-info.md) 可以保障获取到的节点信息是排版之后的。

## 进阶 API兼容性

### 渲染函数


<!-- VUEJSON.render_function.compatibility -->
<!-- VUEJSON.render_function.example -->

## 单文件组件兼容性

### \<script setup>

<!-- VUEJSON.single_file_component_script.compatibility -->

**注意：**
- `defineProps` 仅支持数组字面量、对象字面量定义（等同于 `options` 中的 `props`规则）及使用纯类型参数的方式来声明。
```ts
// 数组字面量
defineProps(['str', 'num', 'bool', 'arr', 'obj', 'fn'])

// 对象字面量
defineProps({
  str: String,
  num: Number,
  bool: {
    type: Boolean,
    default: true
  },
  arr: {
    type: Array as PropType<string[]>,
    default: () : string[] => [] as string[]
  },
  obj: {
    type: Object as PropType<UTSJSONObject>,
    default: () : UTSJSONObject => ({ a: 1 })
  },
  fn: {
    type: Function as PropType<() => string>,
    default: () : string => ''
  }
})

// 纯类型参数
defineProps<{
  str : String,
  num : Number,
  bool : Boolean,
  arr : PropType<string[]>,
  obj : PropType<UTSJSONObject>,
  fn : PropType<() => string>
}>()
```
- `defineEmits` 仅支持数组字面量和纯类型参数的方式来声明。
```ts
// 数组字面量
const emit = defineEmits(['change'])

// 纯类型参数
const emit = defineEmits<{
  (e : 'change', id : number) : void
}>()
const emit = defineEmits<{
  // 具名元组语法
  change : [id: number]
}>()

```
- `defineOptions` 仅支持对象字面量方式定义。
```ts
defineOptions({
  data() {
    return {
      count: 0,
      price: 10,
      total: 0
    }
  },
  computed: {
    doubleCount() : number {
      return this.count * 2
    },
  },
  watch: {
    count() {
      this.total = this.price * this.count
    },
  },
  methods: {
    increment() {
      this.count++
    }
  }
})
```
- `defineExpose` 仅支持对象字面量方式定义，导出的变量或方法，必须是 `setup` 中定义的，暂不支持外部定义。
```ts
<script setup>
  const str = 'str'
  const num = ref(0)
  const increment = () => {
    num.value++
  }

  defineExpose({
    str,
    num,
    increment
  })
</script>
```

## 其他示例

- [嵌套组件通讯](https://gitcode.net/dcloud/hello-uvue/-/tree/master/pages/examples/nested-component-communication)
- [自定义组件中使用 class 定制另一个自定义组件根节点样式](https://gitcode.net/dcloud/hello-uvue/-/tree/master/pages/examples/set-custom-child-component-root-node-class)

<!-- ## Bug & Tips@tips -->
