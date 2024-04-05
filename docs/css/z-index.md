## z-index


<!-- CSSJSON.z-index.description -->

<!-- CSSJSON.z-index.syntax -->

<!-- CSSJSON.z-index.values -->

<!-- CSSJSON.z-index.defaultValue -->

在uni-app x 4.11以前，web平台的默认值为auto。从4.11+，web平台与app拉齐，默认值统一为0。

<!-- CSSJSON.z-index.unixTags -->

<!-- CSSJSON.z-index.compatibility -->

### Bug & Tips@tips
- App平台仅对同级的兄弟元素之间支持 z-index 来调节，同级元素中 z-index 较大的元素会覆盖较小的元素在上层进行显示，没有设置 z-index 值时，同级元素中写在后面的元素覆盖写在前面的元素。
- App平台元素设置position为fixed时，会将元素调整到根节点，此时z-index会在根节点中比较确定覆盖关系。
- App 平台 list-view 的子组件 list-item 有复用优化机制，list-item 组件不支持 z-index 属性。

<!-- CSSJSON.z-index.reference -->
