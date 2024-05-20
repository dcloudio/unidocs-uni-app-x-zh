# App.uvue

`App.uvue`是uni-app-x的主组件。

所有页面都是在`App.uvue`下进行切换的，是应用入口文件。但`App.uvue`本身不是页面，这里不能编写视图元素，也就是没有`<template>`。

这个文件的作用包括：监听应用生命周期、配置全局样式、配置全局的存储globalData

应用生命周期仅可在`App.uvue`中监听，在页面监听无效。

`App.uvue`仅支持选项式，暂不支持组合式写法。

## 应用生命周期@applifecycle

`uni-app-x` 支持如下应用生命周期函数：

|函数名|说明|平台兼容|
|:-|:-|:-|
|onLaunch|当`uni-app-x` 初始化完成时触发（全局只触发一次），参数为应用启动参数，同 [uni.getLaunchOptionsSync](../api/get-launch-options-sync.md#getlaunchoptionssync) 的返回值||
|onShow|当 `uni-app-x` 启动，或从后台进入前台显示，参数为应用启动参数，同 [uni.getLaunchOptionsSync](../api/get-launch-options-sync.md#getlaunchoptionssync) 的返回值||
|onHide|当 `uni-app-x` 从前台进入后台，包括手机息屏||
|onLastPageBackPress|最后一个页面按下Android back键，常用于自定义退出|app-uvue-android 3.9+|
|onExit|监听应用退出|app-uvue-android 3.9+|

**示例代码**
```html
<script lang="uts">
	// 只能在App.vue里监听应用的生命周期
	export default {
		onLaunch: function(options) {
			console.log('App Launch')
			console.log('应用启动路径：', options.path)
		},
		onShow: function(options) {
			console.log('App Show')
			console.log('应用启动路径：', options.path)
		},
		onHide: function() {
			console.log('App Hide')
		},
    onLastPageBackPress: function () {
      console.log('App LastPageBackPress')
			// 2秒内连按2次back，退出app
			if (firstBackTime == 0) {
				uni.showToast({
					title: '再按一次退出应用',
					position: 'bottom',
				})
				firstBackTime = Date.now()
				setTimeout(() => {
					firstBackTime = 0
				}, 2000)
			} else if (Date.now() - firstBackTime < 2000) {
				firstBackTime = Date.now()
				uni.exit()
			}
			// 还有一些应用按1次back直接将应用切到后台，详见https://doc.dcloud.net.cn/uni-app-x/api/exit.html#back
    }
	}
</script>
```

**注意**
- **应用生命周期仅可在`App.uvue`中监听，在其它页面监听无效**。
- 应用启动参数，可以在API `uni.getLaunchOptionsSync`获取，[详见](../api/get-launch-options-sync.md#getlaunchoptionssync)
- 由于Android的`uni.exit()`是[热退出](../api/exit.md)，此时很多代码逻辑仍然在运行，有些on的事件监听并没有off，需要开发者在onExit生命周期中编写代码处理。比如在app的onLaunch里通过onXX监听了某事件，那么就需要在onExit里调用offXX取消某事件的监听，否则反复热退出、启动，会多次on而不会off，这会引发内存泄露。

## globalData

> HBuilderX 3.99+

小程序有 globalData，这是一种简单的全局变量机制。这套机制在 uni-app-x 里也可以使用，并且全端通用。

**以下是 App.uvue 中定义globalData的相关配置：**

```ts
<script lang="uts">
  export default {  
    globalData: {  
      str: 'global data str',
      num: 123,
      bool: true 
    }
  }  
</script>  
```

页面或组件中通过 `getApp().globalData` 访问。

```ts
<script lang="uts">
  export default {  
    methods: {
      getGlobalData() {
        const app = getApp()
        this.globalDataStr = app.globalData.str
        this.globalDataNum = app.globalData.num
        this.globalDataBool = app.globalData.bool
      }
    }
  }
</script>
```

**注意：** `uni-app x` 中 `globalData` 的数据结构与类型通过 `App.uvue` 中的 `globalData` 初始值定义，后续只能读取或修改，不能新增或删除。

globalData是简单的全局变量，其他状态管理方式，可参考文档[全局变量和状态管理](../tutorial/store.md)。

## 全局样式

在`App.uvue`中，可以定义一些全局通用样式，这里定义的class，每个页面都可以直接使用。
