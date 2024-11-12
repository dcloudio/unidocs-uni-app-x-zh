## uni.chooseLocation(options) @chooselocation

<!-- UTSAPIJSON.chooseLocation.description -->

::: warning 注意
Web平台本API调用了腾讯地图的免费gcj02坐标转换接口，该接口从2024年7月18日起被腾讯逐步下线，导致老版本中本API无法使用。请立即升级到 `uni-app 4.24版`。

升级后注意：
1. manifest中配置好自己的地图厂商key
2. 确保在地图厂商那里配额足够
3. 确保在地图厂商那里有周边服务的权限。否则无法获取周围地址
4. 确保自己的域名在地图厂商那里正确配置了域名白名单

地图厂商的商业授权较贵，如需购买，请点击[获取优惠](https://ask.dcloud.net.cn/explore/map/)。
:::

<!-- UTSAPIJSON.chooseLocation.compatibility -->

<!-- UTSAPIJSON.chooseLocation.param -->

<!-- UTSAPIJSON.chooseLocation.returnValue -->

<!-- UTSAPIJSON.chooseLocation.tutorial -->

<!-- UTSAPIJSON.chooseLocation.example -->

## 三方地图SDK  

uni.chooseLocation 依赖三方地图SDK，点击[查看详情](../component/map.md#mapsdk)

## uniCloud依赖

uni.chooseLocation 依赖 uniCloud 的 uni-map-common 插件，请先关联服务空间后，并安装 uni-map-common 插件，插件地址：[https://ext.dcloud.net.cn/plugin?id=13872](https://ext.dcloud.net.cn/plugin?id=13872)

如果你的项目没有创建过 uniCloud 环境，则先右键项目名，创建uniCloud云开发环境，uniCloud 的 web控制台地址：[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)

![](https://web-ext-storage.dcloud.net.cn/uni-app-x/API/chooseLocation/aa35d5a6-9b13-4fea-8a0c-1b3534584659.png)

安装完 uni-map-common 插件后，需要将你的地图key配置在 `/uni_modules/uni-config-center/uniCloud/cloudfunctions/common/uni-config-center/uni-map/config.js` 如果你的项目没有此配置文件，则直接根据目录创建对应的目录和 `config.js` 文件，文件内容如下：

```js
module.exports = {
	"default": "qqmap", // 当前使用哪个平台
	"key": {
		"qqmap": "", // 腾讯地图key
		"amap": "", // 高德地图key
	}
}
```

## 自定义样式

uni.chooseLocation 内的 icon字体颜色支持通过在App.vue中写入全局css样式进行修改，以下是css样式名称

以 .uni-choose-location-light 开头的为明亮模式下的样式

以 .uni-choose-location-dark 开头的为暗黑模式下的样式

地图中心点的icon

```css
.uni-choose-location-light .uni-choose-location-map-target-icon {
	color: red !important;
}
.uni-choose-location-dark .uni-choose-location-map-target-icon {
	color: red !important;
}
```

确认按钮颜色

```css
.uni-choose-location-light .uni-choose-location-nav-confirm-text {
	background-color: red !important;
}
.uni-choose-location-dark .uni-choose-location-nav-confirm-text {
	background-color: red !important;
}
```

取消按钮颜色

```css
.uni-choose-location-light .uni-choose-location-poi-search-cancel {
	color: red !important;
}
.uni-choose-location-dark .uni-choose-location-poi-search-cancel {
	color: red !important;
}
```

已选中的POI右侧的对钩icon颜色

```css
.uni-choose-location-light .uni-choose-location-poi-item-selected-icon {
	color: red !important;
} 
.uni-choose-location-dark .uni-choose-location-poi-item-selected-icon {
	color: red !important;
} 
```