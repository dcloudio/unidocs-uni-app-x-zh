## 背景

#### Web开发

web开发场景下，存在以下两种访问对象内部变量的方式：

+ 可枚举

ECMAScript 1999：开始支持 for...in 主要用于遍历对象的属性，迭代的是对象的所有可枚举属性（包括原型链中的属性）。

+ 可迭代

ECMAScript 2015：开始支持 for...of 主要用于遍历可迭代的数据结构（如数组、字符串、Set、Map 等），迭代的是集合中的每一个元素的值。它不会遍历对象的属性。



#### 原生开发

在原生开发场景下 `Kotlin`和`swift` 均仅支持了 for..in 语法，不支持 for..of 语法

但原生的 for..in 的用法，与web 存在一定的差异。实际上对应的是web中的可迭代概念


各平台支持信息：

|平台   |可迭代|可枚举|
|---   |------|-----|
|web   |支持（ECMAScript-2015）|支持(ECMAScript-1999)|
|kotlin|支持|不支持|
|swift |支持|不支持|

各平台实现关键字：

|平台   |可迭代|可枚举|
|---   |------|-----|
|web   |for..of|for..in|
|kotlin|for..in|不支持|
|swift |for..in|不支持|


比如下面的代码

```typescript
let a1 = [111,"222",false]

for(perItem in a1){
	console.log("perItem",perItem)
}

```
Android 执行结果是
```typescript
perItem ‍[number]‍ 111
perItem 222
perItem [boolean] false
```

Web 执行结果是
```typescript
"perItem" "0"
"perItem" "1"
"perItem" "2"
```





## 概述


在HBuilderX 4.41版本之前，UTS并未对 for..in / for ..of 做特殊处理：


+ 开发者调用 for..in 会触发 kotlin / swift 原生语言内置的规则，可以运行，但执行效果与web 存在一定的差异

+ 开发者调用 for..of 会编译报错，无法使用



