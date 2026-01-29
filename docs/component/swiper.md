<!-- ## swiper -->

<!-- UTSCOMJSON.swiper.name -->

<!-- UTSCOMJSON.swiper.description -->

<!-- UTSCOMJSON.swiper.compatibility -->

<!-- UTSCOMJSON.swiper.attribute -->

<!-- UTSCOMJSON.swiper.event -->

<!-- UTSCOMJSON.swiper.component_type-->

<!-- UTSCOMJSON.swiper.children -->

<!-- UTSCOMJSON.swiper.example -->


**平台差异**

- web、小程序、app-harmony 端的swiper-item为绝对定位，无法撑开swiper。所以swiper组件的默认高度为150px。
- app-android和iOS的swiper目前默认会以内容高度撑开作为其高度。如果要多端拉齐应自行设置swiper的style里的高度。后续Android和iOS的swiper也会统一为其他平台的方式。

:::warning 注意
- 使用 `auto-height` 属性时，`swiper-item` 组件外层容器和 slot 内容之间会增加一层 `view`，这会导致设置在 `swiper-item` 上的布局样式无法直接影响插槽内的元素（比如 `align-items: center`），请注意避免影响布局。
- 蒸汽模式不再支持 `rebound` 属性，如需控制是否回弹效果，请使用 `disable-bounce` 属性。
- 蒸汽模式不再支持 `indicator-color` 和 `indicator-active-color` 属性，如需自定义指示点颜色及其他样式，请使用 `indicator-style`、`indicator-class` 和 `indicator-active-style`、`indicator-active-class` 属性。
- 蒸汽模式新增通过 `indicator` 具名插槽自定义指示点，示例代码如下：
:::
```vue
<template>
	<swiper :current="current" @change="handleSwiperChange">
		<swiper-item>
			<view style="height: 100%; align-items: center; justify-content: center; background-color: #16a085;">
				<text style="color: white;">Item 1</text>
			</view>
		</swiper-item>
		<swiper-item>
			<view style="height: 100%; align-items: center; justify-content: center; background-color: #cccccc;">
				<text style="color: black;">Item 2</text>
			</view>
		</swiper-item>
		<swiper-item>
			<view style="height: 100%; align-items: center; justify-content: center; background-color: #00cc00;">
				<text style="color: white;">Item 3</text>
			</view>
		</swiper-item>
		<template v-slot:indicator>
			<text v-for="(_, index) in 3" class="custom-indicator-text" :class="{ 'active': current === index }">{{index + 1}}</text>
		</template>
	</swiper>
</template>

<script setup lang="uts">
	const current = ref(0)

	const handleSwiperChange = (e : UniSwiperChangeEvent) => {
		current.value = e.detail.current
	}
</script>

<style>
	.custom-indicator-text {
		margin: 0 5px;
	}

	.custom-indicator-text.active {
		font-size: 18px;
		color: yellow;
		font-weight: bold;
	}
</style>
```


## swiper-item

<!-- UTSCOMJSON.swiper-item.description -->

<!-- UTSCOMJSON.swiper-item.compatibility -->

<!-- UTSCOMJSON.swiper-item.attribute -->

<!-- UTSCOMJSON.swiper-item.event -->

<!-- UTSCOMJSON.swiper-item.component_type-->

<!-- UTSCOMJSON.swiper-item.example -->

<!-- UTSCOMJSON.swiper-item.reference -->
