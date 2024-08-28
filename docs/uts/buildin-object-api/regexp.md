# RegExp

RegExp 对象用于将文本与一个模式匹配。

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
```ts
console.log(/foo/ig.flags);
// expected output: "gi"

console.log(/bar/myu.flags);
// expected output: "muy"
```
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
```ts
const regex1 = /fooBar/ig;

console.log(regex1.source);
// expected output: "fooBar"

console.log(new RegExp().source);
// expected output: "(?:)"
```
<!-- UTSJSON.RegExp.source.compatibility -->

### global

<!-- UTSJSON.RegExp.global.description -->

<!-- UTSJSON.RegExp.global.param -->

<!-- UTSJSON.RegExp.global.returnValue -->
```ts
var regex = new RegExp("foo", "g")

console.log(regex.global) // true
// expected output: "muy"
```
<!-- UTSJSON.RegExp.global.compatibility -->

### ignoreCase

<!-- UTSJSON.RegExp.ignoreCase.description -->

<!-- UTSJSON.RegExp.ignoreCase.param -->

<!-- UTSJSON.RegExp.ignoreCase.returnValue -->

<!-- UTSJSON.RegExp.ignoreCase.compatibility -->

### multiline

<!-- UTSJSON.RegExp.multiline.description -->

<!-- UTSJSON.RegExp.multiline.param -->

<!-- UTSJSON.RegExp.multiline.returnValue -->

```ts
var regex = new RegExp("foo", "m");

console.log(regex.multiline);
// expected output: true
```
<!-- UTSJSON.RegExp.multiline.compatibility -->

### lastIndex

<!-- UTSJSON.RegExp.lastIndex.description -->

<!-- UTSJSON.RegExp.lastIndex.param -->

<!-- UTSJSON.RegExp.lastIndex.returnValue -->
```ts
const regex1 = new RegExp('foo', 'g');
const str1 = 'table football, foosball';

regex1.test(str1);

console.log(regex1.lastIndex);
// expected output: 9

regex1.test(str1);

console.log(regex1.lastIndex);
// expected output: 19
```
<!-- UTSJSON.RegExp.lastIndex.compatibility -->


## 实例方法


### exec(string)

<!-- UTSJSON.RegExp.exec.description -->

<!-- UTSJSON.RegExp.exec.param -->

<!-- UTSJSON.RegExp.exec.returnValue -->
```ts
const regex1 = RegExp('foo*', 'g');
const str1 = 'table football, foosball';
let array1 = regex1.exec(str1);

while ((array1) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
  array1 = regex1.exec(str1);
}
```
<!-- UTSJSON.RegExp.exec.compatibility -->

### test(string)

<!-- UTSJSON.RegExp.test.description -->

<!-- UTSJSON.RegExp.test.param -->

<!-- UTSJSON.RegExp.test.returnValue -->
```ts
const str = 'table football';

const regex = new RegExp('foo*');
const globalRegex = new RegExp('foo*', 'g');

console.log(regex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 0

console.log(globalRegex.test(str));
// expected output: true

console.log(globalRegex.lastIndex);
// expected output: 9

console.log(globalRegex.test(str));
// expected output: false
```
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
