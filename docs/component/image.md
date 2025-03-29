## image

<!-- UTSCOMJSON.image.description -->

<!-- UTSCOMJSON.image.compatibility -->

<!-- UTSCOMJSON.image.attribute -->

<!-- UTSCOMJSON.image.event -->

<!-- UTSCOMJSON.image.component_type-->

### 图片格式
- web平台支持的图片格式，不同浏览器有差异，可查询caniuse
- 小程序平台支持的图片格式与浏览器类似。但由于不同小程序平台的webview版本不一样，需要具体查阅小程序平台的图片组件介绍。
	注意：webp在不同小程序平台策略不同，有的需要打开 webp 属性，有的仅支持来自服务器的webp。
- 鸿蒙next平台的图片格式[参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)
- Android和iOS平台支持的图片格式如下：
	* [x] bmp
	* [x] gif
	* [x] ico
	* [x] jpg
	* [x] png
	* [x] webp
	* [x] heic（iOS支持，Android10+支持）
	* [x] tif (iOS端支持，Android端不支持)

如需其他图片格式，可自行开发uts组件插件或搜索插件市场，如
- [svg插件](https://ext.dcloud.net.cn/search?q=svg&orderBy=Relevance&cat1=8&cat2=82)
- [apng插件](https://ext.dcloud.net.cn/search?q=apng&orderBy=Relevance&cat1=8&cat2=82)


### src路径支持说明

- 本地路径/static方式  
	由于uni-app/uni-app x编译时，只把/static目录下的静态资源copy到app中，所以src均需指向/static目录下。  
	其他目录的图片由于不会被打包进去，所以无法访问。  
	app平台文件路径会存在大小写敏感问题，为了有更好的兼容性，建议统一按大小写敏感原则处理 [详情](../api/file-system-spec.md#casesensitive)  

- 本地绝对路径file:///方式  
	app-android平台形如`file:///storage/emulated/0/Android/data/io.dcloud.uniappx/apps/__UNI__4517034/www/static/test-image/logo.png`。  
	访问本应用内的资源时无需使用本方式，推荐使用/static方式。上述地址受包名、appid影响。  
	file:///方式一般用于download等公共目录。使用前需确保拥有相关权限。  

- 支持网络路径  
	* 支持http、https。  
	* 安卓端image组件内部使用facebook的[fresco](https://github.com/facebook/fresco)库(2.5.0)，自带缓存策略，也会自动清理缓存。  
	* iOS端image组件内部使用[SDWebImage](https://github.com/SDWebImage/SDWebImage)库(5.10.0)，自带缓存策略，默认7天缓存，缓存过期后会自动清理。
	* 鸿蒙平台image组件使用arkUI的image组件，缓存策略[另见](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-image)

<!-- UTSCOMJSON.image.children -->

<!-- UTSCOMJSON.image.example -->

<!-- UTSCOMJSON.image.reference -->

### tips
- image组件默认宽度为320px、高度为240px  
- 在error事件里监听报错，并重新设置image组件的src，可实现自定义错误图。[详见示例代码](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/component/image/image-path.uvue)  
- 图片文件需在static目录（项目下或uni_modules下都支持static目录）下，或者import导入文件，否则文件不会被copy到最终的包中，导致无法访问  
- app-android平台由于默认启用了图片缩放（即根据组件实际宽高加载图片，以节省内存），所以可能导致load事件返回的图片尺寸并非图片原始尺寸  
- app-android平台不支持CMYK色彩的图片，[详见](https://github.com/facebook/fresco/issues/1404)  
- app-ios平台 iOS14 版本开始系统原生支持 WebP 图片格式，iOS14以下的版本使用三方解码器软解码实现对 WebP 的支持，性能存在一定损耗。如果在iOS14以下同一页面中大量使用WebP图片，会增加性能损耗  
