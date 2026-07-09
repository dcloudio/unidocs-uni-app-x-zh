<!-- ## rich-text -->

<!-- UTSCOMJSON.rich-text.name -->

<!-- UTSCOMJSON.rich-text.description -->

以往开发者在app平台渲染富文本，大多使用webview。但webview启动慢、快滚白屏，在部分设备上被限死刷新率不能超过60帧。

虽然uni-app x的rich-text组件也支持mode=web，但在app平台蒸汽模式下，提供了c语言全新实现的rich-text mode=native。

uni-app x 蒸汽模式的rich-text native，应该是业内最佳的富文本呈现的解决方案。可以瞬间加载5万字长文、多图混排，流畅的快速滚动，不白屏、不掉帧。[详见评测](../app-vapor.md#rich-text)。

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
> 仅在 app-android 平台配置 mode=native 时受上述表格限制

<!-- UTSCOMJSON.rich-text.attribute -->

### 节点列表数据结构
``` json
{
    name: "p", // 标签名
    attrs: {
        style: "color: red;" // 样式
    },
    children: [ // 子节点
        {
            text: "hello uni-app x" // 文本节点
        },
        {
            name: "img", // img 标签
            attrs: {
                src: "https://web-ext-storage.dcloud.net.cn/uni-app-x/logo.ico",
                width: "100",
                height: "100"
            }
        },
        {
            name: "a", // a 标签
            attrs: {
                href: "https://www.dcloud.io"
            }
        }
    ]
}
```

<!-- UTSCOMJSON.rich-text.event -->

<!-- UTSCOMJSON.rich-text.component_type-->

<!-- UTSCOMJSON.rich-text.children -->

<!-- UTSCOMJSON.rich-text.example -->

<!-- UTSCOMJSON.rich-text.reference -->

## rich-text的mode介绍

rich-text组件，在web和小程序本身就是webview渲染的。在app平台，有2种mode，web和native。

- web模式：每个rich-text都使用一个web-view来渲染内容。初始化速度略慢，页面中有多个rich-text组件就意味着有多个web-view，会很卡。
- native模式：在app蒸汽模式下使用c语言自绘。它的流畅度无与伦比，可以瞬间加载5万字长文多图混排、流畅的快速滚动不白屏不掉帧。[详见评测](../app-vapor.md#rich-text)。
但是它的模块体积较大，每个cpu类型需要8M的so库。

- 原生markdown渲染：官方提供了markdown解析，动态拼接原生组件的方案，在[uni-ai x开源项目](https://ext.dcloud.net.cn/plugin?id=23902)中可以体验

## 全局样式

rich-text组件的style或class中，支持如下几个css属性，用于设置全局样式。全局样式优先级低于rich-text内容中的样式设置。

- font-size
- font-family
- line-height
- color App平台需HBuilderX5.21+

## 调整历史@change

在4.7版以前，Android是kotlin实现的rich-text，但与web规范拉齐度较低；iOS使用的是web-view；鸿蒙使用的是系统的rich-text，但该rich-text也是基于web-view实现且有细节问题。

从uni-app x4.7+，3个App平台统一使用web-view实现。鸿蒙平台直接替换了之前的实现，而Android平台则新增了mode属性配置，默认是web-view实现，但也可以通过mode=native继续使用之前的原生kotlin方式。

App平台从蒸汽模式开始，新增了c语言实现的 rich-text。3个App平台均支持 mode 属性配置，默认是 `web-view` 实现，可以通过设置 `mode=native` 使用原生方式。Android蒸汽模式的rich-text mode native，也从kotlin实现统一改为更快的c语言实现。

## Bug & Tips@tips
- rich-text不支持video组件，如果涉及video，需拆分文本内容，在video前后各放置一个rich-text组件
- 小程序的rich-text功能要弱一些，不支持rich-text中子内容的点击事件，如有这类需求，在小程序平台需要条件编译使用[mp-html](https://ext.dcloud.net.cn/search?q=mp-html)
- App-Android 平台 vdom模式 且 mode=native 时，HTML String 类型的`<img/>`不支持自定义宽高，默认以 rich-text 组件宽度为基准等比缩放；节点列表类型的`<img />`支持自定义宽高。
- App-Harmony App-iOS 平台 且 mode=native 时，暂不支持 `selectable` 属性。 
