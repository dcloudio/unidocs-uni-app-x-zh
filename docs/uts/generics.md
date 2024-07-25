# 泛型（Generics）

UTS 支持泛型（Generics）特性，允许您编写更通用、可重用的代码，同时提高类型安全性。

## 定义泛型

泛型使用尖括号 `<>` 声明一个或多个泛型参数。

## 泛型函数

泛型函数的泛型参数定义在函数参数的圆括号之前。

```ts
function test<T>(arg: T): T {
  return arg
}

const str: string = test<string>('a')

const num: number = test<number>(1)
```

## 泛型类

泛型类的泛型参数定义在类名之后。

```ts
class Test<T> {
  value: T
  constructor (value: T) {
    this.value = value
  }
}

const test1: Test<string> = new Test<string>('a')
const str1: string = test1.value

const test2: Test<number> = new Test<number>(1)
const num1: number = test2.value
```

## 泛型接口

泛型接口与泛型类相似，泛型参数定义在接口名之后。

```ts
interface ITest<T> {
  value: T
}

class TestImpl<T> implements ITest<T> {
  value: T
}
```

## 泛型推断

当泛型参数类型与函数的参数类型相关时，泛型参数能够根据函数参数类型自动推断，此时可以省略泛型参数。

```ts
const str1 = test<string>('a')
const str2 = test('a')
```

## 泛型约束

可以使用 `extends` 关键字来限制泛型参数的类型范围。

```ts
function testArray<T extends Array<string>>(arg: T): T {
  return arg
}
```

使用其他泛型类型时，如果不需要限制泛型参数的类型可以使用 `unknown` 关键字表示。

```ts
function testArray<T extends Array<unknown>>(arg: T): T {
  return arg
}
```

## 泛型使用场景示例

- 泛型用法最常用的是在request api里，[详见](../tutorial/request.md)
- 网络请求包装推荐使用成熟的网络拦截器插件，见[插件市场](https://ext.dcloud.net.cn/search?q=%E7%BD%91%E7%BB%9C%E6%8B%A6%E6%88%AA%E5%99%A8&uni-appx=1)


## 注意事项

### 安卓平台使用泛型注意事项

ts本质是擦除类型的。在强类型语言中，传递泛型时如将泛型类型作为值使用，需通过特殊方式将泛型类型作为值使用，可以根据传入来动态决定返回类型。[详见](../plugin/uts-for-android.html#_6-6-%E6%B3%9B%E5%9E%8B%E4%BC%A0%E9%80%92%E4%B8%A2%E5%A4%B1%E7%9A%84%E9%97%AE%E9%A2%98)

### iOS 平台使用泛型注意事项

由于 iOS 平台 uni-app x 中的 uvue 运行在 js 环境中，以及 swift 语法的特殊性，泛型在 iOS 平台上的使用有一定限制和差异。

在 uvue 中使用：
- uvue 中可以正常使用泛型，iOS 平台上 uvue运行在 js 环境中，在 uvue 中的泛型就是 js 泛型。
- 在 uvue 页面中使用的泛型类型传递给 uts 插件使用时，泛型信息会丢失。

在 uts 插件中使用：
- uts 插件中支持使用泛型函数、泛型类、泛型约束、泛型推断。目前仅适合在 uts 插件内部使用，运行在纯 swift 环境中。
- uts 插件中暂不支持泛型接口的定义。
- uts 插件中不能导出泛型函数、泛型类给 js 和其他 uts 插件使用。
  + 说明：因为导出的泛型函数、泛型类不能被反射识别，无法使用。导出泛型函数还可能会导致编译失败。


下面是在 uts 插件内部使用泛型的一些示例代码：

泛型函数和泛型推断示例，泛型用在返回值上：

```ts
// 定义泛型函数
function test1<T>(param: any): T | null {
	if (param instanceof T) {
		return param as T
	}
	return null
}

// 使用：
let str: string | null = test1<string>("12345")
console.log(str)
```

> 特别注意：

> 在 `swift` 中调用泛型函数时不能直接指定泛型类型，只能靠参数或者返回值来进行泛型类型的推断。

> 上述示例代码使用泛型函数时，给变量 `str` 指定了具体类型，这个是必须的，且指定的类型要和泛型函数的返回值是否可选保持一致（泛型函数返回值是 T | null, str 类型就得是 string | null, 否则
> 将会因为推断不出泛型类型导致编译报错。

泛型类和泛型约束示例：

```ts
// 自定义type
type MyResult = {
	name: string
	age: number
}

// 定义泛型类，并指定泛型约束
class TestOption<T extends Decodable> {
	a: string = ""
	b: number = 0
	success?: (res: T) => void
}

// 定义泛型函数
function test2<T extends Decodable>(param: TestOption<T>) {
	
	let str = "{\"name\":\"2024\",\"age\":2}"
	// 这句代码是为了让编译给 MyResult 实现 Decodable 协议，不可省略。后续版本会给出让开发者指定某个 type 遵循 Decodable 协议的方式。
	JSON.parseObject<MyResult>(str)
	
	let ret = JSON.parseObject<T>(str)
	if (ret != null) {
		param.success?.(ret!)
	}   
} 

// 使用：
let p = new TestOption<MyResult>()
p.success = (res: MyResult) => {
	console.log(res)
}
test2<MyResult>(p)
```

> 特别注意：

> 目前版本不支持在自定义 type 上指定泛型，因为在通过字面量创建 type 类型的对象时，泛型信息丢失导致编译失败。这是一个 BUG，我们将在后续版本中进行修复。

