# 长度单位 @length

- 长度 `<length>` 用于表示距离尺寸的 CSS 数据类型。许多 CSS 属性会用到长度，比如 width、margin、padding。
- 长度 `<percentage>` 表述一个百分比值。许多 CSS 属性 可以取百分比值，用以根据父对象来确定大小。百分比值由一个`<number>`具体数值后跟着%符号构成。就像其他在 css 里的单位一样，在%和数值之间是不允许有空格的。

<!-- CSSJSON.length_values.compatibility -->

## rpx
`rpx` 是一个以设备750px为基准的单位，`750rpx`即为屏幕宽度，相当于100%；`375rpx`即为屏幕一半宽度，相当于50%。

因为很多设计稿是以750px为基准出图的，所以使用rpx可以比较好的在不同屏幕宽度下还原设计稿。

rpx的性能和精度不如px，但优于百分比。**如果px可满足需求，尽量使用px**。

字体大小，即font-size，不应该使用rpx，[详见](../font-size.md#App平台差异)

height、padding、margin、边框、阴影，都不应该使用rpx。除非你的需求真的要根据屏幕宽度动态调整这些值。一般没有这种需求。

所以rpx比较适合的场景是view的宽度width设置。

## 不同单位的差异
- 长度默认值差异
	* App平台长度 `<length>` 可以不设置单位，不设置单位时当做 px 处理
	* Web平台长度 `<length>` 必须设置单位，不设置单位时当做无效值处理 \
	App平台允许设置纯数字是为了性能考虑，在需要频繁更改长度时，使用纯数字会比"数字+px"稍微快一点。\
	日常开发为了更好的跨端兼容，还是推荐给长度 `<length>` 指定明确单位。

- 单位精度差异
	- px、rpx属于逻辑像素，在不同dpi的设备上，需要转换为物理像素。当产生浮点数时，由于精度保留策略的不同，在不同浏览器和手机OS，可能造成细微的误差。\
	尤其是浏览器对于小数点的px兼容不够好，比如`0.5px`很难正常显示。但app可以正常显示。\
	另外`rpx`和`百分比`，比`px`更容易产生浮点数，所以**如果px能满足需求，尽量不用rpx和百分比**。

- 性能差异
   * 性能 px > rpx > 百分比。rpx需要根据屏幕宽度换算为px，而百分比需要根据父容器的高或宽换算为px，计算复杂度高于rpx。

:::

## 字体大小单位

<!-- CSSJSON.font-length_values.compatibility -->
