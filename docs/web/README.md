# 编译到web端

> 新增于4.0版本

uni-app x 编译到web平台时，并非是与uni-app js引擎版一致。而是基于uts的统一规范，和编译到安卓端的一致性较高。

与App版相比，web版有几个较大的差别：
1. web版是一个spa的单页应用，而app是多页的。
2. pages.json配置的导航栏和tabbar，在web端并非原生的，而是网页的一部分。虽然uvue页面仍然是在导航栏和tabbar之间的，但在web平台，开发者可以直接操作导航栏和tabbar的dom。
3. web版默认有页面滚动；app没有。

本文档会介绍与web和Android的差异及注意事项。

## web运行失败注意事项@faq

- 在比较早的HBuilderX版本中创建的uni-app x项目，特征是项目根目录是app.vue而不是app.uvue。这样的项目运行web会失败。需替换index.html和app.uvue这2个文件，可以新建项目从中复制，也可以从hello uni-app x示例项目复制。

## vue

### 特性支持情况

uni-app x编译到web端时遵循vue规范，目前有部分vue特性暂不支持。

不支持的特性如下

- 组合式API：`defineOptions`、`defineModel`、`toValue`、`toRef`、`toRefs`、`hasInjectionContext`
- 指令：`v-once`、`v-memo`
- render函数
- 不支持组件中监听页面 `onPageScroll`、`onReachBottom` 生命周期

部分支持的特性

- mixin：需要使用`defineMixin`函数定义mixin，不可直接使用对象字面量定义mixin

### refs@refs

使用refs获取内置组件实例时会获取到对应的Element，而不是vue组件实例。

```vue
<template>
  <view ref="view"></view>
</template>
<script>
export default {
  onReady() {
    console.log(this.$refs['view']) // 此时获取到的是UniViewElement
  }
}
</script>
```

### vue实例相关属性类型问题

为保证运行性能，app安卓端部分属性（如：$data、$refs）被转为了Map类型（安卓端map支持使用下标访问），而web端仍是普通对象或proxy。为保证多端代码一致，在使用这些属性时可以统一为下标访问。

```vue
<template>
  <view></view>
</template>
<script>
export default {
  data() {
    return {
      a: 1
    }
  },
  onReady() {
    console.log(this.$data['a']) // 1
  }
}
</script>
```

### ComponentPublicInstance类型

目前已知组件使用emits会导致this不能直接传递给ComponentPublicInstance类型，需要as一下。

```ts
function log(ins: ComponentPublicInstance) {
  console.log(ins);
}

export default {
  emits: ['change', 'input'],
  methods: {
    buttonClick() {
      log(this as ComponentPublicInstance)
    }
  }
}
```

如下为进阶说明，可以不看

我们在代码中用到的ComponentPublicInstance为省略泛型的写法，最终推导出的ComponentPublicInstance类型为：

```ts
// 此处为方便说明，省略了很多属性、简化了写法
type ComponentPublicInstance = {
  $emit: (event: string, ...args: any[]) => void
}
```

对于使用了emits的组件，最终推导出来的this对应的类型为：

```ts
// 此处为方便说明，省略了很多属性、简化了写法
type XxxComponentPublicInstance = {
  $emit: (event: 'change' | 'input', ...args: any[]) => void
}
```

在将XxxComponentPublicInstance类型的this值赋值给ComponentPublicInstance类型的参数时，由于$emit类型无法兼容导致编译报错。

下面我们只看$emit的类型

```ts
type ComponentPublicInstanceEmit = (event: string, ...args: any[]) => void
type XxxComponentPublicInstanceEmit = (event: 'change' | 'input', ...args: any[]) => void
```

对于ComponentPublicInstanceEmit类型的函数A来说，event参数可以接收任意字符串，如果将其赋值为只能接收'change' | 'input'作为event参数的函数B，这时候用户如果将event参数设为'click'则函数B无法处理，而函数A的类型定义又可以接收'click'，所以ts并不允许这种行为。

但是反过来则是可以的XxxComponentPublicInstanceEmit类型的函数A可以被重新赋值为ComponentPublicInstanceEmit类型的函数。

总结一下就是ts在比较函数参数是否兼容时使用逆变（contravariance）而非协变（covariance），这两个名词定义比较复杂，结合上述示例理解即可。

### 注意事项

- data内$开头的属性不可直接使用`this.$xxx`访问，需要使用`this.$data['$xxx']`，这是vue的规范。目前安卓端可以使用this.$xxx访问是Bug而非特性，请勿使用此特性。
- 安卓端由于kotlin特性组件内部使用组件data内定义的属性时this可以省略，请勿在web端使用此特性。
- web端由于是一个单页应用，使用`$root`会获取应用根组件，而不是页面根组件。而安卓端是多页应用，`$root`获取的是页面根组件。
- web端使用`$parent`会获取父组件（含内置组件），安卓端只会获取父级非内置组件，web端后续会调整，请勿利用此特性。

## uts

uts内编译到web端时可以使用任何ts特性。包括undefined、联合类型等。

### 运行时类型保留

不同于ts编译后完全抹除类型，uts在运行时保留了部分类型信息。通常是定义type后，创建此type对应的实例时，会保留此实例的类型信息。

例如：

