## view

<!-- UTSCOMJSON.view.description -->

<!-- UTSCOMJSON.view.attrubute -->

#### 说明

- 为什么使用`hover-class`？使用 css :active伪类来实现点击态，很容易触发，并且滚动或滑动时点击态不会消失，体验较差。建议使用 `hover-class` 属性来实现


<!-- UTSCOMJSON.view.event -->

<!-- UTSCOMJSON.view.example -->

<!-- UTSCOMJSON.view.compatibility -->

#### App平台@app
- HBuilder4.0以下版本`hover-class`属性App端与微信小程序效果一样，手指按下进入`hover-class`状态后，手指移动就会取消`hover-class`状态  
- HBuilder4.0及以上版本App端调整为手指在view范围内移动不会取消`hover-class`状态，手指移动到view范围之外才会取消`hover-class`状态  


<!-- UTSCOMJSON.view.children -->

<!-- UTSCOMJSON.view.reference -->

view是Drawable的组件，也就是可以在view上调用绘制API自绘内容。它类似canvas，但不需要单独的canvas组件，在view上就可以直接draw。[详见](../dom/drawablecontext.md)
