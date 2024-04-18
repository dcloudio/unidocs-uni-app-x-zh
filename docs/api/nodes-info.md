## uni.createSelectorQuery() @createselectorquery

<!-- UTSAPIJSON.createSelectorQuery.description -->

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

<!-- UTSAPIJSON.createSelectorQuery.example -->

<!-- UTSAPIJSON.createSelectorQuery.compatibility -->

<!-- UTSAPIJSON.createSelectorQuery.tutorial -->

<!-- UTSAPIJSON.nodes-info.example -->


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

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


**exec 示例说明：**

`exec()` 返回所有动作的集合，每一项的数据类型取决于查询动作，结果排序按照调用动作顺序

示例：

```js
uni.createSelectorQuery().select('.rect1').boundingClientRect().exec()
// 共返回 1 条结果，第一项数据类型为 NodeInfo
result = [ {} ]
```

```js
uni.createSelectorQuery().selectAll('.rect1').boundingClientRect().exec()
// 共返回 1 条结果，第一项数据类型为 NodeInfo[]
result = [ [{},{}] ]
```

```js
uni.createSelectorQuery().select('.rect1').selectAll('.rect2').boundingClientRect().exec()
// 共返回 2 条结果，第一项数据类型为 NodeInfo，第二项数据类型类型为 NodeInfo[]
result = [ {}, [{},{}] ]
```


** 注意事项：**

1. App 平台 `<template>` 下如果存在多个节点，会导致非第一个节点查询不到的问题
2. Web 平台 `<template>` 下如果存在多个节点，如果是在组件内部查询，可能会导致查询到其他组件或页面的元素
