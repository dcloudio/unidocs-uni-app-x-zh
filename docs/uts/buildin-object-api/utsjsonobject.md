# UTSJSONObject

UTSJSONObject 是 UTS 语言的内置类型，主要用来操作[匿名对象](../object.md#anonymous-object)

注意：UTSJSONObject类型的数据暂不支持响应式

## 创建实例

UTSJSONObject 对象的实例目前主要通过两种方式来创建：

* 通过[对象字面量](../literal.md#object-literal)

```ts
const person: UTSJSONObject = {
    name: 'Tom',
    printName: () => {
      // ...
    }
}
```

* 通过 JSON 字符串

```ts

// 写法1 推荐
const person: UTSJSONObject = JSON.parseObject('{"name":"Tom"}')!

// 写法2 推荐
const person: UTSJSONObject = JSON.parse<UTSJSONObject>('{"name":"Tom"}')!


// 写法3  如果 as 转换的实际类型不匹配 会导致 crash，建议先通过 `instanceof` 判断类型再进行as转换。
const parseRet = JSON.parse('{"name":"Tom"}')
if(parseRet instanceof UTSJSONObject){
  const person = parseRet as UTSJSONObject
}

```

## 静态方法

### parse()

<!-- UTSJSON.UTSJSONObject.parse.description -->

<!-- UTSJSON.UTSJSONObject.parse.param -->

<!-- UTSJSON.UTSJSONObject.parse.returnValue -->

<!-- UTSJSON.UTSJSONObject.parse.test -->

<!-- UTSJSON.UTSJSONObject.parse.compatibility -->

<!-- UTSJSON.UTSJSONObject.parse.tutorial -->

### keys(object: UTSJSONObject): Array\<String>

<!-- UTSJSON.UTSJSONObject.keys.description -->

<!-- UTSJSON.UTSJSONObject.keys.param -->

<!-- UTSJSON.UTSJSONObject.keys.returnValue -->

<!-- UTSJSON.UTSJSONObject.keys.compatibility -->


```ts
let obj = {
  name:"zhangsan",
  age:11
}
// 执行结果： 2
UTSJSONObject.keys(obj).size

```

### assign(...items): UTSJSONObject

<!-- UTSJSON.UTSJSONObject.assign.description -->

<!-- UTSJSON.UTSJSONObject.assign.param -->

<!-- UTSJSON.UTSJSONObject.assign.returnValue -->

<!-- UTSJSON.UTSJSONObject.assign.compatibility -->

> 注意： 与js中的`Object.assign`不同， 这里每次返回的都是一个新的对象

```ts
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
// 得到一个UTSJSONObject对象
const returnedTarget = UTSJSONObject.assign(target, source);
```

### assign\<T>(...items: T[]): T

<!-- UTSJSON.UTSJSONObject.assign_1.description -->

<!-- UTSJSON.UTSJSONObject.assign_1.param -->

<!-- UTSJSON.UTSJSONObject.assign_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.assign_1.compatibility -->

> 注意： 与js中的`Object.assign`不同， 这里每次返回的都是一个新的对象

```ts
type User = {
  a:number
  b:number
}
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
// 得到一个User对象
const returnedTarget = UTSJSONObject.assign<User>(target, source);
```

## 实例方法

### get(key: string): any | null

返回指定键对应的值，如果对象中不存在此键则返回 null。

```ts
const name: string = person.get('name') as string
```

get 方法可以简化为使用下标运算符 `[]` 访问

```ts
const name: string = person['name'] as string
```

### set(key: string, value: any | null)

增加或更新指定键对应的值。

```ts
person.set('name', 'Tom')
```

set 方法可以简化为使用下标运算符 `[]` 赋值

```ts
person['name'] = 'Tom'
```
### getAny(key): any | null

<!-- UTSJSON.UTSJSONObject.getAny.description -->

<!-- UTSJSON.UTSJSONObject.getAny.param -->

<!-- UTSJSON.UTSJSONObject.getAny.returnValue -->

<!-- UTSJSON.UTSJSONObject.getAny.compatibility -->

### getBoolean(key): boolean | null

<!-- UTSJSON.UTSJSONObject.getBoolean.description -->

<!-- UTSJSON.UTSJSONObject.getBoolean.param -->

<!-- UTSJSON.UTSJSONObject.getBoolean.returnValue -->

<!-- UTSJSON.UTSJSONObject.getBoolean.compatibility -->

### getNumber(key): number | null

<!-- UTSJSON.UTSJSONObject.getNumber.description -->

<!-- UTSJSON.UTSJSONObject.getNumber.param -->

<!-- UTSJSON.UTSJSONObject.getNumber.returnValue -->

<!-- UTSJSON.UTSJSONObject.getNumber.compatibility -->

### getString(key): string | null

<!-- UTSJSON.UTSJSONObject.getString.description -->

<!-- UTSJSON.UTSJSONObject.getString.param -->

<!-- UTSJSON.UTSJSONObject.getString.returnValue -->

<!-- UTSJSON.UTSJSONObject.getString.compatibility -->

### getJSON(key): UTSJSONObject | null

<!-- UTSJSON.UTSJSONObject.getJSON.description -->

<!-- UTSJSON.UTSJSONObject.getJSON.param -->

<!-- UTSJSON.UTSJSONObject.getJSON.returnValue -->

<!-- UTSJSON.UTSJSONObject.getJSON.compatibility -->

### getArray(key): Array\<any> | null

<!-- UTSJSON.UTSJSONObject.getArray.description -->

<!-- UTSJSON.UTSJSONObject.getArray.param -->

<!-- UTSJSON.UTSJSONObject.getArray.returnValue -->

<!-- UTSJSON.UTSJSONObject.getArray.compatibility -->

### getArray(key): Array\<T> | null

<!-- UTSJSON.UTSJSONObject.getArray_1.description -->

<!-- UTSJSON.UTSJSONObject.getArray_1.param -->

<!-- UTSJSON.UTSJSONObject.getArray_1.returnValue -->

<!-- UTSJSON.UTSJSONObject.getArray_1.compatibility -->

这个方法用来获取指定元素类型的数组

```uts

let obj = JSON.parseObject('{"name":"tom","tag":["student","user"]}')

// 这里得到是 Array<*>
let noGenericArray = obj!.getArray("tag")
console.log(noGenericArray)

// 这里得到是 Array<string>
let genericArray = obj!.getArray<string>("tag")
console.log(genericArray)

```


### toMap(): Map\<string, any>

<!-- UTSJSON.UTSJSONObject.toMap.description -->

<!-- UTSJSON.UTSJSONObject.toMap.param -->

<!-- UTSJSON.UTSJSONObject.toMap.returnValue -->

```ts
person.toMap().forEach((value, key) => {
    console.log(key)
    console.log(value)
})
```

<!-- UTSJSON.UTSJSONObject.toMap.compatibility -->

<!-- UTSJSON.UTSJSONObject.tutorial -->




## 常见问题

#### UTSJSONObject 与 type 相互转换

可以使用下面的代码，进行 `UTSJSONObject` 和 `type` 转换

```ts
type User = {
	name:string,
	age:number
}
let jsonObj = {
  name:"张三",
  age:12
}
// UTSJSONObject => 自定义type
let userA = JSON.parse<User>(jsonObj.toJSONString())
console.log(userA!.name)
// 自定义type => UTSJSONObject
let utsJsonA = JSON.parseObject(JSON.stringify(userA))
console.log(utsJsonA)

```


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
