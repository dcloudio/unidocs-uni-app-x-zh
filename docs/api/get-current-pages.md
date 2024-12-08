## getCurrentPages() @getcurrentpages

<!-- UTSAPIJSON.getCurrentPages.description -->

HBuilderX 4.31+，强化了页面对象，新增了UniPage对象。getCurrentPages()返回值改为UniPage对象数组。

UniPage对象强化了开发者对页面的管理功能，并且支持在uts插件中使用。

`getCurrentPages()`获取的是主页面栈，不能直接获取[dialogPage](./dialog-page.md)页面。拿到主页面UniPage对象后，可以再通过getDialogPages()方法获取这个主页面的子弹窗页面栈。

通过`this.$page`，是另一种快速获取当前页面对象的方式。它得到的不是一个页面数组，而是一个具体的当前页面。并且这种方式支持主页面，也支持dialogPage。

<!-- UTSAPIJSON.getCurrentPages.compatibility -->

<!-- UTSAPIJSON.getCurrentPages.param -->

<!-- UTSAPIJSON.getCurrentPages.returnValue -->

::: warning 注意
- HBuilderX 4.31+，$getPageStyle和$setPageStyle不再需要加前缀$。
- 使用`选项式 API` 时，不可创建 `route`、`options` 同名响应式变量，否则会覆盖当前 `page 实例` 的同名属性。
- 4.31 前仅 `Web` 与 `iOS(非 uts 插件)` 端支持通过 `page.$vm` 获取 vue 实例。\
	4.31+ 仅 `iOS uts 插件` 环境不支持通过 `page.vm` 获取 vue 实例。
:::

**PageStyle**

支持当前页面 `style` 节点属性

|属性													|类型		|Android|iOS	|web	|默认值	|
|:-:													|:-:		|:-:		|:-:	|:-:	|:-:		|
|enablePullDownRefresh				|Boolean|4.13		|4.13	|4.13	|false	|
|backgroundColorContent				|String	|4.15		|4.15	|4.18	|#ffffff|
|navigationBarBackgroundColor	|String	|4.18		|4.18	|4.18	|#007AFF|
|navigationBarTextStyle				|String	|4.18		|4.18	|4.18	|white  |
|navigationBarTitleText				|String	|4.18		|4.18	|4.18	|				|
|navigationStyle							|String	|x   		|x  	|4.18	|default|
|backgroundColor							|String	|4.18   |4.18 |x		|#ffffff|
|backgroundTextStyle					|String	|4.31      |4.31    |x		|dark	|
|onReachBottomDistance				|Number	|x			|x		|4.18	|50			|
|pageOrientation							|String	|4.18		|4.25		|x		|auto		|
|disableSwipeBack							|Boolean|x		|4.18		|x		|false	|
|hideStatusBar                  |Boolean    |4.31   |x  |x  |false
|hideBottomNavigationIndicator  |Boolean    |4.31   |x  |x  |false

**注意事项**
- web端由于会自动摇树优化未使用的特性，如果整个项目中都没有使用到下拉刷新`enablePullDownRefresh`，那么下拉刷新功能会被摇掉，此时设置打开下拉刷新将无效。
- app-android平台的页面是activity，不支持`backgroundColorContent`设为透明。
- 4.15版本前，app-ios平台在page.json 中设置页面 `enablePullDownRefresh` 为 `false` 时，无法通过 `$setPageStyle` 方法动态开启页面下拉刷新。新版已修复该问题。

<!-- UTSAPIJSON.getCurrentPages.example -->

<!-- UTSAPIJSON.getCurrentPages.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* `4.32` 新增支持通过 `this.$page` 获取当前 `UniPage` 实例, 代码示例：
```js
// 选项式 API
const dialogPage = this.$page
// 组合式 API
const currentInstance = getCurrentInstance()
const dialogPage = instance?.proxy?.$page
```
