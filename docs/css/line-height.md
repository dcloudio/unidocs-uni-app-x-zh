## line-height


<!-- CSSJSON.line-height.description -->

<!-- CSSJSON.line-height.syntax -->

<!-- CSSJSON.line-height.restrictions -->

<!-- CSSJSON.line-height.values -->

<!-- CSSJSON.line-height.defaultValue -->

> HBuilderX5.0+ 调整 line-height 默认值为 normal，该值不是固定高度，而是根据字体调节，可保障不会发生行高太小裁剪字体。但在不同平台，由于其默认字体不同，会导致行高的绝对高度有差异。HBuilderX5.0以下版本默认值曾为 1.2em，该值在某些字体下会出现上下边缘裁剪。 如需统一各平台行高绝对值且避免裁剪，请设置1.5em以上的数字。

<!-- CSSJSON.line-height.unixTags -->

<!-- CSSJSON.line-height.compatibility -->

### tips
App平台仅支持以像素值（px）、相对像素值（rpx）、无单位和相对元素字体大小单位（em）。不支持百分比。

无单位表示数字值乘以该元素的字体大小，在App平台由于不支持继承，无单位与em单位相同，即 1.5 与 1.5em 效果一致。

**注意**  
Web平台 无单位 和em单位在line-height样式继承自父元素时存在差异：  
- 无单位  
  子元素会用自己的 font-size 乘以这个无单位数值，子元素的字体变大时，行高自动适应  
- em单位  
  父元素先根据自己的 font-size 计算出固定像素值，子元素使用这个固定像素值，如果子元素字体变大，行高保持不变，可能出现文字重叠  


<!-- CSSJSON.line-height.example -->

<!-- CSSJSON.line-height.reference -->
