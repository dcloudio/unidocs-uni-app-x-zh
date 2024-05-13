# 页面简介

## 页面简介

uni-app x 项目中，页面文件的后缀名`.uvue`文件。

每个uvue文件，都是一个符合`Vue SFC规范`的 vue 文件。

在 uni-app x 中，后缀名是`.uvue`文件

uni-app x 只有 `.uvue`页面，不支持和vue页面并存（因vue是js驱动、webview渲染，uni-app x在app-Android中没有js引擎，app中渲染是原生渲染，无法使用vue页面）。

当然某些组件可以通过条件编译同时适配uni-app和uni-app x，所以在uni-app x的项目中，看到某些组件代码也有vue文件，但这些vue文件并不在uni-app x项目中生效。

另外uts组件插件的入口文件命名是index.vue。因为uts插件在uni-app和uni-app x中均可使用，所以文件后缀名为vue。\
但这个vue文件并不是真正的页面，它只是uts组件插件为了尽可能照顾开发者习惯而参考vue规范定义的原生组件入口文件。

uni-app x 在app-android上，每个页面都是一个全屏activity，不支持透明。

## 页面管理

### 新建页面

新建页面，默认保存在工程根目录下的`pages`目录下。

每次新建页面，均需在`pages.json`中配置`pages`列表；未在`pages.json -> pages` 中注册的页面，在编译阶段会被忽略。pages.json的完整配置参考：[页面配置](./collocation/pagesjson.md)。

通过HBuilderX开发 `uni-app` 项目时，在项目上右键“新建页面”，HBuilderX会自动在`pages.json`中完成页面注册，开发更方便。
<!-- 
同时，HBuilderX 还内置了常用的页面模板，选择这些模板，可以大幅提升开发效率。

<div>
<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/pages-add-02.png" style="max-width:450px"></img>
</div>
 -->
新建页面时，可以选择`是否创建同名目录`。创建目录的意义在于：

- 如果你的页面较复杂，需要拆分多个附属的uts、css、组件等文件，则使用目录归纳比较合适。
- 如果只有一个页面文件，大可不必多放一层目录。

### 删除页面

删除页面时，需做两件工作：

- 删除`.uvue`文件
- 删除`pages.json -> pages`列表项中的配置 （如使用HBuilderX删除页面，会在状态栏提醒删除pages.json对应内容，点击后会打开pages.json并定位到相关配置项）

### 页面改名

操作和删除页面同理，依次修改文件和 `pages.json`。

### pages.json

pages.json是工程的页面管理配置文件，包括：页面路由注册、页面style参数配置（原生标题栏、下拉刷新...）、首页tabbar等众多功能。

其篇幅较长，另见 [pages.json](./collocation/pagesjson.md)

### 设置应用首页@startpage

`pages.json -> pages`配置项中的第一个页面，作为当前工程的首页（启动页）。

```json
{
	"pages": [
		{
			"path": "pages/index/index", //名字叫不叫index无所谓，位置在第一个，就是首页
			"style": {
				"navigationBarTitleText": "首页" //页面标题
			}
		},
		{
			"path": "pages/my",
			"style": {
				"navigationBarTitleText": "我的"
			}
		},
	]
}
```

## 页面内容构成

uvue页面基于 vue 单文件组件规范。一个页面内，有3个根节点标签：

- 模板区 `<template>`
- 脚本区 `<script>`
- 样式区 `<style>`

```vue
<template>
	<view class="content">
		<button @click="buttonClick">{{title}}</button>
	</view>
</template>

<script setup>
  let title = ref("Hello world") //定义一个响应式变量。类似于选项式的定义data
	const buttonClick = () => { //方法不再需要写在method下面
	  console.log("按钮被点了")
	}
	onReady(() => {
		console.log("页面onReady触发") // 页面生命周期，编写页面加载后的逻辑
	})
</script>

<style>
	.content {
		width: 750rpx;
		background-color: white;
	}
</style>
```

页面内容构成，另有[详细文档](./vue/README.md)

## 页面生命周期 @lifecycle

<!-- PAGEINSTANCE.lifeCycle.compatibility -->

示例代码, [详见](./vue/README.md#lifecycle-options)

### 页面onLoad生命周期@onload

页面初始化时，会触发onLoad生命周期。此时Dom还未构建渲染完毕（需要等onReady）。

所以onLoad页面常见的用途是开始联网取数，由于联网是异步的，在onLoad发起联网，等到获取到服务器数据后，也就可以更新到data上了。

页面的URL支持参数传递，这个参数也是在onLoad生命周期中获取。

通过uni.navigateTo API 或 `<navigator>`组件，可跳转到目标页面，比如从list页面跳转到detail页面，如下：

```uts
// 发起跳转，并传入post_id参数
uni.navigateTo({
  url: '/pages/template/list-news/detail/detail?post_id=' + post_id
})
```

```uts
// 在detail页面的onLoad中接收URL中传递的参数
export default {
  data() {
    return {
      post_id: ""
    }
  },
  onLoad(event : OnLoadOptions) { // 类型非必填，可自动推导
    this.post_id = event["post_id"] ?? "";
    // 可根据详情页id继续联网请求数据...
  },
}
```

::: warning 注意
- OnLoadOptions类型，可不填。不填时可自动推导。
- OnLoadOptions类型目前在web和Android的运行时类型不统一，web是对象，Android是map。[详见issues](https://issues.dcloud.net.cn/pages/issues/detail?id=967)
  - 但仍然可以通过上述示例代码跨平台的获取入参。
  - 后续版本会统一类型为UTSJSONObject。
:::


## 页面及组件生命周期流程图 @lifecycleflow

![](./static/uni-app-lifecycle-vue3.png)#{.zooming width=1000 margin=auto}


更多页面生命周期的详细介绍，另见 [uni-app文档](https://uniapp.dcloud.net.cn/tutorial/page.html)