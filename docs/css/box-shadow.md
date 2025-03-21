## box-shadow


<!-- CSSJSON.box-shadow.description -->

<!-- CSSJSON.box-shadow.syntax -->

<!-- CSSJSON.box-shadow.values -->

<!-- CSSJSON.box-shadow.defaultValue -->

<!-- CSSJSON.box-shadow.unixTags -->

<!-- CSSJSON.box-shadow.compatibility -->

<!-- CSSJSON.box-shadow.example -->

#### App平台差异
- app-ios平台 box-shadow 和 overflow: hidden 不能同时设置，添加了阴影会导致 overflow：hidden 失效.
- app-ios平台 设置box-shadow的view背景无法透明，因为iOS系统 box-shadow 是在view的背景下绘制的，当view背景色为透明时，背景将显示box-shadow的颜色，因此为避免此差异建议给box-shadow的view设置非透明背景色
- app-Harmony 平台不支持 inset 和阴影扩散半径.

<!-- CSSJSON.box-shadow.reference -->
