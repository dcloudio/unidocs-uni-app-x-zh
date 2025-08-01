---
title : sticky-header
---

<!-- ## sticky-header -->

<!-- UTSCOMJSON.sticky-header.name -->

<!-- UTSCOMJSON.sticky-header.description -->

<!-- UTSCOMJSON.sticky-header.compatibility -->

<!-- UTSCOMJSON.sticky-header.attribute -->

<!-- UTSCOMJSON.sticky-header.event -->

<!-- UTSCOMJSON.sticky-header.component_type-->

### sticky-header使用场景

1. 父元素滚动过程中，某个元素有固定到父元素顶部的需求

	需求其实就是元素吸顶。可将需要吸顶元素放入sticky-header组件中，sticky-header组件作为父元素的子元素，放到吸顶元素原来的位置即可。

	**示例：**

	```html
	<list-view id="list-view" style="flex: 1; background-color: #f5f5f5;">
		<sticky-header>
			<!-- 固定到父元素顶部的元素 -->
			<text style="padding: 20px; background-color: #f5f5f5;">向上滑动页面，体验sticky-header吸顶效果。</text>
		</sticky-header>
		<list-item v-for="index in 20" :key="index" style="padding: 15px; margin: 5px 0;background-color: #fff;border-radius: 5px;">
			<text class="text">itme-content-{{index}}</text>
		</list-item>
	</list-view>
	```

**注意**

+ 安卓平台、iOS平台sticky-header组件不支持css。仅支持padding属性控制子元素位置。其他排版需求要交给子元素实现
+ 鸿蒙平台赞不支持padding属性，但是sticky-header可以设置样式
+ 同时存在多sticky-header组件请使用sticky-section组件充当父容器控制吸顶业务
+ 在API版本低于17的鸿蒙平台上，若想使用吸顶，不能使用本组件。可在滚动容器里自行监听滚动，设置某个区域的top为固定值来实现吸顶。可参考hello uni-app x的模板->[scroll-view自定义滚动吸顶示例](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/scroll-sticky/scroll-sticky.uvue)
+ 鸿蒙App平台 sticky-header组件只能作为sticky-section的子元素使用


<!-- UTSCOMJSON.sticky-header.children -->

<!-- UTSCOMJSON.sticky-header.example -->

<!-- UTSCOMJSON.sticky-header.reference -->
