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

#### App平台
App平台获取样式值与Web平台存在部分差异：  
- 组件通过 class 和 style 设置的 CSS 样式，App平台获取的是 class 和 style 合并计算后的样式，Web平台仅获取 style 属性设置的样式  
- 组件通过 class 和 style 设置的 CSS 简写样式，App平台获取的是拆解（Expansion）后的样式  
- 通过 `setProperty` 设置的 CSS 简写样式，App平台获取的简写样式，这种情况与Web平台一致  

**注意**  
- HBuilderX4.51版本调整 `getPropertyValue` 返回值类型为 string  

**蒸汽模式（Vapor）**  
蒸汽模式（Vapor）为了提升 CSS 的性能，App平台将所有样式数据在编译器和运行期都做了类型化转换，丢失了原始字符串数据（即获取值与设置值不完全一致），与非蒸汽模式存在以下差异：  
- 没有设置的样式，获取时将返回默认值。如没有设置 flex-direction 样式时返回值为“column”  
- 简写样式，获取将返回完整的拆解值。如设置 flex 为 1，返回值为“1 1 0%”  
- 获取的颜色数据（如background-color、color、border-color、border-*-color）格式为十六进制颜色八值语法“#RRGGBBAA”，其中 RR、GG、BB、AA分别对应红色、绿色、蓝色、透明值，使用大写字符。如设置 background-color为 "red"，返回值为“#FF0000FF”。特殊值对应的颜色：  
  + transparent: 对应十六进制颜色八值语法为 #00000000  


<!-- CUSTOMTYPEJSON.CSSStyleDeclaration.methods.getPropertyValue.tutorial -->



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
