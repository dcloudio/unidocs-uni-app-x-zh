## uni.getAppAuthorizeSetting() @getappauthorizesetting

<!-- UTSAPIJSON.getAppAuthorizeSetting.description -->

<!-- UTSAPIJSON.getAppAuthorizeSetting.compatibility -->

<!-- UTSAPIJSON.getAppAuthorizeSetting.param -->

<!-- UTSAPIJSON.getAppAuthorizeSetting.returnValue -->

<!-- UTSAPIJSON.getAppAuthorizeSetting.example -->

<!-- UTSAPIJSON.getAppAuthorizeSetting.tutorial -->

如需跳转到权限设置界面，参考[uni.openAppAuthorizeSetting](./open-app-authorize-setting.md)

注意：

Android和iOS的权限设计并不相同，比如iOS有相册权限，而Android不同版本的相册权限逻辑不一样，低版本没有单独的相册权限，归入本地文件读写权限（非沙盒文件），高版本又独立出来。还有很多权限只有一个平台才有。

权限的命名各平台也不相同，所以本API返回的权限名称不是Android和iOS原始的命名，只是一个示意名称。

本API只返回部分权限，Android平台的权限非常多，在Android上获取所有未授权权限，另见[UTSAndroid.getSystemPermissionDenied](../uts/utsandroid.md#getsystempermissiondenied)，这里的权限名称就是Android原始的权限名称了。

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
