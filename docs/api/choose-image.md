## uni.chooseImage(options) @chooseimage

<!-- UTSAPIJSON.chooseImage.description -->

<!-- UTSAPIJSON.chooseImage.compatibility -->

<!-- UTSAPIJSON.chooseImage.param -->

<!-- UTSAPIJSON.chooseImage.returnValue -->

<!-- UTSAPIJSON.chooseImage.tutorial -->

<!-- UTSAPIJSON.chooseImage.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 相册选择的2种方式
App平台的相册选择，有custom自定义方式和system系统方式。这2种方式有不少区别：
- custom方式
1. app读取相册文件，所以app需要申请相册/本地文件访问权限。而google play目前仅对合理需要相册权限的应用才开放相册权限。如无法向google证明获取相册权限的合理性，则需要使用system方式。google play 政策详见：[google play 照片和视频权限](https://support.google.com/googleplay/android-developer/answer/14115180)，使用custom方式在上架google play时需要提交一份声明以获得试用的资格，谷歌允许延长声明的提交时间到2025年1月22日。uni-app x的开发者可升级HBuilderX 4.41后使用system方式，而uni-app的开发者遇到此问题可以使用插件[uni-chooseSystemMedia](https://ext.dcloud.net.cn/plugin?id=20744)。
2. 支持“原图”选项。
3. 使用非原图，即压缩图片时，会在应用沙盒目录的cache目录产生临时文件（压缩后的图片），位置[详见](file-system-spec.md#cache)
4. 在4.41以前，Android无论如何都会在应用沙盒目录的cache目录产生临时文件。从4.41起，chooseImage支持了contentURI，选择照片时如果不压缩图片，会返回contentURI，不再向cache目录写临时文件了。
- system方式
1. 使用系统选择器时，好处是不需要申请额外权限，它的模式类似于web浏览器中的input type=file，应用其实不具有本机文件访问能力，用户通过系统选择器把图片传给应用。
2. system方式无需特殊向google申明选择权限的必要性，即可正常上架google play。但注意同时需要在manifest.json中将`<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />`和`<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />`权限移除。配置方式参考[移除Android权限](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#removepermissions)。
3. 界面ui无法自定义，比如Android、iOS上无法添加“原图”选项。鸿蒙上系统UI自带原图选项。
4. 界面ui的主题和国际化，跟随手机rom，而不是跟随app（假使App和Rom不一致）
5. 因为不涉及压缩，所以也没有临时文件，不会在cache目录下生成临时文件。

## Tips
* 本API会自动申请摄像头、相册等相关权限，如需手动获取app是否拥有摄像头和相册权限，参考 [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)
* app端拍照和部分情况下的相册选择会在应用沙盒目录的cache目录产生临时文件，位置[详见](file-system-spec.md#cache)。app端如需主动删除临时文件，使用[uni.getFileSystemManager](get-file-system-manager.md)。
* 从HBuilderX4.41版起，uni.chooseImage在`sourceType`为`['album']`、`albumMode`为`system`、`sizeType`为`['original']`并且未设置`crop`时，支持返回Uri地址。
* `albumMode`的`system`属性打开的是系统的图片选择器；`custom`属性打开的是uni-app x框架提供的图片选择器。
* 系统图片选择器的`sizeType`仅支持设置`['original']`或`['compressed']`。在Android 11及以上的系统中，设置`system`调用的是系统的照片选择器，低于android 11的系统中会调用系统的文件选择器。
