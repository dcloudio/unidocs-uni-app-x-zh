## uts 和 ts 的差异

uts 是一门采用 TypeScript（简称 ts） 基本一致的语法规范，跨平台的、高性能的、强类型的现代编程语言，它可以被编译为不同平台的编程语言，如：JavaScript、Kotlin、Swift、ArkTS。为了确保跨平台、高性能，通过规范约束了 ts 中过于灵活而影响开发正确性或者给运行时带来不必要额外开销的特性。本文罗列了所有在 uts 跨端开发时限制的 ts 特性，并提供了重构代码的建议。

### 概述

#### 强制使用静态类型

静态类型是 uts 最重要的特性之一。如果程序采用静态类型，即所有类型在编译时都是已知的，那么开发者就能够容易理解代码中使用了哪些数据结构。同时，由于所有类型在程序实际运行前都是已知的，编译器可以提前验证代码的正确性，从而可以减少运行时的类型检查，有助于提升性能。

基于上述考虑，uts 中的 any 类型与 ts 中的 any 并不一样，它是一个根据目标平台自动适配的跨端类型，通常用于表示"任意的非空类型"，在使用时仍需类型转换后才能访问具体类型的方法和属性。

#### 不支持结构化类型系统

结构化类型系统（structural typing）是 ts 的一个重要特性，它意味着类型的兼容性和等价性是基于类型的结构（即它们的属性和方法）；而在跨端开发时，uts 采用名义类型系统（nominal typing），类型兼容性检查基于类型名称和显式的继承/实现关系，即使两个类型具有完全相同的结构，如果没有显式的继承/实现关系，它们也不能互相赋值，这与 Kotlin 、Swift 、ArkTS 等静态语言的类型系统保持一致，有助于确保类型安全和代码的可维护性。

### 约束说明

## 1. 核心语言特性

#### 不支持 undefined @UTS110111119

级别：错误

错误码：UTS110111119

不支持 undefined，请使用 null。

#### 条件语句必须使用布尔类型 @UTS110111120

级别：错误

错误码：UTS110111120

所有条件语句(if、while、do-while、三元运算符、for 循环的条件部分)必须使用布尔类型作为条件。不支持 ts 中的隐式类型转换和 truthy/falsy 值。

TypeScript:

```ts
// 允许非布尔值在条件语句中使用
if (1) {
} // 数值类型
while ("") {} // 字符串类型
do {} while (obj); // 对象类型
for (let i = 0; i; i++) {} // 作为条件的数值类型
const value = arr || []; // truthy/falsy 值判断
```

UTS:

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

在 UTS 中,所有没有明确类型标注或上下文推断不出具体类型的对象字面量都会被推导为 UTSJSONObject 类型。这与 ts 中对象字面量会根据属性推导出具体结构类型的行为不同。

TypeScript:

```ts
// 类型推导为 { name: string, age: number }
const person = {
  name: "John",
  age: 30,
};

// 可以正常访问推导出的属性
console.log(person.name);
```

UTS:

```ts
// 类型推导为 UTSJSONObject
const person = {
  name: "John",
  age: 30,
};

// 声明时直接指定类型
const person: Person = {
  name: "John",
  age: 30,
};
```

#### 对象字面量仅支持构造 type 定义的对象类型，不支持 interface

级别：提示

在 UTS 中，可以将对象字面量赋值给一个 type 关键词定义的对象类型。

注意：不能赋值给 interface 定义的类型

TypeScript:

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

UTS:

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

#### 不支持变量和函数的声明提升 (hoisting) @UTS110111150

级别：错误

错误码：UTS110111150

不支持变量和函数的声明提升 (hoisting)。所有变量和函数必须先声明后使用，不能访问未声明的变量或函数(包括函数自身)。这与 ts 中允许函数和 var 声明提升的行为不同。

TypeScript:

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

UTS:

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

#### 使用 let 而非 var @UTS110111121

级别：警告

错误码：UTS110111121

请使用 let 或 const 声明变量。除非你知道你在做什么，否则不要轻易使用它，因为有不同平台差异：

- 编译至 JavaScript 平台时，等同于 JavaScript 平台的 var 。存在变量提升现象，具体参考 var 和 let 的区别
- 编译至 Kotlin 平台时，等同于 Kotlin 平台的 var（允许重新赋值）

## 2. 类型系统相关

