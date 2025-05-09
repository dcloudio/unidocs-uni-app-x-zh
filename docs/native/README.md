## 简介
`uni-app x 原生SDK`是为iOS和Android原生工程师提供的开发工具包。

把uni-app x的runtime封装为原生开发调用的接口。开发者可以在自己的 Android 及 iOS 原生开发环境配置工程使用，包括 Android原生SDK 及 iOS原生SDK。

`uni-app x 原生SDK`在某种程度上类似于react native/weex/flutter的SDK，但范围要更大。

因为上述几个跨平台SDK主要是渲染引擎，提供了一个view给原生开发者使用。

而uni-app x提供了一个完整的应用，有页面管理、众多组件和API。

所以在原生应用中集成uni-app x原生SDK，更像是集成一个小程序SDK。

当然uni-app x的性能足够好，它不会像小程序那样启动缓慢，也比react native/flutter等性能和原生UI兼容性更好（评测[另见](../select.md)）

uni-app x原生SDK，给原生开发者提供了更多可能性：
1. 一个最高性能的跨平台框架，让开发效率、运行性能、开发成本这个原来的不可能三角变成可以兼得
2. 渐进式的使用，把某些页面使用uni-app x来开发，嵌入之前的原生工程中
3. 使用自己的原生工程集成环境来打包和发版

## 关系

这里有3个概念：
1. 原生工程：开发者的既有工程
2. uni-app x 原生SDK：需在uni-app x官方下载的SDK，分Android版和iOS版
3. uni-app x 应用原生资源：开发者在HBuilderX中新建的uni-app x项目，通过发行菜单或HBuilderX的cli导出的应用原生资源

使用流程一般是：
1. 开发者在HBuilderX新建uni-app x项目，进行开发
2. 在HBuilderX中导出应用原生资源，生成一批kt或swift代码及相关图片等附件资源
3. 开发者在原生工程中引入uni-app x原生SDK，合并入导出的应用原生资源，整体运行编译

+ [集成Android平台原生SDK](./use/android.md)
+ [集成iOS平台原生SDK](./use/ios.md)
