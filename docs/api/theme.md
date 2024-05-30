## uni.setAppTheme(options) @setapptheme

<!-- UTSAPIJSON.setAppTheme.description -->

<!-- UTSAPIJSON.setAppTheme.compatibility -->

<!-- UTSAPIJSON.setAppTheme.param -->

<!-- UTSAPIJSON.setAppTheme.returnValue -->

```uts
uni.setAppTheme({
  theme: "auto",
  success: function() {
    console.log("设置appTheme为", value, "成功")
  },
  fail: function(e: IAppThemeFail) {
    console.log("设置appTheme为", value, "失败,原因:", e.errMsg)
  }
})
```

<!-- UTSAPIJSON.setAppTheme.tutorial -->

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
+ android 平台 android版本 10 开始支持深色模式主题 `dark`，低于10不支持深色模式主题

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

## uni.onAppThemeChange(callback) @onappthemechange

<!-- UTSAPIJSON.onAppThemeChange.description -->

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
...
...
//注销监听
uni.offAppThemeChange(this.appThemeChangeId)
```

<!-- UTSAPIJSON.offAppThemeChange.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
