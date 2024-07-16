## uts for harmonyOS

本文旨在帮助 harmonyOS 开发者，快速上手 UTS。注意目前编译到鸿蒙时uts仅能编写uts api，uni-app-x项目不支持编译到harmonyOS。

## 1 了解 UTS 插件是什么

UTS 插件是 uni-app 新型插件形式 [详情](/plugin/uts-plugin)

uts插件在编译到harmonyOS端时会被编译成ArkTs代码。因此编写代码时应注意遵循uts规范+ets规范。

## 2 掌握UTS语法及ArkTs语法

无论是uts还是arkTs都是在ts的语法基础上进行扩展来的。建议先阅读如下文档

- [typescript官方文档](https://www.typescriptlang.org/zh/docs/)
- [uts语法](https://doc.dcloud.net.cn/uni-app-x/uts/)
- [AtkTs约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide-0000001820879565)

## 3 harmonyOS 原生环境配置

- 参考：[uni-app 开发鸿蒙应用](https://uniapp.dcloud.net.cn/tutorial/harmony/dev.html)

## 4 ArkTs 与 UTS 差异重点介绍 (持续更新)

### 类型差异

#### any类型

ArkTs内不能使用any类型，但是uts内any用处比较多，因此在编译为ArkTs时，any类型被转为了ESObject这个ArkTs特有的类型。

#### 对象字面量

ArkTs不允许无类型的对象字面量，编写代码时应注意为对象字面量指定类型

```ts
// 错误用法
const obj = {
  a: 1
}

// 正确用法
interface Obj {
  a: number
}
const obj: Obj = {
  a: 1
}
const obj = {
  a: 1
} as Obj
```

## 5 常见问题

### context的获取

很多鸿蒙原生接口需要传入context作为参数。多数情况下可以直接调用鸿蒙全局方法`getContext()`获取。例如：

```ts
import settings from '@ohos.settings';
const context: Context =  getContext();
settings.getValue(context, settings.display.SCREEN_BRIGHTNESS_STATUS, (err, value) => {
  if (err) {
    console.error(`Failed to get the setting. ${err.message} `);
    return;
  }
  console.log(`SCREEN_BRIGHTNESS_STATUS: ${JSON.stringify(value)}`)
});
```