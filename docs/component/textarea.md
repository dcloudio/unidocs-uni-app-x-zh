## textarea

<!-- UTSCOMJSON.textarea.description -->

<!-- UTSCOMJSON.textarea.attribute -->

<!-- UTSCOMJSON.textarea.event -->

<!-- UTSCOMJSON.textarea.example -->

<!-- UTSCOMJSON.textarea.compatibility -->

<!-- UTSCOMJSON.textarea.children -->

<!-- UTSCOMJSON.textarea.reference -->

## Tips

- 从 uni-app x 4.0 起，App-Android平台 textarea 点击输入框外的屏幕会自动收起软键盘。
* 从 uni-app x 4.0 起，App-Android平台 textarea 的 font-size 默认值统一为 16px，line-height 默认值为 1.2em，width 默认值为300px
* 在Android 9以下的系统版本，样式`line-height`点击键盘换行时行间距设置无效，此问题是Android系统的的bug，后续解决。
* 由于Android系统限制，textarea的键盘右下角按钮只能是`换行`，所以暂时不提供`confirm-type`属性。