<!-- UTSCOMJSON.loading.name -->

<!-- UTSCOMJSON.loading.description -->

<!-- UTSCOMJSON.loading.compatibility -->

<!-- UTSCOMJSON.loading.attribute -->

<!-- UTSCOMJSON.loading.event -->

<!-- UTSCOMJSON.loading.component_type -->

<!-- UTSCOMJSON.loading.children -->

## 注意事项：
1. iOS、Android 利用渲染线程加速，完全不受主线程繁忙影响；鸿蒙因OS渲染线程开放能力不足，受主线程轻微影响，但仍可以做到一个界面放置100个loading同时转圈而不卡顿，[详见](https://gitcode.com/dcloud/hello-uni-app-x/blob/alpha/pages/template/loading-100/loading-100.uvue)。
2. 仅支持以下css style，支持静态和动态设置：
	* width：组件的宽度，默认值为 16px
	* height：组件的高度，默认值为 16px
	* border-color：加载框线条的颜色，默认值为 #000000
	* color: 仅 ios-spinner = true 时，color的优先级大于border-color； ios-spinner = false 时， color无效；
3. loading组件默认是旋转的，不使用时应v-if删除或设置paused。请注意勿在隐藏或被遮挡的区域让loading持续旋转。
4. 当 ios-spinner = true 时，由于iOS系统雪花非矢量概念，该组件随着 CSS width、height 动态调整大小时会模糊，建议 CSS width、height 不超过 37px；
5. [uni.showLoading API](https://doc.dcloud.net.cn/uni-app-x/api/loading.html#showloading) 从HBuilderX 5.0+ ，在非小程序上通过本内置loading组件实现,

<!-- UTSCOMJSON.loading.example -->

<!-- UTSCOMJSON.loading.reference -->

