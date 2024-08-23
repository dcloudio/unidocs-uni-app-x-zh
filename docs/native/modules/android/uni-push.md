## uni-push

### Gradle配置

首先需在项目根目录下的build.gradle增加个推仓库源

```
allprojects {
	repositories {
		jcenter()
		google()
        // 个推的Maven仓库地址。
        maven { 
            url 'https://mvn.getui.com/nexus/content/repositories/releases' 
        }
	}
}
```

项目应用下的build.gradle

```
android {
    defaultConfig {
        manifestPlaceholders = [
            "GETUI_APPID" : "%GETUI_APPID%",
            "PUSH_APPID" : "%PUSH_APPID%",
            "dcloud_unipush_auto_notification":"%透传时是否自动创建通知，布尔类型%"
            // 厂商推送配置
            //小米
            "MIPUSH_APPID":"%MIPUSH_APPID%",
            "MIPUSH_APPKEY":"%MIPUSH_APPKEY%",
            //魅族
            "MEIZUPUSH_APPID":"%MEIZUPUSH_APPID%",
            "MEIZUPUSH_APPKEY":"%MEIZUPUSH_APPKEY%",
            //OPPO
            "OPPOPUSH_APPKEY":"%OPPOPUSH_APPKEY%",
            "OPPOPUSH_APPSECRET":"%OPPOPUSH_APPSECRET%",
            //华为
            "com.huawei.hms.client.appid":"%com.huawei.hms.client.appid%",
            //vivo
            "com.vivo.push.app_id":"%com.vivo.push.app_id%",
            "com.vivo.push.api_key":"%com.vivo.push.api_key%",
            //荣耀
            "com.hihonor.push.app_id":"%com.hihonor.push.app_id%",
        ]
    }
}

dependencies {
    implementation 'com.getui:gtc-dcloud:3.2.16.7'  //个推核心组件
    implementation('com.getui:gtsdk:3.3.7.0'){ exclude(group: 'com.getui') }  //个推SDK
}


```
`GETUI_APPID`与`PUSH_APPID` 在开发者中心->uni-push->2.0->消息推送->配置管理->应用配置->AppID，请务必填写一致，`PUSH_APPID`字段是与一键登录出现AppID冲突时优先读取。

厂商相关的字段内容，在开发者中心->uni-push->2.0->厂商推送设置。


### 本地依赖库

|名称                   |备注|
|:--				    |:--|
|uni-push-release.aar   ||
|gt-lib.aar             | 包含厂商推送依赖库|

将本地依赖库复制到app项目的libs下。


#### 华为配置


##### Gradle配置

* 需在项目根目录下的build.gradle增加华为推送的仓库地址
```
buildscript {
	repositories {
		jcenter()
		google()
		// 配置HMS Core SDK的Maven仓地址。
		maven {url 'https://developer.huawei.com/repo/'}
	}
	dependencies {
		// 增加agcp配置。
		classpath 'com.huawei.agconnect:agcp:1.6.0.300'
	}
}
allprojects {
	repositories {
		jcenter()
		google()
		// 配置HMS Core SDK的Maven仓地址。
		maven {url 'https://developer.huawei.com/repo/'}
	}
}
```

* 项目应用下的build.gradle

在文件头 apply plugin: 'com.android.application' 下一行添加如下配置。


```
apply plugin: 'com.android.application'
apply plugin: 'com.huawei.agconnect'
```

* 添加添加华为推送的配置文件

登录华为的AppGallery Connect网站，找到需要集成华为推送的应用，在“项目设置 > 常规”页面的“应用”区域，点击`agconnect-services.json`下载配置文件。


将`agconnect-services.json`文件拷贝到应用级根目录下即可。



