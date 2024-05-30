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

### keys(object: UTSJSONObject): Array<String>

以数组的形式返回指定UTSJSONObjetc 对象内可枚举属性的名称列表

> HBuilder X 4.18版本，仅Android平台支持

```ts
let obj = {
  name:"zhangsan",
  age:11
}
// 执行结果： 2
UTSJSONObject.keys(obj).size)

```

### assign(objectA: UTSJSONObject,objectB: UTSJSONObject,...): UTSJSONObject

该方法允许输入一个或者多个UTSJSONObject对象，合并后返回一个新的UTSJSONObject，其中包含全部输入对象的属性字段，如果存在同名的属性会以后传入的属性为准

> HBuilder X 4.18版本，仅Android平台支持

```ts
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
// 得到一个UTSJSONObject对象
const returnedTarget = UTSJSONObject.assign(target, source);
```

### assign<T>(objectA: UTSJSONObject,objectB: UTSJSONObject,...): T

该方法允许输入一个或者多个UTSJSONObject对象，合并后返回一个新的泛型对象T，其中包含全部输入对象的属性字段，如果存在同名的属性会以后传入的属性为准

> HBuilder X 4.18版本，仅Android平台支持

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

### getArray(key): Array<any> | null

<!-- UTSJSON.UTSJSONObject.getArray.description -->

<!-- UTSJSON.UTSJSONObject.getArray.param -->

<!-- UTSJSON.UTSJSONObject.getArray.returnValue -->

<!-- UTSJSON.UTSJSONObject.getArray.compatibility -->

### getArray(key): Array<T> | null

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

### toMap(): Map<string, any>

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

## 注意事项

需要特别注意的是： 在 Android/Ios 平台，当使用 getXXX 方法返回 对象类型时，获取的是值引用而非内存引用

此时直接修改其对象的属性，并不会体现在整个UTSJSONObject上，如果需要体现此变化，则需要手动更新对应的字段

```ts
let obj = {
    "cars":[
      {
        name:"car1",
        value:100
      }
    ]
  }
  
  let cars = obj.getArray<UTSJSONObject>("cars")
  cars![0].set("value",20)
  /**
   * 此时 obj 的属性并不会改变
   */
  console.log("obj",obj)
  // 需要手动更新obj的属性
  obj.set("cars",cars)
  /**
   *  此时obj的属性改变了
   */
  console.log("obj",obj)
```
