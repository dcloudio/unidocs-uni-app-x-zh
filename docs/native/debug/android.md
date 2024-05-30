# uni-app x 生成自定义基座
## 配置项目
1. 在app模块的build.gradle下添加如下依赖
	```groovy
	dependencies {
		implementation "com.squareup.okhttp3:okhttp:3.12.12"
	}
	```
2. 将debug-server-release.aar拷贝到主项目的libs目录下
3. 在AndroidManifest.xml的application节点下添加如下内容
	```xml
	<meta-data android:name="DCLOUD_DEBUG" android:value="true"/>
	```

## 导出自定义基座

打开build.gradle文件，修改versionCode和versionName字段，如下图：
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-1.png)
	
versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中versionCode值一致
	
versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中versionName值一致。

**注意：版本号应该与uni-app x应用一致。**

点击android studio的`Build->Generate Signed Bundle/APK...`生成安装包。

**注意：自定义基座不支持aab包。**

## 导入HBuilderX
1. 将生成的apk文件重命名为`android_debug.apk`
2. 将`android_debug.apk`拷贝到uni-app x项目的unpackage/debug目录下
3. 点击 运行按钮->运行到Android App基座，勾选`使用自定义基座运行`

	![](https://web-ext-storage.dcloud.net.cn/native/doc/android/debug_hx.png)
