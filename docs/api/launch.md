<!-- ## uni.getLaunchOptionsSync() @getlaunchoptionssync -->

<!-- UTSAPIJSON.getLaunchOptionsSync.name -->

<!-- UTSAPIJSON.getLaunchOptionsSync.description -->

<!-- UTSAPIJSON.getLaunchOptionsSync.compatibility -->

<!-- UTSAPIJSON.getLaunchOptionsSync.param -->

<!-- UTSAPIJSON.getLaunchOptionsSync.returnValue -->

- 如果应用通过scheme或applink（通用链接）启动，可以通过本API获取相应参数。配置scheme或applink需在AndroidManifest.xml或info.plist中配置，打包后生效。如开发直达页面功能，一般在应用的onShow生命周期监听。[详见](../collocation/app.md#onshow)

<!-- UTSAPIJSON.getLaunchOptionsSync.example -->

<!-- UTSAPIJSON.getLaunchOptionsSync.tutorial -->

<!-- ## uni.getEnterOptionsSync() @getenteroptionssync -->

<!-- UTSAPIJSON.getEnterOptionsSync.name -->

<!-- UTSAPIJSON.getEnterOptionsSync.description -->

uni.getEnterOptionsSync 和 uni.getLaunchOptionsSync 的区别，相当于应用的 onShow 和 onLaunch 的区别，详见[应用生命周期](../collocation/app.md#applifecycle)

<!-- UTSAPIJSON.getEnterOptionsSync.compatibility -->

<!-- UTSAPIJSON.getEnterOptionsSync.param -->

<!-- UTSAPIJSON.getEnterOptionsSync.returnValue -->

- 如果应用通过scheme或applink（通用链接）启动或从后台激活到前台，可以通过本API获取相应参数。配置scheme或applink需在AndroidManifest.xml或info.plist中配置，打包后生效。如开发直达页面功能，一般在应用的onShow生命周期监听。[详见](../collocation/app.md#onshow)

<!-- UTSAPIJSON.getEnterOptionsSync.example -->

<!-- UTSAPIJSON.getEnterOptionsSync.tutorial -->

<!-- UTSAPIJSON.launch.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->