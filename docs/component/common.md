# 组件的全局属性和事件

每个组件都有属性和事件。有些属性和事件，是所有组件都支持的。

## 组件全局属性

<!-- CUSTOMTYPEJSON.general-attribute.attribute -->

<!-- CUSTOMTYPEJSON.general-attribute.compatibility -->

### App-Android平台专有属性@attribute-android

> android-开头的属性名称为App-Android平台专有属性

#### android-layer-type <Badge text="HBuilderX 4.01+"/>

> 不支持动态修改此属性
>
> 更多信息可参考Android官方文档[硬件加速](https://developer.android.google.cn/topic/performance/hardware-accel?hl=zh-cn)。

App-Android平台设置组件视图渲染模型，字符串类型，可取值：
- "hardware": 视图在硬件中渲染为硬件纹理
- "software": 视图在软件中渲染为位图
- "none": 视图正常渲染，不使用缓冲区
默认值为"none"。

::: tip Tips
- 通过[DrawableContext](../dom/drawablecontext.md)或其他方式绘制复杂图形时，建议设置为`hardware`
- 执行复杂动画或大量动画时，建议设置为`hardware`
- 由于安卓原生限制，当设置`android-layer-type`为`hardware`或`software`时，`overflow: visible`不生效。
:::

::: warning 注意
- App-Android 平台，`4.61+` `style` 支持 `UTSJSONObject` 类型。
:::

<!-- CUSTOMTYPEJSON.general-attribute.example -->

### 参见

- [相关 Bug](https://issues.dcloud.net.cn/?mid=component.global-properties-events.global-properties)

## 组件全局事件

<!-- CUSTOMTYPEJSON.general-event.attribute -->

<!-- CUSTOMTYPEJSON.general-event.compatibility -->

<!-- CUSTOMTYPEJSON.general-event.example -->

### touch 事件@touch
触摸事件包括：touchstart、touchmove、touchcancel、touchend 等。

在多点触摸的屏幕上，touch事件返回数组，包含了每个touch点对应的x、y坐标。

### tap/click 事件@tap

- App端
App端手指按下后在组件区域内移动不会取消tap/click事件的触发，移动到组件区域外才会取消tap/click事件的触发。

注意老版问题：uni-app x 4.0及以下版本手指按下后移动会取消tap/click事件的触发，即手指移动后抬起不会响应tap/click事件。

- Web端
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
      transition-duration: 2000ms;
      transition-property: transform;
      transform: rotate(0deg);
    }
  </style>
  ```

### 冒泡事件系统

> DOM事件主要有三个阶段：`捕获阶段`、`目标阶段`和`冒泡阶段`。
>
> `uvue` 目前暂不支持事件的捕获阶段。

以点击事件为例，当触发点击时，
1. 首先从根节点逐级向下分发，直到监听点击事件的节点为止（捕获阶段）；
2. 然后事件到达当前节点并触发点击事件（目标阶段）；
3. 接着继续向上逐级触发父节点的点击事件，直到根节点为止（冒泡阶段）。

::: warning 注意
虽然有3个阶段，但第2个阶段（“目标阶段”：事件到达了元素）并没有单独处理：捕获和冒泡阶段的处理程序都会在该阶段触发。

我们一般使用默认的事件注册机制，将事件注册到冒泡阶段，相对来说，大多数处理情况都在冒泡阶段。
:::

#### 阻止冒泡

在事件回调中，可以通过调用`event.stopPropagation`方法阻止事件冒泡。

```ts
handleClick (event : UniPointerEvent) {
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

- uni-app x 4.0以前，连续触发`click`或`tap`事件，可能会出现事件丢失的情况。请升级新版

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

### 参见

- [相关 Bug](https://issues.dcloud.net.cn/?mid=component.global-properties-events.global-events)

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

## UniCustomEvent\<T> @unicustomevent

<!-- CUSTOMTYPEJSON.UniCustomEvent.description -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.extends -->

<!-- CUSTOMTYPEJSON.UniCustomEvent.param -->


## UniPointerEvent

<!-- CUSTOMTYPEJSON.UniPointerEvent.description -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.extends -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.param -->

<!-- CUSTOMTYPEJSON.UniPointerEvent.example -->

## UniTouchEvent

<!-- CUSTOMTYPEJSON.UniTouchEvent.description -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.extends -->

<!-- CUSTOMTYPEJSON.UniTouchEvent.param -->

UniTouchEvent 的 type 类型包括：touchstart、touchmove、touchend、touchcancel、longpress。

## UniTouch

<!-- CUSTOMTYPEJSON.UniTouch.description -->

<!-- CUSTOMTYPEJSON.UniTouch.extends -->

<!-- CUSTOMTYPEJSON.UniTouch.param -->

<!-- CUSTOMTYPEJSON.Unigeneral-event.example -->

## UniMouseEvent

<!-- CUSTOMTYPEJSON.UniMouseEvent.description -->

<!-- CUSTOMTYPEJSON.UniMouseEvent.extends -->

<!-- CUSTOMTYPEJSON.UniMouseEvent.param -->

<!-- CUSTOMTYPEJSON.UniMouseEvent.example -->

## UniKeyEvent

<!-- CUSTOMTYPEJSON.UniKeyEvent.description -->

<!-- CUSTOMTYPEJSON.UniKeyEvent.extends -->

<!-- CUSTOMTYPEJSON.UniKeyEvent.param -->

<!-- CUSTOMTYPEJSON.UniKeyEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniKeyEvent.example -->

## UniNativeViewEvent

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.description -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.extends -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.param -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniNativeViewEvent.example -->

## UniVideoEvent

<!-- CUSTOMTYPEJSON.UniVideoEvent.description -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.extends -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.param -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.compatibility -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.example -->

### UniVideoEvent 的方法 @univideoevent-methods
<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.stopPropagation.name -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.stopPropagation.description -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.stopPropagation.compatibility -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.stopPropagation.param -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.stopPropagation.returnValue -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.stopPropagation.tutorial -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.preventDefault.name -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.preventDefault.description -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.preventDefault.compatibility -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.preventDefault.param -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.preventDefault.returnValue -->

<!-- CUSTOMTYPEJSON.UniVideoEvent.methods.preventDefault.tutorial -->


## 参见

- [相关 Bug](https://issues.dcloud.net.cn/?mid=component.global-properties-events)
