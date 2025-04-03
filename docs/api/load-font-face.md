## uni.loadFontFace(options) @loadfontface

<!-- UTSAPIJSON.loadFontFace.description -->

<!-- UTSAPIJSON.loadFontFace.compatibility -->

<!-- UTSAPIJSON.loadFontFace.param -->

<!-- UTSAPIJSON.loadFontFace.returnValue -->

### 注意事项
- `app-ios 平台` 加载字体一定是全局生效，不支持通过global属性设置为非全局生效
- source 属性指定自定义字体路径，支持本地文件路径、远程地址，app 平台 4.33 版本开始支持 base64 格式数据；必须使用`url()`包裹。可能某些平台不包裹也可以生效，但标准规范是包裹，按标准写法才能全端生效。如下：
  ```uts
  uni.loadFontFace({
    global: true,
    family: 'UniFontFamily',
    source: "url('/static/font/uni.ttf')", //需使用url方法包裹。本地字体请放在/static目录下，否则打包时不会把字体文件打进去。也支持网络字体
    success() {
      console.log('global loadFontFace uni.ttf success')
    },
    fail(error) {
      console.warn('global loadFontFace uni.ttf fail', error.errMsg)
    },
  })
  ```
- `HarmonyOS 注意事项`
  1. 使用 [@ohos.font](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/js-apis-font-V13) 实现
    - [x] ttf
    - [x] otf
  2. base64 格式字体是通过转换成 buffer 保存在磁盘上并引入实现的，因此页面上过多的使用 base64 可能会有性能问题
  3. HarmonyOS 字体都是全局生效的

不同平台支持的字体格式不同，另见[css字体](../css/font-family.md)

<!-- UTSAPIJSON.loadFontFace.example -->

<!-- UTSAPIJSON.loadFontFace.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
