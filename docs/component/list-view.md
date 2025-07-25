<!-- ## list-view -->

<!-- UTSCOMJSON.list-view.name -->

<!-- UTSCOMJSON.list-view.description -->

list-view和scroll-view都是滚动组件，list适用于长列表场景，其他场景适用于scroll-view。

在App中，基于recycle-view的list，才能实现长列表的渲染资源复用，以保障列表加载很多项目时，不会一直增加渲染内容。list-view就是基于recycle-view的list组件。

每个list由1个父组件list-view及若干子组件list-item构成。仅有有限子组件可识别，[见下](#children-tags)

<!-- UTSCOMJSON.list-view.compatibility -->

目前微信小程序下，list-view被编译为scroll-view。目前uni-app x还未优化skyline的配置，未来会把list-view编译为skyline的list-view。

<!-- UTSCOMJSON.list-view.attribute -->

<!-- UTSCOMJSON.list-view.event -->

<!-- UTSCOMJSON.list-view.component_type-->

### 自定义下拉刷新样式

list-view组件有默认的下拉刷新样式，如果想自定义，则需使用自定义下拉刷新。

1. 设置`refresher-default-style`属性为 none 不使用默认样式
2. 设置 list-item 定义自定义下拉刷新元素并声明为 `slot="refresher"`，需要设置刷新元素宽高信息否则可能无法正常显示！
   ```html
   <template>
   	<list-view refresher-default-style="none" :refresher-enabled="true" :refresher-triggered="refresherTriggered"
   			 @refresherpulling="onRefresherpulling" @refresherrefresh="onRefresherrefresh"
   			 @refresherrestore="onRefresherrestore" style="flex:1" >

   		<list-item v-for="i in 10" class="content-item">
   			<text class="text">item-{{i}}</text>
   		</list-item>

   		<!-- 自定义下拉刷新元素 -->
   		<list-item slot="refresher" class="refresh-box">
   			<text class="tip-text">{{text[state]}}</text>
   		</list-item>
   	</list-view>
   </template>
   ```
3. 通过组件提供的refresherpulling、refresherrefresh、refresherrestore、refresherabort下拉刷新事件调整自定义下拉刷新元素！实现预期效果

**注意：**
+ 3.93版本开始支持
+ 目前自定义下拉刷新元素不支持放在list-view的首个子元素位置上。可能无法正常显示

### 嵌套模式

scroll-view开启嵌套模式后，list-view 可作为内层滚动视图与外层 scroll-view 实现嵌套滚动

设置内层 list-view 的 `associative-container` 属性为 "nested-scroll-view"，开启内层 list-view 支持与外层 scroll-view 嵌套滚动

<!-- UTSCOMJSON.list-view.children -->

子组件sticky-header/section用于处理吸顶的场景。

<!-- UTSCOMJSON.list-view.example -->

<!-- UTSCOMJSON.list-view.reference -->

## 性能优化
长列表是非常需要注意性能优化的。
当你的长列表卡顿时，请注意：

1. 尽可能减少列表item中的组件数量。
2. 排查代码的内存泄漏，尤其是on后没有off。
3. 不要一次性加载太多数据，而是分批加载。
4. 对VNode、DOM进行虚拟化

这些技巧另有专门[教程](../performance.md#长列表)


## 示例代码

- 联网联表：[https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/list-news/list-news.uvue)
- 可左右滑动的多个列表：[https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/master/pages/template/long-list)
- 分批加载列表：[https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/long-list-batch/long-list-batch.uvue](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/long-list-batch/long-list-batch.uvue)

### Bug & Tips@tips

- 如需im那样的倒序列表，App端可给组件style配置 `transform: rotate(180deg)` 来实现。注意与下拉刷新有冲突，此时应避免启用下拉刷新。
- list-view组件的overflow属性不支持配置visible
- list-view组件不适合做瀑布流，多列瀑布流另见 [waterflow组件](./waterflow.md)
