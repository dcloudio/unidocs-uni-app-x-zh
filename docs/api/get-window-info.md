## uni.getWindowInfo() @getwindowinfo

<!-- UTSAPIJSON.getWindowInfo.description -->

<!-- UTSAPIJSON.getWindowInfo.compatibility -->

<!-- UTSAPIJSON.getWindowInfo.param -->

<!-- UTSAPIJSON.getWindowInfo.returnValue -->

下图标注了各区域信息

![](https://web-ext-storage.dcloud.net.cn/uni-app-x/API/getWindowInfo/size.png)

### 安全区域说明

由于部分手机屏幕有顶部的“刘海”和底部导航的存在，为了确保内容区域不被遮挡，提出了安全区域，以便于在安全区域内布局。

app-android平台全屏模式下分安全区域字段说明：
- safeArea.top : statusBarHeight
- safeArea.bottom: statusBarHeight + 标题栏高度 + windowHeight + tabbar高度
- safeArea.height: safeArea.bottom - safeArea.top

iOS端safeArea与iOS原生的安全区域概念相同，top与bottom分别对应`window.safeAreaInsets.top` `window.safeAreaInsets.bottom`，具体请参照[Apple文档](https://developer.apple.com/documentation/uikit/uiview/positioning_content_relative_to_the_safe_area)

::: warning 注意事项
- `screenWidth`/`screenHeight`获取的是设备屏幕宽高信息
    + app平台应用在非全屏模式（如“浮窗”或“分屏”）时，仍然返回的设备屏幕的宽高
- `windowWidth`/`windowHeight`获取的是当前栈顶页面的可使用窗口宽高信息，调用此API前如果打开了新页面，可能获取到的是新开页面的信息
    + app平台需要在页面渲染后才能获取到准确信息，稳妥起见，建议在页面生命周期`onReady`后获取
- `statusBarHeight`获取的是系统状态栏高度
    + app-Android平台横屏时获取的状态栏高度与竖屏一致
    + app-iOS平台横屏时获取的状态栏高度为0，与竖屏时获取的高度不一致
- `windowTop`/`windowBottom` 在app平台页面内容无法渲染顶部默认导航栏或底部tabBar区域，返回的值一定为0
- HBuilderX4.25版本开始，app-android平台返回的安全区域的 top 属性值调整为手机状态栏高度
:::

<!-- UTSAPIJSON.getWindowInfo.example -->

<!-- UTSAPIJSON.getWindowInfo.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
