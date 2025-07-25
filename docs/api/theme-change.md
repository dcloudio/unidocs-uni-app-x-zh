## 主题light和dark

`iOS 13+`、`Android 10+` 提供了暗黑模式/深色模式，之前的模式称为light，暗黑称为dark。

同时也要注意，低于上述版本的手机，系统层没有暗黑模式概念。

在uni-app x中，有3种主题概念：OSTheme、hostTheme、appTheme。每种主题在不同平台支持度不同，获取、设置和监听变化的方式也不同。

|主题概念	|描述												|App|Web|小程序	|获取方式																			|设置方式												|监听变化							|
|--				|--													|--	|--	|--			|--																						|--															|--										|
|osTheme	|手机OS的当前主题							|√	|x	|x			|[uni.getDeviceInfo](./get-device-info.md)		|-															|[uni.onOsThemeChange](#onosthemechange)|
|hostTheme|浏览器或小程序宿主的当前主题	|x	|√	|√			|[uni.getAppBaseInfo](./get-app-base-info.md)		|-															|[uni.onHostThemeChange](#onhostthemechange)|
|appTheme	|App当前主题									|√	|X	|x			|[uni.getAppBaseInfo](./get-app-base-info.md)	|[uni.setAppTheme](#setapptheme)|[uni.onAppThemeChange](#onappthemechange)|

Web和小程序注意：
1. 没有能力获取os的主题。只能获取浏览器或小程序宿主的主题，即hostTheme。
2. 可以选择不响应hostTheme，也可以根据hostTheme调整自身的表现。
3. 某些浏览器或小程序自带API会涉及UI，其主题是跟随hostTheme来的，开发者的应用无法控制这些ui的主题。比如浏览器的alert()、小程序的showModal。

应用适配暗黑主题，可以选择：
1. 跟随上家，比如app平台跟随OSTheme，web和小程序跟随hostTheme。
2. 不跟随上家，应用自己独立设置主题。比如有的应用只有暗黑模式，有的应用给用户提供了主题选择列表，允许用户选择和osTheme不一样的主题。

一般情况下，独立设置主题的场景常见于App平台，所以App平台新增了appTheme的概念。appTheme有几个用途：
1. 独立于osTheme设置主题
2. 方便开发者和插件作者协作。推荐各个插件作者在涉及UI时，支持主题适配，响应App的主题变化
3. uni-app x框架自带的一些UI页面，比如showActionSheet、比如pages.json的页面设置，会响应appTheme的变化

开发者做主题适配时需考虑的内容范围：
1. 开发者自己的uvue代码
	大部分主题通过css设置，有部分ui需要通过组件的属性或内置API的参数来设置。

	web和小程序平台可以使用媒体查询来设置，但App平台暂不支持媒体查询。所以跨端的写法是，通过`uni.getAppBaseInfo`获取主题设置，保存到vue的响应式变量中，模板的class绑定响应式变量实现动态切换class。

	在hello uni-app x有示例，其在`app.uvue`的onLaunch中调用了`checkSystemTheme()`，该方法来自于`/store/index.uts`，获取当前的主题设置存放在响应式`state.isDarkMode`中。
	然后在组件`components/boolean-data/boolean-data.vue`中，设置computed()的`isDarkMode`，在template中通过响应式变量isDarkMode动态切换class。

2. [pages.json](../collocation/pagesjson.md)的页面设置，推荐通过[theme.json](../collocation/themejson.md)设置
3. web 端、小程序需要配置 [manifest.json](../collocation/manifest.md) 中 `web`、`mp-weixin` 根节点的 `"darkmode": true`。配置后如果不生效请重新编译运行
4. uni-app x的App和Web平台框架中自带的界面（小程序平台由小程序宿主自行适配，与uni-app x框架无关）
	- uni.showActionSheet（从HBuilderX 4.51起适配暗黑模式）
	- uni.showModal （暂未适配暗黑模式）
	- uni.chooseLocation （从HBuilderX 4.33起适配暗黑模式）
	- uni.openLocation （从HBuilderX 4.41起适配暗黑模式）
	- uni.chooseImage/chooseVideo/chooseMedia/chooseFile，当调用系统的选择界面时，该界面的主题跟随osTheme，应用层无法干预

注意：有些平台，os主题变化时会重启App，有些小程序宿主主题变化时会重启小程序，有些则不会。在会重启的场景下，监听主题变化其实没有意义。

<!-- ## uni.setAppTheme(options) @setapptheme -->

<!-- UTSAPIJSON.setAppTheme.name -->

<!-- UTSAPIJSON.setAppTheme.description -->

uni.setAppTheme，并不会帮助开发者自动实现整个应用的亮/暗主题切换，它的作用是：
1. 根据[theme.json](../collocation/themejson.md)，设置pages.json的亮/暗主题
2. 触发uni.onAppThemeChange，开发者和组件作者均可监听这个事件，自行响应将页面设置为对应的亮/暗风格。

当然组件作者也可以不监听onAppThemeChange，而是暴露主题切换API给开发者，由开发者监听主题切换，再调用组件的主题切换API。

目前uni-app x的内置组件和UI相关的API（比如showModal），并不会响应setAppTheme。组件是暴露了样式属性供开发者自行设置，Modal相关API目前没有样式设置，后续会升级支持。

<!-- UTSAPIJSON.setAppTheme.compatibility -->

<!-- UTSAPIJSON.setAppTheme.param -->

<!-- UTSAPIJSON.setAppTheme.returnValue -->

```uts
uni.setAppTheme({
  theme: "auto",
  success: function() {
    console.log("设置appTheme为 auto 成功")
  },
  fail: function(e: IAppThemeFail) {
    console.log("设置appTheme为 auto 失败,原因:", e.errMsg)
  }
})
```

<!-- UTSAPIJSON.setAppTheme.tutorial -->

<!-- ## uni.onAppThemeChange(callback) @onappthemechange -->

<!-- UTSAPIJSON.onAppThemeChange.name -->

<!-- UTSAPIJSON.onAppThemeChange.description -->

**版本历史调整**
- HBuilderX 4.18版本的逻辑是：[uni.setAppTheme](#setapptheme) 设置的 theme 值变化时触发本监听回调，回调参数中的 appTheme 值可能是"light" | "dark" | "auto"。在 app 平台设置应用的 theme 值为 auto 后，需再次查询osTheme来判断当前的真实主题。如果应用主题是auto，那么需要同时监听osTheme的变化。
- HBuilderX 4.19版本调整为：应用的light/dark主题真正发生变化时触发监听回调。无论是手动设置setAppTheme还是跟随osTheme变化，只要真正变化了就会触发本监听。回调参数中的 appTheme 值只能是"light" | "dark"。

<!-- UTSAPIJSON.onAppThemeChange.compatibility -->

<!-- UTSAPIJSON.onAppThemeChange.param -->

<!-- UTSAPIJSON.onAppThemeChange.returnValue -->

```uts
//callbackId 用于注销监听
val callbackId = uni.onAppThemeChange((res: AppThemeChangeResult) => {
  console.log("onAppThemeChange", res.appTheme)
})
```

<!-- UTSAPIJSON.onAppThemeChange.tutorial -->

<!-- ## uni.offAppThemeChange(id) @offappthemechange -->

<!-- UTSAPIJSON.offAppThemeChange.name -->

<!-- UTSAPIJSON.offAppThemeChange.description -->

<!-- UTSAPIJSON.offAppThemeChange.compatibility -->

<!-- UTSAPIJSON.offAppThemeChange.param -->

<!-- UTSAPIJSON.offAppThemeChange.returnValue -->

```uts
val callbackId = uni.onAppThemeChange((res: AppThemeChangeResult) => {
  console.log("onAppThemeChange", res.appTheme)
})
//...
//...
//注销监听
uni.offAppThemeChange(this.appThemeChangeId)
```

<!-- UTSAPIJSON.offAppThemeChange.tutorial -->

<!-- ## uni.onOsThemeChange(callback) @onosthemechange -->

<!-- UTSAPIJSON.onOsThemeChange.name -->

<!-- UTSAPIJSON.onOsThemeChange.description -->

<!-- UTSAPIJSON.onOsThemeChange.compatibility -->

<!-- UTSAPIJSON.onOsThemeChange.param -->

<!-- UTSAPIJSON.onOsThemeChange.returnValue -->

```uts
//callbackId 用于注销监听
val callbackId = uni.onOsThemeChange((res: OsThemeChangeResult)=> {
    console.log("onOsThemeChange---", res.osTheme)
})
```

<!-- UTSAPIJSON.onOsThemeChange.tutorial -->

**注意：**
+ android 10、iOS 13 才开始支持深色模式主题 `dark`，更低版本无法获取、监听OS的主题。
+ iOS平台应用在进入后台时，会分别截取 app 在 light 和 dark 模式下的截图，用于系统主题切换的同时对后台 app 预览视图进行切换，所以会切换多次 light/dark 模式，程序正常响应 change 事件即可，否则系统截取的图片可能会出现异常，如果确实有必要忽略这种情况下的 change 事件可以在 onHide 后自行忽略。

<!-- ## uni.offOsThemeChange(id) @offosthemechange -->

<!-- UTSAPIJSON.offOsThemeChange.name -->

<!-- UTSAPIJSON.offOsThemeChange.description -->

<!-- UTSAPIJSON.offOsThemeChange.compatibility -->

<!-- UTSAPIJSON.offOsThemeChange.param -->

<!-- UTSAPIJSON.offOsThemeChange.returnValue -->

```uts
val callbackId = uni.onOsThemeChange((res: OsThemeChangeResult)=> {
    console.log("onOsThemeChange---", res.osTheme)
})
...
...
//注销监听
uni.offOsThemeChange(callbackId)
```

<!-- UTSAPIJSON.offOsThemeChange.tutorial -->

<!-- UTSAPIJSON.offOsThemeChange.example -->

<!-- ## uni.onHostThemeChange(callback) @onhostthemechange -->

<!-- UTSAPIJSON.onHostThemeChange.name -->

<!-- UTSAPIJSON.onHostThemeChange.description -->

<!-- UTSAPIJSON.onHostThemeChange.compatibility -->

<!-- UTSAPIJSON.onHostThemeChange.param -->

<!-- UTSAPIJSON.onHostThemeChange.returnValue -->

<!-- UTSAPIJSON.onHostThemeChange.tutorial -->

<!-- UTSAPIJSON.onHostThemeChange.example -->

<!-- ## uni.offHostThemeChange(id) @offhostthemechange -->

<!-- UTSAPIJSON.offHostThemeChange.name -->

<!-- UTSAPIJSON.offHostThemeChange.description -->

<!-- UTSAPIJSON.offHostThemeChange.compatibility -->

<!-- UTSAPIJSON.offHostThemeChange.param -->

<!-- UTSAPIJSON.offHostThemeChange.returnValue -->

<!-- UTSAPIJSON.offHostThemeChange.tutorial -->

<!-- UTSAPIJSON.offHostThemeChange.example -->

<!-- UTSAPIJSON.onThemeChange.name -->

<!-- UTSAPIJSON.onThemeChange.description -->

<!-- UTSAPIJSON.onThemeChange.compatibility -->

<!-- UTSAPIJSON.onThemeChange.param -->

<!-- UTSAPIJSON.onThemeChange.returnValue -->

<!-- UTSAPIJSON.onThemeChange.tutorial -->

<!-- UTSAPIJSON.onThemeChange.example -->

<!-- UTSAPIJSON.offThemeChange.name -->

<!-- UTSAPIJSON.offThemeChange.description -->

<!-- UTSAPIJSON.offThemeChange.compatibility -->

<!-- UTSAPIJSON.offThemeChange.param -->

<!-- UTSAPIJSON.offThemeChange.returnValue -->

<!-- UTSAPIJSON.offThemeChange.tutorial -->

<!-- UTSAPIJSON.offThemeChange.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
