# uvue组件概述

## 监听页面生命周期

`4.0` 起可通过组合式 API 实现组件中监听页面生命周期，[示例代码](../vue/component.md#component-lifecycle)。


## 调用组件方法@methods

需要把组件分为 内置组件、easycom组件、非easycom组件，这3种组件有不同的方法调用方式。[详情](../vue/component.md#page-call-component-method)

### 内置组件的方法调用或设置属性

> 3.93+ 支持

使用 `this.$refs` 获取组件并as转换为组件对应的element类型，通过 `.`操作符 调用组件方法或设置属性。[详情](../vue/component.md#call-builtin-component-method)

### easycom组件调用方法或设置属性@method_easycom

> 3.97+ 支持 uni_modules 目录下的组件

easycom组件，用法和内置组件一样。也是使用 `this.$refs` 获取组件并转换为组件的类型，通过 `.`操作符 调用组件方法或设置属性。[详情](../vue/component.md#call-easycom-component-method)

### 其它自定义组件的方法调用使用callMethod@$callMethod

如果不是内置组件，也不是easycom组件，那么无法使用`.`操作符了。

此时需使用 `this.$refs` 获取组件实例，然后通过 `$callMethod` 调用组件的方法。也就是把组件的方法名、参数，当做callMethod的参数来传递。此时也就没有`.`操作符那样的代码提示和校验了。[详情](../vue/component.md#call-component-method)

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
