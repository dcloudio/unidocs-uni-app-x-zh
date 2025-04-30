# String

String 全局对象是一个用于字符串或一个字符序列的构造函数。

字符串字面量采取以下形式：

```ts
'string text'
"string text"
"中文/汉语"
"español"
"English "
"हिन्दी"
"العربية"
"português"
"বাংলা"
"русский"
"日本語"
"ਪੰਜਾਬੀ"
"한국어"
```

## 静态方法

### fromCharCode(...codes : number[]):string

<!-- UTSJSON.String.fromCharCode.description -->

<!-- UTSJSON.String.fromCharCode.param -->

<!-- UTSJSON.String.fromCharCode.returnValue -->

<!-- UTSJSON.String.fromCharCode.test -->

<!-- UTSJSON.String.fromCharCode.compatibility -->



## 实例属性


### length

<!-- UTSJSON.String.length.description -->

<!-- UTSJSON.String.length.param -->

<!-- UTSJSON.String.length.returnValue -->

<!-- UTSJSON.String.length.test -->

<!-- UTSJSON.String.length.compatibility -->


## 实例方法


### toString()

<!-- UTSJSON.String.toString.description -->

<!-- UTSJSON.String.toString.param -->

<!-- UTSJSON.String.toString.returnValue -->

<!-- UTSJSON.String.toString.test -->

<!-- UTSJSON.String.toString.compatibility -->

<!-- UTSJSON.String.toString.tutorial -->

### includes(searchString, position?)

<!-- UTSJSON.String.includes.description -->

<!-- UTSJSON.String.includes.param -->

<!-- UTSJSON.String.includes.returnValue -->

<!-- UTSJSON.String.includes.test -->

<!-- UTSJSON.String.includes.compatibility -->

### endsWith(searchString, endPosition?)

<!-- UTSJSON.String.endsWith.description -->

<!-- UTSJSON.String.endsWith.param -->

<!-- UTSJSON.String.endsWith.returnValue -->

<!-- UTSJSON.String.endsWith.test -->

<!-- UTSJSON.String.endsWith.compatibility -->

### repeat(count)

<!-- UTSJSON.String.repeat.description -->

<!-- UTSJSON.String.repeat.param -->

<!-- UTSJSON.String.repeat.returnValue -->

<!-- UTSJSON.String.repeat.test -->

<!-- UTSJSON.String.repeat.compatibility -->

### startsWith(searchString, position?)

<!-- UTSJSON.String.startsWith.description -->

<!-- UTSJSON.String.startsWith.param -->

<!-- UTSJSON.String.startsWith.returnValue -->

<!-- UTSJSON.String.startsWith.test -->

<!-- UTSJSON.String.startsWith.compatibility -->

### at(index)

<!-- UTSJSON.String.at.description -->

<!-- UTSJSON.String.at.param -->

<!-- UTSJSON.String.at.returnValue -->

<!-- UTSJSON.String.at.test -->

<!-- UTSJSON.String.at.compatibility -->

### charAt(pos)

<!-- UTSJSON.String.charAt.description -->

<!-- UTSJSON.String.charAt.param -->

<!-- UTSJSON.String.charAt.returnValue -->

<!-- UTSJSON.String.charAt.test -->

<!-- UTSJSON.String.charAt.compatibility -->

### charCodeAt(index)

<!-- UTSJSON.String.charCodeAt.description -->

<!-- UTSJSON.String.charCodeAt.param -->

<!-- UTSJSON.String.charCodeAt.returnValue -->

<!-- UTSJSON.String.charCodeAt.test -->

<!-- UTSJSON.String.charCodeAt.compatibility -->



### concat(...strings)

<!-- UTSJSON.String.concat.description -->

<!-- UTSJSON.String.concat.param -->

<!-- UTSJSON.String.concat.returnValue -->

<!-- UTSJSON.String.concat.test -->

<!-- UTSJSON.String.concat.compatibility -->

### indexOf(searchString, position?)

<!-- UTSJSON.String.indexOf.description -->

<!-- UTSJSON.String.indexOf.param -->

<!-- UTSJSON.String.indexOf.returnValue -->

<!-- UTSJSON.String.indexOf.test -->

<!-- UTSJSON.String.indexOf.compatibility -->

### lastIndexOf(searchString, position?)

<!-- UTSJSON.String.lastIndexOf.description -->

<!-- UTSJSON.String.lastIndexOf.param -->

<!-- UTSJSON.String.lastIndexOf.returnValue -->

<!-- UTSJSON.String.lastIndexOf.test -->

<!-- UTSJSON.String.lastIndexOf.compatibility -->

### localeCompare(that)

<!-- UTSJSON.String.localeCompare.description -->

<!-- UTSJSON.String.localeCompare.param -->

<!-- UTSJSON.String.localeCompare.returnValue -->

