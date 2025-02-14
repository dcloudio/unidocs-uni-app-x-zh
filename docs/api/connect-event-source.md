## uni.connectEventSource(options) @connecteventsource

<!-- UTSAPIJSON.connectEventSource.description -->

SSE，全称是Server-sent Events，一种服务器基于http向客户端推送文本消息的技术。

一些AI大语言模型的服务器，利用SSE向客户端不停的发消息，持续的流式输出AI推理的结果文本。

但小程序不支持SSE，如果跨端的话，需要使用socket。

如果是搭建自己的服务器对接AI服务器，可以由自己的服务器使用SSE连接AI服务器，然后转socket和客户端通信。

socket在跨端、双向传输、二进制传输上有更多优势。

<!-- UTSAPIJSON.connectEventSource.compatibility -->

Web端暂未兼容uni.connectEventSource API，请使用标准的Web API。

小程序可以使用web-view组件，调用浏览器的SSE能力。

<!-- UTSAPIJSON.connectEventSource.param -->

<!-- UTSAPIJSON.connectEventSource.returnValue -->

<!-- UTSAPIJSON.connectEventSource.example -->

<!-- UTSAPIJSON.connectEventSource.tutorial -->

<!-- UTSAPIJSON.connectEventSource.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
