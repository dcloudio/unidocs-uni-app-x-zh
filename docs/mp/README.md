# 编译到小程序端

> 新增于4.35版本

uni-app x 项目在编译到小程序平台时，将部分特性对齐了web与app端，因此和非uni-app x项目编译到小程序端略有差异。

## vue

### 组件启用virtualHost

uni-app x 项目在编译到小程序端时，启用了virtualHost，同时默认启用了[mergeVirtualHostAttributes特性](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-weixin)。

启用virtualHost会让组件在实际渲染时不会额外包裹一层dom节点。

mergeVirtualHostAttributes特性会将组件的 style、class 属性合并到根节点上。

### refs@refs

非 uni-app x 项目使用refs取内置组件引用时会获取到undefined，而 uni-app x 项目会获取到对应的UniElement。

## dom

### UniElement

小程序端逻辑层与是图层分离，导致大多数同步的dom api都不可用。

UniElement在小程序端仅支持如下属性/方法：

- id 元素的id属性
- nodeName 元素的节点名
- tagName 元素的标签名
- style 元素的style对象，可以通过style对象调用style.setProperty方法
- getBoundingClientRectAsync 异步获取元素的布局位置信息
- getAttribute 获取元素的属性值，目前仅支持id、style

**注意**

- 小程序端只有UniElement，不支持UniButtonElement、UniViewElement等类

### 事件

click、tap事件上补充了如下属性，使其表现更像PointerEvent：

```
event.x
event.y
event.clientX
event.clientY
event.pageX
event.pageY
event.screenX
event.screenY
```

## css

### 默认样式

为保证多端统一，uni-app-x编译到小程序端时，内置组件根元素带有一些默认样式，详情参考：[uvue css使用](../css/README.md)。

## 其他差异

### 实体字符

uni-app x项目在编译到小程序端时，如果页面内静态的使用了实体字符`&gt;、&lt;、&thinsp;、&nbsp;、&ensp;、&emsp;`则会在最终输出的小程序页面文件中保留这些实体字符，例如`&nbsp;`在微信小程序的wxml文件中仍为`&nbsp;`不会被转为空格， 而非uni-app-x项目`&nbsp;`会转为空格。
