## uni.getDeviceInfo(options?) @getdeviceinfo

<!-- UTSAPIJSON.getDeviceInfo.description -->

<!-- UTSAPIJSON.getDeviceInfo.compatibility -->

<!-- UTSAPIJSON.getDeviceInfo.param -->

<!-- UTSAPIJSON.getDeviceInfo.returnValue -->

::: warning 注意事项
- 获取OAID、AndroidID等其他设备信息，[见插件市场](https://ext.dcloud.net.cn/search?q=oaid&orderBy=Relevance&uni-appx=1)
- romName值域候选 [详见](./get-system-info.md#romname)
- app平台devicePixelRatio属性，HBuilderX4.22及以下版本类型为string，HBuilderX4.23版本调整为number
- 调用此api会获取传感器列表，建议在同意隐私协议后再调用，或者按需加载需要的信息，例：
```
uni.getDeviceInfo({filter:["brand"]})
```
:::

<!-- UTSAPIJSON.getDeviceInfo.example -->

<!-- UTSAPIJSON.getDeviceInfo.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
