## uni.createCanvasContextAsync(options) @createcanvascontextasync

<!-- UTSAPIJSON.c.description -->

uni.createCanvasContextAsync 方法可以异步获取页面上指定id的canvas组件的上下文对象CanvasContext。

因微信小程序获取CanvasContext只能异步，所以为了跨端，本API也被设计成了异步API，需要在回调中获取CanvasContext。

获取到CanvasContext对象后，还需通过getContext("2d")方法获取[CanvasRenderingContext2D](../dom/canvasrenderingcontext2d.md)对象。

如果不考虑小程序，那么Web和App其实支持通过uni.getElementById方式同步获取[UniCanvasElement](../dom/unicanvaselement.md)。

参考文档：
- [canvas组件文档](../component/canvas.md)
- [CanvasRenderingContext2D文档](../dom/canvasrenderingcontext2d.md)

<!-- UTSAPIJSON.createCanvasContextAsync.compatibility -->

<!-- UTSAPIJSON.createCanvasContextAsync.param -->

<!-- UTSAPIJSON.createCanvasContextAsync.returnValue -->

<!-- UTSAPIJSON.createCanvasContextAsync.example -->

<!-- UTSAPIJSON.createCanvasContextAsync.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
