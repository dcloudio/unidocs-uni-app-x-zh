<!-- ## uni.report(options) @report -->

<!-- UTSAPIJSON.report.name -->

<!-- UTSAPIJSON.report.description -->

### 注意事项
`uni.report` 需要依赖 [`uni统计`](https://ext.dcloud.net.cn?name=uni-stat)，集成方式请查看[文档](https://uniapp.dcloud.net.cn/uni-stat-uniappx)。

<!-- UTSAPIJSON.report.compatibility -->

<!-- UTSAPIJSON.report.param -->

<!-- UTSAPIJSON.report.returnValue -->

### 如何使用自定义上报@custom-report

```js
// 参数支持字符串
uni.report({
 name:'购买',
 options:'购买成功'
})

// 参数支持对象
uni.report({
 name:'购买',
 options:{
  id:'1000',
  name:'上衣',
  price:'998',
  msg:'购买成功'
  // ...
 }
})
```

<!-- UTSAPIJSON.report.example -->

<!-- UTSAPIJSON.report.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
