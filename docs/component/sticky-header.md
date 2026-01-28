<!-- ## sticky-header -->

<!-- UTSCOMJSON.sticky-header.name -->

<!-- UTSCOMJSON.sticky-header.description -->

<!-- UTSCOMJSON.sticky-header.compatibility -->

<!-- UTSCOMJSON.sticky-header.attribute -->

<!-- UTSCOMJSON.sticky-header.event -->

<!-- UTSCOMJSON.sticky-header.component_type-->

### 使用场景  

父元素滚动过程中，实现某个子元素固定到父元素顶部的需求

需求其实就是元素吸顶。可将需要吸顶元素放入sticky-header组件中，sticky-header组件作为父元素的子元素，放到吸顶元素原来的位置即可。

**示例：**

```html
<list-view id="list-view" style="flex: 1; background-color: #f5f5f5;">
  <sticky-header>
    <!-- 固定到父元素顶部的元素 -->
    <text style="padding: 20px; background-color: #f5f5f5;">向上滑动页面，体验sticky-header吸顶效果。</text>
  </sticky-header>
  <list-item v-for="index in 20" :key="index" style="padding: 15px; margin: 5px 0;background-color: #fff;border-radius: 5px;">
    <text class="text">itme-content-{{index}}</text>
  </list-item>
</list-view>
```

#### 注意事项  

+ 同一元素下不能存在多 `sticky-header` 组件，使用多个 `sticky-header` 组件需分别放到 `sticky-section` 中
+ `sticky-header` 组件，不支持设置css样式，不要通过 class 和 style 设置样式  
+ 鸿蒙平台暂不支持 `padding` 属性，可通过设置子元素样式来实现类似效果  
+ 鸿蒙平台 `sticky-header` 组件只能作为 `sticky-section` 的子元素使用  
+ 鸿蒙平台API版本低于17的设备不支持 `sticky-header` 组件，可在滚动容器里自行监听滚动，设置某个区域的top为固定值来实现吸顶效果，参考hello uni-app x的模板->[scroll-view自定义滚动吸顶示例](https://gitcode.com/dcloud/hello-uni-app-x/blob/alpha/pages/template/scroll-sticky/scroll-sticky.uvue)  


<!-- UTSCOMJSON.sticky-header.children -->

<!-- UTSCOMJSON.sticky-header.example -->

<!-- UTSCOMJSON.sticky-header.reference -->
