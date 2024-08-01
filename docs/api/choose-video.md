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
