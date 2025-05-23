# uni-app x 的App性能优化

uni-app x 开发的Android App，本质是换了一种写法的原生应用，性能达到了原生水平。

但即便是原生开发者，使用传统的Android开发，如果代码写不好，也一样性能很差。

uni-app x 的Android开发，其性能优化和web开发有几处不同，需要注意：

## Android对dom的数量和层次更苛刻

dom数量越多，渲染越慢。

以日历为例，web开发一般是每天一个view，里面再嵌套农历、假日等，一个日历可能有几百个dom元素。如果Android上这么做，会非常卡。

那么原生Android开发怎么做的呢？使用Android的开发者模式审查元素边界，可以发现rom自带的日历，并不是每个格子一个view，而是整个月都是一个view。

![](./static/calendar.jpg)

Android上为了避免view数量过多，提供了原始的draw api，把线条和文字绘制上去。

在 uni-app x 中，也提供了同样的方法，允许开发者调用绘制API。

hello uni-app x 示例中，有一个日历的模板页面，就是通过draw api来绘制的，性能非常高。[源码详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/calendar/calendar.uvue)

尤其是组件作者，更需要关注dom数量的问题。

再举一个例子，uni-app x 内部开发基础组件时，第一个版本的slider组件，使用了7个view，利用view的移动和不同颜色view的width变化来实现。当页面中有slider较多时会变成很卡。

后来 slider组件改为 draw api 实现，只需要一个view。即使一个页面里有100个slider也非常丝滑。与许多原生应用相比，uni-app x的 slider组件性能更优秀。

uni-app x 还提供了工具帮助开发者监控页面的dom数量。

HBuilderX真机运行到Android时，每个页面进入时会都打印页面初始化的数据：dom数量、排版次数、渲染耗时等。

![](./static/hxconsolepageperformance.png)

当然耗时数据不能以真机运行为准，调试基座因为热更新和sourcemap追踪等很多调试功能，导致性能比真实打包差。正式打包后性能更优。

国内应用大都不会采用google的Material Design组件，大多公司自己做组件。但这些组件库的质量层次不齐。可以说大部分国内原生应用自己做的组件库，没有uni-app x的组件性能高。

## 界面元素动画

动画，有2种，不跟随手势的固定动画，和跟随手势的动效。

