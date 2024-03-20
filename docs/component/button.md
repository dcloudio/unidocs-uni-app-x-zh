## button

<!-- UTSCOMJSON.button.description -->

<!-- UTSCOMJSON.button.attribute -->

<!-- UTSCOMJSON.button.event -->

<!-- UTSCOMJSON.button.compatibility -->

- 在web平台，由于0.5px有兼容性问题，button的边框使用伪类实现。
- 在app平台，HBuilderX4.02及以上版本调整为原生实现button组件，默认边框不占高度，解决button实际渲染宽高与Web端不一致的问题；HBuilderX4.01及以下版本封装text实现button组件，由于不支持伪类，默认边框使用 border 样式实现，会导致button的实际的渲染宽高在app端比web端多1px。
- button的默认边框宽度为0.5px，当type属性为plain时，边框宽度是1px，此时在web平台button实际的渲染宽高会大于其他类型1px，在app平台button实际的渲染高度与其他类型一致。
- button 的text区域文字，app平台HBuilderX4.02及以上版本支持 `\n` 方式换行，HBuilderX4.01及以下版本不支持 ，会直接显示 `\n` 字符；Web端 `\n` 会变成一个空格。
- button按下后触发hover-class效果，在app平台，手指不松开、一直在屏幕上移动、离开button组件范围后，hover-class效果消失，同时也不会触发点击事件；在web平台，手指移动一点后，即便未离开button范围，hover-class效果也会消失，同时也不会触发点击事件。
- 无论在哪个平台，hover-class消失后松开手指，都不会触发点击事件。
- button 设置hover-class属性时需注意，app平台HBuilderX4.04及以下版本与web平台有差异，HBuilderX4.05版本统一为以下规则：  
    + 如果hover-class属性值设置为none，在style样式里面设置了同名的none样式，none样式将不起作用，没有点击态效果  
	+ 如果hover-class属性值设置为button-hover或者不设置hover-class属性值，在style样式里面设置了同名的button-hover样式，点击效果将使用button-hover样式  
	+ 如果hover-class属性值设置为无效值（或非法值），没有点击态效果  

<!-- UTSCOMJSON.button.children -->

<!-- UTSCOMJSON.button.example -->

<!-- UTSCOMJSON.button.reference -->

## hover-class 属性值

## button样式修改@style

button在元素的text区域直接写文字，和text组件一样。可以这么理解，button是一个特殊的text组件，文字样式可以直接写在button组件的style或class上。

button组件属性中的size和type，属于预置样式，方便开发者使用。开发者也可以通过style和class来自定义样式。

button虽然可以内嵌text组件，但不建议通过text组件来修改button样式，因为会导致hove-class不生效。尤其是uvue中样式不继承。建议button组件text区域直接写文字，然后在button组件的style或class属性编写样式。

style和class的优先级，高于size和type属性。

```html
<template>
	<button size="default" type="default"
	style="color:#ffffff;backgroundColor:#1AAD19;borderColor:#1AAD19"
	hover-class="is-hover">按钮</button>
</template>
<style>
.is-hover {
	color: rgba(255, 255, 255, 0.6);
	background-color: #179b16;
	border-color: #179b16;
  }
</style>
```

## button点击

button 组件的点击遵循 vue 标准的 @click事件。

button 组件没有 url 属性，如果要跳转页面，可以在@click中编写，也可以在button组件外面套一层 navigator 组件。举例，如需跳转到about页面，可按如下几种代码写法执行：

```html
<template>
	<view>
		<navigator url="/pages/about/about"><button>通过navigator组件跳转到about页面</button></navigator>
		<button @click="goto('/pages/about/about')">通过方法跳转到about页面</button>
	</view>
</template>
<script>
	export default {
		methods: {
			goto(url:string) {
				uni.navigateTo({
					url:url
				})
			}
		}
	}
</script>
```

## tips
- button 的默认文字大小为18px，文字行高为2.5。如果指定了按钮高度，要注意手动调整文字行高
