## textarea

<!-- UTSCOMJSON.textarea.description -->

<!-- UTSCOMJSON.textarea.compatibility -->

<!-- UTSCOMJSON.textarea.attribute -->

<!-- UTSCOMJSON.textarea.event -->

<!-- UTSCOMJSON.textarea.component_type-->

#### 如何获取原生view对象

**Android 平台：**

```uts
//导入安卓原生AppCompatEditText对象
import AppCompatEditText from "androidx.appcompat.widget.AppCompatEditText"

//通过textarea组件定义的id属性值，获取textarea标签的UniElement对象
const textareaElement = uni.getElementById(id)
//UniElement.getAndroidView设置泛型为安卓底层AppCompatEditText对象，直接获取AppCompatEditText， 如果泛型不匹配会返回null
if(textareaElement != null) {
	//editText就是textarea组件对应的原生view对象
	const editText = textareaElement.getAndroidView<AppCompatEditText>()
}
```

更多示例请参考 uts 插件 [uts-get-native-view](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)

<!-- UTSCOMJSON.textarea.children -->

<!-- UTSCOMJSON.textarea.example -->

<!-- UTSCOMJSON.textarea.reference -->

## 键盘上推专题
input和textarea组件都一个属性`adjust-position`，默认为true，即软键盘弹出时，默认上推页面以显示出输入框，避免输入框被软键盘遮挡。

因为此处内容与input重复，详见[input文档](input.md#adjust-position)

## inputmode说明

inputmode 兼容性：Chrome >= 66、Edge >= 79、Firefox >= 95、Chrome Android >= 66、Firefox for Android >= 79、Safari on iOS >= 12.2、WebView Android >= 66

## Tips

* uni-app x 4.0 起，App-Android平台 textarea 点击输入框外的屏幕会自动收起软键盘。
* uni-app x 4.0 起，App-Android平台 textarea 的 font-size 默认值统一为 16px，line-height 默认值为 1.2em，width 默认值为300px。
* uni-app x 4.15 起，App-iOS平台 textarea 软键盘默认右下角改为 return(换行) ，换行时，键盘不会收起。
* 由于Android系统限制，textarea的键盘右下角按钮只能是`换行`，所以暂时不提供`confirm-type`属性。
* 当软键盘右下角为 换行 时，confirm-hold 恒为 true，设置为false也不生效，即按下 换行 时，软键盘不会消失。
* 在Android 9以下的系统版本，样式`line-height`点击键盘换行时行间距设置无效，此问题是Android系统的的bug，后续解决。
