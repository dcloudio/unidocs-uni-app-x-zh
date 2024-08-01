## input

<!-- UTSCOMJSON.input.description -->

<!-- UTSCOMJSON.input.compatibility -->

<!-- UTSCOMJSON.input.attribute -->

<!-- UTSCOMJSON.input.event -->

<!-- UTSCOMJSON.input.component_type-->

#### 获取原生view对象

**Android 平台：**

获取input组件对应的UniElement对象，通过UniElement对象的[getAndroidView](../dom/unielement.md#getandroidview-2)函数获取组件原生view对象

```uts
//导入安卓原生AppCompatEditText对象
import AppCompatEditText from "androidx.appcompat.widget.AppCompatEditText"

//通过input组件定义的id属性值，获取input标签的UniElement对象
const inputElement = uni.getElementById(id)
//UniElement.getAndroidView设置泛型为安卓底层AppCompatEditText对象，直接获取AppCompatEditText， 如果泛型不匹配会返回null
if(inputElement != null) {
	//editText就是input组件对应的原生view对象
	const editText = inputElement.getAndroidView<AppCompatEditText>()
}
```

**iOS 平台：**

获取view组件对应的UniElement对象，通过UniElement对象的[getIOSView](../dom/unielement.html#getiosview)函数获取组件原生view对象

```uts
//通过 input 组件定义的 id 属性值，获取 input 标签的 UniElement 对象
const inputElement = uni.getElementById(id)
//获取原生 view
const view = inputElement?.getIOSView();
//判断 view 是否存在，类型是否为 UITextField
if (view != null && view instanceof UITextField) {
    //将 view 转换为 UITextField 类型 
    const textField = view! as UITextField;
}
```

更多示例请参考 uts 插件 [uts-get-native-view](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)

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

推荐参考代码：[hello uni-app x -> 模板 -> 自定义导航栏](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/navbar-lite/navbar-lite.uvue)。为了避免自定义导航栏被顶飞，有的可以自动上推，有的需手动控制，这里均有示例。

## comfirm-type和inputmode说明

1. comfirm-type
Web平台弹出键盘使用的是浏览器控制的键盘，在Chrome81+、Safari13.7+之前，键盘右下角文字只能设置完成和搜索，从Chrome81+、Safari13.7+起支持设置发送、下一个。

2. inputmode

web平台的inputmode的浏览器兼容性如下： Chrome >= 66、Edge >= 79、Firefox >= 95、Chrome Android >= 66、Firefox for Android >= 79、Safari on iOS >= 12.2、WebView Android >= 66

3. input组件有 inputmode 和 type、comfirm-type 3个相似的属性，它们的区别详解如下：

- type：在 uni-app 和小程序中仅仅是输入框，定义 input 的工作方式，此值决定可输入什么值。比如 number 只能输入数字。
- comfirm-type：定义键盘右下角按键的文字
- inputmode：inputmode 属性是当使用某些值时会对键盘所作出的优化。

同时使用 inputmode 和 comfirm-type 时，若设值冲突，键盘右下角按键类型由 comfirm-type 决定。type 属性和 inputmode 属性并不冲突

## Tips
- html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。但在uni-app规范中，input仅仅是输入框，其type属性代表不同的输入框。其他功能有单独的组件或API：[radio组件](radio-group.md)、[checkbox组件](checkbox-group.md)、[图片选择](../api/choose-image.md)等。
- 从uni-app x 4.0起，App-Android平台 input 点击输入框外的屏幕会自动收起软键盘。
- 从uni-app x 4.0起，App-Android平台 input 的 font-size 默认值统一为 16px。
- `Web` 平台，iOS 自带键盘的智能标点功能会导致：在 type 为 `number`、`digit` 时，连续输入两次 `.` 后，在第三次输入 `.` 时，会触发两次 deleteContentBackward（删除） 的输入外加一次 insertText 为 `…`（三个点） 的输入。会导致表现异常，关闭智能标点功能后正常。
