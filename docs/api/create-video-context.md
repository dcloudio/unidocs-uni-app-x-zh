<!-- ## uni.createVideoContext(videoId, component?) @createvideocontext -->

<!-- UTSAPIJSON.createVideoContext.name -->

<!-- UTSAPIJSON.createVideoContext.description -->

参考：[video组件](../component/video.md)

<!-- UTSAPIJSON.createVideoContext.compatibility -->

<!-- UTSAPIJSON.createVideoContext.param -->

在video组件上设置id属性，即可通过本API获取该组件的上下文对象（videoContext ）。

在不传入第2个component参数时，默认从页面栈顶的页面来查找这个video。
```js
let v1 = uni.createVideoContext("video1")
```

但在页面、组件，可能出现id重复的情况，还可能因为调用时机的不同，想定位不同页面的video id。此时就需要传入第2个参数component。

所有vue组件都有ComponentPublicInstance实例，页面上也有组件实例。

如果传入组件实例，就从这个组件中查询指定的id。这样查找范围更小、查找速度也更快。

在选项式和组合式中，获取组件实例略有差别。

- 选项式中，this代表当前vue实例。如果是在页面的export default内、函数外使用this，即代表该页面的组件实例。
```js
let v1 = uni.createVideoContext("video1", this)
```
- 组合式中，通过getCurrentInstance()!.proxy! 获取当前页面的组件实例。
```js
let v1 = uni.createVideoContext("video1", getCurrentInstance()!.proxy!)
```
<!-- UTSAPIJSON.createVideoContext.returnValue -->

<!-- UTSAPIJSON.createVideoContext.example -->

<!-- UTSAPIJSON.createVideoContext.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

示例代码另见[video组件](../component/video.md)