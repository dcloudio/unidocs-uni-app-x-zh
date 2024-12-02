## flow-item

<!-- UTSCOMJSON.flow-item.description -->

<!-- UTSCOMJSON.flow-item.compatibility -->

waterflow 的子组件，配合 waterflow 内部业务实现 flow-item 回收复用，实现高性能的瀑布流长列表组件。flow-item 组件宽度由 waterflow 的 cross-axis-count 属性决定，所以设置与宽度相关的style样式都不生效。

flow-item 宽度计算公式：((waterflow的width - waterflow的左右的padding值域 - waterflow的border-width的值域) - (cross-axis-count - 1) * cross-axis-gap) / cross-axis-count

<!-- UTSCOMJSON.flow-item.attribute -->

### flow-item复用机制

waterflow 与 list-view 实现机制几乎一致，所以 flow-item 与 list-item 组件复用机制是一样的，请参考：[list-item复用机制](list-item.md#list-item复用机制)

<!-- UTSCOMJSON.flow-item.event -->

<!-- UTSCOMJSON.flow-item.component_type -->

<!-- UTSCOMJSON.flow-item.children -->

<!-- UTSCOMJSON.flow-item.example -->

<!-- UTSCOMJSON.flow-item.reference -->

