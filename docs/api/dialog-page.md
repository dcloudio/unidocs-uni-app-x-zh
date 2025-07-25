## dialogPage概述
HBuilderX 4.31+新增了dialogPage，适用于制作弹框和内置界面。

### 需求背景
- uni.showModal、actionsheet，自定义性不足
- 通过前端组件实现的弹框，无法覆盖pages.json的导航栏和tabbar
- 前端实现的弹框，无法拦截back按键，一点back整页关了
- 组件方式实现弹框，需要每个页面都引入组件，写法较麻烦
- 部分内置API涉及界面但没有统一管理，比如chooseLocation、previewImage等。

### dialogPage方案
dialogPage是一种背景透明的页面，可以覆盖pages.json中的导航栏和tabbar。之前的page被称为主page或parentPage。dialogPage需要挂在主page上。

dialogPage是一种特殊的page，它和主page有很多相同之处：
- dialogPage需在pages.json注册
- dialogPage有页面生命周期，onLoad里也可以拿到各种参数
- dialogPage里如果引用了组件，对于组件而言，其page就是dialogPage。组合式组件中监听onPageShow，是监听dialogPage，而不是dialogPage的parentPage。
- dialogPage可以通过uni.$on等eventbus方案进行页面级通信

dialogPage和主page的区别：
- dialogPage的背景固定为透明、大小为铺满应用。蒙层由页面内部实现，蒙层颜色、是否响应点击，均由页面内部处理。如果是模态，蒙层不应该允许点击；非模态，则点击蒙层应关闭dialogPage
- dialogPage不使用uni.navigatorTo等路由API，而是单独提供了`openDialogPage`和`closeDialogPage`
- dialogPage不影响页面栈和路由地址，在getCurrentPages里不能直接得到dialogPage（需在UniPage对象通过getDialogPages获取）
- 因为dialogPage不进入主页面栈，那么`uni.getElementById`是无法获取到dialogPage内的元素的。因为uni这个全局API是获取栈顶元素。如果想获取指定页面的元素，需获取到指定页面的UniPage对象，在这个对象上使用.getElementById方法。如果想获取当前dialogPage页面的元素，应该使用`this.$page.getElementById()`。
- dialogPage在Android上并不是一个activity，而是一个全屏view，它和主page所属同一个activity。
- dialogPage默认不响应iOS侧滑返回，即disableSwipeBack默认值为true，可以在pages.json中进行配置。响应Android和Harmony的back键和back手势，可通过dialogPage onBackPress生命周期控制是否阻止Android的back键和back手势关闭dialogPage。
- dialogPage默认不影响调用页面或其parentPage的show、hide生命周期。如需影响，比如弹出全屏界面时，需手动设置triggerParentHide
- dialogPage中可以调用普通路由api，比如uni.navigateTo、navigateBack，但并不作用于dialogPage，而是作用于其parentPage。即，之前的路由API均只作用于主Page。
- 在web平台，dialogPage显示时，不影响URL的变化。
- dialogPage默认没有窗体动画。如果是半屏内容，建议在页面内通过css或uts操作页面元素进行动画，灵活度更高。如果是全屏界面，可以使用窗体动画，但没有popin这种与上一个页面的联动动画。

dialogPage的绑定：
- dialogPage需绑定在某个主页面上，即parentPage。parentPage页面关闭时，自动销毁相关dialogPage。
- 在app的onLaunch调用openDialogPage，绑定到首页。
- `openDialogPage` 时可通过 `parentPage` 参数指定所属页面，不指定时默认为当前页面。

多dialogPage注意事项：
- dialogPage可以有多个，通过UniPage对象的getDialogPages()可以获取主页面挂载的所有dialogPage。
- 多个dialogPage层叠时，可以通过close api任意关闭某个dialogPage。
- 当前 dialogPage 关闭会触发前一个 dialogPage onShow 生命周期

调用时机注意事项：
- 最早的调用时机是在app的onLaunch里调用openDialogPage，不支持在main.uts中调用openDialogPage。

app-android平台注意事项：  
- dialogPage不会创建Android原生Activity，复用parentPage的Android原生Activity。

<!-- ## uni.openDialogPage(options) @opendialogpage -->

<!-- UTSAPIJSON.openDialogPage.name -->

<!-- UTSAPIJSON.openDialogPage.description -->

<!-- UTSAPIJSON.openDialogPage.compatibility -->

<!-- UTSAPIJSON.openDialogPage.param -->

<!-- UTSAPIJSON.openDialogPage.returnValue -->

<!-- UTSAPIJSON.openDialogPage.example -->

<!-- UTSAPIJSON.openDialogPage.tutorial -->

<!-- ## uni.closeDialogPage(options?) @closedialogpage -->

<!-- UTSAPIJSON.closeDialogPage.name -->

<!-- UTSAPIJSON.closeDialogPage.description -->

`closeDialogPage` 可通过 `dialogPage` 参数指定要关闭的 `dialogPage`, 不指定时默认关闭当前页面的所有 `dialogPage`。

<!-- UTSAPIJSON.closeDialogPage.compatibility -->

<!-- UTSAPIJSON.closeDialogPage.param -->

<!-- UTSAPIJSON.closeDialogPage.returnValue -->

<!-- UTSAPIJSON.closeDialogPage.example -->

<!-- UTSAPIJSON.closeDialogPage.tutorial -->

<!-- UTSAPIJSON.dialogPage.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* 可通过如下方式获取 `dialogPage`。
```js
// 1. 通过 parentPage 获取 dialogPage 集合
const pages = getCurrentPages()
// 获取当前页面
const page = pages[pages.length-1]
// 获取当前页面的 `dialogPage` 集合
const dialogPages = page.getDialogPages()

// 2. 在 dialogPage 中通过 this.$page 获取 dialogPage 实例 (组件中不支持)
// 选项式 API
const dialogPage = this.$page
// 组合式 API
const currentInstance = getCurrentInstance()
const dialogPage = instance?.proxy?.$page
```
* tabBar 页面中的 `dialogPage`，在 App 端不会随 tabBar 页面切换而隐藏，在 Web 端会随 tabBar 页面切换而隐藏。\
即：在 tabA 页面打开 dialogPage 后 switchTab 到 tabB 页面
在 App 端 dialogPage 仍会显示,\
在 Web 端 dialogPage 会隐藏，再次 switchTab 到 tabA 页面 dialogPage 会显示。
