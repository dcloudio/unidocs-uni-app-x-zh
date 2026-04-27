## uni.login(options) @login

<!-- UTSAPIJSON.login.description -->

Android、iOS还未提供此功能，请在插件市场搜索替代方案。[详情](https://ext.dcloud.net.cn/search?q=%E5%BE%AE%E4%BF%A1%E7%99%BB%E5%BD%95&orderBy=Relevance&uni-appx=1&uni-app-platforms=&uni-app-x-platforms=&uni-appx=1)

<!-- UTSAPIJSON.login.compatibility -->

<!-- UTSAPIJSON.login.param -->

<!-- UTSAPIJSON.login.returnValue -->

::: warning 注意
- HarmonyOS 平台需要额外的配置，详见[HarmonyOS平台接入微信SDK](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/ohos.html)
  - 配置 queryScheme： `"queryScheme": ["weixin"]` **请勿配置 `wxopensdk`。已在 @tencent/wechat_open_sdk@1.0.15 实测配置 `wxopensdk` 后登录无法回调**
  - 配置 actions: `"actions": [ "action.system.home", "wxentity.action.open" ]`
:::

<!-- UTSAPIJSON.login.example -->

<!-- UTSAPIJSON.login.tutorial -->

### 登录provider对象描述 @providerdes

UniOAuthWeixinProvider(微信登录)继承自 [UniProvider](./provider.md#uniprovider)

| 名称           | 类型      | 必备 | 默认值  | 描述                                  |
| -------------- | --------- | ---- | ------ | ------------------------------------- |
| isWeChatInstalled     | boolean   | 是    | -      | 判断微信是否安装 |

## 自定义登录provider接入到uni API @customprovider

背景：目前uni-app x引擎已经内置了微信登录。但登录SDK还有很多，比如京东、支付宝登录。

以往这些SDK可以通过独立插件的方式集成到uni-app x中，但需要提供单独的API给开发者使用。

uni-app x从4.25起，开放了provider自接入机制，让三方SDK可以以[provider](./provider.md)方式被开发者集成。

开发一个UTS插件，对接uni规范化的API、错误信息描述等实现自己的登录插件，这样插件使用者就可以通过uni的标准API使用三方SDK。

举个例子，开发者想使用uni.login()的方式调用XX登录，但是内置登录api不支持，

那只需要按照下面四个步骤实现即可:

第一步，新建一个UTS插件，在interface.uts 中定义接口，UniOAuthProvider，代码如下

```ts
export interface UniOAuthWeixinProvider extends UniOAuthProvider{}
```

第二步，在app-android或者app-ios的index.uts中实现接口，代码如下

```ts
import { UniOAuthProvider } from '../interface.uts'
export class UniOAuthWeixinProviderImpl implements UniOAuthWeixinProvider {
	override id : String = "XX" // id必须有插件作者前缀，避免冲突，避免不同插件作者的插件id重名
	override description : String = "XX的描述"
	override isAppExist : boolean | null = null

	constructor(){}

	override login(options : LoginOptions) {
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
        "uni-oauth":{
          "XX":{}
        }
      }
    }
  }
```

第四步，打包自定义基座然后运行

## uni.getUserInfo(options) @getuserinfo

<!-- UTSAPIJSON.getUserInfo.description -->

<!-- UTSAPIJSON.getUserInfo.compatibility -->

<!-- UTSAPIJSON.getUserInfo.param -->

<!-- UTSAPIJSON.getUserInfo.returnValue -->

<!-- UTSAPIJSON.getUserInfo.example -->

<!-- UTSAPIJSON.getUserInfo.tutorial -->

<!-- UTSAPIJSON.oauth.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
