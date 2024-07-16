# 生成自定义基座

## 导出自定义基座
1. 确保原生工程中`Target`的名称为`UniAppX`   
2. 确保原生工程中`Target -> Info`下`UIFileSharingEnabled`节点值为`true`   
3. 确保原生工程中`应用名称`、`versionName`、`versionCode`与资源文件中的`manifest.json`一致   
4. 确保`Target -> Info -> uniapp-x`节点下的`appid`与工程中`uni-app-x -> apps`下的目录名称以及该目录下`manifest.json`文件中的`id`三者一致   
5. 确保`Target -> Info -> uniapp-x`节点下的`uniRuntimeVersion`与`HBuilder X`版本号一致   
6. 在Xcode菜单栏中，选择`Product -> Archive` 根据提示导出ipa文件   

## 导入HBuilderX
1. 将生成的`ipa`文件重命名为`iOS_debug.ipa`   
2. 将`iOS_debug.ipa`拷贝到`uni-app x`项目的`unpackage/debug`目录下   
3. 点击 `运行 -> 运行到iOS App基座`，勾选`使用自定义基座运行`，点击`运行`即可   