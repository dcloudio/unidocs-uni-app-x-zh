## uni.chooseImage(options) @chooseimage

<!-- UTSAPIJSON.chooseImage.description -->

<!-- UTSAPIJSON.chooseImage.compatibility -->

<!-- UTSAPIJSON.chooseImage.param -->

<!-- UTSAPIJSON.chooseImage.returnValue -->

<!-- UTSAPIJSON.chooseImage.tutorial -->

<!-- UTSAPIJSON.chooseImage.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* 本API会自动申请摄像头和相册权限，如需手动获取app是否拥有摄像头和相册权限，参考 [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)
* app端拍照和相册选择会在应用沙盒目录的cache目录产生临时文件，位置[详见](file-system-spec.md#cache)。
* app端如需主动删除临时文件，使用[uni.getFileSystemManager](get-file-system-manager.md)。
* 由于受[google play 照片和视频权限](https://support.google.com/googleplay/android-developer/answer/14115180)政策的影响，使用uni.chooseImage在上架google play时需要提交一份声明以获得试用的资格，谷歌允许延长声明的提交时间到2025年1月22日。遇到此问题可以使用插件[uni-chooseSystemMedia](https://ext.dcloud.net.cn/plugin?id=20744)。
