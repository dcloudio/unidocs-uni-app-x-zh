<!-- ## uni.scanCode(options?) @scancode -->

<!-- UTSAPIJSON.scanCode.name -->

<!-- UTSAPIJSON.scanCode.description -->

<!-- UTSAPIJSON.scanCode.compatibility -->

<!-- UTSAPIJSON.scanCode.param -->

<!-- UTSAPIJSON.scanCode.returnValue -->

<!-- UTSAPIJSON.scanCode.example -->

<!-- UTSAPIJSON.scanCode.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

### 平台实现说明
- uni-app x的Android/iOS平台的扫码基于Google的机器学习库，对各种一维、二维码都有较好的识别效果。超过了uni-app的扫码。
	扫码API，其实是一个开源的uvue页面，页面中内嵌了[camera组件](../component/camera.md)，camera组件提供扫码模式。源码在文档上方点击右侧gitcode或github。\
	如需连续扫码，推荐使用[camera组件](../component/camera.md)
- 鸿蒙、小程序直接调用了其平台提供的扫码API，UI不可自定义。但各种一维、二维码均可识别。

### 依赖库版本

Android端实现扫码所使用的依赖库
```
"androidx.camera:camera-core:1.4.1",
"com.google.mlkit:barcode-scanning:17.2.0",
"com.github.albfernandez:juniversalchardet:2.0.4"
```
iOS端实现扫码所使用的依赖库
```
pod 'GoogleMLKit/BarcodeScanning', '6.0.0'
```

