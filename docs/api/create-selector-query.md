## uni.createSelectorQuery() @createselectorquery

<!-- UTSAPIJSON.createSelectorQuery.description -->

createSelectorQuery是小程序的API，因小程序未开放DOM，且视图层和逻辑层分离，于是提供了一个异步的API，可以在逻辑层有限的获取一些DOM能力。

该API返回的类型为NodeRef。它和DOM的Element有区别。

大多数组件的属性和样式操作，是通过绑定vue的响应式变量data来实现的。一般不使用本API。

本API的主要用途是小程序下获取元素计算后的样式。如果您的应用不适配小程序，那么在Web和App上有更强大的[UniElement](../dom/README.md)。

小程序下有时用本API获取部分组件的上下文context，但这个写法不跨平台。跨平台的获取组件context，应该使用uni.createXXContext()。

<!-- UTSAPIJSON.createSelectorQuery.compatibility -->

<!-- UTSAPIJSON.createSelectorQuery.param -->

**selector 说明：**

``selector`` 类似于 CSS 的选择器，但仅支持下列语法。
- ID选择器：``#the-id``
- class选择器：``.a-class``

<!-- UTSAPIJSON.createSelectorQuery.returnValue -->

##### NodeInfo 属性值

|属性		|类型		|说明							|
|---		|---		|---							|
|id			|String	|节点的 ID				|
|dataset|Object	|节点的 dataset		|
|left		|Number	|节点的左边界坐标	|
|right	|Number	|节点的右边界坐标	|
|top		|Number	|节点的上边界坐标	|
|bottom	|Number	|节点的下边界坐标	|
|width	|Number	|节点的宽度				|
|height	|Number	|节点的高度				|

<!-- UTSAPIJSON.createSelectorQuery.tutorial -->

组件内使用

```html
<template>
  <view>
    <button @click="getNodeInfo">getNodeInfo</button>
    <view class="rect-1-2">
      <view class="rect rect1"></view>
      <view class="rect rect2"></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        nodeInfoList: [] as NodeInfo[]
      }
    },
    props: {
    },
    methods: {
      getNodeInfo() {
        uni.createSelectorQuery().in(this).select('.rect1').boundingClientRect().exec((ret) => {
          this.nodeInfoList.length = 0
          this.nodeInfoList.push(ret[0] as NodeInfo)
        })
      }
    }
  }
</script>
```

<!-- UTSAPIJSON.createSelectorQuery.example -->

**exec 示例说明：**

`exec()` 返回所有动作的集合，每一项的数据类型取决于查询动作，结果排序按照调用动作顺序

示例：

```js
uni.createSelectorQuery().select('.rect1').boundingClientRect((res) => {
  // 共返回 1 条结果，第一项数据类型为 NodeInfo
  // res = [ {} ]

  const nodeInfoArray = res as NodeInfo[]
  const nodeInfoArrayItem = nodeInfoArray[0]
  console.log('info', nodeInfoArrayItem.width, nodeInfoArrayItem.height)
}).exec()
```

```js
uni.createSelectorQuery().selectAll('.rect1').boundingClientRect((res) => {
  // 共返回 1 条结果，第一项数据类型为 NodeInfo[]
  // res = [ [{},{}] ]

  const nodeInfoArray = res as NodeInfo[]
  const nodeInfoArrayItem = nodeInfoArray[0]
  nodeInfoArrayItem.foreach((item: NodeInfo) => {
    console.log('item', item.width, item.height)
  })
}).exec()
```

```js
uni.createSelectorQuery().select('.rect1').selectAll('.rect2').boundingClientRect((res) => {
  // 共返回 2 条结果，第一项数据类型为 NodeInfo，第二项数据类型类型为 NodeInfo[]
  // res = [ {}, [{},{}] ]

  const nodeInfoArray = res as NodeInfo[]

  const nodeInfoItem0 = nodeInfoArray[0]
  console.log('nodeInfoItem0', nodeInfoItem0.width, nodeInfoItem0.height)

  const nodeInfoItem1 = nodeInfoArray[1]
  nodeInfoItem1.foreach((item: NodeInfo) => {
    console.log('item', item.width, item.height)
  })
}).exec()
```


通过id查询组件内多节点

和单根节点组件有所不同，有着多个根节点的组件需要透传 attribute

页面

```html
<template>
  <view>
    <custom-component1 id="custom-component1"></custom-component1>

    <button @click="query">query</button>
  </view>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      query() {
        uni.createSelectorQuery().in(this).select('#scustom-component1').boundingClientRect().exec((ret) => {
          console.log(ret)
        })
      }
    }
  }
</script>
```

组件 custom-component1

```html
<template>
  <text>1</text>
  <text v-bind="$attrs">2</text>
  <text>3</text>
</template>
```

**注意事项：**

1. App 平台 `<template>` 下如果存在多个节点，会导致非第一个节点查询不到的问题
2. Web 平台 `<template>` 下如果存在多个节点，如果是在组件内部查询，可能会导致查询到其他组件或页面的元素


<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
