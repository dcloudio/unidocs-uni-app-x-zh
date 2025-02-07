
## CSS 变量 <Badge text="4.0（仅 Web 平台）">

> HBuilderX4.0起 提供内置 CSS 变量。之前版本如有获取状态栏高度等需求可使用[uni.getWindowInfo()](../../api/get-window-info.md)方式获取。  
> HBuilderX4.51起 提供安全区域相关 CSS 变量 --uni-safe-area-inset-* 。  

| CSS 变量| 描述| App| web|
| :- | :- | :- | :- |
| --status-bar-height | 系统状态栏高度| [系统状态栏高度](http://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getStatusbarHeight)| 0|
| --window-top| 内容区域距离顶部的距离 | 0| NavigationBar 的高度 |
| --window-bottom| 内容区域距离底部的距离 | 0| TabBar 的高度|
| --uni-safe-area-inset-top| 页面安全区域距离顶部边界距离，单位为px | 安全区域距离顶部边界| 安全区域距离顶部边界|
| --uni-safe-area-inset-right| 页面安全区域距离右边边界距离，单位为px | 安全区域距离右边边界| 安全区域距离右边边界|
| --uni-safe-area-inset-bottom| 页面安全区域距离底部边界距离，单位为px | 安全区域距离底部边界| 安全区域距离底部边界|
| --uni-safe-area-inset-left| 页面安全区域距离左边边界距离，单位为px | 安全区域距离左边边界| 安全区域距离左边边界|

::: warning 注意

- 当设置 `"navigationStyle":"custom"` 取消原生导航栏后，由于窗体为沉浸式，占据了状态栏位置。此时可以使用一个高度为 `var(--status-bar-height)` 的 view 放在页面顶部，避免页面内容出现在状态栏。
- 在 Web 端，由于不存在原生导航栏和 tabBar（是前端 div 模拟的），如果设置了一个固定位置的居底 view，在小程序和 App 端是在 tabBar 上方，但在 H5 端会与 tabBar 重叠。此时可使用`--window-bottom`，不管在哪个端，都是固定在 tabBar 上方。
- app-android、app-ios平台目前不支持自定义css变量

:::

### 代码块

快速书写 css 变量的方法是：在 css 中敲 `hei`，在候选助手中即可看到 3 个 css 变量。

### 示例

```vue
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

```vue
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



## CSS 环境变量@env  

> HBuilderX4.51起 提供内置 CSS 环境变量，app平台支持使用env()函数处理页面安全区域, 之前版本如有获取栈顶页面安全区域的需求可使用[uni.getWindowInfo()](../../api/get-window-info.md#safearea)。

### 语法  
```vue
/* Using the four safe area inset values with no fallback values */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* Using them with fallback values */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 20px);
env(safe-area-inset-bottom, 20px);
env(safe-area-inset-left, 20px);
```

### uni-app x 兼容性
#### app平台  

> app平台的 CSS 环境变量是页面相关的，即根据 uvue 页面原生导航栏和tabBar的配置自动计算。

app平台仅以下CSS属性支持使用环境变量  
- padding  
- margin  
- width  
- height  
- top  
- right  
- bottom  
- left  

#### web平台

> web平台的 CSS 环境变量是应用全局值，由浏览器自动计算，与 uvue 页面无关，参考[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/env)  


### 示例

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
    justify-content: space-between;
/* #ifdef APP */
    padding-top: env(safe-area-inset-top, 0px);
    padding-left: env(safe-area-inset-left, 0px);
    padding-right: env(safe-area-inset-right, 0px);
    padding-bottom: env(safe-area-inset-bottom, 0px);
/* #endif */
  }
</style>

```

