## background-image


<!-- CSSJSON.background-image.description -->

<!-- CSSJSON.background-image.syntax -->

<!-- CSSJSON.background-image.values -->

<!-- CSSJSON.background-image.defaultValue -->

<!-- CSSJSON.background-image.unixTags -->

<!-- CSSJSON.background-image.compatibility -->

<!-- CSSJSON.background-image.example -->

#### App平台
原生应用没有背景图，这是一种影响性能的设计。App平台也不支持背景图，仅支持linear-gradient设置一个背景渐变色。
linear-gradient仅支持三个参数，格式如下：
```
linear-gradient(<direction>, <color-start>, <color-stop>)
```
- direction
	渐变方向，字符串类型，支持以下值：
	+ to right：从左向右渐变
	+ to left：从右向左渐变
	+ to bottom：从上到下渐变
	+ to top：从下到上渐变
	+ to bottom left：从右上角到左下角（3.99开始支持）
	+ to bottom right：从左上角到右下角
	+ to top left：从右下角到左上角
	+ to top right: 从左下角到右上角（3.99开始支持）
- color-start
	渐变起始点颜色值，支持RGB（rgb(255, 0, 0)）；RGBA（rgba(255, 0, 0, 0.5)）；十六进制（#ff0000）；精简写法的十六进制（#f00）；色值关键字（red）
- color-stop
	渐变终点颜色值，支持RGB（rgb(255, 0, 0)）；RGBA（rgba(255, 0, 0, 0.5)）；十六进制（#ff0000）；精简写法的十六进制（#f00）；色值关键字（red）

> background-image 优先级高于 background-color，同时设置 background-image 和 background-color 时 background-color 被覆盖。


<!-- CSSJSON.background-image.reference -->

### Bug & Tips@tips

- App-Harmony 平台，背景不支持绘制到 border 区域。