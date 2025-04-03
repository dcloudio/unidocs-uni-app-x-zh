## Path2D

<!-- CUSTOMTYPEJSON.Path2D.description -->

<!-- CUSTOMTYPEJSON.Path2D.extends -->

<!-- CUSTOMTYPEJSON.Path2D.param -->



<!-- CUSTOMTYPEJSON.Path2D.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.example -->

### Path2D 的方法 @path2d-methods
<!-- CUSTOMTYPEJSON.Path2D.methods.closePath.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.closePath.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.closePath.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.closePath.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.closePath.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.closePath.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.moveTo.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.moveTo.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.moveTo.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.moveTo.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.moveTo.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.moveTo.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.lineTo.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.lineTo.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.lineTo.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.lineTo.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.lineTo.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.lineTo.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.bezierCurveTo.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.bezierCurveTo.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.bezierCurveTo.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.bezierCurveTo.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.bezierCurveTo.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.bezierCurveTo.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.quadraticCurveTo.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.quadraticCurveTo.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.quadraticCurveTo.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.quadraticCurveTo.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.quadraticCurveTo.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.quadraticCurveTo.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arc.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arc.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arc.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arc.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arc.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arc.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arcTo.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arcTo.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arcTo.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arcTo.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arcTo.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.arcTo.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.ellipse.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.ellipse.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.ellipse.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.ellipse.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.ellipse.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.ellipse.tutorial -->

<!-- CUSTOMTYPEJSON.Path2D.methods.rect.name -->

<!-- CUSTOMTYPEJSON.Path2D.methods.rect.description -->

<!-- CUSTOMTYPEJSON.Path2D.methods.rect.compatibility -->

<!-- CUSTOMTYPEJSON.Path2D.methods.rect.param -->

<!-- CUSTOMTYPEJSON.Path2D.methods.rect.returnValue -->

<!-- CUSTOMTYPEJSON.Path2D.methods.rect.tutorial -->

**注意事项**

## uni-app-x harmony

draw(path2D) 不受 context 的 moveTo 影响，如果需要指定位置需要调用 path2D的moveTo方法，示例如下：

```js
uni.createCanvasContextAsync({
  id: 'canvas',
  component: this, // setup 模式使用 getCurrentInstance()
  success: (canvasContext : CanvasContext) => {
    const context = canvasContext.getContext('2d')!;
    const canvas = context.canvas;

    const dpr = uni.getWindowInfo().pixelRatio;
    context.scale(dpr, dpr);

    context.beginPath()
    const path2D = canvasContext!.createPath2D();
    const amplitude = 64;
    const wavelength = 64;
    for (let i = 0; i < 5; i++) {
      const x1 = 0 + (i * wavelength);
      const y1 = 128;
      const x2 = x1 + wavelength / 4;
      const y2 = y1 - amplitude;
      const x3 = x1 + 3 * wavelength / 4;
      const y3 = y1 + amplitude;
      const x4 = x1 + wavelength;
      const y4 = y1;
      // context.moveTo(x1, y1); 这里调用moveTo无效，需要使用path2D.moveTo(x1, y1);
      path2D.bezierCurveTo(x2, y2, x3, y3, x4, y4);
    }
    context.stroke(path2D);
  }
})
```
