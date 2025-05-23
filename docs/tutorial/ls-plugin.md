# uni-app x语言服务插件

`uni-app x语言服务`是为`uni-app x`项目提供的语言服务插件。

[点击加入im官方交流群](https://im.dcloud.net.cn/#/?joinGroup=682c303383abe400024d38ba)

适用于cursor/vscode等支持vscode插件规范的编辑器。

## 如何安装插件@install
插件目前在两个平台发布, vscode官方市场和open-vsx市场
* 打开扩展界面搜索`uni-app x语言服务`，找到插件进行安装。
* 通过第三方网站下载VSIX进行安装 [open vsx插件下载](https://open-vsx.org/extension/dcloud-ide/hbuilderx-language-services)

## 语言服务功能说明@ability
* 注意: `插件安装完成后, 会提示重启编辑器, 如果没有提示, 需要手动重启编辑器`
* 注意: 插件`不支持[发行]/[发布]`等功能, 只支持语言服务功能
* 目前插件只支持`uni-app x`项目，其他项目暂不支持

### 关联文件类型和高亮支持@language
支持uvue和uts文件的高亮
* 打开uni-app x项目，打开一个.uvue/.uts文件，会自动关联对应的语言。
* 如果没有自动关联，需要手动关联文件为uvue/uts。


### 平台设置说明@targets
#### 平台信息注意事项特别说明
* 平台设置一般和条件编译共同使用
  * [条件编译详情](https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor)
  * [pages.json的条件编译支持](https://uniapp.dcloud.net.cn/tutorial/platform.html#pages-json-%E7%9A%84%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91)
  * 目前不支持条件编译置灰功能(此功能在HBuilderX中支持)
* uni-app x 项目按不同平台切换语言服务，在不同平台条件编译下，将会使用各自平台的代码提示和语法校验等语言服务功能
*注意：选择多个平台，会导致加载多套语言服务，影响内存占用和运行速度。如果只开发一个平台，应去掉其他平台的设置。*
- 默认开启平台：APP-ANDROID

#### 语言服务平台设置@setting
* 在uni-app x项目中，打开任意文件，即可在`状态栏`看到**语言服务平台信息**
* **点击状态栏**可打开对应项目的**平台信息配置文件**，可进行修改
<br/> ![statusbar](https://web-ext-storage.dcloud.net.cn/doc/tutorial/lsp-plugin/statusbar.png)
* 目前只支持手动修改Target配置信息
```json
{
    "targets": [
        "APP-ANDROID",
        "APP-IOS",
        "APP-HARMONY",
        "WEB",
        "MP-WEIXIN"
    ]
}
```


### 语言服务功能说明
* 注意: 语言服务的功能时刻与`条件编译`和`平台设置`相关
#### 语言服务生效范围的规则
##### 条件编译代码区域
```js
// #ifdef APP-ANDROID
...
// #endif
```

```js
// #ifdef WEB
...
// #endif
```

在上述各条件编译的作用域中，各区域内只能提示各条件编译对应平台的专有提示项和各平台通用的提示项

*例如：*
在 `APP-ANDROID` 条件编译中可以提示`Android系统API`和`UNI API`
在 `WEB` 条件编译中可以提示`DOM API`和`UNI API`
*注意：如果取消了某平台的勾选，在此平台对应的条件编译代码区域中将没有任何代码提示*

##### 非条件编译代码区域
在非条件编译代码区域里，代码提示、语法校验则会以选择的平台为准（默认选择：APP-ANDROID）

#### 代码提示
* 目前暂不支持`条件编译`的相关代码提示
* 可以提示uni相关的API和组件, 并有详细的参数提示
<br/> ![completion](https://web-ext-storage.dcloud.net.cn/doc/tutorial/lsp-plugin/completion.png)


#### 悬浮
* 悬浮到uni相关的API和组件时, 显示详细信息
<br/> ![hover](https://web-ext-storage.dcloud.net.cn/doc/tutorial/lsp-plugin/hover.png)


#### 转到定义
* 可以跳转到uni相关的API和组件的定义位置

#### 查找引用
* 可以查找uni相关的API和组件的引用位置
<br/> ![ref](https://web-ext-storage.dcloud.net.cn/doc/tutorial/lsp-plugin/ref.png)

#### 大纲
* 可以在大纲中查看uni相关的API和组件的定义位置
<br/> ![outline](https://web-ext-storage.dcloud.net.cn/doc/tutorial/lsp-plugin/outline.png)

#### 校验
* 实时校验错误, 在多平台设置的场景下效果较为明显
<br/> ![validation](https://web-ext-storage.dcloud.net.cn/doc/tutorial/lsp-plugin/validation.png)

## 问题反馈
* [点击加入im官方交流群](https://im.dcloud.net.cn/#/?joinGroup=682c303383abe400024d38ba)
