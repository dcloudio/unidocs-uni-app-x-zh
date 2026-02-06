## white-space


<!-- CSSJSON.white-space.description -->

<!-- CSSJSON.white-space.syntax -->

<!-- CSSJSON.white-space.restrictions -->

<!-- CSSJSON.white-space.values -->

<!-- CSSJSON.white-space.defaultValue -->

<!-- CSSJSON.white-space.unixTags -->

<!-- CSSJSON.white-space.compatibility -->

### 注意@tips
#### 空白字符处理不止由white-space属性决定
对于写在模板中的text组件中的空白字符，在编译阶段，会由编译器先行处理。另外text组件的space属性也会干扰空白字符处理。规则[详见](../component/text.md#空白字符)。

uni-app x中有text组件，这是一个web没有的组件。且uni-app x在非web平台，包括小程序平台，都不支持<br>换行，所以uni-app x设计为text组件中的`\n`默认不会忽略，而是换行。
不管app平台默认值keep，还是web平台默认值pre-line，都是这个表现。

#### HBuilderX5.0版本调整  
app平台、web平台调整了 white-space 属性的实现。之前接近小程序的表现，之后按 W3C 标准规范执行。同时为了text组件性能考虑， app 平台新增支持 `keep` 属性值，且默认为 `keep`。

**默认值调整**
- app-android、app-ios平台新增支持取值 `keep`，默认值由 `normal` 调整为 `keep`  
- app-harmony平台蒸汽模式（Vapor）支持取值 `keep`，默认值为 `keep`  
- web平台平台，默认值由 `normal' 调整为 pre-line

**调整前实现规范**  
- normal（与调整后的pre-line效果一致）  
  换行符（\\n）保留并换行显示，连续的多个空白字符会合并为一个空格，文本遇到边界会自动换行，行末空白字符移除。  
- nowrap  
  换行符（\\n）保留并换行显示，连续的多个空白字符会合并为一个空格，文本遇到边界不会自动换行，行末空白字符移除。  
- pre  
  换行符（\\n）保留并换行显示，连续的多个空白字符保留，文本遇到边界不会自动换行，行末空白字符保留。  
- pre-wrap  
  换行符（\\n）保留并换行显示，连续的多个空白字符保留，文本遇到边界会自动换行，行末空白字符保留。  
- pre-line  
  换行符（\\n）保留并换行显示，连续的多个空白字符会合并为一个空格，文本遇到边界会自动换行，行末空白字符移除。  
- break-spaces  
  换行符（\\n）保留并换行显示，连续的多个空白字符保留，文本遇到边界会自动换行，行末空白字符保留。  

<!-- CSSJSON.white-space.example -->

<!-- CSSJSON.white-space.reference -->
