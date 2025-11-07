# Worker

现代CPU都是多核的。主线程的代码是运行在CPU的主核上的。可以通过 worker api来利用其他核并行计算，加快运算速度。

uni-app x的代码，默认都是在主线程执行的，主线程也称为UI线程。

当需要使用子线程能力时，可以通过本API操作。

当然本API只是一种跨端封装，并且为了跨端还约束了一些写法。开发者也可以在uts插件中自行使用纯原生代码来操作线程。

注意：
- 所有UI操作、界面绘制，都必须在主线程进行。也就是子线程不能操作DOM API、不能操作绑定在界面上的响应式变量。
- Android上通过surface渲染的界面组件，可以在子线程操作。
- 线程之间通信，可以post消息，也可以共享变量。web和小程序仅支持shareArrayBuffer数据类型的共享。App平台没有限制，引用类型都可以共享变量。但共享变量时，需要开发者注意线程安全问题，避免多线程同时写同一个变量，或一个线程读、同时另一个线程在写同一个变量，这可能引发崩溃。
- 线程和Android的协程是不同的。Android上request api内部已经使用了协程。
- CPU的核数有限，不要同时开太多线程。

常见场景：
- 当你的界面掉帧时，应该检查是什么耗时任务导致不能及时渲染，是否可以剥离一些计算任务到子线程来做。
- 多份大数据需要尽快处理，比如多个json文件需要压缩，可以启动多线程。


<!-- ## uni.createWorker(url) @createworker -->

<!-- UTSAPIJSON.createWorker.name -->

<!-- UTSAPIJSON.createWorker.description -->

<!-- UTSAPIJSON.createWorker.compatibility -->

<!-- UTSAPIJSON.createWorker.param -->

<!-- UTSAPIJSON.createWorker.returnValue -->

<!-- UTSAPIJSON.createWorker.example -->

<!-- UTSAPIJSON.createWorker.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


## Worker 使用流程 @tutorial

### 1. 配置 Worker 信息

worker 代码，是独立的 `uts` 文件，所有worker代码文件需要放置在专门的目录。在项目的 `manifest.json` 中可配置 Worker 文件放置的目录：
```json
{
  //...
  "workers": {
    "path": "workers",        // 相对于项目根目录。此配置的意思是在项目根目录下的workers目录下存放worker代码。
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


### 2. 添加 Worker 代码文件

参考上一步的配置，在项目根目录下创建 `workers` 目录，并创建示例 `HelloWorkerTask.uts` 文件如下：

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


### 3. 编写 Worker 代码

Worker 代码中需定义一个类并继承自基类 `WorkerTaskImpl`，重写 `onMessage` 方法接收主线程发送的数据。

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
  transfer: Array<any>
}
```


### 4. 主线程中创建 Worker

在主线程的代码中调用 `uni.createWorker` 创建并返回 Worker 对象，可通过其 `onMessage` 方法监听 Worker 子线程发送的数据，通过其 `onError` 方法监听 Worker 子线程的错误。

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


### 5. 主线程向 Worker 发送消息

调用 `uni.createWorker` 创建并返回 Worker 对象的 `postMessage` 方法向 Worker 子线程发送数据。

参考以下示例代码：
```uts
// 向 Worker 子线程发送消息
worker.postMessage({
  msg: 'message send by main!'
});
```

### 6. harmonySendable 和 transfer 的使用

