## z-index

z-index 属性设置元素在渲染时的z轴顺序。在同一个层叠上下文下z-index较大的元素会覆盖在z-index较小的元素上面。

z-index并非一直有效果，如果加上z-index后元素仍未创建层叠上下文，则z-index属性无效。例如对于一个样式为`position: static;`（无其他会创建层叠上下文的样式）的元素设置z-index并不会改变其层级。

z-index文档参考：[MDN z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)

层叠上下文文档参考：[层叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)

以如下树形dom结构为例

```text
root
|-- view#1
    |-- view#1-1
    |-- view#1-2
|-- view#2
    |-- view#2-1
    |-- view#2-2
```

如果`view#1`元素创建了层叠上下文，则其子元素`view#1-1`、`view#1-2`就会不在渲染时和`view#2`及其子元素进行层级比较。此时`view#1-1`与`view#2`及`view#2`子元素的层级高低取决于`view#1`和`view#2`的层级高低。

如果`view#1`、`view#2`均未创建层叠上下文，则这两个元素及其子元素（`view#1-1`等）会在渲染时进行层级比较。此时如果设置`view#1-1`的样式为`position: relative; z-index: 100;`，则子元素在z轴的顺序为`view#1-2 --> view#2-1 --> view#2-2 --> view#1-1`。

<!-- CSSJSON.z-index.description -->

<!-- CSSJSON.z-index.syntax -->

<!-- CSSJSON.z-index.values -->

<!-- CSSJSON.z-index.defaultValue -->

<!-- CSSJSON.z-index.unixTags -->

<!-- CSSJSON.z-index.compatibility -->

<!-- CSSJSON.z-index.example -->

### 平台差异

1. app端z-index默认值为0，web端默认值为auto。position的默认值都是relative。

> HBuilderX 4.11版本web版将内置组件的默认z-index设为了0，于4.12版本撤回此修改。因此在4.11版本web端和app端无此项差异。

在app端每个元素都会创建层叠上下文，子元素不可跨父元素进行层级比较。

web端在**没有其他会产生层叠上下文的属性干扰时**不会创建层叠上下文，其子元素可在最近的一个拥有层叠上下文的祖先元素内跨父元素比较层级。

如下示例在app端四个方块自上而下颜色分别是`green -> blue -> aqua -> red`，web端颜色自上而下分别是`aqua -> green -> blue -> red`

```vue
<template>
  <view style="z-index: 0;flex: 1;">
    <view>
      <view id="view-1-1" class="square" style="z-index: 4;background-color: aqua;"></view>
      <view id="view-1-2" class="square" style="z-index: 1;background-color: red;margin-top: -90px;margin-left: 10px;"></view>
    </view>
    <view style="position: absolute; top: 20px;">
      <view id="view-2-1" class="square" style="z-index: 3;background-color: green;margin-left: 20px;"></view>
      <view id="view-2-2" class="square" style="z-index: 2;background-color: blue;margin-top: -90px;margin-left: 30px;"></view>
    </view>
  </view>
</template>
<script>
export default {}
</script>
<style>
  .square {
    width: 100px;
    height: 100px;
  }
</style>
```

2. app端`position: fixed;`定位的元素会移至根节点下渲染，web端`position: fixed;`无特殊处理。

app端对`position: fixed;`的元素设置z-index，此元素可以与根节点（template 的一级子节点）进行层级比较。

web端对`position: fixed;`的元素设置z-index，此元素仍会在所属的层叠上下文下和其他元素比较层级。

在上面示例的基础上我们将`view-1-2`设为`position: fixed;`，如下示例在app端四个方块自上而下颜色分别是`red -> green -> blue -> aqua`，web端颜色自上而下分别是`aqua -> green -> blue -> red`

```vue
<template>
  <view style="z-index: 0;flex: 1;">
    <view>
      <view id="view-1-1" class="square" style="z-index: 4;background-color: aqua;"></view>
      <view id="view-1-2" class="square view-1-2" style="z-index: 1;background-color: red;"></view>
    </view>
    <view style="position: absolute; top: 20px;">
      <view id="view-2-1" class="square" style="z-index: 3;background-color: green;margin-left: 20px;"></view>
      <view id="view-2-2" class="square" style="z-index: 2;background-color: blue;margin-top: -90px;margin-left: 30px;"></view>
    </view>
  </view>
</template>
<script>
export default {}
</script>
<style>
  .square {
    width: 100px;
    height: 100px;
  }

  .view-1-2 {
    position: fixed;
    left: 10px;
    /* #ifdef APP */
    top: 10px;
    /* #endif */
    /* #ifdef WEB */
    top: calc(var(--window-top) + 10px);
    /* #endif */
  }
</style>
```

### 全局弹窗

了解了z-index特性及平台差异后，可以看出如果直接对层级比较深的元素设置一个较大的z-index并不一定能将此元素覆盖在所有元素之上。如需使用fixed实现弹窗覆盖其他元素，建议将弹窗放在页面末尾。

<!-- 建议使用[teleport组件](https://cn.vuejs.org/guide/built-ins/teleport.html)实现全局弹窗，teleport组件会将元素实际位置移动到指定的节点下。 -->

### Bug & Tips@tips
- App平台仅对同级的兄弟元素之间支持 z-index 来调节，同级元素中 z-index 较大的元素会覆盖较小的元素在上层进行显示，没有设置 z-index 值时，同级元素中写在后面的元素覆盖写在前面的元素。
- App平台元素设置position为fixed时，会将元素调整到根节点，此时z-index会在根节点中比较确定覆盖关系。
- App 平台 list-view 的子组件 list-item 有复用优化机制，list-item 组件不支持 z-index 属性。

<!-- CSSJSON.z-index.reference -->
