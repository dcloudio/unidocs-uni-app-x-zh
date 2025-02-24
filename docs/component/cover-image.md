## cover-image

<!-- UTSCOMJSON.cover-image.description -->

cover-image 在uni-app x的app、web、微信小程序上，已废弃，使用 image 即可。

在其他小程序平台，某些原生组件（如map、canvas、video）不支持同层渲染，仍需要 cover-image 来覆盖。

<!-- UTSCOMJSON.cover-image.compatibility -->

::: warning 注意
app 端并不是在运行时实现了 cover-image 组件，仅仅是编译器把 cover-image 编译为了 image。运行时获取到的Dom仍然是UniImageElement。

<!-- UTSCOMJSON.cover-image.attribute -->

<!-- UTSCOMJSON.cover-image.event -->

<!-- UTSCOMJSON.cover-image.component_type -->

<!-- UTSCOMJSON.cover-image.children -->

<!-- UTSCOMJSON.cover-image.example -->

<!-- UTSCOMJSON.cover-image.reference -->
