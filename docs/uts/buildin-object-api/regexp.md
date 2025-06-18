# RegExp

RegExp 对象用于将文本与一个模式匹配。

#### 调整 

正则表达式存在子规范。\
HBuilder X 4.72之前版本 Android端正则使用kotlin正则规范，即 ​​`PCRE`(Perl Compatible Regular Expressions) 标准，部分细节与web存在差异。\
HBuilder X 4.72及之后版本 Android端正则引擎完全遵循`ECMAScript`标准(与web完全保持一致)。

对开发者的影响：

绝大多数场景下`PCRE`正则引擎与`ECMAScript`引擎表现是一致的，这部分场景不会对开发者产生任何影响。

少部分语法执行结果存在差异，以[issue 16951](https://issues.dcloud.net.cn/pages/issues/detail?id=16951) 为例:

开发者不可以继续使用​​`PCRE`风格的语法:

```
'10px 20px'.replace(FLOAT_REGEX, '\\${0}')  
```

这会导致不符合预期的结果:

```
\${0}px \${0}px
```

应该修改为与web一致的语法:

```
'10px 20px'.replace(FLOAT_REGEX, '${0}') 
```


### new(pattern : RegExp \| string) : RegExp;@Constructor(pattern)

<!-- UTSJSON.RegExp.Constructor.description -->

<!-- UTSJSON.RegExp.Constructor.param -->

<!-- UTSJSON.RegExp.Constructor.returnValue -->

<!-- UTSJSON.RegExp.Constructor.compatibility -->

<!-- UTSJSON.RegExp.Constructor.tutorial -->

### new(pattern : string, flags ?: string) : RegExp;@Constructor(pattern, flags?)

<!-- UTSJSON.RegExp.Constructor_1.description -->

<!-- UTSJSON.RegExp.Constructor_1.param -->

<!-- UTSJSON.RegExp.Constructor_1.returnValue -->

<!-- UTSJSON.RegExp.Constructor_1.compatibility -->

<!-- UTSJSON.RegExp.Constructor_1.tutorial -->

## 实例属性


### flags

<!-- UTSJSON.RegExp.flags.description -->

<!-- UTSJSON.RegExp.flags.param -->

<!-- UTSJSON.RegExp.flags.returnValue -->

<!-- UTSJSON.RegExp.flags.test -->

<!-- UTSJSON.RegExp.flags.compatibility -->

### dotAll

<!-- UTSJSON.RegExp.dotAll.description -->

<!-- UTSJSON.RegExp.dotAll.param -->

<!-- UTSJSON.RegExp.dotAll.returnValue -->

<!-- UTSJSON.RegExp.dotAll.test -->

<!-- UTSJSON.RegExp.dotAll.compatibility -->

<!-- UTSJSON.RegExp.dotAll.tutorial -->

### hasIndices

<!-- UTSJSON.RegExp.hasIndices.description -->

<!-- UTSJSON.RegExp.hasIndices.param -->

<!-- UTSJSON.RegExp.hasIndices.returnValue -->

<!-- UTSJSON.RegExp.hasIndices.test -->

<!-- UTSJSON.RegExp.hasIndices.compatibility -->

<!-- UTSJSON.RegExp.hasIndices.tutorial -->

### sticky

<!-- UTSJSON.RegExp.sticky.description -->

<!-- UTSJSON.RegExp.sticky.param -->

<!-- UTSJSON.RegExp.sticky.returnValue -->

<!-- UTSJSON.RegExp.sticky.test -->

<!-- UTSJSON.RegExp.sticky.compatibility -->

<!-- UTSJSON.RegExp.sticky.tutorial -->

### unicode

<!-- UTSJSON.RegExp.unicode.description -->

<!-- UTSJSON.RegExp.unicode.param -->

<!-- UTSJSON.RegExp.unicode.returnValue -->

<!-- UTSJSON.RegExp.unicode.test -->

<!-- UTSJSON.RegExp.unicode.compatibility -->

<!-- UTSJSON.RegExp.unicode.tutorial -->

### source

<!-- UTSJSON.RegExp.source.description -->

<!-- UTSJSON.RegExp.source.param -->

<!-- UTSJSON.RegExp.source.returnValue -->

<!-- UTSJSON.RegExp.source.test -->

<!-- UTSJSON.RegExp.source.compatibility -->

### global

<!-- UTSJSON.RegExp.global.description -->

<!-- UTSJSON.RegExp.global.param -->

<!-- UTSJSON.RegExp.global.returnValue -->

<!-- UTSJSON.RegExp.global.test -->

<!-- UTSJSON.RegExp.global.compatibility -->

### ignoreCase

<!-- UTSJSON.RegExp.ignoreCase.description -->

<!-- UTSJSON.RegExp.ignoreCase.param -->

<!-- UTSJSON.RegExp.ignoreCase.returnValue -->

<!-- UTSJSON.RegExp.ignoreCase.test -->

<!-- UTSJSON.RegExp.ignoreCase.compatibility -->

### multiline

<!-- UTSJSON.RegExp.multiline.description -->

<!-- UTSJSON.RegExp.multiline.param -->

<!-- UTSJSON.RegExp.multiline.returnValue -->

<!-- UTSJSON.RegExp.multiline.test -->

<!-- UTSJSON.RegExp.multiline.compatibility -->

### lastIndex

<!-- UTSJSON.RegExp.lastIndex.description -->

<!-- UTSJSON.RegExp.lastIndex.param -->

<!-- UTSJSON.RegExp.lastIndex.returnValue -->

<!-- UTSJSON.RegExp.lastIndex.test -->

<!-- UTSJSON.RegExp.lastIndex.compatibility -->


## 实例方法


### exec(string)

<!-- UTSJSON.RegExp.exec.description -->

<!-- UTSJSON.RegExp.exec.param -->

<!-- UTSJSON.RegExp.exec.returnValue -->

<!-- UTSJSON.RegExp.exec.test -->

<!-- UTSJSON.RegExp.exec.compatibility -->

### test(string)

<!-- UTSJSON.RegExp.test.description -->

<!-- UTSJSON.RegExp.test.param -->

<!-- UTSJSON.RegExp.test.returnValue -->

<!-- UTSJSON.RegExp.test.test -->

<!-- UTSJSON.RegExp.test.compatibility -->

<!-- UTSJSON.RegExp.tutorial -->

## Bug & Tips@tips

* 目前 RegExp 类型编译到 kotlin 为 io.dcloud.uts.UTSRegExp



::: preview

> UTS

```ts
// 创建Kotlin HashSet
let kotlinSet = new kotlin.collections.HashSet<string>()
kotlinSet.add("a")
kotlinSet.add("b")
// 转换为 UTS Set
let utsSet = new Set<string>()
utsSet.addAll(kotlinSet)
console.log(utsSet)
// UTS Set 转换为 Kotlin HashSet
let nextKotlinSet = new kotlin.collections.HashSet<string>()
nextKotlinSet.addAll(utsSet)
console.log(nextKotlinSet)
```

> Kotlin

```Kotlin
// 创建Kotlin HashSet
var kotlinSet = kotlin.collections.HashSet<String>();
kotlinSet.add("a");
kotlinSet.add("b");
// 转换为 UTS Set
var utsSet = Set<String>();
utsSet.addAll(kotlinSet);
console.log(utsSet, " at pages/index/helloView.uvue:35");
// UTS Set 转换为 Kotlin HashSet
var nextKotlinSet = kotlin.collections.HashSet<String>();
nextKotlinSet.addAll(utsSet);
console.log(nextKotlinSet, " at pages/index/helloView.uvue:38");
```

:::
