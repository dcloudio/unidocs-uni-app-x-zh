# UTS原生混编介绍

`HBuilder X 4.25`起，UTS插件可以直接使用原生的kotlin、java、swift代码，即 `UTS原生混编`

## `UTS原生混编`的优势和适用场景

之前，开发者只能使用[UTS语言](https://doc.dcloud.net.cn/uni-app-x/uts/) 来开发[UTS插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)。 

对于不熟悉原生开发的插件作者来说，往往需要下面的步骤来实现原生API功能的封装：

+ 1 通过搜索引擎/AIGC/原生API文档 得到一段自己想要的功能对应原生代码(kotlin/swift等)

+ 2 手动翻译这段代码为UTS

+ 3 如果存在UTS不支持的语法，还需要把原生代码封装成 aar/framework 等原生库形式，再供UTS代码调用


这是一件很繁琐的事情，`UTS原生混编`的出现彻底解决了这个问题：

开发者只需要把原生环境中可用的 kotlin/swift/java 等原生代码按照约定放在UTS插件中，就可以通过 `uts` 文件就可以无缝的使用。

在UTS插件的编译流程中，UTS源码是 Kotlin/swift 源码的上游环节，也就是说 UTS本身就会被编译为Kotlin/swift 源码，所以 uts 与原生语言之间的相互调用 本质是kotlin/swift语言内部 不同函数/对象的调用，不会有任何调用成本和性能损耗


和uts插件代码一样，混编的原生代码可以直接真机运行，省去了手动集成AAR三方库需要打包自定义基座的环节，大大提升了开发效率。


有了`UTS原生混编`之后，开发者如果想要实现对应的原生功能，仅需要：

+   1  通过搜索引擎/AI/原生API文档 得到原生代码片段，
+   2  放入UTS插件中，真机运行

即可以看到执行结果，大大简化了原生功能步骤。


下面我们以内存监控功能为例，分别拆解 在android和ios平台上的实现步骤


## Android平台

#### 选择UTS插件

在开始集成之前，你需要确保你拥有一个的UTS插件。

UTS插件创建步骤：[参考这里](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#%E7%AE%80%E5%8D%95%E6%8F%92%E4%BB%B6%E7%A4%BA%E4%BE%8B)


#### 获取和验证原生代码

原生代码的获取一般有三种方式：

1 [Android官方文档](https://developer.android.google.cn/?hl=zh-cn)

2 搜索引擎/AI工具


我们在这里使用AI工具通过限定语言得到了原生代码。

AI工具和原生文档得到的代码并不总是准确的，我们需要去验证它。

目前HBuilderX并未提供原生代码的语法提示和校验。所以如果编写大段原生代码，推荐在原生ide中编写好，再放入uts插件下混编联调。

如果是小的代码片段，我们可以通过经验判断或者直接依靠HBuilderX本地编译功能来实现原生代码的校验。


这里我们选择直接集成UTS插件, 使用HBuilderX来验证


#### 集成原生代码

在 kotlin/java语言中，存在包名的概念，在添加原生代码之前，我们要先确保

大多数情况下，我们建议混编代码的包名与[UTS插件默认包名](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-android.html#_3-1-%E9%85%8D%E7%BD%AEandroidmanifest-xml)保持一致，这样在UTS调用原生代码时，可以省去手动引入包名的步骤。

```kotlin
// hello uts 混编示例中的包名
package uts.sdk.modules.utsSyntaxcase
```

如果混编代码的包名与`UTS插件默认包名`不一致，则需要像使用原生对象一样手动引入

```ts
import KotlinObject from 'xxx.xxx.KotlinObject';
```

接下来，我们 在app-android 可以直接添加 kotlin/java 源码

![](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_plugin/mixCodeAndroid.png)

> 注意：java代码需要云打包自定义基座后生效，kotlin代码不需要打包，标准基座即可生效


是的，就是这样简单。如图所示，我们已经完成了原生代码的集成。接下来，我们来编写UTS代码来使用它。

#### 编写uts调用代码


#### 在原生代码中调用UTS内置对象

在上面的示例中，我们已经实现了使用kotlin代码，获取当前设备内存信息的功能，但是可能我们还想更进一步实现持续监控内存

想要实现持续调用的方法有很多，包括在 uvue界面中连续调用等。这里我们为了演示在原生kotlin代码中调用
UTS内置对象的，选择采用[setInterval](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/timers.html#setinterval-handler-timeout-arguments)函数，实现这个功能：


使用 UTS内置对象 需要注意两点：

1 正确引入包名：

2 正确的处理 原生对象和内置对象直接的转换


### 注意事项

##### Android包名说明


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