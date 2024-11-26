## uts for harmonyOS

鸿蒙系统有很多原生API，这些API通过ArkTS来调用。

由于uts可以编译为ArkTS，所以uts可以调用鸿蒙的所有原生API。

如需在uni-app中使用，就需要把鸿蒙的原生API封装为uts插件，然后在uni-app中使用。

这些uts插件，是同时兼容uni-app和uni-app x的。

但目前仅uni-app支持鸿蒙next，uni-app x还需过段时间。

uni-app中开发者的逻辑是编译为js，js无法直接调用鸿蒙原生API。而uts插件是编译为ets文件，所以可以调用鸿蒙原生API。（ArkTS的文件后缀为.ets）

## 了解 UTS 插件是什么

UTS 插件是 uni-app 扩展API的标准插件形式 [详情](./uts-plugin.md)

uts插件在编译到harmonyOS端时会被编译成ArkTs代码。因此编写代码时应注意遵循 `uts规范` 和 `ets规范`。

## 掌握UTS语法及ArkTs语法

无论是uts还是arkTs都是在ts的语法基础上进行扩展来的。建议先阅读如下文档

- [typescript官方文档](https://www.typescriptlang.org/zh/docs/)
- [uts语法](https://doc.dcloud.net.cn/uni-app-x/uts/)
- [AtkTs约束](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide-0000001820879565)

## harmonyOS 原生环境配置

- 参考：[uni-app 开发鸿蒙应用](https://uniapp.dcloud.net.cn/tutorial/harmony/dev.html)

## ArkTs 与 UTS 差异重点介绍 (持续更新)

### 类型差异

#### any类型

ArkTs内不能使用any类型，但是uts内any用处比较多，因此在编译为ArkTs时，any类型被转为了Object类型。

#### 对象字面量

ArkTs不允许无类型的对象字面量，编写代码时应注意在需要类型时为对象字面量指定类型。如未指定类型，uts会将此对象字面量编译成`as UTSJSONObject`的形式。

```ts
// 源码
const obj = {
  a: 1
}

// 编译结果
const obj = {
  a: 1
} as UTSJSONObject
```

```ts
// 源码
interface Obj {
  a: number
}
const obj: Obj = {
  a: 1
}
//或
const obj = {
  a: 1
} as Obj

// 编译结果
class Obj { ... }
const obj: Obj = {
  a: 1
}
//或
const obj = {
  a: 1
} as Obj
```

## 配置uts插件依赖

uts插件的`utssdk/app-harmony/config.json`文件内可以配置依赖，配置方式如下：

```json
{
  "dependencies": {
    "@cashier_alipay/cashiersdk": "15.8.26", // ohpm依赖
    "local-deps": "./libs/local-deps.har" // 本地依赖
  }
}
```

**注意**

- config.json文件不能含注释。
- 本地依赖相对路径是相对于config.json文件所在目录的路径，例如上面的示例中local-deps.har文件位于`utssdk/app-harmony/libs/local-deps.har`。

## 使用resources

uts 插件内包含了一个resources目录，用于存放插件的资源文件，如图片、字体等，关于resources的更多信息请参考：[鸿蒙资源分类与访问](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/resource-categories-and-access-V5)。此目录位于`utssdk/app-harmony/resources`。

## 常见问题

### context的获取

很多harmonyOS原生接口需要传入context作为参数。多数情况下可以直接调用harmonyOS全局方法`getContext()`获取。例如：

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