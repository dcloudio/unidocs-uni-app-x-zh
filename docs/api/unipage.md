## UniPage

<!-- CUSTOMTYPEJSON.UniPage.description -->

uni-app x中，每个页面都对应一个UniPage对象。

如果是dialogPage，也可以通过UniPage的getDialogPage方法获取。

通过UniPage对象，可以获取/修改页面的pageStyle，让pages.json中的页面设置可以动态修改；可以继续获取原生页面对象，如原生view；可以继续获取页面的vue示例，通过vm属性。

UniPage在App和Web平台较完善，在小程序端受小程序未开放，很多功能无法实现。具体见兼容性表格。

<!-- CUSTOMTYPEJSON.UniPage.extends -->

<!-- CUSTOMTYPEJSON.UniPage.param -->

<!-- CUSTOMTYPEJSON.UniPage.compatibility -->

### UniPage 的方法 @unipage-methods
<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.description -->

pages.json里的页面配置，即page下的style节点的内容，可以通过本API获取。但注意这里获取的是UniPage上的最终生效值，不是pages.json里的原始配置。

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.getPageStyle.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.setPageStyle.description -->

pages.json里的内容是静态的，通过本API可以动态设置UniPage的Style，但并非所有页面样式都支持动态配置，具体见下PageStyle。

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

<!-- CUSTOMTYPEJSON.UniPage.methods.createElement.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.createElement.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.createElement.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.createElement.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.createElement.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.createElement.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.createElement.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onLayoutChange.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onLayoutChange.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onLayoutChange.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onLayoutChange.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onLayoutChange.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onLayoutChange.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onLayoutChange.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offLayoutChange.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offLayoutChange.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offLayoutChange.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offLayoutChange.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offLayoutChange.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offLayoutChange.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offLayoutChange.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onRenderChange.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onRenderChange.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onRenderChange.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onRenderChange.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onRenderChange.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onRenderChange.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onRenderChange.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offRenderChange.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offRenderChange.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offRenderChange.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offRenderChange.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offRenderChange.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offRenderChange.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offRenderChange.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchStart.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchStart.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchStart.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchStart.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchStart.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchStart.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchStart.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchStart.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchStart.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchStart.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchStart.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchStart.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchStart.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchStart.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchEnd.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchEnd.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchEnd.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchEnd.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchEnd.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchEnd.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.onTouchEnd.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchEnd.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchEnd.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchEnd.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchEnd.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchEnd.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchEnd.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.offTouchEnd.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelector.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelector.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelector.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelector.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelector.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelector.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelector.tutorial -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelectorAll.name -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelectorAll.originName -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelectorAll.description -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelectorAll.compatibility -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelectorAll.param -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelectorAll.returnValue -->

<!-- CUSTOMTYPEJSON.UniPage.methods.querySelectorAll.tutorial -->

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

<!-- CUSTOMTYPEJSON.UniPage.example -->

<!-- UTSAPIJSON.getCurrentPages.example -->
