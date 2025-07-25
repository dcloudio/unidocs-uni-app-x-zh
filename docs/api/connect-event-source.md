<!-- ## uni.connectEventSource(options) @connecteventsource -->

<!-- UTSAPIJSON.connectEventSource.name -->

<!-- UTSAPIJSON.connectEventSource.description -->

SSE，全称是Server-sent Events，一种服务器基于http向客户端推送文本消息的技术。

提供本API（uni.connectEventSource）的主要目的是兼容Web的SSE规范。但如果开发者需要接收AI大语言模型的数据，实际上无法使用SSE。

因为SSE仅支持get，无法post数据。LLM是用户post一个prompt，然后流式获取结果。

所以LLM流式接收数据的场景，应该使用uni.request的Chunk，而不是使用本API（uni.connectEventSource）。[详见](request.md)

<!-- UTSAPIJSON.connectEventSource.compatibility -->

Web端暂未兼容uni.connectEventSource API，请使用标准的Web API。

小程序不支持SSE，替代方案也是使用uni.request的Chunk。


<!-- UTSAPIJSON.connectEventSource.param -->

<!-- UTSAPIJSON.connectEventSource.returnValue -->

<!-- UTSAPIJSON.connectEventSource.example -->

<!-- UTSAPIJSON.connectEventSource.tutorial -->

<!-- UTSAPIJSON.connectEventSource.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
