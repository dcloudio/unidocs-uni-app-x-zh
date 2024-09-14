# Date

创建一个 Date 实例，该实例呈现时间中的某个时刻。Date 对象则基于 Unix Time Stamp，即自 1970 年 1 月 1 日（UTC）起经过的毫秒数。

## 语法

```ts
new Date();
new Date(value);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

- 如果没有输入任何参数，则 Date 的构造器会依据系统设置的当前时间来创建一个 Date 对象。
- 如果提供了至少两个参数，其余的参数均会默认设置为 1（如果没有指定 day 参数）或者 0（如果没有指定 day 以外的参数）。
- uts 的时间由世界标准时间（UTC）1970 年 1 月 1 日开始，用毫秒计时，一天由 86,400,000 毫秒组成。Date 对象的范围是 -100,000,000 天至 100,000,000 天（等效的毫秒值）。


目前支持的字符串格式有：

+ Dec 25, 1995
+ 01 Jan 1970 00:00:00 GMT
+ 1995-12-17T03:24:00
+ December 17, 1995 03:24:00
+ December 17, 95 03:24:00
+ March 13, 08 04:20
+ July 20, 69 20:17:40 GMT+00:00
+ December 31, 1975, 23:15:30 GMT+11:00
+ 2023/08/13 12:35:54
+ 1995-02-14
+ 2024-01-09 22:00:00
+ 2024/5/1 (HBuilder X 4.18 Android/Web 支持)
+ 2024/5/1 00:00:00 (HBuilder X 4.18 Android/Web 支持)
+ 2024-05-01 00:00 (HBuilder X 4.18 Android/Web 支持)
+ 2024/05/01 00:00 (HBuilder X 4.18 Android/Web 支持)
+ 2024-5-1 00:00 (HBuilder X 4.18 Android/Web 支持)
+ 2024/5/1 00:00 (HBuilder X 4.18 Android/Web 支持)

::: warning 注意事项

如果Date构造函数传入不合法的字符串，比如：

```ts
let date = new Date("Hello World")
```

在不同的平台的表现有差异:

- web平台

	会抛出异常:`Invalid Date`

- Android/ios平台

	不会抛出异常，会变成程序执行时日期 比如：[Date]‍ Fri May 31 2024 17:18:02 GMT+0800

:::

### new() : Date;@Constructor()

<!-- UTSJSON.Date.Constructor.description -->

<!-- UTSJSON.Date.Constructor.param -->

<!-- UTSJSON.Date.Constructor.returnValue -->

<!-- UTSJSON.Date.Constructor.test -->

<!-- UTSJSON.Date.Constructor.compatibility -->

<!-- UTSJSON.Date.Constructor.tutorial -->

### new(value : number \| string) : Date;@Constructor(value)

<!-- UTSJSON.Date.Constructor_1.description -->

<!-- UTSJSON.Date.Constructor_1.param -->

<!-- UTSJSON.Date.Constructor_1.returnValue -->

<!-- UTSJSON.Date.Constructor_1.test -->

<!-- UTSJSON.Date.Constructor_1.compatibility -->

<!-- UTSJSON.Date.Constructor_1.tutorial -->

### new(year : number, monthIndex : number, date ?: number, hours ?: number, minutes ?: number, seconds ?: number, ms ?: number) : Date;@Constructor(year, monthIndex, date?, hours?, minutes?, seconds?, ms?)

<!-- UTSJSON.Date.Constructor_2.description -->

<!-- UTSJSON.Date.Constructor_2.param -->

<!-- UTSJSON.Date.Constructor_2.returnValue -->

<!-- UTSJSON.Date.Constructor_2.test -->

<!-- UTSJSON.Date.Constructor_2.compatibility -->

<!-- UTSJSON.Date.Constructor_2.tutorial -->


## 静态方法

### now()

<!-- UTSJSON.Date.now.description -->

<!-- UTSJSON.Date.now.param -->

<!-- UTSJSON.Date.now.returnValue -->

<!-- UTSJSON.Date.now.test -->

<!-- UTSJSON.Date.now.compatibility -->

### UTC(year, monthIndex, date?, hours?, minutes?, seconds?, ms?)

<!-- UTSJSON.Date.UTC.description -->

<!-- UTSJSON.Date.UTC.param -->

<!-- UTSJSON.Date.UTC.returnValue -->

<!-- UTSJSON.Date.UTC.test -->

<!-- UTSJSON.Date.UTC.compatibility -->

<!-- UTSJSON.Date.UTC.tutorial -->

## 实例方法


### toString()

<!-- UTSJSON.Date.toString.description -->

<!-- UTSJSON.Date.toString.param -->

<!-- UTSJSON.Date.toString.returnValue -->

<!-- UTSJSON.Date.toString.test -->

<!-- UTSJSON.Date.toString.compatibility -->

### toDateString()

<!-- UTSJSON.Date.toDateString.description -->

<!-- UTSJSON.Date.toDateString.param -->

<!-- UTSJSON.Date.toDateString.returnValue -->

<!-- UTSJSON.Date.toDateString.test -->

<!-- UTSJSON.Date.toDateString.compatibility -->

### toTimeString()

<!-- UTSJSON.Date.toTimeString.description -->

<!-- UTSJSON.Date.toTimeString.param -->

<!-- UTSJSON.Date.toTimeString.returnValue -->

<!-- UTSJSON.Date.toTimeString.test -->

<!-- UTSJSON.Date.toTimeString.compatibility -->

<!-- UTSJSON.Date.toTimeString.tutorial -->

### toLocaleString()

<!-- UTSJSON.Date.toLocaleString.description -->

<!-- UTSJSON.Date.toLocaleString.param -->

<!-- UTSJSON.Date.toLocaleString.returnValue -->

<!-- UTSJSON.Date.toLocaleString.test -->

<!-- UTSJSON.Date.toLocaleString.compatibility -->

<!-- UTSJSON.Date.toLocaleString.tutorial -->

### toLocaleDateString()

<!-- UTSJSON.Date.toLocaleDateString.description -->

<!-- UTSJSON.Date.toLocaleDateString.param -->

<!-- UTSJSON.Date.toLocaleDateString.returnValue -->

<!-- UTSJSON.Date.toLocaleDateString.test -->

<!-- UTSJSON.Date.toLocaleDateString.compatibility -->

<!-- UTSJSON.Date.toLocaleDateString.tutorial -->

### toLocaleTimeString()

<!-- UTSJSON.Date.toLocaleTimeString.description -->

<!-- UTSJSON.Date.toLocaleTimeString.param -->

<!-- UTSJSON.Date.toLocaleTimeString.returnValue -->

<!-- UTSJSON.Date.toLocaleTimeString.test -->

<!-- UTSJSON.Date.toLocaleTimeString.compatibility -->

<!-- UTSJSON.Date.toLocaleTimeString.tutorial -->

### valueOf()

<!-- UTSJSON.Date.valueOf.description -->

<!-- UTSJSON.Date.valueOf.param -->

<!-- UTSJSON.Date.valueOf.returnValue -->

<!-- UTSJSON.Date.valueOf.test -->

<!-- UTSJSON.Date.valueOf.compatibility -->

<!-- UTSJSON.Date.valueOf.tutorial -->

### toISOString()

<!-- UTSJSON.Date.toISOString.description -->

<!-- UTSJSON.Date.toISOString.param -->

<!-- UTSJSON.Date.toISOString.returnValue -->

<!-- UTSJSON.Date.toISOString.test -->

<!-- UTSJSON.Date.toISOString.compatibility -->

### toUTCString()

<!-- UTSJSON.Date.toUTCString.description -->

<!-- UTSJSON.Date.toUTCString.param -->

<!-- UTSJSON.Date.toUTCString.returnValue -->

<!-- UTSJSON.Date.toUTCString.test -->

<!-- UTSJSON.Date.toUTCString.compatibility -->

<!-- UTSJSON.Date.toUTCString.tutorial -->

### toJSON()

<!-- UTSJSON.Date.toJSON.description -->

<!-- UTSJSON.Date.toJSON.param -->

<!-- UTSJSON.Date.toJSON.returnValue -->

<!-- UTSJSON.Date.toJSON.test -->

<!-- UTSJSON.Date.toJSON.compatibility -->

### getTime()

<!-- UTSJSON.Date.getTime.description -->

<!-- UTSJSON.Date.getTime.param -->

<!-- UTSJSON.Date.getTime.returnValue -->

<!-- UTSJSON.Date.getTime.test -->

<!-- UTSJSON.Date.getTime.compatibility -->

### getFullYear()

<!-- UTSJSON.Date.getFullYear.description -->

<!-- UTSJSON.Date.getFullYear.param -->

<!-- UTSJSON.Date.getFullYear.returnValue -->

<!-- UTSJSON.Date.getFullYear.test -->

<!-- UTSJSON.Date.getFullYear.compatibility -->

### getUTCFullYear()

<!-- UTSJSON.Date.getUTCFullYear.description -->

<!-- UTSJSON.Date.getUTCFullYear.param -->

<!-- UTSJSON.Date.getUTCFullYear.returnValue -->

<!-- UTSJSON.Date.getUTCFullYear.test -->

<!-- UTSJSON.Date.getUTCFullYear.compatibility -->

<!-- UTSJSON.Date.getUTCFullYear.tutorial -->

### getMonth()

<!-- UTSJSON.Date.getMonth.description -->

<!-- UTSJSON.Date.getMonth.param -->

<!-- UTSJSON.Date.getMonth.returnValue -->

<!-- UTSJSON.Date.getMonth.test -->

<!-- UTSJSON.Date.getMonth.compatibility -->

### getUTCMonth()

<!-- UTSJSON.Date.getUTCMonth.description -->

<!-- UTSJSON.Date.getUTCMonth.param -->

<!-- UTSJSON.Date.getUTCMonth.returnValue -->

<!-- UTSJSON.Date.getUTCMonth.test -->

<!-- UTSJSON.Date.getUTCMonth.compatibility -->

<!-- UTSJSON.Date.getUTCMonth.tutorial -->

### getDate()

<!-- UTSJSON.Date.getDate.description -->

<!-- UTSJSON.Date.getDate.param -->

<!-- UTSJSON.Date.getDate.returnValue -->

<!-- UTSJSON.Date.getDate.test -->

<!-- UTSJSON.Date.getDate.compatibility -->

### getUTCDate()

<!-- UTSJSON.Date.getUTCDate.description -->

<!-- UTSJSON.Date.getUTCDate.param -->

<!-- UTSJSON.Date.getUTCDate.returnValue -->

<!-- UTSJSON.Date.getUTCDate.test -->

<!-- UTSJSON.Date.getUTCDate.compatibility -->

<!-- UTSJSON.Date.getUTCDate.tutorial -->

### getDay()

<!-- UTSJSON.Date.getDay.description -->

<!-- UTSJSON.Date.getDay.param -->

<!-- UTSJSON.Date.getDay.returnValue -->

<!-- UTSJSON.Date.getDay.test -->

<!-- UTSJSON.Date.getDay.compatibility -->

### getUTCDay()

<!-- UTSJSON.Date.getUTCDay.description -->

<!-- UTSJSON.Date.getUTCDay.param -->

<!-- UTSJSON.Date.getUTCDay.returnValue -->

<!-- UTSJSON.Date.getUTCDay.test -->

<!-- UTSJSON.Date.getUTCDay.compatibility -->

<!-- UTSJSON.Date.getUTCDay.tutorial -->

### getHours()

<!-- UTSJSON.Date.getHours.description -->

<!-- UTSJSON.Date.getHours.param -->

<!-- UTSJSON.Date.getHours.returnValue -->

<!-- UTSJSON.Date.getHours.test -->

<!-- UTSJSON.Date.getHours.compatibility -->

### getUTCHours()

<!-- UTSJSON.Date.getUTCHours.description -->

<!-- UTSJSON.Date.getUTCHours.param -->

<!-- UTSJSON.Date.getUTCHours.returnValue -->

<!-- UTSJSON.Date.getUTCHours.test -->

<!-- UTSJSON.Date.getUTCHours.compatibility -->

<!-- UTSJSON.Date.getUTCHours.tutorial -->

### getMinutes()

<!-- UTSJSON.Date.getMinutes.description -->

<!-- UTSJSON.Date.getMinutes.param -->

<!-- UTSJSON.Date.getMinutes.returnValue -->

<!-- UTSJSON.Date.getMinutes.test -->

<!-- UTSJSON.Date.getMinutes.compatibility -->

### getUTCMinutes()

<!-- UTSJSON.Date.getUTCMinutes.description -->

<!-- UTSJSON.Date.getUTCMinutes.param -->

<!-- UTSJSON.Date.getUTCMinutes.returnValue -->

<!-- UTSJSON.Date.getUTCMinutes.test -->

<!-- UTSJSON.Date.getUTCMinutes.compatibility -->

<!-- UTSJSON.Date.getUTCMinutes.tutorial -->

### getSeconds()

<!-- UTSJSON.Date.getSeconds.description -->

<!-- UTSJSON.Date.getSeconds.param -->

<!-- UTSJSON.Date.getSeconds.returnValue -->

<!-- UTSJSON.Date.getSeconds.test -->

<!-- UTSJSON.Date.getSeconds.compatibility -->

### getUTCSeconds()

<!-- UTSJSON.Date.getUTCSeconds.description -->

<!-- UTSJSON.Date.getUTCSeconds.param -->

<!-- UTSJSON.Date.getUTCSeconds.returnValue -->

<!-- UTSJSON.Date.getUTCSeconds.test -->

<!-- UTSJSON.Date.getUTCSeconds.compatibility -->

<!-- UTSJSON.Date.getUTCSeconds.tutorial -->

### setTime(time)

<!-- UTSJSON.Date.setTime.description -->

<!-- UTSJSON.Date.setTime.param -->

<!-- UTSJSON.Date.setTime.returnValue -->

<!-- UTSJSON.Date.setTime.test -->

<!-- UTSJSON.Date.setTime.compatibility -->

### setMilliseconds(ms)

<!-- UTSJSON.Date.setMilliseconds.description -->

<!-- UTSJSON.Date.setMilliseconds.param -->

<!-- UTSJSON.Date.setMilliseconds.returnValue -->

<!-- UTSJSON.Date.setMilliseconds.test -->

<!-- UTSJSON.Date.setMilliseconds.compatibility -->

### setUTCMilliseconds(ms)

<!-- UTSJSON.Date.setUTCMilliseconds.description -->

<!-- UTSJSON.Date.setUTCMilliseconds.param -->

<!-- UTSJSON.Date.setUTCMilliseconds.returnValue -->

<!-- UTSJSON.Date.setUTCMilliseconds.test -->

<!-- UTSJSON.Date.setUTCMilliseconds.compatibility -->

<!-- UTSJSON.Date.setUTCMilliseconds.tutorial -->

### setSeconds(sec)

<!-- UTSJSON.Date.setSeconds.description -->

<!-- UTSJSON.Date.setSeconds.param -->

<!-- UTSJSON.Date.setSeconds.returnValue -->

<!-- UTSJSON.Date.setSeconds.test -->

<!-- UTSJSON.Date.setSeconds.compatibility -->

### setUTCSeconds(sec)

<!-- UTSJSON.Date.setUTCSeconds.description -->

<!-- UTSJSON.Date.setUTCSeconds.param -->

<!-- UTSJSON.Date.setUTCSeconds.returnValue -->

<!-- UTSJSON.Date.setUTCSeconds.test -->

<!-- UTSJSON.Date.setUTCSeconds.compatibility -->

<!-- UTSJSON.Date.setUTCSeconds.tutorial -->

### setMinutes(min)

<!-- UTSJSON.Date.setMinutes.description -->

<!-- UTSJSON.Date.setMinutes.param -->

<!-- UTSJSON.Date.setMinutes.returnValue -->

<!-- UTSJSON.Date.setMinutes.test -->

<!-- UTSJSON.Date.setMinutes.compatibility -->

### setUTCMinutes(min)

<!-- UTSJSON.Date.setUTCMinutes.description -->

<!-- UTSJSON.Date.setUTCMinutes.param -->

<!-- UTSJSON.Date.setUTCMinutes.returnValue -->

<!-- UTSJSON.Date.setUTCMinutes.test -->

<!-- UTSJSON.Date.setUTCMinutes.compatibility -->

<!-- UTSJSON.Date.setUTCMinutes.tutorial -->

### setHours(hours)

<!-- UTSJSON.Date.setHours.description -->

<!-- UTSJSON.Date.setHours.param -->

<!-- UTSJSON.Date.setHours.returnValue -->

<!-- UTSJSON.Date.setHours.test -->

<!-- UTSJSON.Date.setHours.compatibility -->

### setUTCHours(hours)

<!-- UTSJSON.Date.setUTCHours.description -->

<!-- UTSJSON.Date.setUTCHours.param -->

<!-- UTSJSON.Date.setUTCHours.returnValue -->

<!-- UTSJSON.Date.setUTCHours.test -->

<!-- UTSJSON.Date.setUTCHours.compatibility -->

<!-- UTSJSON.Date.setUTCHours.tutorial -->

### setDate(date)

<!-- UTSJSON.Date.setDate.description -->

<!-- UTSJSON.Date.setDate.param -->

<!-- UTSJSON.Date.setDate.returnValue -->

<!-- UTSJSON.Date.setDate.test -->

<!-- UTSJSON.Date.setDate.compatibility -->

### setUTCDate(date)

<!-- UTSJSON.Date.setUTCDate.description -->

<!-- UTSJSON.Date.setUTCDate.param -->

<!-- UTSJSON.Date.setUTCDate.returnValue -->

<!-- UTSJSON.Date.setUTCDate.test -->

<!-- UTSJSON.Date.setUTCDate.compatibility -->

<!-- UTSJSON.Date.setUTCDate.tutorial -->

### setMonth(month)

<!-- UTSJSON.Date.setMonth.description -->

<!-- UTSJSON.Date.setMonth.param -->

<!-- UTSJSON.Date.setMonth.returnValue -->

<!-- UTSJSON.Date.setMonth.test -->

<!-- UTSJSON.Date.setMonth.compatibility -->

### setUTCMonth(month)

<!-- UTSJSON.Date.setUTCMonth.description -->

<!-- UTSJSON.Date.setUTCMonth.param -->

<!-- UTSJSON.Date.setUTCMonth.returnValue -->

<!-- UTSJSON.Date.setUTCMonth.test -->

<!-- UTSJSON.Date.setUTCMonth.compatibility -->

<!-- UTSJSON.Date.setUTCMonth.tutorial -->

### setFullYear(year)

各个平台在处理时间戳为负数时会有细节差异，尽量避免 参数小于1970的情况

<!-- UTSJSON.Date.setFullYear.description -->

<!-- UTSJSON.Date.setFullYear.param -->

<!-- UTSJSON.Date.setFullYear.returnValue -->

<!-- UTSJSON.Date.setFullYear.test -->

<!-- UTSJSON.Date.setFullYear.compatibility -->


### setUTCFullYear(year)

<!-- UTSJSON.Date.setUTCFullYear.description -->

<!-- UTSJSON.Date.setUTCFullYear.param -->

<!-- UTSJSON.Date.setUTCFullYear.returnValue -->

<!-- UTSJSON.Date.setUTCFullYear.test -->

<!-- UTSJSON.Date.setUTCFullYear.compatibility -->

<!-- UTSJSON.Date.setUTCFullYear.tutorial -->

### parse(s)

<!-- UTSJSON.Date.parse.description -->

<!-- UTSJSON.Date.parse.param -->

<!-- UTSJSON.Date.parse.returnValue -->

<!-- UTSJSON.Date.parse.test -->

<!-- UTSJSON.Date.parse.compatibility -->

<!-- UTSJSON.Date.tutorial -->

## Android 平台方法

* 目前 Date 类型编译到 `kotlin` 为 `io.dcloud.uts.Date`


::: preview

> UTS

```ts
let utsDate = new Date("1991-02-03")

// UTS Date 转换 java Date
let javaDate = new java.util.Date()
javaDate.time = utsDate.getTime().toLong()
// Sun Feb 03 1991 08:00:00 GMT+0800
console.log(javaDate)
// java date 转 UTS Date
let nextUTSDate = new Date(javaDate.time)
// Sun Feb 03 1991 08:00:00 GMT+0800
console.log(nextUTSDate)
```

> Kotlin

```kotlin
val utsDate = Date("1991-02-03")
// UTS Date 转换 java Date
val javaDate = java.util.Date()
javaDate.time = utsDate.getTime().toLong()
// Sun Feb 03 1991 08:00:00 GMT+0800
console.log(javaDate)
// java date 转 UTS Date
val nextUTSDate = Date(javaDate.time)
// Sun Feb 03 1991 08:00:00 GMT+0800
console.log(nextUTSDate)
```

:::
