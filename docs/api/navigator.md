## uni.navigateTo(options) @navigateto

<!-- UTSAPIJSON.navigateTo.description -->

<!-- UTSAPIJSON.navigateTo.compatibility -->

<!-- UTSAPIJSON.navigateTo.param -->

<!-- UTSAPIJSON.navigateTo.returnValue -->

<!-- UTSAPIJSON.navigateTo.example -->

<!-- UTSAPIJSON.navigateTo.tutorial -->

## uni.redirectTo(options) @redirectto

<!-- UTSAPIJSON.redirectTo.description -->

<!-- UTSAPIJSON.redirectTo.compatibility -->

<!-- UTSAPIJSON.redirectTo.param -->

<!-- UTSAPIJSON.redirectTo.returnValue -->

<!-- UTSAPIJSON.redirectTo.example -->

<!-- UTSAPIJSON.redirectTo.tutorial -->

## uni.reLaunch(options) @relaunch

<!-- UTSAPIJSON.reLaunch.description -->

<!-- UTSAPIJSON.reLaunch.compatibility -->

<!-- UTSAPIJSON.reLaunch.param -->

<!-- UTSAPIJSON.reLaunch.returnValue -->

<!-- UTSAPIJSON.reLaunch.example -->

<!-- UTSAPIJSON.reLaunch.tutorial -->

## uni.switchTab(options) @switchtab

<!-- UTSAPIJSON.switchTab.description -->

<!-- UTSAPIJSON.switchTab.compatibility -->

<!-- UTSAPIJSON.switchTab.param -->

<!-- UTSAPIJSON.switchTab.returnValue -->

<!-- UTSAPIJSON.switchTab.example -->

<!-- UTSAPIJSON.switchTab.tutorial -->

## uni.navigateBack(options?) @navigateback

<!-- UTSAPIJSON.navigateBack.description -->

<!-- UTSAPIJSON.navigateBack.compatibility -->

<!-- UTSAPIJSON.navigateBack.param -->

<!-- UTSAPIJSON.navigateBack.returnValue -->

<!-- UTSAPIJSON.navigateBack.example -->

<!-- UTSAPIJSON.navigateBack.tutorial -->

<!-- UTSAPIJSON.navigator.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 页面跳转与参数传递

A页面跳转到B页面时，有两种方式给B页面传递信息：
1. A页面跳转时，B页面的URL中通过?param1=param1value&param2=param2value方式传递，然后B页面在Onload里接收参数。详见[页面onLoad生命周期](../page.md#onload)
2. 通过eventbus，详见[uni.$on、uni.$emit等API](event-bus.md)

## Bug & Tips@tips

* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* ``reLaunch`` 可以打开任意页面。
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* 不能在首页 ```onReady``` 之前进行页面跳转。
