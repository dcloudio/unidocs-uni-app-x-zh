# uni实人认证

uni实人认证是DCloud与合作伙伴共同推出的金融级实人认证服务，通过对比人脸、活体检测、姓名和身份证号码，来确认用户身份的有效性。

实人认证涉及业务开通和付费，涉及客户端和服务器交互，有较多文档：
1. 业务介绍：介绍业务流程、开通和付费。[详见](https://doc.dcloud.net.cn/uniCloud/frv/intro.html)
2. 客户端API，即本文
3. 服务器API，[详见](https://doc.dcloud.net.cn/uniCloud/frv/dev.html)

uni-id-pages，已经内置实人认证，从云端到客户端均已开发好并开源，推荐使用。[详情](https://doc.dcloud.net.cn/uniCloud/uni-id/app-x.html)

## uni.getFacialRecognitionMetaInfo() @getfacialrecognitionmetainfo

<!-- UTSAPIJSON.getFacialRecognitionMetaInfo.description -->

<!-- UTSAPIJSON.getFacialRecognitionMetaInfo.compatibility -->

<!-- UTSAPIJSON.getFacialRecognitionMetaInfo.param -->

<!-- UTSAPIJSON.getFacialRecognitionMetaInfo.example -->

<!-- UTSAPIJSON.getFacialRecognitionMetaInfo.tutorial -->

## uni.startFacialRecognitionVerify(faceStyle) @startfacialrecognitionverify

<!-- UTSAPIJSON.startFacialRecognitionVerify.description -->

<!-- UTSAPIJSON.startFacialRecognitionVerify.compatibility -->

<!-- UTSAPIJSON.startFacialRecognitionVerify.param -->

<!-- UTSAPIJSON.startFacialRecognitionVerify.returnValue -->

<!-- UTSAPIJSON.startFacialRecognitionVerify.example -->

<!-- UTSAPIJSON.startFacialRecognitionVerify.tutorial -->

<!-- UTSAPIJSON.facialRecognitionMetaInfo.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Tips
* 获取手机端app是否拥有摄像头权限，请使用API [uni.getAppAuthorizeSetting](get-app-authorize-setting.md)
* 从HBuilderX 3.99起，标准基座真机运行可直接体验实人认证，涉及费用扣除开发者的费用。无需自定义基座。
* Android 实人认证支持的CPU类型为`armeabi-v7a`和`arm64-v8a`，其他CPU类型设备调用`uni.getFacialRecognitionMetaInfo()`会返回空字符串，调用`uni.startFacialRecognitionVerify()`会触发错误码为`10002`的错误回调。
