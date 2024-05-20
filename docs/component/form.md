## form

<!-- UTSCOMJSON.form.description -->

<!-- UTSCOMJSON.form.compatibility -->

<!-- UTSCOMJSON.form.attribute -->

<!-- UTSCOMJSON.form.event -->

<!-- UTSCOMJSON.form.component_type-->

## form内容项控制逻辑

form组件的内容子组件包括：input、textarea、checkbox、radio、switch、slider，以及负责提交或重置的button组件。

button可以设置form-type属性为submit或reset，点击时会分别触发form的提交或重置。

在表单submit或reset时，这些表单内容子组件的值会被提交或重置。

注意：目前不支持上述组件之外自行添加表单内容子组件。如有自定义组件，则不能使用form组件提交，需自行通过绑定data的方式获取组件值并自行编码提交数据。

### submit策略差异

form 组件的表单提交，微信小程序的实现策略，与浏览器W3C的策略略有差异。目前uni-app(x)在submit时，app和web上的实现与微信小程序相同。具体是：

- uni-app表单提交的数据是一个对象`{"name": "value"}`。而浏览器标准form是数组，每项为 pair，pair[0] 对应name，pair[1] 对应value 。
- 多个表单子项如果 name 相同，仅保留最后一个表单子项。而浏览器标准form整体是数组，不存在覆盖的情况。
- 设置 disabled 属性的表单子项，仍然会提交。而浏览器标准form提交时会忽略disabled的表单子项。

注意uni-app(x)编译到web平台，也是按uni-app(x)的策略，而不是浏览器的策略。uni-app(x) 的 web平台使用 uni-app 自己的 form 组件，而不是浏览器的 form 标签。

### reset策略差异

reset在浏览器W3C的策略是还原、重置。

在uni-app(x)中，不同平台的策略不同，有的是`还原`，有的是`清空`。

各平台策略如下：

**uni-app-x**

|App				|Web				|
|:-:				|:-:				|
|还原(3.97+)	|还原(4.0+)	|


**uni-app**

|App	|Web	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序	|
|:-:	|:-:	|:-:			|:-:				|:-:			|:-:			|
|清空	|清空	|清空			|还原				|清空			|清空			|


1. 还原初始值

```html
<!-- reset 后为 name -->
<input name="input1" value="name" />

<!-- reset 后为 true -->
<switch name="switch1" :checked="true" />

<!-- reset 后为 50 -->
<slider name="slider1" :value="50" :min="10" :max="110" />

<!-- reset 后为 "写字" 被 checked -->
<checkbox-group name="loves">
  <view>
    <checkbox value="0" /><text>读书</text>
  </view>
  <view>
    <checkbox value="1" :checked="true" /><text>写字</text>
  </view>
</checkbox-group>
```

2. 清空已有值(含初始值和改变后的值)

```html
<!-- reset 后为 "" -->
<input name="input1" value="name" />

<!-- reset 后为 false -->
<switch name="switch1" :checked="true" />

<!-- reset 后为 最小值10 -->
<slider name="slider1" :value="50" :min="10" :max="110" />

<!-- reset 后为 无任何 checked -->
<checkbox-group name="loves">
  <view>
    <checkbox value="0" /><text>读书</text>
  </view>
  <view>
    <checkbox value="1" :checked="true" /><text>写字</text>
  </view>
</checkbox-group>
```


<!-- UTSCOMJSON.form.children -->

<!-- UTSCOMJSON.form.example -->

<!-- UTSCOMJSON.form.reference -->
