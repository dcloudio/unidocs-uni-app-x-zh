# UTS原生混编介绍

`HBuilder X 4.25`起，UTS插件可以直接使用原生的`kotlin`、`java`、`swift`代码，即 `UTS原生混编`(下文简称：原生混编)

## 原生混编的优势和使用场景

`原生混编`出现之前，开发者只能使用[UTS语言](https://doc.dcloud.net.cn/uni-app-x/uts/) 来开发[UTS插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html) 

对于不熟悉`Android`/`ios`的开发者来说，要实现原生功能的开发，往往要经过下面的步骤：

	1   通过`搜索引擎`/`AIGC`/`原生API文档` 得到对应功能的关键代码(`Kotlin`/`swift`等)

	2   手动翻译这段代码为`UTS`

	3   如果存在`UTS`不支持的语法，还需要把原生代码封装成 `aar`/`framework` 等原生库形式，再供`UTS`代码调用


**这是一件很繁琐的事情，`原生混编`的出现彻底解决了这个问题：**


开发者只需要把 `Kotlin`/`swift`/`java` 代码放在`UTS插件`目录中，就可以通过 `UTS`直接使用这些代码：


+ 在[UTS插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)的编译流程中，`UTS`本身就会被编译为`Kotlin`/`swift` 源码。所以 `UTS` 调用原生代码的过程，**本质是同一语言内部，不同函数/对象之间的调用过程，不会有任何性能损耗**


+ 和`uts代码`一样，混编的原生代码可以直接真机运行，省去了手动集成`AAR`三方库后打包自定义基座的环节，大大提升了开发效率。



使用`UTS原生混编`之后，开发者想要实现原生功能，仅需要：

	1  通过`搜索引擎`/`AIGC`/`原生API文档` 得到原生代码片段
	
	2  放入UTS插件中，真机运行，查看效果。


---

下面我们以`内存监控`功能为例，分别拆解 `UTS原生混编`技术在`Android`和`ios`平台上的使用步骤



#### 前置条件

在开始使用 `UTS原生混编`之前，开发者需要确保两个前置条件：

1  `HBuidlerX` 4.25 以上版本

2  对[UTS插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#%E7%AE%80%E5%8D%95%E6%8F%92%E4%BB%B6%E7%A4%BA%E4%BE%8B)具备一定的了解和开发经验

## Android平台

在进行下一步的操作之前，你的目录应该是这样的：

![目录](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/bybrid_android_start.png)


#### 第一步 获取和验证原生代码

原生代码的获取有以下方式：

+ 1 [Android官方文档](https://developer.android.google.cn/?hl=zh-cn)

![获取代码](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/hybrid_android_getcode_2.png)

+ 2 搜索引擎/AI工具

![获取代码](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/hybrid_android_getcode.png)

AI工具或官方文档得到的代码并不总是准确的，我们需要去验证它。

目前`HBuilderX`并未提供原生代码的语法提示和校验，因此我们建议：

+ 如果编写大段原生代码，推荐在原生IDE(比如：`AndroidStudio`)中编写，再放入`UTS插件`混编联调

+ 如果是小的代码片段，可以直接放入`UTS插件`目录，依靠`HBuilderX`本地编译功能来完成原生代码的校验


这里我们选择直接集成`UTS插件`, 使用`HBuilderX`来验证

#### 第二步 集成原生代码

`Kotlin`/`Java`语言中，存在[包名](https://kotlinlang.org/docs/packages.html) 的概念，类似`swift`的命名空间。为了让我们的原生代码可以被`UTS`使用，我们需要确保原生代码的包名是正确的:

大多数情况下，我们建议混编代码的包名与[UTS插件默认包名](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-android.html#_3-1-%E9%85%8D%E7%BD%AEandroidmanifest-xml)保持一致，这样在UTS调用原生代码时，可以省去手动引入包名的步骤。

```kotlin
// 混编示例中的包名
package uts.sdk.modules.utsDemoMem
```

如果混编代码的包名与`UTS插件默认包名`不一致，则需要像使用原生对象一样手动引入

```ts
import KotlinObject from 'xxx.xxx.KotlinObject';
```


回到我们的示例，现在整理完的`Kotlin`代码是这样的：

```kotlin
package uts.sdk.modules.utsDemoMem

// 这里是原生的包名引用
import android.app.ActivityManager
import android.content.Context.ACTIVITY_SERVICE
// UTS内置对象的包名引用
import io.dcloud.uts.UTSAndroid
import io.dcloud.uts.setInterval
import io.dcloud.uts.clearInterval
import io.dcloud.uts.UTSArray
import io.dcloud.uts.console

object NativeCode {

    fun getMemInfo():Array<Number>{
    
    	val activityManager = UTSAndroid.getUniActivity()?.getSystemService(ACTIVITY_SERVICE) as ActivityManager
    	val memoryInfo = ActivityManager.MemoryInfo()
    	activityManager.getMemoryInfo(memoryInfo)
    	val availMem = memoryInfo.availMem / 1024 / 1024
    	val totalMem = memoryInfo.totalMem / 1024 / 1024
      
    	// availMem 可用内存，单位MB
    	// totalMem 设备内存，单位MB
    	console.log(availMem,totalMem)
    	return arrayOf(availMem,totalMem)
    }

}
```

上面的代码中，我们将获取内存的信息的功能以`Kotlin`静态方法`NativeCode.getMemInfo()` 的形式对外暴露

接下来，我们将整理好的原生代码添加到 在`app-android` 目录

![](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/bybrid_android_add.png)

> 注意：java代码需要云打包自定义基座后生效，kotlin代码不需要打包，标准基座即可生效

是的，就是这样简单。如图所示，我们已经完成了对原生代码的集成。


#### 第三步 在原生代码中调用UTS内置对象

在上面的示例中，我们已经实现了获取当前系统内存的功能，但我们还想更进一步:持续监控内存，并且回调信息到`uvue`页面

实现持续调用的方法有很多，这里我们为了演示在`Kotlin`代码中调用`UTS内置对象`的情况，选择采用[setInterval](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/timers.html#setinterval-handler-timeout-arguments)来实现这个功能:


使用 [UTS内置对象](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/number.html) 需要注意两点：

+  正确引入类名：

	`UTS内置对象`在具体的平台会有一个对应的类名，举例： UTS内置的[Array](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/array.html) 对应 `Kotlin`中的`io.dcloud.uts.UTSArray`

+  正确的处理原生对象和内置对象直接的转换

	当前示例中不涉及，但如果开发者可能遇到类似 kotlin.Array 转换 UTS内置Array的情况，这种情况可以通过查阅[内置对象文档](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/number.html)来解决。


> 完整的内置对象实现清单和与原生对象转换代码示例，大家都可以在内置对象文档的具体章节找到


原生`kotlin`代码的最终形态:

```kotlin
package uts.sdk.modules.demoMem;

import android.app.ActivityManager
import android.content.Context.ACTIVITY_SERVICE
import io.dcloud.uts.UTSAndroid
import io.dcloud.uts.setInterval
import io.dcloud.uts.clearInterval
import io.dcloud.uts.console

object NativeCode {

	/**
	 * 同步获取内存信息
	 */
	fun getMemInfo():Array<Number>{

		val activityManager = UTSAndroid.getUniActivity()?.getSystemService(ACTIVITY_SERVICE) as ActivityManager
		val memoryInfo = ActivityManager.MemoryInfo()
		activityManager.getMemoryInfo(memoryInfo)
		val availMem = memoryInfo.availMem / 1024 / 1024
		val totalMem = memoryInfo.totalMem / 1024 / 1024
	  
		// availMem 可用内存，单位MB
		// totalMem 设备内存，单位MB
		console.log(availMem,totalMem)
		return arrayOf(availMem,totalMem)
    }

     /**
     * 记录上一次的任务id
     */
    private var lastTaskId = -1

	/**
	 * 开启内存监控
	 */
    fun startMemMonitor(callback: (Array<Number>) -> Unit){

        if(lastTaskId != -1){
            // 避免重复开启
            clearInterval(lastTaskId)
        }

		// 延迟1000ms，每2000ms 获取一次内存
        lastTaskId = setInterval({

          val activityManager = UTSAndroid.getUniActivity()?.getSystemService(ACTIVITY_SERVICE) as ActivityManager
          val memoryInfo = ActivityManager.MemoryInfo()
          activityManager.getMemoryInfo(memoryInfo)
          val availMem = memoryInfo.availMem / 1024 / 1024
          val totalMem = memoryInfo.totalMem / 1024 / 1024
          
		  console.log(availMem,totalMem)
		  // 将得到的内存信息，封装为kotlin.Array 单位是MB
          callback(arrayOf(availMem,totalMem))
          
        },1000,2000)
		

    }
    
	/**
	 * 关闭内存监控
	 */
    fun stopMemMonitor(){
        if(lastTaskId != -1){
            // 避免重复开启
            clearInterval(lastTaskId)
        }
    }

}
```

上面的代码中，我们将获取内存的信息的功能以`Kotlin`静态方法`NativeCode.startMemMonitor(callback)` 的形式对外暴露。 

这里的 `callback`参数是一个 参数为`UTSArray`类型的`Kotlin`函数，对应`UTS`中一个参数为`Array`的`function`对象

至此，内存监控功能的原生代码部分已经完全开发完毕。接下来，我们编写UTS代码来使用它。


#### 第四步 编写`UTS`调用代码

如我们在前文所讲，`UTS`是`Kotlin`语言的上游语言。所有`Kotlin`代码中的：`类`、`对象`、`函数`、`变量`，均可以在uts中直接使用。 

**但是反之，则不行**。

因为`UTS`的编译器兼容了`Kotlin`的语法规则，所以`UTS`中调用`Kotlin`代码可以被很好的支持，即使升级HBuilderX版本也不会有什么问题。

但`UTS`从未保证过编译`Kotlin`的具体规则。所以虽然开发者可以通过一些取巧的方式实现 在`Kotlin`中调用`UTS`代码，但这是不被支持的，遇到`HBuilderX`升级的情况，类似的代码可能会失效/异常


在我们的示例里,UTS的调用的代码是这样的：

```ts
// 开启内存监听
export function callKotlinCallbackUTS(callback: (res: Array<number>) => void) {
	NativeCode.startMemMonitor(function(res:kotlin.Array<number>){
		callback(Array.fromNative(res))
	})
}
// 结束内存监听
export function callKotlinStopCallbackUTS() {
	NativeCode.stopMemMonitor()
}

// 同步获取内存信息
export function callKotlinMemGet():Array<number> {
	let kotlinArray = NativeCode.getMemInfo()
	return UTSArray.fromNative(kotlinArray)
}
```

上面的代码，我们在`UTS`中使用一个 入参为`Array<number>`类型的`function`对象就完成了对`kotlin`原生代码的调用。


#### 第五步 回调参数到uvue页面

`UTS`与`uvue`之间的相互调用，属于[UTS插件开发](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)的相关内容，这里不展开叙述，开发者可以查阅相关文档掌握这部分知识。

下面仅列出了uvue示例代码，用于完整示例：

```vue
<template>
	<view>
		<button @tap="kotlinMemGetTest">通过kotlin获取内存(同步)</button>
		<button @tap="kotlinMemListenTest">kotlin监听内存并持续回调UTS</button>
		<button @tap="kotlinStopMemListenTest">停止监听</button>
		<text>{{memInfo}}</text>
	</view>
</template>

<script>
	
	import { callKotlinCallbackUTS,callKotlinStopCallbackUTS,callKotlinMemGet} from "../../uni_modules/demo-mem";
	 
	export default {
		data() {
			return {
				memInfo: '-'
			}
		},
		onLoad() {

		},
		methods: {
			
			kotlinMemGetTest:function () {
			    let array = callKotlinMemGet()
				this.memInfo = "可用内存:" + array[0] + "MB--整体内存:" + array[1] + "MB"
			},
			kotlinMemListenTest: function () {
			    callKotlinCallbackUTS(function(ret:Array<number>){
				  this.memInfo = "可用内存:" + ret[0] + "MB--整体内存:" + ret[1] + "MB"
			    })
			},
			
			kotlinStopMemListenTest:function () {
			    callKotlinStopCallbackUTS()
				this.memInfo = "已暂停"
			},
		}
	}
</script>

```



## iOS平台

在进行下一步的操作之前，你的目录应该是这样的：

![目录](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/bybrid_ios_start.png)


#### 第一步 获取和验证原生代码

原生代码的获取有以下方式：

1 原生官方文档：
 + [swift官方文档](https://docs.swift.org/swift-book/)
 + [swift 中文版](https://swiftgg.gitbook.io/swift/)


2 搜索引擎/AI工具

AI工具或官方文档得到的代码并不总是准确的，我们需要去验证它。

目前`HBuilderX`并未提供原生代码的语法提示和校验，因此我们建议：

+ 如果编写大段原生代码，推荐在原生IDE(比如：`Xcode`)中编写验证，再放入`UTS插件`混编联调

+ 如果是小的代码片段，可以直接放入`UTS插件`目录，依靠`HBuilderX`本地编译功能来完成原生代码的校验


这里我们选择直接集成`UTS插件`, 使用`HBuilderX`来验证

#### 第二步 集成原生代码

swift 文件默认会引入原生系统库 `Foundation`, 如果需要调用 UI 相关的代码，则需要引入 `UIKit`,
如果你需要使用 uts 内置对象，则需要引入 uts 基础库 `DCloudUTSFoundation`。

回到我们的示例，现在整理完的`swift`代码是这样的：

```swift

// 这里是原生库的引用
import Foundation
// UTS内置对象的引用
import DCloudUTSFoundation

public class NativeCode {
  
    /// 同步获取内存信息
    static func getMemInfo() -> [Int] {
        let freeMem = NativeCode.getFreeMemory()
        let totalMem = NativeCode.getTotalMemory()
        
        // freeMem 可用内存，单位MB
        // totalMem 设备内存，单位MB
        console.log(freeMem, totalMem)
        return [freeMem, totalMem]
    }
}

// MARK: - 获取内存工具函数
extension NativeCode {
    
    /// 获取总内存大小（以MB为单位）
    /// - Returns: 设备总内存
    static func getTotalMemory() -> Int {
        return Int(ProcessInfo.processInfo.physicalMemory / 1024 / 1024)
    }

    
    /// 获取可用内存大小（以MB为单位）
    /// - Returns: 设备可用内存
    static func getFreeMemory() -> Int {
        var vmStats = vm_statistics_data_t()
        var infoCount = mach_msg_type_number_t(MemoryLayout<vm_statistics_data_t>.size / MemoryLayout<integer_t>.size)
        let kernReturn = withUnsafeMutablePointer(to: &vmStats) {
            $0.withMemoryRebound(to: integer_t.self, capacity: Int(infoCount)) {
                host_statistics(mach_host_self(), HOST_VM_INFO, $0, &infoCount)
            }
        }
        
        if kernReturn != KERN_SUCCESS {
            return 0
        }
        
        let vmPageSize = vm_page_size
        let freeMemorySize = Int(vmPageSize) * Int(vmStats.free_count + vmStats.inactive_count)
        return freeMemorySize / 1024 / 1024
    }
}

```

上面的代码中，我们将获取内存的信息的功能以`swift`静态方法`NativeCode.getMemInfo()` 的形式对外暴露。 而获取内存信息具体功能的实现，则是由 `NativeCode` 的两个拓展方法实现。

接下来，我们将整理好的原生代码添加到 在`app-ios` 目录

![](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/bybrid_ios_add.png)


是的，就是这样简单。如图所示，我们已经完成了对原生代码的集成。


#### 第三步 在原生代码中调用UTS内置对象

在上面的示例中，我们已经实现了获取当前设备内存信息的功能，但是我们还想更进一步:持续监控内存，并且回调信息到uvue页面

实现持续调用的方法有很多,这里我们为了演示在`swift`代码中调用`UTS内置对象`的情况，选择采用[setInterval](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/timers.html#setinterval-handler-timeout-arguments)来实现这个功能:


使用 [UTS内置对象](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/number.html) 需要注意两点：

1 正确引入类名：

`UTS内置对象`在具体的平台会有一个对应的类名，举例： UTS内置的[Set](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/array.html) 对应 `swift`中的`UTSSet`

2 正确的处理原生对象和内置对象直接的转换

下面的示例代码中涉及到 uts 内置对象 `Number` 转换成原生类型 `Int` 的例子，实现方式为 `toInt()`, 具体见示例代码。如果你遇到其他类型的转换，请查阅内置对象文档来确定转换方法。


> 完整的内置对象实现清单和与原生对象转换代码示例，大家都可以在内置对象文档的具体章节找到


原生`swift`代码的最终形态:

```swift

// 这里是原生库的引用
import Foundation
// UTS内置对象的引用
import DCloudUTSFoundation

public class NativeCode {
  
    /// 同步获取内存信息
    static func getMemInfo() -> [Int] {
        let freeMem = NativeCode.getFreeMemory()
        let totalMem = NativeCode.getTotalMemory()
        
        // freeMem 可用内存，单位MB
        // totalMem 设备内存，单位MB
        console.log(freeMem, totalMem)
        return [freeMem, totalMem]
    }
    
    /// 记录上一次的任务id
   static private var lastTaskId = -1
    
    /// 开启内存监控
   static func startMemMonitor(_ callback: @escaping (_ res: [Int]) -> Void) {
        
        if lastTaskId != -1 {
            // 避免重复开启
            clearInterval(NSNumber.from(lastTaskId))
        }
        
        lastTaskId = setInterval({ 
            let freeMem = NativeCode.getFreeMemory()
            let totalMem = NativeCode.getTotalMemory()
            console.log(freeMem, totalMem)
            callback([freeMem, totalMem])
        }, 2000).toInt()
    }
    
    /// 关闭内存监控
    static func stopMemMonitor() {
        if lastTaskId != -1 {
            clearInterval(NSNumber.from(lastTaskId))
			lastTaskId = -1
        }
    }
}

// MARK: - 获取内存工具函数
extension NativeCode {
    
    /// 获取总内存大小（以MB为单位）
    /// - Returns: 设备总内存
    static func getTotalMemory() -> Int {
        return Int(ProcessInfo.processInfo.physicalMemory / 1024 / 1024)
    }

    
    /// 获取可用内存大小（以MB为单位）
    /// - Returns: 设备可用内存
    static func getFreeMemory() -> Int {
        var vmStats = vm_statistics_data_t()
        var infoCount = mach_msg_type_number_t(MemoryLayout<vm_statistics_data_t>.size / MemoryLayout<integer_t>.size)
        let kernReturn = withUnsafeMutablePointer(to: &vmStats) {
            $0.withMemoryRebound(to: integer_t.self, capacity: Int(infoCount)) {
                host_statistics(mach_host_self(), HOST_VM_INFO, $0, &infoCount)
            }
        }
        
        if kernReturn != KERN_SUCCESS {
            return 0
        }
        
        let vmPageSize = vm_page_size
        let freeMemorySize = Int(vmPageSize) * Int(vmStats.free_count + vmStats.inactive_count)
        return freeMemorySize / 1024 / 1024
    }
}

```

上面的代码中，我们将获取内存的信息的功能以`swift`静态方法`NativeCode.startMemMonitor(callback)` 的形式对外暴露。 

这里的 `callback`参数是一个 参数为`[Int]`(即 `Array<Int>`) 类型的 `swift`函数，对应`UTS`中一个参数为`Array`的`function`对象

至此，内存监控功能的原生代码部分已经完全开发完毕。接下来，我们编写UTS代码来使用它。


#### 第四步 编写`UTS`调用代码

如我们在前文所讲，`UTS`是`swift`语言的上游语言。所有`swift`代码中的：`类`、`对象`、`函数`、`变量`，均可以在uts中直接使用。 

**但是反之，则不行**。

因为`UTS`的编译器兼容了`swift`的语法规则，所以`UTS`中调用`swift`代码可以被很好的支持，即使升级 HBuilderX 版本也不会有什么问题。

但`UTS`从未保证过编译对应的`swift`的具体规则。所以虽然开发者可以通过一些取巧的方式实现：swift 中调用 UTS 代码，但这是不被支持的，遇到类似 HBuilderX 版本升级之类的情况，类似代码可能会失效或者异常。


在我们的示例中, UTS 中的调用的代码是这样的：

```ts

export function onCallNativeCallbackUTS(callback: (res: Array<number>) => void) {
	NativeCode.startMemMonitor((res: Int[]) => {
		// 将 Int 数组转换成 number数组
		let numberArray = res.map((value: Int, index: number): number => {
			// 将 Int 转换成 number
			return Number.from(value);
		})
		callback(numberArray)   
	})
}

export function callNativeStopCallbackUTS() {
	NativeCode.stopMemMonitor()
}

export function callNativeMemGet():Array<number> {
	// 将 Int 数组转换成 number数组
	let numberArray = NativeCode.getMemInfo().map((value: Int, index: number): number => {
		// 将 Int 转换成 number
		return Number.from(value);
	}) 
	return numberArray;
}

```

上面的代码，我们在UTS中使用一个 入参为`Array<number>`类型的`function`对象就完成了对`swift`原生代码的调用。


#### 第五步 回调参数到uvue页面

uts文件与uvue 之间的相互调用，属于[UTS插件开发](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)的相关内容，这里不展开叙述。开发者可以查阅相关文档掌握这部分知识。

下面仅列出了uvue示例代码。用于完整展示内存监控示例：

```vue
<template>
	<view>
		<button @tap="nativeMemGetTest">通过原生代码获取内存(同步)</button>
		<button @tap="nativeMemListenTest">原生代码监听内存并持续回调UTS</button>
		<button @tap="nativeStopMemListenTest">停止监听</button>
		<text>{{memInfo}}</text>
	</view>
</template>

<script>
	
	import { onCallNativeCallbackUTS,callNativeStopCallbackUTS,callNativeMemGet} from "../../uni_modules/demo-mem";
	 
	export default {
		data() {
			return {
				memInfo: '-'
			}
		},
		onLoad() {

		},
		methods: {
			
			nativeMemGetTest() {
			    let array = callNativeMemGet()
				this.memInfo = "可用内存:" + array[0] + "MB--整体内存:" + array[1] + "MB"
			},   
			nativeMemListenTest() {
				onCallNativeCallbackUTS((ret: number[]) => {
					this.memInfo = "可用内存:" + ret[0] + "MB--整体内存:" + ret[1] + "MB"
				});
			},
			
			nativeStopMemListenTest() {
			    callNativeStopCallbackUTS()
				this.memInfo = "已暂停"
			},
		}
	}
</script>

```

### 原生代码使用 console 向 HX 控制台输出打印日志			

首先将基础库 `DCloudUTSFoundation` 导入到 swift 源码文件中，不过这个导入和使用过程将没有代码提示，输出的变量信息也不会包含变量所在的文件和代码行号等信息。

示例如下：

```swift

import DCloudUTSFoundation;

func test1() -> String {
    console.log("this is in swift file")
    return "123"
}
```

### 原生代码使用 UTSiOS 对象

如果你想在 swift 代码中使用 `UTSiOS` 对象提供的能力，你需要先导入基础库 `DCloudUniappRuntime`.

示例如下：

```swift

import DCloudUniappRuntime;

func getKeyWindow() -> UIWindow {
    return UTSiOS.getKeyWindow()
}
```

**注意：**

- UTSiOSHookProxy 因为涉及到自动注册的问题，在 swift 代码中直接使用将不生效。
- 目前仅支持 Swift 源码混编，OC 源码即使添加也不会参与编译
- Swift 源码文件中定义的函数、全局变量、类 等符号名称不要和 uts 文件中的符号名相同，否则会因为符号冲突导致编译不过


## 混编注意事项

+ `index`是保留文件名，原生代码不能命名为 index.kt/index.java/index.swift
 
+ HBuilder X 目前不支持原生代码的语法提示、转到定义、debug断点。仅支持高亮和格式化。

+ 混编需要使用[条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91%E5%A4%84%E7%90%86%E5%A4%9A%E7%AB%AF%E5%B7%AE%E5%BC%82)限制编译入口

```uts
// 下面的代码只会在Android平台编译
// #ifdef APP-ANDROID
export function callKotlinMethodGetInfo():String {
	return NativeCode.getPhoneInfo()
}
export function callJavaMethodGetInfo():String {
	return new JavaUser("jack",12).name
}
// #endif
```

完整的混编示例可以在[hello uts](https://gitcode.net/dcloud/hello-uts/-/tree/dev/uni_modules/uts-syntaxcase/utssdk)中找到



## 支持情况说明

但目前HBuilderX并未提供原生代码的语法提示和校验。所以如果编写大段原生代码，推荐在原生ide中编写好，再放入uts插件下混编联调。

如果是一小段简单代码，比如从网络或AI摘抄了一段，也可以直接在HBuilderX中开发联调。
