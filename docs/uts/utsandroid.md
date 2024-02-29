# UTSAndroid

app-android平台专有内置对象。在uni-app和uni-app x的uts环境中均可使用。

## 静态方法


### onAppConfigChange(callback)

<!-- UTSJSON.UTSAndroid.onAppConfigChange.description -->

<!-- UTSJSON.UTSAndroid.onAppConfigChange.param -->

<!-- UTSJSON.UTSAndroid.onAppConfigChange.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppConfigChange.compatibility -->

### offAppConfigChange(callback?)

<!-- UTSJSON.UTSAndroid.offAppConfigChange.description -->

<!-- UTSJSON.UTSAndroid.offAppConfigChange.param -->

<!-- UTSJSON.UTSAndroid.offAppConfigChange.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppConfigChange.compatibility -->

### onAppTrimMemory(callback?)

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.description -->

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.param -->

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.compatibility -->

### offAppTrimMemory(callback?)

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.description -->

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.param -->

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.compatibility -->

### onAppActivityPause(callback)

<!-- UTSJSON.UTSAndroid.onAppActivityPause.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityPause.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityPause.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityPause.compatibility -->

### offAppActivityPause(callback?)

<!-- UTSJSON.UTSAndroid.offAppActivityPause.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityPause.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityPause.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityPause.compatibility -->

### onAppActivityResume(callback)

<!-- UTSJSON.UTSAndroid.onAppActivityResume.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityResume.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityResume.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityResume.compatibility -->

### offAppActivityResume(callback?)

<!-- UTSJSON.UTSAndroid.offAppActivityResume.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityResume.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityResume.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityResume.compatibility -->

### onAppActivityDestroy(callback)

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.compatibility -->

### offAppActivityDestroy(callback?)

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.compatibility -->

### onAppActivityResult(callback)

<!-- UTSJSON.UTSAndroid.onAppActivityResult.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityResult.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityResult.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityResult.compatibility -->

### offAppActivityResult(callback?)

<!-- UTSJSON.UTSAndroid.offAppActivityResult.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityResult.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityResult.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityResult.compatibility -->

### onAppActivityBack(callback)

<!-- UTSJSON.UTSAndroid.onAppActivityBack.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityBack.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityBack.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityBack.compatibility -->

### offAppActivityBack(callback?)

<!-- UTSJSON.UTSAndroid.offAppActivityBack.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityBack.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityBack.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityBack.compatibility -->

### getAppContext()

<!-- UTSJSON.UTSAndroid.getAppContext.description -->

<!-- UTSJSON.UTSAndroid.getAppContext.param -->

<!-- UTSJSON.UTSAndroid.getAppContext.returnValue -->

<!-- UTSJSON.UTSAndroid.getAppContext.compatibility -->

```uts
let packageName = UTSAndroid.getAppContext()?.packageName
console.log("packageName",packageName)
```

### getUniActivity()

<!-- UTSJSON.UTSAndroid.getUniActivity.description -->

<!-- UTSJSON.UTSAndroid.getUniActivity.param -->

<!-- UTSJSON.UTSAndroid.getUniActivity.returnValue -->

<!-- UTSJSON.UTSAndroid.getUniActivity.compatibility -->

```uts
// 获取第一个可以响应图像采集行为组件
let takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
if (takePictureIntent.resolveActivity(UTSAndroid.getUniActivity()!.getPackageManager()) != null) {
	UTSAndroid.getUniActivity()!.startActivityForResult(takePictureIntent, 1001);
}
```

### getResourcePath(resourceName)

<!-- UTSJSON.UTSAndroid.getResourcePath.description -->

<!-- UTSJSON.UTSAndroid.getResourcePath.param -->

<!-- UTSJSON.UTSAndroid.getResourcePath.returnValue -->

<!-- UTSJSON.UTSAndroid.getResourcePath.compatibility -->

### exit()

<!-- UTSJSON.UTSAndroid.exit.description -->

<!-- UTSJSON.UTSAndroid.exit.param -->

<!-- UTSJSON.UTSAndroid.exit.returnValue -->

<!-- UTSJSON.UTSAndroid.exit.compatibility -->

### getDispatcher(threadName)

<!-- UTSJSON.UTSAndroid.getDispatcher.description -->

<!-- UTSJSON.UTSAndroid.getDispatcher.param -->

<!-- UTSJSON.UTSAndroid.getDispatcher.returnValue -->

<!-- UTSJSON.UTSAndroid.getDispatcher.compatibility -->


```uts
// 不传任何参数，得到是当前代码运行线程
let currentDispatcher = UTSAndroid.getDispatcher()
console.log("currentDispatcher",currentDispatcher)
// 期望在 io 任务队列执行
UTSAndroid.getDispatcher("io").async(function(_){
    console.log("当前任务执行在",Thread.currentThread().getName())
    // 期望在 主线程 任务队列执行
    UTSAndroid.getDispatcher("main").async(function(_){
        console.log("当前任务执行在",Thread.currentThread().getName())
        currentDispatcher.async(function(_){
            console.log("起始任务执行在",Thread.currentThread().getName())
        },null)
    },null)
},null)
```

