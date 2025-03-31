## transition


<!-- CSSJSON.transition.description -->

<!-- CSSJSON.transition.syntax -->

<!-- CSSJSON.transition.values -->

#### App平台
从 HBuilderX4.11 版起，默认值调整为`all`。HBuilderX4.11 以下版本，默认值为`none`。

transition暂不支持结束属性值为百分比。

<!-- CSSJSON.transition.defaultValue -->

<!-- CSSJSON.transition.unixTags -->

<!-- CSSJSON.transition.compatibility -->

<!-- CSSJSON.transition.example -->

<!-- CSSJSON.transition.reference -->

### Bug & Tips@tips

- App-Harmony 平台， 更新属性值时是否有动画效果，取决于 `transition-property` 中是否包含该属性。\
例如要对 `width` 做动画效果，初始宽度不需要动画效果，则应该在设置 `transition-property: width` 前设置初始宽度。\
后续修改 `width` 需要有动画效果时，需要在修改前设置 `transition-property: width`。
```css
.box {
	/* 初始宽度不需要动画效果, 需要设置在 transition-property: width 之前 */
	width: 100px;
	transition-property: width;
	transition-duration: 1s;
}
/* 因为之前设置了 transition-property: width，此时修改 width 会有动画效果 */
.box.active {
	width: 200px;
}
```
