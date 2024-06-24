## canvas

<!-- UTSCOMJSON.canvas.description -->

<!-- UTSCOMJSON.canvas.compatibility -->

<!-- UTSCOMJSON.canvas.attribute -->

<!-- UTSCOMJSON.canvas.event -->

<!-- UTSCOMJSON.canvas.component_type-->

<!-- UTSCOMJSON.canvas.children -->

<!-- UTSCOMJSON.canvas.example -->

<!-- UTSCOMJSON.canvas.reference -->

## API

和 W3C 规范保持一致 [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)

## 注意事项@hidpi

老版本 canvas 使用了微信小程序的的旧版规范，和 W3C 规范有差异

uni-app x 废弃了老版方案，使用了 W3C 规范和微信小程序的新版规范

新版规范需要开发者根据自己的场景手动处理高清屏问题

```html
<template>
  <canvas id="canvas"></canvas>
</template>
<script setup>
// 获取 canvas element
const canvas = uni.getElementById("canvas") as UniCanvasElement
const context = canvas.getContext("2d")!;

// 处理高清屏逻辑
const dpr = uni.getSystemInfoSync().pixelRatio;
canvas.width = canvas.offsetWidth * dpr;
canvas.height = canvas.offsetHeight * dpr;
context.scale(dpr, dpr); // 仅需调用一次，当调用 reset 方法后需要再次 scale

// 省略绘制代码，和 w3c 规范保持一致
</script>
```
