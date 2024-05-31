# theme.json

> HBuilder X 4.18+ 支持

### app

使用步骤

1. 在 `theme.json` 中定义相关变量
2. 在 `pages.json` 中以@开头引用变量
3. 可选在 `manifest.json -> app` 中配置主题默认值 `"defaultAppTheme": "light"`, 支持通过[主题API](https://doc.dcloud.net.cn/uni-app-x/api/theme.html)动态设置

**注意：**
- `iOS 13+`、`Android 10+`设备上才支持

支持通过变量配置的属性如下所示：

- 全局配置 globalStyle 与页面支持

  - navigationBarBackgroundColor
  - navigationBarTextStyle
  - backgroundColor
  - backgroundTextStyle

- 全局配置 tabbar 属性：
  - color
  - selectedColor
  - backgroundColor
  - borderStyle
  - list
    - iconPath
    - selectedIconPath

## 变量配置文件 theme.json@themejson

`theme.json` 用于颜色主题相关的变量定义，包含以下属性：

| 属性  | 类型   | 必填 | 描述                 |
| :---- | :----- | :--- | :------------------- |
| light | Object | 是   | 浅色模式下的变量定义 |
| dark  | Object | 是   | 深色模式下的变量定义 |

示例如下：

```json
{
	"light": {
		"navBgColor": "#f8f8f8",
		"navTxtStyle": "black"
	},
	"dark": {
		"navBgColor": "#292929",
		"navTxtStyle": "white"
	}
}
```

完成定义后，可在 `pages.json` 中全局配置或页面配置的相关属性中以 `@` 开头引用，例如：

```json
// 全局配置
{
  "globalStyle": {
    "navigationBarBackgroundColor": "@navBgColor",
    "navigationBarTextStyle": "@navTxtStyle"
  }
}
// 页面配置
{
	"path": "pages/index/index",
	"style":{
		"navigationBarBackgroundColor": "@navBgColor",
		"navigationBarTextStyle": "@navTxtStyle"
	}
}
```

配置完成后，调用相应 api 框架会自动所设属性，展示对应主题下的颜色。

## 配置示例@themeconfig

pages.json（示例省略了主题相关以外的配置项）

```json
{
	"globalStyle": {
		"navigationBarBackgroundColor": "@navBgColor",
		"navigationBarTextStyle": "@navTxtStyle",
		"backgroundColor": "@bgColor",
		"backgroundTextStyle": "@bgTxtStyle"
	},
	"tabBar": {
		"color": "@tabFontColor",
		"selectedColor": "@tabSelectedColor",
		"backgroundColor": "@tabBgColor",
		"borderStyle": "@tabBorderStyle",
		"list": [
			{
				"iconPath": "@iconPath1",
				"selectedIconPath": "@selectedIconPath1"
			},
			{
				"iconPath": "@iconPath2",
				"selectedIconPath": "@selectedIconPath2"
			}
		]
	}
}
```

theme.json

```json
{
	"light": {
		"navBgColor": "#f8f8f8",
		"navTxtStyle": "black",
		"bgColor": "#ffffff",
		"bgTxtStyle": "light",
		"bgColorTop": "#eeeeee",
		"bgColorBottom": "#efefef",
		"tabFontColor": "#000000",
		"tabSelectedColor": "#3cc51f",
		"tabBgColor": "#ffffff",
		"tabBorderStyle": "black",
		"iconPath1": "/static/icon1_light.png",
		"selectedIconPath1": "/static/selected_icon1_light.png",
		"iconPath2": "/static/icon2_light.png",
		"selectedIconPath2": "/static/selected_icon2_light.png"
	},
	"dark": {
		"navBgColor": "#292929",
		"navTxtStyle": "white",
		"bgColor": "#1f1f1f",
		"bgTxtStyle": "dark",
		"bgColorTop": "#292929",
		"bgColorBottom": "#1f1f1f",
		"tabFontColor": "#ffffff",
		"tabSelectedColor": "#51a937",
		"tabBgColor": "#292929",
		"tabBorderStyle": "white",
		"iconPath1": "/static/icon1_dark.png",
		"selectedIconPath1": "/static/selected_icon1_dark.png",
		"iconPath2": "/static/icon2_dark.png",
		"selectedIconPath2": "/static/selected_icon2_dark.png"
	}
}
```
