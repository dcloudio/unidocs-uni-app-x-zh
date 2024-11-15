## slider

<!-- UTSCOMJSON.slider.description -->

<!-- UTSCOMJSON.slider.compatibility -->

<!-- UTSCOMJSON.slider.attribute -->

<!-- UTSCOMJSON.slider.event -->

<!-- UTSCOMJSON.slider.component_type-->

## tips
show-value属性设为true后，会在横条右侧显示一个数字。

但注意app-uvue中，value显示区的默认宽度是4位数字。超出宽度后，后面的数字无法显示。即最大9999。（其他平台不限制）

如您需要5位或更多数字，请将show-value设为false或不设，自行写一个text组件，绑定value的数值来显示。

- uni-app x 的 App 和 web 平台的样式效果和 W3C 的效果一致，球的左边距/右边距和轨道是对齐的，app-vue/web/小程序 平台会溢出球半径
- 在 uni-app x 的 App 和 web 平台高度为 `block-size(28px) 大小 + 阴影(4px * 2)`，默认 `margin: 1px 0;`，暂不支持设置 padding，实际占用高度为 `38px`
- 在 app-vue/web/小程序 平台高度为 18px, 默认 `margin: 10px 18px;`，实际占用高度为 `38px`
- 默认占用高度是一致的，调整样式后会出现差异
- 4.18+ App-Android 平台，优化了在滚动容器中的行为，当水平拖动 slider 超过 4 * dpi 时将阻止默认行为，避免滚动过程中触发 slider 变动
- 在 step 为浮点时存在一些差异，app-android/web 行为一致 step 优先，iOS/微信小程序会四舍五入，iOS 4.33已修复，示例代码如下:
```html
<template>
  <view>
    <!-- app/web 最大滑动值为10 因为 step 为 1 -->
    <!-- 微信小程序 最大滑动值为11 四舍五入了 -->
    <!-- 在一些音频播放进度上会涉及此问题，将总时长*1000在转换为int，step设置为10，适用于小于1秒的音频文件无法看到进度的问题 -->
    <slider :min="0" :max="10.5" :step="1" :show-value="true" />
  </view>
</template>
```


<!-- UTSCOMJSON.slider.children -->

<!-- UTSCOMJSON.slider.example -->

<!-- UTSCOMJSON.slider.reference -->
