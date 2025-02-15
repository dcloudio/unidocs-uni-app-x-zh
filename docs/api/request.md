## uni.request(param) @request

<!-- UTSAPIJSON.request.description -->

<!-- UTSAPIJSON.request.compatibility -->

<!-- UTSAPIJSON.request.param -->

<!-- UTSAPIJSON.request.returnValue -->

::: danger 注意事项
- 在4.25版本iOS平台增加了Task原生对象自动销毁的逻辑，即网络请求完成后自动释放原生的Task对象，建议开发者在`complete`回调中置空Task对象，例

```typescript
complete: () => {
            this.task = null
          },
```

如不释放，在调用Task对象的方法将导致控制台报错：
`error: instance object does not exist: id:15`
:::


<!-- UTSAPIJSON.request.tutorial -->

<!-- UTSAPIJSON.request.example -->

## cookie管理
- `uni.request`、`uni.uploadFile`、`uni.downloadFile`等网络API之间支持共享cookie [Cookie共享介绍](network-summarize.md)。

## 注意事项

* 推荐使用成熟的网络拦截器插件，见[插件市场](https://ext.dcloud.net.cn/search?q=%E7%BD%91%E7%BB%9C%E6%8B%A6%E6%88%AA%E5%99%A8&uni-appx=1)
* app-android平台 request 接口如需包装和传递泛型，需参考[泛型传递丢失注意](../plugin/uts-for-android.md#lost-generics)。成熟的拦截器插件均已自动处理这些问题。
* 如果使用泛型先创建RequestOptions实例，再传入uni.request()，此时请务必确保request要显式指定泛型，例：
```typescript
const options: RequestOptions<Person> = ...
uni.request<Person>(options)
```
* app-android、app-ios平台 uni.request()暂未支持Promise，返回值是RequestTask。
* sse另见[文档](./connect-event-source.md)
* web平台 request接口目前不支持创建传入的泛型的实例
* web平台 request接口在 4.01版本之前返回数据是一个普通对象，4.01起调整为UTSJSONObject类型

**由于uni-app x的强类型，导致联网相关开发有一些不同，请不熟悉强类型的开发者务必阅读教程：**[uni-app x的联网教程](../tutorial/request.md)

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
