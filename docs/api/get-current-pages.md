## getCurrentPages() @getcurrentpages

<!-- UTSAPIJSON.getCurrentPages.description -->

<!-- UTSAPIJSON.getCurrentPages.param -->

<!-- UTSAPIJSON.getCurrentPages.returnValue -->

**PageStyle**

支持 pages.json 下 `globalStyle` 节点属性和页面下 `style` 节点属性

当前版本仅支持的属性，后续实现其他属性

|属性										|类型		|Android｜iOS｜web｜默认值	|描述																																													|
|:-:										|:-:		|:-:    |:-: |:-: |:-:    |:-:|
|enablePullDownRefresh	|Boolean|4.13｜4.13｜4.13｜				|是否开启下拉刷新，详见页面[生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)。	|
|backgroundColorContent	|string	|4.15｜4.15｜x   ｜				|页面容器背景色																																									|

**注意事项**  
- app-ios平台：在page.json 中设置页面 `enablePullDownRefresh` 为 `false` 时，无法通过 `$setPageStyle` 方法动态开启页面下拉刷新 (app-ios平台在 `HBuilderX-4.15` 版本已修复该问题)
- web端由于会自动优化未使用的特性，如果整个项目中都没有使用到`enablePullDownRefresh`，那么此属性也无法动态切换

<!-- UTSAPIJSON.getCurrentPages.example -->

<!-- UTSAPIJSON.getCurrentPages.compatibility -->

<!-- UTSAPIJSON.getCurrentPages.tutorial -->

<!-- UTSAPIJSON.get-current-pages.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
