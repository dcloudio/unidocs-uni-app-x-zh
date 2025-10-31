## uts 和 ts 的差异

ts 虽然有类型，但类型要求不严格。而 uts 为了编译为原生语言，是完全的强类型。

另外为了确保跨平台、高性能，uts 通过规范约束了 ts 中过于灵活而影响开发正确性或者给运行时带来不必要额外开销的特性。

本文罗列了在 uts 跨端开发时限制的 ts 特性，并提供了重构代码的建议。

> uni-app x下uts编译器目前[已知的一些问题](./compiler-known-issues.md)

> uni-app x下部分[运行错误的说明](./runtime-known-issues.md)

### 概述

#### 强制使用静态类型

静态类型是 uts 最重要的特性之一。如果程序采用静态类型，即所有类型在编译时都是已知的，那么开发者就能够容易理解代码中使用了哪些数据结构。
同时，由于所有类型在程序实际运行前都是已知的，编译器可以提前验证代码的正确性，从而可以减少运行时的类型检查，有助于提升性能。

基于上述考虑，uts 中的 any 类型与 ts 中的 any 并不一样，它是一个根据目标平台自动适配的跨端类型，通常用于表示"任意的非空类型"，
在使用时仍需类型转换后才能访问具体类型的方法和属性。

#### 不支持结构化类型系统

结构化类型系统（structural typing）是 ts 的一个特性，它意味着类型的兼容性和等价性是基于类型的结构（即它们的属性和方法）；
而在跨端开发时，uts 采用名义类型系统（nominal typing），类型兼容性检查基于类型名称和显式的继承/实现关系。
即使两个类型具有完全相同的结构，如果没有显式的继承/实现关系，它们也不能互相赋值。
这与 Kotlin 、Swift 、ArkTS 等静态语言的类型系统保持一致，有助于确保类型安全和代码的可维护性。

## 约束说明

### 1. 核心语言特性

#### 不支持 undefined @uts110111119

<!-- UTSDIFFTSJSON.UTS110111119.type -->

<!-- UTSDIFFTSJSON.UTS110111119.code -->

<!-- UTSDIFFTSJSON.UTS110111119.description -->

<!-- UTSDIFFTSJSON.UTS110111119.compatibility -->

TypeScript写法:

```ts
// TypeScript 可以使用 undefined
let value: string | undefined;
if (value == undefined) {
  console.log("未定义");
}

function test(param?: string) {
  if (param == undefined) {
    console.log("参数未传");
  }
}
```

UTS正确写法：

```ts
// UTS 使用 null 替代 undefined
let value: string | null = null; //必须先赋值后使用，哪怕赋值为null。否则Android平台会报编译错误：error: Variable 'value' must be initialized‌
if (value == null) {
  console.log("未定义");
}

function test(param: string | null) {
  if (param == null) {
    console.log("参数未传");
  }
}
```

#### 条件语句必须使用布尔类型 @uts110111120

<!-- UTSDIFFTSJSON.UTS110111120.type -->

<!-- UTSDIFFTSJSON.UTS110111120.code -->

<!-- UTSDIFFTSJSON.UTS110111120.description -->

<!-- UTSDIFFTSJSON.UTS110111120.compatibility -->

TypeScript写法:

```ts
// 允许非布尔值在条件语句中使用
if (1) {
} // 数值类型
while ("") {} // 字符串类型
do {} while (obj); // 对象类型
for (let i = 0; i; i++) {} // 作为条件的数值类型
const value = arr || []; // truthy/falsy 值判断
```

UTS正确写法：

```ts
// 必须使用布尔类型或返回布尔值的表达式
if (x > 0) {
} // 比较表达式
while (isValid) {} // 布尔变量
do {} while (obj != null); // 相等性判断
for (let i = 0; i < 10; i++) {} // 布尔条件
const value = arr != null ? arr : []; // 显式的布尔判断
```

#### 对象字面量默认为 UTSJSONObject 类型

级别：提示

在 UTS 中，所有没有明确类型标注或上下文推断不出具体类型的对象字面量都会被推导为 UTSJSONObject 类型。
这与 ts 中对象字面量会根据属性推导出具体结构类型的行为不同。

TypeScript写法:

```ts
// 类型推导为 { name: string, age: number }
const person = {
  name: "John",
  age: 30,
};

// 可以正常访问推导出的属性
console.log(person.name);
```

UTS正确写法：

```ts
// 类型推导为 UTSJSONObject
const person = {
  name: "John",
  age: 30,
}; //对象字面量默认推导为UTSJSONObject
console.log(person["name"] as string); //UTSJSONObject类型不能直接用.运算符，并且下标访问后的每个值都是any类型，想正确使用时需要as为正确的类型
console.log(person["age"] as number); //UTS提供了有限的隐式转换能力，UTSJSONObject第一层对象如果可以被编译器识别推导类型，也可以使用.运算符。但第二层起无法使用.运算符，需要使用下标

// 在UTS中推荐使用type替代UTSJSONObject
type Person = {
  name: string;
  age: number;
};
// 声明时直接指定类型
const person2: Person = {
  name: "John",
  age: 30,
};
console.log(person2.name);
```

在 JSON.parse 的场景中，如果不通过泛型指定 type，那么返回值也是 UTSJSONObject。

