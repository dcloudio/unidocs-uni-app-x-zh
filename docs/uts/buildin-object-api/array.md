# Array

Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

## 构造函数

### new \<T>(...items : T\[]) : T[]@Constructor(...items)

<!-- UTSJSON.Array.Constructor.description -->

<!-- UTSJSON.Array.Constructor.param -->

<!-- UTSJSON.Array.Constructor.returnValue -->

<!-- UTSJSON.Array.Constructor.test -->

<!-- UTSJSON.Array.Constructor.compatibility -->

<!-- UTSJSON.Array.Constructor.tutorial -->

::: warning 注意事项

与JS中的`Array` 不同，`UTS`不支持的指定长度初始化Array的写法

```ts
let arr = new Array(10)
```

上面的代码在不同的平台的表现有差异:

- web平台

	一个长度为10的数组，每一个元素都是 undefined

- Android/ios平台

	一个长度为1的数组，其元素为 数字10

:::

## 静态方法

### from<T>(arrayLike: ArrayLike<T>): T[];

<!-- UTSJSON.Array.from.description -->

<!-- UTSJSON.Array.from.param -->

<!-- UTSJSON.Array.from.returnValue -->

<!-- UTSJSON.Array.from.test -->

<!-- UTSJSON.Array.from.compatibility -->


### of<T>(...items: T[]) : T[]

<!-- UTSJSON.Array.of.description -->

<!-- UTSJSON.Array.of.param -->

<!-- UTSJSON.Array.of.returnValue -->

<!-- UTSJSON.Array.of.test -->

<!-- UTSJSON.Array.of.compatibility -->


### isArray(arg : any) : arg is any[]

<!-- UTSJSON.Array.isArray.description -->

<!-- UTSJSON.Array.isArray.param -->

<!-- UTSJSON.Array.isArray.returnValue -->

<!-- UTSJSON.Array.isArray.test -->

<!-- UTSJSON.Array.isArray.compatibility -->


### fromAsync<T>(arrayLike: ArrayLike<T>): T[];

<!-- UTSJSON.Array.fromAsync.description -->

<!-- UTSJSON.Array.fromAsync.param -->

<!-- UTSJSON.Array.fromAsync.returnValue -->

<!-- UTSJSON.Array.fromAsync.test -->

<!-- UTSJSON.Array.fromAsync.compatibility -->



## 实例属性

### length

<!-- UTSJSON.Array.length.description -->

<!-- UTSJSON.Array.length.param -->

<!-- UTSJSON.Array.length.returnValue -->

<!-- UTSJSON.Array.length.test -->

<!-- UTSJSON.Array.length.compatibility -->

边界情况说明：

- 在不同平台上，数组的长度限制不同，超出限制会导致相应的错误或异常
  * 编译至 JavaScript 平台时，最大长度为 2^32 - 1，超出限制会报错：`Invalid array length`。
  * 编译至 Kotlin 平台时，最大长度受系统内存的限制，超出限制报错：`java.lang.OutOfMemoryError: Failed to allocate a allocation until OOM`。
  * 编译至 Swift 平台时，最大长度也受系统内存的限制，目前超出限制没有返回信息。


## 实例方法

### toString()

<!-- UTSJSON.Array.toString.description -->

<!-- UTSJSON.Array.toString.param -->

<!-- UTSJSON.Array.toString.returnValue -->

<!-- UTSJSON.Array.toString.test -->

<!-- UTSJSON.Array.toString.compatibility -->

<!-- UTSJSON.Array.toString.tutorial -->

### add(item)

<!-- UTSJSON.Array.add.description -->

<!-- UTSJSON.Array.add.param -->

<!-- UTSJSON.Array.add.returnValue -->

<!-- UTSJSON.Array.add.test -->

<!-- UTSJSON.Array.add.compatibility -->

<!-- UTSJSON.Array.add.tutorial -->

### toLocaleString()

<!-- UTSJSON.Array.toLocaleString.description -->

<!-- UTSJSON.Array.toLocaleString.param -->

<!-- UTSJSON.Array.toLocaleString.returnValue -->

