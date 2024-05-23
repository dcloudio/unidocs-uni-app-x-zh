## 准备

- HBuilder X （4.18版本及以上）
- android studio

***
说明：当前文档基于android studio 2023.2.1 Patch 2。gradle版本为8.4。gradle插件版本为8.2.2。kotlin插件版本为1.9.10。
***

## 新建项目

android studio中新建项目，模板选择`No Activity`。下一步选语言kotlin和Build configuration language，如下图：

![](https://web-ext-storage.dcloud.net.cn/native/doc/android/create_project.jpg)

**注意**
- `Language` 一定要选择`Kotlin`。
- uni-app x最低支持版本为21，`Minimum SDK`需要选择21及以上的版本。
- `Build configuration language`建议选择`Groovy DSL(build.gradle)`。以下教程均按照此模式进行。
- `Name`建议与manifest.json中的`name`字段一致。
- `Package name`作为应用标志，涉及申请第三方平台账号，一般情况下不建议修改，包名一般设置反向域名。


## 工程配置

### 基础库配置

将uts-runtime-release.aar，android-gif-drawable-1.2.28.aar，app-common-release.aar，app-runtime-release.aar，breakpad-build-release.aar，dcloud-layout-release.aar，
framework-release.aar，uni-exit-release.aar，uni-getAccessibilityInfo-release.aar，uni-getAppAuthorizeSetting-release.aar，uni-getAppBaseInfo-release.aar，
uni-getSystemSetting-release.aar，uni-openAppAuthorizeSetting-release.aar，uni-prompt-release.aar，uni-storage-release.aar，uni-getDeviceInfo-release.aar，
uni-getSystemInfo-release.aar共17个aar拷贝到app模块的libs下，如果没有libs需要手动创建，参考下图：

![](https://web-ext-storage.dcloud.net.cn/native/doc/android/main_libs.jpg)

### 修改build.gradle

修改app模块下的build.gradle

- 添加依赖
	
	将下面的依赖信息添加到build.gradle中
	
	```groovy
	dependencies {
		implementation fileTree(include: ['*.aar'], dir: './libs')
		implementation("androidx.core:core-ktx:1.8.0")
		implementation("androidx.recyclerview:recyclerview:1.0.0")
		implementation("androidx.appcompat:appcompat:1.0.0")
		implementation("androidx.exifinterssface:exifinterface:1.3.6")
		implementation("androidx.localbroadcastmanager:localbroadcastmanager:1.0.0@aar")
		implementation("androidx.constraintlayout:constraintlayout:2.1.4")
		implementation("com.google.android.material:material:1.4.0")
		implementation("androidx.viewpager2:viewpager2:1.1.0-beta02")
		implementation("com.alibaba:fastjson:1.2.83")
		implementation("com.facebook.fresco:fresco:3.1.3")
		implementation("com.facebook.fresco:middleware:3.1.3")
		implementation("com.facebook.fresco:animated-gif:3.1.3")
		implementation("com.facebook.fresco:webpsupport:3.1.3")
		implementation("com.facebook.fresco:animated-webp:3.1.3")
		implementation("com.github.bumptech.glide:glide:4.9.0")
		implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
		implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.6.4")
		implementation("org.jetbrains.kotlin:kotlin-stdlib:1.8.10")
		implementation("org.jetbrains.kotlin:kotlin-reflect:1.8.10")
		implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.4.1")
		implementation("com.squareup.okhttp3:okhttp:3.12.12")
		implementation("org.jetbrains.kotlin:kotlin-reflect:1.8.10")
		implementation("com.github.getActivity:XXPermissions:18.0")
	}
	```

- 添加aaptOptions配置

	将aaptOptions配置添加到android节点下
	```groovy
    aaptOptions {
        additionalParameters '--auto-add-overlay'
        ignoreAssetsPattern '!.svn:!.git:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~'
    }
	```

- 配置应用版本号

	![](https://web-ext-storage.dcloud.net.cn/native/doc/android/versions.jpg)

	`versionCode`为应用的版本号（整数值），用于各应用市场的升级判断，建议与manifest.json中versionCode值一致

	`versionName`为应用的版本名称（字符串），在系统应用管理程序中显示的版本号，建议与manifest.json中versionName值一致。

	`applicationId`为应用的包名，一般设置为反向域名，不建议修改。

	按应用市场要求，建议将`targetSdk`设置为30或以上。

	uni-app x `minSdk`最低支持21，小于21将无法编译通过。

	`namespace`对应原来的AndroidManifest.xml的`package`字段，如果没有特殊设置，建议与`applicationId`一致。`namespace`字段不能删除。

完整的build.gradle可参考：

```groovy
plugins {
    alias(libs.plugins.androidApplication)
    alias(libs.plugins.jetbrainsKotlinAndroid)
}

android {
    // namespace 与 applicationId 保持一致
    namespace 'uni.UNIAF21722'
    compileSdk 34

    defaultConfig {
        applicationId "uni.UNIAF21722"
        minSdk 24
        targetSdk 34
        versionCode 1
        versionName "1.0"
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = '1.8'
    }
    // 一定要加
    aaptOptions {
        additionalParameters '--auto-add-overlay'
        ignoreAssetsPattern '!.svn:!.git:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~'
    }
}

dependencies {
    implementation fileTree(include: ['*.aar'], dir: './libs')
    implementation("androidx.core:core-ktx:1.8.0")
    implementation("androidx.recyclerview:recyclerview:1.0.0")
    implementation("androidx.appcompat:appcompat:1.0.0")
    implementation("androidx.exifinterface:exifinterface:1.3.6")
    implementation("androidx.localbroadcastmanager:localbroadcastmanager:1.0.0@aar")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation("com.google.android.material:material:1.4.0")
    implementation("androidx.viewpager2:viewpager2:1.1.0-beta02")
    implementation("com.alibaba:fastjson:1.2.83")
    implementation("com.facebook.fresco:fresco:3.1.3")
    implementation("com.facebook.fresco:middleware:3.1.3")
    implementation("com.facebook.fresco:animated-gif:3.1.3")
    implementation("com.facebook.fresco:webpsupport:3.1.3")
    implementation("com.facebook.fresco:animated-webp:3.1.3")
    implementation("com.github.bumptech.glide:glide:4.9.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.6.4")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.6.4")
    implementation("org.jetbrains.kotlin:kotlin-stdlib:1.8.10")
    implementation("org.jetbrains.kotlin:kotlin-reflect:1.8.10")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.4.1")
    implementation("com.squareup.okhttp3:okhttp:3.12.12")
    implementation("org.jetbrains.kotlin:kotlin-reflect:1.8.10")
    implementation("com.github.getActivity:XXPermissions:18.0")
}
```

### 修改项目的settings.gradle

在项目根路径下的settings.gradle中添加`jitpack`的maven的仓库地址，参考如下：

```groovy
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven { url = uri("https://jitpack.io") }
    }
}
```

### 修改项目的gradle.properties

在项目根路径下的gradle.properties中追加如下内容

```groovy
android.useAndroidX=true
android.enableJetifier=true
```

### 修改AndroidManifest.xml

- 添加activity

	首先将原来application节点下的内容全部删除，然后将下面内容拷贝到application节点下

	```xml
        <activity
            android:name="io.dcloud.uniapp.UniAppActivity"
            android:configChanges="orientation|keyboard|keyboardHidden|smallestScreenSize|screenLayout|screenSize|mcc|mnc|fontScale|navigation|uiMode"
            android:exported="true"
            android:label="@string/app_name"
            android:screenOrientation="portrait"
            android:theme="@style/UniAppX.Activity.DefaultTheme"
            android:windowSoftInputMode="adjustResize"
            tools:replace="android:label,android:exported,android:theme,android:configChanges,android:windowSoftInputMode,android:screenOrientation">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <activity
            android:name="io.dcloud.uniapp.appframe.activity.UniPageActivity"
            android:configChanges="orientation|keyboard|keyboardHidden|smallestScreenSize|screenLayout|screenSize|mcc|mnc|fontScale|navigation|uiMode"
            android:screenOrientation="portrait"
            tools:replace="android:configChanges,android:screenOrientation" />
	```

- 添加appid

	在application节点下添加`DCLOUD_UNI_APPID`节点
	```xml
	<meta-data
		android:name="DCLOUD_UNI_APPID" android:value="替换成应用的appid" />
	```
- 合并AndroidManifest.xml
	
	如果uni-app x项目下存在AndroidManifest.xml，需要将uni-app x项目下的AndroidManifest.xml中的内容拷贝到android项目下的AndroidManifest.xml中。
	
	注意：拷贝时需要按照xml结构拷贝过去，不能整体覆盖

- 修改application

	将`application`节点的`android:name`修改为`io.dcloud.uniapp.UniApplication`

	**注意：如果需要自定义application，必须继承自UniApplication**
	
### Splash配置

在`app模块->src->main->res->values`新建`uniappx-splashscreen.xml`文件，将下面内容拷贝到xml文件中。

```xml
<resources xmlns:tools="http://schemas.android.com/tools">
    <style name="UniAppX.Activity.SplashScreenTheme" parent="@style/UniAppX.Activity.DefaultTheme">
        <item name="android:colorControlActivated">#2196F3</item>
        <item name="android:windowBackground">@drawable/uniappx_splashscreen</item>
    </style>
</resources>
```

在`app模块->src->main->res->values-v31`新建`uniappx-splashscreen.xml`文件，将下面内容拷贝到xml文件中。

```xml
<resources xmlns:tools="http://schemas.android.com/tools">
    <style name="UniAppX.Activity.SplashScreenTheme" parent="@style/UniAppX.Activity.DefaultTheme">
        <item name="android:windowSplashScreenBackground">@color/uniappx_splashscreen_background</item>
        <item name="android:windowSplashScreenAnimatedIcon">@drawable/uniappx_splashscreen_icon</item>
        <item name="android:windowSplashScreenBrandingImage">@drawable/uniappx_splashscreen_brand</item>
    </style>
</resources>
```

注意：目录不存在的话按照上面说明直接新建即可。

Splash字段说明：
- `uniappx_splashscreen`对应的是uni-app x项目的manifest.json的`app->distribute->splashScreens->android`。你需要将不同屏幕密度对应的文件拷贝到对应的drawable目录下。如`xhdpi`对应的是`drawable-xhdpi`目录。如果app模块->src->main->res下不存在`drawable-xhdpi`目录，你需要新建一个同名目录，并将图片重命名为`uniappx_splashscreen`，扩展名不变。
- `uniappx_splashscreen_background`对应的是uni-app x项目的manifest.json的`app->distribute->splashScreens->android12->background`。你需要替换`@color/uniappx_splashscreen_background`为manifest.json中对应的值。
- `uniappx_splashscreen_icon`对应的是uni-app x项目的manifest.json的`app->distribute->splashScreens->android12->icon`。你需要将不同屏幕密度对应的文件拷贝到对应的drawable目录下。如`xhdpi`对应的是`drawable-xhdpi`目录。如果app模块->src->main->res下不存在`drawable-xhdpi`目录，你需要新建一个同名目录，并将图片重命名为`uniappx_splashscreen_icon`，扩展名不变。
- `uniappx_splashscreen_brand`对应的是uni-app x项目的manifest.json的`app->distribute->splashScreens->android12->brand`。你需要将不同屏幕密度对应的文件拷贝到对应的drawable目录下。如`xhdpi`对应的是`drawable-xhdpi`目录。如果app模块->src->main->res下不存在`drawable-xhdpi`目录，你需要新建一个同名目录，并将图片重命名为`uniappx_splashscreen_brand`，扩展名不变。

xml文件配置成功之后，修改AndroidManifest.xml中`android:name`为`io.dcloud.uniapp.UniAppActivity`的activity节点的`android:theme`为`@style/UniAppX.Activity.SplashScreenTheme`。

各字段对应的说明可以参考[splash启动封面配置文档。](https://doc.dcloud.net.cn/uni-app-x/collocation/manifest-splashscreen.html)

### 应用图标配置

应用图标对应的是uni-app x项目manifest.json中的`app->distribute->icons->android`。你需要根据不同的分辨率将对应的资源拷贝到对应的drawable目录下。
然后修改AndroidManifest.xml中application节点的`android:icon`属性值为对应图片的名称。如：我将图片命名为`icon.png`，参考下图。

![](https://web-ext-storage.dcloud.net.cn/native/doc/android/set_icon.jpg)

### 应用名称配置

应用名称默认定义为`app_name`字段，位于`app->src->main->res->values->strings.xml`。该值为安装到手机上桌面显示的应用名称，建议与manifest.json中name（基础配置中的应用名称）对应。

### 拷贝资源文件
1. [导出uni-app x项目的资源文件](../export/export.md)
2. 将app-android目录下与appid对应的目录拷贝到主项目的`assets/apps`目录下
	
	![](https://web-ext-storage.dcloud.net.cn/native/doc/android/app_assets.png)
	
	**注意：apps下的appid必须与AndroidManifest.xml的`DCLOUD_UNI_APPID`保持一致。**
	
### 拷贝kt文件
需要将`unkackage/resource/app-android/uniappx/app-android/src/`目录下的所有文件拷贝到项目的`src/main/java`下

[图片]

注意：不要破坏原有src下的目录结构。

## 配置uts插件

离线打包导出成功之后，uts插件资源位于`unpackage/resource/app-android/uni_modules`下。

如果不包含uts插件，可以[跳过](#配置内置模块)此章节。

注意：付费uts插件不支持离线打包。

为方便区分，`uts插件`指前端封装的uni_modules插件；`android uts插件`指根据编译后的`uts插件`生成的安卓原生模块。

### 新建android uts插件模块

点击File->New->New Module...

![](https://web-ext-storage.dcloud.net.cn/native/doc/android/new_modules.png)

点击左侧`Templates`的`Android Library`。

`Language`选择`Kotlin`。

`Module name`建议与uts插件模块名称一致。

点击`Finish`。

*** 
注意：
- `Templates`一定要选择`Android Library`。
- `Language`一定要选择`Kotlin`。
- `Build configuration language`建议选择`Groovy DSL(build.gradle)`。以下教程均按照此模式进行。
***

### 修改android uts插件模块的build.gradle

添加依赖

```groovy
dependencies {
    compileOnly fileTree(include: ['*.aar'], dir: '../app/libs')
	compileOnly fileTree(include: ['*.aar'], dir: './libs')
    compileOnly "com.alibaba:fastjson:1.2.83"
    compileOnly "androidx.core:core-ktx:1.10.1"
    compileOnly 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.8'
    compileOnly 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.8'
}
```

+ **注意：uni-app需要添加如下依赖到build.gradle中**
	
	```groovy
	dependencies {
		compileOnly fileTree(include: ['*.aar'], dir: '../app/libs')
		compileOnly fileTree(include: ['*.aar'], dir: './libs')
		compileOnly 'com.alibaba:fastjson:1.1.46.android'
		compileOnly 'org.jetbrains.kotlin:kotlin-gradle-plugin:1.5.10'
		compileOnly 'androidx.core:core-ktx:1.6.0'
		compileOnly 'org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.6.0'
		compileOnly 'org.jetbrains.kotlin:kotlin-reflect:1.6.0'
		compileOnly 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.8'
		compileOnly 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.8'
	}	
	```

****
说明：

android uts插件模块编译时也要依赖基础库。建议直接使用app项目下的libs目录。参考：

```groovy
dependencies {
    compileOnly fileTree(include: ['*.aar'], dir: '../app/libs')
	...
}
```

如果插件依赖其他内置模块，可参考：[模块配置](/docs/uniappxDocs/modules/android/others.md)，将模块对应的配置添加到app项目下。

如果插件依赖其他uts插件，建议优先将依赖的`uts插件`配置成`android uts插件模块`。然后在当前`android uts插件模块`的build.gradle中添加依赖的插件模块。参考：

```groovy
dependencies {
    implementation project(':uts-依赖的android uts插件模块')
	...
}
```

****

### 根据config.json配置应用

如果不包含config.json文件，可以[跳过](#复制资源)此章节。

[config.json配置及参考文档。](../../plugin/uts-plugin.md#androidconfigjson)

如果config.json中不存在下面示例中的任一字段，直接忽略即可。

```json
{
	"abis": [
		"armeabi-v7a","arm64-v8a"
	],
	"dependencies": [
		"androidx.core:core-ktx:1.6.0",
		{
			"id": "com.xxx.richtext:richtext",
			"source": "implementation 'com.xxx.richtext:richtext:3.0.7'"
		}
	],
	"minSdkVersion": 21,
	"project": {
		"plugins": [
			"com.huawei.agconnect"
		],
		"dependencies": [
			"com.huawei.agconnect:agcp:1.6.0.300"
		]
	},
	"components": [{"name": "zl-text","class": "uts.sdk.modules.zlText.ZlTextComponent"}],
	"hooksClass": "uts.sdk.modules.zlText.ZlTextHook"
}
```

**注意：abis、minSdkVersion、dependencies、project在设置android uts插件模块也需要设置到app主模块中。**
- abis
	
	abis表示插件支持的CPU类型，需要将支持的CPU类型添加到android uts插件模块的build.gradle中，参考上面示例，添加内容如下：
	
	```groovy
	android {
		defaultConfig {
			ndk { abiFilters "armeabi-v7a","arm64-v8a" } // 将ndk的内容添加到指定结构下
		}
	}
	```
- minSdkVersion
	
	minSdkVersion表示最小支持的android版本。修改android uts插件模块的build.gradle中的minSdkVersion即可
	
	**注意：部分android studio生成的项目中为minSdk**
	
- dependencies
	
	dependencies为插件依赖的仓储库，需要将dependencies中的依赖添加到android uts插件模块的build.gradle中
	
	对于字符串内容，需要拼接implementation并添加到build.gradle的dependencies下。示例中"androidx.core:core-ktx:1.6.0"可以参考如下内容：
	
	```groovy
	dependencies {
		implementation 'androidx.core:core-ktx:1.6.0'
	}
	```
	
	对于JSON内容，只需要将source对应的内容添加到build.gradle的dependencies下。示例中"id": "com.xxx.richtext:richtext"可以参考如下内容：
	
	```groovy
	dependencies {
		implementation 'com.xxx.richtext:richtext:3.0.7'
	}
	```

- project

	project 为gradle插件的配置。
	
	plugins节点下的内容需要添加到android uts插件模块的build.gradle的plugins下。参考：
	
	```groovy
	plugins {
		id 'com.android.application'
		id 'com.huawei.agconnect'
	}
	```
	
	dependencies节点下的内容需要添加到项目根目录下的build.gradle的buildscript > dependencies中。参考：
	
	```groovy
	buildscript {
		dependencies {
			classpath 'com.android.tools.build:gradle:7.2.0'
			classpath "com.huawei.agconnect:agcp:1.6.0.300"
		}
	}
	allprojects {}
	```
	
- components

	components 为uts组件的注册信息。需要将components对应的内容添加到app主模块的build.gradle。参考配置：
	
	```groovy
	defaultConfig {
		buildConfigField "String", "UTSRegisterComponents", "\"[{\\\"name\\\":\\\"zl-text\\\",\\\"class\\\":\\\"uts.sdk.modules.zlText.ZlTextComponent\\\"}]\""
	}
	```
	
	如果app主模块的build.gradle已经存在UTSRegisterComponents，需要将现有配置与原有配置合并。参考：
	
	```groovy
	buildConfigField "String", "UTSRegisterComponents", "\"[{\\\"name\\\":\\\"zl-a\\\",\\\"class\\\":\\\"zlA.ZlAComponent\\\"},{\\\"name\\\":\\\"zl-text\\\",\\\"class\\\":\\\"uts.sdk.modules.zlText.ZlTextComponent\\\"}]\""
	```
	
	**注意：转义符不能删掉，格式一定严格一致。**
	
- hooksClass
	
	hooksClass 为uts插件[应用程序生命周期函数监听。](https://doc.dcloud.net.cn/uni-app-x/plugin/uts-plugin.html#android-%E5%B9%B3%E5%8F%B0)
	
	需要将hooksClass对应的内容添加到APP模块的build.gradle中。参考配置
	
	```groovy
	defaultConfig {
		buildConfigField 'String[]', 'UTSHooksClassArray', '{\"uts.sdk.modules.zlText.ZlTextHook\"}'
	}
	```
	
	如果app主模块的build.gradle已经存在UTSHooksClassArray，需要将现有配置与原有配置合并。参考：
	
	```groovy
	defaultConfig {
		buildConfigField 'String[]', 'UTSHooksClassArray', '{\"uts.sdk.modules.zlText.ZlTextHook\",\"uts.sdk.modules.zla.ZLAHook\"}'
	}
	```
	
	**注意：转义符不能删掉，格式一定严格一致。**

### 复制资源

根据uts插件的资源目录，将对应的内容拷贝到android uts插件模块下。

**说明：不存在的目录可以不处理。**

#### libs

拷贝uts插件libs下的库到android uts插件模块的libs下，并在android uts插件模块的build.gradle下添加依赖。

```groovy
dependencies {
    ...
	compileOnly fileTree(include: ['*.aar','*.jar'], dir: './libs')
}
```

**注意：uts插件的本地libs下的依赖同样也需要添加到app模块中。**

#### assets

如果存在assets目录，需要将assets文件夹拷贝到`android uts插件模块/src/main/`目录下。

#### res

如果存在res目录，需要将res文件夹拷贝到`android uts插件模块/src/main/`目录下。

#### AndroidManifest.xml

如果存在AndroidManifest.xml文件，需要将AndroidManifest.xml拷贝到`android uts插件模块/src/main/`目录下。

注意：如果AndroidManifest.xml中设置了package字段，必须将此字段删除并将package的内容设置到build.gradle的`namespace`和`applicationId`。`namespace`和`applicationId`的内容必须一致，也必须与原AndroidManifest.xml的`package`一致，否则编译会报错。

#### src

将src目录下的所有文件拷贝到`android uts插件模块/src/main/java`目录下。

### 添加到主项目

将android uts插件模块的依赖添加到主项目的build.gradle的依赖中
```groovy
dependencies {
    ...
	implementation project(':uts-progressNotification')
}
```

## 配置内置模块

根据`unpackage/resource/{appid}/manifest.json`的配置，添加[内置模块的配置](../modules/android/others.md)。

以下模块可以忽略配置：
- uni-exit
- uni-getAccessibilityInfo
- uni-getAppAuthorizeSetting
- uni-getAppBaseInfo
- uni-getDeviceInfo
- uni-getSystemInfo
- uni-getSystemSetting
- uni-openAppAuthorizeSetting
- uni-prompt
- uni-storage

## 运行

连接手机，点击按钮，运行即可。

![avatar](https://img.cdn.aliyun.dcloud.net.cn/nativedocs/5%2BSDK-android/image/7-6.png)