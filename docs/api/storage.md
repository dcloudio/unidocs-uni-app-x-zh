## key-value本地数据存储

app、小程序、web，均提供了方便的key-value模式的本地数据存储，通过键值对的方式存取数据。

uni-app的Storage在不同端的实现不同：
- H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理
- App端为原生storage，无大小限制，不是缓存，是持久化的
	* `Android` 端采用应用内SQLite数据库储存，储存位置为：/data/data/io.dcloud.uniappx(基座包名)/databases/DCStorage。
	* 真机运行基座下多个应用之间的storage是隔离的，同基座内的不同应用，对应一个数据库文件，但以表名区分。
- 各个小程序端为其自带的storage api，数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。
	* 微信小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
	* 支付宝小程序单条数据转换成字符串后，字符串长度最大200*1024。同一个支付宝用户，同一个小程序缓存总上限为10MB。
	* 百度小程序策略[详见](https://smartprogram.baidu.com/docs/develop/api/storage/save_process/)
	* 抖音小程序策略[详见](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/data-caching/tt-get-storage)

**注意**
- `uni-`、`uni_`、`dcloud-`、`dcloud_`为前缀的key，为系统保留关键前缀。如`uni_deviceId`、`uni_id_token`，请开发者为key命名时避开这些前缀。
- 非App平台清空Storage会导致 uni.getSystemInfo/getDeviceInfo 获取到的deviceId改变

## uni.setStorage(options) @setstorage

<!-- UTSAPIJSON.setStorage.description -->

<!-- UTSAPIJSON.setStorage.compatibility -->

<!-- UTSAPIJSON.setStorage.param -->

<!-- UTSAPIJSON.setStorage.returnValue -->

<!-- UTSAPIJSON.setStorage.example -->

<!-- UTSAPIJSON.setStorage.tutorial -->

## uni.setStorageSync(key, data) @setstoragesync

<!-- UTSAPIJSON.setStorageSync.description -->

<!-- UTSAPIJSON.setStorageSync.compatibility -->

<!-- UTSAPIJSON.setStorageSync.param -->

:::warning
参数 `data` 为对象字面量时，需要通过 `as UTSJSONObject` 明确类型，例如：
```js
uni.setStorageSync('obj', {"a": 1} as UTSJSONObject)
```
:::

<!-- UTSAPIJSON.setStorageSync.returnValue -->

<!-- UTSAPIJSON.setStorageSync.example -->

<!-- UTSAPIJSON.setStorageSync.tutorial -->

## uni.getStorage(options) @getstorage

<!-- UTSAPIJSON.getStorage.description -->

<!-- UTSAPIJSON.getStorage.compatibility -->

<!-- UTSAPIJSON.getStorage.param -->

<!-- UTSAPIJSON.getStorage.returnValue -->

**注意：**

getStorageSync的返回值类型为any。因为set的时候任意类型都可以set进去。

使用any类型的数据需要as为正确的类型，才能调用类型上的方法。

对于简单类型，如string，只需要 as string。但对于复杂类型，比如 UTSJSONObject、type、class，需要参考获取复杂类型的数据章节，[见下](#gettypedata)

> 注意：获取一个不存在的 key 会触发 fail 回调，返回错误信息为 "getStorage:fail data not found" 的错误。

<!-- UTSAPIJSON.getStorage.example -->

<!-- UTSAPIJSON.getStorage.tutorial -->

## uni.getStorageSync(key) @getstoragesync

<!-- UTSAPIJSON.getStorageSync.description -->

<!-- UTSAPIJSON.getStorageSync.compatibility -->

<!-- UTSAPIJSON.getStorageSync.param -->

<!-- UTSAPIJSON.getStorageSync.returnValue -->

**注意：**

getStorageSync的返回值类型为any。因为set的时候任意类型都可以set进去。

使用any类型的数据需要as为正确的类型，才能调用类型上的方法。

对于简单类型，如string，只需要 as string。但对于复杂类型，比如 UTSJSONObject、type、class，需要参考获取复杂类型的数据章节，[见下](#gettypedata)

另注意，同步方法获取一个不存在的 key 会返回空字符串，而不是 null。如需准确判断是空字符串还是null，应该使用异步方法`uni.getStorage`。

获取较大量的数据时，也推荐使用异步方法`uni.getStorage`，避免同步阻塞。

<!-- UTSAPIJSON.getStorageSync.example -->

<!-- UTSAPIJSON.getStorageSync.tutorial -->

## uni.getStorageInfo(options) @getstorageinfo

<!-- UTSAPIJSON.getStorageInfo.description -->

<!-- UTSAPIJSON.getStorageInfo.compatibility -->

<!-- UTSAPIJSON.getStorageInfo.param -->

<!-- UTSAPIJSON.getStorageInfo.returnValue -->

<!-- UTSAPIJSON.getStorageInfo.example -->

<!-- UTSAPIJSON.getStorageInfo.tutorial -->

## uni.getStorageInfoSync() @getstorageinfosync

<!-- UTSAPIJSON.getStorageInfoSync.description -->

<!-- UTSAPIJSON.getStorageInfoSync.compatibility -->

<!-- UTSAPIJSON.getStorageInfoSync.param -->

<!-- UTSAPIJSON.getStorageInfoSync.returnValue -->

<!-- UTSAPIJSON.getStorageInfoSync.example -->

<!-- UTSAPIJSON.getStorageInfoSync.tutorial -->

## uni.removeStorage(options) @removestorage

<!-- UTSAPIJSON.removeStorage.description -->

<!-- UTSAPIJSON.removeStorage.compatibility -->

<!-- UTSAPIJSON.removeStorage.param -->

<!-- UTSAPIJSON.removeStorage.returnValue -->

<!-- UTSAPIJSON.removeStorage.example -->

<!-- UTSAPIJSON.removeStorage.tutorial -->

## uni.removeStorageSync(key) @removestoragesync

<!-- UTSAPIJSON.removeStorageSync.description -->

<!-- UTSAPIJSON.removeStorageSync.compatibility -->

<!-- UTSAPIJSON.removeStorageSync.param -->

<!-- UTSAPIJSON.removeStorageSync.returnValue -->

<!-- UTSAPIJSON.removeStorageSync.example -->

<!-- UTSAPIJSON.removeStorageSync.tutorial -->

## uni.clearStorage(option?) @clearstorage

<!-- UTSAPIJSON.clearStorage.description -->

<!-- UTSAPIJSON.clearStorage.compatibility -->

<!-- UTSAPIJSON.clearStorage.param -->

<!-- UTSAPIJSON.clearStorage.returnValue -->

<!-- UTSAPIJSON.clearStorage.example -->

<!-- UTSAPIJSON.clearStorage.tutorial -->

## uni.clearStorageSync() @clearstoragesync

<!-- UTSAPIJSON.clearStorageSync.description -->

<!-- UTSAPIJSON.clearStorageSync.compatibility -->

<!-- UTSAPIJSON.clearStorageSync.param -->

<!-- UTSAPIJSON.clearStorageSync.returnValue -->

<!-- UTSAPIJSON.clearStorageSync.example -->

<!-- UTSAPIJSON.clearStorageSync.tutorial -->

<!-- UTSAPIJSON.storage.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## 类型数据的存取说明@gettypedata

首先明确一个原则，Storage实际储存到各终端文件系统的是**序列化后的数据**。 

也就是当我们使用setStorage/setStorageSync 储存一个带类型的数据时，插件内部会自动将其序列化为字符串后进行储存。当我们调用 getStorage/getStorageSync 插件内部也会尝试对字符串进行类型还原，分为以下几种情况：


#### UTSJSONObject

如果是`UTSJSONObject` 类型，不会有类型的丢失

```ts
let json1 = {
	id:1001,
	name:"jack"
}

uni.setStorageSync("test-json",json1)
let json2 = uni.getStorageSync("test-json")
// json2 ‍[⁠UTSJSONObject⁠]‍ {id: 1001, name: "jack"}
console.log("json2",json2)
```

#### type类型

如果是type类型，可以正常写入，但是当读取时得到是是UTSJSONObject类型，需要进行类型转换。


```ts
type User = {
	name:string,
	age:number
}
let u1 = {
	name : "张三",
	age:123
}
uni.setStorageSync("test-a",u1)
uni.getStorage({
	key:'test-a',
	success:function(res:GetStorageSuccess){
		// 此时只能得到的UTSJSONObject类型
		let jsonObject = res.data
		// 再次进行类型转换
		let userObject = JSON.parse<User>(JSON.stringify(jsonObject))
		// jsonObject ‍[⁠UTSJSONObject⁠]‍ {age: 123, name: "张三"}
		console.log("jsonObject",jsonObject)
		// userObject ‍[⁠User⁠]‍ {age: 123, name: "张三"}
		console.log("userObject",userObject)
	}
})
```

#### 自定义class

还有一种情况，如果开发者使用class而非type定义类型，默认情况下无法读写的。

> 大多数情况下，我们更推荐使用type,而不是自定义class。 因为自定义class的行为在不同终端可能表现不一致。


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
console.log(alice.greet()); // "Hello, I'm Alice and I'm 30 years old."

uni.setStorageSync("test-class-0",alice)
let dataObj = uni.getStorageSync("test-class-0")
// 此时只能得到空的UTSJSONObject {}
console.log("data",dataObj)
```

如果要支持读写，开发者需要实现 `IJSONStringify`接口。关于IJSONStringify的[更多介绍](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/json.html)

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
console.log(alice.greet()); // "Hello, I'm Alice and I'm 30 years old."

uni.setStorageSync("test-class-0",alice)
let dataObj = uni.getStorageSync("test-class-0")
// [⁠UTSJSONObject⁠]‍ {name: "Alice", age: 30}
console.log("dataObj",dataObj)
//  ‍[⁠Person⁠]‍ {age: 30, name: "Alice"}
let personObj = JSON.parse<Person>(JSON.stringify(dataObj))
console.log("personObj",personObj)

```

此时，我们就可以让自定义class实现类似自定义type的效果了。


