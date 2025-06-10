# 原生联调@joint-debugging

> 本文档描述的内容适用于 HBuilderX 4.71+ 版本，针对 uni-app x 项目有效。

一般来说，鸿蒙的原生应用开发要在 DevEco Studio 中进行。

如果要把 uni-app x 项目实现的应用功能以“小程序”的方式嵌入到既有的原生应用中，需要借助 [uni-app x 原生 SDK 鸿蒙版](https://doc.dcloud.net.cn/uni-app-x/native/use/harmony.html)。

要实现这个目标，最基本的开发模式是：

1. 准备好宿主应用的开发环境，能够在 DevEco Studio 里面进行原生应用的调试开发。

2. 在宿主应用中安装 SDK 依赖模块。

3. 在 HBuilderX 中打开 uni-app x 项目，生成本地打包 App 资源。

4. 把生成的本地打包 App 资源复制到宿主应用的工程目录中，再通过 DevEco Studio 进行调试开发。

其中前两步是一次性的准备工作，后两步则是需要在开发过程中反复进行的。

这里需要反复操作的两步，不仅繁琐，而且在 DevEco Studio 中进行调试开发的时候，并不能对打包的 App 资源进行断点调试，使得调试工作比较吃力，
所以多数情况下都是在 HBuilderX 中把 uni-app x 项目作为独立应用进行开发，待基本完成后再打包 App 资源移植到 SDK 模式。
这样做虽然提高了 uni-app x 项目中业务功能的开发效率，但由于目标平台的差异也会导致移植的过程中遇到一些麻烦，
而且也不方便对宿主应用和嵌入的 uni-app x 应用进行联调。

**从 HBuilderX 4.71 开始，提供了【联编调试】功能**，也就是说，uni-app x 项目和宿主原生应用项目都在 HBuilderX 中打开，
直接以【联编调试】的方式在 HBuilderX 中对宿主应用和 uni-app x 项目进行联调，可以随时对 uni-app x 项目中的源代码做修改，
并在两个项目同时进行断点调试，就像调试一个普通的 uni-app x 项目那样方便。


## 准备工作@prepare

![](https://web-ext-storage.dcloud.net.cn/hx/debug/harmony-native-debug-prepare.png)#{.zooming style="max-height:400px"}

首先，在 HBuilderX 中导入 uni-app x 项目目录和宿主应用的原生鸿蒙工程目录。

然后在 uni-app x 项目根目录中的 `.hbuilderx/launch.json` 文件中添加如下内容（如果文件不存在则手动创建）：

```json
{
  "version" : "1.0",
  "configurations": [
    {
      "type": "uni-app:app-harmony",
      "debugWithNativeHarmony": true,
      "nativeHarmonyProjectPath": "D:/native-harmony-project"
    }
  ]
}
```
其中：
- `type` 固定值为 `"uni-app:app-harmony"`。
- `debugWithNativeHarmony` 用于开启联编调试功能，缺省为 `false` 不开启。
- `nativeHarmonyProjectPath` 用于指定调试运行的时候使用的鸿蒙工程目录（即导入 HbuilderX 的那个宿主应用项目的根目录），无缺省值，如果开启了联编调试则此项必填，且指向的目录必须已存在。


## 调试开发@debugging

在 HBuilderX 中，打开 uni-app x 项目中的任何一个文件，然后通过主菜单或工具条执行【运行到鸿蒙】操作，HBuilderX 会在对 uni-app x 项目进行编译之后自动执行类似于【本地打包 App 资源】的操作，
只不过生成的 App 资源会自动组装到宿主原生应用的鸿蒙工程目录中去。

然后就可以像调试普通 uni-app x 项目一样来进行调试开发了。

**此时的调试操作不仅适用于 uni-app x 项目，也适用于宿主原生应用项目。**

### 开启/关闭调试@enable-debugger

通过【运行到鸿蒙】把 uni-app x 项目启动运行之后，可以在控制台里面点击调试按钮开启。

![](https://web-ext-storage.dcloud.net.cn/doc/tutorial/harmony/b7c69c0e-0447-41f1-b974-35eb8d076cc8.png)#{.zooming style="max-height:60px;border:1px solid silver"}

该功能依赖于鸿蒙调试插件，如果弹窗提示安装依赖插件，请点击安装，否则无法开启调试。

点击【开启调试】按钮的时候如果还在编译阶段，则会等到后续应用运行起来的时候进入调试状态。

如果点击时应用已经运行起来，则直接进入调试状态，此后代码运行遇到断点就会停下来，但应用启动阶段的代码断点因为已经错过了时机而不会停下来，此时要想让那些断点起作用的话可以点击旁边的【重启应用】按钮。

如果要退出调试状态，再次点击该按钮即可。

### 打断点@add-breakpoint

打开要调试的uts、uvue、ets文件，在代码行号上，鼠标右击或双击添加断点。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add-breakpoint.png)#{.zooming style="max-height:200px"}

### 调试视图@debug-view

开启调试后，即可在HBuilderX左侧视图，看到调试视图，具体如下：

下图中包含了uvue、uts、ets的调试步骤

![](https://web-ext-storage.dcloud.net.cn/hx/debug/harmony-debug.gif)#{.zooming style="max-width:100%"}

调试视图分为5部分:

- 调试工具栏
- 变量窗口 (`复制值`、`复制表达式`、`添加到监视`)
- 监视窗口（包含`添加`/`编辑`/`删除`表达式，以及`复制值`）
- 调用堆栈窗口
- 断点窗口（包含`删除`/`启用`/`禁用`断点）

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-debug-action.jpg)#{.zooming style="max-height:200px"}

### 跟踪调试操作@debug-actions

- 继续 `F8`
- 下一步 `F10`
- 进入 `F11`
- 返回 `Shift+F11`

### 数据检查：添加到监视@add-to-watch

在【变量窗口】，选中变量，右键菜单，即可将变量添加到监视窗口。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-add_to_monitor.png)#{.zooming style="max-height:240px"}

### 数据检查：悬停显示@hover-preview

断点调试过程中，将鼠标悬停在要查看的变量上，即可打开悬停窗口。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uts-hovering_window.jpg)#{.zooming style="max-height:250px"}


## 注意事项@notes

1. 如果修改了宿主原生应用的代码，则需要保存之后手动再次【运行到鸿蒙】（或者点击控制台工具条的【重新运行】按钮）重新开始调试运行。

2. HBuilderX 的联编调试功能不能跟 DevEco Studio 的调试功能同时运行，也不能 Attach 到 DevEco Studio 已经运行的应用实例上。

3. HBuilderX 对 ets 代码只有基本的高亮功能，没有语言服务。

4. 宿主原生项目的路径应为原生鸿蒙工程的根目录，否则 HBuilderX 设置在 ets 文件上的断点可能不会生效。
