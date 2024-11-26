## transform


<!-- CSSJSON.transform.description -->

<!-- CSSJSON.transform.syntax -->

<!-- CSSJSON.transform.values -->

<!-- CSSJSON.transform.defaultValue -->

<!-- CSSJSON.transform.unixTags -->


web中经常使用scaleY缩放一个1px的线条变成0.5px的细线。这个方案在app也适用。示例如下：
```html
<view style="width: 750rpx; height: 1px; background-color: #000; transform: scaleY(0.5)"></view>
```

**注意事项**：iOS 平台设置了`rotateX(<angle>)`、`rotateY(<angle>)`、`rotateZ(<angle>)`的组件视图是在三维空间中的旋转具有穿透效果，会被同一层级中其他组件视图遮盖住穿透的部分，如果不想被遮盖同层级中请不要存在其他组件。

<!-- CSSJSON.transform.compatibility -->

<!-- CSSJSON.transform.example -->

<!-- CSSJSON.transform.reference -->
