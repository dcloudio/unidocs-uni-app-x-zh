模块配置文档适用于 uni-app 4.31 及之后的版本，4.31之前的版本无需配置

目前如下模块涉及配置依赖或参数：

- [地图](./map.md)
- [推送](./push.md)
- [三方登录](./oauth.md)
- [实人认证](./facialVerify.md)
- [支付](./pay.md)
- [一键登录](./verify.md)
- [定位](./location.md)

如在uni-app项目manifest.json内已勾选对应的鸿蒙模块，则在编译产物的uni_modules目录下会生成对应的`index.generated.ets`和`oh-package.json5`文件，参考[集成编译产物到项目内](../../importfeproject/harmony.md)文档将这两个文件集成到鸿蒙项目内即可。

如需手动配置模块，请参考上述文档的配置步骤。

为简化描述，此处约定后文中的部分概念：

- `index.generated.ets`: 鸿蒙原生工程内的uni_modules入口文件，位于`/entry/src/main/ets/uni_modules/index.generated.ets`
- `oh-package.json5`: 鸿蒙原生工程内根目录的`/oh-package.json5`文件

### HBuilder X 升级至 `4.51` 后

需要在工程级的 `build-profile.json5` 的 `products` 字段（如果有多项都要配置）中配置 `compatibleSdkVersionStage: "beta6"`
