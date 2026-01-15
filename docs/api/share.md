<!-- ## uni.share(options) @share -->

<!-- UTSAPIJSON.share.name -->

<!-- UTSAPIJSON.share.description -->

<!-- UTSAPIJSON.share.compatibility -->

<!-- UTSAPIJSON.share.param -->

<!-- UTSAPIJSON.share.returnValue -->

<!-- UTSAPIJSON.share.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

### Bug&Tips @bug_tips

- HarmonyOS 平台分享图片时仅支持 jpeg/png 类型的图片
  - 分享视频，大小不能超过 64KB
  - 分享图片，大小不支持超过 100KB
- HarmonyOS 平台分享携带文本时
  - title 不支持超过 512 个字节
  - summary 不支持超过 1024 个字节
- 鸿蒙平台，HBuilderX 4.87 及以下版本，分享时有图片大于 20 KB 会出现分享失败的问题
  - 下载 [har包](https://web-ext-storage.dcloud.net.cn/temp/uni_modules__uni_share_weixin_x.har)并改名为 `uni_modules__uni_share_weixin.har`，放到 `项目根目录/harmony-configs/libs/` 目录下重新编译运行到手机