从HBuilderX 4.41开始，UTS语言 支持了[可迭代协议](https://issues.dcloud.net.cn/pages/issues/detail?id=6511)

[可迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) 是标准web中存在的概念，UTS以web为标准，保证了可迭代协议行为(即for..of)的的全端一致，并开放了可迭代协议的扩展能力。


也就是说，在HBuilderX 4.41之后版本，UTS内置的for..of 语法执行效果与web标准一致。


```ts
let a1 = [111,"222",false]

for(perItem of a1){
	console.log("perItem",perItem)
}
```

上面的代码在 HBuilderX 4.41 之前版本在 android /ios 会编译报错，在HBuilderX 4.41 之后，全端执行效果如下：

```ts
"perItem" 111
"perItem" "222"
"perItem" false
```


对于可枚举协议（for..in） 出于历史代码的兼容性原因，HBuilderX 4.41之后与之前版本保持一致，即 各平台的运行依然存在差异。


单从访问对象内部属性的角度。我们认为，可迭代是一种更现代化语法，建议开发者通过 for..of 来实现对对象内部属性的遍历。

下面的章节我们会具体介绍UTS对 for..of 的支持情况


## for..of

可迭代协议最直接的应用场景就是 for..of 运算符,原则上来说在 4.41之后的HX版本：，android/ios/web 的for..of运算符执行效果以web为基准是一致的。

下面列出具体的UTS内置对象对for..of的支持情况


#### Set / Array

类似Set/Array 这样的一维数据容器，会遍历内部属性值

```typescript
let u1 = new Set<any>()
u1.add("111")
u1.add("222")
for (item of u1) {
	console.log("item",item)
}
```

执行结果

```typescript
> item 111
> item 222
```

#### Map

Map 的遍历会将其key,value 封装为一个新的Array 数组

```typescript
let u1 = new Map<string,any>()
u1.put("aaa","111")
u1.put("bbb","222")
for (item of u1) {
	console.log("item",item)
}
```

执行结果

```typescript
> ‍[Array]‍ [ "aaa", "111" ]
> [Array]‍ [ "bbb", "222" ]
```

#### string

会遍历string 的每一个字符

```typescript
let a = "123456"
	for(item of a ){
	  console.log(item)
	}
},
```

执行结果

```typescript
> "0"
> "1"
> "2"
> "3"
> "4"
> "5"
```


#### number / Date / RegExp / Error / UTSJSONObject / 自定义的type类型 / 自定义class

不支持，编译报错

```typescript
For-loop range must have an 'iterator()' method‌
```



需要特别说明的是  自定义的type类型 / 自定义class  如果直接使用 for of 会运行报错，但是有些场景我们需要赋予自定义class 循环访问自身的能力。

这是下一个章节要介绍的内容


## 进阶： 定制可迭代对象

在web开发中，可迭代和可枚举并不仅仅是简单的对应了 for..in 和 for..of 语法。 还是对遍历对象内部元素的一种约定。UTS同样支持了这种能力。

在HBuilder X 4.42 之后版本，UTS语言内置了：  `UTSValueIterable` 接口，用来支持自定义对象的可迭代规则。

当开发者手动实现 `UTSValueIterable` 接口时，就可以实现定制其实例对象在 for..of 的规则

举例：

```typescript
class TestClass  {
	holderArray: (any | null)[] = [11, 22, null, 33, 44, null]
}

let test = new TestClass()

for (item of test) {
  console.log("item",item)
}
```

该class对应的实例 并不支持 for..of 语法，如果使用下面的代码调用会触发报错：
 
>  ‌error: For-loop range must have an 'iterator()' method‌

在HBuilder X 4.41之后版本，如果我们想让这个对象的示例，支持for..of 语法，可以修改为如下代码:

```typescript
class TestClass implements UTSValueIterable<any | null> {
	
	holderArray: (any | null)[] = [11, 22, null, 33, 44, null]
	
	valueIterator(): UTSIterator<any | null> {
		let holderIndex = 0;
		let obj: UTSIterator<any | null> = {

			next: () : UTSIteratorResult<any | null> => {
          return {
            done: holderIndex == this.holderArray.length - 1,
            value: this.holderArray[holderIndex++],
          } as UTSIteratorResult<any | null>
			}
		}
		return obj
	}
	
}
```
执行结果:

```typescript
item ‍[number]‍ 11
item ‍[number]‍ 22
item null
item ‍[number]‍ 33
item ‍[number]‍ 44
item null
```

`UTSValueIterable` 接口 仅存在一个待实现函数`valueIterator`,该函数返回值是 `UTSIterator` 类型与web中[Iterator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)类似。

开发者需要关心是`UTSIterator`中的 `next` 函数实现，`next`函数返回一个 `UTSIteratorResult` 该数据结构为done和value

与web的[迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#%E8%BF%AD%E4%BB%A3%E5%99%A8%E5%8D%8F%E8%AE%AE)一样，该数据结构中的 done 决定了是否可以继续迭代，value 对应当前迭代的具体数值。


如果我们希望在使用者for..of 时仅能遍历出非空的数值，我们可以这样实现


```typescript
class TestClass implements UTSValueIterable<any | null> {
	
	holderArray: (any | null)[] = [11, 22, null, 33, 44, null]
  
	valueIterator(): UTSIterator<any | null> {
		let holderIndex = 0;
		let obj: UTSIterator<any | null> = {

			next: () : UTSIteratorResult<any | null> => {
				
				let currentVal = this.holderArray[holderIndex++]
				while(currentVal == null ){
					if(holderIndex == this.holderArray.length - 1){
						break;
					}
					currentVal = this.holderArray[holderIndex++]
				}
        return {
          done: holderIndex == this.holderArray.length - 1,
          value: currentVal,
        } as UTSIteratorResult<any | null>
			}
		}
		return obj
	}
}

```

执行结果:
```typescript
item ‍[number]‍ 11
item ‍[number]‍ 22
item ‍[number]‍ 33
item ‍[number]‍ 44
```




## 可枚举

暂不支持