<!-- UTSJSON.Array.toLocaleString.test -->

<!-- UTSJSON.Array.toLocaleString.compatibility -->

<!-- UTSJSON.Array.toLocaleString.tutorial -->

### joinToString(separator)

<!-- UTSJSON.Array.joinToString.description -->

<!-- UTSJSON.Array.joinToString.param -->

<!-- UTSJSON.Array.joinToString.returnValue -->

<!-- UTSJSON.Array.joinToString.test -->

<!-- UTSJSON.Array.joinToString.compatibility -->

<!-- UTSJSON.Array.joinToString.tutorial -->

### find(predicate, thisArg?)

<!-- UTSJSON.Array.find.description -->

<!-- UTSJSON.Array.find.param -->

<!-- UTSJSON.Array.find.returnValue -->

<!-- UTSJSON.Array.find.test -->

<!-- UTSJSON.Array.find.compatibility -->

### find(predicate, thisArg?)

<!-- UTSJSON.Array.find_1.description -->

<!-- UTSJSON.Array.find_1.param -->

<!-- UTSJSON.Array.find_1.returnValue -->

<!-- UTSJSON.Array.find_1.test -->

<!-- UTSJSON.Array.find_1.compatibility -->

<!-- UTSJSON.Array.find_1.tutorial -->

### find(predicate, thisArg?)

<!-- UTSJSON.Array.find_2.description -->

<!-- UTSJSON.Array.find_2.param -->

<!-- UTSJSON.Array.find_2.returnValue -->

<!-- UTSJSON.Array.find_2.test -->

<!-- UTSJSON.Array.find_2.compatibility -->

<!-- UTSJSON.Array.find_2.tutorial -->

### findIndex(predicate, thisArg?)

<!-- UTSJSON.Array.findIndex.description -->

<!-- UTSJSON.Array.findIndex.param -->

<!-- UTSJSON.Array.findIndex.returnValue -->

<!-- UTSJSON.Array.findIndex.test -->

<!-- UTSJSON.Array.findIndex.compatibility -->

### findIndex(predicate, thisArg?)

<!-- UTSJSON.Array.findIndex_1.description -->

<!-- UTSJSON.Array.findIndex_1.param -->

<!-- UTSJSON.Array.findIndex_1.returnValue -->

<!-- UTSJSON.Array.findIndex_1.test -->

<!-- UTSJSON.Array.findIndex_1.compatibility -->

<!-- UTSJSON.Array.findIndex_1.tutorial -->

### findIndex(predicate, thisArg?)

<!-- UTSJSON.Array.findIndex_2.description -->

<!-- UTSJSON.Array.findIndex_2.param -->

<!-- UTSJSON.Array.findIndex_2.returnValue -->

<!-- UTSJSON.Array.findIndex_2.test -->

<!-- UTSJSON.Array.findIndex_2.compatibility -->

<!-- UTSJSON.Array.findIndex_2.tutorial -->

### fill(value, start?, end?)

<!-- UTSJSON.Array.fill.description -->

<!-- UTSJSON.Array.fill.param -->

<!-- UTSJSON.Array.fill.returnValue -->

<!-- UTSJSON.Array.fill.test -->

