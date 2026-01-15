<!-- ## uni.share(options) @share -->

<!-- UTSAPIJSON.share.name -->

<!-- UTSAPIJSON.share.description -->

<!-- UTSAPIJSON.share.compatibility -->

<!-- UTSAPIJSON.share.param -->

<!-- UTSAPIJSON.share.returnValue -->

::: warning 注意
- HarmonyOS 平台分享图片时仅支持 jpeg/png 类型的图片
- HarmonyOS 平台分享携带文本时
  - title 不支持超过 512 个字节
  - summary 不支持超过 1024 个字节
:::

<!-- UTSAPIJSON.share.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

### Bug&Tips @bug_tips

- 鸿蒙平台，HBuilderX 4.87 及以下版本，分享时有图片大于 20 KB 会出现分享失败的问题
  - 下载 [har包](https://web-ext-storage.dcloud.net.cn/temp/uni_modules__uni_share_weixin_x.har)并改名为 `uni_modules__uni_share_weixin.har`，放到 `项目根目录/harmony-configs/libs/` 目录下重新编译运行到手机
