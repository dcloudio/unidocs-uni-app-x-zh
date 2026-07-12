## uni.onAccelerometerChange(callback) @onaccelerometerchange

<!-- UTSAPIJSON.onAccelerometerChange.description -->

<!-- UTSAPIJSON.onAccelerometerChange.compatibility -->

<!-- UTSAPIJSON.onAccelerometerChange.param -->

<!-- UTSAPIJSON.onAccelerometerChange.returnValue -->

<!-- UTSAPIJSON.onAccelerometerChange.example -->

<!-- UTSAPIJSON.onAccelerometerChange.tutorial -->

### 注意

<md-hperm :permissions="[{ name: 'ohos.permission.ACCELEROMETER', desc: '注册监听时如果当前未启动，会自动调用 startAccelerometer()，因此间接触发权限申请。' }]" />

## uni.offAccelerometerChange(callback) @offaccelerometerchange

<!-- UTSAPIJSON.offAccelerometerChange.description -->

<!-- UTSAPIJSON.offAccelerometerChange.compatibility -->

<!-- UTSAPIJSON.offAccelerometerChange.param -->

<!-- UTSAPIJSON.offAccelerometerChange.returnValue -->

<!-- UTSAPIJSON.offAccelerometerChange.example -->

<!-- UTSAPIJSON.offAccelerometerChange.tutorial -->

## uni.startAccelerometer(options) @startaccelerometer

<!-- UTSAPIJSON.startAccelerometer.description -->

<!-- UTSAPIJSON.startAccelerometer.compatibility -->

<!-- UTSAPIJSON.startAccelerometer.param -->

<!-- UTSAPIJSON.startAccelerometer.returnValue -->

<!-- UTSAPIJSON.startAccelerometer.example -->

<!-- UTSAPIJSON.startAccelerometer.tutorial -->

### 注意

<md-hperm permissions="ohos.permission.ACCELEROMETER" />

## uni.stopAccelerometer(options) @stopaccelerometer

<!-- UTSAPIJSON.stopAccelerometer.description -->

<!-- UTSAPIJSON.stopAccelerometer.compatibility -->

<!-- UTSAPIJSON.stopAccelerometer.param -->

<!-- UTSAPIJSON.stopAccelerometer.returnValue -->

<!-- UTSAPIJSON.stopAccelerometer.example -->

<!-- UTSAPIJSON.stopAccelerometer.tutorial -->

<!-- UTSAPIJSON.accelerometer.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

### tips
- 5.08版本，app和微信小程序平台有个差异，app 平台调用 `uni.onAccelerometerChange` 时不会自动启动加速器，需要调用 `uni.startAccelerometer()` 才能正常启动加速器。`5.09+` 版本app 平台拉齐了和微信小程序的表现。