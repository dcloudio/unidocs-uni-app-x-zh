## CSS 变量 var@var

> HBuilderX4.0起 提供内置 CSS 变量。之前版本如有获取状态栏高度等需求可使用[uni.getWindowInfo()](../../api/get-window-info.md)方式获取。
> HBuilderX4.52起 全平台提供了安全区域相关 CSS 变量 --uni-safe-area-inset-* 。

**注意：**
- app平台不支持自定义css变量，仅支持预置的css变量。
- 鸿蒙平台目前支持的css变量仅在页面初始化时计算一次，不会随相关区域变化而变化

uni-app x预置的css变量：

<!-- CSSJSON.variables_values.compatibility -->

- `--status-bar-height`的使用场景：当设置pages.json中的 `"navigationStyle":"custom"` 取消原生导航栏后，由于窗体为沉浸式，占据了状态栏位置。此时可以使用一个高度为 `var(--status-bar-height)` 的 view 放在页面顶部，避免页面内容出现在状态栏上。App平台自4.61版本开始自动响应状态栏高度的变化动态调整页面布局
- `--uni-safe-area-inset-xxx` 的使用场景：
  1. `--uni-safe-area-inset-xxx`为安全区域边界到`position: fixed;`定位相对的区域边界距离。其中安全区域已规避LeftWindow、TopWindow、RightWindow、NavigationBar、TabBar。
  2. 在 App 和 小程序 平台，pages.json中配置的导航栏和tabbar是原生的，页面内容只能在这个区域中间。而在 Web 端，不存在原生导航栏和 tabBar，由前端 view 模拟，所以页面内容如果使用绝对定位的话，就会和 Web 平台的导航栏、tabbar重叠。为了避免重叠，可以使用`--uni-safe-area-inset-xxx`系列css变量来设置位置。例如，在有tabbar页面的需要设置了一个固定位置的居底 view，如果单纯的在css中设置 bottom 为 0 ，那么在小程序和 App 端是在 tabBar 上方，但在 Web 端会与 tabBar 重叠。此时可设置 bottom 为 css变量 `--uni-safe-area-inset-bottom`，不管在哪个端，都是固定在 tabBar 上方。因为该值在 Web 平台，会自动避让导航栏高度。
  3. Web 平台有 LeftWindow 、TopWindow、RightWindow 等宽屏适配时的页面，绝对定位时也需要避让，避免把内容显示在其他页面上。`--uni-safe-area-inset-xxx` 系列css变量也已经内部自动处理各种Window。
  4. 除了兼容处理导航栏和tabbar、兼容LeftWindow等宽屏Window之外，`--uni-safe-area-inset-xxx` 系列css变量，还兼容了手机屏幕的安全区，避让了底部手势横条、摄像头挖孔区等。确保使用了本系列变量的内容不会和屏幕上这些内容重叠。

- `--window-top` 和 `--window-bottom` 已经废弃，推荐使用 `--uni-safe-area-inset-top` 和 `--uni-safe-area-inset-bottom` 替代。废弃原因是：
  1. 这2个css变量仅处理了导航栏和tabbar，未处理LeftWindow等Window、未处理手机屏幕的底部手势横条和摄像头挖孔区等内容。
  2. 这2个css变量未包含left、right，宽屏适配和横屏时无法友好兼容
  3. 这2个css变量的命名未包含 `uni` 前缀，容易和开发者的代码中的自定义css变量命名冲突。

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
		height: var(--status-bar-height);  <!-- 敲 hei，在HBuilderX的语法提示中可选择本代码块，快速生成本行代码-->
		width: 100%;
	}
</style>
```

<!-- 
```vue
<template>
	<view>
		<view class="toTop">
			这里可以放一个向上箭头，它距离底部tabBar上浮10px
		</view>
	</view>
</template>
<style>
	.toTop {
		bottom: calc(var(--window-bottom) + 10px);
	}
</style>
```
-->


## CSS 环境变量 env@env

> HBuilderX4.51+

内置 CSS 环境变量，即`env()`。

app平台支持使用env()函数处理页面安全区域, 之前版本如有获取栈顶页面安全区域的需求可使用[uni.getWindowInfo()](../../api/get-window-info.md#safearea)。

**注意：此内置环境变量，主要用于兼容 web 的写法。但实际开发中，推荐使用本文档上方的 [--uni-safe-area-inset-xxx 系列css变量](#var)。**

### 语法
```css
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
- padding （不支持缩写，只支持展开值，明确到具体方向，比如 padding-left）
- margin（不支持缩写，只支持展开值，明确到具体方向，比如 padding-left）
- width
- height
- top
- right
- bottom
- left

#### web平台

web平台的 CSS环境变量是应用全局值，由浏览器自动计算，与 uvue 页面无关，无法干预处理对导航栏、tabbar、leftWindow、TopWindow的兼容支持。所以不推荐使用。建议使用跨端的`--uni-safe-area-inset-xxx` 系列css变量。

web平台的 CSS环境变量规范参考[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/env)


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
