# CSS function
uni-app x 4.51 App平台从开始支持env(safe-area-inset-*)函数, 允许将内容放置在页面的[安全区域](../../api/get-window-info.md#safearea)中

## 语法
```vue
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/*带fallback*/
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 20px);
env(safe-area-inset-bottom, 20px);
env(safe-area-inset-left, 20px);
```

## 支持的属性
padding、margin、width、height、top、right、bottom、left

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
## 参见
[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/env)