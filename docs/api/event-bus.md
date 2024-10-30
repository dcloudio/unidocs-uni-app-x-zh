## uni.$on(eventName, callback) @$on

<!-- UTSAPIJSON.$on.description -->

<!-- UTSAPIJSON.$on.compatibility -->

<!-- UTSAPIJSON.$on.param -->

<!-- UTSAPIJSON.$on.returnValue -->

<!-- UTSAPIJSON.$on.example -->

<!-- UTSAPIJSON.$on.tutorial -->

## uni.$off(eventName, callback) @$off

<!-- UTSAPIJSON.$off.description -->

<!-- UTSAPIJSON.$off.compatibility -->

<!-- UTSAPIJSON.$off.param -->

<!-- UTSAPIJSON.$off.returnValue -->

<!-- UTSAPIJSON.$off.example -->

<!-- UTSAPIJSON.$off.tutorial -->

## uni.$once(eventName, callback) @$once

<!-- UTSAPIJSON.$once.description -->

<!-- UTSAPIJSON.$once.compatibility -->

<!-- UTSAPIJSON.$once.param -->

<!-- UTSAPIJSON.$once.returnValue -->

<!-- UTSAPIJSON.$once.example -->

<!-- UTSAPIJSON.$once.tutorial -->

## uni.$emit(eventName, args?) @$emit

<!-- UTSAPIJSON.$emit.description -->

<!-- UTSAPIJSON.$emit.compatibility -->

<!-- UTSAPIJSON.$emit.param -->


:::warning
参数 `args` 为对象字面量时，4.25 前需要通过 `as` 明确类型，例如：
```js
uni.$emit('fn', {"a": 1} as UTSJSONObject)
```
4.25+ 编译器会自动将对象字面量推断为 `UTSJSONObject` 类型，不再需要通过 `as` 明确类型。如果需要传递其他自定义类型的对象字面量，仍需要通过 `as` 明确类型。
:::

<!-- UTSAPIJSON.$emit.returnValue -->

<!-- UTSAPIJSON.$emit.example -->

<!-- UTSAPIJSON.$emit.tutorial -->

<!-- UTSAPIJSON.eventBus.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* - `eventName` 应避免使用 `uni` 开头，以免与 uni-app x 内置事件冲突