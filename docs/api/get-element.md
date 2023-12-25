## uni.getElementById(id) @getelementbyid

<!-- UTSAPIJSON.getElementById.description -->

<!-- UTSAPIJSON.getElementById.param -->

`3.93+` 支持泛型，可通过 `uni.getElementById<ElementType>(id)` 获取指定类型的元素。对于组件有自带方法的情况，通过泛型指定具体的元素类型，就可以调用该类型组件的专用方法，比如unicloud-db组件。\
具体的组件元素类型，可查阅`组件文档/组件类型`获取。

**注意：** 该方法只能获取当前页面的元素（查询时，会首先获取当前页面，即：`getCurrentPages()` 获取的页面栈数组的最后一个页面），如果需要获取其他页面的元素，可通过`ref`获取指定页面的元素。

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

<!-- UTSAPIJSON.getElementById.compatibility -->

<!-- UTSAPIJSON.getElementById.tutorial -->

<!-- UTSAPIJSON.get-element.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
