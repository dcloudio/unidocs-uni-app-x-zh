## uni.uploadFile(options) @uploadfile

<!-- UTSAPIJSON.uploadFile.description -->

<!-- UTSAPIJSON.uploadFile.compatibility -->

推荐上传到uniCloud，uniCloud提供了更便宜CDN和更好的易用性，[详见](https://doc.dcloud.net.cn/uniCloud/storage.html)

<!-- UTSAPIJSON.uploadFile.param -->

<!-- UTSAPIJSON.uploadFile.returnValue -->

::: danger 注意事项
- 在4.25版本iOS平台增加了Task原生对象自动销毁的逻辑，即上传完成后自动释放原生的Task对象，建议开发者在`complete`回调中置空Task对象，例

```typescript
complete: () => {
            this.task = null
          },
```

如不释放，在调用Task对象的方法将导致控制台报错：
`error: instance object does not exist: id:15`

:::


<!-- UTSAPIJSON.uploadFile.example -->

<!-- UTSAPIJSON.uploadFile.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

**注意**

- web端上传文件时仅能使用downloadFile、chooseImage等返回文件对象的接口的返回值作为要上传的文件
