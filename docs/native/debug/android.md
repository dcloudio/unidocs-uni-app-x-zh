# uni-app x 自定义基座
## 配置项目
1. 在app模块的build.gradle下添加如下依赖
	```groovy
	dependencies {
		implementation "com.squareup.okhttp3:okhttp:3.12.12"
		implementation "net.lingala.zip4j:zip4j:2.11.5"
	}
	```
2. 将debug-server-release.aar拷贝到主项目的libs目录下
3. 修改AndroidManifest.xml

	在application节点下添加如下内容
	
	```xml
	<meta-data android:name="DCLOUD_DEBUG" android:value="true"/>
	```
	
	添加网络权限
	
	```xml
	<uses-permission android:name="android.permission.INTERNET" />
	<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
	```
	
注意：
- 如果android原生项目的drawable目录下不存在名称为icon的图片，需要临时先补充一个命名为icon的文件。
- 当build.gradle中的`targetSdk`为34时，在安卓14设备上资源同步会失败。建议将`targetSdk`调整到30至33之间。

## 使用自定义基座

从HBuilderX 4.71版本开始，支持通过Android studio运行项目安装的包作为自定义基座。

### 本地基座

#### 导出自定义基座

打开build.gradle文件，修改versionCode和versionName字段，如下图：
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-1.png)
	
versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中versionCode值一致
	
versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中versionName值一致。

**注意：版本号应该与uni-app x应用一致。**

点击android studio的`Build->Generate Signed Bundle/APK...`生成安装包。

**注意：自定义基座不支持aab包。**

#### 导入HBuilderX
1. 将生成的apk文件重命名为`android_debug.apk`
2. 将`android_debug.apk`拷贝到uni-app x项目的unpackage/debug目录下
3. 点击 运行按钮->运行到Android App基座，勾选`使用自定义基座运行`

	![](https://web-ext-storage.dcloud.net.cn/native/doc/android/debug_hx.png)
	
### 已安装基座@installedapk

从HBuilderX4.71版开始，支持了使用已有基座作为自定义基座。**注意：需要将HBuilderX和原生SDK都升级到4.71版本或以上。**

首先需要将基座安装的手机上。可以通过android studio直接运行到手机上或者安装已经导出的自定义基座包。

然后切换到 HBuilderX 点击运行按钮->运行到Android App基座，勾选`使用自定义基座运行`->`已安装的基座`。点击运行即可。

![](https://web-ext-storage.dcloud.net.cn/native/doc/android/debug_installed.jpg)

调试的包名与`build.gradle`中的`applicationId`一致。

关联项目为原生项目的完整路径，如果仅调试uni-app x的代码，则可以不用配置。