#### 对象字面量不能用于类型声明 @UTS110111101

级别：错误

错误码：UTS110111101

不支持直接使用对象字面量声明类型，可以使用 type 别名、类或者接口声明类型。

TypeScript:

```ts
let o: { x: number; y: number } = {
  x: 2,
  y: 3,
};

type S = Set<{ x: number; y: number }>;
```

UTS:

```ts
type O = {
  x: number;
  y: number;
};

let o: O = { x: 2, y: 3 };

type S = Set<O>;
```

#### 使用具体的类型而非 unknown @UTS110111122

级别：错误

错误码：UTS110111122

不支持声明类型为 unknown，unknown 仅支持在泛型中使用。

TypeScript:

```ts
let value1: unknown;
value1 = true;
value1 = 42;
```

UTS:

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

#### 不支持条件类型 @UTS110111123

级别：错误

错误码：UTS110111123

不支持条件类型别名，引入带显式约束的新类型。

不支持 infer 关键字。

TypeScript:

```ts
type X<T> = T extends number ? T : never;
type Y<T> = T extends Array<infer Item> ? Item : never;
```

#### 不支持映射类型 @UTS110111124

级别：错误

错误码：UTS110111124

不支持映射类型，请使用其他语法来表示相同的语义。

TypeScript:

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

UTS:

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

#### 不支持 utility 类型 @UTS110111125

级别：错误

错误码：UTS110111125

不支持 TypeScript 中的 Utility Types，如 Partial、Required、Readonly 和 Record...

#### 不支持 as const 断言 @UTS110111126

级别：错误

错误码：UTS110111126

不支持 as const 断言。

TypeScript:

```ts
// 'hello'类型
let x = "hello" as const;

// 'readonly [10, 20]'类型
let y = [10, 20] as const;

// '{ readonly text: 'hello' }'类型
let z = { text: "hello" } as const;
```

UTS:

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

#### 不支持确定赋值断言 @UTS110111127

级别：错误

错误码：UTS110111127

不支持确定赋值断言，例如：let v!: T。改为在声明变量的同时为变量赋值。

TypeScript:

```ts
let x!: number; // 提示：在使用前将x初始化

initialize();

function initialize() {
  x = 10;
}

console.log("x = " + x);
```

UTS:

```ts
function initialize(): number {
  return 10;
}

let x: number = initialize();

console.log("x = " + x);
```

## 3. 类和对象相关

#### 不支持以#开头的私有字段 @UTS110111128

级别：错误

错误码：UTS110111128

不支持使用 # 符号开头声明的私有字段。改用 private 关键字。

TypeScript:

```ts
class C {
  #foo: number = 42;
}
```

UTS:

```ts
class C {
  private foo: number = 42;
}
```

#### class 不支持通过索引访问字段 @UTS110111129

级别：错误

错误码：UTS110111129

class 不支持动态声明字段，不支持动态访问字段。只能访问已在类中声明或者继承可见的字段，访问其他字段将会造成编译时错误。

使用点操作符访问 class 字段，例如（obj.field），不支持索引访问（obj[field]）。

TypeScript:

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

UTS:

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

#### 不支持静态块 @UTS110111130

级别：错误

错误码：UTS110111130

不同平台对类中静态块支持有差异。使用其他方式实现静态初始化，如构造函数中。

#### class 不能被用作对象 @UTS110111151

级别：错误

错误码：UTS110111151

class 声明的是一个新的类型，不是一个值。因此，不支持将 class 用作对象 (例如将 class 赋值给一个对象)。

#### 类继承时必须显示声明构造器 @UTS110111131

级别：错误

错误码：UTS110111131

继承类时必须显式声明构造器。这是因为在不同目标平台 (Kotlin/Swift) 中，继承类时都需要显式调用父类构造器。

TypeScript:

```ts
class Parent {
  name: string = "";
}

class Child extends Parent {
  // TypeScript 允许省略构造器
}
```

UTS:

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

#### 类不允许 implements @UTS110111132

级别：错误

错误码：UTS110111132

不允许类被 implements，只有接口可以被 implements。

TypeScript:

```ts
class C {
  foo() {}
}

class C1 implements C {
  foo() {}
}
```

UTS:

```ts
interface C {
  foo(): void;
}

class C1 implements C {
  foo() {}
}
```

#### 接口不能继承类 @UTS110111133

