## white-space


<!-- CSSJSON.white-space.description -->

<!-- CSSJSON.white-space.syntax -->

<!-- CSSJSON.white-space.restrictions -->

<!-- CSSJSON.white-space.values -->

<!-- CSSJSON.white-space.defaultValue -->

<!-- CSSJSON.white-space.unixTags -->

<!-- CSSJSON.white-space.compatibility -->

#### HBuilderX5.0版本调整  
app平台、web平台调整 white-space 属性的实现按 W3C 标准规范，同时 app 平台新增支持 `keep` 属性值。  

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
