## uni.showToast(options) @showtoast

<!-- UTSAPIJSON.showToast.description -->

<!-- UTSAPIJSON.showToast.compatibility -->

<!-- UTSAPIJSON.showToast.param -->

<!-- UTSAPIJSON.showToast.returnValue -->

<!-- UTSAPIJSON.showToast.example -->

<!-- UTSAPIJSON.showToast.tutorial -->

#### 注意事项 ####

+ App平台 `position` 参数特别说明

如果没有设置 `position` 字段，`uni.showToast` 会采用应用弹窗方案，即弹窗与页面生命周期绑定。 页面关闭时，当前页面弹出的所有弹窗都会被自动取消。

如果设置了`position` 字段，`uni.showToast` 会采用系统弹窗方案，即弹窗与页面无绑定关系。 页面关闭后，弹出中的/等待弹出的`Toast`会继续展示。

系统弹窗在部分系统（比如 MIUI,Google）可能会有应用图标前缀。

系统弹窗在部分系统（比如 鸿蒙 4.0以上）可能不支持顶部和居中展示。

## uni.hideToast() @hidetoast

<!-- UTSAPIJSON.hideToast.description -->

<!-- UTSAPIJSON.hideToast.param -->

<!-- UTSAPIJSON.hideToast.returnValue -->

<!-- UTSAPIJSON.hideToast.example -->

<!-- UTSAPIJSON.hideToast.compatibility -->

<!-- UTSAPIJSON.hideToast.tutorial -->


## uni.showLoading(options) @showloading

<!-- UTSAPIJSON.showLoading.description -->

<!-- UTSAPIJSON.showLoading.compatibility -->

<!-- UTSAPIJSON.showLoading.param -->

<!-- UTSAPIJSON.showLoading.returnValue -->

<!-- UTSAPIJSON.showLoading.example -->

<!-- UTSAPIJSON.showLoading.tutorial -->

## uni.hideLoading() @hideloading

<!-- UTSAPIJSON.hideLoading.description -->

<!-- UTSAPIJSON.hideLoading.param -->

<!-- UTSAPIJSON.hideLoading.returnValue -->

<!-- UTSAPIJSON.hideLoading.example -->

<!-- UTSAPIJSON.hideLoading.compatibility -->

<!-- UTSAPIJSON.hideLoading.tutorial -->

## uni.showModal(options) @showmodal

<!-- UTSAPIJSON.showModal.description -->

<!-- UTSAPIJSON.showModal.compatibility -->

<!-- UTSAPIJSON.showModal.param -->

<!-- UTSAPIJSON.showModal.returnValue -->

<!-- UTSAPIJSON.showModal.example -->

<!-- UTSAPIJSON.showModal.tutorial -->

## uni.showActionSheet(options) @showactionsheet

<!-- UTSAPIJSON.showActionSheet.description -->

<!-- UTSAPIJSON.showActionSheet.compatibility -->

<!-- UTSAPIJSON.showActionSheet.param -->

itemList，即actionsheet的列表项，在app和小程序上最多6项，超出会报错。在web上超出不报错，列表区变为可滚动。

<!-- UTSAPIJSON.showActionSheet.returnValue -->

<!-- UTSAPIJSON.showActionSheet.example -->

<!-- UTSAPIJSON.showActionSheet.tutorial -->

<!-- UTSAPIJSON.prompt.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Bug & Tips@tips
- 目前web和App的弹窗UI风格不统一，后续会修复
