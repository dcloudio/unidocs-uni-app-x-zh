## 简介
uni-app x 原生SDK是为原生工程师提供的开发工具包，把uni-app x的runtime封装为原生开发调用的接口。开发者可以在自己的 Android 及 iOS 原生开发环境配置工程使用，包括 Android原生SDK 及 iOS原生SDK。

## 功能
uni-app x 原生SDK主要用于既有的原生项目，通过集成uni-app x sdk，实现跨平台提升效率和渐进式迁移，让部分页面或应用通过uni-app x来实现。

当然本sdk也可以用于App本地离线打包，相当于新建一个空的原生项目，把uni-app x sdk集成进去然后本地打包。

- App离线打包：

	对应HBuilderX的云端打包功能，`uni-app x`项目发行为原生App时，无需将App资源及打包要使用的签名证书等提交到云端打包服务器，在开发者本地配置的原生开发环境中生成安装包apk/ipa。
		
	+ [Android平台App本地离线打包](use/android.md)
	+ iOS平台App本地离线打包（暂不支持）
