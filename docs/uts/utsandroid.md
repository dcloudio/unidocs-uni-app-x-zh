# UTSAndroid

app-android平台专有内置对象。在uni-app和uni-app x的uts环境中均可使用。

## 静态方法


### onAppConfigChange

<!-- UTSJSON.UTSAndroid.onAppConfigChange.description -->

<!-- UTSJSON.UTSAndroid.onAppConfigChange.param -->

<!-- UTSJSON.UTSAndroid.onAppConfigChange.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppConfigChange.compatibility -->



### offAppConfigChange

<!-- UTSJSON.UTSAndroid.offAppConfigChange.description -->

<!-- UTSJSON.UTSAndroid.offAppConfigChange.param -->

<!-- UTSJSON.UTSAndroid.offAppConfigChange.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppConfigChange.compatibility -->


### onAppTrimMemory

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.description -->

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.param -->

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppTrimMemory.compatibility -->



### offAppTrimMemory

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.description -->

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.param -->

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppTrimMemory.compatibility -->



### onAppActivityPause

<!-- UTSJSON.UTSAndroid.onAppActivityPause.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityPause.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityPause.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityPause.compatibility -->

```ts
UTSAndroid.onAppActivityPause(() => {
    let eventName = "onAppActivityPause - " + Date.now();
    console.log(eventName);
});
```


### offAppActivityPause

<!-- UTSJSON.UTSAndroid.offAppActivityPause.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityPause.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityPause.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityPause.compatibility -->

```ts
// 移除全部监听
UTSAndroid.offAppActivityPause();
// 移除指定监听
UTSAndroid.offAppActivityPause(() => {
});
```


### onAppActivityResume

<!-- UTSJSON.UTSAndroid.onAppActivityResume.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityResume.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityResume.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityResume.compatibility -->



```ts
UTSAndroid.onAppActivityResume(() => {
     let eventName = "onAppActivityResume - " + Date.now();
     console.log(eventName);
});
```



### offAppActivityResume

<!-- UTSJSON.UTSAndroid.offAppActivityResume.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityResume.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityResume.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityResume.compatibility -->



```ts
// 移除全部监听
UTSAndroid.onAppActivityResume();
// 移除指定监听
UTSAndroid.onAppActivityResume(() => {
});
```


### onAppActivityDestroy

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityDestroy.compatibility -->

```ts
UTSAndroid.onAppActivityDestroy(() => {
     let eventName = "onAppActivityDestroy- " + Date.now();
     console.log(eventName);
});
```


### offAppActivityDestroy

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityDestroy.compatibility -->


```ts
// 移除全部监听
UTSAndroid.offAppActivityDestroy();
// 移除指定监听
UTSAndroid.offAppActivityDestroy(() => {
});
```


### onAppActivityResult

<!-- UTSJSON.UTSAndroid.onAppActivityResult.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityResult.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityResult.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityResult.compatibility -->


