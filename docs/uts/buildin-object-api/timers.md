# Timers

## 全局方法

### setInterval(handler, timeout?, ...arguments)

<!-- UTSJSON.Timers.setInterval.description -->

<!-- UTSJSON.Timers.setInterval.param -->

<!-- UTSJSON.Timers.setInterval.returnValue -->

<!-- UTSJSON.Timers.setInterval.compatibility -->

<!-- UTSJSON.Timers.setInterval.tutorial -->

### setTimeout(handler, timeout?, ...arguments)

<!-- UTSJSON.Timers.setTimeout.description -->

<!-- UTSJSON.Timers.setTimeout.param -->

<!-- UTSJSON.Timers.setTimeout.returnValue -->

<!-- UTSJSON.Timers.setTimeout.compatibility -->

<!-- UTSJSON.Timers.setTimeout.tutorial -->

### clearInterval(id)

<!-- UTSJSON.Timers.clearInterval.description -->

<!-- UTSJSON.Timers.clearInterval.param -->

<!-- UTSJSON.Timers.clearInterval.returnValue -->

<!-- UTSJSON.Timers.clearInterval.compatibility -->

<!-- UTSJSON.Timers.clearInterval.tutorial -->

### clearTimeout(id)

<!-- UTSJSON.Timers.clearTimeout.description -->

<!-- UTSJSON.Timers.clearTimeout.param -->

<!-- UTSJSON.Timers.clearTimeout.returnValue -->

<!-- UTSJSON.Timers.clearTimeout.compatibility -->

<!-- UTSJSON.Timers.clearTimeout.tutorial -->

示例代码

```html
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      timerSetTimeout() {
        // 定义 setTimeout 返回值
        let timerID = 0;

        // 启动 setTimeout 并更新 timerID
        timerID = setTimeout(() => {
          // 执行一次
          console.log('setTimeout', timerID);
        }, 1000)

        // 取消
        // clearTimeout(timerID)
      },
      timerSetInterval() {
        // 定义 setInterval 返回值
        let timerID = 0;

        // 启动 setInterval 并更新 timerID
        timerID = setInterval(() => {
          // 周期执行 (1000毫秒)
          console.log('setInterval', timerID);

          // 取消
          clearInterval(timerID)
        }, 1000)
      }
    }
  }
</script>
```

### Android平台差异

需要注意：JS环境中只有一个线程，所以 `setTimeout/setInterval` 执行任务代码的线程和 调用 setTimeout/setInterval 总是同一个线程。

但是Android平台需要分两种情况：

+ 如果在主线程/dom 线程 等具备`Looper` 环境的线程调用`setTimeout/setInterval`： 那么可以确保 任务代码执行的线程 和调用setTimeout/setInterval的线程 是同一个线程。

+ 如果在匿名线程等 不具备 `Looper` 环境的线程中调用`setTimeout/setInterval`： 任务代码不会和 调用setTimeout/setInterval的线程 保持同一线程。


关于 `Android`系统`Looper`的[更多介绍](https://developer.android.com/reference/android/os/Looper)


