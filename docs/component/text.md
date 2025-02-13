## text

<!-- UTSCOMJSON.text.description -->

<!-- UTSCOMJSON.text.compatibility -->

在app-uvue和app-nvue中，文本只能写在text中，而不能写在view的text区域。文本样式的控制也应该在text组件上写style，而不是在view的样式里写。

虽然app-uvue中写在view的text区域的文字，也会被编译器自动包裹一层text组件，看起来也可以使用。但这样会造成无法修改该text文字的样式，详见uvue的[样式不继承](../css/README.md#stylenoextends)章节。

<!-- UTSCOMJSON.text.attribute -->

<!-- UTSCOMJSON.text.event -->

<!-- UTSCOMJSON.text.component_type-->

- App-Android平台文本换行规则（表现在文本断行位置等）可能和浏览器有差异。

<!-- UTSCOMJSON.text.children -->

text组件在web浏览器渲染（含浏览器、小程序webview渲染模式、app-vue）和uvue中，可以并只能嵌套text组件。

app平台 text 组件虽然支持嵌套，但注意限制：
1. 子组件不继承父组件样式。这样使用会在编译到web渲染的平台时产生差异。
2. 子组件设置的排版相关样式（如position、display、width、height、margin、padding等）以及部分text独有样式（如text-align、lines、white-space、text-overflow）不生效

HBuilderX4.51版本起 text组件嵌套时，子组件支持点击事件响应。之前版本如有这方面需求，请改用 [rich-text](./rich-text.md)

<!-- UTSCOMJSON.text.example -->

::: warning 注意
App 端不支持 `text` 组件中渲染多段文本，如果 `text` 组件中的文本是动态的，可以将计算后的结果通过数据给到 `text` 组件, 而不是在模板中通过 `template` 拼接多段文本, 以免出现渲染异常，例如：
```vue
<template>
  <view>
    <text>
      <template v-for="item in list">
        <template v-if="item['show']">{{item['text']}}</template>
      </template>
    </text>
  </view>
</template>

<script setup lang="uts">
  const list = ref([
    {
      show: true,
      text: 'a'
    },{
      show: false,
      text: 'b'
    },{
      show: true,
      text: 'c'
    }
  ])
  
</script>
```
上述代码应调整为：
```vue
<template>
  <view>
    <text>{{textValue}}</text>
  </view>
</template>

<script setup lang="uts">
  const list = ref([
    {
      show: true,
      text: 'a'
    }, {
      show: false,
      text: 'b'
    }, {
      show: true,
      text: 'c'
    }
  ])
  const textValue = computed((): string => {
    let res = ''
    list.value.forEach(item => {
      if (item['show'] === true) {
        res += item['text']
      }
    })
    return res
  })
</script>
```
:::

<!-- UTSCOMJSON.text.reference -->

## Bug & Tips@tips
- app平台不支持[HTML字符实体](https://developer.mozilla.org/zh-CN/docs/Glossary/Entity)。
- app-Android和app-iOS平台 selectable开启后，仅支持全部文字复制，不支持自由调整光标选择文字。如需自由选择文字，请使用[rich-text组件](rich-text.md)。web平台默认就是可复制文字的，selectable无效。
- app-android平台，部分自定义字体不支持设置font-weight。
