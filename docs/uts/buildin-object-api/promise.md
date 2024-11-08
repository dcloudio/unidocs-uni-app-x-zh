# Promise

Promise 对象表示异步操作最终的完成（或失败）以及其结果值。

### Constructor(fn)

<!-- UTSJSON.Promise.Constructor.description -->

<!-- UTSJSON.Promise.Constructor.param -->

<!-- UTSJSON.Promise.Constructor.returnValue -->

<!-- UTSJSON.Promise.Constructor.test -->

<!-- UTSJSON.Promise.Constructor.compatibility -->

### Constructor(fn)

<!-- UTSJSON.Promise.Constructor_1.description -->

<!-- UTSJSON.Promise.Constructor_1.param -->

<!-- UTSJSON.Promise.Constructor_1.returnValue -->

<!-- UTSJSON.Promise.Constructor_1.test -->

<!-- UTSJSON.Promise.Constructor_1.compatibility -->

## 实例方法


### then()

<!-- UTSJSON.Promise.then.description -->

<!-- UTSJSON.Promise.then.param -->

<!-- UTSJSON.Promise.then.returnValue -->

<!-- UTSJSON.Promise.then.test -->

<!-- UTSJSON.Promise.then.compatibility -->

### then(onFulfilled, onRejected?)

<!-- UTSJSON.Promise.then_1.description -->

<!-- UTSJSON.Promise.then_1.param -->

<!-- UTSJSON.Promise.then_1.returnValue -->

<!-- UTSJSON.Promise.then_1.test -->

<!-- UTSJSON.Promise.then_1.compatibility -->

### then(onFulfilled, onRejected?)

<!-- UTSJSON.Promise.then_2.description -->

<!-- UTSJSON.Promise.then_2.param -->

<!-- UTSJSON.Promise.then_2.returnValue -->

<!-- UTSJSON.Promise.then_2.test -->

<!-- UTSJSON.Promise.then_2.compatibility -->

### then(onFulfilled, onRejected?)

<!-- UTSJSON.Promise.then_3.description -->

<!-- UTSJSON.Promise.then_3.param -->

<!-- UTSJSON.Promise.then_3.returnValue -->

<!-- UTSJSON.Promise.then_3.test -->

<!-- UTSJSON.Promise.then_3.compatibility -->

### then(onFulfilled, onRejected?)

<!-- UTSJSON.Promise.then_4.description -->

<!-- UTSJSON.Promise.then_4.param -->

<!-- UTSJSON.Promise.then_4.returnValue -->

<!-- UTSJSON.Promise.then_4.test -->

<!-- UTSJSON.Promise.then_4.compatibility -->

### catch()

<!-- UTSJSON.Promise.catch.description -->

<!-- UTSJSON.Promise.catch.param -->

<!-- UTSJSON.Promise.catch.returnValue -->

<!-- UTSJSON.Promise.catch.test -->

<!-- UTSJSON.Promise.catch.compatibility -->

### catch(onRejected)

<!-- UTSJSON.Promise.catch_1.description -->

<!-- UTSJSON.Promise.catch_1.param -->

<!-- UTSJSON.Promise.catch_1.returnValue -->

<!-- UTSJSON.Promise.catch_1.test -->

<!-- UTSJSON.Promise.catch_1.compatibility -->

### catch(onRejected)

<!-- UTSJSON.Promise.catch_2.description -->

<!-- UTSJSON.Promise.catch_2.param -->

<!-- UTSJSON.Promise.catch_2.returnValue -->

<!-- UTSJSON.Promise.catch_2.test -->

<!-- UTSJSON.Promise.catch_2.compatibility -->

### catch(onRejected)

<!-- UTSJSON.Promise.catch_3.description -->

<!-- UTSJSON.Promise.catch_3.param -->

<!-- UTSJSON.Promise.catch_3.returnValue -->

<!-- UTSJSON.Promise.catch_3.test -->

<!-- UTSJSON.Promise.catch_3.compatibility -->

### catch(onRejected)

<!-- UTSJSON.Promise.catch_4.description -->

<!-- UTSJSON.Promise.catch_4.param -->

<!-- UTSJSON.Promise.catch_4.returnValue -->

<!-- UTSJSON.Promise.catch_4.test -->

<!-- UTSJSON.Promise.catch_4.compatibility -->

### finally(callback)

<!-- UTSJSON.Promise.finally.description -->

<!-- UTSJSON.Promise.finally.param -->

<!-- UTSJSON.Promise.finally.returnValue -->

<!-- UTSJSON.Promise.finally.test -->

<!-- UTSJSON.Promise.finally.compatibility -->

### resolve()

<!-- UTSJSON.Promise.resolve.description -->

<!-- UTSJSON.Promise.resolve.param -->

<!-- UTSJSON.Promise.resolve.returnValue -->

<!-- UTSJSON.Promise.resolve.test -->

<!-- UTSJSON.Promise.resolve.compatibility -->

### resolve(value)

<!-- UTSJSON.Promise.resolve_1.description -->

<!-- UTSJSON.Promise.resolve_1.param -->

<!-- UTSJSON.Promise.resolve_1.returnValue -->

<!-- UTSJSON.Promise.resolve_1.test -->

<!-- UTSJSON.Promise.resolve_1.compatibility -->

### resolve(value)

<!-- UTSJSON.Promise.resolve_2.description -->

<!-- UTSJSON.Promise.resolve_2.param -->

<!-- UTSJSON.Promise.resolve_2.returnValue -->

<!-- UTSJSON.Promise.resolve_2.test -->

<!-- UTSJSON.Promise.resolve_2.compatibility -->

### reject(value?)

<!-- UTSJSON.Promise.reject.description -->

<!-- UTSJSON.Promise.reject.param -->

<!-- UTSJSON.Promise.reject.returnValue -->

<!-- UTSJSON.Promise.reject.test -->

<!-- UTSJSON.Promise.reject.compatibility -->

### all(arr)

<!-- UTSJSON.Promise.all.description -->

<!-- UTSJSON.Promise.all.param -->

<!-- UTSJSON.Promise.all.returnValue -->

<!-- UTSJSON.Promise.all.test -->

<!-- UTSJSON.Promise.all.compatibility -->

### race(arr)

<!-- UTSJSON.Promise.race.description -->

<!-- UTSJSON.Promise.race.param -->

<!-- UTSJSON.Promise.race.returnValue -->

<!-- UTSJSON.Promise.race.test -->

<!-- UTSJSON.Promise.race.compatibility -->

### any(arr)

<!-- UTSJSON.Promise.any.description -->

<!-- UTSJSON.Promise.any.param -->

<!-- UTSJSON.Promise.any.returnValue -->

<!-- UTSJSON.Promise.any.test -->

<!-- UTSJSON.Promise.any.compatibility -->

### allSettled(arr)

<!-- UTSJSON.Promise.allSettled.description -->

<!-- UTSJSON.Promise.allSettled.param -->

<!-- UTSJSON.Promise.allSettled.returnValue -->

<!-- UTSJSON.Promise.allSettled.test -->

<!-- UTSJSON.Promise.allSettled.compatibility -->

<!-- UTSJSON.Promise.tutorial -->

## Bug & Tips@tips

* 目前 Promise 类型编译到 kotlin 为 io.dcloud.uts.UTSPromise
* 自 HBuilder X 4.31 版本起支持编译到 swift。在 swift 中编译为 UTSPromise。在uvue里因为iOS默认js驱动所以可以使用Promise，没有 4.31 版本的限制。
