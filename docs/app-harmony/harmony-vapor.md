# 蒸汽模式
蒸汽模式，即vapor，是vue3的新功能。

## 虚拟DOM的问题
近年新兴的前端框架，掀起了新一轮的性能革命，纷纷去掉了虚拟DOM。通过更复杂的编译器，生成更高效的直接操作DOM的代码。

vue中去掉虚拟DOM的版本即为蒸汽模式。

回答蒸汽模式为什么更快这个问题前，我们需要先明白虚拟DOM为什么慢。

假设我们要加载一个大页面，里面有1000个DOM元素。

在蒸汽模式之前的版本，运行时的流程实际是：
1. 创建1000个虚拟DOM，构造VNode Tree
2. 在每个VNode创建的内部逻辑中，创建对应的真实DOM，构造DOM Tree。

本来创建1000个真实DOM的树已经不快了，再加上还要花时间创建1000个虚拟DOM树，造成页面加载更慢。

过去的虚拟DOM，包含了DOM操作的最佳实践，使得普通开发者写出的代码也能较高性能运行。

但蒸汽模式，通过更强大和复杂的编译器，把vue的语法编译成了包含DOM操作最佳实践的JS代码。

注意：蒸汽模式仅支持组合式API（setup），不支持选项式。

选项式的问题在于很多写法框的比较死，灵活度相比其他框架要弱。

从DCloud的角度看，蒸汽模式的vue框架，综合性能、生态、易用性、灵活性，已超过了react等其他框架。

## 全新的渲染系统

uni-app x 引入蒸汽模式，不仅是去掉了虚拟DOM，更重要的是 uni-app x 全新的渲染系统。

出于减少技术概念和条件编译的角度，这套全新的渲染系统和蒸汽模式绑定推出，渲染系统仅有内部代号，没有对外单独命名。

对于开发者而言，写条件编译时仅需一个条件，即`// #ifdef VUE3-VAPOR`。

这个无名的渲染系统，实现了跨平台App框架的历史突破，即：**基于原生渲染管线，但超越了原生的渲染速度**。

在hello uni-app x的模板下，有一个4050页面，同屏渲染2050个view，里面套了2000个text，一共4050个元素。

在鸿蒙nova12(apiLevel 21)上，创建和渲染这4050个元素仅耗时300ms左右。

而原生arkui，同设备上创建相同数量的元素并渲染，需要耗时900ms左右。渲染速度快3倍。

