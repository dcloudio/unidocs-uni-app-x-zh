## 可枚举和可迭代的平台差异

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


Web 执行结果是
```typescript
"perItem" "0"
"perItem" "1"
"perItem" "2"
```

Android 执行结果是
```typescript
perItem ‍[number]‍ 111
perItem 222
perItem [boolean] false
```




