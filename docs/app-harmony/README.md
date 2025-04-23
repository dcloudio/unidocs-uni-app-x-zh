# harmony开发指南

uni-app x 从4.61+起支持纯血鸿蒙，即Harmony next。

将uni-app x代码编译为运行在ArkTS引擎上代码，生成鸿蒙原生应用。

uni-app x的鸿蒙版虽然是刚发布，但组件、API、CSS基本拉齐了Android和iOS。甚至还有扫码、拨打电话、剪贴板等超出Android/iOS的功能。

## 开发环境要求

- HBuilderX 4.61+
- 鸿蒙电脑端开发工具DevEco Studio BuildVersion 5.0.7.210+
- 鸿蒙手机系统 API版本 14+

低于API 14的版本，DCloud未仔细测试。虽然也可以运行，已知更低版本的鸿蒙上list-view组件有bug无法正常显示。

因鸿蒙发展初期，低版本bug较多，不建议开发者关注低版本适配。

鸿蒙的API版本类似于Android的API Level。鸿蒙的API版本在手机设置 - 关于本机 中，可找到`API版本`，比如`5.0.2（14）`，这个14即是API版本。

在[uni.getDeviceInfo](../api/get-device-info.md)中也可以通过属性`osHarmonySDKAPIVersion`获取API版本。

## 运行和发行注意
uni-app x编译到鸿蒙运行在ArkTS引擎上，ArkTS在鸿蒙的ide deveco中没有热刷新。**每次改动代码，需要重新build包、签名、安装新包到手机**。

这与uni-app不同，uni-app基于js，可以热刷新。

所以uts的运行，需要在本地安装鸿蒙deveco，本地直接编译出包。既然本地可以出包，那么鸿蒙就没有做云打包。这也是和Android和iOS的云打包的区别。

uni-app 因使用jsvm，而鸿蒙模拟器自身在某些CPU上还未适配好jsvm，导致开发者使用模拟器受限。但uni-app x在鸿蒙模拟器运行不受限制。

HBuilderX自身提供了运行、日志、debug、发行、调试证书申请等全套功能，开发者安装deveco后，可以做到不启动deveco，在HBuilderX中完成所有开发。

详细的运行教程[另见](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html)

### 证书和权限

鸿蒙的证书和权限体系较复杂，和iOS类似。开发者需要在鸿蒙开发者官网仔细了解其证书和权限体系。

如果运行到模拟器，是不需要证书的。

运行到真机时，需要使用调试证书对应用进行签名后才能在指定的开发设备安装。

证书中绑定了权限，如果变更权限，需要更新证书。调试证书还绑定了开发设备。

对于不涉及受限权限的情况，在HBuilderX的运行界面中可以自助申请调试证书。

鸿蒙的权限配置在harmony-config目录下，需要自行参考鸿蒙文档配置。且不支持根据使用的模块自动打包权限。比如使用了定位API，打包时并不会自动带上定位权限。需要自行配置好权限后再打包。

### 调试

鸿蒙平台支持断点调试，不管是uvue、uts，还是混编的ets，都可以断点，详见[鸿蒙Debug](https://uniapp.dcloud.net.cn/tutorial/debug/uni-uts-debug-harmony.html)

uni-app x项目的unpackage目录下的app-harmony下有编译后的鸿蒙原生工程。将该工程拖入鸿蒙的deveco中，可使用deveco的一些能力。比如内存泄漏分析工具。

ArkTS的内存垃圾回收和V8等不同，比较容易造成内存泄漏。可以通过deveco提供的工具来分析泄漏点。

## 开发注意
- 鸿蒙编译工具会在编译本地库时给编译产物的目录加上一串hash值，但windows上最长的文件路径不能超过255个字符。如果开发者的项目路径字符串较长、uni_modules的目录名称较长，再加上鸿蒙deveco编译器加上的hash，就会触发windows文件路径长度限制，导致编译失败。所以windows上的uni-app x项目路径尽量要短，比如`c:\dev\app1`，`uni_modules`的目录名称也要短一些。
- 鸿蒙平台从4.63起支持摇树，可以根据代码使用情况来决定打包的模块。但仍然部分sdk需要在manifest的可视化界面配置sdk信息。模块列表详见[manifest文档](../collocation/manifest-harmony.md#modules)
- 暂未发布小程序SDK
- 鸿蒙平台目前不支持横屏、不支持 rpx 根据窗口尺寸变化自动变化
- 鸿蒙自身的Bug还有不少，开发时需注意相关的组件、API文档说明。比如：
	* sticky-header组件实际无法吸顶，[华为issues地址](https://issuereporter.developer.huawei.com/detail/250220195912059/comment)。临时规避方案是通过嵌套滚动或持续修改位置实现吸顶。在hello uni-app x的模板里有示例。
	* rich-text的无法自动根据内容撑开高度、内部会自滚动且滚动条位置不对，[华为issues地址](https://issuereporter.developer.huawei.com/detail/250224172323045/comment)，导致加载联网内容时滚动表现难以控制。[详见rich-text注意事项](../component/rich-text.md#tips)
	* animateTo 设置 transform rotate 有较多问题，[华为issues地址](https://issuereporter.developer.huawei.com/detail/250317210619077/comment)
	
	鸿蒙整体处于发展初期，能用，有坑，大部分坑有规避方案。但开发者应建议其领导、客户、质量部门降低期望，不能严格比照Android和iOS的验收标准要求鸿蒙。即便微信的鸿蒙版，功能、质量也比不过Android/iOS版。
- 使用 uni.loadFontFace 后需要更新设置字体内容才能使字体生效
- 鸿蒙官方文档中px是指物理像素，而在使用uni-app时px是指逻辑像素，这点在阅读鸿蒙官方文档时需要注意
- 在运行 HBuilderX 内置的 hello uni-app x 项目运行报错 `运行所需的权限没有签名授权`，是因为演示项目使用到了需要审批的 ACL 权限。解决方案：搜索 `ohos.permission.READ_PASTEBOARD` 将其注释掉，此时项目可以正常运行，同时剪切板的 api 测试页面将不生效。

## 插件扩展

对于uni自带API不满足需求时，可在uts插件中自由调用ArkTS的原生API或SDK，可以在uts里调用，也可以使用ets混编。
- [uts插件综述文档](../plugin/uts-plugin.md)
- [鸿蒙uts插件文档](../plugin/uts-for-harmony.md)
- [uts插件混编文档](../plugin/uts-plugin-hybrid.md#harmonyos平台)
- [uts标准模式组件文档](../plugin/uts-component-vue.md)

注意：
- 鸿蒙平台 uts 插件内暂不支持使用uniCloud

以上限制仅针对uts插件，页面里的代码没有限制
