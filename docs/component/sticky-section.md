
<!-- ## sticky-section -->

<!-- UTSCOMJSON.sticky-section.name -->

<!-- UTSCOMJSON.sticky-section.description -->

<!-- UTSCOMJSON.sticky-section.compatibility -->

<!-- UTSCOMJSON.sticky-section.attribute -->

<!-- UTSCOMJSON.sticky-section.event -->

<!-- UTSCOMJSON.sticky-section.component_type-->

### sticky-section使用场景

1. 父元素滚动过程中，多个元素有固定到父元素顶部的需求。

	父元素中多个元素吸顶需要使用sticky-section组件。sticky-section组件作为sticky-header组件的父容器。sticky-section组件会控制子元素的滚动吸顶业务。sticky-section组件之间可通过push-pinned-header属性控制吸顶重叠时是否上推。

	**示例：**

	```html
	<list-view id="list-view" style="flex: 1; background-color: #f5f5f5;">
		<sticky-section v-for="sectionId in 3" :id="sectionId" push-pinned-header=false>
			<sticky-header>
				<text style="padding: 20px; background-color: #f5f5f5;">sticky-header吸顶--{{sectionId}}</text>
			</sticky-header>
			<list-item v-for="index in 20" :key="index" style="padding: 15px; margin: 5px 0;background-color: #fff;border-radius: 5px;">
				<text class="text">itme-content-{{index}}</text>
			</list-item>
		</sticky-section>
	</list-view>
	```

**注意**

+ sticky-section组件支持存放多个sticky-header子组件，多个sticky-header滚动吸顶时，后一个sticky-header会停靠在前一个sticky-header的末尾处, 仅限于同一个sticky-section父容器。多个sticky-section吸顶停靠通过push-pinned-header控制。
+ 安卓平台、iOS平台sticky-section组件是虚拟组件不会真实渲染。仅支持padding属性控制子元素位置。其他排版需求要交给子元素实现
+ 鸿蒙平台不支持padding属性，但是sticky-section可以设置样式
+ Android平台sticky-section组件作为list-view的子元素时需要注意，sticky-section子元素仅支持sticky-header、list-item，其他元素无法正常显示

<!-- UTSCOMJSON.sticky-section.children -->

<!-- UTSCOMJSON.sticky-section.example -->

<!-- UTSCOMJSON.sticky-section.reference -->
