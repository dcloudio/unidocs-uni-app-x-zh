## input

<!-- UTSCOMJSON.input.description -->

<!-- UTSCOMJSON.input.attribute -->

<!-- UTSCOMJSON.input.event -->

<!-- UTSCOMJSON.input.compatibility -->

<!-- UTSCOMJSON.input.children -->

<!-- UTSCOMJSON.input.example -->

<!-- UTSCOMJSON.input.reference -->

## 键盘上推专题@adjust-position

在App平台，input和textarea组件都一个属性`adjust-position`，默认为true，即软键盘弹出时，默认上推页面以显示出输入框，避免输入框被软键盘遮挡。

软键盘弹出后会挡住输入框，此时启动上推逻辑。默认的上推策略是：
- 如果输入框在scroll-view里，会优先滚动scroll-view，以保证显示出输入框。
- 如果没有可滚动区域，会transform上移页面，以保证显示出输入框。

但是默认的上推策略无法适配所有场景，有些场景需要关闭默认上推策略，即把属性`adjust-position`设为false，然后在输入框的focus或keyboardheightchange事件中获取键盘高度，手动调整界面。

默认上推策略时，如果页面使用了自定义导航栏，常见注意事项是软键盘弹出后可能把自定义导航栏推出可视范围。\
此时注意顶部导航栏不能在滚动视图中，且需要使用css固定在顶部，然后下面放一个scroll-view，输入框放在scroll-view中，就不会把自定义导航栏顶飞。\
如果这种方式仍然不能满足需求，那么就需要关闭默认的上推策略，手动控制。

在web端平台，输入框上推逻辑是由浏览器自动完成的，属性`adjust-position`无效。
但iOS safari软键盘弹出时，整个页面会上推而不是挤压，导致pages.json配置的导航栏会上移到屏幕之外。

## inputmode说明

inputmode 兼容性：Chrome >= 66、Edge >= 79、Firefox >= 95、Chrome Android >= 66、Firefox for Android >= 79、Safari on iOS >= 12.2、WebView Android >= 66

input组件有 inputmode 和 type、comfirm-tye 3个相似的属性，它们的区别详解如下：

- type：在 uni-app 和小程序中仅仅是输入框，定义 input 的工作方式，此值决定可输入什么值。比如 number 只能输入数字。
- comfirm-type：定义键盘右下角按键的文字
- inputmode：inputmode 属性是当使用某些值时会对键盘所作出的优化。

同时使用 inputmode 和 comfirm-type 时，若设值冲突，键盘右下角按键类型由 comfirm-type 决定。type 属性和 inputmode 属性并不冲突

## Tips
- 从uni-app x 4.0起，App-Android平台 input 点击输入框外的屏幕会自动收起软键盘。
- 从uni-app x 4.0起，App-Android平台 input 的 font-size 默认值统一为 16px。
