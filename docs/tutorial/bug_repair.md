# AI修复

目前的功能是修复uni-app-x编译到Android和IOS时出的编译错误

## 使用方式

1、在uni-app-x编译到Android和IOS平台时如果出现编译错误，就会出现一个可点击的链接

![](https://web-ext-storage.dcloud.net.cn/hx/debug/ai-repair.png)

2、点击控制台的链接之后，右边会出现一个修复页面，主要显示ai修复的建议

3、修复结束之后，在右边会出现一个diff的效果

![](https://web-ext-storage.dcloud.net.cn/hx/debug/repair-diff-view.png)

## 如何同意AI的修复

首先选中需要替换的行，然后如下图，点击箭头指向的地方，点击之后就将修复的内容替换到原本的文件中

![](https://web-ext-storage.dcloud.net.cn/hx/debug/repair-diff-replace.png)


## 注意
- 在编译输出的控制台中右击时，目前会出现一个生成ai提示词的按钮，点击之后可以获取提示词信息
- 有时候ai并不会按照要求返回提示内容，这时候可以参考右边的区域来通过ai反馈的建议来修复
- 有时候控制台可能并不会出现ai修复的链接，重新尝试编译就可能会出现
- 切换主题时，需要重启HX，ai修复的样式才会发生变化
- 如果编译错误中不包含uvue、uts文件，那ai可能无法修复对应的问题。