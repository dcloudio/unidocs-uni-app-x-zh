## uni.chooseLocation(options) @chooselocation

<!-- UTSAPIJSON.chooseLocation.description -->

::: warning 注意
地图是商业服务，授权较贵，如需购买，请点击[获取优惠](https://ask.dcloud.net.cn/explore/map/)。
:::

<!-- UTSAPIJSON.chooseLocation.compatibility -->

<!-- UTSAPIJSON.chooseLocation.param -->

<!-- UTSAPIJSON.chooseLocation.returnValue -->

<!-- UTSAPIJSON.chooseLocation.tutorial -->

<!-- UTSAPIJSON.chooseLocation.example -->

## 三方地图SDK  

uni.chooseLocation 依赖三方地图SDK，点击[查看详情](../component/map.md#mapsdk)

## App平台依赖uniCloud@unicloud
> HBuilderX 4.33+

uni.chooseLocation 中有个功能是传入位置返回周围的POI信息。在腾讯地图中该功能不是客户端API，而是一个webservice接口。因为涉及收费，该接口需要传入key。

在App中，从客户端带着key直接发起请求腾讯地图的webservice接口是不安全的。key泄露后会导致其他人调用腾讯相关能力但费用由key的所属人缴纳。

web端可以使用在腾讯地图web控制台配置域名白名单的方式，但App无法采用这种方式。

App上安全的方式是由客户端不带key请求开发者的服务器，由开发者的服务器判断客户端的身份，然后服务器带着key请求腾讯地图的服务器，成功后返回POI列表给客户端。

DCloud的所有服务器API，都是基于uniCloud的。并且uniCloud早已经有 [uni-map-common](https://doc.dcloud.net.cn/uniCloud/uni-map-common.html)

所以在腾讯地图的 uni.chooseLocation 中，需要依赖 uniCloud 的 uni-map-common 插件。开发者在该插件的配置文件中配置好key，无需自己编写代码，即可使用本API。

开发者首先需要开通 [uniCloud](https://unicloud.dcloud.net.cn)，选择一个服务商（可自由选择，不是必须使用腾讯云），创建一个服务空间。

在HBuilderX对项目点右键，关联服务空间。如果你的项目没有创建过 uniCloud 环境，则先右键项目名，创建uniCloud云开发环境，uniCloud 的 web控制台地址：[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)

![](https://web-ext-storage.dcloud.net.cn/uni-app-x/API/chooseLocation/aa35d5a6-9b13-4fea-8a0c-1b3534584659.png)

关联服务空间后，将 uni-map-common 插件导入项目，插件地址：[https://ext.dcloud.net.cn/plugin?id=13872](https://ext.dcloud.net.cn/plugin?id=13872)

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

请务必注意地图的key，是有权限的可以访问周围POI信息的，且有足够的额度。这涉及付费采购。点此联系DCloud咨询[获取优惠](https://ask.dcloud.net.cn/explore/map/)

配置完毕后，本地运行即可使用。正式发布时，记得对uniCloud目录点右键，将相关云函数和模块提交发布到正式服务器上。

如果需要在uniCloud服务器更安全的验证客户端的身份，请开通[云端一体安全网络](https://doc.dcloud.net.cn/uniCloud/secure-network.html)。它可以对App的包名、证书进行校验，防止其他人盗用你的接口。

## 自定义样式@custom
> HBuilderX 4.33+

uni.chooseLocation 虽然是一个框架内置的页面。但提供了丰富的自定义能力。

该页面自动适配了暗黑、横屏、国际化（内置中文繁简和英文）。页面上的图片元素均使用字体图标，可以覆盖class。

可通过App.vue中写入全局css样式进行覆盖修改。

- 以 .uni-choose-location-light 开头的为light模式下的样式
- 以 .uni-choose-location-dark 开头的为dark模式下的样式

样式必须以 `!important;` 结尾才能生效，以下是css的class名称，写入同名名称就可以覆盖。

文本样式除了下方列出的 color 和 background-color 外，你还可以替换 font-family 等任何 text 标签支持的样式。

地图中心点的icon

```css
.uni-choose-location-light .uni-choose-location-map-target-icon {
	color: red !important;
}
.uni-choose-location-dark .uni-choose-location-map-target-icon {
	color: red !important;
}
```

右上方"确认"按钮

```css
.uni-choose-location-light .uni-choose-location-nav-confirm-text {
	background-color: red !important;
	color: #fff !important;
}
.uni-choose-location-dark .uni-choose-location-nav-confirm-text {
	background-color: red !important;
	color: #fff !important;
}
```

左上方"取消"按钮

```css
.uni-choose-location-light .uni-choose-location-nav-back-text {
	color: red !important;
}
.uni-choose-location-dark .uni-choose-location-nav-back-text {
	color: red !important;
}
```

搜索框右侧的"取消"文字

```css
.uni-choose-location-light .uni-choose-location-poi-search-cancel {
	color: red !important;
}
.uni-choose-location-dark .uni-choose-location-poi-search-cancel {
	color: red !important;
}
```

已选中的POI右侧的对钩icon

```css
.uni-choose-location-light .uni-choose-location-poi-item-selected-icon {
	color: red !important;
} 
.uni-choose-location-dark .uni-choose-location-poi-item-selected-icon {
	color: red !important;
} 
```

POI标题

```css
.uni-choose-location-light .uni-choose-location-poi-item-title-text {
  color: red !important;
}
.uni-choose-location-dark .uni-choose-location-poi-item-title-text {
  color: red !important;
}
```

POI地址

```css
.uni-choose-location-light .uni-choose-location-poi-item-detail-text {
  color: red !important;
}
.uni-choose-location-dark .uni-choose-location-poi-item-detail-text {
  color: red !important;
}
```

## 历史问题
uni-app x 4.24以前，Web平台本API调用了腾讯地图的免费gcj02坐标转换接口，该接口从2024年7月18日起被腾讯逐步下线，导致老版本中本API无法使用。请升级到4.24+。

升级后注意：
1. manifest中配置好自己的地图厂商key
2. 确保在地图厂商那里配额足够
3. 确保在地图厂商那里有周边服务的权限。否则无法获取周围地址
4. 确保自己的域名在地图厂商那里正确配置了域名白名单
