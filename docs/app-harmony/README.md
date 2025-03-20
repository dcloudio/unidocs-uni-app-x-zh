## 开发环境要求

- HBuilderX 4.61+ （该版本处于群测版状态，需要在uni-app x的im群或vip群获取）
- 鸿蒙电脑端开发工具DevEco Studio BuildVersion 5.0.7.210+
- 鸿蒙手机系统 API版本 14+

低于API 14的版本，DCloud未仔细测试。虽然也可以运行，已知更低版本的鸿蒙上list-view组件有bug无法正常显示。

因鸿蒙发展初期，低版本bug较多，不建议开发者关注低版本适配。

鸿蒙的API版本类似于Android的API Level。鸿蒙的API版本在手机设置 - 关于本机 中，可找到`API版本`，比如`5.0.2（14）`，这个14即是API版本。

在[uni.getDeviceInfo](../api/get-device-info.md)中也可以通过属性`osHarmonySDKAPIVersion`获取API版本。

## 运行和发行注意
uni-app x编译到鸿蒙是arkts语言，arkts在鸿蒙的ide deveco中没有热刷新。每次改动代码，需要重新build包、签名、安装新包到手机。

这与uni-app不同，uni-app基于js，可以热刷新。（uni-app中的uts插件中的uts代码仍是编译为arkts，也无法热刷新）

所以uts的运行，需要在本地安装鸿蒙deveco，本地直接编译出包。既然本地可以出包，那么鸿蒙就没有做云打包。这也是和Android和iOS的云打包的区别。

uni-app 因使用jsvm，而鸿蒙模拟器自身在某些CPU上还未适配好jsvm，导致开发者使用模拟器受限。但uni-app x在鸿蒙模拟器运行不受限制。

HBuilderX自身提供了运行、日志、debug、发行、调试证书申请等全套功能，开发者安装deveco后，可以做到不启动deveco，在HBuilderX中完成所有开发。

### 证书和权限

鸿蒙的证书和权限体系较复杂，和iOS类似。开发者需要在鸿蒙开发者官网仔细了解其证书和权限体系。

如果运行到模拟器，是不需要证书的。

运行到真机时，需要使用调试证书对应用进行签名后才能在指定的开发设备安装。

证书中绑定了权限，如果变更权限，需要更新证书。调试证书还绑定了开发设备。

对于不涉及受限权限的情况，在HBuilderX的运行界面中可以自助申请调试证书。

鸿蒙的权限配置在harmony-config目录下，需要自行参考鸿蒙文档配置。且不支持根据使用的模块自动打包权限。比如使用了定位API，打包时并不会自动带上定位权限。需要自行配置好权限后再打包。

详细的运行教程[另见](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#run-mode)

## 开发注意
- 鸿蒙平台暂不支持摇树，不能根据使用情况自动添加模块。需要在manifest中手动配置需要的模块。且鸿蒙平台需自行添加的模块列表和安卓iOS不一致。鸿蒙平台需要自行添加才可使用的模块列表详见[manifest文档](../collocation/manifest-harmony.md#modules)
- 鸿蒙平台 uts 插件内使用 UTSJSONObject、JSON 对象目前有限制，UTSJSONObject 仅能作为类型使用，JSON 为 arkts 内置对象，并未替换为 UTS 的 JSON 对象。
- 鸿蒙平台目前不支持横屏、不支持 rpx 根据窗口尺寸变化自动变化、不支持主题变化监听
- 鸿蒙自身的Bug还有不少，开发时需注意相关的组件、API文档说明。比如目前不支持 sticky-header组件（但可通过嵌套滚动或持续修改位置实现吸顶）、rich-text的可用性较低（建议使用web-view替代）。