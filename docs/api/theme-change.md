## 暗黑主题适配教程light和dark

### 基础概念
`iOS 13+`、`Android 10+` 提供了暗黑模式/深色模式，之前的模式称为light，暗黑称为dark。

同时也要注意，低于上述版本的手机，系统层没有暗黑模式概念。

在uni-app x中，有3种主题概念：OSTheme、hostTheme、appTheme。每种主题在不同平台支持度不同，获取、设置和监听变化的方式也不同。

|主题概念	|描述												|App|Web|小程序	|获取方式																			|设置方式												|监听变化							|
|--				|--													|--	|--	|--			|--																						|--															|--										|
|osTheme	|手机OS的当前主题							|√	|x	|x			|[uni.getDeviceInfo](./get-device-info.md)		|-															|[uni.onOsThemeChange](#onosthemechange)|
|hostTheme|浏览器或小程序宿主的当前主题	|x	|√	|√			|[uni.getAppBaseInfo](./get-app-base-info.md)		|-															|[uni.onHostThemeChange](#onhostthemechange)|
|appTheme	|App当前主题									|√	|X	|x			|[uni.getAppBaseInfo](./get-app-base-info.md)	|[uni.setAppTheme](#setapptheme)|[uni.onAppThemeChange](#onappthemechange)|

Web和小程序注意：
- 没有能力获取os的主题。只能获取浏览器或小程序宿主的主题，即hostTheme。
- 可以选择不响应hostTheme（darkmode默认为false），也可以根据hostTheme调整自身的表现（darkmode默认为true）。
- 一旦在manifest里开启darkmode，pages.json的tabbar、导航栏、页面背景色，某些浏览器或小程序自带的组件和涉及UI的API，都会跟随hostTheme变化，开发者的应用无法控制这些ui的主题。比如浏览器的alert()、小程序的showModal。

一般情况下，独立设置主题的场景常见于App平台，所以App平台新增了appTheme的概念。appTheme有几个用途：
1. 独立于osTheme设置主题
2. 方便开发者和插件作者协作。推荐各个插件作者在涉及UI时，支持主题适配，响应App的主题变化
3. uni-app x框架自带的一些UI页面，比如showActionSheet、比如pages.json的页面设置，会响应appTheme的变化

开发者做主题适配时需要先明确需求，这3种做法，需要做的事情都不一样：
1. 只做dark，不做light
- 只需要在pages.json的globalStyle里写死页面背景、tabBar以及navigationBar的背景前景颜色。
- 在uvue页面里写死暗色系颜色值。无需动态判断、无需css变量。本文接下来都不用再看了。
2. 只跟随“上家”（App的上家是osTheme、小程序和web的上家是hostTheme），不需要给用户提供手动切换
- 要做一些事情，见下
3. App上提供独立的light/dark/auto选项给用户，可以根据osTheme，也可以独立设置
- 要做更多事情，了解appTheme相关API，见下

### 主题适配处理内容范围
开发者做主题适配时需处理的内容范围，涉及manifest.json、theme.json、pages.json、app.uvue，以及自己的uvue页面。

#### 1.manifest.json
web 端、小程序需要配置 [manifest.json](../collocation/manifest.md) 中 `web`、`mp-weixin` 根节点的 `"darkmode": true`。配置后如果不生效请重新编译运行
```json
{
	"mp-weixin": {
		"darkmode": true
	},
	"web": {
		"darkmode": true
	}
}
```

#### 2. pages.json和theme.json

[pages.json](../collocation/pagesjson.md)的亮黑设置，需要通过[theme.json](../collocation/themejson.md)处理。
	
要特别注意，**适配暗黑模式，在项目根目录下放置theme.json文件是必不可少的环节**。

该文件除了处理tabbar和导航栏之外，非常重要的是globalStyle里的页面style的backgroundColorContent属性。

尤其是在小程序下，前端页面设置的背景色生效时间较晚，在页面刚创建并开始动画的时候，页面的原生背景色是浅色，然后前端设置页面背景色为深色，就会出现闪白现象。

所以适配暗黑，就必须要在项目下新建theme.json文件，并且在pages.json的globalStyle里，把页面在dark模式下的背景色统一掉。

然后每个页面的根view或scroll-view，反而不用设背景色，使用globalStyle的backgroundColorContent的配置就好了。

下面是pages.json中的globalStyle设置，在属性值中，通过@来引用theme.json中定义的值：
```json
"globalStyle": {
	"navigationBarTextStyle": "@navigationBarTextStyle",
	"navigationBarBackgroundColor": "@navigationBarBackgroundColor",
	"backgroundColorContent": "@backgroundColorContent",
	"backgroundColor": "@backgroundColor",
	"backgroundTextStyle": "@backgroundTextStyle"
},
```

下面是theme.json的样例。theme.json的位置放在pages.json同级目录下。

在light和dark节点下，分别命名一批同名的变量，并分别赋值。这些变量可以在pages.json里直接引用。
```json
{
  "light": {
    "navigationBarTextStyle": "white",
    "navigationBarBackgroundColor": "#007AFF",
    "backgroundColor": "#efeff4",
    "backgroundColorContent": "#efeff4",
    "tabBarPagebackgroundColorContent": "#efeff4",
    "backgroundTextStyle": "dark"
  },
  "dark": {
    "navigationBarTextStyle": "white",
    "navigationBarBackgroundColor": "#1F1F1F",
    "backgroundColor": "#1F1F1F",
    "backgroundColorContent": "#646464",
    "tabBarPagebackgroundColorContent": "#1F1F1F",
    "backgroundTextStyle": "light"
  }
}
```

完整的theme.json教程详见：[theme.json](../collocation/themejson.md)

theme.json 里的变量仅能用于 pages.json。uvue页面不能引用。

在web和小程序中，theme.json的dark部分生效的前提是：
1. manifest设置了`darkmode:true`
2. 浏览器和小程序宿主如微信，主题外观是dark。

在App中，由于appTheme默认值是light，此时theme.json的dark内容不会生效。想要让theme.json的dark内容生效，需要写如下代码：
```ts
uni.setAppTheme({"theme": "dark"}) // 显式设置为dark主题。如果给用户提供了独立的应用主题设置，在用户选择暗黑时应执行此代码

uni.setAppTheme({"theme": "auto"}) //跟随OS的主题而变化，设置为auto后，并且osTheme为dark，那么appTheme就会变成dark，此时theme.json里的dark设置才能生效

```

#### 3. app.uvue

app.uvue在主题适配中有2个角色：
- 获取和监听上家或自身的主题状态
- 设置全局样式

如下分别讲述。

web和小程序平台可以使用媒体查询来设置，但App平台暂不支持媒体查询。

所以跨端的写法是，在app.uvue里，通过`uni.getAppBaseInfo`、`uni.getDeviceInfo`获取自身或上家的主题设置，保存到vue的响应式变量中，模板的class绑定响应式变量实现动态切换class。

- 在app.uvue的onLaunch生命周期中写代码，获取上家的主题，并监听上家的主题变化。这里需要写条件编译

如果应用只需要跟随上家，不独立设置主题，那么写法是这样：

```ts
// app.uvue
import { state } from '@/store/index.uts'

onLaunch(() => {
	console.log('App Launch')
	// #ifdef WEB || MP-WEIXIN
	state.isDark = (uni.getAppBaseInfo().hostTheme == 'dark')
	uni.onHostThemeChange((result) => {
	  state.isDark = (result.hostTheme == 'dark');
	});
	// #endif
	// 在app平台，跟随osTheme而变化的，就要获取和监听osTheme。写法如下：
	// #ifdef APP
	uni.setAppTheme({"theme": "auto"}) //默认值是light，必须显示设置为auto才能根据系统自动切换
	state.isDark = (uni.getDeviceInfo().osTheme == 'dark')
	uni.onOsThemeChange((result:OsThemeChangeResult) => {
	  state.isDark = (result.osTheme == 'dark');
	});
	// #endif
})

```

为了避免每个页面都监听主题change，在app.uvue里的监听结果，存放在一个独立的 store/index.uts 文件中，每个页面引用这个文件，获取当前主题状态、

/store/index.uts 的内容如下：
```ts
type State = {
  // 是否暗黑主题
  isDark: boolean
}
export const state = reactive({
  isDark:false
} as State)
```

实际应用中，state上可以挂载很多东西，此处仅以isDark为例。

如果App平台的主题需要独立设置，即在界面中提供给用户选项，那么App平台的监听对象就不再是osTheme了，而是要改成监听onAppThemeChange，写法是这样：
```ts
import { state } from '@/store/index.uts'

onLaunch(() => {
	console.log('App Launch')
	// #ifdef WEB || MP-WEIXIN
	state.isDark = (uni.getAppBaseInfo().hostTheme == 'dark')
	uni.onHostThemeChange((result) => {
	  state.isDark = (result.hostTheme == 'dark');
	});
	// #endif
	// 如果app独立设置主题，就要获取和监听appTheme
	// #ifdef APP
	state.isDark = (uni.getAppBaseInfo().appTheme == 'dark')
	uni.onAppThemeChange((result:AppThemeChangeResult) => {
	  state.isDark = (result.appTheme == 'dark');
	});
	// #endif
})

```

注意：有些平台，os主题变化时会重启App，有些小程序宿主主题变化时会重启小程序，有些则不会。在会重启的场景下，监听上家主题变化其实没有意义。

- app.uvue的全局样式

在全局样式里设置一批css变量，是适配页面主题的好方式。

比如设置如下2个全局class，theme-light和theme-dark，后续在页面中就可以使用它们。（除非页面和组件在样式隔离策略中禁止了全局样式影响）

```css
.theme-light {
	--background-color: #f8f8f8;
	--text-color: #333333;
}

.theme-dark {
	--background-color: #1a1a1a;
	--text-color: #ffffff;
}
```

#### 4. uvue页面

在根节点的class中，根据`state.isDark`设置class，让全局样式的`theme-dark`或`theme-light`生效。

这2个class又影响了2个css变量 `--background-color` 和 `--text-color` 的值。
 
```vue
<template>
	<view :class="state.isDark ? 'theme-dark' : 'theme-light'"> <!--根view不需要设背景色，因为页面已经设置过背景色了-->
		<text class="title">使用css变量设置color的文字</text>
	</view>
</template>

<script setup lang="uts">
	import { state } from '@/store/index.uts'
</script>

<style>
	.title {
		color: var(--text-color); /* 该css变量的值，根据theme-dark和theme-light谁生效而变化*/
	}
</style>
```


如需在App的界面中给用户提供主题选择，可使用如下代码：
```vue
<template>
	<view :class="state.isDark ? 'theme-dark' : 'theme-light'">
		<text class="title">使用css变量设置color的文字，在根view的class中根据state.isDark设置class，影响了不同的css变量值</text>
		<text>"state.isDark:" {{state.isDark}}</text>
		<!-- #ifdef APP -->
		<text>设置AppTheme</text>
		<radio-group @change="radioChange">
		  <radio class="" v-for="(item, index) in appThemeitems" :key="item"
		    :class="index < appThemeitems.length - 1 ? 'uni-list-cell-line' : ''" :value="item" :checked="index === current">
		    {{ item }}
		  </radio>
		</radio-group>
		<!-- #endif -->
	</view>
</template>

<script setup lang="uts">
	import { state } from '@/store/index.uts'
	
	const current = ref(0)
	const appThemeitems = ref(["light","dark","auto"] as string[])
	
	function radioChange(e : UniRadioGroupChangeEvent) {
	  const theme = e.detail.value
	  uni.setAppTheme({
	    theme: theme as 'light' | 'dark' | 'auto',
	    success: function () {
	      console.log("设置appTheme为", theme, "成功")
	    },
	    fail: function (e : IAppThemeFail) {
	      console.log("设置appTheme为", theme, "失败,原因:", e.errMsg)
	    }
	  })
	  uni.showToast({
	    title: '当前选中:' + theme,
	    icon: 'none'
	  })
	}
	
	onReady(() => {
	  current.value = appThemeitems.value.indexOf(uni.getAppBaseInfo().appTheme)
	})
	
</script>

<style>
	.title {
		color: var(--text-color, #005500);
	}
</style>
```

注意此时app.uvue里监听和获取的都应该是appTheme。

#### 内置组件和UI相关的API的说明

uni-app x的App和Web平台框架中自带的界面，均已适配暗黑模式（小程序平台由小程序宿主自行适配）
- uni.showActionSheet（HBuilderX 4.51+）
- uni.showModal （HBuilderX 4.61+）
- uni.chooseLocation （HBuilderX 4.33+）
- uni.openLocation （HBuilderX 4.41+）
- uni.chooseImage/chooseVideo/chooseMedia/chooseFile，当调用系统的选择界面时，该界面的主题跟随osTheme，应用层无法干预

uni-app x的内置组件，在App和Web平台均支持css设置所有样式，这样就可以在所有样式控制中使用css变量。但小程序平台的内置组件，依赖其自身实现，有的组件需要通过属性控制样式，此时无法使用css变量。

### 示例项目

1. [test-theme](https://gitcode.com/dcloud/test-theme)，是一个专门演示主题设置的项目。
2. hello uni-app x示例，其在`app.uvue`的onLaunch中调用了`checkSystemTheme()`，该方法来自于`/store/index.uts`，获取当前的主题设置存放在响应式`state.isDarkMode`中。
然后在组件`components/boolean-data/boolean-data.vue`中，设置computed()的`isDarkMode`，在template中通过响应式变量isDarkMode动态切换class。


<!-- ## uni.setAppTheme(options) @setapptheme -->

<!-- UTSAPIJSON.setAppTheme.name -->

<!-- UTSAPIJSON.setAppTheme.description -->

uni.setAppTheme，并不会帮助开发者自动实现整个应用的亮/暗主题切换，但是必须写。它的作用是：
1. 根据[theme.json](../collocation/themejson.md)，设置pages.json的亮/暗主题
2. 触发uni.onAppThemeChange，开发者和组件作者均可监听这个事件，自行响应将页面设置为对应的亮/暗风格。

当然组件作者也可以不监听onAppThemeChange，而是暴露主题切换API给开发者，由开发者监听主题切换，再调用组件的主题切换API。

uni-app x的UI相关的API（比如showModal），也会响应setAppTheme。

<!-- UTSAPIJSON.setAppTheme.compatibility -->

<!-- UTSAPIJSON.setAppTheme.param -->

<!-- UTSAPIJSON.setAppTheme.returnValue -->

```uts
uni.setAppTheme({
  theme: "auto",
  success: function() {
    console.log("设置appTheme为 auto 成功")
  },
  fail: function(e: IAppThemeFail) {
    console.log("设置appTheme为 auto 失败,原因:", e.errMsg)
  }
})
```

<!-- UTSAPIJSON.setAppTheme.tutorial -->

<!-- ## uni.onAppThemeChange(callback) @onappthemechange -->

<!-- UTSAPIJSON.onAppThemeChange.name -->

<!-- UTSAPIJSON.onAppThemeChange.description -->

**版本历史调整**
- HBuilderX 4.18版本的逻辑是：[uni.setAppTheme](#setapptheme) 设置的 theme 值变化时触发本监听回调，回调参数中的 appTheme 值可能是"light" | "dark" | "auto"。在 app 平台设置应用的 theme 值为 auto 后，需再次查询osTheme来判断当前的真实主题。如果应用主题是auto，那么需要同时监听osTheme的变化。
- HBuilderX 4.19版本调整为：应用的light/dark主题真正发生变化时触发监听回调。无论是手动设置setAppTheme还是跟随osTheme变化，只要真正变化了就会触发本监听。回调参数中的 appTheme 值只能是"light" | "dark"。

<!-- UTSAPIJSON.onAppThemeChange.compatibility -->

<!-- UTSAPIJSON.onAppThemeChange.param -->

<!-- UTSAPIJSON.onAppThemeChange.returnValue -->

```uts
//callbackId 用于注销监听
val callbackId = uni.onAppThemeChange((res: AppThemeChangeResult) => {
  console.log("onAppThemeChange", res.appTheme)
})
```

<!-- UTSAPIJSON.onAppThemeChange.tutorial -->

<!-- ## uni.offAppThemeChange(id) @offappthemechange -->

<!-- UTSAPIJSON.offAppThemeChange.name -->

<!-- UTSAPIJSON.offAppThemeChange.description -->

<!-- UTSAPIJSON.offAppThemeChange.compatibility -->

<!-- UTSAPIJSON.offAppThemeChange.param -->

<!-- UTSAPIJSON.offAppThemeChange.returnValue -->

```uts
val callbackId = uni.onAppThemeChange((res: AppThemeChangeResult) => {
  console.log("onAppThemeChange", res.appTheme)
})
//...
//...
//注销监听
uni.offAppThemeChange(this.appThemeChangeId)
```

<!-- UTSAPIJSON.offAppThemeChange.tutorial -->

<!-- ## uni.onOsThemeChange(callback) @onosthemechange -->

<!-- UTSAPIJSON.onOsThemeChange.name -->

<!-- UTSAPIJSON.onOsThemeChange.description -->

<!-- UTSAPIJSON.onOsThemeChange.compatibility -->

<!-- UTSAPIJSON.onOsThemeChange.param -->

<!-- UTSAPIJSON.onOsThemeChange.returnValue -->

```uts
//callbackId 用于注销监听
val callbackId = uni.onOsThemeChange((res: OsThemeChangeResult)=> {
    console.log("onOsThemeChange---", res.osTheme)
})
```

<!-- UTSAPIJSON.onOsThemeChange.tutorial -->

**注意：**
+ android 10、iOS 13 才开始支持深色模式主题 `dark`，更低版本无法获取、监听OS的主题。
+ iOS平台应用在进入后台时，会分别截取 app 在 light 和 dark 模式下的截图，用于系统主题切换的同时对后台 app 预览视图进行切换，所以会切换多次 light/dark 模式，程序正常响应 change 事件即可，否则系统截取的图片可能会出现异常，如果确实有必要忽略这种情况下的 change 事件可以在 onHide 后自行忽略。

<!-- ## uni.offOsThemeChange(id) @offosthemechange -->

<!-- UTSAPIJSON.offOsThemeChange.name -->

<!-- UTSAPIJSON.offOsThemeChange.description -->

<!-- UTSAPIJSON.offOsThemeChange.compatibility -->

<!-- UTSAPIJSON.offOsThemeChange.param -->

<!-- UTSAPIJSON.offOsThemeChange.returnValue -->

```uts
val callbackId = uni.onOsThemeChange((res: OsThemeChangeResult)=> {
    console.log("onOsThemeChange---", res.osTheme)
})
...
...
//注销监听
uni.offOsThemeChange(callbackId)
```

<!-- UTSAPIJSON.offOsThemeChange.tutorial -->

<!-- UTSAPIJSON.offOsThemeChange.example -->

<!-- ## uni.onHostThemeChange(callback) @onhostthemechange -->

<!-- UTSAPIJSON.onHostThemeChange.name -->

<!-- UTSAPIJSON.onHostThemeChange.description -->

<!-- UTSAPIJSON.onHostThemeChange.compatibility -->

<!-- UTSAPIJSON.onHostThemeChange.param -->

<!-- UTSAPIJSON.onHostThemeChange.returnValue -->

<!-- UTSAPIJSON.onHostThemeChange.tutorial -->

<!-- UTSAPIJSON.onHostThemeChange.example -->

<!-- ## uni.offHostThemeChange(id) @offhostthemechange -->

<!-- UTSAPIJSON.offHostThemeChange.name -->

<!-- UTSAPIJSON.offHostThemeChange.description -->

<!-- UTSAPIJSON.offHostThemeChange.compatibility -->

<!-- UTSAPIJSON.offHostThemeChange.param -->

<!-- UTSAPIJSON.offHostThemeChange.returnValue -->

<!-- UTSAPIJSON.offHostThemeChange.tutorial -->

<!-- UTSAPIJSON.offHostThemeChange.example -->

<!-- UTSAPIJSON.onThemeChange.name -->

<!-- UTSAPIJSON.onThemeChange.description -->

<!-- UTSAPIJSON.onThemeChange.compatibility -->

<!-- UTSAPIJSON.onThemeChange.param -->

<!-- UTSAPIJSON.onThemeChange.returnValue -->

<!-- UTSAPIJSON.onThemeChange.tutorial -->

<!-- UTSAPIJSON.onThemeChange.example -->

<!-- UTSAPIJSON.offThemeChange.name -->

<!-- UTSAPIJSON.offThemeChange.description -->

<!-- UTSAPIJSON.offThemeChange.compatibility -->

<!-- UTSAPIJSON.offThemeChange.param -->

<!-- UTSAPIJSON.offThemeChange.returnValue -->

<!-- UTSAPIJSON.offThemeChange.tutorial -->

<!-- UTSAPIJSON.offThemeChange.example -->

<!-- UTSAPIJSON.themeChange.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
