## canvas

<!-- UTSCOMJSON.canvas.description -->

<!-- UTSCOMJSON.canvas.compatibility -->

App平台目前没有完整的canvas组件，但
* 每个view，都提供了[draw API](../dom/drawablecontext.md)，可以高性能的画各种形状、写字。这组API与web的canvas api接近但不同。
* 截图或海报需求，无需像webview那样通过canvas中转，app平台view直接提供截图API，[takesnapshot](../dom/element.md#takesnapshot)。
* 使用web-view中的canvas也是一种方案，uvue页面里的web-view组件可以和uvue页面里的uts代码双向通信。
* 二维码展示需求：[见插件市场](https://ext.dcloud.net.cn/search?q=%E4%BA%8C%E7%BB%B4%E7%A0%81&uni-appx=1)
* 图表需求：[插件市场搜echart](https://ext.dcloud.net.cn/search?q=chart&orderBy=Relevance&uni-appx=1)、[插件市场搜F2](https://ext.dcloud.net.cn/search?q=f2&orderBy=Relevance&uni-appx=1)
* 手写签名：[见插件市场](https://ext.dcloud.net.cn/search?q=%E7%AD%BE%E5%90%8D&orderBy=Relevance&uni-appx=1)
* 后期App平台也会补充正式的canvas组件

<!-- UTSCOMJSON.canvas.attribute -->

<!-- UTSCOMJSON.canvas.event -->

<!-- UTSCOMJSON.canvas.component_type-->

<!-- UTSCOMJSON.canvas.children -->

<!-- UTSCOMJSON.canvas.example -->

<!-- UTSCOMJSON.canvas.reference -->

## API

和 W3C 规范保持一致 [https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)

4.23+ 开始支持 canvas.toDataURL(), 详情[https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL)

## 注意事项@tips

老版 uni-app 的 canvas 使用了微信小程序的的旧版规范，和 W3C 规范有差异。微信小程序新版的 canvas 规范已经与 W3C 规范拉齐。

uni-app x 中废弃了老版方案，使用了 W3C 规范和微信小程序的新版规范。

注意：在uni-app x 4.21版以前，开发者写的老版canvas是可以运行的。但从 4.21+ 支持新版规范起，不再支持老版规范。开发者需调整代码。

注意：App平台Canvas组件大小发生变化或者从界面栈中移除再重新添加等情况会导致context失效需要监听对应事件进行重绘。

```html
<template>
  <canvas id="canvas"></canvas>
</template>
<script setup>
// 获取 canvas element
const canvas = uni.getElementById("canvas") as UniCanvasElement
canvas!.addEventListener("contextrestored", (e: UniEvent)=>{
  console.log("contextrestored")
  //重绘
})
canvas!.addEventListener("contextlost", (e: UniEvent)=>{
  console.log("contextlost")
})
</script>
```

注意：新版规范需要开发者根据自己的场景手动处理高清屏问题。

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
