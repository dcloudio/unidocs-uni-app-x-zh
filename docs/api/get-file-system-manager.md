## uni.getFileSystemManager() @getfilesystemmanager

<!-- UTSAPIJSON.getFileSystemManager.description -->

<!-- UTSAPIJSON.getFileSystemManager.compatibility -->

文件管理器对象，用于操作应用可访问的本地文件空间，在app平台是应用沙盒目录。

可实现目录和文件的创建、删除、改名或改路径、遍历目录、获取文件信息、读写文件。

注意：
- `DCloud-`、`DCloud_`、`uni-`、`uni_`开头的目录和文件是保留目录。开发者自用的文件目录需避免使用这些前缀；

- 读取文件API受具体设备内存大小限制，为了在老旧设备具备更好的兼容性，请避免一次性读取大文件的情(建议文件大小不要超过16M)；

- [ReadFileSuccessResult](./get-file-system-manager.md#readfilesuccessresult-values) 的data参数以前类型是string，Android平台4.31、iOS平台4.61起为了同时支持arraybuffer，类型改成了‘string | ArrayBuffer’，请在使用时手动as为指定类型；

- app-ios平台4.11版本之前支持的api仅支持在uvue文件中使用文件管理器对象，uts插件中暂不支持； app-ios平台4.61版本后，所有api都支持在uts插件和uvue文件中使用，具体请查看兼容性；


<!-- UTSAPIJSON.getFileSystemManager.param -->

<!-- UTSAPIJSON.getFileSystemManager.returnValue -->

### 特殊说明

- app-ios平台4.11版本之前支持的api仅支持在uvue文件中使用文件管理器对象，uts插件中暂不支持； 4.61版本后，所有api都支持在uts插件和uvue文件中使用，具体请查看兼容性

- app-android平台API不支持代码包文件目录

- app-android平台content:/\/ 路径文件是只读的

<!-- UTSAPIJSON.getFileSystemManager.tutorial -->

<!-- UTSAPIJSON.getFileSystemManager.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