仅 `HarmonyOS` 和 `Web` 支持 示例：[worker Sendable Transfer](https://gitcode.com/dcloud/hello-uni-app-x/blob/1f8ad2f89a765e49c447c66802999f89e81bd9d6/pages/API/create-worker/worker-sendable-transfer.uvue)

#### harmonySendable

> 仅 HarmonyOS 支持。示例：[uts-worker-sendable-transfer](https://gitcode.com/dcloud/hello-uni-app-x/blob/1f8ad2f89a765e49c447c66802999f89e81bd9d6/uni_modules/uts-worker-sendable-transfer/utssdk/index.uts)

- 在 uts 插件的同级建立 ets 文件，导出 `Sendable` 对象 [示例](https://gitcode.com/dcloud/hello-uni-app-x/blob/1f8ad2f89a765e49c447c66802999f89e81bd9d6/uni_modules/uts-worker-sendable-transfer/utssdk/sendable.ets)
  ```ts
  @Sendable
  export class SendableObject {
    a: number = 45;
  }
  ```

- 在 uts 插件中引入 **注意引入时要有 `.ets` 后缀** [示例](https://gitcode.com/dcloud/hello-uni-app-x/blob/1f8ad2f89a765e49c447c66802999f89e81bd9d6/uni_modules/uts-worker-sendable-transfer/utssdk/index.uts#L3)
  ```uts
  // #ifdef APP-HARMONY
  import { SendableObject } from './sendable.ets';
  // #endif
  ```

- 在 uts 插件中使用，向子线程发送 Sendable 对象 [示例](https://gitcode.com/dcloud/hello-uni-app-x/blob/1f8ad2f89a765e49c447c66802999f89e81bd9d6/uni_modules/uts-worker-sendable-transfer/utssdk/index.uts#L41)
  ```uts
  workerImp.postMessage(new SendableObject())
  ```

- 在 worker 中接收到该对象后的修改会直接体现到宿主线程中
  -  [Sendable 的修改](https://gitcode.com/dcloud/hello-uni-app-x/blob/1f8ad2f89a765e49c447c66802999f89e81bd9d6/workers/sendableTransferWorker.uts#L20)
  -   [Sendable 修改后在宿主线程的体现](https://gitcode.com/dcloud/hello-uni-app-x/blob/898db493f689b96ea6c53ab44b56e109edbe76af/pages/API/create-worker/worker-sendable-transfer.uvue#L88)

#### transfer

> 一个可转移对象数组。示例：[worker Sendable Transfer](https://gitcode.com/dcloud/hello-uni-app-x/blob/1f8ad2f89a765e49c447c66802999f89e81bd9d6/pages/API/create-worker/worker-sendable-transfer.uvue#L101)

- Web 支持 `ArrayBuffer[]、MessagePort[]、ImageBitmap[]` 等。 [可转移对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)
- HarmonyOS 仅支持 `ArrayBuffer[]`

::: warning 注意事项
- HarmonyOS 平台上使用 `transfer` 后，转移的 ArrayBuffer 长度不会改变，数组本身变为在宿主线程不可用。[鸿蒙文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-worker#postmessagewithsharedsendable12)
- Web 平台使用 `transfer` 后，转移的数组长度会变为 0。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage#%E8%BD%AC%E7%A7%BB%E7%A4%BA%E4%BE%8B)
:::

### 7. 结束 Worker

Worker 线程不再使用需主动结束释放相关资源，调用 Worker 对象的 `terminate` 方法结束子线程。

参考以下示例代码：
```uts
// 结束 Worker 子线程
worker.terminate();
```

## Tips
- `uni.createWorker` 仅支持在主线程中使用，在 Worker 子线程中使用会返回错误
- 各平台在 Worker 中使用全局变量或静态属性在内存管理中存在差异，Android/iOS平台可以共享内存，其它平台不能共享，为了避免这些差异带来的影响建议不要使用全局变量和静态属性
- Worker 子线程间暂不支持直接互相通讯，如要通讯可通过主线程中转发送消息来实现
- Android/iOS平台主线程与 Worker 线程传输的引用类型数据是直接共享使用（其它平台是默认为复制），需避免并发访问，暂未提供线程间安全访问机制，需通过业务逻辑控制避免并发访问这些共享的数据
- 鸿蒙平台主线程与 Worker 线程传输的数据默认为浅拷贝，如需传出共享对象，可在[uts插件](../plugin/uts-plugin.md)中混编开发定义[Sendable对象](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-sendable)，调用 `Worker.postMessage` 发送这些共享对象时设置 `harmonySendable` 参数为 true
- iOS平台 Worker 仅支持在[uts插件](../plugin/uts-plugin.md)中使用，不能直接在 `uvue` 页面中调用 `uni.createWorker`
- Worker 中仅支持调用界面无关的API（如 uni.request、uni.getLocation 等），这些 API 触发的回调运行在 Workder 线程中
- Web 平台不支持在 worker 中调用 uni 上的 API
