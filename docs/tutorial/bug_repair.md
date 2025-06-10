# AI修复

目前的功能: 修复uni-app x编译到Android和iOS时出现的编译错误

> 每人每天只能使用一百次

> HBuilderX 4.71+开始支持AI修复功能

## 使用方式

1、在uni-app x编译到Android和iOS平台时如果出现编译错误，就会出现一个可点击的链接

![](https://web-ext-storage.dcloud.net.cn/hx/debug/ai-repair.png)

2、点击控制台的链接之后，右边会出现一个修复页面，主要显示AI修复的建议

3、修复结束之后，在右边会出现一个diff的效果

![](https://web-ext-storage.dcloud.net.cn/hx/debug/repair-diff-view.png)

### 如何同意AI的修复

首先点击需要替换的行，然后如下图，点击箭头指向的地方，点击之后就将修复的内容替换到原本的文件中

![](https://web-ext-storage.dcloud.net.cn/hx/debug/repair-diff-replace.png)


4、如果存在多个文件的错误时，修复页面的最下方会出现一个按钮`点击修复下一个文件的问题`, 点击该按钮开始修复下一个错误

> 按钮中包含了有多少文件需要修复，当前正在修复第几个文件

<img src="https://web-ext-storage.dcloud.net.cn/hx/debug/bug_fix_next.png" style="zoom: 50%;" />

### 如何取消AI修复

如果需要终止修复，可以点击右上角的取消按钮。

![](https://web-ext-storage.dcloud.net.cn/hx/debug/bug_fix_cancel.png)


## 获取提示词

在编译输出的控制台中右击时，目前会出现一个生成AI提示词的按钮，点击之后可以获取提示词信息

![](https://web-ext-storage.dcloud.net.cn/hx/debug/bug_fix_prompt.png)

## 注意
- 有时候AI并不会按照要求返回提示内容，这时候可以参考右边的区域来通过AI反馈的建议来修复
- 有时候控制台可能并不会出现AI修复的链接，重新尝试编译就可能会出现
- 如果编译错误中不包含uvue、uts文件，那AI可能无法修复对应的问题。
