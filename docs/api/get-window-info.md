## uni.getWindowInfo() @getwindowinfo

<!-- UTSAPIJSON.getWindowInfo.description -->

<!-- UTSAPIJSON.getWindowInfo.compatibility -->

<!-- UTSAPIJSON.getWindowInfo.param -->

<!-- UTSAPIJSON.getWindowInfo.returnValue -->

::: warning 注意事项
- Android端的`windowHeight`属性是有时机的考量的，如果在全局作用域获取`windowHeight`，有可能当前Activity还未加载，所以导航栏和Tabbar的高度是不会计算进去的，稳妥起见，建议在`onReady`或者`onPageShow`内获取`windowheight`。
- `windowHeight`属性是依赖于调用Api时栈顶Page的，比如延迟获取`windowHeight`，很可能页面已经切换了，这时候获取的高度是新的页面的。
- 4.25开始，Android端安全区域top调整为手机状态栏高度
:::

<!-- UTSAPIJSON.getWindowInfo.example -->

<!-- UTSAPIJSON.getWindowInfo.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
