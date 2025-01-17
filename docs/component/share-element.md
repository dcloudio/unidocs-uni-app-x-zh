## share-element

<!-- UTSCOMJSON.share-element.description -->

共享元素组件，用于页面转场动画。指A、B 2个页面之间在动画时共享某个组件，这个组件在转场动画中通过特殊的动画从A页面的位置移动到B页面的位置。

常见场景有：
1. 商品列表的商品缩略图，点击进入商品详情页面时，把缩略图变成共享元素，放大到详情页面的新位置。
2. 相册应用，点击缩略图，先放大到详情页的大图位置，然后后台加载大图，完毕后再显示大图。
3. 视觉上跨页面一直显示的一个组件，比如播放条、悬浮球。

在hello uni-app x中，组件->视图容器下有共享元素示例，在模板->列表到详情 中也提供了演示。

注意共享元素组件仅指的是动画的视觉共享，并不是2个页面真的复用了同一个组件实例，不同页面的组件仍然是各自单独的实例。

<!-- UTSCOMJSON.share-element.compatibility -->

<!-- UTSCOMJSON.share-element.attribute -->

<!-- UTSCOMJSON.share-element.event -->

<!-- UTSCOMJSON.share-element.component_type -->

<!-- UTSCOMJSON.share-element.children -->

<!-- UTSCOMJSON.share-element.example -->

<!-- UTSCOMJSON.share-element.reference -->

