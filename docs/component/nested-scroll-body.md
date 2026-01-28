<!-- ## nested-scroll-body -->

<!-- UTSCOMJSON.nested-scroll-body.name -->

<!-- UTSCOMJSON.nested-scroll-body.description -->

<!-- UTSCOMJSON.nested-scroll-body.compatibility -->

<!-- UTSCOMJSON.nested-scroll-body.attribute -->

<!-- UTSCOMJSON.nested-scroll-body.event -->

<!-- UTSCOMJSON.nested-scroll-body.component_type-->

### 使用场景  

scroll-view 嵌套场景中。内层 scroll-view 滚动时无法与外层 scroll-view 滚动衔接，无法实现嵌套滚动连贯效果。因此提供`nested-scroll-body`节点，存放内层 scroll-view 节点。`nested-scroll-body`会与外层`nested-scroll-header`衔接滚动逻辑实现连贯滚动。开发者只需将内层滚动节点放置`nested-scroll-body`节点内即可。具体用法请参考[scroll-view嵌套模式](https://doc.dcloud.net.cn/uni-app-x/component/scroll-view.html#nested-scroll-view)

#### 注意事项  

+ `nested-scroll-body` 组件的父节点必须是 scroll-view，并且 scroll-view 下最多只能存在一个 `nested-scroll-body` 组件  
+ `nested-scroll-body` 组件不支持设置css样式，不要通过 class 和 style 设置样式  
+ `nested-scroll-body` 组件应该放在 `nested-scroll-header` 组件后面（下面）  
+ `nested-scroll-body` 组件不支持复数子节点，渲染时会取其第一个子节点来渲染  


<!-- UTSCOMJSON.nested-scroll-body.children -->

<!-- UTSCOMJSON.nested-scroll-body.example -->

<!-- UTSCOMJSON.nested-scroll-body.reference -->
