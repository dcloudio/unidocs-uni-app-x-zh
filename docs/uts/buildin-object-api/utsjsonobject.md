# UTSJSONObject

UTSJSONObject 是 UTS 语言的内置类型，主要用来操作[匿名对象](../object.md#anonymous-object)

注意：3.97+ 开始 uni-app x 中的 UTSJSONObject 支持 vue 的响应式变更

## 创建实例

UTSJSONObject 对象的实例目前主要通过两种方式来创建：

* 通过[对象字面量](../literal.md#object-literal)


<!-- UTSJSON.UTSJSONObject.sample_create.test -->


* 通过 JSON 字符串



<!-- UTSJSON.UTSJSONObject.sample_create1.test -->



## 静态方法

### keys(object: UTSJSONObject): Array\<String>

<!-- UTSJSON.UTSJSONObject.keys.description -->

<!-- UTSJSON.UTSJSONObject.keys.param -->

<!-- UTSJSON.UTSJSONObject.keys.returnValue -->


<!-- UTSJSON.UTSJSONObject.keys.test -->

<!-- UTSJSON.UTSJSONObject.keys.compatibility -->


### assign(...items): UTSJSONObject

<!-- UTSJSON.UTSJSONObject.assign.description -->

<!-- UTSJSON.UTSJSONObject.assign.param -->

<!-- UTSJSON.UTSJSONObject.assign.returnValue -->


<!-- UTSJSON.UTSJSONObject.assign.test -->

<!-- UTSJSON.UTSJSONObject.assign.compatibility -->

> 注意： 与js中的`Object.assign`不同， 这里每次返回的都是一个新的对象

### assign\<T>(...items: T[]): T

<!-- UTSJSON.UTSJSONObject.assign_1.description -->

<!-- UTSJSON.UTSJSONObject.assign_1.param -->

<!-- UTSJSON.UTSJSONObject.assign_1.returnValue -->



<!-- UTSJSON.UTSJSONObject.assign_1.test -->


<!-- UTSJSON.UTSJSONObject.assign_1.compatibility -->

> 注意： 与js中的`Object.assign`不同， 这里每次返回的都是一个新的对象

## 实例方法

### parse()

<!-- UTSJSON.UTSJSONObject.parse.description -->

<!-- UTSJSON.UTSJSONObject.parse.param -->

<!-- UTSJSON.UTSJSONObject.parse.returnValue -->

<!-- UTSJSON.UTSJSONObject.parse.test -->

<!-- UTSJSON.UTSJSONObject.parse.compatibility -->

<!-- UTSJSON.UTSJSONObject.parse.tutorial -->

### get(key: string): any | null

<!-- UTSJSON.UTSJSONObject.get.description -->

<!-- UTSJSON.UTSJSONObject.get.param -->

<!-- UTSJSON.UTSJSONObject.get.returnValue -->


<!-- UTSJSON.UTSJSONObject.get.test -->


<!-- UTSJSON.UTSJSONObject.get.compatibility -->

### set(key: string, value: any | null)

<!-- UTSJSON.UTSJSONObject.set.description -->

<!-- UTSJSON.UTSJSONObject.set.param -->

<!-- UTSJSON.UTSJSONObject.set.returnValue -->


<!-- UTSJSON.UTSJSONObject.set.test -->

<!-- UTSJSON.UTSJSONObject.set.compatibility -->

### getAny(key): any | null

<!-- UTSJSON.UTSJSONObject.getAny.description -->

<!-- UTSJSON.UTSJSONObject.getAny.param -->

<!-- UTSJSON.UTSJSONObject.getAny.returnValue -->

<!-- UTSJSON.UTSJSONObject.getAny.compatibility -->

### getAny(key, def): any

<!-- UTSJSON.UTSJSONObject.getAny_1.description -->

<!-- UTSJSON.UTSJSONObject.getAny_1.param -->

<!-- UTSJSON.UTSJSONObject.getAny_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.getAny_1.compatibility -->

### getBoolean(key): boolean | null

<!-- UTSJSON.UTSJSONObject.getBoolean.description -->

<!-- UTSJSON.UTSJSONObject.getBoolean.param -->

<!-- UTSJSON.UTSJSONObject.getBoolean.returnValue -->

<!-- UTSJSON.UTSJSONObject.getBoolean.compatibility -->

### getBoolean(key, def): boolean

<!-- UTSJSON.UTSJSONObject.getBoolean_1.description -->

<!-- UTSJSON.UTSJSONObject.getBoolean_1.param -->

<!-- UTSJSON.UTSJSONObject.getBoolean_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.getBoolean_1.compatibility -->

### getNumber(key): number | null

<!-- UTSJSON.UTSJSONObject.getNumber.description -->

<!-- UTSJSON.UTSJSONObject.getNumber.param -->

<!-- UTSJSON.UTSJSONObject.getNumber.returnValue -->

<!-- UTSJSON.UTSJSONObject.getNumber.compatibility -->

### getNumber(key, def): number

<!-- UTSJSON.UTSJSONObject.getNumber_1.description -->

<!-- UTSJSON.UTSJSONObject.getNumber_1.param -->

<!-- UTSJSON.UTSJSONObject.getNumber_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.getNumber_1.compatibility -->

### getString(key): string | null

<!-- UTSJSON.UTSJSONObject.getString.description -->

<!-- UTSJSON.UTSJSONObject.getString.param -->

<!-- UTSJSON.UTSJSONObject.getString.returnValue -->


<!-- UTSJSON.UTSJSONObject.getString.test -->

<!-- UTSJSON.UTSJSONObject.getString.compatibility -->


### getString(key, def): string

<!-- UTSJSON.UTSJSONObject.getString_1.description -->

<!-- UTSJSON.UTSJSONObject.getString_1.param -->

<!-- UTSJSON.UTSJSONObject.getString_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.getString_1.test -->

<!-- UTSJSON.UTSJSONObject.getString_1.compatibility -->

### getJSON(key): UTSJSONObject | null

<!-- UTSJSON.UTSJSONObject.getJSON.description -->

<!-- UTSJSON.UTSJSONObject.getJSON.param -->

<!-- UTSJSON.UTSJSONObject.getJSON.returnValue -->


<!-- UTSJSON.UTSJSONObject.getJSON.test -->

<!-- UTSJSON.UTSJSONObject.getJSON.compatibility -->

### getJSON(key, def): UTSJSONObject

<!-- UTSJSON.UTSJSONObject.getJSON_1.description -->

<!-- UTSJSON.UTSJSONObject.getJSON_1.param -->

<!-- UTSJSON.UTSJSONObject.getJSON_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.getJSON_1.test -->

<!-- UTSJSON.UTSJSONObject.getJSON_1.compatibility -->

### getArray(key): Array\<T> | null

<!-- UTSJSON.UTSJSONObject.getArray.description -->

<!-- UTSJSON.UTSJSONObject.getArray.param -->

<!-- UTSJSON.UTSJSONObject.getArray.returnValue -->


<!-- UTSJSON.UTSJSONObject.getArray.test -->

<!-- UTSJSON.UTSJSONObject.getArray.compatibility -->

### getArray(key, def: Array\<T>): Array\<T>

<!-- UTSJSON.UTSJSONObject.getArray_1.description -->

<!-- UTSJSON.UTSJSONObject.getArray_1.param -->

<!-- UTSJSON.UTSJSONObject.getArray_1.returnValue -->


<!-- UTSJSON.UTSJSONObject.getArray_1.test -->

<!-- UTSJSON.UTSJSONObject.getArray_1.compatibility -->

### getArray(key): Array\<any> | null

<!-- UTSJSON.UTSJSONObject.getArray_2.description -->

<!-- UTSJSON.UTSJSONObject.getArray_2.param -->

<!-- UTSJSON.UTSJSONObject.getArray_2.returnValue -->

<!-- UTSJSON.UTSJSONObject.getArray_2.test -->

<!-- UTSJSON.UTSJSONObject.getArray_2.compatibility -->


### getArray(key, def: Array\<any>): Array\<any>

<!-- UTSJSON.UTSJSONObject.getArray_3.description -->

<!-- UTSJSON.UTSJSONObject.getArray_3.param -->

<!-- UTSJSON.UTSJSONObject.getArray_3.returnValue -->

<!-- UTSJSON.UTSJSONObject.getArray_3.test -->

<!-- UTSJSON.UTSJSONObject.getArray_3.compatibility -->

### toMap(): Map\<string, any>

<!-- UTSJSON.UTSJSONObject.toMap.description -->

<!-- UTSJSON.UTSJSONObject.toMap.param -->

<!-- UTSJSON.UTSJSONObject.toMap.returnValue -->


<!-- UTSJSON.UTSJSONObject.toMap.test -->


<!-- UTSJSON.UTSJSONObject.toMap.compatibility -->

<!-- UTSJSON.UTSJSONObject.tutorial -->




## 常见问题

#### 目标语言为js时UTSJSONObject实例方法可以被覆盖

> 如非必要请勿利用此特性

如下代码会将getString覆盖为1

```typescript
const a = {
  getString: 1
}
console.log(a.getString) // 1
```

#### UTSJSONObject 与 type 相互转换

可以使用下面的代码，进行 `UTSJSONObject` 和 `type` 转换

<!-- UTSJSON.UTSJSONObject.convert.test -->

## Android 平台方法

* 目前 UTSJSONObject 类型编译到 kotlin 为 io.dcloud.uts.UTSJSONObject


::: preview

> UTS

```ts
// 创建一个kotlin hashmap
let kotlinMap = new kotlin.collections.HashMap<string,number>()
kotlinMap.put("a",111)
kotlinMap.put("b",2)
// 转换为UTSJSONObject
let utsObj = new UTSJSONObject(kotlinMap)
console.log(utsObj)
// UTSJSONObject 转换为 Map
let nextMap = utsObj.toMap()
console.log(nextMap)
```

> Kotlin

```kotlin
// 创建一个kotlin hashmap
var kotlinMap = kotlin.collections.HashMap<String, Number>();
kotlinMap.put("a", 111);
kotlinMap.put("b", 2);
// 转换为UTSJSONObject
var utsObj = UTSJSONObject(kotlinMap, UTSSourceMapPosition("utsObj", "pages/index/helloView.uvue", 33, 8));
console.log(utsObj);
// UTSJSONObject 转换为 Map
var nextMap = utsObj.toMap();
console.log(nextMap);
```

:::
