## vue原生组件是什么

使用vue组件开发规范，通过uts插件封装原生平台view提供给vue组件，实现组件特定功能及UI展示。

## 前置条件

继续阅读文档前，开发者需要了解以下前置条件：

+ 了解 [uts语法](https://doc.dcloud.net.cn/uni-app-x/uts/) 和 [uts原生插件](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html)
+ 了解 [Vue组件](https://uniapp.dcloud.net.cn/tutorial/vue3-components.html)
+ 了解 [native-view组件](xxx)

## vue原生组件结构解析

<pre v-pre="" data-lang="">
<code class="lang-" style="padding:0">
┌─components                      // 可跨端公用的vue组件代码，该文件夹不强制放在此处， 可选
|   ├─xxxxxx                      // vue组件名称文件夹  xxxxxx代替组件名称
|       ├─xxxxxx.uvue             // vue组件uts代码
├─static                          // 静态资源
├─utssdk
│	├─app-android                 //Android平台目录
│	│	├─assets                  //Android原生assets资源目录，可选
│	│	├─libs                    //Android原生库目录，可选
│	│	├─res                     //Android原生res资源目录，可选
│	│	├─AndroidManifest.xml     //Android原生应用清单文件，可选
│	│	├─config.json             //Android原生配置文件
│	│	├─index.uts               //Android原生插件能力实现，可选
│	├─app-ios                     //iOS平台目录
│	│	├─Frameworks              //iOS原生依赖的第三方 framework 依赖库存放目录，可选
│	│	├─Resources               //iOS原生所依赖的资源文件存放目录，可选
│	│	├─info.plist              //iOS原生所需要添加到主 info.plist 文件中的配置文件，可选
│	│	├─UTS.entitlements        //iOS原生所需要添加到主工程 .entitlements 文件中的配置文件，可选
│	│	├─config.json             //iOS原生配置文件
│	│	├─index.uts               //iOS原生插件能力实现，可选
│	├─web                         //web平台目录
│	│	└─index.uts
│	└─index.uts                   // 跨平台插件能力实现，可选
└─package.json                    // 插件清单文件
</code>
</pre>

如上所示，vue原生组件的目录结构与UTS插件基本相同，差别在于components目录，vue组件代码存放于此，当前该目录并非一定要放置于此，但对于vue原生组件的完整性建议将vue组件代码与关联的uts插件放在一起。

其他目录文件详情可参考[UTS插件文档](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#%E6%8F%92%E4%BB%B6%E7%9A%84%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

## 开发vue原生组件

### 构建vue原生组件

HBuilder X 选中你的项目，项目根目录选中uni_modules目录，右键选择新建uni_modules插件，弹窗后分类选择 “vue原生组件”，填写组件名称，以下均已 native-button 为例

//创建vue原生组件HX截图

创建完毕 HBuilder X 会自动构建模版文件，参考:`vue原生组件结构`

### vue原生组件代码编写

#### vue组件添加 native-view

构建vue原生组件后，HBuilder X 会自动创建components/native-button/native-button.uvue文件，在该文件编写代码添加 native-view 标签

```html
<template>
	<native-view></native-view>
</template>
```

#### native-view 与 UTS插件关联

引入 native-button 插件, native-view 初始化时会触发 @init 事件，此时创建UTS插件实例button对象，vue组件用button调用UTS插件相关的API。将 UniNativeViewElement 通过button对象传递给UTS插件，进行view关联绑定

```ts
<template>
	<native-view @init="onviewinit"></native-view>
</template>
... ...
	//引入 native-button 插件
	import { NativeButton } from "@/uni_modules/native-button";
	export default {
		data() {
			return {
				button: null as NativeButton | null
			}
		},
		methods: {
			//native-view初始化时触发此方法
			onviewinit(e : UniNativeViewInitEvent) {
				//获取UniNativeViewElement 实例化NativeButton将element以构造参数传递给NativeButton插件
				this.button = new NativeButton(e.detail.element);
			}
		}
	}
```

#### vue原生组件声明方法

在 methods 节点中添加updateText方法，native-button组件使用者可调用该方法更新native-button文案。 [页面调用组件方法](https://doc.dcloud.net.cn/uni-app-x/vue/component.html#page-call-component-method)

```ts
methods: {
	//对外函数
	updateText(value: string) {
		this.button?.updateText(value)
	}
}
```

#### vue原生组件声明props

native-button 声明props，例如native-button的文案信息text属性，按vue规范监听到text属性更新，通过this.button驱动UTS插件更新原生view属性，在components/native-button/native-button.uvue编写如下代码，具体参考[vue组件Props规范](https://cn.vuejs.org/guide/components/props.html)

```html
<script lang="uts">
	export default {
		props: {
			"text": {
				type: String,
				default: ''
			}
		},
		watch: {
			"text": {
				handler(newValue : string, oldValue : string) {
					this.value = newValue
					this.button?.updateText(this.value)
				},
				immediate: true
			},
		},
	}
</script>
```

#### vue原生组件声明事件

native-button 声明事件，例如原生组件触发点击事件@buttonTap, UTS插件通过 UniNativeViewElement 的 dispatchEvent 函数触发native-view的 @customClick 自定义事件。vue组件监听native-view的 @customClick 自定义事件实现this.$emit触发声明事件，具体参考[vue组件事件规范](https://cn.vuejs.org/guide/components/events.html)

```html
<template>
	<native-view @customClick="ontap"></native-view>
</template>
<script lang="uts">
	export default {
		methods: {
			ontap(e: UniNativeViewEvent) {
				this.$emit("buttonTap", e)
			}
		}
	}
</script>
```

native-button/components/native-button/native-button.uvue 最终代码如下：

```html
<template>
	<native-view @init="onviewinit" @customClick="ontap"></native-view>
</template>
<script lang="uts">
	import { NativeButton } from "@/uni_modules/native-button";
	export default {
		data() {
			return {
				button: null as NativeButton | null,
				value: ""
			}
		},
		props: {
			"text": {
				type: String,
				default: ''
			}
		},
		watch: {
			"text": {
				handler(newValue : string, oldValue : string) {
					this.value = newValue
					this.updateText(newValue)
				},
				immediate: true
			},
		},
		methods: {
			//native-view初始化时触发此方法
			onviewinit(e : UniNativeViewInitEvent) {
				//获取UniNativeViewElement 传递给NativeButton插件
				this.button = new NativeButton(e.detail.element);
				this.button?.updateText(this.value)
			},
			ontap(e: UniNativeViewEvent) {
				this.$emit("buttonTap", e)
			},
			updateText(value: string) {
				this.button?.updateText(value)
			}
		},
		unmounted() {
			// iOS平台需要主动释放 uts 实例
			this.button?.destroy()
		}
	}
</script>
```

#### UTS插件功能实现

UTS插件中通过传递过来的UniNativeViewElement实现view关联绑定

::: preview

> Android

```html
import { Button } from "android.widget"

export class NativeButton {
	$element : UniNativeViewElement;

	constructor(element : UniNativeViewElement) {
		//接收组件传递过来的UniNativeViewElement
		this.$element = element;
		this.bindView();
	}

	button : Button | null = null;
	bindView() {
		//通过UniElement.getAndroidActivity()获取android平台activity 用于创建view的上下文
		this.button = new Button(this.$element.getAndroidActivity()!);  //构建原生view
		//限制原生Button 文案描述不自动大写
		this.button?.setAllCaps(false)
		//监听原生Button点击事件
		this.button?.setOnClickListener(_ => {
			const detail = {}
			//构建自定义UniNativeViewEvent返回对象
			const event = new UniNativeViewEvent("customClick", detail)
			//触发原生Button的点击事件
			this.$element.dispatchEvent(event)
		})
		//UniNativeViewEvent 绑定 安卓原生view
		this.$element.bindAndroidView(this.button!);
	}

	updateText(text: string) {
		//更新原生Button 文案描述
		this.button?.setText(text)
	}

	destroy(){
		//数据回收
	}
}
```

> iOS

```html
import { UIButton, UIControl } from "UIKit"

export class NativeButton {

	element : UniNativeViewElement;
	button : UIButton | null;

	constructor(element : UniNativeViewElement) {
    // 接收组件传递过来的UniNativeViewElement
		this.element = element;
		super.init()
		this.bindView();
	}

	// element 绑定原生view
	bindView() {
    // 初始化原生 UIButton
    this.button = new UIButton(type=UIButton.ButtonType.system)
    // 构建方法选择器
    const method = Selector("buttonClickAction")
    // button 绑定点击回调方法
    button?.addTarget(this, action = method, for = UIControl.Event.touchUpInside)
    // UniNativeViewElement 绑定原生 view
		this.element.bindIOSView(this.button!);
	}

	updateText(text : string) {
    // 更新 button 显示文字
		this.button?.setTitle(text, for = UIControl.State.normal)
	}

	/**
	 * 按钮点击回调方法
	 * 在 swift 中，所有target-action (例如按钮的点击事件，NotificationCenter 的通知事件等)对应的 action 函数前面都要使用 @objc 进行标记。
	 */
	@objc buttonClickAction() {
    //构建自定义 UniNativeViewEvent 对象
		let event = new UniNativeViewEvent("customClick")
    //触发自定义事件
		this.element.dispatchEvent(event)
	}

	destroy() {
    // 释放 UTS 实例对象，避免内存泄露
		UTSiOS.destroyInstance(this)
	}
}
```

:::

更多实现可参考 UTS 插件 [native-button](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/dev/uni_modules/native-button)

此时一个简单的vue原生组件就完成了，

**注意:**
+ vue原生组件的 components 目录下的代码中不能含有原生平台任何引用对象，这会导致vue原生组件无法跨平台，与原生平台关联的代码都应放在UTS插件中
+ ios平台需要vue组件主动释放 uts 实例，所以页面触发 unmounted 生命周期时需要调用 this.button?.destroy() 避免内存泄露
+ android平台 native-view 组件不支持border、background、box-shadow属性，如需以上效果可以使用view标签包裹native-view,在view标签设置以上属性

### vue原生插件使用

以 native-button 为例, 创建插件的项目页面可以直接使用 native-button 标签，也可将native-button插件包放置其他项目的uni-modules文件夹中。项目页面即可使用 native-button 标签

```html
<template>
	<view style="flex:1">
		<native-button class="native-button" text="buttonText" @buttonTap="ontap"></native-button>
	</view>
</template>

<script>
	export default {
		methods: {
			ontap(e : UniNativeViewEvent) {
			  console.log("ontap----------"+e.type)
			}
		}
	}
</script>

<style>
	.native-button {
		height: 100px;
		width: 200px;
		margin: 25px auto 25px auto;
	}
</style>
```