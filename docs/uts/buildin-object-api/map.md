# Map

Map 对象保存键值对。任何值（对象或者基本类型）都可以作为一个键或一个值。

**注意：请勿使用下标访问或设置map的键值对，此用法虽然在uts转为kotlin时可用，但是并不跨端**

```ts
const map = new Map<string, string>()
map['key1'] = 'value1' // 不跨端的用法
map.set('key1', 'value1') // 跨端用法
console.log(map['key1']) // 不跨端的用法
console.log(map.get('key1')) // 跨端用法
```

### new() : Map\<any, any>;@Constructor()

<!-- UTSJSON.Map.Constructor.description -->

<!-- UTSJSON.Map.Constructor.param -->

<!-- UTSJSON.Map.Constructor.returnValue -->

<!-- UTSJSON.Map.Constructor.compatibility -->

<!-- UTSJSON.Map.Constructor.tutorial -->

### new \<K, V>(entries ?: readonly (readonly \[K, V])[]\| null) : Map\<K, V>;@Constructor(entries?)

<!-- UTSJSON.Map.Constructor_1.description -->

<!-- UTSJSON.Map.Constructor_1.param -->

<!-- UTSJSON.Map.Constructor_1.returnValue -->

<!-- UTSJSON.Map.Constructor_1.compatibility -->

<!-- UTSJSON.Map.Constructor_1.tutorial -->

## 实例属性


### size

<!-- UTSJSON.Map.size.description -->

<!-- UTSJSON.Map.size.param -->

<!-- UTSJSON.Map.size.returnValue -->

<!-- UTSJSON.Map.size.test -->

<!-- UTSJSON.Map.size.compatibility -->


## 实例方法


### clear()

<!-- UTSJSON.Map.clear.description -->

<!-- UTSJSON.Map.clear.param -->

<!-- UTSJSON.Map.clear.returnValue -->

<!-- UTSJSON.Map.clear.test -->

<!-- UTSJSON.Map.clear.compatibility -->

### delete(key)

<!-- UTSJSON.Map.delete.description -->

<!-- UTSJSON.Map.delete.param -->

<!-- UTSJSON.Map.delete.returnValue -->

<!-- UTSJSON.Map.delete.test -->

<!-- UTSJSON.Map.delete.compatibility -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Map.forEach.description -->

<!-- UTSJSON.Map.forEach.param -->

<!-- UTSJSON.Map.forEach.returnValue -->

<!-- UTSJSON.Map.forEach.test -->

<!-- UTSJSON.Map.forEach.compatibility -->


### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Map.forEach_1.description -->

<!-- UTSJSON.Map.forEach_1.param -->

<!-- UTSJSON.Map.forEach_1.returnValue -->

<!-- UTSJSON.Map.forEach_1.test -->

<!-- UTSJSON.Map.forEach_1.compatibility -->

<!-- UTSJSON.Map.forEach_1.tutorial -->

### forEach(callbackfn, thisArg?)

<!-- UTSJSON.Map.forEach_2.description -->

<!-- UTSJSON.Map.forEach_2.param -->

<!-- UTSJSON.Map.forEach_2.returnValue -->

<!-- UTSJSON.Map.forEach_2.test -->

<!-- UTSJSON.Map.forEach_2.compatibility -->

<!-- UTSJSON.Map.forEach_2.tutorial -->

### get(key)

<!-- UTSJSON.Map.get.description -->

<!-- UTSJSON.Map.get.param -->

<!-- UTSJSON.Map.get.returnValue -->

<!-- UTSJSON.Map.get.test -->

<!-- UTSJSON.Map.get.compatibility -->

### has(key)

<!-- UTSJSON.Map.has.description -->

<!-- UTSJSON.Map.has.param -->

<!-- UTSJSON.Map.has.returnValue -->

<!-- UTSJSON.Map.has.test -->

<!-- UTSJSON.Map.has.compatibility -->

### set(key, value)

<!-- UTSJSON.Map.set.description -->

<!-- UTSJSON.Map.set.param -->

<!-- UTSJSON.Map.set.returnValue -->

<!-- UTSJSON.Map.set.test -->

<!-- UTSJSON.Map.set.compatibility -->

注意：由于Map的key是唯一的，给同一个key多次set值时，会用新值替换老值。
<!-- UTSJSON.Map.set_1.test -->

## 常见操作

- 创建map
<!-- UTSJSON.Map.sample_create.test -->

- 通过key访问map元素
<!-- UTSJSON.Map.sample_visit.test -->

- 遍历map
<!-- UTSJSON.Map.sample_forEach.test -->

<!-- UTSJSON.Map.tutorial -->

## Bug & Tips@tips

* 目前 `Map` 类型编译到 kotlin 为 io.dcloud.uts.Map 其直接父类为：[LinkedHashMap](https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.collections/-linked-hash-map/)

```ts
// kotlin map 转换为 uts map
let kotlinMap = getMapFromNative()
console.log(kotlinMap)
let utsMap = new Map<string, any>()
utsMap.putAll(kotlinMap)
```


