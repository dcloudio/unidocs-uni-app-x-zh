# 编译到支付宝小程序端

> 新增于 5.0 版本

uni-app x 项目在编译到支付宝小程序平台时，将部分特性对齐了微信小程序、web与app端，因此和非uni-app x项目编译到支付宝小程序端略有差异。

## vue

### refs@refs

非 uni-app x 项目使用 refs 取内置组件引用时会获取到undefined，而 uni-app x 项目会获取到对应的 UniElement。

**注意**  

全局配置不能设置 `component2` 为 false，否则会影响 refs 相关功能的正常使用。

## dom

### UniElement

支付宝小程序大多数方法注意事项和微信小程序一致，[参考](weixin.md#unielement)，不同点如下：

- ref 绑定在 scroll-view 组件上时，由于没有 `ScrollViewContext`，因此与之相关的 API，如：scrollTo、scrollIntoView 均不能使用

### 事件

支付宝小程序由于 click、tap 事件无法获取 touches 参数，因此不能通过 event 获取如下参数

- screenX
- screenY

## css

### :host 选择器

`自定义组件` 可以使用 :host 选择器来指定该自定义组件的默认样式，需要主动设置开启 `virtualHost: false`，否则不生效。

而微信小程序无此限制，可同时用于页面或者组件的样式修改。

## 其他差异

- 支付宝小程序不支持父组件设置子组件的class样式。
- 支付宝 scroll-view 组件不支持 `enable-flex` 和 `enhanced` 属性。