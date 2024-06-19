# uni-app x Android离线打包SDK

## alpha版

### 4.21.2024061818-alpha

**[下载地址](https://web-ext-storage.dcloud.net.cn/uni-app-x/sdk/Android-uni-app-x-SDK@11905-4.21.zip)**

* 更新uni-app离线打包支持，需使用HBuilderX（4.21.2024061818-alpha）版本生成本地打包App资源。
* 新增 支持 onError 应用生命周期 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/app.html)
* 调整 系统底栏背景色与页面 backgroundColorContent 颜色一致 [详情](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html#pagesoptionspage-tips)
* 修复 离线打包 number 类型判断相等可能与云打包结果不一致的bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2422)
* 修复 响应式数组调用 unshift 方法不触发响应式变更 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2151)
* 调整 input/textarea 组件同时设置 modelValue 和 value 时，modelValue 优先级更高 [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2236)
* 修复 可选 number 类型判断相等结果可能不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2439)
* 修复 UTSJSONObject 通过 getXXX 方法获取对象属性返回的不是引用的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2340)
* 修复 JSON.parse 返回的数字类型通过 console.log 打印输出类型不正确的Bug [详情](https://issues.dcloud.net.cn/pages/issues/detail?id=2427)ssss