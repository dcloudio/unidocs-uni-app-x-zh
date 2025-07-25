<!-- ## uni.downloadFile(options) @downloadfile -->

<!-- UTSAPIJSON.downloadFile.name -->

<!-- UTSAPIJSON.downloadFile.description -->

<!-- UTSAPIJSON.downloadFile.compatibility -->

下载文件常见场景是apk的下载更新，[app升级中心](https://doc.dcloud.net.cn/uniCloud/upgrade-center.html)是一个现成的开源项目，实现下载进度在通知栏显示等复杂交互，可直接使用。

<!-- UTSAPIJSON.downloadFile.param -->

### 注意事项

* 当目录下有同名文件时，文件名会增加数字后缀，例如：目录下abc.txt已经存在，此时下载此文件名的文件到此目录时，下载后的文件会命名为abc(1).txt。
* App-Android下载的默认目录为外置应用沙盒目录下的cache目录。如果手机磁盘空间不足，系统清理工具会清理cache目录。
	+ 如需主动删除下载文件，使用[uni.getFileSystemManager](get-file-system-manager.md)。
	+ 默认下载路径为外置应用沙盒目录`uni.env.CACHE_PATH/cache/uni-download`。但在HBuilderX 3.99前有过几次变更，3.98的目录是`uni.env.CACHE_PATH/cache/uniDownloads`，而3.98之前则不在cache目录下。

<!-- UTSAPIJSON.downloadFile.returnValue -->

::: danger 注意事项
- 在4.25版本iOS平台增加了Task原生对象自动销毁的逻辑，即下载完成后自动释放原生的Task对象，建议开发者在`complete`回调中置空Task对象，例

```typescript
complete: () => {
            this.task = null
          },
```

如不释放，在调用Task对象的方法将导致控制台报错：
`error: instance object does not exist: id:15`

::: 

<!-- UTSAPIJSON.downloadFile.example -->

<!-- UTSAPIJSON.downloadFile.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## tips

- 下载后的文件，如需分享或使用三方应用打开，在Android7上需要使用FileProvider。详见 [分享](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/dev/pages/template/share/share.uvue)、[使用三方应用打开](https://gitcode.net/dcloud/hello-uts/-/blob/dev/uni_modules/uts-nativepage/utssdk/app-android/index.uts)
- web端并不会将文件下载到文件系统内，而是保存在js的File对象内，以供其他接口（如canvas、uploadFile）使用