需要注意的是，截止HBuilder 4.22  部分平台尚不支持[根据元素个数构造`Array`的写法](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/array.html#constructor)

所以下面的代码在 部分平台可能不符合预期


<!-- UTSJSON.Array.sampleFillError.test -->

可以使用下面的代码替代

<!-- UTSJSON.Array.sampleFill.test -->

<!-- UTSJSON.Array.fill.compatibility -->

### copyWithin(target, start?, end?)

<!-- UTSJSON.Array.copyWithin.description -->

<!-- UTSJSON.Array.copyWithin.param -->

<!-- UTSJSON.Array.copyWithin.returnValue -->

<!-- UTSJSON.Array.copyWithin.test -->

<!-- UTSJSON.Array.copyWithin.compatibility -->

### pop()

<!-- UTSJSON.Array.pop.description -->

<!-- UTSJSON.Array.pop.param -->

<!-- UTSJSON.Array.pop.returnValue -->

<!-- UTSJSON.Array.pop.test -->

<!-- UTSJSON.Array.pop.compatibility -->

### push(...items)

<!-- UTSJSON.Array.push.description -->

<!-- UTSJSON.Array.push.param -->

<!-- UTSJSON.Array.push.returnValue -->

<!-- UTSJSON.Array.push.test -->

<!-- UTSJSON.Array.push.compatibility -->

### concat(...items)

<!-- UTSJSON.Array.concat.description -->

<!-- UTSJSON.Array.concat.param -->

<!-- UTSJSON.Array.concat.returnValue -->

<!-- UTSJSON.Array.concat.test -->

<!-- UTSJSON.Array.concat.compatibility -->

### concat(...items)

<!-- UTSJSON.Array.concat_1.description -->

<!-- UTSJSON.Array.concat_1.param -->

<!-- UTSJSON.Array.concat_1.returnValue -->

<!-- UTSJSON.Array.concat_1.test -->

<!-- UTSJSON.Array.concat_1.compatibility -->

### join(separator?)

<!-- UTSJSON.Array.join.description -->

<!-- UTSJSON.Array.join.param -->

<!-- UTSJSON.Array.join.returnValue -->

<!-- UTSJSON.Array.join.test -->

<!-- UTSJSON.Array.join.compatibility -->

### reverse()

<!-- UTSJSON.Array.reverse.description -->

<!-- UTSJSON.Array.reverse.param -->

<!-- UTSJSON.Array.reverse.returnValue -->

<!-- UTSJSON.Array.reverse.compatibility -->

### shift()

<!-- UTSJSON.Array.shift.description -->

<!-- UTSJSON.Array.shift.param -->

<!-- UTSJSON.Array.shift.returnValue -->

<!-- UTSJSON.Array.shift.test -->

<!-- UTSJSON.Array.shift.compatibility -->

### slice(start?, end?)

<!-- UTSJSON.Array.slice.description -->

<!-- UTSJSON.Array.slice.param -->

<!-- UTSJSON.Array.slice.returnValue -->

<!-- UTSJSON.Array.slice.test -->

<!-- UTSJSON.Array.slice.compatibility -->

### sort(compareFn?)

<!-- UTSJSON.Array.sort.description -->

<!-- UTSJSON.Array.sort.param -->

<!-- UTSJSON.Array.sort.returnValue -->

<!-- UTSJSON.Array.sort.test -->

<!-- UTSJSON.Array.sort.compatibility -->

**平台差异性**

在android平台，一定不能忽略两个对比元素相等的场景，否则可能会出现`java.lang.IllegalArgumentException: Comparison method violates its general contract!‌`
<!-- UTSJSON.Array.sampleSort.test -->



### splice(start, deleteCount, ...items)

<!-- UTSJSON.Array.splice.description -->

<!-- UTSJSON.Array.splice.param -->

<!-- UTSJSON.Array.splice.returnValue -->

<!-- UTSJSON.Array.splice.test -->

<!-- UTSJSON.Array.splice.compatibility -->

### unshift(...items)

<!-- UTSJSON.Array.unshift.description -->

<!-- UTSJSON.Array.unshift.param -->

<!-- UTSJSON.Array.unshift.returnValue -->

<!-- UTSJSON.Array.unshift.test -->

<!-- UTSJSON.Array.unshift.compatibility -->

### indexOf(searchElement, fromIndex?)

<!-- UTSJSON.Array.indexOf.description -->

<!-- UTSJSON.Array.indexOf.param -->

<!-- UTSJSON.Array.indexOf.returnValue -->

<!-- UTSJSON.Array.indexOf.test -->

<!-- UTSJSON.Array.indexOf.compatibility -->

### lastIndexOf(searchElement, fromIndex?)

<!-- UTSJSON.Array.lastIndexOf.description -->

<!-- UTSJSON.Array.lastIndexOf.param -->

<!-- UTSJSON.Array.lastIndexOf.returnValue -->

<!-- UTSJSON.Array.lastIndexOf.test -->

<!-- UTSJSON.Array.lastIndexOf.compatibility -->

### every(predicate, thisArg?)

<!-- UTSJSON.Array.every.description -->

<!-- UTSJSON.Array.every.param -->

<!-- UTSJSON.Array.every.returnValue -->

<!-- UTSJSON.Array.every.test -->

<!-- UTSJSON.Array.every.compatibility -->

### every(predicate, thisArg?)

<!-- UTSJSON.Array.every_1.description -->

<!-- UTSJSON.Array.every_1.param -->

<!-- UTSJSON.Array.every_1.returnValue -->

<!-- UTSJSON.Array.every_1.test -->

<!-- UTSJSON.Array.every_1.compatibility -->

<!-- UTSJSON.Array.every_1.tutorial -->

### every(predicate, thisArg?)

<!-- UTSJSON.Array.every_2.description -->

<!-- UTSJSON.Array.every_2.param -->

<!-- UTSJSON.Array.every_2.returnValue -->

<!-- UTSJSON.Array.every_2.test -->

<!-- UTSJSON.Array.every_2.compatibility -->

<!-- UTSJSON.Array.every_2.tutorial -->

### every(predicate, thisArg?)

<!-- UTSJSON.Array.every_3.description -->

<!-- UTSJSON.Array.every_3.param -->

<!-- UTSJSON.Array.every_3.returnValue -->

<!-- UTSJSON.Array.every_3.test -->

<!-- UTSJSON.Array.every_3.compatibility -->

<!-- UTSJSON.Array.every_3.tutorial -->


### some(predicate, thisArg?)

<!-- UTSJSON.Array.some.description -->

<!-- UTSJSON.Array.some.param -->

<!-- UTSJSON.Array.some.returnValue -->

<!-- UTSJSON.Array.some.test -->

<!-- UTSJSON.Array.some.compatibility -->

### some(predicate, thisArg?)

<!-- UTSJSON.Array.some_1.description -->

<!-- UTSJSON.Array.some_1.param -->

<!-- UTSJSON.Array.some_1.returnValue -->

<!-- UTSJSON.Array.some_1.test -->

<!-- UTSJSON.Array.some_1.compatibility -->

<!-- UTSJSON.Array.some_1.tutorial -->

### some(predicate, thisArg?)

<!-- UTSJSON.Array.some_2.description -->

<!-- UTSJSON.Array.some_2.param -->

<!-- UTSJSON.Array.some_2.returnValue -->

<!-- UTSJSON.Array.some_2.test -->

<!-- UTSJSON.Array.some_2.compatibility -->

<!-- UTSJSON.Array.some_2.tutorial -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Array.forEach.description -->

<!-- UTSJSON.Array.forEach.param -->

<!-- UTSJSON.Array.forEach.returnValue -->

<!-- UTSJSON.Array.forEach.test -->

> 特别注意：
> 不可在 forEach 的 callbackFn 里添加或者删除原数组元素，此行为是危险的，在 Android 平台会造成闪退，在 iOS 平台会造成行为不符合预期。如果想实现该效果，请用 while 循环。

<!-- UTSJSON.Array.sampleForEachCallback.test -->

<!-- UTSJSON.Array.forEach.compatibility -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Array.forEach_1.description -->

<!-- UTSJSON.Array.forEach_1.param -->

<!-- UTSJSON.Array.forEach_1.returnValue -->

<!-- UTSJSON.Array.forEach_1.test -->

<!-- UTSJSON.Array.forEach_1.compatibility -->

<!-- UTSJSON.Array.forEach_1.tutorial -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Array.forEach_2.description -->

<!-- UTSJSON.Array.forEach_2.param -->

<!-- UTSJSON.Array.forEach_2.returnValue -->

<!-- UTSJSON.Array.forEach_2.test -->

<!-- UTSJSON.Array.forEach_2.compatibility -->

<!-- UTSJSON.Array.forEach_2.tutorial -->

### map(callbackfn, thisArg?)

<!-- UTSJSON.Array.map.description -->

<!-- UTSJSON.Array.map.param -->

<!-- UTSJSON.Array.map.returnValue -->

<!-- UTSJSON.Array.map.test -->

<!-- UTSJSON.Array.map.compatibility -->

### map(callbackfn, thisArg?)

<!-- UTSJSON.Array.map_1.description -->

<!-- UTSJSON.Array.map_1.param -->

<!-- UTSJSON.Array.map_1.returnValue -->

<!-- UTSJSON.Array.map_1.test -->

<!-- UTSJSON.Array.map_1.compatibility -->

<!-- UTSJSON.Array.map_1.tutorial -->

### map(callbackfn, thisArg?)

<!-- UTSJSON.Array.map_2.description -->

<!-- UTSJSON.Array.map_2.param -->

<!-- UTSJSON.Array.map_2.returnValue -->

<!-- UTSJSON.Array.map_2.test -->

<!-- UTSJSON.Array.map_2.compatibility -->

<!-- UTSJSON.Array.map_2.tutorial -->

### filter(predicate, thisArg?)

<!-- UTSJSON.Array.filter.description -->

<!-- UTSJSON.Array.filter.param -->

<!-- UTSJSON.Array.filter.returnValue -->

<!-- UTSJSON.Array.filter_1.test -->

<!-- UTSJSON.Array.filter.compatibility -->

### filter(predicate, thisArg?)

<!-- UTSJSON.Array.filter_1.description -->

<!-- UTSJSON.Array.filter_1.param -->

<!-- UTSJSON.Array.filter_1.returnValue -->

<!-- UTSJSON.Array.filter_1.test -->

<!-- UTSJSON.Array.filter_1.compatibility -->

<!-- UTSJSON.Array.filter_1.tutorial -->

### filter(predicate, thisArg?)

<!-- UTSJSON.Array.filter_2.description -->

<!-- UTSJSON.Array.filter_2.param -->

<!-- UTSJSON.Array.filter_2.returnValue -->

<!-- UTSJSON.Array.filter_2.test -->

<!-- UTSJSON.Array.filter_2.compatibility -->

<!-- UTSJSON.Array.filter_2.tutorial -->

### filter(predicate, thisArg?)

<!-- UTSJSON.Array.filter_3.description -->

<!-- UTSJSON.Array.filter_3.param -->

<!-- UTSJSON.Array.filter_3.returnValue -->

<!-- UTSJSON.Array.filter_3.test -->

<!-- UTSJSON.Array.filter_3.compatibility -->

<!-- UTSJSON.Array.filter_3.tutorial -->

### reduce(callbackfn)

<!-- UTSJSON.Array.reduce.description -->

<!-- UTSJSON.Array.reduce.param -->

<!-- UTSJSON.Array.reduce.returnValue -->

<!-- UTSJSON.Array.reduce.test -->

<!-- UTSJSON.Array.reduce.compatibility -->


### reduce(callbackfn)

<!-- UTSJSON.Array.reduce_1.description -->

<!-- UTSJSON.Array.reduce_1.param -->

<!-- UTSJSON.Array.reduce_1.returnValue -->

<!-- UTSJSON.Array.reduce_1.test -->

<!-- UTSJSON.Array.reduce_1.compatibility -->

<!-- UTSJSON.Array.reduce_1.tutorial -->

### reduce(callbackfn, initialValue)

<!-- UTSJSON.Array.reduce_2.description -->

<!-- UTSJSON.Array.reduce_2.param -->

<!-- UTSJSON.Array.reduce_2.returnValue -->

<!-- UTSJSON.Array.reduce_2.test -->

<!-- UTSJSON.Array.reduce_2.compatibility -->

<!-- UTSJSON.Array.reduce_2.tutorial -->

### reduce(callbackfn, initialValue)

<!-- UTSJSON.Array.reduce_3.description -->

<!-- UTSJSON.Array.reduce_3.param -->

<!-- UTSJSON.Array.reduce_3.returnValue -->

<!-- UTSJSON.Array.reduce_3.test -->

<!-- UTSJSON.Array.reduce_3.compatibility -->

<!-- UTSJSON.Array.reduce_3.tutorial -->

### reduce(callbackfn, initialValue)

<!-- UTSJSON.Array.reduce_4.description -->

<!-- UTSJSON.Array.reduce_4.param -->

<!-- UTSJSON.Array.reduce_4.returnValue -->

<!-- UTSJSON.Array.reduce_4.test -->

<!-- UTSJSON.Array.reduce_4.compatibility -->

<!-- UTSJSON.Array.reduce_4.tutorial -->

### reduce(callbackfn, initialValue)

<!-- UTSJSON.Array.reduce_5.description -->

<!-- UTSJSON.Array.reduce_5.param -->

<!-- UTSJSON.Array.reduce_5.returnValue -->

<!-- UTSJSON.Array.reduce_5.test -->

<!-- UTSJSON.Array.reduce_5.compatibility -->

<!-- UTSJSON.Array.reduce_5.tutorial -->

### reduceRight(callbackfn)

<!-- UTSJSON.Array.reduceRight.description -->

<!-- UTSJSON.Array.reduceRight.param -->

<!-- UTSJSON.Array.reduceRight.returnValue -->

<!-- UTSJSON.Array.reduceRight.test -->

<!-- UTSJSON.Array.reduceRight.compatibility -->

### reduceRight(callbackfn)

<!-- UTSJSON.Array.reduceRight_1.description -->

<!-- UTSJSON.Array.reduceRight_1.param -->

<!-- UTSJSON.Array.reduceRight_1.returnValue -->

<!-- UTSJSON.Array.reduceRight_1.test -->

<!-- UTSJSON.Array.reduceRight_1.compatibility -->

<!-- UTSJSON.Array.reduceRight_1.tutorial -->

### reduceRight(callbackfn)

<!-- UTSJSON.Array.reduceRight_2.description -->

<!-- UTSJSON.Array.reduceRight_2.param -->

<!-- UTSJSON.Array.reduceRight_2.returnValue -->

<!-- UTSJSON.Array.reduceRight_2.test -->

<!-- UTSJSON.Array.reduceRight_2.compatibility -->

<!-- UTSJSON.Array.reduceRight_2.tutorial -->

### reduceRight(callbackfn, initialValue)

<!-- UTSJSON.Array.reduceRight_3.description -->

<!-- UTSJSON.Array.reduceRight_3.param -->

<!-- UTSJSON.Array.reduceRight_3.returnValue -->

<!-- UTSJSON.Array.reduceRight_3.test -->

<!-- UTSJSON.Array.reduceRight_3.compatibility -->

<!-- UTSJSON.Array.reduceRight_3.tutorial -->

### reduceRight(callbackfn, initialValue)

<!-- UTSJSON.Array.reduceRight_4.description -->

<!-- UTSJSON.Array.reduceRight_4.param -->

<!-- UTSJSON.Array.reduceRight_4.returnValue -->

<!-- UTSJSON.Array.reduceRight_4.test -->

<!-- UTSJSON.Array.reduceRight_4.compatibility -->

<!-- UTSJSON.Array.reduceRight_4.tutorial -->

### reduceRight(callbackfn, initialValue)

<!-- UTSJSON.Array.reduceRight_5.description -->

<!-- UTSJSON.Array.reduceRight_5.param -->

<!-- UTSJSON.Array.reduceRight_5.returnValue -->

<!-- UTSJSON.Array.reduceRight_5.test -->

<!-- UTSJSON.Array.reduceRight_5.compatibility -->

<!-- UTSJSON.Array.reduceRight_5.tutorial -->

### reduceRight(callbackfn, initialValue)

<!-- UTSJSON.Array.reduceRight_6.description -->

<!-- UTSJSON.Array.reduceRight_6.param -->

<!-- UTSJSON.Array.reduceRight_6.returnValue -->

<!-- UTSJSON.Array.reduceRight_6.test -->

<!-- UTSJSON.Array.reduceRight_6.compatibility -->

<!-- UTSJSON.Array.reduceRight_6.tutorial -->

### isArray(arg)

<!-- UTSJSON.Array.isArray.description -->

<!-- UTSJSON.Array.isArray.param -->

<!-- UTSJSON.Array.isArray.returnValue -->

<!-- UTSJSON.Array.isArray.test -->

<!-- UTSJSON.Array.isArray.compatibility -->

### includes(searchElement, fromIndex?)

<!-- UTSJSON.Array.includes.description -->

<!-- UTSJSON.Array.includes.param -->

<!-- UTSJSON.Array.includes.returnValue -->

<!-- UTSJSON.Array.includes.test -->

<!-- UTSJSON.Array.includes.compatibility -->

### toKotlinList()

<!-- UTSJSON.Array.toKotlinList.description -->

<!-- UTSJSON.Array.toKotlinList.param -->

<!-- UTSJSON.Array.toKotlinList.returnValue -->

<!-- UTSJSON.Array.toKotlinList.compatibility -->

<!-- UTSJSON.Array.toKotlinList.test -->

<!-- UTSJSON.Array.toKotlinList.tutorial -->

<!-- UTSJSON.Array.tutorial -->



## Android 平台方法

* 目前 Array 类型编译到 `kotlin` 为 `io.dcloud.uts.UTSArray`, 该类继承自 `java.util.ArrayList`,所有`java` /`kotlin` 为其提供的扩展函数(如:`toTypedArray` 等)，均可以正常调用。


::: preview

> UTS

```ts
let utsArray = ["1",2,3.0]
// UTSArray 分别转换为 Java Array / Kotlin Array
let javaArray = utsArray.toTypedArray();
let kotlinArray = utsArray.toKotlinList()
// 从Java Array 转换为 UTSArray
let convertArrayFromJava = Array.fromNative(javaArray);
// 从Kotlin Array 转换为 UTSArray
let convertArrayFromKotlin = Array.fromNative(kotlinArray);
```

> Kotlin

```kotlin
val utsArray = utsArrayOf("1",2,3.0)
// UTSArray 分别转换为 Java Array / Kotlin Array
val javaArray = utsArray.toTypedArray();
val kotlinArray = utsArray.toKotlinList()
// 从Java Array 转换为 UTSArray
val convertArrayFromJava = UTSArray.fromNative(javaArray);
// 从Kotlin Array 转换为 UTSArray
val convertArrayFromKotlin = UTSArray.fromNative(kotlinArray);
```

:::


更多平台专属Array 参考[文档](https://doc.dcloud.net.cn/uni-app-x/uts/data-type.html#kotlin%E4%B8%93%E6%9C%89%E6%95%B0%E7%BB%84%E7%B1%BB%E5%9E%8B)

## 常见操作

- 创建数组
<!-- UTSJSON.Array.sampleCreate.test -->
- 通过索引访问数组元素
<!-- UTSJSON.Array.sampleVisit.test -->
- 遍历数组
<!-- UTSJSON.Array.sampleForEach.test -->
- 注意：数组遍历不推荐使用 for in 语句，因为在 ts 中 for in 遍历的是数组的下标，而在 Swift 和 Kottlin 中遍历的是数组的元素，存在行为不一致。

- 添加元素到数组的末尾
<!-- UTSJSON.Array.sampleAdd.test -->
- 删除数组末尾的元素
<!-- UTSJSON.Array.samplePop.test -->
- 删除数组头部元素
<!-- UTSJSON.Array.sampleShift.test -->
- 添加元素到数组的头部
<!-- UTSJSON.Array.sampleUnshift.test -->
- 找出某个元素在数组中的索引
<!-- UTSJSON.Array.sampleIndexOf.test -->
- 通过索引删除某个元素
<!-- UTSJSON.Array.sampleSplice.test -->
- 从一个索引位置删除多个元素
<!-- UTSJSON.Array.sampleSpliceMul.test -->
- 复制一个数组
<!-- UTSJSON.Array.sampleSpliceCopy.test -->
### 访问数组元素

数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 长度 减 1。

如果指定的索引是一个无效值，将会抛出 IndexOutOfBoundsException 异常

下面的写法是错误的，运行时会抛出 SyntaxError 异常，而原因则是使用了非法的属性名：
```ts
console.log(arr.0) // a syntax error
```