固定动画使用css transition动画，或者使用 [animation-view组件](https://ext.dcloud.net.cn/plugin?id=10674)，这个组件本质是lottie动画。

跟随手势的动效，需要写逻辑代码。

uni-app x 中，没有通信阻塞，可以直接监听touch和滚动事件。不再需要renderjs、bindingx、wxs、worklet动画这些为了解决通信阻塞的补丁技术。

在touch和滚动事件中，移动dom元素时，有2个注意：
1. 请使用transform方式，而不是给dom的left/top/width/height等position参数重新赋值。这个在web开发也一样，直接改position参数不如使用transform。因为每次修改position参数都要过排版，而transform不用。
2. 请拿到dom的id/ref，调用js api操作，而不是通过模板style绑定data操作。因为操作data需要vue框架做diff对比，直接API操作则可以跳过vue框架。在touch和滚动中，16毫秒一帧才能达到最平滑的效果，多了几毫秒就可能掉帧。

在大多数开发框架中，因为通信性能问题，吸顶这个行为需要底层特殊封装。而 uni-app x 无需特别封装，直接监听滚动事件，通过dom的api以transform方式修改top值，就能自己编写逻辑控制在指定条件下实现固顶。

源码参考hello uni-app x中的吸顶示例，这充分体现了 uni-app x 引擎底层的通信性能多么优秀。[详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/scroll-sticky/scroll-sticky.uvue)

还有一个注意事项，当通过动画修改一个元素的高度或top值时，注意元素下部其他元素的联动反应。

比如上元素通过transform变高，虽然上元素的变化是平滑的，但下面的元素数量如果很多，且因为自动排版的原因，在不停的根据上元素变化而移动每个下面元素的top，这也会导致ui卡顿。

这个例子在折叠面板里存在，展开上面的折叠面板A时，推荐的做法是A的高度不做动画，直接变高，然后A的子元素以动画方式出现。看起来也有动效，且A下面的B、C、D等折叠面板元素只发生一次位移排版。

## 避免复杂逻辑卡UI

开发者的代码默认是在ui主线程运行的。除非单独写代码调用子进程或协程。

如果在ui繁忙时，比如页面进入动画时，开发者的代码做了很多耗时操作，会卡动画。原生开发也如此。

页面的onload触发，和进入动画是同时发生的，所以需注意onload生命周期中代码的编写。

由于uni-app x提供的联网和图片加载是在单独进程或协程中的，所以这2个行为不会卡ui。最佳实践是在onload里进行联网取数。

如果onload里某些代码卡了进入动画，也可以挪到页面的onready生命周期中，该事件触发的更晚一些。

页面dom元素过多的话，也会影响进入动画，所以尽量节省dom数量。

## 长列表

关于长列表，uni-app x提供了2种方案
1. 内置的[list-view组件](./component/list-view.md)
2. 自定义的虚拟列表组件uni-recycle-view。

uni-app x 的 list-view组件，是基于原生的recycle-view的。无论多长的列表，系统也会自动回收和复用渲染资源，和原生应用一样的体验，但开发更简单。

一般联网加载的分页式列表，使用list-view组件即可。

但在vue环境下，装载长列表会对列表所有数据都创建VNode，不管渲染层这些列表是否显示。创建大量VNode会影响初始化速度和内存占用。

虚拟列表组件uni-recycle-view，只创建了有限的VNode，循环复用这些VNode。uni-recycle-view组件内部通过计算决定哪些数据需要在界面展示，默认展示当前滚动位置的所在屏及上下各5屏的数据。

同时它也有一些限制和注意事项：
1. uni-recycle-view 组件适用于仅使用一个for循环创建所有列表项的场景。
2. 由于滚动过程中会计算哪些数据需要渲染，因此滚动流畅度略低于list-view组件。

所以uni-recycle-view 组件是对list-view组件的一个补充方案。如果list-view的初始化速度和内存占用满足你的需求，那么继续使用list-view即可。

一般联网的分页加载列表，仍然可以使用list-view。uni-recycle-view 组件常见的场景是本地一次性遍历了大量数据并需要立即渲染在界面上。

在[Hello uni-app x的模板->自定义虚拟长列表示例](https://gitcode.net/dcloud/hello-uni-app-x/-/tree/dev/pages/template/custom-long-list)中可以看到演示。


另外**注意列表项目里的组件数量**，它是dom元素的放大器。每个list-item里的dom数量多一点，乘以item数量，就会产生非常多dom，页面性能就很容易被拖垮。

比如很多列表有评星，如果使用一个5个view的评星组件，那每个list-item都会多5个view，列表一长dom数量会惊人。

在hello uni-app x的复杂长列表示例中，评星没有使用任何自定义组件，只是一个text组件里面使用字体图标放了5个字符，极大减少组件数量。[详见](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/template/long-list/long-list-page.uvue)


## 优化排版效率

HBuilderX真机运行到Android时，每个页面进入时会都打印页面初始化的数据：dom数量、排版次数、渲染耗时等。

![](./static/hxconsolepageperformance.png)

但这个数值是调试模式的数值，发布打包后比这个数字更快。所以这个数字是用于开发期间的参考，而不能用于release包的性能评估。

dom数量优化前文已经讲了，那么如何优化排版效率？

1. 首先还是dom元素数量和层级，直接影响排版
2. 给dom元素指定明确的宽高，而不是很多自适应计算，可以提高排版效率。比如父节点未指定宽高，需要等所有子节点计算好宽高后把父节点撑开，这样就会比较低效。
3. 指定主轴方向的尺寸可以减少递归的深度
4. 文字测量属于耗时操作，给text组件指定宽高可以提升排版效率
5. 指定图片的尺寸信息可以减少排版次数
6. css单位尺寸性能比较，px > rpx > 百分比，使用百分比时父节点有明确宽高或者不依赖子节点确定宽高可以提升排版效率

## 控制vue的更新范围
vue的data更新时，会自动触发页面渲染更新。

更新是差量的，但计算差量也是耗费时间的。所以应减少对大data的修改。如果大data里有可能动态更新的小data，不如单独再存放一个小data数据。

另外更新ui时，如果vue框架能找到最小化组件，则会只更新该组件的渲染。所以尽量避免更新data引发大量ui重绘。\
比如长列表里有可点击的收藏按钮，点击后会动态更新收藏状态的数据，此时建议把收藏做一个单独的组件，这样某个item的收藏状态的更新，就不会触发整个列表的重绘。

## 避免不必要的组件抽象
有些时候我们会去创建组件来实现更好的抽象或代码组织。虽然这并没有什么问题，但请记住，创建太多组件实例将会导致性能损失。

需要提醒的是，只减少几个组件实例对于性能不会有明显的改善，所以如果一个用于抽象的组件在应用中只会渲染几次，就不用操心去优化它了。考虑这种优化的最佳场景还是在大型列表中。想象一下一个有 100 项的列表，每项的组件都包含许多子组件。在这里去掉一个不必要的组件抽象，可能会减少数百个组件实例的无谓性能消耗。

## 引擎体积

uni-app x的Android引擎体积为7.51M。
