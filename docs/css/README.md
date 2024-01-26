# uvue css使用

uni-app x 在 app平台实现了 web css的子集。

这个子集有时也被称为ucss，但工程文件仍然是css、less、scss等后缀，style节点的lang属性也没有特殊之处。

子集并不影响开发者开发出所需的界面，仅是写法上没有那么丰富。

App端与web常见的区别是：
1. 仅支持flex布局
2. 选择器只能用class，不能用tag、#id、[attr]等选择器
3. 样式不继承，即父元素样式不影响子元素

但以上仅是常见的区别，并非所有，需开发者继续阅读全文。

当uni-app x编译到web、小程序等平台时，可以支持web的全部css。同时，编译器会进行css重置，保证ucss这个子集在各端效果的一致性。

## 页面布局

uni-app x 使用flex布局。这是一种清晰易用、全平台支持的布局。不管web、Android、iOS、微信skyline、快应用，均支持flex布局。

页面布局有2个注意事项，flex方向和页面级滚动。

### flex方向

在web中，flex默认是横向的，但app默认是纵向的。为了多端兼容，建议开发者显式声明flex方向，不使用默认值。

```html
<view style="flex-direction:row">
	<!-- 这里的组件们都是横排 -->
</view>
<view style="flex-direction:column">
	<!-- 这里的组件们都是竖排 -->
</view>
```

一般在`app.uvue`的style里编写全局样式，在页面里使用class引用更为方便。
```html
<style>
.uni-row{
	flex-direction: row;
}
.uni-column{
	flex-direction: column;
}
</style>
```

```html
<template>
	<scroll-view class="uni-column" style="flex:1">
		<view class="uni-row">
			<text>左</text>
			<text>右</text>
			<!-- 2个text组件横排 -->
		</view>
		<view class="uni-column">
			<text>上</text>
			<text>下</text>
			<!-- 2个text组件竖排 -->
		</view>
	</scroll-view>
</template>
```

其实flex布局概念非常简单清晰。解释下上面的代码。

1. 页面根节点是一个竖排的（class="uni-column"）、全屏的（style="flex:1"）scroll-view，那么它的子view们就是竖排。
2. 二级view里的第一个view，设为横排，里面又放了2个三级组件text，那么这2个三级组件text是横排，即左右2个字。

想清楚页面布局，设好row还是column，界面写起来很快。

### 页面级滚动@pagescroll

web开发中，页面是必然可以滚动的。当然也可以给某些div设局部滚动。

而原生开发中，页面不能滚动。如果你需要某个地方滚动，那么要在相应位置放scroll-view或list-view等可滚动组件，在这些组件内部滚动。

如果你想要整页滚动，那么可以在页面最外层套一个scroll-view，看起来就和web开发的页面滚动一样了。

在老版nvue中，如果开发者顶层不是scroll-view，编译器会自动在外面套一层scroll-view，来变相实现页面滚动。
但在uvue中，废弃了这个策略。因为开发者的页面情况较复杂，而且vue3支持多个一级组件，之前的策略可能会多给页面套一层不必要的scroll-view。
在追求高性能时，多一层scroll-view是不能忍受的。

uvue的策略是：在新建页面时，提供一个选项，让开发者选择是否需要页面级滚动。如需要则自动在页面代码里template的根节点加一个全屏的scroll-view。
如果开发者不需要，随时可以自己修改代码。

```html
<template>
	<!-- #ifdef APP -->
	<scroll-view style="flex:1">
	<!-- #endif -->

	<!-- #ifdef APP -->
	</scroll-view>
	<!-- #endif -->
</template>
```

因为web平台和基于webview的小程序使用页面滚动更方便，所以自动套在页面顶层的scroll-view写在了[条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html)里。

这样在web浏览器里就无需多套一层scroll-view，自然的使用浏览器的页面滚动就好了。

尤其在Android webview中，scroll-view其实是可区域滚动的div，滚动区变长后，性能远不如页面滚动。

当然如果你只做app，可以不写条件编译。

上述代码中给scroll-view的style设为`flex:1`，意思是铺满剩余空间。设在顶层节点上，意味着铺满屏幕。

当然，如果页面的pages.json里配置使用了原生导航栏，那么页面区整体是在导航栏下面。

- 自定义导航栏

