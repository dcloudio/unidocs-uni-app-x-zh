<!-- ## input -->

<!-- UTSCOMJSON.input.name -->

<!-- UTSCOMJSON.input.description -->

<!-- UTSCOMJSON.input.compatibility -->

<!-- UTSCOMJSON.input.attribute -->

<!-- UTSCOMJSON.input.event -->

<!-- UTSCOMJSON.input.component_type-->

#### 获取原生view对象

为增强uni-app x组件的开放性，从 `HBuilderX 4.25` 起，UniElement对象提供了 [getAndroidView](../dom/unielement.md#getandroidview) 和 [getIOSView](../dom/unielement.md#getiosview) 方法。

该方法可以获取到 textarea 组件对应的原生对象，即Android的`AppCompatEditText`对象、iOS的`UITextField`对象。

进而可以调用原生对象提供的方法，这极大的扩展了组件的能力。

**Android 平台：**

获取input组件对应的UniElement对象，通过UniElement对象的[getAndroidView](../dom/unielement.md#getandroidview-2)方法获取组件原生AppCompatEditText对象

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

获取input组件对应的UniElement对象，通过UniElement对象的[getIOSView](../dom/unielement.md#getiosview)方法获取组件原生UITextField对象

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

+ iOS平台 uvue 环境使用 js 驱动无法处理原生类型，getIOSView 方法需要在 uts 插件中使用。

更多示例请参考 uts 插件 [uts-get-native-view](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)

<!-- UTSCOMJSON.input.children -->

<!-- UTSCOMJSON.input.example -->

<!-- UTSCOMJSON.input.reference -->

## 键盘上推专题@adjust-position

在App平台，input和textarea组件都一个属性`adjust-position`，默认为true，即软键盘弹出时，默认上推页面以显示出输入框，避免输入框被软键盘遮挡。

软键盘弹出后会挡住输入框，此时启动上推逻辑。默认的上推策略是：
- 如果输入框在scroll-view里，会优先滚动scroll-view，以保证显示出输入框(App-Harmony 暂不支持)。
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

## placeholder-style和placeholder-class说明
- uni-app x 4.41前，App平台仅支持`color`、`font-size`、`font-weight`。
- uni-app x 4.41后，App平台新增支持`font-family`、`font-style`、`text-align`，其中`text-align`仅App-Android平台支持，App-iOS平台的placeholder位置取决于input的`text-align`。
- placeholder-style的`font-size`样式不支持rpx单位。


## Tips
- html规范中input不仅是输入框，还有radio、checkbox、时间、日期、文件选择功能。但在uni-app规范中，input仅仅是输入框，其type属性代表不同的输入框。其他功能有单独的组件或API：[radio组件](radio-group.md)、[checkbox组件](checkbox-group.md)、[图片选择](../api/choose-image.md)、[视频选择](../api/choose-video.md)等。
- 从uni-app x 4.0起，App-Android平台 input 点击输入框外的屏幕会自动收起软键盘。
- 从uni-app x 4.0起，App-Android平台 input 的 font-size 默认值统一为 16px。
- `Web` 平台，iOS 自带键盘的智能标点功能会导致：在 type 为 `number`、`digit` 时，连续输入两次 `.` 后，在第三次输入 `.` 时，会触发两次 deleteContentBackward（删除） 的输入外加一次 insertText 为 `…`（三个点） 的输入。会导致表现异常，关闭智能标点功能后正常。
- 如需输入负数，不推荐使用type=number或digit，这2个类型在不同平台表现不同，比如微信小程序上不允许输入负数，app不同rom也有差异。这类需求推荐设置type为text，自行写正则校验数据。在支持的平台，可以通过input-mode设置默认弹出键盘样式。
- `微信小程序` 平台，如果不设置高度，在一些复杂布局的情况下会可能会出现placeholder高度不正确的问题，暂时通过手动设置样式 height 解决，示例: height: 28px
- 小程序的input还有一些限制，比如光标颜色cursor-color，微信小程序Android版非skyline仅支持default和green，iOS版仅支持十六进制颜色值 [详见](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)
- 如需模拟输入框，比如一些验证码输入框、连续扫码，在插件市场搜索[模拟输入框](https://ext.dcloud.net.cn/search?q=%E6%A8%A1%E6%8B%9F%E8%BE%93%E5%85%A5%E6%A1%86&orderBy=Relevance&uni-appx=1)
- 如需自定义软键盘，比如车牌键盘，在插件市场搜索[自定义键盘](https://ext.dcloud.net.cn/search?q=%E8%87%AA%E5%AE%9A%E4%B9%89%E9%94%AE%E7%9B%98&orderBy=Relevance&uni-appx=1)
- 如需hideKeyBoard隐藏软键盘，在插件市场搜索[hideKeyBoard](https://ext.dcloud.net.cn/search?q=hideKeyBoard&orderBy=Relevance&uni-appx=1)