### getAppId()

<!-- UTSJSON.UTSAndroid.getAppId.description -->

<!-- UTSJSON.UTSAndroid.getAppId.param -->

<!-- UTSJSON.UTSAndroid.getAppId.returnValue -->

<!-- UTSJSON.UTSAndroid.getAppId.compatibility -->

```uts
let appid = UTSAndroid.getAppId()
console.log("appid",appid)
```

### getOsTheme()

<!-- UTSJSON.UTSAndroid.getOsTheme.description -->

<!-- UTSJSON.UTSAndroid.getOsTheme.param -->

<!-- UTSJSON.UTSAndroid.getOsTheme.returnValue -->

<!-- UTSJSON.UTSAndroid.getOsTheme.compatibility -->

```uts
let theme = UTSAndroid.getOsTheme()
console.log("OsTheme",theme)
```

### isUniMp()

<!-- UTSJSON.UTSAndroid.isUniMp.description -->

<!-- UTSJSON.UTSAndroid.isUniMp.param -->

<!-- UTSJSON.UTSAndroid.isUniMp.returnValue -->

<!-- UTSJSON.UTSAndroid.isUniMp.compatibility -->

```uts
let isUniMp = UTSAndroid.isUniMp()
console.log("isUniMp",isUniMp)
```

### getAppName()

<!-- UTSJSON.UTSAndroid.getAppName.description -->

<!-- UTSJSON.UTSAndroid.getAppName.param -->

<!-- UTSJSON.UTSAndroid.getAppName.returnValue -->

<!-- UTSJSON.UTSAndroid.getAppName.compatibility -->

```uts
let appName = UTSAndroid.getAppName()
console.log("AppName",appName)
```

### getAppVersion()

<!-- UTSJSON.UTSAndroid.getAppVersion.description -->

<!-- UTSJSON.UTSAndroid.getAppVersion.param -->

<!-- UTSJSON.UTSAndroid.getAppVersion.returnValue -->

<!-- UTSJSON.UTSAndroid.getAppVersion.compatibility -->

```uts
let appVersion = UTSAndroid.getAppVersion()
console.log("AppVersion",appVersion)
```

### getInnerVersion()

<!-- UTSJSON.UTSAndroid.getInnerVersion.description -->

<!-- UTSJSON.UTSAndroid.getInnerVersion.param -->

<!-- UTSJSON.UTSAndroid.getInnerVersion.returnValue -->

<!-- UTSJSON.UTSAndroid.getInnerVersion.compatibility -->

```uts
let innerVersion = UTSAndroid.getInnerVersion()
console.log("InnerVersion",innerVersion)
```

### isUniAppX()

<!-- UTSJSON.UTSAndroid.isUniAppX.description -->

<!-- UTSJSON.UTSAndroid.isUniAppX.param -->

<!-- UTSJSON.UTSAndroid.isUniAppX.returnValue -->

<!-- UTSJSON.UTSAndroid.isUniAppX.compatibility -->

```uts
let isUniAppX = UTSAndroid.isUniAppX()
console.log("isUniAppX",isUniAppX)
```

### getAppCachePath()

<!-- UTSJSON.UTSAndroid.getAppCachePath.description -->

<!-- UTSJSON.UTSAndroid.getAppCachePath.param -->

<!-- UTSJSON.UTSAndroid.getAppCachePath.returnValue -->

<!-- UTSJSON.UTSAndroid.getAppCachePath.compatibility -->

* 如果编译报错找不到该方法，手动删除“uniapp-runextension”插件重新安装 或者 重新下载安装最新版本 HBuilder X 即可修复*


```uts
let appCachePath = UTSAndroid.getAppCachePath()
console.log("AppCachePath",appCachePath)
```


### rpx2px(rpx:number) : number;

<!-- UTSJSON.UTSAndroid.rpx2px.description -->

<!-- UTSJSON.UTSAndroid.rpx2px.param -->

<!-- UTSJSON.UTSAndroid.rpx2px.returnValue -->

<!-- UTSJSON.UTSAndroid.rpx2px.compatibility -->

### devicePX2px(devicePX:number) : number;

<!-- UTSJSON.UTSAndroid.devicePX2px.description -->

<!-- UTSJSON.UTSAndroid.devicePX2px.param -->

<!-- UTSJSON.UTSAndroid.devicePX2px.returnValue -->

<!-- UTSJSON.UTSAndroid.devicePX2px.compatibility -->


### isPrivacyAgree() : boolean;

<!-- UTSJSON.UTSAndroid.isPrivacyAgree.description -->

<!-- UTSJSON.UTSAndroid.isPrivacyAgree.param -->

<!-- UTSJSON.UTSAndroid.isPrivacyAgree.returnValue -->

<!-- UTSJSON.UTSAndroid.isPrivacyAgree.compatibility -->


### setPrivacyAgree(state:boolean):void;

<!-- UTSJSON.UTSAndroid.setPrivacyAgree.description -->

