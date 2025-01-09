# CSS function
待补充

## 示例

```vue
<template>
	<view class="padding-safe-area-inset">
		<view style="background-color: blue;">我在状态栏遮住</view>
		<view style="background-color: blue;">我在导航栏上边</view>
	</view>
</template>
<style>
	.padding-safe-area-inset {
		flex: 1;
		background-color: darkred;
		justify-content: space-between;
		padding-top: env(safe-area-inset-top,200px);
		padding-left: env(safe-area-inset-left,200px);
		padding-right: env(safe-area-inset-right,200px);
		padding-bottom: env(safe-area-inset-bottom,200px);
	}
</style>

```