App 的 activity 启动其他activity的回调结果监听 对应原生的  [onActivityResult](https://developer.android.com/training/basics/intents/result)

需要特别注意的是 `requestCode` 参数，这个参数用于区别 不同的请求来源,开发者应该只处理自己发起请求

```ts
let customRequestCode = 12000

UTSAndroid.onAppActivityResult((requestCode: Int, resultCode: Int, data?: Intent) => {
	if(requestCode == 12000){
		// 我们发起的请求
		let eventName = "onAppActivityResult  -  requestCode:" + requestCode + " -resultCode:"+resultCode + " -data:"+JSON.stringify(data);
    	console.log(eventName);
	}else{
		// 别的代码发起的请求，不要处理
	}

});
```


### offAppActivityResult

<!-- UTSJSON.UTSAndroid.offAppActivityResult.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityResult.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityResult.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityResult.compatibility -->

```ts
// 移除全部监听
UTSAndroid.offAppActivityResult();
// 移除指定监听
UTSAndroid.offAppActivityResult(() => {
});
```



### onAppActivityBack

<!-- UTSJSON.UTSAndroid.onAppActivityBack.description -->

<!-- UTSJSON.UTSAndroid.onAppActivityBack.param -->

<!-- UTSJSON.UTSAndroid.onAppActivityBack.returnValue -->

<!-- UTSJSON.UTSAndroid.onAppActivityBack.compatibility -->

```ts
UTSAndroid.onAppActivityBack(() => {
     let eventName = "onAppActivityBack- " + Date.now();
     console.log(eventName);
});

```


### offAppActivityBack

<!-- UTSJSON.UTSAndroid.offAppActivityBack.description -->

<!-- UTSJSON.UTSAndroid.offAppActivityBack.param -->

<!-- UTSJSON.UTSAndroid.offAppActivityBack.returnValue -->

<!-- UTSJSON.UTSAndroid.offAppActivityBack.compatibility -->

```ts
// 移除全部监听
UTSAndroid.offAppActivityBack();
// 移除指定监听
UTSAndroid.offAppActivityBack(() => {
});
```


### getAppContext()

<!-- UTSJSON.UTSAndroid.getAppContext.description -->

> HBuilderX4.31及以上版本推荐使用 [getApp().getAndroidApplication()](../api/get-app.md#getandroidapplication) 获取android原生 [Application](https://developer.android.google.cn/reference/android/app/Application)。

<!-- UTSJSON.UTSAndroid.getAppContext.param -->

<!-- UTSJSON.UTSAndroid.getAppContext.returnValue -->

<!-- UTSJSON.UTSAndroid.getAppContext.compatibility -->

<!-- UTSJSON.UTSAndroid.getAppContext.tutorial -->

```uts
let packageName = UTSAndroid.getAppContext()?.packageName
console.log("packageName",packageName)
```

### getUniActivity()

<!-- UTSJSON.UTSAndroid.getUniActivity.description -->

> 在uvue页面中也可先通过 [uni.getElementById](../api/get-element-by-id.md) 获取节点元素对象 [UniElement](../dom/unielement.md)，在调用其 [getAndroidActivity](../dom/unielement.md#getandroidactivity) 获取android原生 [Activity](https://developer.android.google.cn/reference/android/app/Activity)。

<!-- UTSJSON.UTSAndroid.getUniActivity.param -->

<!-- UTSJSON.UTSAndroid.getUniActivity.returnValue -->

<!-- UTSJSON.UTSAndroid.getUniActivity.compatibility -->

<!-- UTSJSON.UTSAndroid.getUniActivity.tutorial -->

```uts
// 获取第一个可以响应图像采集行为组件
let takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
if (takePictureIntent.resolveActivity(UTSAndroid.getUniActivity()!.getPackageManager()) != null) {
	UTSAndroid.getUniActivity()!.startActivityForResult(takePictureIntent, 1001);
}
```

### getResourcePath(resourceName:string)

<!-- UTSJSON.UTSAndroid.getResourcePath.description -->

<!-- UTSJSON.UTSAndroid.getResourcePath.param -->

<!-- UTSJSON.UTSAndroid.getResourcePath.returnValue -->

<!-- UTSJSON.UTSAndroid.getResourcePath.compatibility -->

::: warning 注意事项

`getResourcePath` 与 [convert2AbsFullPath](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#convert2absfullpath-path-string) 区别在于：

`getResourcePath` 屏蔽了读取`代码包文件`时 各平台/各模式下的底层细节，即使是存放在`asset`目录也会返回符合android 读取规范的协议地址

`convert2AbsFullPath` 没有实现这一点

当开发者需要读取`代码包文件`时，建议使用 `getResourcePath`


- [代码包文件](../api/file-system-spec.md#package)
  - `代码包文件`在`真机运行`和`云打包`模式下的释放策略不同：\
  	本地真机运行：会被存在放内置储存目录\
  	云打包： `uni-app x`项目会被存放在`asset`目录, `uni-app` 项目默认会被存放在内置储存目录\
  	因此 `uni-app`/`uni-app x` 平台对 `代码包文件` 均仅支持读取操作
- [本地磁盘文件](../api/file-system-spec.md#disk)
	- [沙盒文件](../api/file-system-spec.md#internalsandbox)
		- 不支持
	- [沙盒外文件](../api/file-system-spec.md#%E6%B2%99%E7%9B%92%E5%A4%96%E7%9B%AE%E5%BD%95)
		- 不支持
:::


```ts
/**
 * 代码包文件在真机运行模式下：
 * /storage/emulated/0/Android/data/io.dcloud.uniappx/apps/__UNI__XXXXXXX/www/static/logo.png
 * 代码包文件在云打包模式下：
 * file:///android_asset/apps/__UNI__XXXXXXX/www/static/logo.png
 * /
console.log(UTSAndroid.getResourcePath('static/logo.png'))
// 沙盒文件,不支持，会返回不存在的路径
console.log(UTSAndroid.getResourcePath('unifile://sandbox/static/logo.png'))
// 沙盒外文件,不支持，会返回不存在的路径
console.log(UTSAndroid.getResourcePath('/storage/emulated/0/Android/data/io.dcloud.HBuilder/apps/HBuilder/www/static/logo.png'))
```




### getDispatcher

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


### devicePX2px(devicePX:number) : number;

<!-- UTSJSON.UTSAndroid.devicePX2px.description -->

<!-- UTSJSON.UTSAndroid.devicePX2px.param -->

<!-- UTSJSON.UTSAndroid.devicePX2px.returnValue -->

<!-- UTSJSON.UTSAndroid.devicePX2px.compatibility -->

```ts
// 对 100物理像素长度 进行转换
let pagePX = UTSAndroid.devicePX2px(100)
// 在特定设备返回值:36.3636360168457
console.log("pagePX",pagePX)
```


### requestSystemPermission

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

请求权限后有三种情况:

+ 用户允许了全部权限请求，会通过 `success`回调通知调用者，并且此时`allRight`参数为 `true`

+ 用户拒绝了全部权限请求，会通过 `fail` 回调通知调用者，`doNotAskAgain` 参数标识了用户拒绝时是否选择了`不再询问`

+ 用户允许了部分请求，拒绝了部分权限请求,此时既会调用`success`也会调用`fail`。由其中的 string数组参数 标识具体被拒绝/允许的权限


### checkSystemPermissionGranted

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


### gotoSystemPermissionActivity

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.description -->

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.param -->

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.returnValue -->

<!-- UTSJSON.UTSAndroid.gotoSystemPermissionActivity.compatibility -->

```ts
// 前往系统权限设置界面
let permissionNeed = ["android.permission.READ_PHONE_STATE"]
UTSAndroid.gotoSystemPermissionActivity(UTSAndroid.getUniActivity()!,permissionNeed)
```


### getSystemPermissionDenied

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.description -->

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.param -->

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.returnValue -->

<!-- UTSJSON.UTSAndroid.getSystemPermissionDenied.compatibility -->


```ts
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


::: warning 注意事项

`convert2AbsFullPath` 与 [getResourcePath](https://doc.dcloud.net.cn/uni-app-x/uts/utsandroid.html#getresourcepath) 区别在于：

`convert2AbsFullPath` 对文件路径支持范围更大，不仅支持 `代码包文件`内置储存目录的情况，还支持相对路径，沙盒路径，沙盒外路径（包括系统API返回的文件地址） 等形式。

`getResourcePath` 不支持这些

当开发者明确需要操作文件，而非代码包资源时，建议使用 `convert2AbsFullPath`


- [代码包文件](../api/file-system-spec.md#package)
  - `代码包文件`在`真机运行`和`云打包`模式下的释放策略不同：\
  	本地真机运行：会被存在放内置储存目录\
  	云打包： `uni-app x`项目会被存放在`asset`目录, `uni-app` 项目会被存放在内置储存目录\
  	因此在 `uni-app`/`uni-app x` 平台对 `代码包文件` 均仅支持读取操作
- [本地磁盘文件](../api/file-system-spec.md#disk)
	- [沙盒文件](../api/file-system-spec.md#internalsandbox)
		- `uni-app x`支持读写
		- `uni-app`不支持
	- [沙盒外文件](../api/file-system-spec.md#%E6%B2%99%E7%9B%92%E5%A4%96%E7%9B%AE%E5%BD%95)
		- 沙盒管理范围外的其他文件。 调用系统API返回的绝对地址属于此类。`uni-app`/`uni-app x`平台 均支持读写

:::

```ts
/**
 * 代码包文件
 * 本地调试执行结果：/storage/emulated/0/Android/data/io.dcloud.uniappx/apps/__UNI__XXXXXXX/www/static/logo.png
 * 云打包执行结果 ：/android_asset/apps/__UNI__XXXXXXX/www/static/logo.png
 * /
console.log(UTSAndroid.convert2AbsFullPath('static/logo.png'))
/**
 * 沙盒文件
 * 本地调试执行结果：/storage/emulated/0/Android/data/io.dcloud.uniappx/static/logo.png
 * 云打包执行结果 ：/storage/emulated/0/Android/data/io.dcloud.uniappx/static/logo.png
 * /
console.log(UTSAndroid.convert2AbsFullPath('unifile://sandbox/static/logo.png'))
/**
 * 沙盒外文件 包含相对路径
 * 本地调试执行结果：/storage/emulated/0/Android/data/io.dcloud.uniappx/apps/__UNI__XXXXXXX/www/io.dcloud.HBuilder/apps/HBuilder/www/static/logo.png
 * 云打包执行结果 ：/android_asset/apps/__UNI__XXXXXXX/www/io.dcloud.HBuilder/apps/HBuilder/www/static/logo.png
 * /
console.log(UTSAndroid.convert2AbsFullPath('../../../io.dcloud.HBuilder/apps/HBuilder/www/static/logo.png'))
```




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



### getJavaClass(input:any)

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
	/**
	* 特殊用法：UTSAndroid.getJavaClass(XXX) 可以传入类而不是实例，这样会被编译成 XXX::class.java
	*/
	let utsAndroidClass = UTSAndroid.getJavaClass(UTSAndroid)
	if("io.dcloud.uts.UTSAndroid" == utsAndroidClass.name){
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

```ts
// 获取当前栈顶activity
console.log(UTSAndroid.getTopPageActivity())
```


### onActivityCallback(callback, pageRoute?)

<!-- UTSJSON.UTSAndroid.onActivityCallback.description -->

<!-- UTSJSON.UTSAndroid.onActivityCallback.param -->

<!-- UTSJSON.UTSAndroid.onActivityCallback.returnValue -->

<!-- UTSJSON.UTSAndroid.onActivityCallback.compatibility -->


### offActivityCallback(callback)

<!-- UTSJSON.UTSAndroid.offActivityCallback.description -->

<!-- UTSJSON.UTSAndroid.offActivityCallback.param -->

<!-- UTSJSON.UTSAndroid.offActivityCallback.returnValue -->

<!-- UTSJSON.UTSAndroid.offActivityCallback.compatibility -->


### getGenericType\<T>(): Type

<!-- UTSJSON.UTSAndroid.getGenericType.description -->

<!-- UTSJSON.UTSAndroid.getGenericType.param -->

<!-- UTSJSON.UTSAndroid.getGenericType.returnValue -->

<!-- UTSJSON.UTSAndroid.getGenericType.compatibility -->


### getGenericClassName\<T>(): string

<!-- UTSJSON.UTSAndroid.getGenericClassName.description -->

<!-- UTSJSON.UTSAndroid.getGenericClassName.param -->

<!-- UTSJSON.UTSAndroid.getGenericClassName.returnValue -->

<!-- UTSJSON.UTSAndroid.getGenericClassName.compatibility -->



<!-- UTSJSON.UTSAndroid.tutorial -->