<!-- UTSJSON.UTSAndroid.setPrivacyAgree.param -->

<!-- UTSJSON.UTSAndroid.setPrivacyAgree.returnValue -->

<!-- UTSJSON.UTSAndroid.setPrivacyAgree.compatibility -->

### resetPrivacyAgree():void;

<!-- UTSJSON.UTSAndroid.resetPrivacyAgree.description -->

<!-- UTSJSON.UTSAndroid.resetPrivacyAgree.param -->

<!-- UTSJSON.UTSAndroid.resetPrivacyAgree.returnValue -->

<!-- UTSJSON.UTSAndroid.resetPrivacyAgree.compatibility -->

### requestSystemPermission()

<!-- UTSJSON.UTSAndroid.requestSystemPermission.description -->

<!-- UTSJSON.UTSAndroid.requestSystemPermission.param -->

<!-- UTSJSON.UTSAndroid.requestSystemPermission.returnValue -->

<!-- UTSJSON.UTSAndroid.requestSystemPermission.compatibility -->

```uts

	let permissionNeed = ["android.permission.CAMERA"]
    // 请求拍照权限
	UTSAndroid.requestSystemPermission(UTSAndroid.getUniActivity()!, permissionNeed, function (allRight : boolean, _ : string[]) {
		if (allRight) {
			// 权限请求成功
		} else {
			//用户拒绝了部分权限
		}
	}, function (_ : boolean, _ : string[]) {
		//用户拒绝了部分权限
	})

```

### checkSystemPermissionGranted()

<!-- UTSJSON.UTSAndroid.checkSystemPermissionGranted.description -->

<!-- UTSJSON.UTSAndroid.checkSystemPermissionGranted.param -->

<!-- UTSJSON.UTSAndroid.checkSystemPermissionGranted.returnValue -->

<!-- UTSJSON.UTSAndroid.checkSystemPermissionGranted.compatibility -->

```uts
let permissionCheck = ["android.permission.CAMERA"]
// 请求拍照权限
if (UTSAndroid.checkSystemPermissionGranted(UTSAndroid.getUniActivity()!, permissionCheck)) {
	console.log("当前已具备指定权限")
}else{
	console.log("当前不具备指定权限")
}
```


### gotoSystemPermissionActivity()

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.description -->

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.param -->

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.returnValue -->

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.compatibility -->


### getSystemPermissionDenied()

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.description -->

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.param -->

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.returnValue -->

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.compatibility -->


```uts
	let permissionNeed = ["android.permission.READ_PHONE_STATE"]
	if (UTSAndroid.getSystemPermissionDenied(UTSAndroid.getUniActivity()!, permissionNeed).isEmpty()) {
    	console.log("当前已具备指定权限")
	}
```

### convert2AbsFullPath(path:string)

<!-- UTSJSON.UTSAndroid.convert2AbsFullPath.description -->

<!-- UTSJSON.UTSAndroid.convert2AbsFullPath.param -->

<!-- UTSJSON.UTSAndroid.convert2AbsFullPath.returnValue -->

<!-- UTSJSON.UTSAndroid.convert2AbsFullPath.compatibility -->

### getFileProviderUri(file:File)

<!-- UTSJSON.UTSAndroid.getFileProviderUri.description -->

<!-- UTSJSON.UTSAndroid.getFileProviderUri.param -->

<!-- UTSJSON.UTSAndroid.getFileProviderUri.returnValue -->

<!-- UTSJSON.UTSAndroid.getFileProviderUri.compatibility -->

```ts
// 使用外部应用打开项目内置图片资源
let file = new File(UTSAndroid.getResourcePath("static/logo.png"))
const uri = UTSAndroid.getFileProviderUri(file)
const intent = new Intent(Intent.ACTION_VIEW, uri)
intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
const context = UTSAndroid.getUniActivity()!;
context.startActivity(intent);

```



### getJavaClass(any:Any)

<!-- UTSJSON.UTSAndroid.getJavaClass.description -->

<!-- UTSJSON.UTSAndroid.getJavaClass.param -->

<!-- UTSJSON.UTSAndroid.getJavaClass.returnValue -->

<!-- UTSJSON.UTSAndroid.getJavaClass.compatibility -->

```uts
export function getJavaClassTest() : boolean {
	let dispatcherClass = UTSAndroid.getJavaClass(UTSAndroid.getDispatcher())
	if("io.dcloud.uts.task.UTSTaskDispatcher" == dispatcherClass.name){
    	return true
	}
  	let applicationClass = UTSAndroid.getJavaClass(UTSAndroid.getAppContext()!)
  	if("io.dcloud.uniapp.UniApplication" == applicationClass.name){
    	return true
  	}
	return false
}
```

### getTopPageActivity()

<!-- UTSJSON.UTSAndroid.getTopPageActivity.description -->

<!-- UTSJSON.UTSAndroid.getTopPageActivity.param -->

<!-- UTSJSON.UTSAndroid.getTopPageActivity.returnValue -->

<!-- UTSJSON.UTSAndroid.getTopPageActivity.compatibility -->


<!-- UTSJSON.UTSAndroid.tutorial -->

