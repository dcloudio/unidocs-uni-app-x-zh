<!-- ## sticky-section -->

<!-- UTSCOMJSON.sticky-section.name -->

<!-- UTSCOMJSON.sticky-section.description -->

<!-- UTSCOMJSON.sticky-section.compatibility -->

<!-- UTSCOMJSON.sticky-section.attribute -->

<!-- UTSCOMJSON.sticky-section.event -->

<!-- UTSCOMJSON.sticky-section.component_type-->

### sticky-section使用场景

父元素滚动过程中，多个元素有固定到父元素顶部的需求。

父元素中多个元素吸顶需要使用sticky-section组件。sticky-section组件作为sticky-header组件的父容器。sticky-section组件会控制子元素的滚动吸顶业务。sticky-section组件之间可通过push-pinned-header属性控制吸顶重叠时是否上推。

**示例：**

```html
<list-view id="list-view" style="flex: 1; background-color: #f5f5f5;">
  <sticky-section v-for="sectionId in 3" :id="sectionId" push-pinned-header=false :preload="true">
    <sticky-header>
      <text style="padding: 20px; background-color: #f5f5f5;">sticky-header吸顶--{{sectionId}}</text>
    </sticky-header>
    <list-item v-for="index in 20" :key="index" style="padding: 15px; margin: 5px 0;background-color: #fff;border-radius: 5px;">
      <text class="text">itme-content-{{index}}</text>
    </list-item>
  </sticky-section>
</list-view>
```

#### preload属性说明

> 仅app平台蒸汽模式支持

preload属性用于控制sticky-section组件的预加载行为，默认值为false。设置为true时，sticky-section组件会在滚动到该section之前就进行渲染，从而避免或减少滚动到该section时出现空白或闪烁的情况。例如在index-bar这种直接跳转到某个section的场景下，设置preload为true可以提升用户体验。参考：[uni-ui-x index-bar示例](https://gitcode.com/dcloud/uni-ui-x/blob/dev/pages/uni-ui/index-bar/index-bar.uvue)

#### 注意事项  

+ Android平台、iOS平台sticky-section组件支持存放多个sticky-header子组件，多个sticky-header滚动吸顶时，后一个sticky-header会停靠在前一个sticky-header的末尾处, 仅限于同一个sticky-section父容器。多个sticky-section吸顶停靠通过push-pinned-header控制。  
+ `sticky-section` 组件，不支持设置css样式，不要通过 class 和 style 设置样式  
+ Android平台 `sticky-section` 组件作为 list-view 的子元素时需要注意，sticky-section子元素仅支持sticky-header、list-item，其他元素无法正常显示
+ 鸿蒙平台暂不支持 `padding` 属性，可通过设置子元素样式来实现类似效果  
+ 蒸汽模式 sticky-section内的list-item必须使用v-for、不能使用v-if，且此v-for必须有key

<!-- UTSCOMJSON.sticky-section.children -->

<!-- UTSCOMJSON.sticky-section.example -->

<!-- UTSCOMJSON.sticky-section.reference -->
