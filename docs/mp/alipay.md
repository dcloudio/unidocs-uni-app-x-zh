# 编译到支付宝小程序端

> 新增于 5.0 版本

uni-app x 项目在编译到支付宝小程序平台时，将部分特性对齐了微信小程序、web与app端，因此和非uni-app x项目编译到支付宝小程序端略有差异。

## vue

### refs@refs

非 uni-app x 项目使用refs取内置组件引用时会获取到undefined，而 uni-app x 项目会获取到对应的UniElement。

## 其他差异

- 自 5.0 版本起，微信小程序将支持父组件设置子组件的class样式，[详见](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E5%BC%95%E7%94%A8%E9%A1%B5%E9%9D%A2%E6%88%96%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84%E6%A0%B7%E5%BC%8F)；支付宝小程序不支持。
- 支付宝 scroll-view 组件不支持 `enable-flex` 和 `enhanced` 属性。