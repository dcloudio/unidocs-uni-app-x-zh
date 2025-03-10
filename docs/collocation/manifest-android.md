## ANDROID配置

### 权限配置 @permissions

uni-app x项目使用[uni内置模块](./manifest-modules.md#utsmodules)时，云端打包会自动添加模块、插件声明需要的Android权限，也可以额外添加或强制移除某些权限。

> HBuilderX4.54以前的版本，需在项目的[AndroidManifest.xml](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions)中手动编辑添加Android权限  
> HBuilderX4.54及以上版本，支持在项目的 manifest.json 中配置额外添加或强制移除Android权限  

#### 额外添加的权限 @incloudpermissions

应用云端打包时，如果希望额外添加Android权限，可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 permissions。
如下示例配置应用额外添加 android.permission.REQUEST_INSTALL_PACKAGES 权限：
```json
{
  "app": {
    "distribute": {
      "android": {
        "permissions": [
          "<uses-permission android:name=\"android.permission.REQUEST_INSTALL_PACKAGES\"/>"
        ]
      }
    }
  }
}
```

**注意**  
- android:name字段值使用的双引号前面需要加转义斜线“\”  


#### 强制移除的权限 @excludepermissions

应用云端打包时，如果希望不包含内置模块、插件声明需要的Android权限，可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 excludePermissions。  
如下示例配置应用强制移除 android.permission.READ_MEDIA_IMAGES、android.permission.READ_MEDIA_VIDEO 权限：
```json
{
  "app": {
    "distribute": {
      "android": {
        "excludePermissions": [
          "<uses-permission android:name=\"android.permission.READ_MEDIA_IMAGES\"/>",
          "<uses-permission android:name=\"android.permission.READ_MEDIA_VIDEO\"/>"
        ]
      }
    }
  }
}
```

**注意**  
- android:name字段值使用的双引号前面需要加转义斜线“\”  
- 强制移除的权限优先级高于额外添加的权限，也就是某个权限如果同时配置了额外添加和强制移除，最终打包结果是移除此权限  


### minSdkVersion @minsdkversion
minSdkVersion用于指定应用兼容的最低Android版本（API等级），uni-app x 项目默认值为21（即最低支持Android5）。 如果APP某些功能无法支持低版本Android系统的设备，可以配置minSdkVersion确保APP只能安装到指定Android版本及以上的设备。

minSdkVersion值为Number类型，且必须为正整数，取值范围参考[Android版本列表](#apilevellist)中的API等级。

> App升级时 minSdkVersion 只能增加不能降低，也就是说 minSdkVersion 高的App无法被 minSdkVersion 低的App覆盖安装，开发者需要注意！

如需更改此值，可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 minSdkVersion。  
如下示例配置 minSdkVersion 为 26：  
```json
{
  "app": {
    "distribute": {
      "android": {
        "minSdkVersion": 26
      }
    }
  }
}
```


### targetSdkVersion @targetsdkversion
targetSdkVersion用于指定应用的目标Android版本（API等级），uni-app x 项目默认值为32（即Android12L）。

设置targetSdkVersion值表示App适配的Android版本（API等级），设置低版本的targetSdkVersion会使APP兼容模式运行，也就可能无法用到新系统的特性，甚至在兼容模式下运行可能存在安全漏洞等问题。 随着Android系统的升级，一些应用市场会要求设置较高的targetSdkVersion才可以提交，HBuilderX中可在项目的manifest.json中进行配置。

targetSdkVersion值为Number类型，且必须为正整数，取值范围参考[Android版本列表](#apilevellist)中的API等级。

> App升级时 targetSdkVersion 只能增加不能降低，也就是说 targetSdkVersion 高的App无法被 targetSdkVersion 低的App覆盖安装，开发者需要注意！
> Android 15 设备对 targetSdkVersion 版本有要求，低于24无法正常在android 15设备上正常安装，开发者需要注意！

如需更改此值，可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 targetSdkVersion。  
如下示例配置 targetSdkVersion 为 35：  
```json
{
  "app": {
    "distribute": {
      "android": {
        "targetSdkVersion": 35
      }
    }
  }
}
```


### 应用支持CPU类型（abiFilters） @abifilters

Android平台配置CPU类型针对的是为了提高运行效率使用C/C++语言开发生成的so库，需要为各cpu类型平台单独编译生成对应指令的so库。Java语言开发的代码运行在虚拟机中，由虚拟机适配CPU类型，不涉及到此问题。

uni-app x 项目已适配支持以下主流CPU类型：  
- armeabi-v7a  
  第7代及以上的ARM处理器（ARM32位），大多数老手机使用此CPU类型
- arm64-v8a  
  第8代、64位ARM处理器（ARM64位），2017年后发布的设备使用此CPU类型，可以兼容使用armeabi-v7a的so库  
  2022年8月国内应用商店要求新上架的应用必须兼容64为ARM硬件  
- x86  
  少部分平板使用x86，AS模拟器中选了intel x86时使用x86处理器，以及其它常用三方模拟器通常使用x86
- x86_64
  部分平板使用，大多数模拟器使用64为的x86处理器

uni-app x 项目云端打包默认仅包含“arm64-v8a”，如需支持其它CPU类型，可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 abiFilters。  
如下示例配置支持 armeabi-v7a、arm64-v8a、x86、x86_64 CPU类型：  
```json
{
  "app": {
    "distribute": {
      "android": {
        "abiFilters": [
          "armeabi-v7a",
          "arm64-v8a",
          "x86",
          "x86_64"
        ]
      }
    }
  }
}
```

**注意**
- 支持的CPU类型越多，安装包会越大  
- 使用uts插件时，如果插件也包含或依赖使用了so库，需确认插件是否支持配置CPU类型，如果插件不支持可能会导致应用运行异常  


### manifestPlaceholders @manifestplaceholders

manifest.json中不提供配置 `manifestPlaceholders` 数据，如果应用使用的插件或三方SDK需要使用，可在项目的 `nativeResources/android/manifestPlaceholders.json` 文件中配置，详情参考[Android原生应用清单文件和资源](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#manifestplaceholders)。


### enableResourceOptimizations @enableresourceoptimizations

> HBuilder4.33版本新增支持 enableResourceOptimizations 配置项

Android平台云端打包时原生工程 gradle.properties 的 android.enableResourceOptimizations 配置项，配置是否开启Android原生res资源文件优化，开启后res资源文件名称会被混淆，默认值为 ture，如不希望混淆原生res资源文件名称，可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 enableResourceOptimizations。
如下示例：  
```json
{
  "app": {
    "distribute": {
      "android": {
        "enableResourceOptimizations": false
      }
    }
  }
}
```


### aaptOptions @aaptoptions

> HBuilder4.31版本新增支持

Android平台云端打包时原生工程应用 build.gradle 的 aaptOptions配置项，支持的属性参考：[Android官方文档](https://developer.android.google.cn/reference/tools/gradle-api/7.1/com/android/build/api/dsl/AaptOptions?hl=en)。  
可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 aaptOptions，如下示例：  
```json
{
  "app": {
    "distribute": {
      "android": {
        "aaptOptions": [
            "noCompress 'png', 'jpg', 'jpeg'"  //配置禁止对 png、jpg、jpeg格式的文件进行压缩
        ]
      }
    }
  }
}
```

**注意**  
云端打包默认包含以下配置：  
- additionalParameters '--auto-add-overlay'
- ignoreAssetsPattern '!.svn:!.git:.*:!CVS:!thumbs.db:!picasa.ini:!*.scc:*~'


### buildFeatures @buildfeatures

> HBuilder4.31版本新增支持

Android平台云端打包时原生工程应用 build.gradle 的 buildFeatures 配置项，支持的属性参考：[Android官方文档](https://developer.android.google.cn/reference/tools/gradle-api/7.1/com/android/build/api/dsl/BuildFeatures?hl=en)。  
可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 buildFeatures，如下示例：  
```json
{
  "app": {
    "distribute": {
      "android": {
        "buildFeatures": [
          "viewBinding true",  //开启dataBinding
          "dataBinding true"   //开启viewBinding
        ]
      }
    }
  }
}
```


### packagingOptions @packagingoptions

Android平台云端打包时原生工程应用 build.gradle 的 packagingOptions 配置项，支持的属性参考：[Android官方文档](https://developer.android.google.cn/reference/tools/gradle-api/7.4/com/android/build/api/dsl/PackagingOptions)。  
可在项目 manifest.json 文件的 "app" -> "distribute" -> "android" 节点配置 packagingOptions，如下示例源码：
```json
{
  "app": {
    "distribute": {
      "android": {
        "packagingOptions": [
          "exclude 'META-INF/LICENSE'",    //排除文件META-INF/LICENSE
          "exclude 'META-INF/LICENSE.txt'" //排除文件META-INF/LICENSE.txt
        ]
      }
    }
  }
}
```

云端打包默认包含以下配置：
- pickFirst 'lib/*/libstlport_shared.so'
- pickFirst 'lib/*/libc++_shared.so'


### Android版本列表 @apilevellist  
API等级与Android版本对应列表如下：
| API等级 | Android版本号 | Android版本名称 |  
| :-- | :-- | :-- |  
| 36 | Android16 | Android W |  
| 35 | Android15 | Android V, Vanilla Ice Cream |  
| 34 | Android14 | Android U, Upside Down Cake |  
| 33 | Android13 | Android T, Tiramisu |  
| 32 | Android12L | Android Sv2 |  
| 31 | Android12 | Android S, Snow Cone |  
| 30 | Android11 | Android R, Red Velvet Cake |  
| 29 | Android10 | Android Q, Quince Tart |  
| 28 | Android9 | Android P, Pie |  
| 27 | Android8.1 | Android O_MR1 |  
| 26 | Android8.0 | Android O, Oreo |  
| 25 | Android7.1 | Android N_MR1 |  
| 24 | Android7.0 | Android N, Nougat |  
| 23 | Android6.0 | Android M, Marshmallow |  
| 22 | Android5.1 | Android L_MR1 |  
| 21 | Android5.0 | Android L, Lollipop |  


以上仅列出uni-app x支持的版本信息，完整API级别信息请参考Google官方文档[Android API级别说明](https://developer.android.com/guide/topics/manifest/uses-sdk-element?hl=zh-cn#ApiLevels)。  
