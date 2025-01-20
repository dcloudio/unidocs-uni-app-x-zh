## uni.isSimulator() @issimulator

<!-- UTSAPIJSON.isSimulator.description -->

从4.51+，uni.getDeviceInfo里的isSimulator由于隐私政策原因，去掉了访问传感器列表。独立了一个单独的`uni.isSimulator`。

本API可以根据传感器的信息更准确的识别是否为模拟器。但本API在Android平台上线应用商店时，务必注意需要在隐私协议中声明，并确保在隐私协议被用户同意后再调用。

有些模拟器会故意伪装真机，此时可能识别不准确。

iOS平台请暂时继续使用[uni.getDeviceInfo](./get-device-info.md)

<!-- UTSAPIJSON.isSimulator.compatibility -->

<!-- UTSAPIJSON.isSimulator.param -->

<!-- UTSAPIJSON.isSimulator.returnValue -->

<!-- UTSAPIJSON.isSimulator.example -->

<!-- UTSAPIJSON.isSimulator.tutorial -->

<!-- UTSAPIJSON.isSimulator.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
