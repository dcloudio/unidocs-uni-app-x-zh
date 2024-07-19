# 虚拟支付
虚拟支付有两个api：
1. uni.requestVirtualPayment(options) :统一各平台的虚拟支付API，暂时只支持iOS平台。
2. uni.createVirtualPaymentContext() :获取各平台虚拟支付的上下文对象，统一调用各自虚拟支付涉及api的入口, 暂时只支持iOS平台。

::: warning Note：
1. iOS平台采用新的框架StoreKit2实现IAP，目前仅支持iOS15.0以上版本；
2. 为了规避Apple Store审核规则，请在iOS15.0版本以下， 关闭项目中的购买入口；
:::


## uni.requestVirtualPayment(options) @requestvirtualpayment

<!-- UTSAPIJSON.requestVirtualPayment.description -->

<!-- UTSAPIJSON.requestVirtualPayment.compatibility -->

uni.requestVirtualPayment是一个统一各平台的客户端虚拟支付API。

<!-- UTSAPIJSON.requestVirtualPayment.param -->

<!-- UTSAPIJSON.requestVirtualPayment.returnValue -->

### 注意事项
::: warning iOS平台说明：
uni.requestVirtualPayment api 适用于消耗性类型、非消耗性类型、自动续期订阅类型、非自动续期订阅类型产品的购买。
1. 消耗性类型：该类型的产品可以设置购买数量，默认是1，最大值是10；
2. 非消耗性类型、自动续期订阅类型、非自动续期订阅类型: 这些类型的产品购买数量设置无效，数量只能是1;
3. 非消耗性类型：该类型产品一个appleId只能购买一次，可以在任何登录该appleId账号的设备上通过restoreCompletedTransactions api获取。
:::

<!-- UTSAPIJSON.requestVirtualPayment.example -->
```ts
uni.requestVirtualPayment({
  apple: {
    productId: e.id,
    appAccountToken: "orderId+accountId",
    quantity: e.quantity ?? 1,
  },
  success: (res) => {
    uni.hideLoading()
    console.log("购买成功：该productId= " + res.apple?.payment.productId)
    //TODO: 开发者server验证逻辑

    //经过开发者server验证成功后请结束该交易
    this.virtualPaymentContext.finishTransaction({
      transaction: res.apple,
      success: (r) => {
        console.log("关单成功, 该productId= " + res.apple?.payment.productId)
      },
      fail: (e) => {
        console.log("关单失败, 该productId= " + res.apple?.payment.productId)
      }
    })
  },
  fail: (e) => {
    uni.hideLoading()
    console.log("购买失败：errSubject= " + e.errSubject + ", errCode= " + e.errCode + ", errMsg= " + e.errMsg)
  }
})
```
## uni.createVirtualPaymentContext() @createvirtualpaymentcontext

<!-- UTSAPIJSON.createVirtualPaymentContext.description -->

<!-- UTSAPIJSON.createVirtualPaymentContext.compatibility -->


uni.createVirtualPaymentContext(): 用来创建各个平台虚拟支付上下文对象，暂时仅支持iOS平台。

### 对象持有方法：
1. restoreCompletedTransactions(options): 获取苹果服务器已支付的交易列表

2. getUnfinishedTransactions(options): 获取苹果服务器已支付且未关闭的交易列表

3. finishTransaction(options): 关闭苹果服务器订单

<!-- UTSAPIJSON.createVirtualPaymentContext.returnValue -->
### 注意事项
1. restoreCompletedTransactions(options): 获取苹果服务器已支付的交易列表
::: warning restoreCompletedTransactions api iOS平台说明：
restoreCompletedTransactions api 适用于非消耗性类型、自动续期订阅类型、非自动续期订阅类型产品的购买。
1. 非消耗性类型: 返回每个已购买的非消耗性类型产品的购买记录；
2. 自动续期订阅类型: 返回每个已购买的自动续期订阅类型产品的最新购买记录，沙盒账号最多可自动续订 12 次；
3. 非自动续期订阅类型: 返回每个已购买的非自动续期订阅类型产品的最新购买记录, 该类型订阅可以连续多次购买，开发者需要自己的后台计算产品过期的时间；
4. 不能用来恢复消耗性类型的购买记录。
:::

2. getUnfinishedTransactions(options): 获取苹果服务器已支付且未关闭的交易列表
::: warning getUnfinishedTransactions api iOS平台说明：
getUnfinishedTransactions api 适用于获取未完成的各种类型产品的购买记录（用来防止丢单）。
1. 比如用户点击购买已经付款成功，但因网络、手机没电关机等特殊情况，Apple IAP没有返回客户端对应的购买凭证，从而导致无法finish该交易导致的丢单，可以在需要的地方调用该api获得此类未finished的交易记录;
2. 针对消耗性类型产品交易，只能通过该api获取未finished的交易，防止丢单；
3. 对于其他类型产品未finished交易, 不仅可以通过该api获取，也可以通过restoreCompletedTransactions api (也可获取已经finished的交易)获取；
4. 对于自动续期订阅类型产品的续订交易，建议在每次app启动的时候调用该api判断是否续订成功；
:::

3. finishTransaction(options): 关闭苹果服务器订单
::: warning finishTransaction api iOS平台说明：
finishTransaction api 适用于各种类型产品的购买经自己服务器验证成功后，用来关闭苹果服务器对应订单。
:::
<!-- UTSAPIJSON.createVirtualPaymentContext.example -->

```ts
//创建虚拟支付上下文对象
const virtualPaymentContext = uni.createVirtualPaymentContext()

//获取苹果服务器已支付的交易列表
virtualPaymentContext.restoreCompletedTransactions({
    success: (res) => {
        uni.hideLoading()
        console.log("restore成功的交易个数：" + res.transactions.length)
        res.transactions.forEach(transaction => {

        //TODO: 开发者server验证逻辑

        console.log("restore成功的交易productId= " + transaction.payment.productId)
        })
    },
    fail: (e) => {
        uni.hideLoading()
        console.log("restore失败：errSubject= " + e.errSubject + ", errCode= " + e.errCode + ", errMsg= " + e.errMsg)
    }
})

//获取苹果服务器已支付且未关闭的交易列表
virtualPaymentContext.getUnfinishedTransactions({
  success: (res) => {
    uni.hideLoading()
    console.log("获取未结束的订单列表个数：" + res.transactions.length)

    res.transactions.forEach(transaction => {
      console.log("getUnfinishedTransactions成功的交易productId= " + transaction.payment.productId)
      //TODO: 开发者server验证逻辑

      //经过开发者server验证成功后关闭苹果服务器订单
      virtualPaymentContext.finishTransaction({
        transaction: transaction,
        success: (r) => {
          console.log("关单成功, 该productId= " + transaction.payment.productId)
        },
        fail: (e) => {
          console.log("关单失败, 该productId= " + transaction.payment.productId)
        }
      })
    })
  },
  fail: (e) => {
    uni.hideLoading()
    console.log("获取未结束的订单列表失败：errSubject= " + e.errSubject + ", errCode= " + e.errCode + ", errMsg= " + e.errMsg)
  }
})
```

<!-- UTSAPIJSON.virtualPayment.example -->
