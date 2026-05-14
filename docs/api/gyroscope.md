<!-- UTSAPIJSON.startGyroscope.name -->

<!-- UTSAPIJSON.startGyroscope.description -->

<!-- UTSAPIJSON.startGyroscope.compatibility -->

<!-- UTSAPIJSON.startGyroscope.param -->

<!-- UTSAPIJSON.startGyroscope.fileFormats -->

<!-- UTSAPIJSON.startGyroscope.returnValue -->

<!-- UTSAPIJSON.startGyroscope.example -->

<!-- UTSAPIJSON.startGyroscope.tutorial -->

### 注意

<md-hperm permissions="ohos.permission.GYROSCOPE" />

<!-- UTSAPIJSON.stopGyroscope.name -->

<!-- UTSAPIJSON.stopGyroscope.description -->

<!-- UTSAPIJSON.stopGyroscope.compatibility -->

<!-- UTSAPIJSON.stopGyroscope.param -->

<!-- UTSAPIJSON.stopGyroscope.fileFormats -->

<!-- UTSAPIJSON.stopGyroscope.returnValue -->

<!-- UTSAPIJSON.stopGyroscope.example -->

<!-- UTSAPIJSON.stopGyroscope.tutorial -->

<!-- UTSAPIJSON.onGyroscopeChange.name -->

<!-- UTSAPIJSON.onGyroscopeChange.description -->

<!-- UTSAPIJSON.onGyroscopeChange.compatibility -->

<!-- UTSAPIJSON.onGyroscopeChange.param -->

<!-- UTSAPIJSON.onGyroscopeChange.fileFormats -->

<!-- UTSAPIJSON.onGyroscopeChange.returnValue -->

<!-- UTSAPIJSON.onGyroscopeChange.example -->

<!-- UTSAPIJSON.onGyroscopeChange.tutorial -->

### 注意

<md-hperm :permissions="[{ name: 'ohos.permission.GYROSCOPE', desc: '注册监听时如果当前未启动，会自动调用 startGyroscope()，因此间接触发权限申请和传感器启动。' }]" />

<!-- UTSAPIJSON.offGyroscopeChange.name -->

<!-- UTSAPIJSON.offGyroscopeChange.description -->

<!-- UTSAPIJSON.offGyroscopeChange.compatibility -->

<!-- UTSAPIJSON.offGyroscopeChange.param -->

<!-- UTSAPIJSON.offGyroscopeChange.fileFormats -->

<!-- UTSAPIJSON.offGyroscopeChange.returnValue -->

<!-- UTSAPIJSON.offGyroscopeChange.example -->

<!-- UTSAPIJSON.offGyroscopeChange.tutorial -->

<!-- UTSAPIJSON.gyroscope.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

### tips
- 和微信小程序平台不同，app 平台调用 `uni.onGyroscopeChange` 时不会自动启动陀螺仪，需要调用 `uni.startGyroscope()` 才能正常启动陀螺仪。这个问题会在后续版本处理，app 平台在 `5.09+` 版本中将和微信小程序行为保持一致。