```ts
type Obj = {
  a: number
}
const obj = {
  a: 1
} as Obj 
// 此时obj的类型为Obj，运行时可以使用 obj instanceof Obj
console.log(obj instanceof Obj) // true

const result = JSON.parse<Obj>(`{"a": 1}`) // 此时返回的对象类型为Obj
console.log(result instanceof Obj) // true
```

**注意**

- 目前`uni.request`传入泛型时不会创建对应类型的实例，会直接抹除类型信息，后续可能会调整为创建泛型类型对应的实例，请勿利用此特性。
- 仅项目内定义的类型可以被实例化，uni-app-x内部定义的类型无法被实例化，例如`const options = { url: 'xxx' } as RequestOptions`，并不会将此对象转化为RequestOptions的实例，运行时也没有`RequestOptions`对应的类型信息。

### this指向问题

安卓端this只会指向其所在的类的实例，而编译到js后this的值取决于它出现的上下文：函数、类或全局。

以下述代码为例

```vue
<template>
  <view></view>
</template>
<script>
  export default {
    data() {
      return {
        title: '' 
      }
    },
    methods: {
      getTitle() {
        uni.request({
          url: 'xxx',
          success() {
            this.title = 'xxx'
          }
        })
      }
    }
  }
</script>
```

上述代码中的this在安卓端会指向页面/组件实例，在web端会指向uni.request的参数。为保证多端一致，建议在上面的场景使用this时搭配箭头函数。上述代码修改为下面的写法后即可兼容多端

```vue
<template>
  <view></view>
</template>
<script>
  export default {
    data() {
      return {
        title: '' 
      }
    },
    methods: {
      getTitle() {
        uni.request({
          url: 'xxx',
          success: () => {
            this.title = 'xxx'
          }
        })
      }
    }
  }
</script>
```

### any类型

不同于ts，uts中any类型不包含null类型。

例如定义可选参数时应使用下面的写法：

```ts
function test(anything?: any | null) { // 注意带上问号
  console.log(anything)
}
```

同样如果属性在类型中是可选值也需要使用下面的写法

```ts
type Options = {
  num?: number | null
}
```

### void/undefined类型

为保证多端统一应尽量避免使用undefined、void类型，可以使用null代替。如果需要判断是否为null建议使用两个等号，不要使用三个等号（此处使用了js的特性`undefined == null`结果为true）。

### String、Number、Boolean类型

ts内string、number、boolean类型与String、Number、Boolean类型并不相同。

```ts
let str1: String = '1'
let str2: string = '2'

str1 = str2 // 不报错
str2 = str1 // 报错 Type 'String' is not assignable to type 'string'
```

尽量使用string、number、boolean类型替代String、Number、Boolean类型。

### import type@import-type

由于uts会为as为某些类型的对象字面量创建这个类型对应的实例，所以经常会存在一些类型引入后是作为值使用而不是作为类型使用。应尽量不要使用`import type`用法，避免编译结果出错。

```ts
import type { TypeA } from './type' // 避免使用
import { TypeA } from './type' // 推荐用法
```

## css

### 默认样式

为保证多端统一，uni-app-x编译到web端时，内置组件根元素带有一些默认样式，详情参考：[uvue css使用](../css/README.md)。如果是使用`document.createElement`等方式自行创建的html元素不会有这些默认样式。

### 样式格式自动转化

通过element.style.xxx设置样式时，web端会自动将样式进行转化，具体取决于浏览器。

例如：

```ts
element.style.color = '##FF0000'
element.style.color === 'rgb(255, 0, 0)' // true
```

### fixed定位

position: fixed定位时，web端为相对于整个浏览器页面进行定位，app端为相对于页面（除导航栏、tabbar）定位。可以使用[css变量](../css/README.md#variable)使两端表现一致

```css
.fixed {
  position: fixed;
  width: 100px;
  height: 100px;
  background-color: #FF0000;
  left: 10px;
  /* #ifdef WEB */
  top: calc(--window-top + 10px);
  /* #endif */
  /* #ifdef APP */
  top: 10px;  /* App端暂不支持calc */
  /* #endif */
}
```

## api

uni相关的异步api在web端不传回调时会返回promise（详情参考：[API Promise 化](https://uniapp.dcloud.net.cn/api/#api-promise-%E5%8C%96)）。但是由于目前缺少此用法的类型定义，使用返回的Promise无法通过编译。另外安卓端暂未实现此功能，建议不要使用此特性。

## 特性支持

- [x] 宽屏适配
- [x] 国际化
- [x] 地图
- [x] uni-push2.0
- [ ] 服务端渲染
- [ ] 接口Promise化

## 运行与发行

运行到web端时，uni-app-x编译器不会对语法进行转化来兼容低版本浏览器。发行时会对代码进行转化，以保证低版本浏览器能正常运行。

发行时支持的最低浏览器版本为：`chrome 64`、`safari 11.1`、`firefox 62`、`edge 79`、`safari on iOS 12`。

## 其他注意事项

- 内置组件的tagName、nodeName与安卓端不同，目前web端和安卓端相比多了`UNI-`前缀，例如web端为`UNI-VIEW`、`UNI-IMAGE`，安卓端为`VIEW`、`IMAGE`。
