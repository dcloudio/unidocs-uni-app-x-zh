## uni.chooseVideo(options) @choosevideo

<!-- UTSAPIJSON.chooseVideo.description -->

<!-- UTSAPIJSON.chooseVideo.compatibility -->

<!-- UTSAPIJSON.chooseVideo.param -->

<!-- UTSAPIJSON.chooseVideo.returnValue -->

<!-- UTSAPIJSON.chooseVideo.tutorial -->

<!-- UTSAPIJSON.chooseVideo.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* 本API会自动申请摄像头和相册权限，如需手动获取app是否拥有摄像头和相册权限，参考 [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)
* app端拍摄和相册选择会在应用沙盒目录的cache目录产生临时文件，位置[详见](file-system-spec.md#cache)。
* app端如需主动删除临时文件，使用[uni.getFileSystemManager](get-file-system-manager.md)。
* 从HBuilderX4.41版起，uni.chooseVideo在`sourceType`为`['album']`、`albumMode`为`system`、`compressed`为`true`时，支持返回Uri地址。
* `albumMode`的`system`属性打开的是系统的视频选择器；`custom`属性打开的是uni-app x提供的视频选择器。
* 当设置`albumMode`为`system`时，可以正常上架google play。同时需要在manifest.json中将`<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />`和`<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />`权限移除。配置方式参考[移除Android权限](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#removepermissions).
* 系统视频选择器的`sizeType`仅支持设置`['original']`或`['compressed']`。在Android 11及以上的系统中，设置`system`调用的是系统的视频选择器，低于android 11的系统中会调用系统的文件选择器。
* 由于受[google play 照片和视频权限](https://support.google.com/googleplay/android-developer/answer/14115180)政策的影响，使用uni.chooseVideo在上架google play时需要提交一份声明以获得试用的资格，谷歌允许延长声明的提交时间到2025年1月22日。遇到此问题可以使用插件[uni-chooseSystemMedia](https://ext.dcloud.net.cn/plugin?id=20744)。
