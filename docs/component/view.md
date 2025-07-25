<!-- ## view -->

<!-- UTSCOMJSON.view.name -->

<!-- UTSCOMJSON.view.description -->

view组件是 uni-app x 最基本的视图容器，它的作用类似于HTML中的div标签。

<!-- UTSCOMJSON.view.compatibility -->

<!-- UTSCOMJSON.view.attribute -->

#### hover-class说明@hover-class

- 为什么使用`hover-class`？使用 css :active伪类来实现点击态，很容易触发，并且滚动或滑动时点击态不会消失，体验较差。小程序平台均给view引入了`hover-class`，考虑到跨端兼容和体验，建议使用 `hover-class` 属性来实现点击态效果。并且App平台目前暂不支持css伪类。


<!-- UTSCOMJSON.view.event -->

<!-- UTSCOMJSON.view.component_type-->

#### App平台@app
- HBuilder4.0以下版本`hover-class`属性App端与微信小程序效果一样，手指按下进入`hover-class`状态后，手指移动就会取消`hover-class`状态
- HBuilder4.0及以上版本App端调整为手指在view范围内移动不会取消`hover-class`状态，手指移动到view范围之外才会取消`hover-class`状态


#### 获取原生view对象@nativeview

为增强uni-app x组件的开放性，从 `HBuilderX 4.25` 起，UniElement对象提供了 [getAndroidView](../dom/unielement.md#getandroidview) 和 [getIOSView](../dom/unielement.md#getiosview) 方法。

该方法可以获取到 view 组件对应的原生对象，即Android的`ViewGroup`对象、iOS的`UIView`对象。

进而可以调用原生对象提供的方法，这极大的扩展了组件的能力。

**Android 平台：**

获取view组件对应的UniElement对象，通过UniElement对象的[getAndroidView](../dom/unielement.md#getandroidview-2)函数获取组件原生ViewGroup对象

```uts
//导入安卓原生ViewGroup对象
import ViewGroup from "android.view.ViewGroup"

//通过view组件定义的id属性值，获取view标签的UniElement对象
const viewElement = uni.getElementById(id)
//UniElement.getAndroidView设置泛型为安卓底层ViewGroup对象, 直接获取ViewGroup 如果泛型不匹配会返回null
if(viewElement != null) {
	//viewGroup就是view组件对应的原生view对象
	const viewGroup = viewElement.getAndroidView<ViewGroup>()
	if(viewGroup != null) {
		// viewGroup.xx 即可使用ViewGroup的方法
	}
}
```

**iOS 平台：**

获取view组件对应的UniElement对象，通过UniElement对象的[getIOSView](../dom/unielement.md#getiosview)函数获取组件原生UIView对象

```uts
//通过 view 组件定义的 id 属性值，获取 view 标签的 UniElement 对象
const viewElement = uni.getElementById(id)
//获取原生 view
const view = viewElement?.getIOSView();
if (view != null && view instanceof UIView) {
    // view.xx 即可使用UIView的方法
}

```

+ iOS平台 uvue 环境使用 js 驱动无法处理原生类型，getIOSView 方法需要在 uts 插件中使用。

更多示例请参考 uts 插件 [uts-get-native-view](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/uni_modules/uts-get-native-view/utssdk/app-ios/index.uts)

<!-- UTSCOMJSON.view.children -->

<!-- UTSCOMJSON.view.example -->

<!-- UTSCOMJSON.view.reference -->

view是Drawable的组件，也就是可以在view上调用绘制API自绘内容。它类似canvas，但不需要单独的canvas组件，在view上就可以直接draw。[详见](../dom/drawablecontext.md)
