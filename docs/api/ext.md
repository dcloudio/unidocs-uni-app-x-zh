# 其它api

插件市场和hello示例中还有一批可替代uni内置api的插件或示例代码，比如：
- [剪切板](https://ext.dcloud.net.cn/search?q=%E5%89%AA%E5%88%87%E6%9D%BF&orderBy=Relevance&cat1=8&cat2=81)：`uni.setClipboardData`、`uni.getClipboardData`
- [拨打电话](https://ext.dcloud.net.cn/plugin?id=15235)：`uni.makePhoneCall`
- [打开三方应用](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/template/schema/schema.uvue)：打开浏览器、应用商店、地图并传参。`plus.openUrl`
- [分享](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/template/share/share.uvue)：`uni.shareWithSystem`
- 打开文件：`uni.openDocument`。[hello uts示例](https://gitcode.net/dcloud/hello-uts/-/blob/dev/uni_modules/uts-nativepage/utssdk/app-android/index.uts)、[插件市场](https://ext.dcloud.net.cn/plugin?id=12731)
- [扫码](https://ext.dcloud.net.cn/search?q=%E6%89%AB%E7%A0%81&cat1=8&type=UpdatedDate)：`uni.scanCode`
- [文件选择](https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9%80%89%E6%8B%A9&cat1=8&cat2=81)：`uni.chooseFile`
- [蓝牙](https://ext.dcloud.net.cn/search?q=%E8%93%9D%E7%89%99&orderBy=Relevance&cat1=8&cat2=81)
- [nfc](https://ext.dcloud.net.cn/search?q=nfc&orderBy=Relevance&cat1=8&cat2=81)

uni-app x 中不再支持plus和weex的API。过于plus api中一些常用的api，在uni-app x中进行了替换增补。
- plus.runtime.quit => [uni.exit](./exit.md)
- plus.runtime.install => [uni.installApk](./install-apk.md)
  
还有一些plus API未封装为 uni 的API，但可以直接使用如下代码调用。
- plus.runtime.openURL
```vue
<template>
	<view>
		<button @click="openSchema('https://uniapp.dcloud.io/uni-app-x')">使用浏览器打开指定URL</button>
		<button @click="openSchema('market://details?id=com.tencent.mm')">使用应用商店打开指定App</button>
	</view>
</template>
<script>
	import Intent from 'android.content.Intent';
	import Uri from 'android.net.Uri';
	export default {
		data() {
			return {}
		},
		methods: {
			openSchema(url : string) {
				const context = UTSAndroid.getUniActivity()!;
				const uri = Uri.parse(url)
				const intent = new Intent(Intent.ACTION_VIEW, uri)
				intent.setData(uri);
				context.startActivity(intent);
			}
		}
	}
</script>
```
  