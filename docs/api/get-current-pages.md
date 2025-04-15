## getCurrentPages() @getcurrentpages

<!-- UTSAPIJSON.getCurrentPages.description -->

HBuilderX 4.31+，强化了页面对象，新增了UniPage对象。getCurrentPages()返回值改为UniPage对象数组。

UniPage对象强化了开发者对页面的管理功能，并且支持在uts插件中使用。

`getCurrentPages()`获取的是主页面栈，不能直接获取[dialogPage](./dialog-page.md)页面。拿到主页面UniPage对象后，可以再通过getDialogPages()方法获取这个主页面的子弹窗页面栈。

选项式的vue中通过`this.$page`，是另一种快速获取当前页面对象的方式。它得到的不是一个页面数组，而是一个具体的当前页面。并且这种方式支持主页面，也支持dialogPage。组合式写法[见下](#tips)

<!-- UTSAPIJSON.getCurrentPages.compatibility -->

<!-- UTSAPIJSON.getCurrentPages.param -->

<!-- UTSAPIJSON.getCurrentPages.returnValue -->

`getCurrentPages()`返回了UniPage对象数组。

每个页面是一个UniPage对象，这个对象上有较多方法，比如获取/修改pageStyle、获取高宽和安全区等。[详见](./unipage.md)

<!-- UTSAPIJSON.getCurrentPages.example -->

<!-- UTSAPIJSON.getCurrentPages.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 直接获取当前页面的UniPage@currentpage
* `4.32` 新增选项式通过 `this.$page` 获取当前 `UniPage` 实例, 组合式通过`getCurrentInstance`，代码示例：
```js
// 选项式 API
const dialogPage = this.$page
// 组合式 API
const currentInstance = getCurrentInstance()
const dialogPage = instance?.proxy?.$page
```
