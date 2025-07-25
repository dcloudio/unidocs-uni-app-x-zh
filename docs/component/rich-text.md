<!-- ## rich-text -->

<!-- UTSCOMJSON.rich-text.name -->

<!-- UTSCOMJSON.rich-text.description -->

<!-- UTSCOMJSON.rich-text.compatibility -->

### 支持的HTML标签和属性
|HTML   |属性    |样式   |
|-------|-------|-------|
|br     |       |       |
|p      |       |text-align color background-color text-decoration|
|ul     |       |       |
|li     |       |text-align color background-color text-decoration|
|span   |       |color background-color text-decoration|
|strong |       |       |
|i      |       |       |
|big    |       |       |
|small  |       |       |
|a      |href   |       |
|u      |       |       |
|del    |       |       |
|h1-h6  |       |       |
|img    |src    |       |

> text-decoration仅支持line-through

<!-- UTSCOMJSON.rich-text.attribute -->

<!-- UTSCOMJSON.rich-text.event -->

<!-- UTSCOMJSON.rich-text.component_type-->

<!-- UTSCOMJSON.rich-text.children -->

<!-- UTSCOMJSON.rich-text.example -->

<!-- UTSCOMJSON.rich-text.reference -->

## 富文本显示的可选方案

rich-text组件是一个比较重的组件，需要注意适用场景。

- rich-text组件适合cms系统编排的、大量使用html能力的富文本文章显示
- rich-text不支持video组件，如果涉及video，需拆分文本内容，在video前后各放置一个rich-text组件

其他替代方案：
- 简单的、不同风格文字排布，应该仅使用text组件，必要时也可以使用text组件嵌套text组件
- 简单的图文混拍，用image组件+text组件拼接可以实现的，没必要使用rich-text组件
- 自行解析node节点，动态拼接text、image、video等原生组件，也是一种方案，类似小程序领域的mp-html插件。可自行在插件市场搜索是否有这类插件
- 原生markdown渲染：官方提供了markdown解析，动态拼接原生组件的方案，在[uni-ai x开源项目](https://ext.dcloud.net.cn/plugin?id=23902)中可以体验

## 调整历史@change
在4.7版以前，Android是原生实现rich-text，但与web规范拉齐度较低；iOS使用的是web-view；鸿蒙使用的是系统的rich-text，但该rich-text也是基于web-view实现且有细节问题。

从uni-app x4.7+，3个App平台统一使用web-view实现。鸿蒙平台直接替换了之前的实现，而Android平台则新增了mode属性配置，默认是web-view实现，但也可以通过mode=native继续使用之前的原生方式。

## Bug & Tips@tips

- App-Android 平台且 mode=native 时，HTML String 类型的`<img/>`不支持自定义宽高，默认以 rich-text 组件宽度为基准等比缩放；节点列表类型的`<img />`支持自定义宽高。
