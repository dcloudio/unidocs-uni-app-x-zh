## uni.getRecorderManager() @getrecordermanager

<!-- UTSAPIJSON.getRecorderManager.description -->

<!-- UTSAPIJSON.getRecorderManager.compatibility -->

<!-- UTSAPIJSON.getRecorderManager.param -->

<!-- UTSAPIJSON.getRecorderManager.returnValue -->

::: tip 编码格式与采样率、码率的关系

`Android、iOS、微信小程序`

|采样率|编码码率|
|:-|:-|
|8000|16000 - 48000|
|11025|16000 - 48000|
|12000|24000 - 64000|
|16000|24000 - 96000|
|22050|32000 - 128000|
|24000|32000 - 128000|
|32000|48000 - 192000|
|44100|64000 - 320000|
|48000|64000 - 320000|

`HarmonyOS`

- aac 编码格式支持码率范围[32000 - 500000]
- mp 编码格式支持码率范围[8000, 16000, 32000, 40000, 48000, 56000, 64000, 80000, 96000, 112000, 128000, 160000, 192000, 224000, 256000, 320000]
  - 采样率使用16K以下时，对应码率范围为[8000 - 64000]
  - 采样率使用16K~32K时对应的码率范围为[8000 - 160000]
  - 采样率使用32K以上时对应的码率范围为[32000 - 320000]
- wav 编码格式时，补丁码率 8000，采样率 64000，通道数 1
:::

<!-- UTSAPIJSON.getRecorderManager.example -->

<!-- UTSAPIJSON.getRecorderManager.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
