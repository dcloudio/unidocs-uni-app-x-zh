# 选择器 @selector

- web和小程序支持page元素选择器，以替代body元素选择器。
- web端可以使用`html`、`body`、`:root`等选择器。由于页面的css样式隔离，且html节点并未添加data-xxx属性，`html`、`:root`写在页面style内无效，只能写在App.uvue内。

<!-- CSSJSON.selector_values.compatibility -->

::: warning 注意
1. 选择器声明的变化可能会导致元素重新绘制。为了减少选择器变化引起的 DOM 更新数量，**当前只支持：CSS 声明的多个选择器中最后一个规则的变更对 DOM 的更新**。
2. :active伪类来实现点击态，很容易触发，并且滚动或滑动时点击态不会消失，体验较差。小程序平台均给view组件引入了`hover-class`，考虑到跨端兼容和体验，建议使用 `hover-class` 属性来实现点击态效果。[详见](../../component/view.md#hover-class)
:::

## 示例

```vue
<template>
  <div :class="{{docBody}}">
    <text :class="{{rowDesc}}">描述内容</text>
  </div>
</template>

<style>
  .doc-body1 .row-desc1 {
    color: #ff0000;
  }
  .doc-body1 .row-desc2 {
    color: #0000ff;
  }
  .doc-body2 .row-desc1 {
    color: #00ff00;
  }
</style>

<script lang="uts">
  export default {
    data() {
      return {
        rowDesc: 'row-desc1',
        docBody: 'doc-body1'
      }
    }
  }
</script>
```

以上代码示例，当我们把 `rowDesc` 变量从 `row-desc1` 变为 `row-desc2` 时，会更新 `text` 节点样式，但是如果把 `docBody` 变量从 `doc-body1` 变为 `doc-body2`，是不会更新 `text` 节点样式的。\
因为 `doc-body` 不是最后一个选择器，非末尾的选择器变更有可能影响很多 DOM 元素，从而影响到渲染性能。

::: warning 注意
App端相邻选择器暂不支持动态新增或删减节点，为了优化性能减少一些重新渲染工作，示例 [https://issues.dcloud.net.cn/pages/issues/detail?id=1452](https://issues.dcloud.net.cn/pages/issues/detail?id=1452)
:::
