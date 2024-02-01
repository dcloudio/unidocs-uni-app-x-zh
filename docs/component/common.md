# 组件的公共属性和事件

每个组件都有属性和事件。有些属性和事件，是所有组件都支持的。

::: info 调整

1. uni-app x 4.0+ ，组件事件类型的名称增加 Uni 前缀，避免与浏览器全局事件冲突
2. 非 Uni 开头的事件类型名称被标记为废弃，功能不受影响。
3. 如您使用uni-app x 4.0以下版本，仍需去掉 Uni 前缀

变更示例
```html
<template>
  <slider @change="sliderChange" />
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      // 变更之前类型为 SliderChangeEvent
      // sliderChange(e : SliderChangeEvent) {
      // }

      // 变更之后类型为 UniSliderChangeEvent
      sliderChange(e : UniSliderChangeEvent) {
      }
    }
  }
</script>
```
:::


## 组件公共属性

|属性名|类型|描述|注解|
|:-|:-|:-|:-|
|id|String|组件的唯一标识|一般用于获取组件上下文对象|
|ref|String|vue中组件的唯一标识|用来给子组件注册引用信息|
|class|String|组件的样式类|在对应的 css 中定义的样式类|
|style|String|组件的内联样式|可以动态设置的内联样式|
|data-*|Any|自定义属性|组件上触发的事件时，会发送给事件处理函数|
|android-*|Any|App-Android平台专有属性|详见[App-Android平台专有属性](#attribute-android)章节|

### App-Android平台专有属性@attribute-android  

android-开头的属性名称为App-Android平台专有属性  

#### android-layer-type
App-Android平台设置组件视图渲染模型，字符串类型，可取值：
- "hardware": 视图在硬件中渲染为硬件纹理  
- "software": 视图在软件中渲染为位图  
- "none": 视图正常渲染，不使用缓冲区  
默认值为"none"。

注意：
- HBuilderX4.01新增支持  
- 不支持动态修改此属性  

更多信息可参考Android官方文档[硬件加速](https://developer.android.google.cn/topic/performance/hardware-accel?hl=zh-cn)。

<!-- CUSTOMTYPEJSON.Unigeneral-attribute.example -->

## 组件公共事件

- @touchstart
- @touchmove
- @touchend
- @touchcancel
- @tap
- @click //与tap等价
- @longpress
- @transitionend

在多点触摸的屏幕上，touch事件返回数组，包含了每个touch点对应的x、y坐标。

### tap/click 事件@tap

#### App端
- HBuilderX4.0及以下版本手指按下后移动会取消tap/click事件的触发，即手指移动后抬起不会响应tap/click事件
- HBuilder4.0及以上版本App端调整手指按下后在组件区域内移动不会取消tap/click事件的触发，移动到组件区域外才会取消tap/click事件的触发

#### Web端
手指按下后移动会取消tap/click事件的触发，即手指移动后抬起不会响应tap/click事件


### transition 事件

- @transitionend

	transition 效果结束时触发

	#### 兼容性

	安卓 3.93+ 版本开始支持

```vue
<template>
  <image class="transition-transform" id="transition-transform" @transitionend="onEnd" src="/static/uni.png"></image>
</template>
<script>
  export default {
    data() {
      return {}
    },
    onReady() {
      var element = uni.getElementById('transition-transform')
      element!.style.setProperty('transform', 'rotate(360deg)')
    },
    methods: {
      onEnd() {
        console.log("transition效果结束")
      }
    }
  }
</script>

<style>
  .transition-transform {
    transition-duration: 2000;
    transition-property: transform;
    transform: rotate(0deg);
  }
</style>
```

### 冒泡事件系统

DOM事件主要有三个阶段：捕获阶段、目标阶段和冒泡阶段。

以点击事件为例，当触发点击时，
1. 首先从根节点逐级向下分发，直到监听点击事件的节点为止（捕获阶段）；
2. 然后事件到达当前节点并触发点击事件（目标阶段）；
3. 接着继续向上逐级触发父节点的点击事件，直到根节点为止（冒泡阶段）。

注意，虽然有3个阶段，但第2个阶段（“目标阶段”：事件到达了元素）并没有单独处理：捕获和冒泡阶段的处理程序都会在该阶段触发。

我们一般使用默认的事件注册机制，将事件注册到冒泡阶段，相对来说，大多数处理情况都在冒泡阶段。

uvue 目前暂不支持事件的捕获阶段。

#### 阻止冒泡

在事件回调中，可以通过调用`event.stopPropagation`方法阻止事件冒泡。

```ts
handleClick (event : MouseEvent) {
    // 阻止继续冒泡.
    event.stopPropagation();
}
```

#### 阻止默认行为

在事件回调中，可以通过调用`event.preventDefault`方法阻止默认行为。`event.preventDefault`仅处理默认行为，事件冒泡不会被阻止。

```vue
<template>
	<scroll-view style="flex: 1;">
		<view style="width: 750rpx;height: 1750rpx;background-color: bisque;">
			滑动框中区域修改进度并阻止滚动，滑动其余空白区域触发滚动
			<view style="width: 750rpx;height: 40rpx; margin-top: 100rpx;border:5rpx;" @touchmove="slider">
				<view ref="view1" style="background-color: chocolate;width: 0rpx;height: 30rpx;"></view>
			</view>
		</view>
	</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				$view1Element: null as UniElement | null
			}
		},
    onReady() {
      this.$view1Element = this.$refs['view1'] as UniElement
    },
		methods: {
			slider(e : TouchEvent) {
				e.preventDefault() // 阻止外层scroll-view滚动行为
				this.$view1Element!.style?.setProperty('width', e.touches[0].screenX);
			}
		}
	}
</script>
```

### Bug & Tips

连续触发`click`或`tap`事件，可能会出现事件丢失的情况。

## UniEvent

<!-- CUSTOMTYPEJSON.UniEvent.description -->

<!-- CUSTOMTYPEJSON.UniEvent.extends -->

<!-- CUSTOMTYPEJSON.UniEvent.param -->



### UniEvent 方法 @event-methods
<!-- CUSTOMTYPEJSON.UniEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.UniEvent.methods.preventDefault.tutorial -->

## UniCustomEvent

<!-- CUSTOMTYPEJSON.UniCustomEvent.description -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.extends -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.param -->



### UniCustomEvent 方法 @customevent-methods
<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.methods.preventDefault.tutorial -->

## UniPointerEvent

<!-- CUSTOMTYPEJSON.UniPointerEvent.description -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.extends -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.param -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.example -->

### UniPointerEvent 的方法 @unipointerevent-methods
<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.methods.preventDefault.tutorial -->

## UniTouchEvent

<!-- CUSTOMTYPEJSON.UniTouchEvent.description -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.extends -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.param -->

UniTouchEvent 的 type 类型包括：touchstart、touchmove、touchend、touchcancel、longpress。

### UniTouchEvent 方法 @touchevent-methods
<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.methods.preventDefault.tutorial -->

## UniTouch

<!-- CUSTOMTYPEJSON.UniTouch.description -->

<!-- CUSTOMTYPEJSON.UniTouch.extends -->

<!-- CUSTOMTYPEJSON.UniTouch.param -->

<!-- CUSTOMTYPEJSON.Unigeneral-event.example -->

## 参见

- [相关 Bug](https://issues.dcloud.net.cn/?mid=component.common)

