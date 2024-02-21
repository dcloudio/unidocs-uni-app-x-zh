# Timers

## 实例方法

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
