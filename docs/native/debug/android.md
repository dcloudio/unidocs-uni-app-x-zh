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

## 生成调试安装包
### 应用配置

打开build.gradle文件，修改versionCode和versionName字段，如下图：
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-1.png)
	
versionCode为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中versionCode值一致
	
versionName为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中versionName值一致。
	

### 生成安装包

**注意：自定义基座不支持aab包。**

点击Build->Generate Signed Bundle/APK...，如下图：
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-2.png)

选择 APK 选项，点击Next
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-3.png)
	
选择项目（Module），即当前需要打包的项目，注意：如果创建的项目是Library的话，不会显示在此列表里
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-4.png)
	
选择证书，如果没有证书的话，点击Create new... 新建，如果已有证书，可以点击Choose exiting... 选择已有证书

创建证书
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-4.png)
	
输入密码（key store password对应上图第一个password，key password 对应上图第二个password），点击Next。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-5.png)
	
生成apk，Build Variants建议选release（正式发行尽量杜绝选择debug），Signature Versions建议都选，点击Finish。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-6.png)
	
打包完成
	
若apk打包成功，会在Android studio 右下角显示打包成功提示框，如下图。
	
![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/6-7.png)
	
点击locate即可跳转到安装包所在目录。
	
## 导入HBuilderX
1. 将生成的apk文件重命名为`android_debug.apk`
2. 将`android_debug.apk`拷贝到uni-app x项目的unpackage/debug目录下
3. 点击 运行按钮->运行到Android App基座，勾选`使用自定义基座运行`

	![](https://web-ext-storage.dcloud.net.cn/native/doc/android/debug_hx.png)
