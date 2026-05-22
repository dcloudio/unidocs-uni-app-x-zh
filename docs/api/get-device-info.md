<!-- ## uni.getDeviceInfo(options?) @getdeviceinfo -->

<!-- UTSAPIJSON.getDeviceInfo.name -->

<!-- UTSAPIJSON.getDeviceInfo.description -->

<!-- UTSAPIJSON.getDeviceInfo.compatibility -->

<!-- UTSAPIJSON.getDeviceInfo.param -->

<!-- UTSAPIJSON.getDeviceInfo.returnValue -->

::: warning 注意事项
- 获取OAID、AndroidID等其他设备信息，[见插件市场](https://ext.dcloud.net.cn/search?q=oaid&orderBy=Relevance&uni-appx=1)
- romName值域候选 [详见](./get-system-info.md#romname)
- app平台devicePixelRatio属性，HBuilderX4.22及以下版本类型为string，HBuilderX4.23版本调整为number
- 在4.51以前，调用本api会获取传感器列表，原因是isSimulator属性判断模拟器时，需要根据传感器信息才能做出更准确的判断。但是，应用商店不允许在同意隐私协议前调用传感器。解决方案有2个：1、在同意隐私协议之后再调用，且隐私协议里声明调用传感器的用途；2、按需加载需要的信息，例如下面的代码，只获取品牌，不获取isSimulator：
  ```
  uni.getDeviceInfo({filter:["brand"]})
  ```
  从4.51+，本api的isSimulator调整为不再获取传感器信息，但判断模拟器的准确度会下降。如需更准确的判断模拟器，需要单独使用uni.isSimulator。注意也需要在同意隐私协议之后获取。
- 自 5.11 起：
  - web 平台在 macOS 上 osName 正确的返回 `mac` 值
  - web 平台在 macOS 上获取到的 osVersion 固定为 `10.15.7`，这和系统版本不一致，这不是 bug，是浏览器 ua 的限制（从 macOS 11 开始，Apple 和 Google、Mozilla 等浏览器厂商达成共识，减少通过 UA 暴露精确的系统版本）
  - web 平台运行在鸿蒙 PC 上时 osName 仅返回 `harmonyos`（不会返回 `ohos_pc`），可通过 deviceType 为 `pc` 区分
  - 小程序平台统一标准：鸿蒙系统 osName、platform 为 `harmonyos`，手机、Tablet 和 PC 通过 deviceType 区分
:::

<!-- UTSAPIJSON.getDeviceInfo.example -->

<!-- UTSAPIJSON.getDeviceInfo.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
