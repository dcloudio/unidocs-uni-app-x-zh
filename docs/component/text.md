<!-- ## text -->

<!-- UTSCOMJSON.text.name -->

<!-- UTSCOMJSON.text.description -->

<!-- UTSCOMJSON.text.compatibility -->

在app-uvue和app-nvue中，文本只能写在text中，而不能写在view的text区域。文本样式的控制也应该在text组件上写style，而不是在view的样式里写。

虽然app-uvue中写在view的text区域的文字，也会被编译器自动包裹一层text组件，看起来也可以使用。但这样会造成无法修改该text文字的样式，详见uvue的[样式不继承](../css/README.md#stylenoextends)章节。

<!-- UTSCOMJSON.text.attribute -->

<!-- UTSCOMJSON.text.event -->

<!-- UTSCOMJSON.text.component_type-->

### hover-class  
App平台蒸汽模式（Vapor） `text` 组件新增支持 `hover-class` 实现点击态效果。  

**注意**  
- 蒸汽模式（Vapor）子 `text` 组件不支持 hover 相关功能  
- 非蒸汽模式（Vapor) `text` 组件不支持 hover 相关功能  


### 空白字符  
`空白字符`并不只是指空格键敲出来的那个`空格`字符，它是一个字符集合。
包括以下字符：  
- 普通空格 (Space): (ASCII 32)
- 制表符 (Tab): \t (ASCII 9)
- 换行符 (Line Feed): \n (ASCII 10)
- 回车符 (Carriage Return): \r (ASCII 13)

空白字符的处理分为 编译期处理 和  运行期处理 两个阶段。  

#### 编译期处理  
编译期间仅处理template中直接写在text节点中的静态文本，如下示例1：  
```uvue
<template>
  <text id="t1"> a   bc def	g
hi </text>
</template>
```
编译期间会将template中静态文本的所有空白字符转换为空格，并将多个连续空格合并为一个空格，首尾空格保留。  
如上示例1编译后text组件中的文本内容为“ a bc def g hi ”。  

注意：编译期间不会处理变量中的空白字符。  

#### 运行期处理  
由 `space` 属性 和 [white-space](../css/white-space.md) 样式共同决定。  
- `space` 属性：仅处理空格字符  
- [white-space](../css/white-space.md)样式： 处理所有空白字符  

如下示例2，演示text组件使用变量中的文本：
```uvue
<template>
  <text>{{text}}</text>
</template>
<script lang="uts" setup>
  let text = ' a   bc def\tg\nhi '
</script>
```
>上面代码中的 \t 和 \n 是 `转义字符`，\t 表示 制表符 (Tab)，\n 表示 换行符 (Line Feed)

编译期间不会对变量中的空白字符做处理，而是由各平台运行环境根据 [white-space](../css/white-space.md) 样式处理并渲染。  

**space属性**  
如果text组件配置了space属性值，会先根据space属性值处理文本中的空格，再根据 [white-space](../css/white-space.md) 样式处理。  
蒸汽模式（Vapor）废弃了space属性。推荐统一改用css white-space来处理空白字符。

**App-Android、App-iOS平台**  
HBuilderX5.0版本开始 app-andorid/app-ios平台调整 [white-space](../css/white-space.md) 样式控制空白字符处理逻辑与 W3C 规范一致，
默认值为 `keep`。  
如上示例2中将保留所有空格（连续空格不会合并）、制表符、换行符进行渲染，a和b之间有3个空格。  

app-andorid/app-ios平台避免使用 `space` 属性处理空格，存在以下平台差异：  
- app-android平台配置了 `space` 属性将只处理空格转换，忽略 white-space 样式值，即按 white-space: keep 处理。  
- app-ios平台配置了 `space` 属性将先处理空格转换，再根据 white-space 属性值处理空白字符。 
后续统一会废弃 	`space` 属性，推荐统一改用css white-space 来处理空白字符。

**App-Harmony平台**  
蒸汽模式（Vapor） [white-space](../css/white-space.md) 样式控制空白字符处理逻辑与 W3C 规范一致，默认值为 `keep`。  

**Web平台**  
HBuilderX5.0版本开始 web平台调整 [white-space](../css/white-space.md) 样式控制空白字符处理逻辑与 W3C 规范一致，
默认值为 `pre-line`。  
如上示例2中将合并空格（连续空格合并为1个空格），制表符转换为空格，保留换行符进行渲染，a和b之间只有1个空格。

