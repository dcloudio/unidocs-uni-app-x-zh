<!-- ## uni.getFileSystemManager() @getfilesystemmanager -->

<!-- UTSAPIJSON.getFileSystemManager.name -->

<!-- UTSAPIJSON.getFileSystemManager.description -->

<!-- UTSAPIJSON.getFileSystemManager.compatibility -->

文件管理器对象，用于操作应用可访问的本地文件空间，在app平台是应用沙盒目录。

可实现目录和文件的创建、删除、改名或改路径、遍历目录、获取文件信息、读写文件。

注意：
- `DCloud-`、`DCloud_`、`uni-`、`uni_`开头的目录和文件是保留目录。开发者自用的文件目录需避免使用这些前缀；

- 读取文件API受具体设备内存大小限制，为了在老旧设备具备更好的兼容性，请避免一次性读取大文件的情(建议文件大小不要超过16M)；

- [ReadFileSuccessResult](./get-file-system-manager.md#readfilesuccessresult-values) 的data参数以前类型是string，Android平台4.31、iOS平台4.61起为了同时支持arraybuffer，类型改成了‘string | ArrayBuffer’，请在使用时手动as为指定类型；

- app-ios平台4.11版本之前支持的api仅支持在uvue文件中使用文件管理器对象，uts插件中暂不支持； app-ios平台4.61版本后，所有api都支持在uts插件和uvue文件中使用，具体请查看兼容性；

:::warning 注意

##### 为了和微信小程序保持一致，`HBuilderX 4.71+` 涉及如下API调整

| 相关 API                | 升级前                                                                                                                                                          | 升级后                                                                                                                                                                                                                                                                                                                                                 |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `stat` / `statSync`    | - 返回路径是系统绝对路径                                                                                                                                   | - 返回路径是相对参数path的相对路径  <br> * 微信小程序规则：当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Array，数组的每一项是一个对象，每个对象包含 path 和 stats  <br> * uniapp-x规则为避免返回值是联合类型，均返回数组，具体优化如下: <br> --- 当 path = 文件路径，返回数组，仅包含本身stats，返回 stats.path= "" <br> --- 当 path = 目录路径 && recursive = false，返回数组，仅包含本身stats，返回 stats.path= "/" <br> --- 当 path = 目录路径 && recursive = true，返回数组，包含本身stats和其递归子文件stats和目录文件stats                                                                                                                                                                                                                                                                                                                    |
| `saveFile` / `saveFileSync` | **参数 `filePath`**  <br> - 传入nil：默认保存到 `uni.env.USER_DATA_PATH` 目录  <br> - 传入文件路径：如果上一级目录存在，保存到传入的路径，如存在则覆盖；如果上一级目录不存在，上上级目录也不存在，则先递归创建再保存  <br> - 传入目录路径：如果存在，保存到filePath/截取tempFilePath的文件名；如果不存在，先创建再保存  <br> - 传入错误路径：比如无权限的路径，返回 error <br> <br> **返回路径 `savedFilePath`** <br> - 返回绝对路径   | **参数 `filePath`** <br> - 传入nil：默认保存到 `uni.env.CACHE_PATH/uni-store/` 目录 <br> - 传入错误路径：比如无权限的路径，返回 error  <br> - 传入文件路径：如果上一级目录存在，保存到传入的路径，如存在则覆盖；如果上一级目录不存在，上上级目录也不存在，则先递归创建再保存 <br> -传入filePath是目录路径且已存在，则返回错误码`1300021`   <br>  -传入filePath是文件路径且已存在，则覆盖写入  <br>- 判断传入路径尾部是否带斜线，如xxx/path、 xxx/path/，直接视为写入到path文件，如xxx/path/sub.txt 具体的是写入到具体的文件，path是目录 <br> <br> **返回路径 `savedFilePath`** <br> - 使用 `unifile://` 路径, 如果参数filePath=nil, savedFilePath= `unifile://cache/uni-store/xxx`; 否则savedFilePath= `unifile://cache/xxx`/`unifile://usr/xxx`/`unifile://sandbox/xxx` <br>  <br> **其他** <br> - 成功保存后删除临时文件 |
| `getSavedFileList`     | 返回 `uni.env.USER_DATA_PATH` 目录中的文件列表, 均绝对路径                                                                                                                            | 返回 `unifile://cache/uni-store/`(uni.env.CACHE_PATH/uni-store/) 目录中的文件列表                                                                                                                                                                                                                                                            |
| `rmdir` / `rmdirSync`  | iOS 无法删除空的 `uni.env.USER_DATA_PATH`、`uni.env.CACHE_PATH` 目录（系统限制）<br>Android/Harmony 可删除任意目录                                                         | **删除特殊目录，只删除子，保留本身**  <br>  - `uni.env.SANDBOX_PATH` <br> - `uni.env.CACHE_PATH` <br>  - `uni.env.USER_DATA_PATH` <br> - `uni.env.ANDROID_INTERNAL_SANDBOX_PATH` <br> <br> **其他创建的目录可以删除子和本身**  <br>                                                                                                                                                                                   |
| `copyFile` / `copyFileSync` | **参数 `destPath`**  <br> - 传入文件路径：如果上一级目录存在，保存到传入的路径，如存在则覆盖；如果上一级目录不存在，上上级目录也不存在，则先递归创建再保存  <br> - 传入目录路径：如果存在，保存到destPath/截取tempFilePath的文件名；如果不存在，先创建再保存  <br> - 传入错误路径：比如无权限的路径，返回 error <br>  | **参数 `destPath`** <br>  <br> - 传入错误路径：比如无权限的路径，返回 error  <br> - 传入文件路径：如果上一级目录存在，保存到传入的路径，如存在则覆盖；如果上一级目录不存在，上上级目录也不存在，则先递归创建再保存 <br> -传入destPath是目录路径且已存在，则返回错误码`1300021`   <br>  -传入destPath是文件路径且已存在，则覆盖写入  <br>- 判断传入路径尾部是否带斜线，如xxx/path、 xxx/path/，直接视为写入到path文件，如xxx/path/sub.txt 具体的是写入到具体的文件，path是目录 <br> <br> |


##### iOS 无返回值同步api说明：
1. 在uvue中不能依赖无返回值的同步api，因为iOS目前无法在uvue层面捕获失败，仅可用于调试，不能用于运行，try···catch无效，不会进入catch回调；
2. 用于调试时：无返回值的同步api可以通过控制台看到具体的失败或成功console log；
3. 相关api：writeFileSync、unlinkSync、truncateSync、removeSavedFile、renameSync、rmdirSync、mkdirSync、ftruncateSync、copyFileSync、closeSync、appendFileSync、accessSync

:::



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
