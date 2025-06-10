# 原生联调

宿主原生应用是Objective-C/Swift代码，在Xcode中运行。uni-app x应用是uvue/uts代码，在HBuilderX中运行。但两者经常需要联调。

得益于uts的编译产物就是Swift，所以uni-app x可以和原生应用混编运行，联调debug。

## Xcode 配置项目
对宿主原生项目配置，目的是为了加入uni-app x的调试模块，并对uni-app x调试模块所需的依赖进行配置。
1. 下载uni-app x原生SDK后，将DCloudDebugServe.xcframework添加到原生工程中。
2. 将原生工程中`Target`的名称改为`UniAppX`。如图：
   ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/x_native_sdk_update_target_name.jpg)
         
3. 在工程`Info.plist`下添加`UIFileSharingEnabled`节点，值设置为`true`。如图：   
      
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/x_native_sdk_info_filesharingenabled.jpg)

4. 填写`Display Name(建议与manifest.json中name值一致)`、`Build(建议与manifest.json中versionCode一致)`、`Version(建议与manifest.json中versionName值一致)`字段。如图：
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/x_native_sdk_update_name_version.jpg)

5. 在工程`Info.plist`下添加`uniapp-x`节点，在节点中配置`appid(必须与manifest.json中appid值一致)`以及`ipatype(在HBuilderX中调试需要设置为1)`,如图：  
   ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/uniappx_app_info.png)
  
## 把宿主应用打包为HBuilderX的自定义基座。
思路：把宿主原生工程打包为ipa，成为自定义基座。然后在HBuilderX中运行uni-app x时，选择这个自定义基座，运行到手机上。

如果您不了解什么是运行基座、标准基座、自定义基座，这些概念，请参考[文档](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#playground)

### 原生工程生成自定义基座
检查`Target -> Info -> uniapp-x`节点下的`uniRuntimeVersion`与`HBuilder X`版本号是否一致，如有差异建议更新为相同版本。   
在Xcode菜单栏中，选择`Product -> Archive` 根据提示导出ipa文件  

### 将自定义基座添加到uni-app x 项目  
1. 将生成的`ipa`文件重命名为`iOS_debug.ipa`   
2. 将`iOS_debug.ipa`拷贝到`uni-app x`项目的`unpackage/debug`目录下   
3. 点击 `运行 -> 运行到iOS App基座`，勾选`使用自定义基座运行` 
    ![](https://web-ext-storage.dcloud.net.cn/native/doc/iOS/x_native_sdk_export_to_hx.jpg)

运行成功后，在手机自定义基座中打开uni-app x应用，HBuilderX控制台可以看到运行log。
在HBuilderX中修改uni-app x代码，可以在手机端基座中热刷生效。