TS 开发者一般都熟悉使用 interface 来声明类型，UTS 中改为 type 即可。但不熟悉 TS 的开发者，务必需要详细了解[UTSJSONObject](./data-type.md#UTSJSONObject)和[type](./data-type.md#type自定义类型)


#### 对象字面量仅支持构造 type 定义的对象类型，不支持 interface @uts110111163

<!-- UTSDIFFTSJSON.UTS110111163.type -->

<!-- UTSDIFFTSJSON.UTS110111163.code -->

<!-- UTSDIFFTSJSON.UTS110111163.description -->

<!-- UTSDIFFTSJSON.UTS110111163.compatibility -->

TypeScript写法:

```ts
interface Person {
  name: string;
  age: number;
}
// 对象字面量可以赋值 interface 类型
const person: Person = {
  name: "John",
  age: 30,
};
```

UTS正确写法：

```ts
// 只有 type 定义的对象类型，才可以用对象字面量赋值
type Person = {
  name: string;
  age: number;
};

// 声明时直接指定类型
const person1: Person = {
  name: "John",
  age: 30,
};
// 使用对象字面量 as 语法
const person2 = {
  name: "John",
  age: 30,
} as Person;
```

#### 不支持变量和函数的声明提升 (hoisting) @uts110111150

<!-- UTSDIFFTSJSON.UTS110111150.type -->

<!-- UTSDIFFTSJSON.UTS110111150.code -->

<!-- UTSDIFFTSJSON.UTS110111150.description -->

<!-- UTSDIFFTSJSON.UTS110111150.compatibility -->

TypeScript写法:

```ts
// 变量提升
console.log(x); // undefined (不会报错)
var x = 5;

// 函数提升
foo(); // "hello" (可以在声明前调用)
function foo() {
  console.log("hello");
}

// 可以访问自身
const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // 可以在函数内部调用自身
};
```

UTS正确写法：

```ts
// 变量必须先声明后使用
let x = 5;
console.log(x);
function foo() {
  console.log("hello");
}
// 函数必须先声明后调用
foo();

// 需要先声明函数变量
let factorial: ((n: number) => number) | null = null;
factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial!(n - 1);
};
```

#### 使用 let 而非 var @uts110111121

<!-- UTSDIFFTSJSON.UTS110111121.type -->

<!-- UTSDIFFTSJSON.UTS110111121.code -->

<!-- UTSDIFFTSJSON.UTS110111121.description -->

<!-- UTSDIFFTSJSON.UTS110111121.compatibility -->

### 2. 类型系统相关

#### 对象字面量不能用于类型声明 @uts110111101

<!-- UTSDIFFTSJSON.UTS110111101.type -->

<!-- UTSDIFFTSJSON.UTS110111101.code -->

<!-- UTSDIFFTSJSON.UTS110111101.description -->

<!-- UTSDIFFTSJSON.UTS110111101.compatibility -->

TypeScript写法:

```ts
let o: { x: number; y: number } = {
  x: 2,
  y: 3,
};

type S = Set<{ x: number; y: number }>;
```

UTS正确写法：

```ts
type O = {
  x: number;
  y: number;
};

let o: O = { x: 2, y: 3 };

type S = Set<O>;
```

#### type 定义对象类型时不支持嵌套对象字面量 @uts110111162

<!-- UTSDIFFTSJSON.UTS110111162.type -->

<!-- UTSDIFFTSJSON.UTS110111162.code -->

<!-- UTSDIFFTSJSON.UTS110111162.description -->

<!-- UTSDIFFTSJSON.UTS110111162.compatibility -->

TypeScript写法:

```ts
type News = {
  id: number;
  author: {
    id: number;
    name: string;
  };
};
```

UTS正确写法：

```ts
// 需要将嵌套的对象提取出来定义新的 type
type Author = {
  id: number;
  name: string;
};

type News = {
  id: number;
  author: Author;
};
```

#### 使用具体的类型而非 unknown @uts110111122

<!-- UTSDIFFTSJSON.UTS110111122.type -->

<!-- UTSDIFFTSJSON.UTS110111122.code -->

<!-- UTSDIFFTSJSON.UTS110111122.description -->

<!-- UTSDIFFTSJSON.UTS110111122.compatibility -->

TypeScript写法:

```ts
let value1: unknown;
value1 = true;
value1 = 42;
```

UTS正确写法：

```ts
let value1: any = true;
let value2: any = 42;
class A<T> {
  name: T | null = null;
}
const a = new A<string>();
// 仅支持在泛型中使用unknown
console.log(a instanceof A<unknown>);
```

#### 不支持条件类型 @uts110111123

<!-- UTSDIFFTSJSON.UTS110111123.type -->

<!-- UTSDIFFTSJSON.UTS110111123.code -->

<!-- UTSDIFFTSJSON.UTS110111123.description -->

<!-- UTSDIFFTSJSON.UTS110111123.compatibility -->

TypeScript写法:

```ts
type X<T> = T extends number ? T : never;
type Y<T> = T extends Array<infer Item> ? Item : never;
```


#### 不支持映射类型 @uts110111124

<!-- UTSDIFFTSJSON.UTS110111124.type -->

<!-- UTSDIFFTSJSON.UTS110111124.code -->

<!-- UTSDIFFTSJSON.UTS110111124.description -->

<!-- UTSDIFFTSJSON.UTS110111124.compatibility -->

TypeScript写法:

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

UTS正确写法：

```ts
class C {
  n: number = 0;
  s: string = "";
}

class CFlags {
  n: boolean = false;
  s: boolean = false;
}
```

#### 不支持 utility 类型 @uts110111125

<!-- UTSDIFFTSJSON.UTS110111125.type -->

<!-- UTSDIFFTSJSON.UTS110111125.code -->

<!-- UTSDIFFTSJSON.UTS110111125.description -->

<!-- UTSDIFFTSJSON.UTS110111125.compatibility -->

TypeScript写法:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

// Partial - 所有属性变为可选
type UserUpdate = Partial<User>;
let update: UserUpdate = { name: "John" };

// Readonly - 所有属性变为只读
type ReadUser = Readonly<User>;
let user: ReadUser = { id: 1, name: "John", email: "j@example.com" };
```

UTS正确写法：

```ts
// 使用 type 定义对象类型，而非 interface
type User = {
  id: number;
  name: string;
  email: string;
};

// 手动定义等效类型
type UserUpdate = {
  id?: number;
  name?: string;
  email?: string;
};
let update: UserUpdate = { name: "John" };

// 手动定义只读类型
type ReadUser = {
  readonly id: number;
  readonly name: string;
  readonly email: string;
};
let user: ReadUser = { id: 1, name: "John", email: "j@example.com" };
```

#### 不支持 as const 断言 @uts110111126

<!-- UTSDIFFTSJSON.UTS110111126.type -->

<!-- UTSDIFFTSJSON.UTS110111126.code -->

<!-- UTSDIFFTSJSON.UTS110111126.description -->

<!-- UTSDIFFTSJSON.UTS110111126.compatibility -->

TypeScript写法:

```ts
// 'hello'类型
let x = "hello" as const;

// 'readonly [10, 20]'类型
let y = [10, 20] as const;

// '{ readonly text: 'hello' }'类型
let z = { text: "hello" } as const;
```

UTS正确写法：

```ts
// 'string'类型
let x: string = "hello";

// 'number[]'类型
let y: number[] = [10, 20];

type Label = {
  text: string;
};

// 'Label'类型
let z: Label = {
  text: "hello",
};
```

#### 不支持确定赋值断言 @uts110111127

<!-- UTSDIFFTSJSON.UTS110111127.type -->

<!-- UTSDIFFTSJSON.UTS110111127.code -->

<!-- UTSDIFFTSJSON.UTS110111127.description -->

<!-- UTSDIFFTSJSON.UTS110111127.compatibility -->

TypeScript写法:

```ts
let x!: number; // 提示：在使用前将x初始化

initialize();

function initialize() {
  x = 10;
}

console.log("x = " + x);
```

UTS正确写法：

```ts
function initialize(): number {
  return 10;
}

let x: number = initialize();

console.log("x = " + x);
```

#### 类型别名不能出现在局部作用域中 @uts100006

<!-- UTSDIFFTSJSON.UTS100006.type -->

<!-- UTSDIFFTSJSON.UTS100006.code -->

<!-- UTSDIFFTSJSON.UTS100006.description -->

<!-- UTSDIFFTSJSON.UTS100006.compatibility -->

TypeScript写法:

```ts
function main() {
  type MyError = Error
}
```

UTS正确写法：

```ts
type MyError = Error
function main() {
}
```

### 3. 类和对象相关

#### 不支持以#开头的私有字段 @uts110111128

<!-- UTSDIFFTSJSON.UTS110111128.type -->

<!-- UTSDIFFTSJSON.UTS110111128.code -->

<!-- UTSDIFFTSJSON.UTS110111128.description -->

<!-- UTSDIFFTSJSON.UTS110111128.compatibility -->

TypeScript写法:

```ts
class C {
  #foo: number = 42;
}
```

UTS正确写法：

```ts
class C {
  private foo: number = 42;
}
```

#### class 不支持通过索引访问字段 @uts110111129

<!-- UTSDIFFTSJSON.UTS110111129.type -->

<!-- UTSDIFFTSJSON.UTS110111129.code -->

<!-- UTSDIFFTSJSON.UTS110111129.description -->

<!-- UTSDIFFTSJSON.UTS110111129.compatibility -->

TypeScript写法:

```ts
class Point {
  x: string = "";
  y: string = "";
}
let p: Point = { x: "1", y: "2" };
console.log(p["x"]);

class Person {
  name: string = "";
  age: number = 0;
  [key: string]: string | number;
}

let person: Person = {
  name: "John",
  age: 30,
  email: "***@example.com",
  phoneNumber: "18*********",
};
```

UTS正确写法：

```ts
class Point {
  x: string = "";
  y: string = "";
}
let p: Point = { x: "1", y: "2" };
console.log(p.x);

class Person {
  name: string;
  age: number;
  email: string;
  phoneNumber: string;

  constructor(name: string, age: number, email: string, phoneNumber: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}

let person = new Person("John", 30, "***@example.com", "18*********");
console.log(person["name"]); // 编译时错误
console.log(person.unknownProperty); // 编译时错误
```

#### 不支持静态块 @uts110111130

<!-- UTSDIFFTSJSON.UTS110111130.type -->

<!-- UTSDIFFTSJSON.UTS110111130.code -->

<!-- UTSDIFFTSJSON.UTS110111130.description -->

<!-- UTSDIFFTSJSON.UTS110111130.compatibility -->

TypeScript写法:

```ts
class MyClass {
  static data: Map<string, string> = new Map<string, string>();

  // 静态块初始化
  static {
    this.data.set("key1", "value1");
    this.data.set("key2", "value2");
  }
}
```

UTS正确写法：

```ts
class MyClass {
  static data: Map<string, string> = MyClass.initData();

  // 使用静态方法替代静态块
  private static initData(): Map<string, string> {
    let map: Map<string, string> = new Map<string, string>();
    map.set("key1", "value1");
    map.set("key2", "value2");
    return map;
  }
}
```

#### class 不能被用作对象 @uts110111151

<!-- UTSDIFFTSJSON.UTS110111151.type -->

<!-- UTSDIFFTSJSON.UTS110111151.code -->

<!-- UTSDIFFTSJSON.UTS110111151.description -->

<!-- UTSDIFFTSJSON.UTS110111151.compatibility -->

TypeScript写法:

```ts
class Person {
  static type: string = "human";
}

// 在 TypeScript 中可以将类作为对象使用
console.log(Person.type);

// 可以将类赋值给变量
let PersonClass: typeof Person = Person;
let p: Person = new PersonClass();
```

UTS正确写法：

```ts
class Person {
  static type: string = "human";
}

// 在 UTS 中可以访问静态成员
console.log(Person.type);

// 但不能将类本身赋值给变量
// let PersonClass = Person; // 错误

// 正确做法是使用工厂函数
function createPerson(): Person {
  return new Person();
}
```

#### 类继承时必须显示声明构造器 @uts110111131

<!-- UTSDIFFTSJSON.UTS110111131.type -->

<!-- UTSDIFFTSJSON.UTS110111131.code -->

<!-- UTSDIFFTSJSON.UTS110111131.description -->

<!-- UTSDIFFTSJSON.UTS110111131.compatibility -->

TypeScript写法:

```ts
class Parent {
  name: string = "";
}

class Child extends Parent {
  // TypeScript 允许省略构造器
}
```

UTS正确写法：

```ts
class Parent {
  name: string = "";
}

class Child extends Parent {
  // 需要显式声明构造器
  constructor() {
    super();
  }
}
```

#### 类不允许 implements @uts110111132

<!-- UTSDIFFTSJSON.UTS110111132.type -->

<!-- UTSDIFFTSJSON.UTS110111132.code -->

<!-- UTSDIFFTSJSON.UTS110111132.description -->

<!-- UTSDIFFTSJSON.UTS110111132.compatibility -->

TypeScript写法:

```ts
class C {
  foo() {}
}

class C1 implements C {
  foo() {}
}
```

UTS正确写法：

```ts
interface C {
  foo(): void;
}

class C1 implements C {
  foo() {}
}
```

#### 接口不能继承类 @uts110111133

<!-- UTSDIFFTSJSON.UTS110111133.type -->

<!-- UTSDIFFTSJSON.UTS110111133.code -->

<!-- UTSDIFFTSJSON.UTS110111133.description -->

<!-- UTSDIFFTSJSON.UTS110111133.compatibility -->

TypeScript写法:

```ts
class Control {
  state: number = 0;
}

interface SelectableControl extends Control {
  select(): void;
}
```

UTS正确写法：

```ts
interface Control {
  state: number;
}

interface SelectableControl extends Control {
  select(): void;
}
```

#### 接口不能出现在局部作用域中 @uts110111166

<!-- UTSDIFFTSJSON.UTS110111166.type -->

<!-- UTSDIFFTSJSON.UTS110111166.code -->

<!-- UTSDIFFTSJSON.UTS110111166.description -->

<!-- UTSDIFFTSJSON.UTS110111166.compatibility -->

TypeScript写法:

```ts
function test() {
	interface Test {
		
	}
}
```

UTS正确写法：

```ts
interface Test {
		
}
function test() {

}
```

#### 不支持修改对象的方法 @uts110111134

<!-- UTSDIFFTSJSON.UTS110111134.type -->

<!-- UTSDIFFTSJSON.UTS110111134.code -->

<!-- UTSDIFFTSJSON.UTS110111134.description -->

<!-- UTSDIFFTSJSON.UTS110111134.compatibility -->

TypeScript写法:

```ts
class C {
  foo() {
    console.log("foo");
  }
}

function bar() {
  console.log("bar");
}

let c1 = new C();
let c2 = new C();
c2.foo = bar;

c1.foo(); // foo
c2.foo(); // bar
```

UTS正确写法：

```ts
class C {
  foo() {
    console.log("foo");
  }
}

class Derived extends C {
  constructor() {
    super();
  }
  override foo() {
    console.log("Extra");
    super.foo();
  }
}

let c1 = new C();
let c2 = new C();
c1.foo(); // foo
c2.foo(); // foo

let c3 = new Derived();
c3.foo(); // Extra foo
```


#### type、class 或 interface 的属性方法不支持定义泛型信息 @uts110111161

<!-- UTSDIFFTSJSON.UTS110111161.type -->

<!-- UTSDIFFTSJSON.UTS110111161.code -->

<!-- UTSDIFFTSJSON.UTS110111161.description -->

<!-- UTSDIFFTSJSON.UTS110111161.compatibility -->

TypeScript写法:

```ts
type ApiService = {
  request: <T>(url: string) => Promise<T>; // 属性方法支持泛型
};

interface DataHandler {
  process: <T>(data: T) => T; // 属性方法支持泛型
}

class DataProcessor {
  handler: <T>(data: T) => T; // 属性方法支持泛型
}
```

UTS正确写法：

```ts
// type
// 方案1：指定具体类型
type ApiService = {
  request: (url: string) => Promise<any>;
};
// 方案2：提升到type级别
type ApiService<T> = {
  request: (url: string) => Promise<T>;
};

// interface
// 方案1：指定具体类型
interface DataHandler {
  process: (data: any) => any;
}
// 方案2：提升到interface级别
interface DataHandler<T> {
  process: (data: T) => T;
}
// 方案3：定义为方法
interface DataHandler {
  process<T>(data: T): T;
}

// class
// 方案1：指定具体类型
class DataProcessor {
  handler: (data: any) => any;
}
// 方案2：提升到class级别
class DataProcessor<T> {
  handler: (data: T) => T;
}
// 方案3：定义为方法
class DataProcessor {
  process<T>(data: T): T {
    return data;
  }
}
```

#### 类不能作为值使用 @uts110111164

<!-- UTSDIFFTSJSON.UTS110111164.type -->

<!-- UTSDIFFTSJSON.UTS110111164.code -->

<!-- UTSDIFFTSJSON.UTS110111164.description -->

<!-- UTSDIFFTSJSON.UTS110111164.compatibility -->

TypeScript写法:

```ts
type Msg = {
	obj: any | null
}

class Abc {
}
let test : Msg = {
	obj: Abc
}

test.obj = Abc;

console.log(test);
```

UTS正确写法：

```ts
type Msg = {
	obj: any | null
}

class Abc {

}
let test : Msg = {
	obj: null
}

test.obj = new Abc();

console.log(test);
```

#### Enum成员初始化器仅支持数字或字符串 @uts120000003

<!-- UTSDIFFTSJSON.UTS120000003.type -->

<!-- UTSDIFFTSJSON.UTS120000003.code -->

<!-- UTSDIFFTSJSON.UTS120000003.description -->

<!-- UTSDIFFTSJSON.UTS120000003.compatibility -->

TypeScript写法:

```ts
enum Test {
	A = 3 * 2
}
```

UTS正确写法：

```ts
enum Test {
	A = 6
}
```

#### Enum声明必须是顶级声明 @uts120000004

<!-- UTSDIFFTSJSON.UTS120000004.type -->

<!-- UTSDIFFTSJSON.UTS120000004.code -->

<!-- UTSDIFFTSJSON.UTS120000004.description -->

<!-- UTSDIFFTSJSON.UTS120000004.compatibility -->

TypeScript写法:

```ts
function test() {
    enum Test {}
}
```

UTS正确写法：

```ts
enum Test {}
function test() {
}
```


### 4. 函数相关

#### 使用 class 而非具有 call signature 的类型 @uts110111135

<!-- UTSDIFFTSJSON.UTS110111135.type -->

<!-- UTSDIFFTSJSON.UTS110111135.code -->

<!-- UTSDIFFTSJSON.UTS110111135.description -->

<!-- UTSDIFFTSJSON.UTS110111135.compatibility -->

TypeScript写法:

```ts
type DescribableFunction = {
  description: string;
  (someArg: string): string; // call signature
};

function doSomething(fn: DescribableFunction): void {
  console.log(fn.description + " returned " + fn(""));
}
```

UTS正确写法：

```ts
class DescribableFunction {
  description: string;
  public invoke(someArg: string): string {
    return someArg;
  }
  constructor() {
    this.description = "desc";
  }
}

function doSomething(fn: DescribableFunction): void {
  console.log(fn.description + " returned " + fn.invoke(""));
}

doSomething(new DescribableFunction());
```


#### 使用 class 而非具有构造签名的类型 @uts110111136

<!-- UTSDIFFTSJSON.UTS110111136.type -->

<!-- UTSDIFFTSJSON.UTS110111136.code -->

<!-- UTSDIFFTSJSON.UTS110111136.description -->

<!-- UTSDIFFTSJSON.UTS110111136.compatibility -->

TypeScript写法:

```ts
class SomeObject {}

type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

UTS正确写法：

```ts
class SomeObject {
  public f: string;
  constructor(s: string) {
    this.f = s;
  }
}

function fn(s: string): SomeObject {
  return new SomeObject(s);
}
```

#### 不支持构造函数类型 @uts110111137

<!-- UTSDIFFTSJSON.UTS110111137.type -->

<!-- UTSDIFFTSJSON.UTS110111137.code -->

<!-- UTSDIFFTSJSON.UTS110111137.description -->

<!-- UTSDIFFTSJSON.UTS110111137.compatibility -->

TypeScript写法:

```ts
class Person {
  constructor(name: string, age: number) {}
}
type PersonCtor = new (name: string, age: number) => Person;

function createPerson(Ctor: PersonCtor, name: string, age: number): Person {
  return new Ctor(name, age);
}

const person = createPerson(Person, "John", 30);
```

UTS正确写法：

```ts
class Person {
  constructor(name: string, age: number) {}
}
type PersonCtor = (n: string, a: number) => Person;

function createPerson(Ctor: PersonCtor, n: string, a: number): Person {
  return Ctor(n, a);
}

let Impersonizer: PersonCtor = (n: string, a: number): Person => {
  return new Person(n, a);
};

const person = createPerson(Impersonizer, "John", 30);
```

#### 函数声明不能作为值使用 @uts110111152

<!-- UTSDIFFTSJSON.UTS110111152.type -->

<!-- UTSDIFFTSJSON.UTS110111152.code -->

<!-- UTSDIFFTSJSON.UTS110111152.description -->

<!-- UTSDIFFTSJSON.UTS110111152.compatibility -->

TypeScript写法:

```ts
// 允许将函数声明作为值使用
function foo() {
  console.log("foo");
}

setTimeout(foo, 1000); // 将函数作为参数传递
```

UTS正确写法：

```ts
// 使用函数表达式或箭头函数
const foo = () => {
  console.log("foo");
};

setTimeout(foo, 1000);
```


#### 不支持对函数声明属性 @uts110111138

<!-- UTSDIFFTSJSON.UTS110111138.type -->

<!-- UTSDIFFTSJSON.UTS110111138.code -->

<!-- UTSDIFFTSJSON.UTS110111138.description -->

<!-- UTSDIFFTSJSON.UTS110111138.compatibility -->

TypeScript写法:

```ts
function greet(name: string): void {
  console.log("Hello, " + name);
}

// 在 TypeScript 中可以给函数添加属性
greet.count = 0;
greet.increment = function (): void {
  this.count++;
};

greet("John");
greet.increment();
console.log(greet.count); // 1
```

UTS正确写法：

```ts
// 在 UTS 中使用类替代函数属性
class Greeter {
  count: number = 0;

  greet(name: string): void {
    console.log("Hello, " + name);
  }

  increment(): void {
    this.count++;
  }
}

let g: Greeter = new Greeter();
g.greet("John");
g.increment();
console.log(g.count); // 1
```

#### 不支持 Function.apply 和 Function.call @uts110111139

<!-- UTSDIFFTSJSON.UTS110111139.type -->

<!-- UTSDIFFTSJSON.UTS110111139.code -->

<!-- UTSDIFFTSJSON.UTS110111139.description -->

<!-- UTSDIFFTSJSON.UTS110111139.compatibility -->

TypeScript写法:

```ts
function greet(greeting: string): void {
  console.log(greeting + ", " + this.name);
}

interface PersonType {
  name: string;
}

let person: PersonType = { name: "John" };

// 使用 call 指定 this
greet.call(person, "Hello");

// 使用 apply 指定 this 和参数数组
greet.apply(person, ["Hi"]);
```

UTS正确写法：

```ts
// 在 UTS 中使用类和方法
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(greeting: string): void {
    console.log(greeting + ", " + this.name);
  }
}

let person: Person = new Person("John");
person.greet("Hello");
```

#### 不支持 Function.bind @uts110111139

<!-- UTSDIFFTSJSON.UTS110111139_1.type -->

<!-- UTSDIFFTSJSON.UTS110111139_1.code -->

<!-- UTSDIFFTSJSON.UTS110111139_1.description -->

<!-- UTSDIFFTSJSON.UTS110111139_1.compatibility -->

TypeScript写法:

```ts
class Counter {
  count: number = 0;

  increment(): void {
    this.count++;
    console.log(this.count);
  }
}

let counter: Counter = new Counter();

// 使用 bind 绑定 this
let inc: () => void = counter.increment.bind(counter);
inc(); // 1
inc(); // 2
```

UTS正确写法：

```ts
class Counter {
  count: number = 0;

  increment(): void {
    this.count++;
    console.log(this.count);
  }

  // 在 UTS 中使用方法返回闭包
  getIncrement(): () => void {
    return () => {
      this.count++;
      console.log(this.count);
    };
  }
}

let counter: Counter = new Counter();
let inc: () => void = counter.getIncrement();
inc(); // 1
inc(); // 2
```

#### 在函数表达式中不可以访问未声明的变量或函数（包括自身）@uts110111165

<!-- UTSDIFFTSJSON.UTS110111165.type -->

<!-- UTSDIFFTSJSON.UTS110111165.code -->

<!-- UTSDIFFTSJSON.UTS110111165.description -->

<!-- UTSDIFFTSJSON.UTS110111165.compatibility -->

TypeScript写法:

```ts
const fn = function () {
    console.log(fn)
}
fn()
```

UTS正确写法：

```ts
let fn: (() => void) | null = null
fn = function () {
    console.log(fn) // 此时 fn 可以正常访问
    fn!() // 如果需要调用就必须要加`!`
}
fn()
```

#### 不支持函数分配给接口 @uts120000000

<!-- UTSDIFFTSJSON.UTS120000000.type -->

<!-- UTSDIFFTSJSON.UTS120000000.code -->

<!-- UTSDIFFTSJSON.UTS120000000.description -->

<!-- UTSDIFFTSJSON.UTS120000000.compatibility -->

TypeScript写法:

```ts
interface MyFunction {
}
const myFunction1: MyFunction = () => { };
```

UTS正确写法：

```ts

const MyFunction = () => { };
```


### 5. 模块和命名空间

#### 不支持命名空间 @uts110111140

<!-- UTSDIFFTSJSON.UTS110111140.type -->

<!-- UTSDIFFTSJSON.UTS110111140.code -->

<!-- UTSDIFFTSJSON.UTS110111140.description -->

<!-- UTSDIFFTSJSON.UTS110111140.compatibility -->

TypeScript写法:

```ts
namespace MyNamespace {
  export let x: number;
}
```

UTS正确写法：

```ts
// UTS 不支持命名空间，使用模块替代
// file: utils.uts
export let x: number = 10;

// 在其他文件中导入
import { x } from "./utils.uts";
console.log(x);
```

#### 不支持 require 和 import 赋值表达式 @uts110111141

<!-- UTSDIFFTSJSON.UTS110111141.type -->

<!-- UTSDIFFTSJSON.UTS110111141.code -->

<!-- UTSDIFFTSJSON.UTS110111141.description -->

<!-- UTSDIFFTSJSON.UTS110111141.compatibility -->

TypeScript写法:

```ts
import m = require("mod");
```

UTS正确写法：

```ts
import * as m from "mod";
```

#### 不支持 export = ...语法 @uts110111142

<!-- UTSDIFFTSJSON.UTS110111142.type -->

<!-- UTSDIFFTSJSON.UTS110111142.code -->

<!-- UTSDIFFTSJSON.UTS110111142.description -->

<!-- UTSDIFFTSJSON.UTS110111142.compatibility -->

TypeScript写法:

```ts
// module1
export = Point;

class Point {
  constructor(x: number, y: number) {}
  static origin = new Point(0, 0);
}

// module2
import Pt = require("module1");

let p = Pt.Point.origin;
```

UTS正确写法：

```ts
// module1
export class Point {
  constructor(x: number, y: number) {}
  static origin = new Point(0, 0);
}

// module2
import * as Pt from "module1";

let p = Pt.Point.origin;
```

### 6. 类型检查和转换

#### 使用 instanceof 和 as 进行类型保护 @uts110111143

<!-- UTSDIFFTSJSON.UTS110111143.type -->

<!-- UTSDIFFTSJSON.UTS110111143.code -->

<!-- UTSDIFFTSJSON.UTS110111143.description -->

<!-- UTSDIFFTSJSON.UTS110111143.compatibility -->

TypeScript写法:

```ts
class Foo {
  foo: string = "";
  common: string = "";
}

class Bar {
  bar: string = "";
  common: string = "";
}

function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // OK
    console.log(arg.bar); // 编译时错误
  } else {
    console.log(arg.foo); // 编译时错误
    console.log(arg.bar); // OK
  }
}

doStuff({ foo: 123, common: "123" });
doStuff({ bar: 123, common: "123" });
```

UTS正确写法：

```ts
class Foo {
  foo: string = "";
  common: string = "";
}

class Bar {
  bar: string = "";
  common: string = "";
}

function isFoo(arg: any): boolean {
  return arg instanceof Foo;
}

function doStuff(arg: any): void {
  if (isFoo(arg)) {
    let fooArg = arg as Foo;
    console.log(fooArg.foo); // OK
    console.log(arg.bar); // 编译时错误
  } else {
    let barArg = arg as Bar;
    console.log(arg.foo); // 编译时错误
    console.log(barArg.bar); // OK
  }
}

function main(): void {
  doStuff(new Foo());
  doStuff(new Bar());
}
```

#### 类型转换仅支持 as T 语法 @uts110111153

<!-- UTSDIFFTSJSON.UTS110111153.type -->

<!-- UTSDIFFTSJSON.UTS110111153.code -->

<!-- UTSDIFFTSJSON.UTS110111153.description -->

<!-- UTSDIFFTSJSON.UTS110111153.compatibility -->

TypeScript写法:

```ts
class Shape {}
class Circle extends Shape {
  x: number = 5;
}
class Square extends Shape {
  y: string = "a";
}

function createShape(): Shape {
  return new Circle();
}

let c1 = <Circle>createShape();

let c2 = createShape() as Circle;

// 如果转换错误，不会产生编译时或运行时报错
let c3 = createShape() as Square;
console.log(c3.y); // undefined

// 在TS中，由于`as`关键字不会在运行时生效，所以`instanceof`的左操作数不会在运行时被装箱成引用类型
let e1 = (5.0 as Number) instanceof Number; // false

// 创建Number对象，获得预期结果：
let e2 = new Number(5.0) instanceof Number; // true
```

UTS正确写法：

```ts
class Shape {}
class Circle extends Shape {
  x: number = 5;
  constructor() {
    super();
  }
}
class Square extends Shape {
  y: string = "a";
  constructor() {
    super();
  }
}

function createShape(): Shape {
  return new Circle();
}

let c2 = createShape() as Circle;

// 运行时抛出ClassCastException异常：
let c3 = createShape() as Square;
```

### 7. 特殊语言特性

#### 不支持 Symbol() @uts110111154

<!-- UTSDIFFTSJSON.UTS110111154.type -->

<!-- UTSDIFFTSJSON.UTS110111154.code -->

<!-- UTSDIFFTSJSON.UTS110111154.description -->

<!-- UTSDIFFTSJSON.UTS110111154.compatibility -->

TypeScript写法:

```ts
// Symbol 用于创建唯一标识符
let sym1: symbol = Symbol("key");
let sym2: symbol = Symbol("key");
console.log(sym1 == sym2); // false

// 作为对象属性
let obj: any = {};
obj[sym1] = "value1";
console.log(obj[sym1]); // "value1"
```

UTS正确写法：

```ts
// 使用具体的唯一字符串字面量定义类型
type MyObj = {
  key1: string;
  key2: string;
};

let obj: MyObj = {
  key1: "value1",
  key2: "value2",
};
console.log(obj.key1); // "value1"
```

#### 不支持 index signature @uts110111144

<!-- UTSDIFFTSJSON.UTS110111144.type -->

<!-- UTSDIFFTSJSON.UTS110111144.code -->

<!-- UTSDIFFTSJSON.UTS110111144.description -->

<!-- UTSDIFFTSJSON.UTS110111144.compatibility -->

TypeScript写法:

```ts
// 带index signature的接口：
interface StringArray {
  [index: number]: string;
}

function getStringArray(): StringArray {
  return ["a", "b", "c"];
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
```

UTS正确写法：

```ts
class X {
  public f: string[] = ["a", "b", "c"];
}

let myArray: X = new X();
const secondItem = myArray.f[1];
```

#### 不支持声明合并 @uts110111145

<!-- UTSDIFFTSJSON.UTS110111145.type -->

<!-- UTSDIFFTSJSON.UTS110111145.code -->

<!-- UTSDIFFTSJSON.UTS110111145.description -->

<!-- UTSDIFFTSJSON.UTS110111145.compatibility -->

TypeScript写法:

```ts
interface Document {
  createElement(tagName: any): Element;
}

interface Document {
  createElement(tagName: string): HTMLElement;
}

interface Document {
  createElement(tagName: number): HTMLDivElement;
  createElement(tagName: boolean): HTMLSpanElement;
  createElement(tagName: string, value: number): HTMLCanvasElement;
}
```

UTS正确写法：

```ts
interface Document {
  createElement(tagName: number): HTMLDivElement;
  createElement(tagName: boolean): HTMLSpanElement;
  createElement(tagName: string, value: number): HTMLCanvasElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: Object): Element;
}
```

#### 不支持生成器函数 @uts110111146

<!-- UTSDIFFTSJSON.UTS110111146.type -->

<!-- UTSDIFFTSJSON.UTS110111146.code -->

<!-- UTSDIFFTSJSON.UTS110111146.description -->

<!-- UTSDIFFTSJSON.UTS110111146.compatibility -->

TypeScript写法:

```ts
function* counter(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let num of counter(1, 5)) {
  console.log(num);
}
```

UTS正确写法：

```ts
async function complexNumberProcessing(num: number): Promise<number> {
  // ...
  return num;
}

async function foo() {
  for (let i = 1; i <= 5; i++) {
    await complexNumberProcessing(i);
  }
}

foo();
```

#### 不支持 JSX 表达式 @uts110111155

<!-- UTSDIFFTSJSON.UTS110111155.type -->

<!-- UTSDIFFTSJSON.UTS110111155.code -->

<!-- UTSDIFFTSJSON.UTS110111155.description -->

<!-- UTSDIFFTSJSON.UTS110111155.compatibility -->

TypeScript写法:

```ts
// React TSX 示例
function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}</h1>;
}
```

UTS正确写法：

```vue
<template>
  <text>Hello, {{ name }}</text>
</template>
<script setup>
defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>
```

#### 不支持 with 语句 @uts110111156

<!-- UTSDIFFTSJSON.UTS110111156.type -->

<!-- UTSDIFFTSJSON.UTS110111156.code -->

<!-- UTSDIFFTSJSON.UTS110111156.description -->

<!-- UTSDIFFTSJSON.UTS110111156.compatibility -->

TypeScript写法:

```ts
with (Math) {
  // 编译时错误, 但是仍能生成JavaScript代码
  let r: number = 42;
  let area: number = PI * r * r;
}
```

UTS正确写法：

```ts
let r: number = 42;
let area: number = Math.PI * r * r;
```

#### 不支持 globalThis @uts110111147

<!-- UTSDIFFTSJSON.UTS110111147.type -->

<!-- UTSDIFFTSJSON.UTS110111147.code -->

<!-- UTSDIFFTSJSON.UTS110111147.description -->

<!-- UTSDIFFTSJSON.UTS110111147.compatibility -->

TypeScript写法:

```ts
// 全局文件中
var abc = 100;

// 从上面引用'abc'
let x = globalThis.abc;
```

UTS正确写法：

```ts
// file1
export let abc: number = 100;

// file2
import * as M from "file1";

let x = M.abc;
```

### 8. 运算符和表达式

#### 一元运算符+、-和~仅适用于数值类型 @uts110111148

<!-- UTSDIFFTSJSON.UTS110111148.type -->

<!-- UTSDIFFTSJSON.UTS110111148.code -->

<!-- UTSDIFFTSJSON.UTS110111148.description -->

<!-- UTSDIFFTSJSON.UTS110111148.compatibility -->

TypeScript写法:

```ts
let a = +5; // 5（number类型）
let b = +"5"; // 5（number类型）
let c = -5; // -5（number类型）
let d = -"5"; // -5（number类型）
let e = ~5; // -6（number类型）
let f = ~"5"; // -6（number类型）
let g = +"string"; // NaN（number类型）

function returnTen(): string {
  return "-10";
}

function returnString(): string {
  return "string";
}

let x = +returnTen(); // -10（number类型）
let y = +returnString(); // NaN
```

UTS正确写法：

```ts
let a = +5; // 5（number类型）
let b = +"5"; // 编译时错误
let c = -5; // -5（number类型）
let d = -"5"; // 编译时错误
let e = ~5; // -6（number类型）
let f = ~"5"; // 编译时错误
let g = +"string"; // 编译时错误

function returnTen(): string {
  return "-10";
}

function returnString(): string {
  return "string";
}

let x = +returnTen(); // 编译时错误
let y = +returnString(); // 编译时错误
```

#### 不支持赋值语句返回值 @uts110111160

<!-- UTSDIFFTSJSON.UTS110111160.type -->

<!-- UTSDIFFTSJSON.UTS110111160.code -->

<!-- UTSDIFFTSJSON.UTS110111160.description -->

<!-- UTSDIFFTSJSON.UTS110111160.compatibility -->

TypeScript写法:

```ts
let x, y;
y = x = 5; // x和y都被赋值为5

// 在条件中使用赋值
let arr = [1, 2, 3];
let item;
while ((item = arr.pop())) {
  console.log(item);
}

// 在正则匹配中常用的模式
let regex = /\w+/g;
let text = "hello world";
let match;
while ((match = regex.exec(text))) {
  console.log(match[0]);
}
```

UTS正确写法：

```ts
let x = 5;
let y = x; // 必须分开赋值

// 正确的循环写法
let arr = [1, 2, 3];
let item = arr.pop();
while (item != null) {
  console.log(item);
  item = arr.pop();
}

// 正确的正则匹配写法
let regex = /\w+/g;
let text = "hello world";
let match = regex.exec(text);
while (match != null) {
  console.log(match[0]);
  match = regex.exec(text);
}
```

#### 不支持 delete 运算符 @uts110111149

<!-- UTSDIFFTSJSON.UTS110111149.type -->

<!-- UTSDIFFTSJSON.UTS110111149.code -->

<!-- UTSDIFFTSJSON.UTS110111149.description -->

<!-- UTSDIFFTSJSON.UTS110111149.compatibility -->

TypeScript写法:

```ts
interface Person {
  name: string;
  age?: number;
}

let person: Person = { name: "John", age: 30 };

// 删除可选属性
delete person.age;
console.log(person.age); // undefined

// 删除对象属性
let obj: any = { x: 1, y: 2 };
delete obj.x;
console.log(obj.x); // undefined
```

UTS正确写法：

```ts
type Person = {
  name: string;
  age: number | null;
};

let person: Person = { name: "John", age: 30 };

// 使用 null 替代删除
person.age = null;
console.log(person.age); // null

// 使用新对象替代删除属性
type Point = { x: number; y: number };
let obj: Point = { x: 1, y: 2 };
type PartialPoint = { y: number };
let newObj: PartialPoint = { y: obj.y };
console.log(newObj.y); // 2
```

#### 逗号运算符仅用在 for 循环语句中 @uts110111157

<!-- UTSDIFFTSJSON.UTS110111157.type -->

<!-- UTSDIFFTSJSON.UTS110111157.code -->

<!-- UTSDIFFTSJSON.UTS110111157.description -->

<!-- UTSDIFFTSJSON.UTS110111157.compatibility -->

TypeScript写法:

```ts
for (let i = 0, j = 0; i < 10; ++i, j += 2) {
  // ...
}

let x = 0;
x = (++x, x++); // 1
```

UTS正确写法：

```ts
for (let i = 0, j = 0; i < 10; ++i, j += 2) {
  // ...
}
// 通过语句表示执行顺序，而非逗号运算符
let x = 0;
++x;
x = x++;
```

#### 限制 throw 语句中表达式的类型 @uts110111158

<!-- UTSDIFFTSJSON.UTS110111158.type -->

<!-- UTSDIFFTSJSON.UTS110111158.code -->

<!-- UTSDIFFTSJSON.UTS110111158.description -->

<!-- UTSDIFFTSJSON.UTS110111158.compatibility -->

TypeScript写法:

```ts
throw 4;
throw "";
throw new Error();
```

UTS正确写法：

```ts
throw new Error();
```

#### 数组越界访问 @uts210111100

<!-- UTSDIFFTSJSON.UTS210111100.type -->

<!-- UTSDIFFTSJSON.UTS210111100.code -->

<!-- UTSDIFFTSJSON.UTS210111100.description -->

<!-- UTSDIFFTSJSON.UTS210111100.compatibility -->

TypeScript写法:

```ts
let arr: number[] = [1, 2, 3];

// TypeScript/JavaScript 中越界访问返回 undefined
console.log(arr[5]); // undefined
console.log(arr[-1]); // undefined
```

UTS正确写法：

```ts
const arr: number[] = [1, 2, 3];

// Kotlin、Swift 中越界访问会抛出运行时异常
console.log(arr[5]); // 抛出 IndexOutOfBoundsException
console.log(arr[-1]); // 抛出 IndexOutOfBoundsException

// 正确的做法：在访问前检查边界
let index = 5;
if (index >= 0 && index < arr.length) {
  console.log(arr[index]);
} else {
  console.log("索引越界");
}
```

### 9. 原型和对象操作

#### 不支持在原型上赋值 @uts110111159

<!-- UTSDIFFTSJSON.UTS110111159.type -->

<!-- UTSDIFFTSJSON.UTS110111159.code -->

<!-- UTSDIFFTSJSON.UTS110111159.description -->

<!-- UTSDIFFTSJSON.UTS110111159.compatibility -->

TypeScript写法:

```ts
let C = function (p) {
  this.p = p; // 只有在开启noImplicitThis选项时会产生编译时错误
};

C.prototype = {
  m() {
    console.log(this.p);
  },
};

C.prototype.q = function (r: string) {
  return this.p == r;
};
```

UTS正确写法：

```ts
class C {
  p: string = "";
  m() {
    console.log(this.p);
  }
  q(r: string) {
    return this.p == r;
  }
}
```
