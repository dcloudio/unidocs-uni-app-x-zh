## waterflow

<!-- UTSCOMJSON.waterflow.description -->

<!-- UTSCOMJSON.waterflow.compatibility -->

在App中，waterflow 底层实现与list-view底层实现方式基本一致，仅子组件排列方式存在差异，适用于多元素瀑布流长列表场景，子组件滑动出屏幕会及时回收复用。性能优于 scroll-view 

> waterflow 暂时只支持 flow-item 组件为子组件，其他组件不可见

> waterflow 只支持竖向滚动，暂时不支持横向滚动

<!-- UTSCOMJSON.waterflow.attribute -->

<!-- UTSCOMJSON.waterflow.event -->

<!-- UTSCOMJSON.waterflow.component_type -->

### 自定义下拉刷新样式

waterflow组件有默认的下拉刷新样式，如果想自定义，则需使用自定义下拉刷新。

1. 设置`refresher-default-style`属性为 none 不使用默认样式
2. 设置 flow-item 定义自定义下拉刷新元素并声明为 `slot="refresher"`，需要设置刷新元素宽高信息否则可能无法正常显示！
   ```html
   <template>
   	<waterflow refresher-default-style="none" :refresher-enabled="true" :refresher-triggered="refresherTriggered"
   			 @refresherpulling="onRefresherpulling" @refresherrefresh="onRefresherrefresh"
   			 @refresherrestore="onRefresherrestore" style="flex:1" >

   		<flow-item v-for="i in 10" class="content-item" type=1>
   			<text class="text">item-{{i}}</text>
   		</flow-item>

   		<!-- 自定义下拉刷新元素 -->
   		<flow-item slot="refresher" class="refresh-box" type=2>
   			<text class="tip-text">{{text[state]}}</text>
   		</flow-item>
   	</waterflow>
   </template>
   ```
3. 通过组件提供的refresherpulling、refresherrefresh、refresherrestore、refresherabort下拉刷新事件调整自定义下拉刷新元素！实现预期效果

**注意：**
+ 目前自定义下拉刷新元素不支持放在waterflow的首个子元素位置上。可能无法正常显示

### 加载更多(load-more)

由于 waterflow 组件是多列的，单个 flow-item 组件无法占用一整行，加载更多展示不太友好，所以我们提供了slot="load-more"属性配置，waterflow 组件会特殊处理最后一个 flow-item 子组件，如果配置了slot="load-more"则显示一整行

   ```html
   <template>
   	<waterflow style="flex:1" >

   		<flow-item v-for="i in 10" class="content-item" type=1>
   			<text class="text">item-{{i}}</text>
   		</flow-item>

   		<flow-item slot="load-more" id="loadmore" type=3 class="load-more-box">
            <text>加载更多</text>
        </flow-item>
   	</waterflow>
   </template>
   ```

**注意：**
+ slot="load-more"仅对 waterflow 最后一个 flow-item 子组件生效

### 嵌套模式

scroll-view开启嵌套模式后，waterflow 可作为内层滚动视图与外层 scroll-view 实现嵌套滚动

设置内层 waterflow 的 `associative-container` 属性为 "nested-scroll-view"，开启内层 waterflow 支持与外层 scroll-view 嵌套滚动

<!-- UTSCOMJSON.waterflow.children -->

<!-- UTSCOMJSON.waterflow.example -->

<!-- UTSCOMJSON.waterflow.reference -->

#### App平台

+ waterflow 组件默认高度是计算后瀑布流高度，无法滚动，如需要滚动要设置高度小于瀑布流高度，推荐配置 "flex:1"
+ waterflow 组件在排版完毕UI展示后，如果子组件高度放生变化，则会重新排版，flow-item 组件的UI会出现短暂的错乱和位置位移，建议控制子元素高度固定避免动态修改高度
	+ 场景一 image组件设置mode=widthFix，加载的网络图片会出现异步图片下载动态修改高度的情况，容易出现上述问题
	+ 场景二 rich-text组件nodes节点内容存在网络图片，出现异步加载情况，会出现动态修改高度导致出现上述问题
+ waterflow 组件的 overflow 属性不支持配置 visible

