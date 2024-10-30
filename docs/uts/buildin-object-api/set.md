# Set

Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。Set 中的元素只会出现一次，即 Set 中的元素是唯一的。

## 构造函数

### new \<T = any>(values ?: readonly T[] \| null) : Set\<T>;@Constructor(values?)

<!-- UTSJSON.Set.Constructor.description -->

<!-- UTSJSON.Set.Constructor.param -->

<!-- UTSJSON.Set.Constructor.returnValue -->

<!-- UTSJSON.Set.Constructor.test -->

<!-- UTSJSON.Set.Constructor.compatibility -->

<!-- UTSJSON.Set.Constructor.tutorial -->

## 实例属性

### size

<!-- UTSJSON.Set.size.description -->

<!-- UTSJSON.Set.size.param -->

<!-- UTSJSON.Set.size.returnValue -->

<!-- UTSJSON.Set.size.test -->

<!-- UTSJSON.Set.size.compatibility -->


## 实例方法


### add(value)

<!-- UTSJSON.Set.add.description -->

<!-- UTSJSON.Set.add.param -->

<!-- UTSJSON.Set.add.returnValue -->

<!-- UTSJSON.Set.add.test -->

<!-- UTSJSON.Set.add.compatibility -->

### clear()

<!-- UTSJSON.Set.clear.description -->

<!-- UTSJSON.Set.clear.param -->

<!-- UTSJSON.Set.clear.returnValue -->

<!-- UTSJSON.Set.clear.test -->

<!-- UTSJSON.Set.clear.compatibility -->

### delete(value)

<!-- UTSJSON.Set.delete.description -->

<!-- UTSJSON.Set.delete.param -->

<!-- UTSJSON.Set.delete.returnValue -->

<!-- UTSJSON.Set.delete.test -->

<!-- UTSJSON.Set.delete.compatibility -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Set.forEach.description -->

<!-- UTSJSON.Set.forEach.param -->

<!-- UTSJSON.Set.forEach.returnValue -->

<!-- UTSJSON.Set.forEach.test -->

<!-- UTSJSON.Set.forEach.compatibility -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Set.forEach_1.description -->

<!-- UTSJSON.Set.forEach_1.param -->

<!-- UTSJSON.Set.forEach_1.returnValue -->

<!-- UTSJSON.Set.forEach_1.test -->

<!-- UTSJSON.Set.forEach_1.compatibility -->

<!-- UTSJSON.Set.forEach_1.tutorial -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Set.forEach_2.description -->

<!-- UTSJSON.Set.forEach_2.param -->

<!-- UTSJSON.Set.forEach_2.returnValue -->

<!-- UTSJSON.Set.forEach_2.test -->

<!-- UTSJSON.Set.forEach_2.compatibility -->

<!-- UTSJSON.Set.forEach_2.tutorial -->

### has(value)

<!-- UTSJSON.Set.has.description -->

<!-- UTSJSON.Set.has.param -->

<!-- UTSJSON.Set.has.returnValue -->

<!-- UTSJSON.Set.has.test -->

<!-- UTSJSON.Set.has.compatibility -->.

<!-- UTSJSON.Set.tutorial -->

## Android 平台方法

* 目前 Set 类型编译到 kotlin 为 io.dcloud.uts.Set


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
