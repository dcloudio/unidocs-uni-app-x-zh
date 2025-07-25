<!-- ## scroll-view -->

<!-- UTSCOMJSON.scroll-view.name -->

<!-- UTSCOMJSON.scroll-view.description -->

<!-- UTSCOMJSON.scroll-view.compatibility -->

<!-- UTSCOMJSON.scroll-view.attribute -->

<!-- UTSCOMJSON.scroll-view.event -->

<!-- UTSCOMJSON.scroll-view.component_type-->

### 自定义下拉刷新样式

1. 设置`refresher-default-style`属性为 none 不使用默认样式
2. 自定义下拉刷新元素必须要声明为 slot="refresher"，需要设置刷新元素宽高信息否则可能无法正常显示！
3. 通过组件提供的refresherpulling、refresherrefresh、refresherrestore、refresherabort下拉刷新事件调整自定义下拉刷新元素！实现预期效果

**注意：** 目前自定义下拉刷新元素不支持放在scroll-view的首个子元素位置上。可能无法正常显示

```vue
<scroll-view refresher-default-style="none" :refresher-enabled="true" :refresher-triggered="refresherTriggered"
			 @refresherpulling="onRefresherpulling" @refresherrefresh="onRefresherrefresh"
			 @refresherrestore="onRefresherrestore" style="flex:1" >

		<view v-for="i in 20" class="content-item">
			<text class="text">item-{{i}}</text>
		</view>

		<!-- 自定义下拉刷新元素 -->
		<view slot="refresher" class="refresh-box">
			<text class="tip-text">{{text[state]}}</text>
		</view>

</scroll-view>
```

**具体代码请参考：**[自定义下拉刷新样式示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/component/scroll-view/scroll-view-custom-refresher-props.uvue)

### 嵌套模式@nested-scroll-view

当存在两个 scroll-view 相互嵌套的场景时，两者滚动存在冲突不能很丝滑的进行衔接，可将外层 scroll-view 改成嵌套模式，这样可以让两个 scroll-view 的滚动衔接起来。

```html
<scroll-view style="flex:1" type="nested">
	<nested-scroll-header>
		<view style="height: 200px;background-color: #66ccff;align-items: center;justify-content: center;">
			<text>nested-scroll-header</text>
		</view>
	</nested-scroll-header>
	<nested-scroll-body>
		<view style="flex:1">
			<scroll-view style="flex:1" associative-container="nested-scroll-view">
				<view v-for="index in 20" style="background-color: aliceblue; height: 80px;justify-content: center;">
					<text style="color: black;">{{index}}</text>
				</view>
			</scroll-view>
		</view>
	</nested-scroll-body>
</scroll-view>
```

**开启嵌套模式设置如下：**

1. 设置外层 scroll-view 的 type 属性为 "nested" ，将外层 scroll-view 改成嵌套模式
2. 设置内层 scroll-view 的 `associative-container` 属性为 "nested-scroll-view"，开启内层 scroll-view 支持与外层 scroll-view 嵌套滚动

**嵌套滚动策略：**

当向下滚动（手指向上滑动）时，先滚动外层 scroll-view 再滚动内层 scroll-view；当向上滚动（手指向下滑动）时，先滚动内层 scroll-view 再滚动外层 scroll-view

**注意事项：**
+ 4.11版本开始支持嵌套模式
+ 外层 scroll-view 的子节点只支持`nested-scroll-header`和`nested-scroll-body`和自定义 refresher
+ 外层 scroll-view 的子节点中只能有一个 `nested-scroll-body`
+ `nested-scroll-header` 和 `nested-scroll-body` 只能有一个子节点
+ `nested-scroll-header` 只能渲染在 `nested-scroll-body` 上面
+ 与nested-scroll嵌套滚动协商互不兼容，`nested-scroll-header` 和 `nested-scroll-body`优先级高于nested-scroll嵌套滚动协商
+ 内层滚动视图支持 scroll-view、list-view、waterflow

**具体代码请参考：**[嵌套模式示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/long-list-nested/long-list-nested.uvue)

### nested-scroll嵌套滚动协商@nested

嵌套滚动是原生才有的概念，web没有。

