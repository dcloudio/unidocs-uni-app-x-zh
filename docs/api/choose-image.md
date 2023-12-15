## uni.chooseImage(options) @chooseimage

<!-- UTSAPIJSON.chooseImage.description -->

<!-- UTSAPIJSON.chooseImage.param -->

<!-- UTSAPIJSON.chooseImage.returnValue -->

<!-- UTSAPIJSON.chooseImage.compatibility -->

<!-- UTSAPIJSON.chooseImage.tutorial -->

<!-- UTSAPIJSON.choose-image.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* 获取手机端app是否拥有摄像头权限，请使用API [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)
* 拍照和相册选择会在应用沙盒目录的cache目录产生临时文件，位置[详见](file-system-spec.md#cache)。
* app端如需主动删除临时文件，使用[uni.getFileSystemManager](get-file-system-manager.md)。