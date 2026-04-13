<!-- ## uni.showModal(options) @showmodal -->

<!-- UTSAPIJSON.showModal.name -->

<!-- UTSAPIJSON.showModal.description -->

<!-- UTSAPIJSON.showModal.compatibility -->

<!-- UTSAPIJSON.showModal.param -->

<!-- UTSAPIJSON.showModal.returnValue -->

<!-- UTSAPIJSON.showModal.example -->

<!-- UTSAPIJSON.showModal.tutorial -->

注意：
- App和Web平台，showModal从4.61起重构为使用dialogPage实现。重构后的版本支持暗黑主题、国际化、横屏宽屏适配。

<!-- ## uni.hideModal(options?) @hidemodal -->

<!-- UTSAPIJSON.hideModal.name -->

<!-- UTSAPIJSON.hideModal.description -->

<!-- UTSAPIJSON.hideModal.compatibility -->

<!-- UTSAPIJSON.hideModal.param -->

<!-- UTSAPIJSON.hideModal.returnValue -->

<!-- UTSAPIJSON.hideModal.example -->

<!-- UTSAPIJSON.hideModal.tutorial -->

<!-- UTSAPIJSON.modal.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips@tips

* 在 Web 平台，如果希望通过 `const modalPage = uni.showModal(...)` 获取 `modalPage` 对象，需要至少传入一个回调函数，例如：
```ts
uni.showModal({
	success: function (showRet : ShowModalSuccess) {
	}
})
```