级别：错误

错误码：UTS110111133

不支持接口继承类，接口只能继承接口。

TypeScript:

```ts
class Control {
  state: number = 0;
}

interface SelectableControl extends Control {
  select(): void;
}
```

UTS:

```ts
interface Control {
  state: number;
}

interface SelectableControl extends Control {
  select(): void;
}
```

#### 不支持修改对象的方法 @UTS110111134

级别：错误

错误码：UTS110111134

不支持修改对象的方法。在静态语言中，对象的布局是确定的。一个类的所有对象实例享有同一个方法。

如果需要为某个特定的对象增加方法，可以封装函数或者使用继承的机制。

TypeScript:

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

UTS:

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

## 4. 函数相关

#### 使用 class 而非具有 call signature 的类型 @UTS110111135

级别：错误

错误码：UTS110111135

不支持对象类型中包含 call signature。

TypeScript:

```ts
type DescribableFunction = {
  description: string;
  (someArg: string): string; // call signature
};

function doSomething(fn: DescribableFunction): void {
  console.log(fn.description + " returned " + fn(""));
}
```

UTS:

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

#### 使用 class 而非具有构造签名的类型 @UTS110111136

级别：错误

错误码：UTS110111136

不支持对象类型中的构造签名。改用类。

TypeScript：

```ts
class SomeObject {}

type SomeConstructor = {
  new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

UTS:

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

#### 不支持构造函数类型 @UTS110111137

级别：错误

错误码：UTS110111137

不支持使用构造函数类型，改用 lambda 函数。

TypeScript:

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

UTS:

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

#### 函数声明不能作为值使用 @UTS110111152

级别：错误

错误码：UTS110111152

在 UTS 中,通过 function 关键字声明的函数不能作为值传递。如果需要将函数作为值使用，请使用函数表达式。

TypeScript:

```ts
// 允许将函数声明作为值使用
function foo() {
  console.log("foo");
}

setTimeout(foo, 1000); // 将函数作为参数传递
```

UTS:

```ts
// 使用函数表达式或箭头函数
const foo = () => {
  console.log("foo");
};

setTimeout(foo, 1000);
```

#### 不支持对函数声明属性 @UTS110111138

级别：错误

错误码：UTS110111138

不支持对函数声明属性。

#### 不支持 Function.apply 和 Function.call @UTS110111139

级别：错误

错误码：UTS110111139

不支持 Function.apply 和 Function.call。this 的语义仅限于在 class 中使用的传统 OOP 风格。

#### 不支持 Function.bind @UTS110111139

级别：错误

错误码：UTS110111139

不支持 Function.bind。this 的语义仅限于在 class 中使用的传统 OOP 风格。

## 5. 模块和命名空间

#### 不支持命名空间 @UTS110111140

级别：错误

错误码：UTS110111140

不支持将命名空间用作对象，可以使用类或模块。

TypeScript:

```ts
namespace MyNamespace {
  export let x: number;
}
```

#### 不支持 require 和 import 赋值表达式 @UTS110111141

级别：错误

错误码：UTS110111141

不支持通过 require 导入，也不支持 import 赋值表达式，改用 import。

TypeScript:

```ts
import m = require("mod");
```

UTS:

```ts
import * as m from "mod";
```

#### 不支持 export = ...语法 @UTS110111142

级别：错误

错误码：UTS110111142

不支持 export = ...语法，改用常规的 export 或 import。

TypeScript:

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

UTS:

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

## 6. 类型检查和转换

#### 使用 instanceof 和 as 进行类型保护 @UTS110111143

级别：错误

错误码：UTS110111143

不支持 is 运算符，必须用 instanceof 运算符替代。在使用之前，必须使用 as 运算符将对象转换为需要的类型。

TypeScript:

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

UTS:

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

#### 类型转换仅支持 as T 语法 @UTS110111153

级别：错误

错误码：UTS110111153

as 关键字是类型转换的唯一语法，错误的类型转换会导致编译时错误或者运行时抛出异常。不支持使用<type>语法进行类型转换。

TypeScript:

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

UTS:

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

## 7. 特殊语言特性

#### 不支持 Symbol() @UTS110111154

错误码：UTS110111154

级别：错误

ts 中的 Symbol() 用于在运行时生成唯一的属性名称。由于该 API 的常见使用场景在静态类型语言中没有意义。

#### 不支持 index signature @UTS110111144

级别：错误

错误码：UTS110111144

不支持 index signature，改用数组或其他集合类型。

TypeScript:

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

UTS:

```ts
class X {
  public f: string[] = ["a", "b", "c"];
}

