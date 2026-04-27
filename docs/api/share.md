<!-- ## uni.share(options) @share -->

<!-- UTSAPIJSON.share.name -->

<!-- UTSAPIJSON.share.description -->

<!-- UTSAPIJSON.share.compatibility -->

<!-- UTSAPIJSON.share.param -->

<!-- UTSAPIJSON.share.returnValue -->

<!-- UTSAPIJSON.share.example -->

<!-- UTSAPIJSON.share.tutorial -->

### 分享provider对象描述 @providerdes

UniShareWeixinProvider(微信分享)继承自 [UniProvider](./provider.md#uniprovider)


| 名称           | 类型      | 必备 | 默认值  | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| isWeChatInstalled     | boolean   | 是    | -      | 判断微信是否安装 |


<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
## 自定义分享provider接入到uni API @customprovider

背景：目前uni-app x引擎已经内置了微信分享。但分享SDK还有很多，比如微博、抖音分享。

以往这些SDK可以通过独立插件的方式集成到uni-app x中，但需要提供单独的API给开发者使用。

uni-app x从4.25起，开放了provider自接入机制，让三方SDK可以以[provider](./provider.md)方式被开发者集成。

开发一个UTS插件，对接uni规范化的API、错误信息描述等实现自己的支付插件，这样插件使用者就可以通过uni的标准API使用三方SDK。

举个例子，开发者想使用uni.share()的方式调用XX分享，但是内置分享api不支持，

那只需要按照下面四个步骤实现即可:

第一步，新建一个UTS插件，在interface.uts 中定义接口，UniShareProvider，代码如下

```ts
export interface UniShareWeixinProvider extends UniShareProvider{}
```

第二步，在app-android或者app-ios的index.uts中实现接口，代码如下

```ts
import { UniShareWeixinProvider } from '../interface.uts'
export class UniShareWeixinProviderImpl implements UniShareWeixinProvider {
	override id : String = "XX" // id必须有插件作者前缀，避免冲突，避免不同插件作者的插件id重名
	override description : String = "XX的描述"
	override isAppExist : boolean | null = null

	constructor(){}

	override share(options : ShareOptions) {
		//todo 具体逻辑，接收uni规范的入参，进行业务处理，返回uni规范的返回值。如遇到错误，按uni的规范返回错误码
	}
}
```

第三步，在manifest.json中配置

```ts
  "app": {
    "distribute": {
      /* android打包配置 */
      "modules": {
        "uni-share":{
          "XX":{}
        }
      }
    }
  }
```

第四步，打包自定义基座然后运行

### Bug&Tips @bug_tips

- HarmonyOS 平台分享图片时仅支持 jpeg/png 类型的图片
  - 分享视频，大小不能超过 64KB
  - 分享图片，大小不支持超过 100KB
- HarmonyOS 平台分享携带文本时
  - title 不支持超过 512 个字节
  - summary 不支持超过 1024 个字节
- 鸿蒙平台，HBuilderX 4.87 及以下版本，分享时有图片大于 20 KB 会出现分享失败的问题
  - 下载 [har包](https://web-ext-storage.dcloud.net.cn/temp/uni_modules__uni_share_weixin_x.har)并改名为 `uni_modules__uni_share_weixin.har`，放到 `项目根目录/harmony-configs/libs/` 目录下重新编译运行到手机
