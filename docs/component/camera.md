<!-- ## camera -->

<!-- UTSCOMJSON.camera.name -->

<!-- UTSCOMJSON.camera.description -->

<!-- UTSCOMJSON.camera.compatibility -->

<!-- UTSCOMJSON.camera.attribute -->

<!-- UTSCOMJSON.camera.event -->

<!-- UTSCOMJSON.camera.component_type -->

<!-- UTSCOMJSON.camera.children -->

### 上下文对象API

camera组件的操作api为[uni.createCameraContext()](../api/create-camera-context.md)。

给camera组件设一个id属性，将id的值传入uni.createCameraContext()，即可得到camera组件的上下文对象，进一步可使用`.takePhoto()`、`.startRecord()`等方法。

<!-- UTSCOMJSON.camera.example -->

### 依赖库版本

Android端实现相机组件所使用的依赖库

```
"androidx.camera:camera-core:1.4.1",
"androidx.camera:camera-camera2:1.4.1",
"androidx.camera:camera-lifecycle:1.4.1",
"androidx.camera:camera-view:1.4.1",
"androidx.appcompat:appcompat:1.7.0"
```

### 关于相机组件扫码能力的注意事项

- camera组件仅在 uni-app x 项目中支持，扫码功能需更新到 4.71 及以上版本。
- 扫码功能是独立模块，目前需要手动配置。后续版本会提供可视化界面配置。

    在manfiest.json中的 "app-android" -> "distribute" -> "modules" 节点下手动添加 "uni-barcode-scanning"，如下示例：

```
"app-android" : {
    "distribute" : {
        "modules" : {
            "uni-barcode-scanning" : {}
        }
    }
}
```

### 关于预览画面与拍照尺寸的注意事项

- camera 预览画面采用 FILL_CENTER（aspectFill）方式显示，会保持宽高比填满组件区域，超出部分居中裁剪。
- `resolution`（预览）和 `photo-resolution`（拍照）是两个独立配置，系统分别协商实际分辨率，最终宽高比可能不同。
- `takePhoto` 返回的是完整拍照画面，不会按预览可见区域裁剪，照片中可能包含预览中看不到的内容。
- 不同设备支持的分辨率列表不同，预览与拍照的差异程度因设备而异。
- 实现取景框裁剪时，需先根据 camera 组件显示宽高与照片实际宽高，按 FILL_CENTER 逻辑计算预览可见区域在照片中的对应范围，裁剪一致后再进行取景框二次裁剪。


<!-- UTSCOMJSON.camera.reference -->
