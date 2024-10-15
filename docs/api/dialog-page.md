## uni.openDialogPage(options) @opendialogpage

<!-- UTSAPIJSON.openDialogPage.description -->

<!-- UTSAPIJSON.openDialogPage.compatibility -->

<!-- UTSAPIJSON.openDialogPage.param -->

<!-- UTSAPIJSON.openDialogPage.returnValue -->

<!-- UTSAPIJSON.openDialogPage.example -->

<!-- UTSAPIJSON.openDialogPage.tutorial -->

## uni.closeDialogPage(options?) @closedialogpage

<!-- UTSAPIJSON.closeDialogPage.description -->

<!-- UTSAPIJSON.closeDialogPage.compatibility -->

<!-- UTSAPIJSON.closeDialogPage.param -->

<!-- UTSAPIJSON.closeDialogPage.returnValue -->

<!-- UTSAPIJSON.closeDialogPage.example -->

<!-- UTSAPIJSON.closeDialogPage.tutorial -->

<!-- UTSAPIJSON.dialogPage.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* `dialogPage` 背景固定为透明，不支持设置背景颜色。
* 每个 `dialogPage` 都会与普通 `page` 进行关联，也就是 `dialogPage` 的所属页面，`dialogPage` 可通过 `getParentPage` 方法获取所属页面。
* `dialogPage` 不影响页面栈和路由地址，可通过如下方式获取 `dialogPage`。
```js
// 1. 通过 parentPage 获取 dialogPage 集合
const pages = getCurrentPages()
// 获取当前页面
const page = pages[pages.length-1]
// 获取当前页面的 `dialogPage` 集合
const dialogPages = page.getDialogPages()

// 2. 在 dialogPage 中通过 this.$page 获取 dialogPage 实例
const dialogPage = this.$page
```
* `openDialogPage` 时可通过 `parentPage` 参数指定所属页面，不指定时默认为当前页面。\
在 `app onLaunch` 调用 `openDialogPage`, `dialogPage` 的 `parentPage` 为首页。
* `dialogPage` 不响应 `iOS` 侧滑返回，响应 `Android` 的 back 键和 back 手势。
* `dialogPage` 有页面的所有生命周期，且不影响 `parentPage` 的生命周期。\
新的 `dialogPage` 会触发当前 `dialogPage` `onHide` 生命周期， 当前 `dialogPage` 关闭会触发前一个 `dialogPage` `onShow` 生命周期。
* `dialogPage` 中可以调用路由 API，比如 `uni.navigateTo`、`uni.navigateBack`，路由 API不会作用于 `dialogPage`。
* `closeDialogPage` 可通过 `dialogPage` 参数指定要关闭的 `dialogPage`, 不指定时默认关闭当前页面的所有 `dialogPage`。
* `parentPage` 销毁时，其关联的 `dialogPage` 也会被销毁。