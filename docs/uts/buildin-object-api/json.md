# JSON

## 静态方法

### parse

JSON.parse() 方法用来解析 JSON 字符串，构造由字符串描述的对象。可能返回值是： UTSJSONObject/Array/number/boolean/string 等基本数据类型


> 特别说明：
> HBuilderX3.9.0统一为以上规范，在HBuilderX3.9.0之前版本 返回值只可能是 UTSJSONObject， 基本数据类型会转换失败
> JSON.parse 目前仅支持第一个参数

<!-- UTSJSON.JSON.parse_tip.test -->

**注意**

- JSON.parse 解析出来的对象，目前仅支持使用方括号[]访问
- 如果输入的字符串不是合法的json格式，则会返回 null
- JSON.parse 接口内部通过[特殊方式读取了范型类型](../generics.md#使用限制)，不支持传入动态的范型：比如将外层方法的普通范型参数传入 JSON.parse。

### parse(text, reviver?)

<!-- UTSJSON.JSON.parse.description -->

<!-- UTSJSON.JSON.parse.param -->

<!-- UTSJSON.JSON.parse.returnValue -->

<!-- UTSJSON.JSON.parse.test -->

<!-- UTSJSON.JSON.parse.compatibility -->

<!-- UTSJSON.JSON.parse.tutorial -->

### parse\<T\>(text: string)

<!-- UTSJSON.JSON.parse_1.description -->

<!-- UTSJSON.JSON.parse_1.param -->

<!-- UTSJSON.JSON.parse_1.returnValue -->

<!-- UTSJSON.JSON.parse_1.test -->

HBuilderX 3.9+，支持JSON.parse传入[泛型](../generics.md)。

与不带泛型的JSON.parse 相比，多了一个`<Persion>` 尖括号 用来指定返回类型。

相比不带泛型的`parse`函数，带泛型的 `parse`函数，会提高反序列数据的开发效率，明确的结构数据可以提升工程健壮度

<!-- UTSJSON.JSON.parse_1.compatibility -->

### stringify(value, replacer?, space?)

*注意：JSON.stringify 目前仅支持第一个参数*

<!-- UTSJSON.JSON.stringify.description -->

<!-- UTSJSON.JSON.stringify.param -->

<!-- UTSJSON.JSON.stringify.returnValue -->

<!-- UTSJSON.JSON.stringify.test -->

序列化规则说明:

|类型名称   |适应范围                       |规则|
|:--        |:--                            |:--|
|基本类型    |number/string/boolean          |对应json格式中的 原型数据类型|
|容器数据类型|UTSArray/UTSJSONObject         |对应json格式中的 jsonarray/jsonobject|
|map和set   |map和set                       |与web保持一致，序列化为 空jsonobject对象： `{}`|
|自定义type  |开发者使用type 声明的类型对象    |被序列化为 jsonobject|
|自定义class |开发者使用class 声明的类型对象   |被序列化为 空jsonobject对象： `{}` |
|function   |对象内部声明的函数               |被序列化为 `null` |


### parseObject(text: string)

注意： 此函数需要 HBuilderX 3.9x 以上版本

<!-- UTSJSON.JSON.parseObject.description -->

<!-- UTSJSON.JSON.parseObject.param -->

<!-- UTSJSON.JSON.parseObject.returnValue -->

<!-- UTSJSON.JSON.parseObject.test -->

<!-- UTSJSON.JSON.parseObject.compatibility -->

### parseObject\<T\>(text: string)

注意： 此函数需要 HBuilderX 3.9x 以上版本

<!-- UTSJSON.JSON.parseObject_1.description -->

<!-- UTSJSON.JSON.parseObject_1.param -->

<!-- UTSJSON.JSON.parseObject_1.returnValue -->

<!-- UTSJSON.JSON.parseObject_1.test -->

<!-- UTSJSON.JSON.parseObject_1.compatibility -->

### parseArray(text: string)

注意： 此函数需要 HBuilderX 3.9x 以上版本

<!-- UTSJSON.JSON.parseArray.description -->

<!-- UTSJSON.JSON.parseArray.param -->

<!-- UTSJSON.JSON.parseArray.returnValue -->

<!-- UTSJSON.JSON.parseArray.test -->

<!-- UTSJSON.JSON.parseArray.compatibility -->

### parseArray\<T\>(text: string)

注意： 此函数需要 HBuilderX 3.9x 以上版本

<!-- UTSJSON.JSON.parseArray_1.description -->

<!-- UTSJSON.JSON.parseArray_1.param -->

<!-- UTSJSON.JSON.parseArray_1.returnValue -->

<!-- UTSJSON.JSON.parseArray_1.test -->

<!-- UTSJSON.JSON.parseArray_1.compatibility -->

<!-- UTSJSON.JSON.tutorial -->


### IJSONStringify

<!-- UTSJSON.IJSONStringify.toJSON.description -->

<!-- UTSJSON.IJSONStringify.toJSON.param -->

<!-- UTSJSON.IJSONStringify.toJSON.returnValue -->

<!-- UTSJSON.IJSONStringify.toJSON.test -->

<!--UTSJSON.IJSONStringify.toJSON.compatibility -->

<!-- UTSJSON.IJSONStringify.toJSON.tutorial -->

## 自定义序列化规则说明

默认的情况下，类型的序列化规则是固定的。如上表所列，JSON.stringify的序列化行为由UTS内部实现。

```ts
class Person {
    // 声明属性类型（必须显式初始化或在构造函数中赋值）
    name: string;
    age: number;

    // 构造函数
    constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    }

    // 方法
    greet(): string {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// 使用类
const alice = new Person("Alice", 30);
// 此时只能得到 '{}'
console.log("data",JSON.stringify(alice))
```

但有些场景下开发者需要自定义class的序列化规则，所以从HBuilder X 4.53开始，新增了一个接口`IJSONStringify`，用于支持开发者实现自定义序列化

```ts
class Person implements IJSONStringify {
    // 声明属性类型（必须显式初始化或在构造函数中赋值）
    name: string;
    age: number;

    // 构造函数
    constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    }
    
    // 自定义序列化规则
    toJSON():any{
        let jsonRet = UTSJSONObject()
        jsonRet["name"] = this.name
        jsonRet["age"] = this.age
        return jsonRet
    }
    // 方法
    greet(): string {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// 使用类
const alice = new Person("Alice", 30);
// {"name":"Alice","age":30}
console.log("data",JSON.stringify(alice))

```

`IJSONStringify` 接口内部仅包含一个待实现方法 ` toJSON():any|null` 

该方法的返回值会成为当前class序列化后的值。该方法声明的返回值类型为any|null

实际支持下面的几种类型

+ [JSON协议](https://www.json.org/json-en.html)中支持的基本数据类型

string,number,boolean,null

+ [JSON协议](https://www.json.org/json-en.html)中支持的容器数据类型

Array 对应 Array

UTSJSONObject 对应 object 

+ IJSONStringify

如果toJSON函数的返回值是另外一个 `IJSONStringify`对象，则序列化逻辑会继续调用该对象的 `toJSON`方法，直到一个不为 `IJSONStringify`的值。换句话说就是toJSON函数支持嵌套。








