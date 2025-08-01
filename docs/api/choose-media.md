---
title : uni.chooseMedia(options)
---

<!-- ## uni.chooseMedia(options) @choosemedia -->

<!-- UTSAPIJSON.chooseMedia.name -->

<!-- UTSAPIJSON.chooseMedia.description -->

<!-- UTSAPIJSON.chooseMedia.compatibility -->

<!-- UTSAPIJSON.chooseMedia.param -->

<!-- UTSAPIJSON.chooseMedia.returnValue -->

Android端返回的路径是content协议。

<!-- UTSAPIJSON.chooseMedia.tutorial -->

<!-- UTSAPIJSON.chooseMedia.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## Tips
- chooseMedia的相册选择在App平台是系统UI，其风格不同rom可能有差异。多选时有的是长按、有的是checkbox。系统UI的暗黑模式、国际化跟随系统，而不跟随App。
- android端由于系统或ROM的限制，拍照的`maxDuration`和`camera`属性在部分手机上不生效。
- 从HBuilderX4.61版起，ChooseMediaSuccess中的duration、size精度统一调整为小数点后3位数
- iOS端拍照和相册选择会在应用沙盒目录的cache目录产生临时文件，位置[详见](file-system-spec.md#cache)。如需主动删除临时文件，使用[uni.getFileSystemManager](get-file-system-manager.md)。