如果开发者想要自定义导航栏，首先在pages.json里对应页面的style里设置`"navigationStyle": "custom"`，关闭原生导航栏。
然后编写自定义的导航栏组件[\<uni-navbar-lite>](https://ext.dcloud.net.cn/plugin?id=14618)，那么推荐的页面代码结构为：

```html
<template>
	<uni-navbar-lite title="自定义导航栏标题">
	</uni-navbar-lite>
	<!-- #ifdef APP -->
	<scroll-view style="flex:1">
	<!-- #endif -->

	<!-- #ifdef APP -->
	</scroll-view>
	<!-- #endif -->
</template>
```

> 注：这里的“原生导航栏”是一个历史沿袭叫法，指配置在pages.json里的导航栏，不属于页面代码区。事实上在uni-app x里所有界面都是原生的。

- 页面滚动相关的生命周期、api

在uni-app的规范中，页面滚动有一批相关的生命周期、api，比如：`onPageScroll`、`onReachBottom`、`uni.pageScrollTo()`

在app端，会判断页面根节点是否为scroll-view（不认list-view等其他滚动容器）。

	* 如果是，页面滚动相关的生命周期和API继续生效，效果如前。

	* 如果不是scroll-view，全部失效。

如果根节点使用了list-view，它也有自己的滚动相关的API和监听事件。详见[list-view](../component/list-view.md)的文档。

## 样式不继承@stylenoextends

web的样式继承，主要是文字样式继承。web的css属性众多，规范比较松散，随便一个div都可以写文字相关的样式。这样其实不严谨、性能也不好。

在原生等严谨的应用开发方案中，均是组件搭配该组件的专有属性。容器组件和文本组件分离，属性各自隔离，不可能在容器组件里写文本组件的样式。

在uni-app x中也是，文本必须使用`<text>`组件，`<view>`组件就是容器组件，它的style里不应用使用与文本修饰相关的样式，比如文字颜色、大小等。

如下代码，在web浏览器渲染时，父view的style会影响子text，所以123是红色。

但是在app-uvue中，样式不继承，123的颜色仍然是默认颜色黑色。
```html
<template>
	<view style="color:red">
		<text>123</text>
	</view>
</template>
```

在app-uvue中，如需修改123的样式，需写在text组件中
```html
<template>
	<view>
		<text style="color:red">123</text>
	</view>
</template>
```

uvue中文字都是要使用text组件的。

虽然把文字直接写在view的text区也能运行，其实是因为编译器自动套了一层text组件。
```html
<template>
	<view>123</view>
</template>
```

上述代码，在编译后其实变成了：
```html
<template>
	<view>
		<text>123</text>
	</view>
</template>
```

那么，就意味着直接写在view的text区，虽然可以用，但将无法修改文字的样式。因为被自动套一层的text组件上没有任何样式。

也就是下面的代码是不能改变文字颜色的。
```html
<template>
	<view style="color:red">123</view> <!-- 文字颜色不会变，因为被套了一层text组件后，父view的样式并不能被新套的text组件继承-->
</template>
```

app-uvue的css的样式不继承规则，虽然与web有差异，其实只是更严谨。

一般情况下，开发者遵循仅在text组件下写文字有关的样式，就可以编译到全端而保持界面正常。

## 层级

App仅对同层的兄弟节点之间支持z-index来调节层级。不支持脱离dom树任意调节层级。

## css模块

|模块				|App支持情况	|备注									|
|:-:				|:-:		|:-:									|
|背景与边框			|√			|不支持背景图							|
|盒子模型			|√			|										|
|Flex 布局			|√			|										|
|Inline 布局			|×			|										|
|Inline-Block 布局	|×			|										|
|Block 布局			|×			|										|
|字体				|√			|支持ttf、otf，不支持woff和woff2和可变字体	|
|Positioned 布局		|√			|										|
|CSS Animation		|x			|										|
|CSS Transition		|√			|										|
|CSS Variable		|×			|										|
|媒体查询			|×			|										|

字体图标[详见](font-family.md)

## 选择器 @selector

<!-- CSSJSON.selector_values.compatibility -->

注意，选择器声明的变化可能会导致元素重新绘制。为了减少选择器变化引起的 DOM 更新数量，**当前只支持：CSS 声明的多个选择器中最后一个规则的变更对 DOM 的更新**。

```ts
<template>
  <div class="{{docBody}}">
    <text class="{{rowDesc}}">描述内容</text>
  </div>
</template>

<style>
  .doc-body1 .row-desc1 {
    color: #ff0000;
  }
  .doc-body1 .row-desc2 {
    color: #0000ff;
  }
  .doc-body2 .row-desc1 {
    color: #00ff00;
  }
</style>

<script lang="uts">
  export default {
    data() {
      return {
        rowDesc: 'row-desc1',
        docBody: 'doc-body1'
      }
    }
  }
</script>
```

以上代码示例，当我们把 `rowDesc` 变量从 `row-desc1` 变为 `row-desc2` 时，会更新 `text` 节点样式，但是如果把 `docBody` 变量从 `doc-body1` 变为 `doc-body2`，是不会更新 `text` 节点样式的。\
因为 `doc-body` 不是最后一个选择器，非末尾的选择器变更有可能影响很多 DOM 元素，从而影响到渲染性能。

## 长度单位 @length

- 长度 `<length>` 用于表示距离尺寸的 CSS 数据类型。许多 CSS 属性会用到长度，比如 width、margin、padding。
- 长度 `<percentage>` 表述一个百分比值。许多 CSS 属性 可以取百分比值，用以根据父对象来确定大小。百分比值由一个`<number>`具体数值后跟着%符号构成。就像其他在 css 里的单位一样，在%和数值之间是不允许有空格的。

<!-- CSSJSON.length_values.compatibility -->

rpx是一个以设备750px为基准的单位，750rpx即为屏幕宽度，375rpx即为屏幕一半宽度。它比较适合适配不同宽度的手机。但rpx的性能和精度不如px，如果px可满足需求，尽量使用px。

**注意**
- 长度默认值差异
	* App平台长度 `<length>` 可以不设置单位，不设置单位时当做 px 处理
	* Web平台长度 `<length>` 必须设置单位，不设置单位时当做无效值处理
	实际项目中为了更好的在各端兼容，推荐使用长度 `<length>` 时指定明确单位

- 单位精度问题
px、rpx属于逻辑像素，在不同dpi的设备上，需要转换为物理像素。当产生浮点数时，由于精度保留策略的不同，在web和app可能造成细微的误差。

尤其是浏览器对于小数点的px兼容不够好，比如0.5px很难正常显示。

rpx和百分比，比px更容易产生浮点数，所以如果px能满足需求，尽量不用rpx和百分比。


## 颜色 @color

<!-- CSSJSON.color_values.compatibility -->

## css方法 @css-function

目前仅支持url()、rgb()、rgba()、var()。

## CSS 变量（4.0+）@variable

uni-app x 4.0起 提供内置 CSS 变量。之前版本如有获取状态栏高度等需求可使用[uni.getWindowInfo()](../api/get-window-info.md)方式获取。

| CSS 变量| 描述| App| H5|
| :- | :- | :- | :- | :- |
| --status-bar-height | 系统状态栏高度| [系统状态栏高度](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getStatusbarHeight)| 0|
| --window-top| 内容区域距离顶部的距离 | 0| NavigationBar 的高度 |
| --window-bottom| 内容区域距离底部的距离 | 0| TabBar 的高度|

**注意：**

- 当设置 `"navigationStyle":"custom"` 取消原生导航栏后，由于窗体为沉浸式，占据了状态栏位置。此时可以使用一个高度为 `var(--status-bar-height)` 的 view 放在页面顶部，避免页面内容出现在状态栏。
- 在 Web 端，由于不存在原生导航栏和 tabBar（是前端 div 模拟的），如果设置了一个固定位置的居底 view，在小程序和 App 端是在 tabBar 上方，但在 H5 端会与 tabBar 重叠。此时可使用`--window-bottom`，不管在哪个端，都是固定在 tabBar 上方。

**代码块**

快速书写 css 变量的方法是：在 css 中敲 hei，在候选助手中即可看到 3 个 css 变量。

示例：

```html
<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view>状态栏下的文字</view>
	</view>
</template>
<style>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
```

```html
<template>
	<view>
		<view class="toTop">
			<!-- 这里可以放一个向上箭头，它距离底部tabBar上浮10px-->
		</view>
	</view>
</template>
<style>
	.toTop {
		bottom: calc(var(--window-bottom) + 10px);
	}
</style>
```

## At-rules

<!-- CSSJSON.at_rules_values.compatibility -->

@font-face自定义字体示例：
```html
<style>
@font-face {
    font-family: AlimamaDaoLiTiOTF;
    src: url('/static/font/AlimamaDaoLiTi.otf');
}
</style>
```

Tips：
- 字体路径支持网络和本地，本地字体请注意放在项目或uni_modules的static目录下。

<!-- CSSJSON.readmeTable.name -->

<!-- CSSJSON.readmeTable.compatibility -->

## 样式作用范围

在 `uni-app x` 中，不支持 `css scoped`，样式的作用范围遵循以下规则：

* `App.uvue` 中的样式作用于全局。
* 页面的样式作用于当前页面及其子组件。
* 组件的样式仅作用于当前组件。

## 页面滚动引起的差异

`uni-app-x` App端无页面滚动，且其根节点高度为从导航栏底部到tabBar顶部。如果在页面根节点的子元素使用`position: absolute;`，页面内部scroll-view滚动时不会改变此元素位置。其他端有页面滚动，如果在页面根节点的子元素使用`position: absolute;`页面滚动会改变此元素的位置。如果有不随页面滚动变化位置的需求建议使用`position: fixed`。注意web端需要使用[css变量](#variable)使元素不覆盖在navigationBar和tabBar上。

## Bug

css相关bug[详见](https://issues.dcloud.net.cn/?mid=css)