let myArray: X = new X();
const secondItem = myArray.f[1];
```

#### 不支持声明合并 @UTS110111145

级别：错误

错误码：UTS110111145

不支持类、接口的声明合并。

TypeScript:

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

UTS:

```ts
interface Document {
  createElement(tagName: number): HTMLDivElement;
  createElement(tagName: boolean): HTMLSpanElement;
  createElement(tagName: string, value: number): HTMLCanvasElement;
  createElement(tagName: string): HTMLElement;
  createElement(tagName: Object): Element;
}
```

#### 不支持生成器函数 @UTS110111146

级别：错误

错误码：UTS110111146

不支持生成器函数，使用 async 或 await 机制进行并行任务处理。

TypeScript:

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

UTS:

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

#### 不支持 JSX 表达式 @UTS110111155

级别：错误

错误码：UTS110111155

不支持使用 JSX。

#### 不支持 with 语句 @UTS110111156

级别：错误

错误码：UTS110111156

不支持 with 语句，使用其他语法来表示相同的语义。

TypeScript:

```ts
with (Math) {
  // 编译时错误, 但是仍能生成JavaScript代码
  let r: number = 42;
  let area: number = PI * r * r;
}
```

UTS:

```ts
let r: number = 42;
let area: number = Math.PI * r * r;
```

#### 不支持 globalThis @UTS110111147

级别：错误

错误码：UTS110111147

不支持全局作用域和 globalThis。

TypeScript:

```ts
// 全局文件中
var abc = 100;

// 从上面引用'abc'
let x = globalThis.abc;
```

UTS:

```ts
// file1
export let abc: number = 100;

// file2
import * as M from "file1";

let x = M.abc;
```

## 8. 运算符和表达式

#### 一元运算符+、-和~仅适用于数值类型 @UTS110111148

级别：错误

错误码：UTS110111148

仅允许一元运算符用于数值类型，否则会发生编译时错误。不支持隐式将字符串转换成数值，必须进行显式转换。

TypeScript:

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

UTS:

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

#### 不支持赋值语句返回值

级别：错误

在 uts 中，赋值语句不会返回值，不能将赋值操作用在表达式中。

TypeScript:

```ts
let x, y;
y = (x = 5); // x和y都被赋值为5

// 在条件中使用赋值
let arr = [1, 2, 3];
let item;
while (item = arr.pop()) {
  console.log(item);
}

// 在正则匹配中常用的模式
let regex = /\w+/g;
let text = "hello world";
let match;
while (match = regex.exec(text)) {
  console.log(match[0]);
}
```

UTS:

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

#### 不支持 delete 运算符 @UTS110111149

级别：错误

错误码：UTS110111149

在 uts 中，对象布局在编译时就确定了，且不能在运行时被更改。因此，删除属性的操作没有意义。

#### 逗号运算符仅用在 for 循环语句中 @UTS110111157

级别：错误

错误码：UTS110111157

在 uts 中，逗号运算符仅适用于 for 循环语句中。注意与声明变量、函数参数传递时的逗号分隔符不同。

TypeScript:

```ts
for (let i = 0, j = 0; i < 10; ++i, j += 2) {
  // ...
}

let x = 0;
x = (++x, x++); // 1
```

UTS:

```ts
for (let i = 0, j = 0; i < 10; ++i, j += 2) {
  // ...
}
// 通过语句表示执行顺序，而非逗号运算符
let x = 0;
++x;
x = x++;
```

#### 限制 throw 语句中表达式的类型 @UTS110111158

级别：错误

错误码：UTS110111158

只支持抛出 Error 类或其派生类的实例。禁止抛出其他类型（例如 number 或 string）的数据。

TypeScript:

```ts
throw 4;
throw "";
throw new Error();
```

UTS:

```ts
throw new Error();
```

## 9. 原型和对象操作

#### 不支持在原型上赋值 @UTS110111159

级别：错误

错误码：UTS110111159

uts 没有原型的概念，因此不支持在原型上赋值。此特性不符合静态类型的原则。

TypeScript:

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

UTS:

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
