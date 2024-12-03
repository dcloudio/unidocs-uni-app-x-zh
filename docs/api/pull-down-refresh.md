## uni.startPullDownRefresh(options?) @startpulldownrefresh

<!-- UTSAPIJSON.startPullDownRefresh.description -->

<!-- UTSAPIJSON.startPullDownRefresh.compatibility -->

<!-- UTSAPIJSON.startPullDownRefresh.param -->

<!-- UTSAPIJSON.startPullDownRefresh.returnValue -->

<!-- UTSAPIJSON.startPullDownRefresh.tutorial -->

## uni.stopPullDownRefresh() @stoppulldownrefresh

<!-- UTSAPIJSON.stopPullDownRefresh.description -->

<!-- UTSAPIJSON.stopPullDownRefresh.compatibility -->

使用：
1. 首先pages.json里配置了页面可下拉刷新`"enablePullDownRefresh": true`
2. 当用户下拉页面时触发页面生命周期`onPullDownRefresh`，iOS平台触发时机：当下拉到一定阀值就会触发`onPullDownRefresh`，并不是当手势拖拽结束时触发
3. 在合适的时机（如联网刷新数据结束），调用本API`uni.stopPullDownRefresh()`，结束下拉刷新状态

本API仅负责页面下拉刷新。如使用组件下拉刷新，另见scroll-view、list-view等组件的文档。

<!-- UTSAPIJSON.stopPullDownRefresh.param -->

<!-- UTSAPIJSON.stopPullDownRefresh.returnValue -->

<!-- UTSAPIJSON.stopPullDownRefresh.example -->

<!-- UTSAPIJSON.stopPullDownRefresh.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
