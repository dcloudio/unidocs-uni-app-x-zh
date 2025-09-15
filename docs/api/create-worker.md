# Worker

在应用开发中，通常会遇到一些耗时且计算量大的任务，比如处理大量数据、执行密集型算法。如果直接在主线程（也叫 UI 线程）上执行这些任务，会导致应用卡顿，甚至无响应，给用户带来糟糕的体验。

Worker 就是为了解决这个问题而诞生的。简单来说，它是一种让代码在后台线程运行的机制，将一些异步处理的任务放置于 Worker 中运行，待运行结束后，再把结果返回到主线程。

Worker 与主线程之间的数据传输，在主线中使用 [Worker.postMessage](#postmessage) 来发送数据，[Worker.onMessage](#onmessage) 来接收数据，详情参考[Worker 使用流程](#tutorial)。

<!-- ## uni.createWorker(url) @createworker -->

<!-- UTSAPIJSON.createWorker.name -->

<!-- UTSAPIJSON.createWorker.description -->

<!-- UTSAPIJSON.createWorker.compatibility -->

<!-- UTSAPIJSON.createWorker.param -->

<!-- UTSAPIJSON.createWorker.returnValue -->

<!-- UTSAPIJSON.createWorker.example -->

<!-- UTSAPIJSON.createWorker.tutorial -->

<!-- UTSAPIJSON.createWorker.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## Worker 使用流程 @tutorial

1. 配置 Worker 信息

在项目的 `manifest.json` 中可配置 Worker 文件放置的目录：
```json
{
  //...
  "workers": {
    "path": "workers",        // 相对于项目根目录
    "isSubpackage": true      // 是否分包，默认为 false（仅微信小程序有效）
  }
}
```

如果不使用微信小程序的分包配置，也可以使用简写配置：
```json
{
  //...
  "workers" : "workers"
}
```


2. 添加 Worker 代码文件

Worker 代码文件必需是一个单独的 `uts` 文件，根据前面步骤的配置，在项目根目录下创建 `workers` 目录，并创建 `HelloWorkerTask.uts` 文件如下：

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
├─ static
├─ workers                    // Worker 目录
│  └─ HelloWorkerTask.uts     // Worker 代码文件
├─ App.uvue
├─ main.uts
├─ manifest.json
└─ pages.json
</code>
</pre>


3. 编写 Worker 代码

Worker 代码文件需定义一个类并继承自基类 `WorkerTaskImpl`，重写 `onMessage` 方法接收主线程发送的数据。

以下是 `HelloWorkerTask.uts` 示例代码：
```uts
/**
 * HelloWorkerTask
 */
export class HelloWorkerTask extends WorkerTaskImpl {
  /**
   * 构造函数
   */
  constructor() {
    super();
    //初始化操作
    // console.log("构造器初始化");
  }

  /**
   * 实现入口函数
   */
  override entry() {
    //入口函数，Worker 启动时执行
    // console.log("启动完成，等待主线程消息");
  }

  /**
   * 实现接收主线程发送的消息
   */
  override onMessage(message : any) {
    // 处理消息对象
    const messageData = message as UTSJSONObject;

    // console.log('收到主线程数据:', messageData);

    // 发送消息给主线程
    this.postMessageToMain();
  }

  /**
   * 回复消息
   */
  private postMessageToMain() {
    const response = {
      msg: 'message send by worker!'
    };

    // 调用 postMessage 发送消息给主线程
    this.postMessage(response);
  }
}
```

其中 `WorkerTaskImpl` 基类定义如下：
```uts
/**
 * WorkerTaskImpl
 */
export class WorkerTaskImpl {
  /**
   * 入口函数
   * 可重写修改
   */
  override entry():void;
  /**
   * 接收主线程发送的消息
   * 可重写修改
   */
  override onMessage(message: any): void;

  /**
   * 向主线程发送消息
   */
  postMessage(message: any, options: WorkerPostMessageOptions|null = null): void;
}

/**
 * WorkerPostMessageOptions
 */
export type WorkerPostMessageOptions = {
  /**
   * 是否支持符合Sendable协议的对象作为共享变量发送，使用postMessageWithSharedSendable实现，默认值为false
   * 仅鸿蒙平台支持，参考：https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable
   */
  harmonySendable: boolean
  /**
   * 可转移对象数组，默认值为空数组
   * 仅鸿蒙、web平台支持，参考：https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects
   */
  transfer: Transferable[]
}
```


4. 主线程中创建 Worker

在主线程中调用 `uni.createWorker` 创建并返回 Worker 对象，可通过其 `onMessage` 方法监听 Worker 子线程发送的数据，通过其 `onError` 方法监听 Worker 子线程的错误。

参考以下示例代码：

```uts
// 创建 Worker 实例
const worker = uni.createWorker('workers/HelloWorkerTask.uts');

// 监听 Worker 消息
worker.onMessage((message: any) => {
  const messageData = message as UTSJSONObject;

  console.log('收到Worker子线程数据:', messageData);
});

// 监听 Worker 错误
worker.onError((error: WorkerOnErrorCallbackResult) => {
  console.error('Worker子线程发生错误:', error);
});
```


5. 主线程向 Worker 发送消息

调用 `uni.createWorker` 创建并返回 Worker 对象的 `postMessage` 方法向 Worker 子线程发送数据。

参考以下示例代码：
```uts
// 向 Worker 子线程发送消息
worker.postMessage({
  msg: 'message send by main!'
});
```


6. 结束 Worker  

Worker 线程不再使用需主动结束释放相关资源，调用 Worker 对象的 `terminate` 方法结束子线程。

参考以下示例代码：
```uts
// 结束 Worker 子线程
worker.terminate();
```


## Worker 注意事项
- `uni.createWorkder` 仅支持在主线程中使用，在 Worker 中使用会返回错误
- 各平台在 Worker 中使用全局变量或静态变量在内存管理中存在差异，为了避免这些差异带来的影响建议不要使用全局变量和静态变量
- Worker 线程间暂不支持直接通讯，如要通讯可通过主线程中转发送消息来实现
- Android/iOS平台主线程与 Worker 线程传输的引用类型数据是直接共享使用（其它平台是复制），需避免并发访问，暂未提供线程间安全访问机制，需通过业务逻辑控制避免并发访问这些共享的数据
- iOS平台 Worker 仅支持在[uts插件](../plugin/uts-plugin.md)中使用，不能直接在 `uvue` 页面中调用 `uni.createWorkder`
- Worker 中仅支持调用界面无关的API（如 uni.request、uni.getLocation 等），这下 API 触发的回调运行在 Workder 线程中
