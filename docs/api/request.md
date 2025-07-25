<!-- ## uni.request(param) @request -->

<!-- UTSAPIJSON.request.name -->

<!-- UTSAPIJSON.request.description -->

<!-- UTSAPIJSON.request.compatibility -->

<!-- UTSAPIJSON.request.param -->

<!-- UTSAPIJSON.request.returnValue -->

<!-- UTSAPIJSON.request.tutorial -->

<!-- UTSAPIJSON.request.example -->

## cookie管理
- `uni.request`、`uni.uploadFile`、`uni.downloadFile`等网络API之间支持共享cookie [Cookie共享介绍](network-summarize.md)。

## 流式响应@chrunk

AI大语言模型的服务器，向客户端持续的流式输出AI推理的结果文本。在客户端表现为打字机效果。

在uni-app x中，实现AI聊天的方式如下：
1. 使用uni.request，把客户端的prompt通过POST的方式发送到LLM服务器，同时设置响应体格式为arraybuffer
2. 客户端监听onChunkReceived事件，流式接收arraybuffer数据
3. 客户端通过TextEncoder解码出文本，一般是markdown格式。（注意小程序自身没有TextEncoder，需要再通过三方库解码）
4. 客户端流式渲染markdown格式

实现AI聊天的工作较为复杂，流式接收和渲染markdown很容易引发性能问题，处理原生的markdown解析工作量也很大。
所以DCloud提供了开源的uni-ai x，已完整实现原生的、全端的AI聊天，[详见](https://ext.dcloud.net.cn/plugin?name=uni-ai-x)

## JSON解析注意@json

由于uni-app x的强类型，导致联网获取JSON，拿到的不是js的object。

默认返回的是UTSJSONObject，UTSJSONObject是UTS提供的JSON数据对象，实现了js的object的JSON相关功能，但又有区别。**如果照搬js的object用法会失败**。

同时request也支持泛型，返回一个开发者自定义的type。

**请不熟悉强类型的开发者务必阅读教程：**[uni-app x的联网教程](../tutorial/request.md)

## 注意事项@tips

* 拦截器在js中使用很普通，但原生语言由于缺少动态性，模拟实现拦截达不到js的全部效果。一般建议开发者直接使用uni.request，不封装拦截器。如仍想使用拦截器，见[插件市场](https://ext.dcloud.net.cn/search?q=%E7%BD%91%E7%BB%9C%E6%8B%A6%E6%88%AA%E5%99%A8&uni-appx=1)
* app-android平台 request 接口如需包装和传递泛型，需参考[泛型传递丢失注意](../plugin/uts-for-android.md#lost-generics)。成熟的拦截器插件均已自动处理这些问题。
* 如果使用泛型先创建RequestOptions实例，再传入uni.request()，此时请务必确保request要显式指定泛型，例：
```typescript
const options: RequestOptions<Person> = ...
uni.request<Person>(options)
```
* app-android、app-ios平台 uni.request()暂未支持Promise，返回值是RequestTask。
* web平台 request接口目前不支持创建传入的泛型的实例
* web平台 request接口在 4.01版本之前返回数据是一个普通对象，4.01起调整为UTSJSONObject类型
* 在4.25版本iOS平台增加了Task原生对象自动销毁的逻辑，即网络请求完成后自动释放原生的Task对象，建议开发者在`complete`回调中置空Task对象，例

```typescript
complete: () => {
            this.task = null
          },
```

如不释放，在调用Task对象的方法将导致控制台报错：
`error: instance object does not exist: id:15`

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
