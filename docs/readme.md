# uni-app x 是什么？<Badge text="HBuilderX 3.9+"/>

uni-app x，是下一代 uni-app，是一个跨平台应用开发引擎。

uni-app x 是一个庞大的工程，它包括uts语言、uvue渲染引擎、uni的组件和API、以及扩展机制。

uts是一门类ts的、跨平台的、新语言。

uts在iOS平台编译为swift、在Android平台编译为kotlin、在Web和小程序平台编译为js、在鸿蒙next平台上编译为ArkTS。

在Android平台，uni-app x 的工程被整体编译为kotlin代码，本质上是换了vue写法的原生kotlin应用，在性能上与原生kotlin一致。

可以体验打包后的[hello uni-app x](https://hellouniappx.dcloud.net.cn)，访问地址或扫描二维码后获取：

- `Android`
  - Android 端通过开发者工具显示界面元素边界可知界面都是原生UI，解包后也不会看到js引擎，里面的html文件是示例中演示web-view组件所用
- `iOS` 获取 ABM（Apple 商务管理）包
  - 使用 iPhone 扫码后会跳转页面需要使用 DCloud 账号登录，登录过后自动分发兑换码在 AppStore 获取安装包，此过程不需要您支付费用。ABM包在Appstore中无法公开搜索到，但安装后可在 AppStore 更新页面进行更新。
- [web 预览地址](https://hellouniappx.dcloud.net.cn/web)
- 微信小程序
  - 微信中搜索`HelloUniAppX`，或者扫描下方二维码

<div class="quick">
  <div style="margin-top: 20px;justify-content: space-around;">
    <a
      href="https://hellouniappx.dcloud.net.cn"
      target="_blank"
      style="display: flex; align-items: center;flex-direction: column;margin: 0 5px 20px;width:160px;"
      one-link-mark="yes"
    >
      <div class="barcode-img-box">
        <img
          src="https://web-ext-storage.dcloud.net.cn/uni-app-x/hello-uniappx-qrcode.png"
          width="160"
          loading="lazy"
        />
      </div>
      <b>hello uni-app x</b>
    </a>
  </div>
</div>

::: tip
hello uni-app x的源码见：[https://gitcode.net/dcloud/hello-uni-app-x](https://gitcode.net/dcloud/hello-uni-app-x)
:::

## 1. uts语言

> 该语言在2022年9月推出，初期用于原生插件扩展开发。

开发者在 uni-app x 中，需使用 uts 而不是js。尤其是 Android端不自带js引擎，无法运行js代码。

uts 全称 uni type script，是一门跨平台的、高性能的、强类型的现代编程语言。它在不同平台，会被编译为不同平台的native语言，如：

* `web/小程序`平台，编译为JavaScript
* `Android`平台，编译为Kotlin
* `iOS`平台，编译Swift
* `鸿蒙next`平台，编译为ArkTS

uts和ts很相似，但为了跨端，uts进行了一些约束和特定平台的增补。详见 [uts语言介绍](./uts/README.md)

## 2. uvue渲染引擎

uts替代的是js，而uvue替代的就是html和css。或者如果你了解flutter的话，也可以理解为uts类似dart，而uvue类似flutter。

uvue是一套基于uts的、兼容vue语法的、跨平台的、原生渲染引擎。
- Android版于3.99上线
- Web版于4.0上线
- iOS版于4.11上线
- harmonyOS版于4.61上线

uvue渲染引擎包括uts版的vue框架（组件、数据绑定...）、跨平台基础ui、css引擎。

有了uvue，开发者就可以使用vue语法、css来快速编写页面，编译为不同平台的、高性能的纯原生界面。

一个uvue页面的例子：

> 示例没有涉及uts不允许的动态类型，也没有涉及uvue不支持的css，所以它实际上和uni-app js版的vue页面没有区别。

```html
<template>
	<view class="content">
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script>
	//这里只能写uts
	export default {
		data() {
			return {
				title: "Hello world"
			}
		},
		onLoad() {
			console.log('onLoad')
		},
		methods: {
			buttonClick: function () {
				uni.showModal({
					"showCancel": false,
					"content": "点了按钮"
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 750rpx;
		background-color: white;
	}
</style>

```

uvue支持的是vue3语法，支持组合式API和选项式API。详见[vue语法](./vue/README.md)

uvue在App端支持的css语法，是web的子集，类似于但优于nvue的css。仅支持flex布局，但也足以布局出需要的界面。详见[css语法](./css/README.md)

使用该css子集，可保证跨端。如果把uvue页面编译到web平台，则web的其他css也都可以使用。

更多示例代码参考：[hello uni-app x](https://gitcode.net/dcloud/hello-uni-app-x)

在过去的跨平台方案中，逻辑层和ui层的通信始终是痛点。

* 所以在`webview`渲染时，增加了renderjs、wxs等技术
* 所以在`nvue`渲染时，增加了bindingX技术
* 所以在`skyline`渲染时，增加了worklet技术

但这些补丁技术都不治根。过去只有flutter解决了dart和ui层的通信问题。可是这套方案又带来2个问题：
1. dart和原生层通信也还是有延时，对象传递需要序列化，造成性能问题；
2. 自渲染而不是原生渲染，无可避免会引发混合渲染，比如原生的信息流广告内嵌、原生输入法适配，造成内存高和输入障碍。

[详见评测](select.md)

所以一个好的UI层，仍然应该是原生渲染而不是自渲染。只不过需要解决逻辑层和原生（不管是原生UI还是原生能力）的通信问题。

其实不管是js还是dart，和原生都有通信桥，功能上没有限制，可以调用各种原生能力，但问题就出在Android上这个通信性能上不去。

既然通信性能不行，那就干脆不通信。

由于uts在Android上被编译为kotlin，它的逻辑层和UI层都是纯原生的，没有通信问题，所以它的性能真正达到了原生水平。因为本质上它就是换了vue写法的原生kotlin应用。

在iOS上，情况要复杂些。由于swift编译iOS应用必须依赖xcode，而DCloud的开发者中windows占比更高。且iOS上js和原生通信有解，所以uni-app x在iOS上提供js和swift双选逻辑层。

|								|js逻辑层																								|swift逻辑层														|
|--							|--																											|--																			|
|主应用开发平台	|windows或mac																						|只能mac																|
|uvue页面代码		|可使用js但不能直接调用swift API。swift调用需封装在uts插件中|只能调用swift不能使用js								|
|uts原生插件开发|只能mac																								|只能mac																|
|uts原生插件使用|windows下打包后使用，mac下本地直接编译									|windows下打包后使用，mac下本地直接编译	|
|性能						|丝滑流畅																								|丝滑流畅															|

也就是uts原生插件作者必须得有mac电脑，普通的App开发者可以没有mac电脑。

- js逻辑层已于4.11版上线
- swift逻辑层还未上线

虽然理论上swift逻辑层的性能要高于js逻辑层，但开发者可以放心使用js逻辑层。

uni-app x在iphone上的js逻辑层和原生渲染层的通信经过特殊处理，大幅提升通信效率问题，不再需要bindingX这类技术。也不存在flutter那种混合渲染问题。\
可以体验hello uni-app x的iOS版本，在slider-100、滚动时动态调整view的top值以维持吸顶等极端场景，均如Android一样的丝滑流畅。

使用js逻辑层除了能在windows下开发，还有一个好处是大幅降低插件生态的建设难度。
插件作者只需要特殊适配Android版本，在iOS和Web端仍使用ts/js库，即可快速把uni-app/web的生态迁移到uni-app x中。
例如这个[request拦截库](https://ext.dcloud.net.cn/plugin?id=16177)

## 3. uni的组件 @uni-components

uni-app x支持的组件包括：
- `内置基础组件`：如view、text、image、scroll-view、input...等，详见[组件清单](./component/README.md)
- `自定义vue组件`：使用内置组件和vue组件技术进行封装的组件，支持easycom。
- `uts组件插件`：用于原生sdk的ui以组件的方式嵌入。

> 除了微信小程序，其他端不支持小程序wxml组件。

更多组件介绍，[详见](./component/README.md)

## 4. API @uni-api

uni-app x支持的API包括：

1. uts的API [详见](./uts/buildin-object-api/global.md)
2. 全局API，前面不需要加`uni.`。如[getApp](./api/get-app.md)、[getCurrentPages](./api/get-current-pages.md)
3. uni.xxx的内置API。数量较多，[详见](./api/README.md)
4. uniCloud.xxx的内置API。[详见](./api/unicloud/README.md)
5. dom的API [详见](./dom/README.md)
6. 原生API

由于 uts 可以直接调用 Android 和 iOS 的 api，所以 OS 和三方sdk的能力都可以在uts中调用。如下：

```vue
<script>
	import Build from 'android.os.Build';
	export default {
		onLoad() {
			console.log(Build.MODEL); //调用原生对象，返回手机型号
			console.log(uni.getSystemInfoSync().deviceModel); //调用uni API，返回手机型号。与上一行返回值相同
		}
	}
</script>
```

::: info
上面的示例，在页面启动时打印了2行日志，显示手机型号。

- uni.getSystemInfoSync，是uni的api
- import的Build，是Android OS 的api
:::

在uni-app x里，可以直接调用 OS 的能力，不受限制，语法是uts的语法，但需要了解什么功能在原生里是哪个api。

使用`uni.getSystemInfoSync`则比较简单，看uni的文档即可，且可跨平台。

其实，[uni.getSystemInfoSync](https://gitcode.net/dcloud/uni-api/-/blob/master/uni_modules/uni-getSystemInfo/utssdk/app-android/index.uts) 的内部实现就是一个uts模块，底层使用了一样的代码，也是import了android.os.Build。

uni.的api，大多是uts开发的，它们会陆续开源在[uni-api](https://gitcode.net/dcloud/uni-api)。

插件市场也有很多做好的uts插件，方便开发者拿来即用。[uts插件](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)

uni-app js引擎版，支持 plus API 和 weex API。但 uni-app x 中，不再支持这些API。

## 5. 全局文件
- manifest.json [详见](./collocation/manifest.md)
- app.uvue [详见](./collocation/app.md)
- pages.json 不支持app-plus的内容。[详见](./collocation/pagesjson.md)
- uni.scss 正常支持。但注意app-uvue仅能使用[css子集](./css/README.md)

## 6. 插件生态

uni-app x编译到web、小程序、以及iOS的js逻辑层模式时，所有js库仍然可用。但在Android平台或iOS的swift逻辑层模式时，由于没有js引擎，所以无法使用js生态（除非使用web-view组件或自己集成一个js引擎）。

uni-app x App平台的插件生态来源于：
1. `原生生态`。比如上述示例代码中获取手机型号。以及各种原生sdk的直接调用。
2. `ts生态的迁移`。很多js库是ts编写的，如果没有使用uts不支持的语法，ts代码就可以使用。如果略有不同，也可以稍加改造ts以适配uts。

::: tip
uni-app x支持npm，但npm的大多数库是for web的，无法跨端，这些库只能在uni-app x编译为web时使用。当然如果有兼容uni-app x的全端库，可以使用，比如这些库[z-paging-x](https://www.npmjs.com/package/z-paging-x)、[lwu-css](https://www.npmjs.com/package/lwu-css)。

[uni插件市场](https://ext.dcloud.net.cn/)是跨端插件的聚集地，更推荐在这里找插件而不是去npm。插件市场有2种插件适用于uni-app x。
:::

1. uts插件（原生插件）

	uts插件封装原生能力，包括os能力或三方sdk。可以做API插件，也可以做组件插件。

	uts插件可同时在 uni-app js引擎版 和 uni-app x 的app平台上运行。

	uts插件分类直达：[https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate](https://ext.dcloud.net.cn/?cat1=8&type=UpdatedDate)

	之前uni-app js版的“App原生语言插件”，因依赖js引擎和weex，所以无法在 uni-app x 中运行。

2. 前端插件

	uvue组件、uts sdk、uni-app x前端页面/项目模板。这些前端代码仍然使用uni-app x的vue、uts、css来开发。

	在插件市场搜索框下方有uni-app x的checkbox，勾选可见到所有适配uni-app x的插件：[https://ext.dcloud.net.cn/?uni-appx=1](https://ext.dcloud.net.cn/?uni-appx=1)

	一般情况下，原生库的能力是大于js库的。不太可能有一个功能必须使用js库才能使用。比如md5，js有库，原生也有库，调用一个jar也很方便。

	常见的[加密、md5、sha](https://ext.dcloud.net.cn/search?q=%E5%8A%A0%E5%AF%86&orderBy=Relevance&cat1=8&cat2=81)、[dayjs](https://ext.dcloud.net.cn/search?q=dayjs&orderBy=Relevance&cat1=8&cat2=81)等库，插件市场已经有uts版本。

**如果你一定要使用某个js库，还有一个办法是在uni-app x里的[web-view](./api/create-webview-context.md)组件，让其运行js并返回值给uts代码。**

目前插件市场适配uni-app x的插件已有数千款，包括丰富的ui组件库生态：
- [TMUI4.0](https://ext.dcloud.net.cn/plugin?id=16369)：高品质UI库，插件大赛一等奖。
- [UxFrame](https://ext.dcloud.net.cn/plugin?id=16148)：setup组合式UI库，插件大赛一等奖。
- [lime-UI](https://ext.dcloud.net.cn/plugin?id=22372)：即兼容uni-app又兼容uni-app x。
- [TuiPlus ](https://ext.dcloud.net.cn/plugin?id=21111)：简洁高效的组件库，买即赠[xCharts原生图表库](https://ext.dcloud.net.cn/plugin?id=21107)
- [firstUI](https://ext.dcloud.net.cn/plugin?id=16294)：免费、轻量UI库
- [uXui](https://ext.dcloud.net.cn/plugin?id=15726)：graceUI作者的免费开源组件库
- [wx-ui](https://ext.dcloud.net.cn/plugin?id=15579)：基于uni-app x开发的高性能混合UI库
- [OneUI](https://ext.dcloud.net.cn/plugin?id=17104)：简洁、现代的 UI 组件
- [easyX电商组件库](https://ext.dcloud.net.cn/plugin?id=15602)：电商业务常见的各种组件库


## 路线图

除上述文档中声明已经完成的，还有如下需要注意：

- 平台支持：Android、Web、iOS版已发布。虽然uts语言支持swift，可以写原生插件，但uvue的iOS版目前只上线了js逻辑层，还未发布swift逻辑层。
- 小程序平台：4.41起支持微信小程序。其他小程序还在陆续适配中。
- 鸿蒙next平台：4.61起支持鸿蒙next。
- 目前不支持国际区账户，仅大陆区开发者账户可用。

::: info
欢迎去[需求墙](https://vote.dcloud.net.cn/#/?name=uni-app%20x)投票，告诉我们你的需求优先级。
:::

## 案例
[另见](./sample.md)

## 自动化测试
uni-app x 从源头重视产品质量，第一个版本就支持自动化测试。并为uni-app x产品编写了数十万行自动化测试例代码。

uni-app x 的自动化测试方案和 uni-app js版相同，自动化测试脚本使用js编写（注意不是uts）。整个自动化测试环境，运行在电脑端。

开发者可以为自己的app编写好自动化测试，以提升自己的产品质量。

uni-app 的自动化测试教程详见：[https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html](https://uniapp.dcloud.net.cn/worktile/auto/quick-start.html)

## 历史老项目兼容指南

### uni-app js版老项目迁移指南
1. 首先检查你的老项目里使用的uni组件、api、三方插件、三方库，在uni-app x上是否支持。尤其是深度使用的三方ui库，如果该库不支持uni-app x，请推进插件作者支持，否则就要承担换ui库的工作量。
2. 对于不支持的，需要自己写uni-app x的插件或去插件市场找替代兼容插件。如果写调用原生的uts代码，需要你了解原生的api。
3. 对于css，如果你之前使用nvue的css，那边迁移到uni-app x在样式上改动很小。如果之前是vue的css，那么需要改为flex布局，以及仅使用uvue支持的css来布局界面。
4. 对于script，如果你之前使用ts，那么改造成本会很低。如果使用js，那需要改造成uts，差别最大的就是补类型，没法再使用弱类型了。
5. 组件的写法基本没有差别，但组件的事件返回值也是强类型

uni-app x 比 uni-app 的变化主要是 js 变 uts，变成强类型了[详见](./uts/data-type.md)；css 变 ucss，只支持flex布局，不支持样式继承[详见](./css/README.md)。

由于uni-app x的web、iOS、小程序，仍然是兼容js的。所以也有一种渐进式方案，先把老项目的web、iOS、小程序版本迁移到x，这样只需要改css。后续再把js改成uts来兼容Android。

在Android上，你还可以把uni-app js版老项目作为uni-app x新项目的一个小程序来使用。在uni-app x里内嵌uni小程序sdk，详见：[uni-unimp](https://ext.dcloud.net.cn/plugin?id=17638)。


### 原生/rn/flutter页面兼容指南

之前已经有原生/rn/flutter页面，希望渐进式的迁移到uni-app x架构，该怎么搞？

uni-app x 毕竟是原生应用，内嵌flutter、rn这些没有任何问题，包括调用其他原生写的界面也可以。把之前的页面封装为[uts插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)，云打包就可以用。

插件市场已经有uts版本的[内嵌flutter插件](https://ext.dcloud.net.cn/search?q=flutter&orderBy=Relevance&cat1=8)、[内嵌compose ui插件](https://ext.dcloud.net.cn/search?q=compose+ui&orderBy=Relevance&cat1=8)

至于把 uni-app x 作为一个sdk内嵌到其他原生应用中，请参考[uni-app x原生SDK](native/README.md)。


## FAQ
- uni-app x 支持uvue页面和vue页面混写吗？\
  仅支持uvue页面。Android平台没有内置js引擎，不能运行vue页面。但历史vue页面可以通过 [uni小程序sdk](https://ext.dcloud.net.cn/plugin?id=17638) 嵌入到uni-app x中。

- uni-app x 的app端能离线打包吗？\
  可以。[详见](./native/README.md)

- uni-app x 的App能热更新吗？\
  Android和iOS开发期间可以热刷，但打包后不能热更新。\
  Android作为原生应用，可以使用[uni小程序sdk](https://ext.dcloud.net.cn/plugin?id=17638)，热更新小程序。当然开发者也可自行封装原生的插件动态加载方案。\
  iOS平台的js逻辑层模式，未来会推出wgt更新。

- uni-app x 能调用所有原生API吗？\
  可以。在app端，kotlin和swift能调用的，uts就能调。在浏览器端，所有js能调用的，uts也都能调。

- uni-app x 能集成原生sdk吗？\
  可以，通过uts插件，[https://uniapp.dcloud.net.cn/plugin/uts-plugin.html](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)

- uvue页面里的script可以直接调用原生代码吗？还是必须封装成uni_modules方式的uts原生插件？\
  uvue的script里写的就是uts，Android端可以直接调原生代码。无所谓它在`uni_modules`里还是外。但如果是大段的原生代码调用，还是推荐封装为独立的`uni_modules`。\
	iOS平台如果是js逻辑层模式，只能在独立`uni_modules`中才能调用原生。

- uni-app x 的开发只能用HBuilderX吗？\
  官方正在开发vscode、cursor插件。尽请期待。

- uni-app x 支持最低的Android版本多少？浏览器版本多少？\
  * Android App最低支持`Android 5`；
  * iOS版最低支持`iOS12`
  * harmonyOS版最低支持`API14`
  * Web版发行模式最低支持`chrome 64`、`safari 11.1`、`firefox 62`、`edge 79`、`safari on iOS 12`；
  * Web版运行模式最低支持`chrome 66`、`safari 11.1`、`firefox 62`、`edge 79`、`safari on iOS 12`；另外由于运行时不会对语法进行转化来兼容低版本浏览器，如果使用了一些比较新的语法可能会无法在低版本浏览器上运行。

- uni-app x开源吗？
  * Web版、小程序版开源地址：[https://github.com/dcloudio/uni-app](https://github.com/dcloudio/uni-app)
  * App版的组件和API实现大都开源，持续更新在项目[uni-api](https://gitcode.net/dcloud/uni-api)和[uni-component](https://gitcode.net/dcloud/uni-component)下。\
  开发者可以了解组件和API的实现，直接修改或优化源码，修改后的代码以[ext api](https://uniapp.dcloud.net.cn/api/extapi.html)或组件的方式下载到项目中，即可实现在本项目中替换掉官方组件和API。

- 未来 uni-app js引擎版还维护吗？\
  维护。服务js开发者仍然是DCloud的重点。但nvue和5+将不再维护。不再维护不是下线，而是没有重大问题的话（如新手机不兼容）不会再更新了。

  如果开发小程序和Web，那使用哪个都差不多。

  如果开发App，那uni-app面向的是对体验不敏感，只了解web技术，对开发成本更敏感的前端开发者。而uni-app x则适用于愿意多付出一些开发成本、以追求更好体验的开发者。当然这个多付出的开发成本也远低于原生开发各端的成本。

  不管uni-app还是uni-app x，都支持uts插件生态，原生扩展api和插件是复用的。

  包括官方的组件和API也是复用的，比如电量API [uni.getbatteryinfo](https://ext.dcloud.net.cn/plugin?id=9295)，和[lottie组件](https://ext.dcloud.net.cn/plugin?id=10674)，它们使用uts开发，在 uni-app和uni-app x上，调用的都是一套代码。
所以不必担心官方精力不足，顾此失彼。

::: tip 加群交流
欢迎加入 uni-app x 专用群交流
- [uni-im群](https://im.dcloud.net.cn/#/?joinGroup=6582a367058a46652e0deda9)
:::
