# 单文件组件 @single-file-component

## \<script setup> @script_setup

### 基本语法 @basic-syntax

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
<!-- VUEJSON.script.description -->

<!-- VUEJSON.script.attribute -->

<!-- VUEJSON.script.event -->

<!-- VUEJSON.script.example -->

<!-- VUEJSON.script.compatibility -->

<!-- VUEJSON.script.children -->

<!-- VUEJSON.script.reference -->

### 单文件组件中方法兼容性 @single-file-component-script-methods

<!-- VUEJSON.single_file_component_script.compatibility -->


#### defineProps

仅支持数组字面量、对象字面量定义（等同于 `options` 中的 `props`规则）及使用纯类型参数的方式来声明。

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
#### defineOptions

仅支持对象字面量方式定义。

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
#### defineExpose

仅支持对象字面量方式定义，导出的变量或方法，必须是 `setup` 中定义的，暂不支持外部定义。

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

<!-- VUEJSON.single_file_component_script.example -->

## CSS 功能 @css

### style 标签 @style

<!-- VUEJSON.style.description -->

<!-- VUEJSON.style.attribute -->

<!-- VUEJSON.style.event -->

<!-- VUEJSON.style.example -->

<!-- VUEJSON.style.compatibility -->

<!-- VUEJSON.style.children -->

<!-- VUEJSON.style.reference -->

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
### Class 与 Style 绑定 @class-style

- [参见](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#class-%E4%B8%8E-style-%E7%BB%91%E5%AE%9A)
- `uni-app x` 支持绑定  `UTSJSONObject` 和 `Map` 类型数据。
- 在App-Android平台上 `Map` 的性能高于 `UTSJSONObject` 数据类型。从 `uni-app x 4.01` 起，Web平台也支持了 `Map` 类型绑定。

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
