## Android端权限适配

由于历史原因，Android端在不同版本下权限的配置较为复杂，所以归纳出常用的权限以示说明。附：[Android端权限配置](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions)

### 相册权限

- 19-23版本 
  - 只需要`AndroidManifest.xml`内注册`READ_EXTERNAL_STORAGE`权限，就可以访问相册。
- 23-29 
  - `READ_EXTERNAL_STORAGE`为敏感权限，所以需要动态申请权限。
- 29-33 
  - 通过`Media Store Api`访问相册
    - 访问自己App添加的相册不需要任何权限，
    - 访问其他App的照片需要动态申请`READ_EXTERNAL_STORAGE`权限
- 33
  - 细化相册权限，废弃`READ_EXTERNAL_STORAGE`，新增`READ_MEDIA_IMAGES`、`READ_MEDIA_VIDEO`、`READ_MEDIA_AUDIO`
- 34
  - 新增`READ_MEDIA_VISUAL_USER_SELECTED`


总结一下，把需要的权限全部添加进来以适配各个版本，如下：

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32"/>
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
    <uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
    <uses-permission android:name="android.permission.READ_MEDIA_VISUAL_USER_SELECTED"/>
</manifest>
```

### 蓝牙权限

- 19-23
  - 只需要`AndroidManifest.xml`内注册`BLUETOOTH`、`BLUETOOTH_ADMIN`权限即可。
- 23-31
  - 需要动态申请位置权限`ACCESS_FINE_LOCATION`
- 31
  - 不再需要动态申请`ACCESS_FINE_LOCATION`，新增权限`BLUETOOTH_SCAN`、`BLUETOOTH_CONNECT`

综上所述，配置如下：

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> 
    <uses-permission android:name="android.permission.BLUETOOTH" android:maxSdkVersion="30"/>
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"  android:maxSdkVersion="30"/>
    <uses-permission android:name="android.permission.BLUETOOTH_SCAN" android:usesPermissionFlags="neverForLocation" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />

</manifest>
```

