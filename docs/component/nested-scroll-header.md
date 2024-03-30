## nested-scroll-header

<!-- UTSCOMJSON.nested-scroll-header.description -->

<!-- UTSCOMJSON.nested-scroll-header.attribute -->

<!-- UTSCOMJSON.nested-scroll-header.event -->

### 使用场景

scroll-view 嵌套场景中。外层滚动 scroll-view 无法与内层 scroll-view 滚动衔接，内层 scroll-view 滚动时无法确定外层 scroll-view 滚动到哪里处理嵌套滚动。因此提供`nested-scroll-header`节点，存放外层 scroll-view 可被向下滑动出去的内容节点。内层 scroll-view 滚动会检测`nested-scroll-header`节点滚动位置实现约束内层 scroll-view 滚动逻辑。开发者只需将外层可被向下滑动出去的内容节点放置`nested-scroll-header`节点内即可。

<!-- UTSCOMJSON.nested-scroll-header.compatibility -->

<!-- UTSCOMJSON.nested-scroll-header.children -->

<!-- UTSCOMJSON.nested-scroll-header.example -->

<!-- UTSCOMJSON.nested-scroll-header.reference -->
