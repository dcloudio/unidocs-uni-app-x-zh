## rich-text

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

## Bug & Tips@tips

- HTML String 在 App 端支持常用但不是全部 web 样式，并且 Android 和 iOS 也略有差异。
- HTML String 类型的`<img/>`不支持自定义宽高，默认以 rich-text 组件宽度为基准等比缩放；节点列表类型的`<img />`支持自定义宽高。
- App-Android 平台，设置`selectable`属性为 true 时，`itemclick`事件不触发。
- App-Harmony 平台的 rich-text 组件问题较多，它自身是基于web-view渲染的，不支持根据内容自适应高度，但内部支持滚动。需手动设置合适的高度。所以从服务器加载未知高度的rich-text会很麻烦，只能固定一个高度。还在等待鸿蒙官方完善。所以uni-app x目前 nodes 也仅支持 string 类型，暂未花精力处理节点列表。
