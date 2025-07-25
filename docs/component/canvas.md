<!-- ## canvas -->

<!-- UTSCOMJSON.canvas.name -->

<!-- UTSCOMJSON.canvas.description -->

<!-- UTSCOMJSON.canvas.compatibility -->

App平台4.25之前没有完整的canvas组件，但提供了`DrawableContext`。
* 截图或海报需求，无需像webview那样通过canvas中转，app平台view直接提供截图API，[takesnapshot](../dom/unielement.html#takesnapshot)。

在绘制形状、文字、图片方面，uni-app x有2种解决方案：`canvas组件`和 [DOM的DrawableContext API](../dom/drawablecontext.md)

它们的区别是：
1. canvas组件的语法是W3C标准语法；DrawableContext是对原生view的绘制API的封装，语法尽可能靠齐W3C规范，但不相同。
2. canvas组件全平台支持，而DrawableContext仅app支持
3. canvas组件是一个独立组件，而DrawableContext是对现有的view组件进行绘制
4. DrawableContext在iOS上绘制文字的性能略低，其原生系统如此
5. 对于复杂绘制场景，比如游戏，canvas组件的绘制速度优于DrawableContext；对于简单场景，canvas组件的内存占用高于普通view。
6. canvas是一个独立模块，在Android和iOS平台占用几百K体积，鸿蒙平台封装自鸿蒙自身的canvas。canvas模块不使用时会被摇树摇掉

<!-- UTSCOMJSON.canvas.attribute -->

注意：Android平台默认会开启硬件加速无需额外设置

<!-- UTSCOMJSON.canvas.event -->

<!-- UTSCOMJSON.canvas.component_type-->

<!-- UTSCOMJSON.canvas.children -->

## API

老版 uni-app 的 canvas 使用了微信小程序的的旧版规范，和 W3C 规范有差异。微信小程序新版的 canvas 规范已经与 W3C 规范拉齐。

uni-app x 中废弃了老版方案，使用了 W3C 规范和微信小程序的新版规范。

注意：在uni-app x 4.21版以前，Web平台开发者写的老版canvas是可以运行的。但从 4.21+ 支持新版规范起，不再支持老版规范。开发者需调整代码。

注意：新版规范需要开发者根据自己的场景手动处理高清屏问题。

canvas相关的API较多，参考如下：

- [W3C 规范](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)
- canvas.toDataURL()  [W3C](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL)
- uni.createCanvasContextAsync 获取[CanvasContext对象](../api/create-canvas-context-async.md)
- [CanvasRenderingContext2D对象](../api/canvasrenderingcontext2d.md)
- [动画帧](../api/animation-frame.md)

## 获取组件上下文对象CanvasContext@CanvasContext

1. 异步方式获取CanvasContext

这种方式跨平台，一般推荐这种写法。需HBuilderX 4.25+支持。

组合式

```html
<template>
  <canvas id="canvas"></canvas>
</template>
<script setup>
  onReady(() => {
    // HBuilderX 4.25+
    // 异步调用方式, 跨平台写法
    uni.createCanvasContextAsync({
      id: 'canvas',
      component: getCurrentInstance().proxy,
      success: (context : CanvasContext) => {
        const canvasContext = context.getContext('2d')!;
        const canvas = canvasContext.canvas;

        // 处理高清屏逻辑
        const dpr = uni.getDeviceInfo().devicePixelRatio ?? 1;
        canvas.width = canvas.offsetWidth * dpr;
        canvas.height = canvas.offsetHeight * dpr;
        canvasContext.scale(dpr, dpr); // 仅需调用一次，当调用 reset 方法后需要再次 scale
      }
    })
  })
</script>
```

选项式

```html
<template>
  <view>
    <canvas id="canvas"></canvas>
  </view>
</template>

<script>
  export default {
    name: 'canvas',
    data() {
      return {
      }
    },
    onReady() {
      uni.createCanvasContextAsync({
        id: 'canvas',
        component: this,
        success: (context : CanvasContext) => {
          const canvasContext = context.getContext('2d')!;
          const canvas = canvasContext.canvas;

          // 处理高清屏逻辑
          const dpr = uni.getDeviceInfo().devicePixelRatio ?? 1;
          canvas.width = canvas.offsetWidth * dpr;
          canvas.height = canvas.offsetHeight * dpr;
          canvasContext.scale(dpr, dpr); // 仅需调用一次，当调用 reset 方法后需要再次 scale
        }
      })
    }
  }
</script>
```

文档[详见](../api/create-canvas-context-async.md)

2. 同步方式CanvasContext

需HBuilderX 4.21+支持。

同步方式不支持小程序。仅App和web可以使用。

```html
<template>
  <canvas id="canvas"></canvas>
</template>
<script setup>
  onReady(() => {
    // 同步调用方式，仅支持 app/web
    const canvas = uni.getElementById("canvas") as UniCanvasElement
    const context = canvas.getContext("2d")!;

    // 处理高清屏逻辑
    const dpr = uni.getDeviceInfo().devicePixelRatio ?? 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    context.scale(dpr, dpr); // 仅需调用一次，当调用 reset 方法后需要再次 scale
    // 省略绘制代码，和 w3c 规范保持一致
  })
</script>
```

<!-- UTSCOMJSON.canvas.example -->

## 场景

canvas有很多应用场景，插件市场有很多封装好的插件：

* 图表需求：[xCharts 基于原生canvas的图表方案](https://ext.dcloud.net.cn/plugin?id=21099)。插件市场还有基于webview的图表插件：[echart](https://ext.dcloud.net.cn/search?q=chart&orderBy=Relevance&uni-appx=1)、[F2](https://ext.dcloud.net.cn/search?q=f2&orderBy=Relevance&uni-appx=1)
* 二维码展示：[见插件市场](https://ext.dcloud.net.cn/search?q=%E4%BA%8C%E7%BB%B4%E7%A0%81&uni-appx=1)
* 手写签名：[见插件市场](https://ext.dcloud.net.cn/search?q=%E7%AD%BE%E5%90%8D&orderBy=Relevance&uni-appx=1)
* 抽奖转盘：[见插件市场](https://ext.dcloud.net.cn/search?q=%E8%BD%AC%E7%9B%98&orderBy=Relevance&uni-appx=1)
* 刮刮卡：[见插件市场](https://ext.dcloud.net.cn/search?q=%E5%88%AE%E5%88%AE%E5%8D%A1&orderBy=Relevance&uni-appx=1)

一些web平台的canvas插件，并没有适配uts。此时使用web-view中的canvas也是一种方案，uvue页面里的[web-view组件](./web-view.md)可以和uvue页面里的uts代码双向通信。

<!-- UTSCOMJSON.canvas.reference -->
