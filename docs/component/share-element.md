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


### 指定飞跃物

开发者可以指定选定源页面或目标页的 `share-element` 作为飞跃物

假定 `A` 页和 `B` 页存在对应的 `share-element` 组件

#### push 阶段

+ 通过 uni.navigateTo 由 `A` 进入 `B`，称 `A` 为源页面（from 页)，`B` 为目标页（to 页)
+ 默认采用 `B` 页的 `share-element` 组件进行飞跃，设置属性 shuttle-on-push=from 可切换成 A 页的 `share-element` 组件

<img src="https://web-ext-storage.dcloud.net.cn/uni-app-x/component/share-element/share-element-01.png" width="600" height="378">

#### pop 阶段

+ 通过 uni.navigateBack 由 `B` 返回 `A`，此时 `B` 为源页面 (from 页)， `A` 为目标页（to 页）
+ 默认采用 `A `页的 `share-element` 组件，设置属性 shuttle-on-pop=from 可切换成 `B` 页的 `share-element` 组件

<img src="https://web-ext-storage.dcloud.net.cn/uni-app-x/component/share-element/share-element-02.png" width="600" height="378">

#### 注意事项

+ android平台不支持设定shuttle-on-push、shuttle-on-pop，push阶段飞跃物是 `B` 页面（to 页)的 `share-element` 组件，pop阶段飞跃物也是 `B` 页面(from 页)的 `share-element` 组件
+ `share-element` 组件执行共享元素动画过程中会将 `share-element` 的`飞跃物`显示在页面最顶层，这会导致部分场景原本被其他元素遮挡的 `share-element` 会显示完整内容，这是为了更好的过度穿越效果并非Bug

### 用法

`A` 页面

```html
<template>
	<view style="flex: 1;">
		<share-element style="width: 200px;height: 200px;" share-key="box" >
			<view style="width: 200px;height: 200px; background-color: red;"></view>
		</share-element>
	</view>
</template>
```

`B` 页面

```html
<template>
	<view style="flex: 1;">
		<share-element style="width: 400px;height: 400px;" share-key="box" >
			<view style="width: 400px;height: 400px; background-color: red;"></view>
		</share-element>
	</view>
</template>
```

`A` 和 `B` 页面分别设置 `share-element` 的 share-key 属性值，需要一致并且唯一，这样两个共享元素则会建立共享关系，切页动画时则会触发共享元素过度动画效果。

<!-- UTSCOMJSON.share-element.event -->

<!-- UTSCOMJSON.share-element.component_type -->

<!-- UTSCOMJSON.share-element.children -->

<!-- UTSCOMJSON.share-element.example -->

<!-- UTSCOMJSON.share-element.reference -->

