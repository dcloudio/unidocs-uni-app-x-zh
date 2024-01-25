## uni.createRequestPermissionListener() @createrequestpermissionlistener

<!-- UTSAPIJSON.createRequestPermissionListener.description -->

uni-app x 提供了`uni.createRequestPermissionListener()`监听应用权限的申请，开发者可以在弹出系统权限授权框的同时，同步告知权限申请的目的。

解决了华为应用市场审核时要求：`APP在调用终端权限时，应同步告知用户申请该权限的目的。`

<!-- UTSAPIJSON.createRequestPermissionListener.param -->

<!-- UTSAPIJSON.createRequestPermissionListener.returnValue -->

**Tips**

+ 如果权限已经申请并且允许之后，`onConfirm`不会触发。
+ 如果同时申请多个权限时，`onComplete`可能会触发多次。

<!-- UTSAPIJSON.createRequestPermissionListener.example -->

<!-- UTSAPIJSON.createRequestPermissionListener.compatibility -->

<!-- UTSAPIJSON.createRequestPermissionListener.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
