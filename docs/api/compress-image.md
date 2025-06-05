## uni.compressImage(options) @compressImage

<!-- UTSAPIJSON.compressImage.description -->

<!-- UTSAPIJSON.compressImage.compatibility -->

<!-- UTSAPIJSON.compressImage.param -->

<!-- UTSAPIJSON.compressImage.returnValue -->

<!-- UTSAPIJSON.compressImage.tutorial -->

<!-- UTSAPIJSON.compressImage.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips

- quality属性
  - Android、iOS平台：仅对JPG格式图片生效，非JPG格式图片quality属性始终为100。
  - HarmonyOS 平台：对 JPG、HEIF 生效，其他为100。[详情](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-image-4?ha_source=Dcloud&ha_sourceId=89000448)
- Android平台仅支持对JPG格式图片进行压缩，其他格式会被压缩为JPG格式。iOS平台支持对JPG和PNG格式进行压缩。
- HarmonyOS 平台支持对 JPG（透明色将变为黑色）、HEIF、PNG（转为 JPG，透明色将变为黑色） 格式进行压缩。