原生arkui的开源工程见[https://gitcode.com/dcloud/test4050-harmony-arkui](https://gitcode.com/dcloud/test4050-harmony-arkui)，开发者可以自行编译体验。

另外我们也测试了其他跨平台框架在鸿蒙的表现，包括基于k/n方案的跨平台框架，实际运行速度比原生的arkui要慢的多。

在复杂长列表中，uni-app x 蒸汽模式的丢帧率也优于于原生arkui。

在120Hz高刷屏上，8.3ms内无法完成新列表项的加载，就会掉帧。列表越复杂，越难以在8.3ms内完成渲染。

而uni-app x 蒸汽模式极快的渲染速度，支撑开发者构造非常复杂的列表，也可以丝般顺滑。

- 如果你问 uni-app x 的App平台到底是自渲染还是原生渲染，那么答案是原生渲染。uni-app x 选择原生渲染是为了更好的和原生生态无缝融合、以及降低内存占用。

- 如果你问为什么都是原生渲染，uni-app x的蒸汽模式比原生渲染更快？

这不是几句话能说清楚了，里面涉及数千项工程优化，但可以提供一些关键说明：
1. Android的compose ui也是基于原生渲染管线的，但没有使用Android自带的view、textview，而是实现了自己的组件系统。
	这条路完全可行，只不过compose ui做的不太好，实际渲染速度比view体系更慢。
	
	uni-app x 蒸汽模式，也几乎没有使用系统自带的组件，不管是textview、recycleview、viewpage...，或者是鸿蒙的arkUI相关组件，基本都没用，重写了。
	
	这些全新的组件做到了比OS自带组件性能更高。
2. vue里template和style里的代码，被直接编译为优化度非常高的C代码。它的运行速度远快于arkts、kotlin及k/n。

这些优化有没有副作用？

有。包括2个：
1. 最大的副作用是编译更慢了
App平台因为要编译C代码，所以真机运行的编译速度变慢不少。尤其是iOS和鸿蒙。

如果你做过c++开发的话，会感觉到回到了那个编译速度的时代。

后续DCloud也会持续研究改进该问题，提供开发期间的热更新方案。

2. 运行时包体积变化。
template和style编译成C后，发行包以机器码方式存在，几乎无法再压缩。比编译成js压缩成hap包的体积大一些。

hello uni-app x有300多个页面，蒸汽模式的发行hap体积56M，之前非蒸汽模式的体积是46M。

如果你的应用页面少的话，体积变化不明显。

## 体验方式
下载HBuilderX 5.0+ 群测版，运行hello uni-app x的dev分支。

该分支项目默认打开了蒸汽模式。

如果要在自己的项目下打开蒸汽模式，需要在manifest.json的可视化界面首页中勾选蒸汽模式。

运行默认是debug模式，性能较差。如果要测试性能，可以选择以release方式运行，选项在manifest可视化界面的鸿蒙App下。

## 开发注意

对比非蒸汽，蒸汽模式有一些变更调整，有一些待完成TODO，说明如下：

### vue蒸汽模式自身变更
- **仅支持组合式，不支持选项式**
	选项式转组合式，AI可以帮忙。hello uni-app x里大量的选项式页面都是用AI转成了组合式，以适配蒸汽模式。[详见](../ai/README.md)
- 不再支持mixin

## css
- 变更：不支持关系选择器，只支持简单的class选择器
- 变更：css样式隔离策略有较大调整，尤其是组件默认不受外部css影响。 [详见](../DOM2规范/样式隔离管理规范.md)
- 新增和变更：组件样式支持external-class，废弃在属性上修改css的做法
	内置组件里过去有些样式定制放在属性上了，比如checkbox过去有color属性，以后就没有了。后续都通过class来修改样式。
	
	同时推荐组件作者也都使用class和external-class。减少属性和动态style设置样式。把样式设置放在组件属性上有诸多坏处：
	1. 抽象不佳。所有样式都变成属性是封装不完的，尤其是组件的子元素，external-class是更好的抽象。即让组件作者省事，又满足组件使用者灵活的样式定制需求。
	2. vue属性和动态style都要经过arkts层运算。而静态style、class、external-class是c层直接计算的，性能更高。
- TODO：还未实现css自定义变量
- TODO：css动画不支持排版相关动画（left、top、width、height、margin、padding），请改用translateX/Y、scale等方式进行动画


## 全局文件
pages.json
- TODO：没有tabbar，但有独立的tab-bar组件。见hello uni-app x蒸汽模式首页的uni-tab-bar使用示例。
- TODO：没有页面下拉刷新。有scroll-view和list-view的下拉刷新

## 组件
- TODO：缺少组件sticky（目前可以用嵌套滚动来替代实现吸顶）
- TODO：缺少组件waterflow
- 变更：布尔属性规范化。scroll-view等部分组件布尔属性默认值从true改为false。
- 新增和变更：swiper和表单组件中涉及样式的属性，从属性改为了external-class，支持更丰富的样式控制
- 新增：button多了loading属性
- 变更：list-view的变化和限制
	* list-view支持vue实例、dom的全面复用。不再需要之前模板示例中的复用长列表、分批加载长列表。
	* list-item的v-for必须要有:key。否则无法复用。
	* list-view下仅第一个在list-item上的v-for支持复用。如果一个list-view下多组list-item各自有v-for，第2个起的v-for并不复用
	* 符合条件能复用的list-item会当做真正的list-item，其他不符合复用条件的list-item都会被编译为view。
	* list-item和list-view需要有编译器能识别的父子关系，否则list-item会被编译成view，包括但不限于以下限制：
		+ list-item、list-view不能分别包装在不同的组件内。同时处于性能考虑，最好不要包装这2个组件。
		+ list-item不能通过slot插入到list-view内
	* 不支持scroll-into-view
	* list-view不支持横向滚动
	* list-item宽度固定为100%。从css中获取position属性的值固定为absolute。
- 新增：view、text、image这3个组件的flatten拍平属性
	拍平即不创建独立元素，而是绘制在父上。在审查元素边界时无法看到红框。
	`<view flatten></view>`
	该属性为初始化属性，不支持动态修改。
	被拍平的元素存在一些限制，具体如下，可根据需要设置flatten属性。
	* 拍平的元素无法支持事件（如click、touch）
	* 拍平时如下css不支持：
		1.不支持 Visibility
		2.不支持 Display
		3.不支持 ZIndex
		4.不支持 Background-image
		5.Box-shadow不支持设置inset
		6.不支持 Pointer-events
	* image拍平后无法播放动画，gif、webp动画仅显示第一帧

### 拍平（flatten）在鸿蒙平台注意事项  
支持 flatten属性的组件（如 View、Text、Image）在逻辑上均可设置为 true 以进行“拍平”，但实际性能优化效果需满足以下条件：  
`仅当存在至少两个相邻元素同时设置为拍平时，才能提升性能，否则可能导致性能下降。`  

相邻元素包括：  
- 兄弟节点  
  不要求直接紧挨，例如父元素 P 下有 C1、C2、C3 三个子元素，只要其中任意两个或以上设置为拍平，即可带来性能提升。  
- 父子节点  
  要求直接紧邻，例如 P → C → G 三层结构中：
  + 对 P 和 C、C 和 G，或 P、C、G 同时拍平，可优化性能。  
  + 若仅对 P 和 G 拍平（中间隔了 C），则无法优化。  
- 混合情况  
  只要存在至少两个相邻节点（父子或兄弟）同时拍平，即可获得性能优化。  

### 组件事件
- TOOD：暂未支持手势协商，目前表现是swiper中嵌套list、slider等，会出现滑动冲突。

## API
- 没有tabbar相关api。需使用uni-tab-bar组件相关属性设置。
- 没有页面滚动api。需要使用scroll-view相关api
- 没有页面下拉刷新及相关生命周期。需要使用scroll-view相关api

Element API
- 缺少animate
- 缺少create-Selector-query
- 缺少Drawable。dom2的view、text创建足够快且支持拍平，故优先级不高
	在蒸汽模式之前，为了高性能绘制，经常不能使用view和text组件，而是需要通过Drawable对象来绘制线条和文字，这种写法无法跨平台且复杂。\
	在蒸汽模式后，开发者可以正常使用view和text跨平台的开发，比如hello uni-app x的模板中的日历示例，之前是Drawable绘制，现在都是拍平的text组件。

其他还有一些差异，见文档的兼容性说明。兼容性表格已经新增了`HarmonyOS(Vapor)`一列。