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


### new(byteLength : number) : ArrayBuffer;@Constructor(byteLength)

<!-- UTSJSON.ArrayBuffer.Constructor.description -->

<!-- UTSJSON.ArrayBuffer.Constructor.param -->

<!-- UTSJSON.ArrayBuffer.Constructor.returnValue -->

<!-- UTSJSON.ArrayBuffer.Constructor.test -->

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

### fromData(data: Data)

<!-- UTSJSON.ArrayBuffer.fromData.description -->

<!-- UTSJSON.ArrayBuffer.fromData.param -->

<!-- UTSJSON.ArrayBuffer.fromData.returnValue -->

<!-- UTSJSON.ArrayBuffer.fromData.test -->

<!-- UTSJSON.ArrayBuffer.fromData.compatibility -->

<!-- UTSJSON.ArrayBuffer.fromData.tutorial -->

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

### toData()

<!-- UTSJSON.ArrayBuffer.toData.description -->

<!-- UTSJSON.ArrayBuffer.toData.param -->

<!-- UTSJSON.ArrayBuffer.toData.returnValue -->

<!-- UTSJSON.ArrayBuffer.toData.test -->

<!-- UTSJSON.ArrayBuffer.toData.compatibility -->

<!-- UTSJSON.ArrayBuffer.toData.tutorial -->


## 注意事项

- 默认是以大端序存储数据

- iOS的uvue页面编译成js时，可以使用ArrayBuffer，iOS 的 uts 插件对 ArrayBuffer 支持 从 HBuilder X 4.51 版本开始。

- Android平台，在uni-app上不支持将Arraybuffer当作参数从vue传到插件里面，但是可以在vue或者插件里面使用


## js 和 swift 基于 ArrayBuffer 的内存共享

iOS 平台 uts 插件中的 ArrayBuffer 可以和 JS 中的 ArrayBuffer 实现内存共享。即无论从 uvue 页面传递给 uts 插件的 ArrayBuffer, 还是从 uts 插件中返回给 js 的 ArrayBuffer, 都是指向同一个内存区域，而不是拷贝一份后传递。这个特性在传递大内存的内容时比较有用。

> 注意：该特性在 Uni-app 和 Uni-app x 平台均支持。目前仅支持 js 和 Swift 之间的通过 ArrayBuffer 的内存共享。

下面以在 iOS 平台 uts 插件中读取大文件，然后使用 ArrayBuffer 传递给 uvue 页面的场景为例，演示 ArrayBuffer 内存共享的特性。
示例代码如下：

- swift 文件中实现读取大文件函数（混编示例）

```swift
import DCloudUTSFoundation
// 注意：如果你想在 uni-app 环境下运行此代码，请将下面这行代码注释掉
import DCloudUniappRuntime

class ReadFile {
	public static func readFile(
	    _ path: String,
	    _ completionHandler: ((ArrayBuffer?, NSNumber) -> Void)? = nil
	) {
		// 转换路径
	    let absolutePath = UTSiOS.convert2AbsFullPath(path)
	
		// 判断文件是否存在 
	    if FileManager.default.fileExists(atPath: absolutePath) == false {
	        completionHandler?(nil, 1)
	        return
	    }
	    
		// 将字符串路径转成 file url
	    let fileUrl = URL(fileURLWithPath: absolutePath)
	    
	    do {
			// 读取文件内容，生成 swift 原生 Data
	        let fileData = try Data(contentsOf: fileUrl)
			// 将 Data 转成 ArrayBuffer, 注意：ArrayBuffer 与 Data 的内存也是共享的，内容的传递过程中也不存在内存复制。
	        let result = ArrayBuffer.fromData(fileData)
	        if result == nil {
	            completionHandler?(nil, 2)
	            return
	        }
			// 将 ArrayBuffer 回调出去
	        completionHandler?(result, 0)
	    } catch {
	        completionHandler?(nil, 1)
	    }
	}
}

```

- 在 uts 代码中定义读取文件的函数，并对外暴露。函数的实现中调用上述 swift 文件中实现的方法。

```uts

// #ifdef APP-IOS
export type ReadFileOptions = {
	url: string,
	success: (res: ArrayBuffer) => void,
	fail:(code: number) => void
}

export function testBigArrayBuffer(option: ReadFileOptions) {
	// 调用 swift 实现，读取指定路径的大文件，并将生成的 ArrayBuffer 传递给 uvue 页面 (js环境)
	ReadFile.readFile(option.url, (res: ArrayBuffer | null, code: number) => {
		if (code == 0 && res != null) {
			option.success(res!)  
		}else {
			option.fail(code)
		}
	})  
}
// #endif

```

- 在 uvue 页面中调用上述 uts 插件的 api, 并操作 ArrayBuffer:

```js

testBigArrayBuffer({
	url: "/static/test.txt",
	success: (res) => {
		console.log("读取成功")
		// 本示例中读取的是一个 1.4M 大小的.txt文件，输出的长度是：1391217
		console.log("ArrayBuffer 长度：",res.byteLength)
	},
	fail: (code) => {
		console.log(code)
	}
})

```

上述示例的完整代码在 `hello-uts` 的 `SyntaxCase` 插件中。 
