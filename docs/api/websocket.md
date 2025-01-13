::: warning 注意事项

[uni.onSocketOpen](#onsocketopen)、[uni.onSocketError](#onsocketerror)、[uni.sendSocketMessage](#sendsocketmessage)、[uni.onSocketMessage](#onsocketmessage)、[uni.closeSocket](#closesocket)、[uni.onSocketClose](#onsocketclose) 操作的是应用全局范围创建的第一个 WebSocket 连接，当应用中存在多个 WebSocket 连接时，不能通过以上方法进行操作管理。这时需要通过 [uni.connectSocket](#connectsocket) 返回的 SocketTask 对象的 onOpen、onError、send、onMessage、close、onClose 方法进行操作。

为了有更好的兼容性，不要使用 uni 上已废弃的 [uni.onSocketOpen](#onsocketopen)、[uni.onSocketError](#onsocketerror)、[uni.sendSocketMessage](#sendsocketmessage)、[uni.onSocketMessage](#onsocketmessage)、[uni.closeSocket](#closesocket)、[uni.onSocketClose](#onsocketclose) 等方法。

:::

## uni.connectSocket(options) @connectsocket

<!-- UTSAPIJSON.connectSocket.description -->

<!-- UTSAPIJSON.connectSocket.compatibility -->

<!-- UTSAPIJSON.connectSocket.param -->

<!-- UTSAPIJSON.connectSocket.returnValue -->

<!-- UTSAPIJSON.connectSocket.tutorial -->

## uni.~~onSocketOpen(options)~~ @onsocketopen

<!-- UTSAPIJSON.onSocketOpen.description -->

<!-- UTSAPIJSON.onSocketOpen.compatibility -->

<!-- UTSAPIJSON.onSocketOpen.param -->

<!-- UTSAPIJSON.onSocketOpen.returnValue -->

<!-- UTSAPIJSON.onSocketOpen.tutorial -->

## uni.~~onSocketError(callback)~~ @onsocketerror

<!-- UTSAPIJSON.onSocketError.description -->

<!-- UTSAPIJSON.onSocketError.compatibility -->

<!-- UTSAPIJSON.onSocketError.param -->

<!-- UTSAPIJSON.onSocketError.returnValue -->

<!-- UTSAPIJSON.onSocketError.tutorial -->

## uni.~~sendSocketMessage(options)~~ @sendsocketmessage

<!-- UTSAPIJSON.sendSocketMessage.description -->

<!-- UTSAPIJSON.sendSocketMessage.compatibility -->

<!-- UTSAPIJSON.sendSocketMessage.param -->

<!-- UTSAPIJSON.sendSocketMessage.returnValue -->

<!-- UTSAPIJSON.sendSocketMessage.tutorial -->

## 注意事项

* 出于性能的权衡，在底层实现上发送队列占用的内存不能超过16M，一旦超过将导致连接被关闭。

## uni.~~onSocketMessage(callback)~~ @onsocketmessage

<!-- UTSAPIJSON.onSocketMessage.description -->

<!-- UTSAPIJSON.onSocketMessage.compatibility -->

<!-- UTSAPIJSON.onSocketMessage.param -->

<!-- UTSAPIJSON.onSocketMessage.returnValue -->

<!-- UTSAPIJSON.onSocketMessage.tutorial -->

## uni.~~closeSocket(options)~~ @closesocket

<!-- UTSAPIJSON.closeSocket.description -->

<!-- UTSAPIJSON.closeSocket.compatibility -->

<!-- UTSAPIJSON.closeSocket.param -->

<!-- UTSAPIJSON.closeSocket.returnValue -->

<!-- UTSAPIJSON.closeSocket.tutorial -->

## uni.~~onSocketClose(callback)~~ @onsocketclose

<!-- UTSAPIJSON.onSocketClose.description -->

<!-- UTSAPIJSON.onSocketClose.compatibility -->

<!-- UTSAPIJSON.onSocketClose.param -->

<!-- UTSAPIJSON.onSocketClose.returnValue -->

<!-- UTSAPIJSON.onSocketClose.tutorial -->

<!-- UTSAPIJSON.websocket.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