<!-- UTSJSON.String.localeCompare.test -->

<!-- UTSJSON.String.localeCompare.compatibility -->

<!-- UTSJSON.String.localeCompare.tutorial -->

### match(regexp : string | RegExp) : RegExpMatchArray | null;

<!-- UTSJSON.String.match.description -->

<!-- UTSJSON.String.match.param -->

<!-- UTSJSON.String.match.returnValue -->

<!-- UTSJSON.String.match.test -->

<!-- UTSJSON.String.match.compatibility -->

### replace(searchValue, replaceValue)

<!-- UTSJSON.String.replace.description -->

<!-- UTSJSON.String.replace.param -->

<!-- UTSJSON.String.replace.returnValue -->

<!-- UTSJSON.String.replace.test -->

<!-- UTSJSON.String.replace.compatibility -->

#### replaceValue 参数在 Kotlin/JVM 与 JavaScript 的差异

replaceValue 参数在包含一些特殊字符时在不同的平台被解释为不同的含义：

| 模式       | Kotlin/JVM 行为               | JavaScript 行为                  | 备注                                                                 |
|------------|-------------------------------|----------------------------------|----------------------------------------------------------------------|
| `$$`       | 闪退/不支持                   | 插入单个 `$` 字符                | Kotlin 需要转义为 `\$`                                               |
| `$&`       | 原样输出 `&`                  | 插入匹配的子串                   | JS 中相当于整个匹配                                                  |
| `` $` ``   | 原样输出 `` $` ``             | 插入匹配子串之前的文本           |                                                                      |
| `$'`       | 原样输出 `$'`                 | 插入匹配子串之后的文本           |                                                                      |
| `$n`       | 支持数字捕获组                | 支持数字捕获组                   | 差异：<br>1. Kotlin 无下标上限，JS 超限返回 `$n`<br>2. Kotlin 不存在组时闪退，JS 原样输出 |
| `${name}`  | 支持具名捕获组                | 不支持该语法                     | Kotlin 特有语法                                                     |
| `$<name>`  | 原样输出                      | 支持具名捕获组                   | JS 特有语法                                                         |
| `\`        | 有转义逻辑（如 `\d` → `d`）   | 无特殊处理                       | Kotlin 会处理转义字符                                               |



### replace(searchValue, replacer)

<!-- UTSJSON.String.replace_1.description -->

<!-- UTSJSON.String.replace_1.param -->

<!-- UTSJSON.String.replace_1.returnValue -->

<!-- UTSJSON.String.replace_1.test -->

<!-- UTSJSON.String.replace_1.compatibility -->


### search(regexp)

<!-- UTSJSON.String.search.description -->

<!-- UTSJSON.String.search.param -->

<!-- UTSJSON.String.search.returnValue -->

<!-- UTSJSON.String.search.test -->

<!-- UTSJSON.String.search.compatibility -->

### slice(start?, end?)

<!-- UTSJSON.String.slice.description -->

<!-- UTSJSON.String.slice.param -->

<!-- UTSJSON.String.slice.returnValue -->

<!-- UTSJSON.String.slice.test -->

<!-- UTSJSON.String.slice.compatibility -->

### split(separator, limit?)

<!-- UTSJSON.String.split.description -->

<!-- UTSJSON.String.split.param -->

<!-- UTSJSON.String.split.returnValue -->

<!-- UTSJSON.String.split.test -->

<!-- UTSJSON.String.split.compatibility -->

### substring(start, end?)

<!-- UTSJSON.String.substring.description -->

<!-- UTSJSON.String.substring.param -->

<!-- UTSJSON.String.substring.returnValue -->

<!-- UTSJSON.String.substring.compatibility -->


**bug&tips**

当前版本android平台 start 与 end 参数声明为Int, 需要将number 参数转换为int

```uts
let a = 1
let b = 2
// 临时解决办法
"hello uts".substring(a.toInt(),b.toInt())
```

这个问题后续会修复


### toLowerCase()

<!-- UTSJSON.String.toLowerCase.description -->

<!-- UTSJSON.String.toLowerCase.param -->

<!-- UTSJSON.String.toLowerCase.returnValue -->

<!-- UTSJSON.String.toLowerCase.test -->

<!-- UTSJSON.String.toLowerCase.compatibility -->

### toLocaleLowerCase(locales?)

<!-- UTSJSON.String.toLocaleLowerCase.description -->

<!-- UTSJSON.String.toLocaleLowerCase.param -->

<!-- UTSJSON.String.toLocaleLowerCase.returnValue -->

<!-- UTSJSON.String.toLocaleLowerCase.test -->

<!-- UTSJSON.String.toLocaleLowerCase.compatibility -->

<!-- UTSJSON.String.toLocaleLowerCase.tutorial -->

### toUpperCase()

<!-- UTSJSON.String.toUpperCase.description -->

<!-- UTSJSON.String.toUpperCase.param -->

<!-- UTSJSON.String.toUpperCase.returnValue -->

<!-- UTSJSON.String.toUpperCase.test -->

<!-- UTSJSON.String.toUpperCase.compatibility -->

### toLocaleUpperCase(locales?)

<!-- UTSJSON.String.toLocaleUpperCase.description -->

<!-- UTSJSON.String.toLocaleUpperCase.param -->

<!-- UTSJSON.String.toLocaleUpperCase.returnValue -->

<!-- UTSJSON.String.toLocaleUpperCase.test -->

<!-- UTSJSON.String.toLocaleUpperCase.compatibility -->

<!-- UTSJSON.String.toLocaleUpperCase.tutorial -->

### trim()

<!-- UTSJSON.String.trim.description -->

<!-- UTSJSON.String.trim.param -->

<!-- UTSJSON.String.trim.returnValue -->

<!-- UTSJSON.String.trim.test -->

<!-- UTSJSON.String.trim.compatibility -->

### substr(from, length?)

<!-- UTSJSON.String.substr.description -->

<!-- UTSJSON.String.substr.param -->

<!-- UTSJSON.String.substr.returnValue -->

<!-- UTSJSON.String.substr.test -->

<!-- UTSJSON.String.substr.compatibility -->

<!-- UTSJSON.String.substr.tutorial -->

### padStart(targetLength, padString?)

<!-- UTSJSON.String.padStart.description -->

<!-- UTSJSON.String.padStart.param -->

<!-- UTSJSON.String.padStart.returnValue -->

<!-- UTSJSON.String.padStart.test -->

<!-- UTSJSON.String.padStart.compatibility -->


### padEnd(targetLength, padString?)

<!-- UTSJSON.String.padEnd.description -->

<!-- UTSJSON.String.padEnd.param -->

<!-- UTSJSON.String.padEnd.returnValue -->

<!-- UTSJSON.String.padEnd.test -->

<!-- UTSJSON.String.padEnd.compatibility -->


### codePointAt(pos)

<!-- UTSJSON.String.codePointAt.description -->

<!-- UTSJSON.String.codePointAt.param -->

<!-- UTSJSON.String.codePointAt.returnValue -->

<!-- UTSJSON.String.codePointAt.test -->

<!-- UTSJSON.String.codePointAt.compatibility -->

<!-- UTSJSON.String.codePointAt.tutorial -->

### normalize(form)

<!-- UTSJSON.String.normalize.description -->

<!-- UTSJSON.String.normalize.param -->

<!-- UTSJSON.String.normalize.returnValue -->

<!-- UTSJSON.String.normalize.test -->

<!-- UTSJSON.String.normalize.compatibility -->

<!-- UTSJSON.String.normalize.tutorial -->

### normalize(form?)

<!-- UTSJSON.String.normalize_1.description -->

<!-- UTSJSON.String.normalize_1.param -->

<!-- UTSJSON.String.normalize_1.returnValue -->

<!-- UTSJSON.String.normalize_1.test -->

<!-- UTSJSON.String.normalize_1.compatibility -->

<!-- UTSJSON.String.normalize_1.tutorial -->

### isWellFormed()

<!-- UTSJSON.String.isWellFormed.description -->

<!-- UTSJSON.String.isWellFormed.param -->

<!-- UTSJSON.String.isWellFormed.returnValue -->

<!-- UTSJSON.String.isWellFormed.test -->

<!-- UTSJSON.String.isWellFormed.compatibility -->

### toWellFormed()

<!-- UTSJSON.String.toWellFormed.description -->

<!-- UTSJSON.String.toWellFormed.param -->

<!-- UTSJSON.String.toWellFormed.returnValue -->

<!-- UTSJSON.String.toWellFormed.test -->

<!-- UTSJSON.String.toWellFormed.compatibility -->

### toCharArray()

<!-- UTSJSON.String.toCharArray.description -->

<!-- UTSJSON.String.toCharArray.param -->

<!-- UTSJSON.String.toCharArray.returnValue -->

<!-- UTSJSON.String.toCharArray.test -->

<!-- UTSJSON.String.toCharArray.compatibility -->

<!-- UTSJSON.String.toCharArray.tutorial -->

### valueOf()

<!-- UTSJSON.String.valueOf.description -->

<!-- UTSJSON.String.valueOf.param -->

<!-- UTSJSON.String.valueOf.returnValue -->

<!-- UTSJSON.String.valueOf.test -->

<!-- UTSJSON.String.valueOf.compatibility -->

<!-- UTSJSON.String.valueOf.tutorial -->

### anchor(name)

<!-- UTSJSON.String.anchor.description -->

<!-- UTSJSON.String.anchor.param -->

<!-- UTSJSON.String.anchor.returnValue -->

<!-- UTSJSON.String.anchor.test -->

<!-- UTSJSON.String.anchor.compatibility -->

<!-- UTSJSON.String.anchor.tutorial -->

### big()

<!-- UTSJSON.String.big.description -->

<!-- UTSJSON.String.big.param -->

<!-- UTSJSON.String.big.returnValue -->

<!-- UTSJSON.String.big.test -->

<!-- UTSJSON.String.big.compatibility -->

<!-- UTSJSON.String.big.tutorial -->

### blink()

<!-- UTSJSON.String.blink.description -->

<!-- UTSJSON.String.blink.param -->

<!-- UTSJSON.String.blink.returnValue -->

<!-- UTSJSON.String.blink.test -->

<!-- UTSJSON.String.blink.compatibility -->

<!-- UTSJSON.String.blink.tutorial -->

### bold()

<!-- UTSJSON.String.bold.description -->

<!-- UTSJSON.String.bold.param -->

<!-- UTSJSON.String.bold.returnValue -->

<!-- UTSJSON.String.bold.test -->

<!-- UTSJSON.String.bold.compatibility -->

<!-- UTSJSON.String.bold.tutorial -->

### fixed()

<!-- UTSJSON.String.fixed.description -->

<!-- UTSJSON.String.fixed.param -->

<!-- UTSJSON.String.fixed.returnValue -->

<!-- UTSJSON.String.fixed.test -->

<!-- UTSJSON.String.fixed.compatibility -->

<!-- UTSJSON.String.fixed.tutorial -->

### fontcolor(color)

<!-- UTSJSON.String.fontcolor.description -->

<!-- UTSJSON.String.fontcolor.param -->

<!-- UTSJSON.String.fontcolor.returnValue -->

<!-- UTSJSON.String.fontcolor.test -->

<!-- UTSJSON.String.fontcolor.compatibility -->

<!-- UTSJSON.String.fontcolor.tutorial -->

### fontsize(size)

<!-- UTSJSON.String.fontsize.description -->

<!-- UTSJSON.String.fontsize.param -->

<!-- UTSJSON.String.fontsize.returnValue -->

<!-- UTSJSON.String.fontsize.test -->

<!-- UTSJSON.String.fontsize.compatibility -->

<!-- UTSJSON.String.fontsize.tutorial -->

### fontsize(size)

<!-- UTSJSON.String.fontsize_1.description -->

<!-- UTSJSON.String.fontsize_1.param -->

<!-- UTSJSON.String.fontsize_1.returnValue -->

<!-- UTSJSON.String.fontsize_1.test -->

<!-- UTSJSON.String.fontsize_1.compatibility -->

<!-- UTSJSON.String.fontsize_1.tutorial -->

### italics()

<!-- UTSJSON.String.italics.description -->

<!-- UTSJSON.String.italics.param -->

<!-- UTSJSON.String.italics.returnValue -->

<!-- UTSJSON.String.italics.test -->

<!-- UTSJSON.String.italics.compatibility -->

<!-- UTSJSON.String.italics.tutorial -->

### link(url)

<!-- UTSJSON.String.link.description -->

<!-- UTSJSON.String.link.param -->

<!-- UTSJSON.String.link.returnValue -->

<!-- UTSJSON.String.link.test -->

<!-- UTSJSON.String.link.compatibility -->

<!-- UTSJSON.String.link.tutorial -->

### small()

<!-- UTSJSON.String.small.description -->

<!-- UTSJSON.String.small.param -->

<!-- UTSJSON.String.small.returnValue -->

<!-- UTSJSON.String.small.test -->

<!-- UTSJSON.String.small.compatibility -->

<!-- UTSJSON.String.small.tutorial -->

### strike()

<!-- UTSJSON.String.strike.description -->

<!-- UTSJSON.String.strike.param -->

<!-- UTSJSON.String.strike.returnValue -->

<!-- UTSJSON.String.strike.test -->

<!-- UTSJSON.String.strike.compatibility -->

<!-- UTSJSON.String.strike.tutorial -->

### sub()

<!-- UTSJSON.String.sub.description -->

<!-- UTSJSON.String.sub.param -->

<!-- UTSJSON.String.sub.returnValue -->

<!-- UTSJSON.String.sub.test -->

<!-- UTSJSON.String.sub.compatibility -->

<!-- UTSJSON.String.sub.tutorial -->

### sup()

<!-- UTSJSON.String.sup.description -->

<!-- UTSJSON.String.sup.param -->

<!-- UTSJSON.String.sup.returnValue -->

<!-- UTSJSON.String.sup.test -->

<!-- UTSJSON.String.sup.compatibility -->

<!-- UTSJSON.String.sup.tutorial -->


<!-- UTSJSON.String.tutorial -->


## Android 平台实现

* 目前 string 类型编译到 kotlin 为 kotlin.String
