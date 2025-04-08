## UniPage

<!-- CUSTOMTYPEJSON.UniPage.description -->

uni-app x中，每个页面都对应一个UniPage对象。

如果是dialogPage，也可以通过UniPage的getDialogPage方法获取。

通过UniPage对象，可以获取/修改页面的pageStyle，让pages.json中的页面设置可以动态修改；可以继续获取原生页面对象，如原生view；可以继续获取页面的vue示例，通过vm属性。

UniPage在App和Web平台较完善，在小程序端受小程序未开放，很多功能无法实现。具体见兼容性表格。

<!-- CUSTOMTYPEJSON.UniPage.extends -->

<!-- CUSTOMTYPEJSON.UniPage.param -->

<!-- CUSTOMTYPEJSON.UniPage.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.example -->

### UniPage 的方法 @unipage-methods
<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.tutorial -->

::: warning 注意
- HBuilderX 4.31+，$getPageStyle和$setPageStyle不再需要加前缀$。
- 使用`选项式 API` 时，不可创建 `route`、`options` 同名响应式变量，否则会覆盖当前 `page 实例` 的同名属性。
- 4.31 前仅 `Web` 与 `iOS(非 uts 插件)` 端支持通过 `page.$vm` 获取 vue 实例。\
	4.31+ 仅 `iOS uts 插件` 环境不支持通过 `page.vm` 获取 vue 实例。
:::

**PageStyle**

支持当前页面 `style` 节点属性（注意并非所有 pages.json 的 pageStyle 都可以动态修改）

|属性                          |类型    |Android|iOS   |HarmonyOS|web  |默认值  |
|:-:                          |:-:    |:-:    |:-:  |:-:  |:-:  |:-:    |
|enablePullDownRefresh        |Boolean|4.13    |4.13  |4.61 |4.13  |false  |
|backgroundColorContent        |String  |4.15  |4.15  |4.61 |4.18  |#ffffff|
|navigationBarBackgroundColor  |String  |4.18  |4.18  |4.61 |4.18  |#007AFF|
|navigationBarTextStyle        |String  |4.18  |4.18  |4.61 |4.18  |white  |
|navigationBarTitleText        |String  |4.18  |4.18  |4.61 |4.18  |""    |
|navigationStyle              |String  |x      |x     |4.61 |4.18  |default|
|backgroundColor              |String  |4.18   |4.18  |4.61 |x     |#ffffff|
|backgroundTextStyle          |String  |4.31   |4.31  |x    |x     |dark  |
|onReachBottomDistance        |Number  |x      |x     |4.61 |4.18  |50      |
|pageOrientation              |String  |4.18   |4.25  |x    |x     |auto    |
|disableSwipeBack              |Boolean|x      |4.18  |x    |x     |false |
|hideStatusBar                  |Boolean|4.31  |x     |x    |x     |false|
|hideBottomNavigationIndicator  |Boolean|4.31  |x     |x    |x     |false|

**注意事项**
- web端由于会自动摇树优化未使用的特性，如果整个项目中都没有使用到下拉刷新`enablePullDownRefresh`，那么下拉刷新功能会被摇掉，此时设置打开下拉刷新将无效。
- app-android平台的页面是activity，不支持`backgroundColorContent`设为透明。
- 4.15版本前，app-ios平台在page.json 中设置页面 `enablePullDownRefresh` 为 `false` 时，无法通过 `$setPageStyle` 方法动态开启页面下拉刷新。新版已修复该问题。

<!-- CUSTOMTYPEJSON.UniPage.methods.getParentPage.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getParentPage.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getParentPage.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getParentPage.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getParentPage.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getParentPage.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getDialogPages.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getDialogPages.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getDialogPages.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getDialogPages.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getDialogPages.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getDialogPages.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getElementById.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getElementById.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getElementById.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getElementById.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getElementById.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getElementById.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidView.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidView.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidView.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidView.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidView.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidView.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidActivity.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidActivity.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidActivity.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidActivity.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidActivity.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getAndroidActivity.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getIOSView.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getIOSView.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getIOSView.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getIOSView.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getIOSView.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getIOSView.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getHTMLElement.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getHTMLElement.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getHTMLElement.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getHTMLElement.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getHTMLElement.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getHTMLElement.tutorial -->


<!-- CUSTOMTYPEJSON.UniPage.methods.exitFullscreen.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.exitFullscreen.description -->

用于逆转先前调用 [UniElement.requestFullscreen](/dom/unielement.md#requestfullscreen) 的效果。

<!-- CUSTOMTYPEJSON.UniPage.methods.exitFullscreen.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.exitFullscreen.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.exitFullscreen.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.exitFullscreen.tutorial -->


<!-- CUSTOMTYPEJSON.UniPage.methods.$setPageStyle.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$setPageStyle.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$setPageStyle.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$setPageStyle.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$setPageStyle.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$setPageStyle.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$getPageStyle.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$getPageStyle.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$getPageStyle.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$getPageStyle.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$getPageStyle.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.$getPageStyle.tutorial -->

<!-- UTSAPIJSON.getCurrentPages.example -->
