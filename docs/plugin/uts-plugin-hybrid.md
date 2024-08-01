# UTS原生混编介绍

`HBuilder X 4.25`起，UTS插件可以直接使用原生的kt、java、swift代码，即 `UTS原生混编`。

在以前，开发者需要把kt、swift代码封装为库，比如aar文件或者framework, .a库，然后才能被uts调用。有了 UTS原生混编 ，免去了封装过程。

uts插件的主入口仍然是uts文件，混编kt、swift文件可以作为uts调用的代码。

因为uts编译到Android就是变成了kt，编译到iOS就变成了swift，那么uts文件调用kt代码，其实本质还是kt之间不同函数/对象的调用。

和uts插件代码一样，混编的原生代码可以直接真机运行，原生代码中也可以打console.log到HBuilderX控制台中。

但目前HBuilderX并未提供原生代码的语法提示和校验。所以如果编写大段原生代码，推荐在原生ide中编写好，再放入uts插件下混编联调。

如果是一小段简单代码，比如从网络或AI摘抄了一段，也可以直接在HBuilderX中开发联调。

## Android平台

在app-android 可以直接添加 kotlin/java 源码

![](https://web-ext-storage.dcloud.net.cn/doc/uts/uts_plugin/mixCodeAndroid.png)

> 注意：java代码需要云打包自定义基座后生效，kotlin代码不需要打包，标准基座即可生效

### 包名说明

大多数情况下，我们建议混编代码的包名与[UTS插件默认包名](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-for-android.html#_3-1-%E9%85%8D%E7%BD%AEandroidmanifest-xml)保持一致，这样在UTS调用原生代码时，可以省去手动引入包名的步骤。

```kotlin
// hello uts 混编示例中的包名
package uts.sdk.modules.utsSyntaxcase
```

如果混编代码的包名与`UTS插件默认包名`不一致，则需要像使用原生对象一样手动引入

```ts
import KotlinObject from 'xxx.xxx.KotlinObject';
```


### 原生代码使用UTS内置对象

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