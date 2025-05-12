## CSSStyleDeclaration

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.description -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.extends -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.param -->

### 方法
<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.setProperty.name -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.setProperty.description -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.setProperty.compatibility -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.setProperty.param -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.setProperty.returnValue -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.setProperty.tutorial -->


<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.getPropertyValue.name -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.getPropertyValue.description -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.getPropertyValue.compatibility -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.getPropertyValue.param -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.getPropertyValue.returnValue -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.getPropertyValue.tutorial -->

**注意** 4.51版本开始 `getPropertyValue` 开始仅返回string类型


<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.removeProperty.name -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.removeProperty.description -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.removeProperty.compatibility -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.removeProperty.param -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.removeProperty.returnValue -->

<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.removeProperty.tutorial -->


## 示例
```html
<template>
	<button @click="showPop">显示弹层</button>
	<view ref="pop" style="position: absolute; display: none;">
		<text>123</text>
	</view>
</template>
<script lang="uts">
	export default {
		methods: {
			showPop: function () {
				(this.$refs["pop"] as Element).style.setProperty("display","flex")
			}
		}
	}
</script>
```