uni-app x中有text组件，这是一个web没有的组件。且uni-app x在非web平台，包括小程序平台，都不支持<br>换行，所以uni-app x设计为text组件中的`\n`默认不会忽略，而是换行。

不管app平台默认值keep，还是web平台默认值pre-line，都是这个表现。

web的默认值preline，虽然支持\n换行，同时会合并\n以外的其他多个连续空白字符为1个。这是web与app的不同。app为了提升性能，默认值为keep，即默认不会合并连续的空白字符。


### 实体字符  
`实体字符`（Entity Character）是在标记语言（如 vue/uvue 的 template 中）或编程中，用来表示那些具有特殊含义、无法直接输入或显示的字符的一种编码方式。  
实体字符通常由三部分组成，以 &开头，以 ;结尾，中间是实体名称或编号。  
常见的实体字符包括：  
- 空格	(space)：&amp;nbsp;，实体编号表示为 &amp;#160;  
- 小于号(<)：&amp;lt;，实体编号表示为 &amp;#60;  
- 大于号	(>)：&amp;gt;，实体编号表示为 &amp;#62;  
- 和号	(&)：&amp;amp;，实体编号表示为 &amp;#38;  
- 引号	(")：&amp;quot;，实体编号表示为 &amp;#34;  
- 版权符号(©)：&amp;copy;，实体编号表示为 &amp;#169;
- 注册商标(®	)：&amp;reg;，实体编号表示为 &amp;#174;

实体字符的处理分为 编译期处理 和  运行期处理 两个阶段。  

#### 编译期处理  
某些字符在标记语言中是预留的。例如，template会将 < 视作标签的开始。如果想在文本上显示“5 < 10”，直接输入 < 可能会导致编译器误以为后面跟着一个标签，从而引起编译报错，这时需要使用`实体字符` &amp;lt; 表示 <，如下示例：
```uvue
<template>
  <text id="t1">5 &lt; 10</text>
</template>
```
编译期间会将template中静态文本的所有实体字符解析为真实字符。  
如上示例编译后text组件中的文本内容为“5 < 10”。  

注意：编译期间不会处理变量中的实体字符。  

#### 运行期处理  
由 `decode` 属性值决定是否在运行期解析实体字符，默认运行期不解析实体字符。  

如下示例，演示text组件使用变量中的文本，：
```uvue
<template>
  <text decode="false">{{text}}</text>
</template>
<script lang="uts" setup>
  let text = '5 &lt; 10'
</script>
```

编译期间不会对变量中的实体字符做转换，而是由各平台运行环境根据 `decode` 属性值决定是否转换。  
- `decode` 属性值设置为 true 时：运行期转换实体字符，上面示例字符串显示为 “5 < 10”  
- `decode` 属性值设置为 false 时：运行期不转换实体字符，上面示例字符串显示为 “5 &amp;lt; 10”  

**注意**  
蒸汽模式（Vapor）将废弃 `decode` 属性，运行期不再解析实体字符。  


<!-- UTSCOMJSON.text.children -->

text组件在web浏览器渲染（含浏览器、小程序webview渲染模式、app-vue）和uvue中，可以并只能嵌套text组件。

app平台 text 组件虽然支持嵌套，但注意限制：
1. 子组件不继承父组件样式。这样使用会在编译到web渲染的平台时产生差异。
2. 子组件设置的排版相关样式（如position、display、width、height、margin、padding等）以及部分text独有样式（如text-align、lines、white-space、text-overflow）不生效
3. 嵌套时建议将文本写在`<text></text>`标签之间，例如：`<text><text>嵌套文本1</text><text>嵌套文本2</text></text>`，避免出现预期外的效果。

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
- app-Android和app-iOS平台 selectable开启后，仅支持全部文字复制，不支持自由调整光标选择文字。如需自由选择文字，请使用[rich-text组件](rich-text.md)。web平台默认就是可复制文字的，selectable无效。
- app-android平台，部分自定义字体不支持设置font-weight。
- web平台4.86版本起text组件调整为display:block，嵌套text组件时，子text默认display为inline。此前版本无论父子均为inline。如无必要请勿覆盖text的display样式，以免出现预期外的效果。
