<!-- ## uni.chooseVideo(options) @choosevideo -->

<!-- UTSAPIJSON.chooseVideo.name -->

<!-- UTSAPIJSON.chooseVideo.description -->

<!-- UTSAPIJSON.chooseVideo.compatibility -->

<!-- UTSAPIJSON.chooseVideo.param -->

<!-- UTSAPIJSON.chooseVideo.returnValue -->

<!-- UTSAPIJSON.chooseVideo.tutorial -->

<!-- UTSAPIJSON.chooseVideo.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## Tips
* 视频选择的相册，在入参option中，推荐设置albumMode为system，即选择系统相册来选择视频。这样可以避免权限问题，并且google play上架也有要求。[google play 照片和视频权限政策](https://support.google.com/googleplay/android-developer/answer/14115180)。后续会废弃custom方式。
* 当设置`albumMode`为`system`时，可以正常上架google play。同时需要注意在manifest.json中将`<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />`和`<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />`权限移除。配置方式参考[移除Android权限](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#removepermissions).
* 系统相册选择界面的主题和国际化，跟随手机rom，而不是跟随app。
* 不推荐使用本API的压缩参数，大视频选择时，会卡在视频选择页面很久。应该在选择完毕视频后，自行择机（比如上传视频时）调用uni.compressVideo来压缩视频。
* 本API会自动申请摄像头，如需手动获取app是否拥有摄像头，参考 [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)。（如使用system方式的相册选择，则不需要权限）
* app端拍摄会在应用沙盒目录的cache目录产生临时文件，位置[详见](file-system-spec.md#cache)。如需主动删除临时文件，使用[uni.getFileSystemManager](get-file-system-manager.md)。
* android端由于系统或ROM的限制，拍照的`maxDuration`和`camera`属性在部分手机上不生效。
* 从HBuilderX4.41版起，uni.chooseVideo在`sourceType`为`['album']`、`albumMode`为`system`、`compressed`为`true`时，支持返回Uri地址。
* 系统视频选择器的`sizeType`仅支持设置`['original']`或`['compressed']`。在Android 11及以上的系统中，设置`system`调用的是系统的视频选择器，低于android 11的系统中会调用系统的文件选择器。

