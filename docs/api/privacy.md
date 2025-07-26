## 隐私API
因为uni-app下开发者的js代码执行较晚，所以框架提供了原生隐私协议框，但自定义性较差。

uni-app x并不需要这套机制，开发者的代码就是原生代码，执行时机很早，可以自己弹出隐私协议政策。（如在app launch生命周期中弹出dialogPage的协议框）

但应用开发者和插件开发者，需要监听和共享隐私协议是否同意。所以提供了如下一批能力。

- `uni.getPrivacySetting`：获取用户是否同意了隐私协议
- `uni.resetPrivacyAuthorization`：重置隐私协议状态。适用于隐私协议变更，需要重新同意的场景
- `uni.onPrivacyAuthorizationChange`、`uni.offPrivacyAuthorizationChange`：监听和取消监听用户是否同意隐私协议
- 在 [button组件](../component/button.md)中，提供了属性open-type="agreePrivacyAuthorization"。之所以同意隐私协议是按钮，而不是API，是因为需要用户真实的同意。避免插件作者通过API非正常设置隐私协议为同意。所以开发者务必在隐私协议的同意按钮处使用 open-type="agreePrivacyAuthorization" 的 button组件。
- `manifest.json`中， `app` 节点下`initPrivacyAuthorization` 为 `auto` 时，安卓、鸿蒙平台隐私状态初始值为 `disagree`，iOS平台隐私状态初始值为 `agree`

<!-- ## uni.getPrivacySetting(options) @getprivacysetting -->

<!-- UTSAPIJSON.getPrivacySetting.name -->

<!-- UTSAPIJSON.getPrivacySetting.description -->

<!-- UTSAPIJSON.getPrivacySetting.compatibility -->

<!-- UTSAPIJSON.getPrivacySetting.param -->

<!-- UTSAPIJSON.getPrivacySetting.returnValue -->

<!-- UTSAPIJSON.getPrivacySetting.example -->

<!-- UTSAPIJSON.getPrivacySetting.tutorial -->

<!-- ## uni.resetPrivacyAuthorization() @resetprivacyauthorization -->

<!-- UTSAPIJSON.resetPrivacyAuthorization.name -->

<!-- UTSAPIJSON.resetPrivacyAuthorization.description -->

适用于隐私协议变更，需要重新同意的场景。

<!-- UTSAPIJSON.resetPrivacyAuthorization.compatibility -->

<!-- UTSAPIJSON.resetPrivacyAuthorization.param -->

<!-- UTSAPIJSON.resetPrivacyAuthorization.returnValue -->

<!-- UTSAPIJSON.resetPrivacyAuthorization.example -->

<!-- UTSAPIJSON.resetPrivacyAuthorization.tutorial -->

<!-- ## uni.onPrivacyAuthorizationChange(callback) @onprivacyauthorizationchange -->

<!-- UTSAPIJSON.onPrivacyAuthorizationChange.name -->

<!-- UTSAPIJSON.onPrivacyAuthorizationChange.description -->

<!-- UTSAPIJSON.onPrivacyAuthorizationChange.compatibility -->

<!-- UTSAPIJSON.onPrivacyAuthorizationChange.param -->

<!-- UTSAPIJSON.onPrivacyAuthorizationChange.returnValue -->

<!-- UTSAPIJSON.onPrivacyAuthorizationChange.example -->

<!-- UTSAPIJSON.onPrivacyAuthorizationChange.tutorial -->

<!-- ## uni.offPrivacyAuthorizationChange(id) @offprivacyauthorizationchange -->

<!-- UTSAPIJSON.offPrivacyAuthorizationChange.name -->

<!-- UTSAPIJSON.offPrivacyAuthorizationChange.description -->

<!-- UTSAPIJSON.offPrivacyAuthorizationChange.compatibility -->

<!-- UTSAPIJSON.offPrivacyAuthorizationChange.param -->

<!-- UTSAPIJSON.offPrivacyAuthorizationChange.returnValue -->

<!-- UTSAPIJSON.offPrivacyAuthorizationChange.example -->

<!-- UTSAPIJSON.offPrivacyAuthorizationChange.tutorial -->

<!-- UTSAPIJSON.privacy.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->