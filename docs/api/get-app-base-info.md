## uni.getAppBaseInfo(options?) @getappbaseinfo

<!-- UTSAPIJSON.getAppBaseInfo.description -->

<!-- UTSAPIJSON.getAppBaseInfo.compatibility -->

<!-- UTSAPIJSON.getAppBaseInfo.param -->

<!-- UTSAPIJSON.getAppBaseInfo.returnValue -->

#### appTheme @apptheme  
获取应用的主题配置信息，仅app平台支持。  
appTheme返回值为`auto`，代表跟随系统。此时需通过[getSystemInfo](./get-system-info.md)或[getDeviceInfo](./get-device-info.md)查询osTheme获取当前到底是light还是dark。

#### channel @channel  
获取应用的渠道信息，仅app-android平台支持渠道包。  
- 云打包时需在“App打包”界面中配置，详情参考[配置渠道包](../tutorial/app-package.md#channel)。  
- 离线打包时需在原生工程中配置，详情参考[Android平台配置应用渠道包](../native/use/android.md#androidmanifest)  


<!-- UTSAPIJSON.getAppBaseInfo.example -->

<!-- UTSAPIJSON.getAppBaseInfo.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
