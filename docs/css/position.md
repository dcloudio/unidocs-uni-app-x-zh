## position


<!-- CSSJSON.position.description -->

<!-- CSSJSON.position.syntax -->

<!-- CSSJSON.position.values -->

<!-- CSSJSON.position.defaultValue -->

<!-- CSSJSON.position.unixTags -->

<!-- CSSJSON.position.compatibility -->

<!-- CSSJSON.position.example -->


#### App平台差异

absolute元素相对父组件确定位置，fixed元素位于页面顶层。

虽然App不支持sticky属性值，但uni-app x提供了全端可用的吸顶组件，另见[sticky组件](../component/sticky.md)

#### fixed定位@fixed

position: fixed定位时，web端为相对于整个浏览器页面进行定位，app端为相对于页面（除导航栏、tabbar）定位。可以使用css变量使两端表现一致

```css
.fixed {
  position: fixed;
  width: 100px;
  height: 100px;
  background-color: #FF0000;
  left: 10px;
  /* #ifdef WEB */
  top: calc(--window-top + 10px); //从HBuilderX 4.52起，推荐使用 --uni-safe-area-inset-top 来替代 --window-top
  /* #endif */
  /* #ifdef APP */
  top: 10px;  /* App端暂不支持calc */
  /* #endif */
}
```

<!-- CSSJSON.position.reference -->
