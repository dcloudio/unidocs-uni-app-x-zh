## slider

<!-- UTSCOMJSON.slider.description -->

<!-- UTSCOMJSON.slider.attribute -->

<!-- UTSCOMJSON.slider.event -->

<!-- UTSCOMJSON.slider.component_type-->

<!-- UTSCOMJSON.slider.compatibility -->

## tips
show-value属性设为true后，会在横条右侧显示一个数字。

但注意app-uvue中，value显示区的默认宽度是4位数字。超出宽度后，后面的数字无法显示。即最大9999。（其他平台不限制）

如您需要5位或更多数字，请将show-value设为false或不设，自行写一个text组件，绑定value的数值来显示。

- uni-app x 的 App 和 web 平台的样式效果和 W3C 的效果一致，球的左边距/右边距和轨道是对齐的，app-vue/web/小程序 平台会溢出球半径
- 在 uni-app x 的 App 和 web 平台高度为 `block-size(28px) 大小 + 阴影(4px * 2)`，默认 `margin: 1px 0;`，暂不支持设置 padding，实际占用高度为 `38px`
- 在 app-vue/web/小程序 平台高度为 18px, 默认 `margin: 10px 18px;`，实际占用高度为 `38px`
- 默认占用高度是一致的，调整样式后会出现差异

<!-- UTSCOMJSON.slider.children -->

<!-- UTSCOMJSON.slider.example -->

<!-- UTSCOMJSON.slider.reference -->
