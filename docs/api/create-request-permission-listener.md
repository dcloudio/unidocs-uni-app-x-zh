## uni.createRequestPermissionListener() @createrequestpermissionlistener

<!-- UTSAPIJSON.createRequestPermissionListener.description -->

<!-- UTSAPIJSON.createRequestPermissionListener.compatibility -->

app-android平台，可使用本API监听应用权限申请确认框的弹出和关闭。不管是哪处的业务代码在申请权限，当弹出和关闭权限申请确认框时均会触发本监听事件。

华为应用市场审核时要求：`APP在调用终端权限时，应同步告知用户申请该权限的目的`。此时即可使用本API，在app.uvue里全局监听。

创建监听对象后，返回RequestPermissionListener，然后调起其的onConfirm和onComplete。

- 当权限申请的确认框在手机端弹出时，会触发onConfirm
- 当权限申请的确认框被用户关闭后，会触发onComplete

<!-- UTSAPIJSON.createRequestPermissionListener.param -->

<!-- UTSAPIJSON.createRequestPermissionListener.returnValue -->

## Tips

- 如果权限已经申请并且允许之后，`onConfirm`不会触发。
- 如果同时申请多个权限时，`onComplete`可能会触发多次。
- uni-app x 中如果请求一个已经被永久拒绝的权限，可能会触发`onConfirm`。目前的临时方案是做延时处理，如下面示例代码。后续会修复此问题。
- 权限列表参考：[https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#permissions)
- 全局监听权限申请可参考插件[uni-registerRequestPermissionTips](https://ext.dcloud.net.cn/plugin?name=uni-registerRequestPermissionTips)。

<!-- UTSAPIJSON.createRequestPermissionListener.example -->

<!-- UTSAPIJSON.createRequestPermissionListener.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
