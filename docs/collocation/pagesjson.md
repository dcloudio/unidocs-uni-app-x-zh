# pages.json

`pages.json` 文件是 uni-app x 的页面管理配置文件，决定**应用的首页**、页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。

**所有页面，均需在pages.json中注册，否则不会被打包到应用中。**

在HBuilderX中新建页面，默认会在pages.json中自动注册。在HBuilderX中删除页面文件，也会在状态栏提示从pages.json中移除注册。

除了管理页面，pages.json支持对页面进行特殊配置，比如应用首页的tabbar、每个页面的顶部导航栏设置。

但这些uni-app中设计的功能，主要是为了解决页面由webview渲染带来的性能问题，由原生提供一些配置来优化。

uni-app x的app平台，页面不再由webview渲染，其实不需要原生提供特殊配置来优化。但为了开发的便利和多端的统一，也支持了tabbar和导航栏设置。\
但不再支持uni-app的app-plus专用配置以及tabbar的midbutton。

导航栏高度为 44px (不含状态栏)，tabBar 高度为 50px (不含安全区)。

如pages.json中配置的导航栏和tabbar功能无法满足你的需求，可以不在pages.json中配置，自己用view做导航栏和tabbar。\
hello uni-app x有相关示例，参考：
- 自定义导航栏：[插件地址](https://ext.dcloud.net.cn/plugin?id=14618)
- 自定义tabbar：[源码参考](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/custom-tab-bar/custom-tab-bar.uvue)；注意事项[见下](#pages-tabbar)
插件市场也有其他封装好的插件，请自行搜索。

## 配置项列表

<!-- PAGESJSON.pages.description -->

<!-- PAGESJSON.pages.table -->

<!-- PAGESJSON.pages.compatibility -->

### globalStyle 配置项列表 @pages-globalstyle

globalStyle节点里是所有页面都生效的全局样式配置。它的配置与页面级style基本相同，但优先级低于页面级style配置。

<!-- PAGESJSON.pages_globalStyle.description -->

<!-- PAGESJSON.pages_globalStyle.table -->

<!-- PAGESJSON.pages_globalStyle.compatibility -->

#### h5 配置项列表 @globalstyle-h5

<!-- PAGESJSON.globalStyle_h5.description -->

<!-- PAGESJSON.globalStyle_h5.table -->

<!-- PAGESJSON.globalStyle_h5.compatibility -->

##### titleNView 配置项列表 @h5-titlenview

<!-- PAGESJSON.h5_titleNView.description -->

<!-- PAGESJSON.h5_titleNView.table -->

<!-- PAGESJSON.h5_titleNView.compatibility -->

##### pullToRefresh 配置项列表 @h5-pulltorefresh

<!-- PAGESJSON.h5_pullToRefresh.description -->

<!-- PAGESJSON.h5_pullToRefresh.table -->

<!-- PAGESJSON.h5_pullToRefresh.compatibility -->


###### contentdown 配置项列表 @pulltorefresh-contentdown

<!-- PAGESJSON.pullToRefresh_contentdown.description -->

<!-- PAGESJSON.pullToRefresh_contentdown.table -->

<!-- PAGESJSON.pullToRefresh_contentdown.compatibility -->


###### contentover 配置项列表 @pulltorefresh-contentover

<!-- PAGESJSON.pullToRefresh_contentover.description -->

<!-- PAGESJSON.pullToRefresh_contentover.table -->

<!-- PAGESJSON.pullToRefresh_contentover.compatibility -->

###### contentrefresh 配置项列表 @pulltorefresh-contentrefresh

<!-- PAGESJSON.pullToRefresh_contentrefresh.description -->

<!-- PAGESJSON.pullToRefresh_contentrefresh.table -->

<!-- PAGESJSON.pullToRefresh_contentrefresh.compatibility -->


#### mp-weixin 配置项列表 @globalstyle-mp-weixin

<!-- PAGESJSON.globalStyle_mp-weixin.description -->

<!-- PAGESJSON.globalStyle_mp-weixin.table -->

<!-- PAGESJSON.globalStyle_mp-weixin.compatibility -->




### pages 配置项列表 @pagesoptionspage

pages节点里注册页面，数据格式是数组，数组每个项都是一个对象，通过path属性指定页面路径，通过style指定该页面的样式配置。

<!-- PAGESJSON.PagesOptionsPage.description -->

<!-- PAGESJSON.PagesOptionsPage.table -->

<!-- PAGESJSON.PagesOptionsPage.compatibility -->

**Tips：**

- **pages节点的第一项为应用入口页（即首页）**
- **应用中新增/减少页面**，都需要对 pages 数组进行修改
- 文件名**不需要写后缀**，框架会自动寻找路径下的页面资源
- 页面路径必须与真实的文件路径大小写保持一致，即**大小写敏感**

**示例**

假使开发目录为：

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─pages
│  ├─index
│  │  └─index.uvue
│  └─login
│     └─login.uvue
├─static
├─main.uts
├─App.uvue
├─manifest.json
└─pages.json
	</code>
</pre>

则需要在 pages.json 中填写

```javascript
{
    "pages": [
        {
            "path": "pages/index/index",
            "style": { ... }
        }, {
            "path": "pages/login/login",
            "style": { ... }
        }
    ]
}
```


#### style 配置项列表 @pagesoptionspage-style

用于设置每个页面的状态栏、导航条的颜色、文字等信息。

页面中配置项会覆盖 [globalStyle](#pages-globalstyle) 中相同的配置项

<!-- PAGESJSON.PagesOptionsPage_style.description -->

<!-- PAGESJSON.PagesOptionsPage_style.table -->

<!-- PAGESJSON.PagesOptionsPage_style.compatibility -->

<a id="pagesoptionspage-tips"></a>

**Tips**
- 横屏
	* Web：横竖屏由手机浏览器控制，无法在pages.json中指定。uni-app x的页面和基础组件都支持自适应宽屏界面
	* Android：默认是竖屏。从4.13起支持配置pageOrientation实现横屏或自动旋转适应
	* iOS：在iPhone手机上默认竖屏，在iPad上默认自动旋转适应。从4.25起iPhone设置支持配置pageOrientation，iPad设备不受pageOrientation配置影响（表现为自动旋转适配），如需在iPad设备固定某个方向可以在项目的 Info.plist 中配置应用可支持的横竖屏列表来配置，详见[应用可支持横竖屏列表配置](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-ios.html#orientation)，配置后应用将限定在可支持的横竖屏列表中配置的值（如配置应用可支持的列表仅为横屏，则应用只能显示为横屏）。uni-app x的页面和基础组件都支持自适应宽屏界面
- 状态栏
	* 手机顶部状态栏的背景色、前景色(white/black)与navigationBarBackgroundColor和navigationBarTextStyle相同
	* 小程序平台，pages.json中各个颜色的设置仅支持普通的16进制数值。App和Web支持设为transparent，即透明。
	* 如需动态设置状态栏颜色，使用api [uni.setNavigationBarColor](../api/set-navigation-bar-color.md)
	* 当navigationStyle设为custom时，原生导航栏不显示。此时需要注意系统状态栏背景色恒为透明。
	* 注意不同手机的状态栏高度并不相同，如需获取本机的状态栏高度，使用api [uni.getWindowInfo](../api/get-window-info.md) 或 css变量 [--status-bar-height](../css/common/variable.md)
	* 配置hideStatusBar可以隐藏状态栏
	* 同时隐藏状态栏hideStatusBar和底部指示器hideBottomNavigationIndicator，可以实现页面全屏
- 下拉刷新
	* pages.json中下拉刷新是页面级配置，方便使用但灵活度有限。
	* 如需自定义下拉刷新，请使用[scroll-view](../component/scroll-view.md)或[list-view](../component/list-view.md)的下拉刷新。
- Android系统导航栏 (通常指手机底部按钮或手势指示条区域)
	* 系统导航栏的背景颜色与backgroundColorContent颜色一致，导航栏的前景色会根据backgroundColorContent颜色自动适配 (4.21版本开始支持)
	* tabBar页面的系统导航栏背景颜色取值策略[参考](#tabbar-tips)
	* 系统导航栏为全面屏手势时，HBuilderX4.31版本调整页面内容可以渲染到手势指示条区域（低版本页面内容会自动避开手势指示条区域），如需适配可以通过[uni.getWindowInfo](../api/get-window-info.md)获取安全区域底部插入位置信息进行适配
	* HBuilderX4.41版本起，App-Android平台支持配置页面内容是否渲染到虚拟按键区域，但横屏时会默认渲染到该区域且无法修改此行为，属于当前版本遗留问题，后续修复。

**style示例**
```javascript
{
  "pages": [{
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "首页",//设置页面标题文字
        "enablePullDownRefresh":true//开启下拉刷新
      }
    },
    ...
  ]
}
```

##### navigationBarShadow 配置项列表 @style-navigationbarshadow

<!-- PAGESJSON.style_navigationBarShadow.description -->

<!-- PAGESJSON.style_navigationBarShadow.table -->

<!-- PAGESJSON.style_navigationBarShadow.compatibility -->

#### 页面背景色@background
- 页面容器背景色：可在页面 json 文件中通过 backgroundColorContent 属性配置，支持 #RRGGBB 写法，默认为白色
- 窗口背景色：可在页面 json 文件中通过 backgroundColor 属性配置，支持 #RRGGBB 写法，默认为白色。被页面容器背景色覆盖，仅在页面设置下拉刷新时才可能看到此颜色

##### h5 配置项列表 @style-h5

<!-- PAGESJSON.style_h5.description -->

<!-- PAGESJSON.style_h5.table -->

<!-- PAGESJSON.style_h5.compatibility -->


##### mp-weixin 配置项列表 @style-mp-weixin

<!-- PAGESJSON.style_mp-weixin.description -->

<!-- PAGESJSON.style_mp-weixin.table -->

<!-- PAGESJSON.style_mp-weixin.compatibility -->


### tabBar 配置项列表 @pages-tabbar

tabbar节点用于配置应用的tabbar，仅支持配置一个。如需在更多页面配置tabbar，见下面的自定义tabbar。

- 自定义tabbar：[源码参考](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/alpha/pages/template/custom-tab-bar/custom-tab-bar.uvue)
自定义tabbar的逻辑较多，这里写出pages.json的tabbar的逻辑，供自定义tabbar参考：
1. tabbar页面刚开始只载入第一个子tab组件，其他tab组件是在点击相应的选项卡时v-if设为true来创建
2. 一个子tab一旦被v-if加载后，不要再v-if设为false去掉，也不通过v-show控制，而是通过css的visibility来控制显示和隐藏。这样可以保留每个子tab的状态，比如滚动位置、输入框内容。切换tab也会更快速。

<!-- PAGESJSON.pages_tabBar.description -->

<!-- PAGESJSON.pages_tabBar.table -->

<!-- PAGESJSON.pages_tabBar.compatibility -->

<a id="tabbar-tips"></a>

**Tips**
- backgroundColor
	- app-android平台：系统导航（System navigation）栏的背景色会与 tabBar 背景色保持一致。如果应用没有配置 tabBar 页面导航栏背景颜色取值策略[参考](#pagesoptionspage-tips)
	- app-ios平台：tabBar 会自动适配安全区域，底部安全区域背景色会与 tabBar 背景色保持一致。如果应用没有配置 tabBar，则不会自动适配底部安全区域，开发者需根据应用实际情况自行处理。


#### PagesOptionsTabbarList 配置项列表 @pagesoptionstabbarlist

<!-- PAGESJSON.PagesOptionsTabbarList.description -->

<!-- PAGESJSON.PagesOptionsTabbarList.table -->

<!-- PAGESJSON.PagesOptionsTabbarList.compatibility -->

**tabbar示例**
```json
"tabBar": {
	"color": "#7A7E83",
	"selectedColor": "#3cc51f",
	"borderStyle": "black",
	"backgroundColor": "#ffffff",
	"list": [{
		"pagePath": "pages/component/index",
		"iconPath": "static/image/icon_component.png",
		"selectedIconPath": "static/image/icon_component_HL.png",
		"text": "组件"
	}, {
		"pagePath": "pages/API/index",
		"iconPath": "static/image/icon_API.png",
		"selectedIconPath": "static/image/icon_API_HL.png",
		"text": "接口"
	}]
}
```

##### iconfont 配置项列表 @pagesoptionstabbarlist-iconfont

<!-- PAGESJSON.PagesOptionsTabbarList_iconfont.description -->

<!-- PAGESJSON.PagesOptionsTabbarList_iconfont.table -->

<!-- PAGESJSON.PagesOptionsTabbarList_iconfont.compatibility -->

#### midButton 配置项列表 @tabbar-midbutton

<!-- PAGESJSON.tabBar_midButton.description -->

<!-- PAGESJSON.tabBar_midButton.table -->

<!-- PAGESJSON.tabBar_midButton.compatibility -->

### topWindow 配置项列表 @pages-topwindow

<!-- PAGESJSON.pages_topWindow.description -->

<!-- PAGESJSON.pages_topWindow.table -->

<!-- PAGESJSON.pages_topWindow.compatibility -->

#### matchMedia 配置项列表 @topwindow-matchmedia

<!-- PAGESJSON.topWindow_matchMedia.description -->

<!-- PAGESJSON.topWindow_matchMedia.table -->

<!-- PAGESJSON.topWindow_matchMedia.compatibility -->

### leftWindow 配置项列表 @pages-leftwindow

<!-- PAGESJSON.pages_leftWindow.description -->

<!-- PAGESJSON.pages_leftWindow.table -->

<!-- PAGESJSON.pages_leftWindow.compatibility -->

#### matchMedia 配置项列表 @leftwindow-matchmedia

<!-- PAGESJSON.leftWindow_matchMedia.description -->

<!-- PAGESJSON.leftWindow_matchMedia.table -->

<!-- PAGESJSON.leftWindow_matchMedia.compatibility -->

### rightWindow 配置项列表 @pages-rightwindow

<!-- PAGESJSON.pages_rightWindow.description -->

<!-- PAGESJSON.pages_rightWindow.table -->

<!-- PAGESJSON.pages_rightWindow.compatibility -->

#### matchMedia 配置项列表 @rightwindow-matchmedia

<!-- PAGESJSON.rightWindow_matchMedia.description -->

<!-- PAGESJSON.rightWindow_matchMedia.table -->

<!-- PAGESJSON.rightWindow_matchMedia.compatibility -->

### condition 配置项列表 @pages-condition

启动模式配置，仅开发期间生效，用于模拟直达页面的场景。教程[详见](https://uniapp.dcloud.net.cn/collocation/pages.html#condition)

<!-- PAGESJSON.pages_condition.description -->

<!-- PAGESJSON.pages_condition.table -->

<!-- PAGESJSON.pages_condition.compatibility -->

#### PagesConditionItem 配置项列表 @pagesconditionitem

<!-- PAGESJSON.PagesConditionItem.description -->

<!-- PAGESJSON.PagesConditionItem.table -->

<!-- PAGESJSON.PagesConditionItem.compatibility -->



### easycom 配置项列表 @pages-easycom

easycom是uni-app提供的一种简化组件使用的方式。一般情况下组件放置在符合规范的位置时即可自动引用。

但有时组件的路径或文件名无法满足easycom默认规范要求，可以在pages.json里进行规则的自定义。

自定义easycom的详细教程[详见](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)

<!-- PAGESJSON.pages_easycom.description -->

<!-- PAGESJSON.pages_easycom.table -->

<!-- PAGESJSON.pages_easycom.compatibility -->

### uniIdRouter 配置项列表 @pages-uniidrouter

<!-- PAGESJSON.pages_uniIdRouter.description -->

<!-- PAGESJSON.pages_uniIdRouter.table -->

<!-- PAGESJSON.pages_uniIdRouter.compatibility -->


### subPackages 配置项列表 @pagessubpackages

分包加载配置，此配置为小程序的分包加载机制。详细教程[详见](https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages)

subPackages 节点接收一个数组，数组每一项都是应用的子包，其属性值如下：

<!-- PAGESJSON.PagesSubPackages.description -->

<!-- PAGESJSON.PagesSubPackages.table -->

<!-- PAGESJSON.PagesSubPackages.compatibility -->

### preloadRule 配置项列表 @pages-preloadrule

分包预载配置。

配置preloadRule后，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度

preloadRule 中，key 是页面路径，value 是进入此页面的预下载配置，每个配置有以下几项：

<!-- PAGESJSON.pages_preloadRule.description -->

<!-- PAGESJSON.pages_preloadRule.table -->

<!-- PAGESJSON.pages_preloadRule.compatibility -->

<!-- PAGESJSON.tutorial -->