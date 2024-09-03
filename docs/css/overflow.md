## overflow


<!-- CSSJSON.overflow.description -->

<!-- CSSJSON.overflow.syntax -->

<!-- CSSJSON.overflow.values -->

<!-- CSSJSON.overflow.defaultValue -->

<!-- CSSJSON.overflow.unixTags -->

<!-- CSSJSON.overflow.compatibility -->

<!-- CSSJSON.overflow.example -->

<!-- CSSJSON.overflow.reference -->

### Bug & Tips

- Android平台 当元素设置 overflow = visible 后会扩大元素的渲染区域，元素渲染及内存占用存在性能消耗，应尽量避免设置 overflow = visible
- Android平台 uni-app x 父元素设置 overflow = visible，子元素超出父元素的区域，无法正常响应touch、click事件 (4.13版本已修复该问题)
- iOS平台 当元素四个边设置了不同值的圆角，overflow = visible 会无效，超过父元素会被裁剪
- Android平台 当设置`android-layer-type`为`hardware`或`software`时，`overflow: visible`不生效。
- Android平台 当元素设置 overflow = visible 后再动态修改该元素 opacity 透明度可能导致 overflow: visible 不生效
