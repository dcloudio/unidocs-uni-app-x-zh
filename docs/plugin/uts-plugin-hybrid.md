# UTS原生混编介绍

`HBuilder X 4.25`起，UTS插件可以直接使用原生的kotlin、java、swift代码，即 `UTS原生混编`(下文简称：`原生混编`)



## 原生混编的优势和适用场景

`原生混编`出现之前，开发者只能使用[UTS语言](https://doc.dcloud.net.cn/uni-app-x/uts/) 来开发[UTS插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)。 

对于不熟悉原生的开发者来说，要实现原生功能的开发，往往要经过下面的步骤：

	1   通过`搜索引擎`/`AIGC`/`原生API`文档 得到对应功能的关键原生代码(kotlin/swift等)

	2   手动翻译这段代码为`UTS`

	3   如果存在`UTS`不支持的语法，还需要把原生代码封装成 `aar`/`framework` 等原生库形式，再供`UTS`代码调用


**这是一件很繁琐的事情，`UTS原生混编`的出现彻底解决了这个问题：**


开发者只需要把正确的 kotlin/swift/java 原生代码按照约定放在UTS插件目录中，就可以通过 `uts`无缝的使用这些原生代码。

在`UTS插件`的编译流程中，UTS源码是 Kotlin/swift 源码的上游环节，也就是说 UTS本身就会被编译为Kotlin/swift 源码，所以 uts 与原生语言之间的相互调用 本质是**同一语言内部 不同函数/对象之间的相互调用，不会有任何调用成本和性能损耗**


和uts插件代码一样，混编的原生代码可以直接真机运行，省去了手动集成AAR三方库需要打包自定义基座的环节，大大提升了开发效率。


有了`UTS原生混编`之后，开发者如果想要实现对应的原生功能，仅需要：

+   1  通过`搜索引擎`/`AIGC`/`原生API` 得到原生代码片段，
+   2  放入UTS插件中，真机运行

即可以看到执行结果。


下面我们以内存监控功能为例，分别拆解 `UTS原生混编`技术在`Android`和`ios`平台上的使用步骤


## Android平台

#### 前置条件

在真正开始使用 `UTS原生混编`之前，开发者需要确保两个前置条件：

1  `HBuidlerX` 最低 4.25 版本

2  对[UTS插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#%E7%AE%80%E5%8D%95%E6%8F%92%E4%BB%B6%E7%A4%BA%E4%BE%8B)的有基本的认识，和一定的开发经验。


在进行下一步的操作之前，你的目录应该是这样的：

![目录](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/bybrid_android_start.png)


#### 第一步 获取和验证原生代码

原生代码的获取有以下方式：

1 [Android官方文档](https://developer.android.google.cn/?hl=zh-cn)

2 搜索引擎/AI工具


我们在这里使用AI工具得到了关键代码：

![获取代码](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/hybrid_android_getcode.png)

AI工具或官方文档得到的代码并不总是准确的，我们需要去验证它。

目前`HBuilderX`并未提供原生代码的语法提示和校验，因此我们建议：

+ 如果编写大段原生代码，推荐在原生IDE(比如：AndroidStudo)中编写验证，再放入uts插件混编联调

+ 如果是小的代码片段，可以直接放入UTS插件目录，依靠HBuilderX本地编译功能来完成原生代码的校验


这里我们选择直接集成UTS插件, 使用`HBuilderX`来验证

#### 第二步 集成原生代码

`Kotlin`/`Java`语言中，存在[包名](https://kotlinlang.org/docs/packages.html) 的概念，类似ios中的命名空间。为了让我们的原生代码可以被uts访问到，我们需要确保原生代码的包名是正确的:

大多数情况下，我们建议混编代码的包名与[UTS插件默认包名](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-android.html#_3-1-%E9%85%8D%E7%BD%AEandroidmanifest-xml)保持一致，这样在UTS调用原生代码时，可以省去手动引入包名的步骤。

```kotlin
// 混编示例中的包名
package uts.sdk.modules.utsDemoMem
```

如果混编代码的包名与`UTS插件默认包名`不一致，则需要像使用原生对象一样手动引入

```ts
import KotlinObject from 'xxx.xxx.KotlinObject';
```


整理完的`Kotlin`代码是这样的：

```kotlin
package uts.sdk.modules.utsSyntaxcase

// 这里是原生的包名引用
import android.app.ActivityManager
import android.content.Context.ACTIVITY_SERVICE
import io.dcloud.uts.UTSAndroid
import io.dcloud.uts.setInterval
import io.dcloud.uts.clearInterval
import io.dcloud.uts.UTSArray
import io.dcloud.uts.console

object NativeCode {


    fun memMonitor(){

		val activityManager = UTSAndroid.getUniActivity()?.getSystemService(ACTIVITY_SERVICE) as ActivityManager
		val memoryInfo = ActivityManager.MemoryInfo()
		activityManager.getMemoryInfo(memoryInfo)
		val availMem = memoryInfo.availMem / 1024 / 1024
		val totalMem = memoryInfo.totalMem / 1024 / 1024
	  
		// availMem 可用内存，单位MB
		// totalMem 设备内存，单位MB
		console.log(availMem,totalMem)
		
    }
   

}
```

上面的代码，我们将获取内存的信息的功能以kotlin静态方法的形式对外uts进行暴露。

接下来，我们将整理好的原生代码添加到 在`app-android` 目录

![](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_hybrid_plugin/bybrid_android_add.png)

> 注意：java代码需要云打包自定义基座后生效，kotlin代码不需要打包，标准基座即可生效

是的，就是这样简单。如图所示，我们已经完成了原生代码的集成。


#### 第三步 在原生代码中调用UTS内置对象

在上面的示例中，我们已经实现获取当前设备内存信息的功能，但是可能我们还想更进一步:持续监控内存，并且回调信息到uvue页面

实现持续调用的方法有很多。这里我们为了演示在原生kotlin代码中调用UTS内置对象，选择采用[setInterval](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/timers.html#setinterval-handler-timeout-arguments)函数，实现这个功能：


使用 UTS内置对象 需要注意两点：

1 正确引入类名：

	UTS内置对象在具体的平台会有一个对应的类名，举例： Array -> io.dcloud.uts.UTSArray

2 正确的处理 原生对象和内置对象直接的转换

	当前示例中不涉及，但如果开发者遇到 kotlin.Array 转换


完整内置对象和原生对象转换代码示例，大家都可以在具体的内置对象文档上找到。


原生`kotlin`代码的最终形态:

```kotlin
package uts.sdk.modules.utsDemoMem

import android.app.ActivityManager
import android.content.Context.ACTIVITY_SERVICE
import io.dcloud.uts.UTSAndroid
import io.dcloud.uts.setInterval
import io.dcloud.uts.clearInterval
import io.dcloud.uts.UTSArray

object NativeCode {

     /**
     * 记录上一次的任务id
     */
    private var lastTaskId = -1

	/**
	 * 开启内存监控
	 */
    fun memMonitor(callback: (UTSArray<Number>) -> Unit){

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
          
		  // 将得到的内存信息，封装为UTSArray(即UTS环境中的Array对象)
          val retArray = UTSArray<Number>()
          retArray.add(availMem)
          retArray.add(totalMem)
          callback(retArray)
          
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

至此，内存监控功能的原生代码部分已经完全开发完毕。接下来，我们编写UTS代码来使用它。


#### 第三步 编写uts调用代码

如我们在前文所讲，UTS是kotlin语言的上游语言。所有kotlin 代码中的：类、对象、函数、变量，均可以在uts中直接使用。 


调用的代码是这样的：

```ts
export function callKotlinCallbackUTS(callback: (res: string) => void) {
	NativeCode.kotlinCallbackUTS(function(res:Array<number>){
    console.log(res)
    callback("设备内存:" + res[0] + ",可用内存:" + res[1])
  })
}

```




#### 注意事项

##### 原生代码使用UTS内置对象

UTS的[内置对象](../uts/buildin-object-api/number.md)和[平台专用对象](../uts/utsandroid.md)均可以在原生环境使用，下面以kotlin中打印日志到HBuilder X 控制台为例说明：


第一步：手动导入对应的包名，包名规则为： `io.dcloud.uts.xxx` 。这里的 xxx 是具体的对象的类名 ：

```kotlin
import io.dcloud.uts.console // kt或java代码
```

第二步： 导入包名后，以原生方式使用内置对象

```kotlin
console.log("Hello World") // kt或java代码
```

这样就实现了在kt或java代码中打印日志到HBuilderX的控制台。

不过这个导入和使用过程将没有代码提示，输出的变量信息也不会包含变量所在的文件和代码行号等信息。

##### UTS内置对象与原生类型的对应关系

下面列出内置对象对应的类名，如果需要在原生环境和UTS环境/uvue环境中互传数据，建议转换为标准内置对象实现后再进行传递。

|uts 内置对象		|编译成的原生类名		 
|:----		|:---						
|Array		|io.dcloud.uts.UTSArray		
|Number		|io.dcloud.uts.UTSNumber 	
|String		|kotlin.String				
|Set		|io.dcloud.uts.Set			
|Map		|io.dcloud.uts.Map			
|UTSJSONObject|io.dcloud.uts.UTSJSONObject
|JSON		|io.dcloud.uts.JSON			
|Date		|io.dcloud.uts.Date			
|Math		|io.dcloud.uts.Math			
|Promise	|io.dcloud.uts.UTSPromise	
|RegExp		|io.dcloud.uts.UTSRegExp	
|Error		|io.dcloud.uts.UTSError		
|console	|io.dcloud.uts.console		

## iOS平台

在插件的app-ios 目录下可以直接添加 swift 源码文件

![](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_plugin/mixCodeIOS.png)

如图所示，可以将 swift 文件直接放在 app-ios 目录下，也可以放在 app-ios 的子目录下。

在 uts 代码中使用 swift 文件中定义的函数、变量、类等时无需导入，可以直接调用。


### 原生代码使用UTS内置对象

UTS的[内置对象](../uts/buildin-object-api/number.md)和[平台专用对象](../uts/utsios.md)均可以在原生环境使用，
但是在使用前需要导入基础库 `DCloudUTSFoundation`。

我们知道在 uts 中使用的 uts 内置对象会被编成原生类型，那么在混编的 swift 文件中要想使用 uts 内置对象，就要直接使用其编译后的原生类型。
下面列出 uts 内置对象对应的 swift 原生类名

|uts 内置对象		|编译成的原生类名		  			
|:----			|:---						
|Array			|Array						
|Number			|NSNumber 					
|String			|String						
|Set			|UTSSet						
|Map			|Map						
|UTSJSONObject	|UTSJSONObject				
|JSON			|JSON						
|Date			|Date						
|Math			|Math										
|RegExp			|UTSRegExp					
|Error			|UTSError					
|console		|console					

**以console对象为例，演示原生代码向 HX 控制台打印日志**

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