它是指父子2个滚动容器嵌套，在滚动时可以互相协商，控制父容器怎么滚、子容器怎么滚。

1. 通过在子滚动容器设置`custom-nested-scroll = true`，开启与父组件实现嵌套滚动协商。仅list-view、waterflow、scroll-view组件支持与父组件嵌套滚动协商。

下面的示例代码，在一个scroll-view中嵌套了一个list-view。在list-view上设置了custom-nested-scroll="true"。

```html
<scroll-view style="height: 100%;" scroll-y="true" rebound ="false" nested-scroll-child="listview" @startnestedscroll="onStartNestedScroll" @nestedprescroll="onNestedPreScroll"
	@stopnestedscroll="onStopNestedScroll">
		...
		<view style="height: 100px;">停靠视图</view>
		<list-view id="listview"  class="child-scroll" scroll-y="true" custom-nested-scroll="true">
			...
		</list-view>
</scroll-view>
```

2. 子组件准备滚动时会触发父组件的`startnestedscroll`事件。父组件响应`startnestedscroll`事件return true则表示与子组件建立嵌套滚动协商。
```ts
onStartNestedScroll(event: StartNestedScrollEvent): Boolean {
	//开启与子组件建立嵌套滚动协商
	return true
}
```
3. 当建立嵌套滚动协商后，子组件滚动时父组件会持续收到`nestedprescroll`事件，这个事件的含义是嵌套滚动即将发生。
事件中会返回NestedPreScrollEvent子组件将要滚动的数据。
4. 父组件执行NestedPreScrollEvent.consumed(x,y)函数，告知子组件本次`nestedprescroll`事件deltaX、deltaY各消耗多少，即父组件要消费掉多少滚动距离。
子组件将执行差值后的deltaX、deltaY滚动距离，也就是剩余的滚动余量留给子组件。
```ts
onNestedPreScroll(event: NestedPreScrollEvent) {
	var deltaY = event.deltaY
	var deltaX = event.deltaX
	...
	if() {
		//告知子组件deltaX、deltaY各消耗多少
		event.consumed(x, y)
	}
}
```
5. 父组件配置`nested-scroll-child`后，父组件惯性滚动时会让`nested-scroll-child`配置的子元素进行滚动。从而触发`nestedprescroll`协商处理滚动事件
6. 滚动行为停止后会触发`stopnestedscroll`事件

**注意：**
+ 仅Android平台支持嵌套滚动协商
+ 嵌套滚动协商仅支持竖向滚动，横向滚动不支持
+ nested-scroll-child设置的元素必须配置custom-nested-scroll = true，否则配置无效
+ 与`nested-scroll-header` 和 `nested-scroll-body`不兼容，scroll-view 设置嵌套模式后，嵌套滚动手势协商相关事件将不会触发

**具体代码请参考：**[nested-scroll嵌套滚动示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/long-list/long-list.uvue)

#### App平台

+ App-Android、App-iOS平台scroll-x、scroll-y属性不支持同时设置为true, 同时设置true时仅scroll-y生效，4.0版本开始scroll-x、scroll-y已废弃，请使用direction属性。
如需同时水平和垂直滚动，可以套2层，一个横一个竖，来实现2个方向能滚动。
+ App平台scroll-view组件不支持动态切换横竖滚动方向
+ App平台scroll-view组件的overflow属性不支持配置visible
+ App平台scroll-view组件默认高度取值：
	- scroll-view组件的子元素高度之和未超过scroll-view组件的父元素高度：
		+ scroll-view组件的默认高度取值为子元素高度之和
	- scroll-view组件的子元素高度之和超过scroll-view组件的父元素高度：
		+ 3.9版本scroll-view组件默认高度取值为scroll-view组件父元素的高度。子元素高度之和超过scroll-view组件的高度，scroll-view组件可滚动。
		+ 4.0版本开始scroll-view组件的默认高度取值为子元素高度之和。高度相同scroll-view组件无法滚动。开发者需要设置css属性定义scroll-view组件高度，让scroll-view组件高度小于子元素高度之和，实现滚动能力。

<!-- UTSCOMJSON.scroll-view.children -->

<!-- UTSCOMJSON.scroll-view.example -->

<!-- UTSCOMJSON.scroll-view.reference -->
