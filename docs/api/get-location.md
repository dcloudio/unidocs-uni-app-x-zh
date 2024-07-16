## uni.getLocation(options) @getlocation

<!-- UTSAPIJSON.getLocation.description -->

<!-- UTSAPIJSON.getLocation.compatibility -->

<!-- UTSAPIJSON.getLocation.param -->

<!-- UTSAPIJSON.getLocation.returnValue -->

### 注意

uni-app x的标准基座定位仅支持wgs84坐标系、不支持逆地址解析、且某些老型号国产Android机因gms问题不支持系统定位、国产Rom可能不支持高度信息。

如需更强的定位能力，需加载专业定位sdk。

真机运行基座不包含三方定位sdk。

三方定位sdk方面，暂不支持高德、百度，但支持腾讯定位。

可下载[腾讯定位插件](https://ext.dcloud.net.cn/plugin?id=14569)，在插件中配置key打包后生效。

上述腾讯定位插件属于[ext api插件](https://uniapp.dcloud.net.cn/api/extapi.html)，引用到工程后，会覆盖uni.getLocation的实现，替换掉系统定位。

如需其他定位，请在插件市场搜索定位相关的uts插件。

获取手机端app是否拥有定位权限，请使用API [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)

不管系统定位、还是三方sdk定位，都有很多注意事项，包括gms、坐标系、隐私和权限等，请仔细阅读下面的参考链接。

<!-- UTSAPIJSON.getLocation.tutorial -->

<!-- UTSAPIJSON.getLocation.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## 自定义定位provider

以自定义腾讯定位为例

第一步，在interface.uts 中定义接口,继承UniLocationProvider，代码如下

```ts
export interface UniLocationTencentProvider extends UniLocationProvider{}
```

第二步，在app-android或者app-ios的index.uts中实现接口，代码如下

```ts
import { UniLocationTencentProvider } from '../interface';

export class UniLocationTencentProviderImpl implements UniLocationTencentProvider{


	override id : String = 'tencent'

	override description : String = "tencent"

	override isAppExist : boolean | null = null

	override getLocation(options : GetLocationOptions) {
		//todo 具体逻辑
	}

	constructor() {
	}

}
```

第三步，在manifest.json中配置

```ts
  "app": {
    "distribute": {
      /* android打包配置 */
      "modules": {
        "uni-getLocation":{
          "tencent":{}
        }
      }
    }
  }
```

第四步，打自定义基座

