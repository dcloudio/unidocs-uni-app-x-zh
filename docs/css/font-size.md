## font-size


<!-- CSSJSON.font-size.description -->

<!-- CSSJSON.font-size.syntax -->

<!-- CSSJSON.font-size.values -->

<!-- CSSJSON.font-size.defaultValue -->

<!-- CSSJSON.font-size.unixTags -->

<!-- CSSJSON.font-size.compatibility -->

<!-- CSSJSON.font-size.example -->

#### App平台差异
- 字体单位说明

App平台仅支持以像素值（px）和相对像素值（rpx）设置字体大小，默认值为16px。

如果仅开发App，那么属性值可以不设置单位，不设置单位时当做 px 处理。但无法兼容web和小程序。

不支持百分比的单位、不支持基于用户默认字体大小的绝对大小关键字，如small、medium、large等、不支持em、rem、ex等单位。

虽然支持但不推荐使用rpx。

正常情况下，普通字体不需要、也不应该设置font-size。使用默认的16px即可。多设置一次意义不大的样式，在鸿蒙平台反而会增加耗时。

需要变大或变小的字体，基于16px的默认值，适当增加或缩小字号即可。

如果在font-size中使用rpx，类似于web开发中给字体大小设百分比，没有意义。rpx在font-size中使用有如下问题：
1. 根据屏幕宽度动态计算，在超宽屏上脱离预期的大
2. rpx性能不如px，排版引擎需要根据屏幕宽度给页面里每个text设置样式，如果text组件很多，就会加重计算耗时。尤其是一些开发者给所有text组件都设rpx，性能会很差。大部分字体应该不仅没有rpx，甚至连px也不设，就使用默认的字号即可。
3. rpx会计算出小数，小数又需要取整，在不同情况下就会产生精度误差。这个在贴边场景下会比较明显，有的屏幕下2个元素看起来是挨着的，有的屏幕下2个元素中间有条缝。

- 继承说明
App平台不支持样式继承，font-size 也不例外。font-size仅对作用的当前[text](../component/text.md)组件生效。


#### Web规范
属性值必须设置单位，无单位时当做非法值处理

<!-- CSSJSON.font-size.reference -->
