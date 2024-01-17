## view

<!-- UTSCOMJSON.view.description -->

<!-- UTSCOMJSON.view.attrubute -->

### 说明

- 为什么使用`hover-class`？使用 css :active伪类来实现点击态，很容易触发，并且滚动或滑动时点击态不会消失，体验较差。建议使用 `hover-class` 属性来实现


<!-- UTSCOMJSON.view.event -->

<!-- UTSCOMJSON.view.example -->

<!-- UTSCOMJSON.view.compatibility -->

<!-- UTSCOMJSON.view.children -->

#### App平台
- `hover-class`属性Android端与微信小程序的差别：在长按进入hover-class样式，微信小程序只要手指移动就会退出hover-class的样式，而Android端效果是手指移动到view范围之外才会取消hover-class样式。



<!-- UTSCOMJSON.view.reference -->

view是Drawable的组件，也就是可以在view上调用绘制API自绘内容。它类似canvas，但不需要单独的canvas组件，在view上就可以直接draw。[详见](../dom/drawablecontext.md)
