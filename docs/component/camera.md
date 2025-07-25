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

<!-- UTSCOMJSON.camera.reference -->

