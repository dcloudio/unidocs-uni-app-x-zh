## callFunction(options) @callfunction

> 4.13版本起安卓端使用`UniCloudCallFunctionResult`必须传入泛型，比如`UniCloudCallFunctionResult<UTSJSONObject>`，其中泛型类型为其result属性的类型

<!-- UTSUNICLOUDAPIJSON.callFunction.description -->

<!-- UTSUNICLOUDAPIJSON.callFunction.compatibility -->

<!-- UTSUNICLOUDAPIJSON.callFunction.param -->

<!-- UTSUNICLOUDAPIJSON.callFunction.returnValue -->

<!-- UTSUNICLOUDAPIJSON.callFunction.tutorial -->

<!-- UTSUNICLOUDAPIJSON.unicloud-call-function.example -->

### 调用云函数时传入泛型

> 4.13版本起支持，仅安卓端会构造对应的泛型的实例，web端和iOS端泛型仅作为类型使用。

用法：`uniCloud.callFunction<泛型类型>({name: 'xxx', data: {}} as UniCloudCallFunctionOptions)`

在不传泛型时callFunction返回的类型为`Promise<UniCloudCallFunctionResult<UTSJSONObject>>`，传入泛型后callFunction返回的类型为`Promise<UniCloudCallFunctionResult<泛型类型>>`

**代码示例**

```ts
// 云函数fn代码
'use strict';
exports.main = async (event, context) => {
  return {
    errCode: 0,
    errMsg: '',
    detail: 'call function detail'
  };
};
```

```ts
// 客户端代码
type CallFunctionResult = {
  errCode : number,
  errMsg : string,
  detail : string
}
uniCloud.callFunction<CallFunctionResult>(
  {
    name: 'fn',
    data: { a: 1 } as UTSJSONObject,
  } as UniCloudCallFunctionOptions
).then(function (res) {
  const result = res.result // result的类型为CallFunctionResult
  const detail = result.detail // 可直接使用.detail访问
  console.log(detail)
}).catch(function (err : any | null) {
  console.error(err)
})
```
