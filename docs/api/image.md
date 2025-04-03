## Image

<!-- CUSTOMTYPEJSON.Image.description -->

<!-- CUSTOMTYPEJSON.Image.extends -->

<!-- CUSTOMTYPEJSON.Image.param -->



<!-- CUSTOMTYPEJSON.Image.compatibility -->

<!-- CUSTOMTYPEJSON.Image.example -->

**提示**

鸿蒙平台、微信小程序不支持 `new Image()` 方式创建，需要通过跨平台写法 `CanvasContext.createImage()`, 示例如下:

```js
uni.createCanvasContextAsync({
  id: 'canvas',
  component: this, // setup模式使用 getCurrentInstance().proxy
  success: (context : CanvasContext) => {
    const renderingContext = context.getContext('2d')!;
    const image = context.createImage();
    image.src = "/static/logo.png";
    image.onload = () => {
      renderingContext.drawImage(image, 0, 0, 100, 100);
    }
  }
})
```
