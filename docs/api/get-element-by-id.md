<!-- ## uni.getElementById(id) @getelementbyid -->

<!-- UTSAPIJSON.getElementById.name -->

<!-- UTSAPIJSON.getElementById.description -->

<!-- UTSAPIJSON.getElementById.compatibility -->

**注意：** \
uni是全局api，本方法获取的元素，是页面栈栈顶（不包括 dialogPage）的页面的元素，而不是执行本方法代码所在的页面的元素。\
如果A页面被栈顶的B页面盖住，在A页面执行`uni.getElementById`会访问到B页面的元素。

如需寻找特定页面上的Element，应使用[UniPage对象的getElementById方法](../api/get-current-pages.md#getelementbyid)

而获取当前页面对象的方法，则是`this.$page`，这个方式可以获取到dialogPage页面，那么通用的、在当前页面获取UniElement的方式是：`this.$page.getElementById`

另一种与页面绑定的获取元素的方式是`this.$refs`获取的组件对象再进一步as为element。[详见](../tutorial/idref.md#ref方式)

<!-- UTSAPIJSON.getElementById.param -->

`3.93+` 支持泛型，可通过 `uni.getElementById<ElementType>(id)` 获取指定类型的元素。对于组件有自带方法的情况，通过泛型指定具体的元素类型，就可以调用该类型组件的专用方法，比如unicloud-db组件。\
具体的组件元素类型，可查阅`组件文档/组件类型`获取。

```html
	<template>
		<view>
			<text id='text' ref='textRef'>test text</text>
		</view>
	</template>
	<script>
		export default {
      onReady(){
        uni.navigateTo({
          url: '/pages/test/test'
          success() {
            // 通过 ref 获取指定页面的元素
            const textRef = this.$refs['textRef']
            // 通过 getElementById 获取指定页面的元素，此时当前页面为 test 页面，所以获取不到 #text 元素
            const textNode = uni.getElementById('text')
          }
        })
      }
		}
	</script>
```

<!-- UTSAPIJSON.getElementById.returnValue -->

<!-- UTSAPIJSON.getElementById.example -->

<!-- UTSAPIJSON.getElementById.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
