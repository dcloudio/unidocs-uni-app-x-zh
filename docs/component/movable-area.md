## movable-area

<!-- UTSCOMJSON.movable-area.description -->

<!-- UTSCOMJSON.movable-area.compatibility -->

之所以有movable-area和movable-view，是因为逻辑层和视图层分离，从视图层发送数据给逻辑层，处理后再传回视图层会产生损耗，导致拖动卡顿。

于是通过一个框架实现好的组件，在视图层内部处理拖动，避免来回通信。

在uni-app和小程序上确实存在这个问题，但在uni-app x的web和app上其实都不存在通信损耗。

在hello uni-app x里有示例，可以自由的监听view的拖动并移动其位置。[详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/component/general-event/touch-event.uvue)

<!-- UTSCOMJSON.movable-area.attribute -->

<!-- UTSCOMJSON.movable-area.event -->

<!-- UTSCOMJSON.movable-area.component_type -->

<!-- UTSCOMJSON.movable-area.children -->

<!-- UTSCOMJSON.movable-area.example -->

<!-- UTSCOMJSON.movable-area.reference -->

