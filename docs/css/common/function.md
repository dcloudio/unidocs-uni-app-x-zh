# CSS 方法

## var

<!-- CSSJSON.variables_values.compatibility -->

> uni-app x 4.0+ 提供内置 CSS 变量。
> uni-app x 4.52+ 全平台提供了安全区域相关 CSS 变量 --uni-safe-area-inset-* 。
> uni-app x 4.71+ App平台补充了自定义css变量
> 部分内置组件的特殊样式属性暂不支持CSS变量：input、textarea 的 placeholder-style、placeholder-class，picker-view 的 indicator-style、indicator-class、mask-style、mask-class

### 预置的 CSS 变量 @preset-var

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
- 小程序平台目前这些预置CSS变量对应的值均为估计值，并不准确

### 自定义 CSS 变量 @customvar
> HBuilderX4.71起 App平台支持自定义变量

CSS自定义变量规范参考[MDN Reference](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)

**注意：**
App平台和web有以下差异:
- 定义变量时不支持值为var(--*) ex: --color: var(--color)
- 回退值不支持var(--*) ex: --height: var(--height1 , var(--height2))
- transtion暂不支持使用var
- 部分组件的属性不支持CSS变量：input、textarea 的 placeholder-style、placeholder-class
- 由于App平台不支持:root伪类，需要自行在页面根元素或合适的父级元素的class中定义css变量，以便在子元素生效

<!-- CSSJSON.variables_values.example -->

## env @env

<!-- CSSJSON.function-env_values.compatibility -->

内置 CSS 环境变量，即`env()`。

**注意：**\
env()主要用于在App平台补齐 web 规范。但浏览器的env不会考虑uni-app x的pages.json中配置的顶部导航栏和底部tabbar。\
所以实际开发中处理安全区时，更推荐使用本文档上方的 [--uni-safe-area-inset-xxx 系列css变量](#var)。

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

<!-- CSSJSON.function-env_values.example -->

## rgb

<!-- CSSJSON.function-rgb_values.description -->

<!-- CSSJSON.function-rgb_values.compatibility -->

<!-- CSSJSON.function-rgb_values.example -->

## rgba

<!-- CSSJSON.function-rgba_values.description -->

<!-- CSSJSON.function-rgba_values.compatibility -->

<!-- CSSJSON.function-rgba_values.example -->

## url

<!-- CSSJSON.function-url_values.description -->

<!-- CSSJSON.function-url_values.compatibility -->

<!-- CSSJSON.function-url_values.example -->
