## uni-getLocation

### system 

|本地依赖库名称						|
|:--								|
|uni-getLocation-system-release.aar	|

#### 插件注册

将以下内容添加到主模块的build.gradle。

```groovy
defaultConfig {
    buildConfigField 'String', 'UTSRegisterProviders', '\"[{\\\"name\\\":\\\"system\\\",\\\"service\\\":\\\"location\\\",\\\"class\\\":\\\"uts.sdk.modules.DCloudUniGetLocationSystem.UniLocationSystemProviderImpl\\\"}]\"'
}
```

### tencent

项目应用下的build.gradle添加：

```groovy
dependencies {
    "com.tencent.map.geolocation:TencentLocationSdk-openplatform:7.5.4.8"
}
```

|本地依赖库名称						|
|:--								|
|uni-getLocation-tencent-release.aar|

#### 插件注册

将以下内容添加到主模块的build.gradle。

```groovy
defaultConfig {
    buildConfigField 'String', 'UTSRegisterProviders', '\"[{\\\"name\\\":\\\"tencent\\\",\\\"service\\\":\\\"location\\\",\\\"class\\\":\\\"uts.sdk.modules.DCloudUniGetLocationTencent.UniLocationTencentProviderImpl\\\"}]\"'
}
```