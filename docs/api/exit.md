<!-- ## uni.exit(options?) @exit -->

<!-- UTSAPIJSON.exit.name -->

<!-- UTSAPIJSON.exit.description -->

<!-- UTSAPIJSON.exit.compatibility -->

#### app平台差异  

##### app-android平台  
Android平台的应用退出分热退出和冷退出。
- 冷退出是彻底杀掉
- 热退出是关闭可见的activity，后台进程不退出（比如push）

基本上主流Android App都是热退出。本API也是热退出。

热退出，即通知了os：这个App用户不用了，在os需要时可以回收。如果在os回收之前，用户又启动这个App，会感觉启动速度更快一些。

[uni-app x 原生SDK](../native/README.md)模式中调用本API仅会关闭uni-app x应用。不会关闭宿主应用。

##### app-ios平台  
iOS系统自身并没有退出应用的API。

[uni-app x 原生SDK](../native/README.md)模式中支持通过本API关闭uni-app x应用。

##### app-harmony平台
在鸿蒙平台退出时会结束当前Ability，即默认情况下仅存在一个Ability相当于整个应用关闭。

[uni-app x 原生SDK](../native/README.md)模式时通过本API关闭uni-app x应用仅会关闭uni-app x实例，不会销毁所在的Ability。


<!-- UTSAPIJSON.exit.param -->

<!-- UTSAPIJSON.exit.returnValue -->

<!-- UTSAPIJSON.exit.tutorial -->

<!-- UTSAPIJSON.exit.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 切换应用到后台@back

有的Android App，点back后不询问用户，直接隐藏到了后台。这种做法占用手机的资源一些，但确实也有一些App是这么做的。

Android的activity提供了将应用切换到后台的方法：
```ts
// #ifdef APP-ANDROID
	UTSAndroid.getUniActivity()?.moveTaskToBack(true)
// #endif
```
