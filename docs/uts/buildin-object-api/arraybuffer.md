# ArrayBuffer

ArrayBuffer 对象用来表示通用的原始二进制数据缓冲区。

它是一个字节数组，通常在其他语言中称为“byte array”。你不能直接操作 ArrayBuffer 中的内容；而是要通过类型化数组对象

[Float32Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/float32array.html)

[Float64Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/float64array.html)

[Int8Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/int8array.html)

[Int16Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/int16array.html)

[Int32Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/int32array.html)

[Uint8Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/uint8array.html)

[Uint8ClampedArray](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/uint8clampedarray.html)

[Uint16Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/uint16array.html)

[Uint32Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/uint32array.html)

或 [DataView](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/dataview.html) 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。


## 构造函数


### Constructor(byteLength)

<!-- UTSJSON.ArrayBuffer.Constructor.description -->

<!-- UTSJSON.ArrayBuffer.Constructor.param -->

<!-- UTSJSON.ArrayBuffer.Constructor.returnValue -->

<!-- UTSJSON.ArrayBuffer.Constructor.compatibility -->

<!-- UTSJSON.ArrayBuffer.Constructor.tutorial -->


## 静态方法


### isView(arg)

<!-- UTSJSON.ArrayBuffer.isView.description -->

<!-- UTSJSON.ArrayBuffer.isView.param -->

<!-- UTSJSON.ArrayBuffer.isView.returnValue -->

<!-- UTSJSON.ArrayBuffer.isView.test -->

<!-- UTSJSON.ArrayBuffer.isView.compatibility -->

<!-- UTSJSON.ArrayBuffer.isView.tutorial -->

### fromByteBuffer(byteBuffer: ByteBuffer)

<!-- UTSJSON.ArrayBuffer.fromByteBuffer.description -->

<!-- UTSJSON.ArrayBuffer.fromByteBuffer.param -->

<!-- UTSJSON.ArrayBuffer.fromByteBuffer.returnValue -->

<!-- UTSJSON.ArrayBuffer.fromByteBuffer.test -->

<!-- UTSJSON.ArrayBuffer.fromByteBuffer.compatibility -->

<!-- UTSJSON.ArrayBuffer.fromByteBuffer.tutorial -->


## 实例属性


### byteLength

<!-- UTSJSON.ArrayBuffer.byteLength.description -->

<!-- UTSJSON.ArrayBuffer.byteLength.param -->

<!-- UTSJSON.ArrayBuffer.byteLength.returnValue -->

<!-- UTSJSON.ArrayBuffer.byteLength.compatibility -->

<!-- UTSJSON.ArrayBuffer.byteLength.tutorial -->


## 实例方法


### slice(begin?, end?)

<!-- UTSJSON.ArrayBuffer.slice.description -->

<!-- UTSJSON.ArrayBuffer.slice.param -->

<!-- UTSJSON.ArrayBuffer.slice.returnValue -->

<!-- UTSJSON.ArrayBuffer.slice.test -->

<!-- UTSJSON.ArrayBuffer.slice.compatibility -->

<!-- UTSJSON.ArrayBuffer.slice.tutorial -->

### toByteBuffer()

<!-- UTSJSON.ArrayBuffer.toByteBuffer.description -->

<!-- UTSJSON.ArrayBuffer.toByteBuffer.param -->

<!-- UTSJSON.ArrayBuffer.toByteBuffer.returnValue -->

<!-- UTSJSON.ArrayBuffer.toByteBuffer.test -->

<!-- UTSJSON.ArrayBuffer.toByteBuffer.compatibility -->

<!-- UTSJSON.ArrayBuffer.toByteBuffer.tutorial -->


## 注意事项

- iOS的uvue页面编译成js时，可以使用ArrayBuffer，但由于iOS的uts插件暂时不支持ArrayBuffer,所以不能和uts插件进行通信



