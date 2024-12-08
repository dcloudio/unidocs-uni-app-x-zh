## uni.setAppTheme(options) @setapptheme

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

## uni.onAppThemeChange(callback) @onappthemechange

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

## uni.offAppThemeChange(id) @offappthemechange

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

## uni.onOsThemeChange(callback) @onosthemechange

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

## uni.offOsThemeChange(id) @offosthemechange

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

## uni.onHostThemeChange(callback) @onhostthemechange

<!-- UTSAPIJSON.onHostThemeChange.description -->

<!-- UTSAPIJSON.onHostThemeChange.compatibility -->

<!-- UTSAPIJSON.onHostThemeChange.param -->

<!-- UTSAPIJSON.onHostThemeChange.returnValue -->

<!-- UTSAPIJSON.onHostThemeChange.tutorial -->

<!-- UTSAPIJSON.onHostThemeChange.example -->

## uni.offHostThemeChange(id) @offhostthemechange

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
