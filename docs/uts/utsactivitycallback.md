# UTSActivityCallback
  
 为了更好的对外暴露activity的方法，我们把activity里面包含的方法按照继承关系进行了分类，下面是分类标准

第一类：activity生命周期相关方法[UniActivityLifeCycleCallback](https://doc.dcloud.net.cn/uni-app-x/uts/utsactivitycallback.html#UniActivityLifeCycleCallback)\
比如 oncreate,ondestory 等\
第二类: 键盘事件相关方法[UniActivityKeyEventCallback](https://doc.dcloud.net.cn/uni-app-x/uts/utsactivitycallback.html#UniActivityKeyEventCallback)\
比如 onKeyDown,onKeyUp等\
第三类:window窗体的相关方法[UniActivityWindowCallback](https://doc.dcloud.net.cn/uni-app-x/uts/utsactivitycallback.html#UniActivityWindowCallback)\
比如onCreatePanelMenu，onWindowDismissed等\
第四类:activity本身自带的相关方法，不继承自其他类[UniActivityCallback](https://doc.dcloud.net.cn/uni-app-x/uts/utsactivitycallback.html#UniActivityCallback)\
比如onProvideAssistData等

> 因为uni-app x 暂不支持launchMode配置，所以 UniActivityCallback暂时不支持onNewIntent

第五类：Component 组件相关方法[UniActivityComponentCallback](https://doc.dcloud.net.cn/uni-app-x/uts/utsactivitycallback.html#UniActivityComponentCallback)\
比如onTrimMemory等

并且上面的五个类都为IUniActivityCallback的实现类，我们在使用的时候可以传入具体的实现类，然后按照具体需求重写其中的某个方法，具体用法参考[示例](https://doc.dcloud.net.cn/uni-app-x/uts/utsactivitycallback.html#示例)



## UniActivityCallback

> HBuilder X  4.62 之后版本 UniActivityParams 新增 activity 即当前activity实例对象

### 实例方法


#### onAttachFragment(params, fragment)

<!-- UTSJSON.UniActivityCallback.onAttachFragment.description -->

<!-- UTSJSON.UniActivityCallback.onAttachFragment.param -->

<!-- UTSJSON.UniActivityCallback.onAttachFragment.returnValue -->

<!-- UTSJSON.UniActivityCallback.onAttachFragment.compatibility -->

<!-- UTSJSON.UniActivityCallback.onAttachFragment.tutorial -->

#### onUserInteraction(params)

<!-- UTSJSON.UniActivityCallback.onUserInteraction.description -->

<!-- UTSJSON.UniActivityCallback.onUserInteraction.param -->

<!-- UTSJSON.UniActivityCallback.onUserInteraction.returnValue -->

<!-- UTSJSON.UniActivityCallback.onUserInteraction.compatibility -->

<!-- UTSJSON.UniActivityCallback.onUserInteraction.tutorial -->

#### onUserLeaveHint(params)

<!-- UTSJSON.UniActivityCallback.onUserLeaveHint.description -->

<!-- UTSJSON.UniActivityCallback.onUserLeaveHint.param -->

<!-- UTSJSON.UniActivityCallback.onUserLeaveHint.returnValue -->

<!-- UTSJSON.UniActivityCallback.onUserLeaveHint.compatibility -->

<!-- UTSJSON.UniActivityCallback.onUserLeaveHint.tutorial -->

#### onActivityResult(params, requestCode, resultCode, data)

<!-- UTSJSON.UniActivityCallback.onActivityResult.description -->

<!-- UTSJSON.UniActivityCallback.onActivityResult.param -->

<!-- UTSJSON.UniActivityCallback.onActivityResult.returnValue -->

<!-- UTSJSON.UniActivityCallback.onActivityResult.compatibility -->

<!-- UTSJSON.UniActivityCallback.onActivityResult.tutorial -->

#### onRequestPermissionsResult(params, requestCode, permissions, grantResults)

<!-- UTSJSON.UniActivityCallback.onRequestPermissionsResult.description -->

<!-- UTSJSON.UniActivityCallback.onRequestPermissionsResult.param -->

<!-- UTSJSON.UniActivityCallback.onRequestPermissionsResult.returnValue -->

<!-- UTSJSON.UniActivityCallback.onRequestPermissionsResult.compatibility -->

<!-- UTSJSON.UniActivityCallback.onRequestPermissionsResult.tutorial -->

#### onApplyThemeResource(params, theme, resid, first)

<!-- UTSJSON.UniActivityCallback.onApplyThemeResource.description -->

<!-- UTSJSON.UniActivityCallback.onApplyThemeResource.param -->

<!-- UTSJSON.UniActivityCallback.onApplyThemeResource.returnValue -->

<!-- UTSJSON.UniActivityCallback.onApplyThemeResource.compatibility -->

<!-- UTSJSON.UniActivityCallback.onApplyThemeResource.tutorial -->

#### onCreateView(params, parent, name, context, attrs)

<!-- UTSJSON.UniActivityCallback.onCreateView.description -->

<!-- UTSJSON.UniActivityCallback.onCreateView.param -->

<!-- UTSJSON.UniActivityCallback.onCreateView.returnValue -->

<!-- UTSJSON.UniActivityCallback.onCreateView.compatibility -->

<!-- UTSJSON.UniActivityCallback.onCreateView.tutorial -->

#### onTitleChanged(params, title, color)

<!-- UTSJSON.UniActivityCallback.onTitleChanged.description -->

<!-- UTSJSON.UniActivityCallback.onTitleChanged.param -->

<!-- UTSJSON.UniActivityCallback.onTitleChanged.returnValue -->

<!-- UTSJSON.UniActivityCallback.onTitleChanged.compatibility -->

<!-- UTSJSON.UniActivityCallback.onTitleChanged.tutorial -->

#### onChildTitleChanged(params, childActivity, title)

<!-- UTSJSON.UniActivityCallback.onChildTitleChanged.description -->

<!-- UTSJSON.UniActivityCallback.onChildTitleChanged.param -->

<!-- UTSJSON.UniActivityCallback.onChildTitleChanged.returnValue -->

<!-- UTSJSON.UniActivityCallback.onChildTitleChanged.compatibility -->

<!-- UTSJSON.UniActivityCallback.onChildTitleChanged.tutorial -->

#### onContextMenuClosed(params, menu)

<!-- UTSJSON.UniActivityCallback.onContextMenuClosed.description -->

<!-- UTSJSON.UniActivityCallback.onContextMenuClosed.param -->

<!-- UTSJSON.UniActivityCallback.onContextMenuClosed.returnValue -->

<!-- UTSJSON.UniActivityCallback.onContextMenuClosed.compatibility -->

<!-- UTSJSON.UniActivityCallback.onContextMenuClosed.tutorial -->

#### onCreateContextMenu(params, menu, v, menuInfo)

<!-- UTSJSON.UniActivityCallback.onCreateContextMenu.description -->

<!-- UTSJSON.UniActivityCallback.onCreateContextMenu.param -->

<!-- UTSJSON.UniActivityCallback.onCreateContextMenu.returnValue -->

<!-- UTSJSON.UniActivityCallback.onCreateContextMenu.compatibility -->

<!-- UTSJSON.UniActivityCallback.onCreateContextMenu.tutorial -->

#### onOptionsMenuClosed(params, menu)

<!-- UTSJSON.UniActivityCallback.onOptionsMenuClosed.description -->

<!-- UTSJSON.UniActivityCallback.onOptionsMenuClosed.param -->

<!-- UTSJSON.UniActivityCallback.onOptionsMenuClosed.returnValue -->

<!-- UTSJSON.UniActivityCallback.onOptionsMenuClosed.compatibility -->

<!-- UTSJSON.UniActivityCallback.onOptionsMenuClosed.tutorial -->

#### onPrepareNavigateUpTaskStack(params, builder)

<!-- UTSJSON.UniActivityCallback.onPrepareNavigateUpTaskStack.description -->

<!-- UTSJSON.UniActivityCallback.onPrepareNavigateUpTaskStack.param -->

<!-- UTSJSON.UniActivityCallback.onPrepareNavigateUpTaskStack.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPrepareNavigateUpTaskStack.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPrepareNavigateUpTaskStack.tutorial -->

#### onProvideAssistData(params, data)

<!-- UTSJSON.UniActivityCallback.onProvideAssistData.description -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistData.param -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistData.returnValue -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistData.compatibility -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistData.tutorial -->

#### onProvideAssistContent(params, outContent)

<!-- UTSJSON.UniActivityCallback.onProvideAssistContent.description -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistContent.param -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistContent.returnValue -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistContent.compatibility -->

<!-- UTSJSON.UniActivityCallback.onProvideAssistContent.tutorial -->

#### onPreAttachFragment(params, fragment)

<!-- UTSJSON.UniActivityCallback.onPreAttachFragment.description -->

<!-- UTSJSON.UniActivityCallback.onPreAttachFragment.param -->

<!-- UTSJSON.UniActivityCallback.onPreAttachFragment.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreAttachFragment.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreAttachFragment.tutorial -->

#### onPreUserInteraction(params)

<!-- UTSJSON.UniActivityCallback.onPreUserInteraction.description -->

<!-- UTSJSON.UniActivityCallback.onPreUserInteraction.param -->

<!-- UTSJSON.UniActivityCallback.onPreUserInteraction.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreUserInteraction.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreUserInteraction.tutorial -->

#### onPreUserLeaveHint(params)

<!-- UTSJSON.UniActivityCallback.onPreUserLeaveHint.description -->

<!-- UTSJSON.UniActivityCallback.onPreUserLeaveHint.param -->

<!-- UTSJSON.UniActivityCallback.onPreUserLeaveHint.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreUserLeaveHint.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreUserLeaveHint.tutorial -->

#### onPreActivityResult(params, requestCode, resultCode, data)

<!-- UTSJSON.UniActivityCallback.onPreActivityResult.description -->

<!-- UTSJSON.UniActivityCallback.onPreActivityResult.param -->

<!-- UTSJSON.UniActivityCallback.onPreActivityResult.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreActivityResult.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreActivityResult.tutorial -->

#### onPreRequestPermissionsResult(params, requestCode, permissions, grantResults)

<!-- UTSJSON.UniActivityCallback.onPreRequestPermissionsResult.description -->

<!-- UTSJSON.UniActivityCallback.onPreRequestPermissionsResult.param -->

<!-- UTSJSON.UniActivityCallback.onPreRequestPermissionsResult.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreRequestPermissionsResult.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreRequestPermissionsResult.tutorial -->

#### onPreApplyThemeResource(params, theme, resid, first)

<!-- UTSJSON.UniActivityCallback.onPreApplyThemeResource.description -->

<!-- UTSJSON.UniActivityCallback.onPreApplyThemeResource.param -->

<!-- UTSJSON.UniActivityCallback.onPreApplyThemeResource.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreApplyThemeResource.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreApplyThemeResource.tutorial -->

#### onPreCreateView(params, parent, name, context, attrs)

<!-- UTSJSON.UniActivityCallback.onPreCreateView.description -->

<!-- UTSJSON.UniActivityCallback.onPreCreateView.param -->

<!-- UTSJSON.UniActivityCallback.onPreCreateView.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreCreateView.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreCreateView.tutorial -->

#### onPreTitleChanged(params, title, color)

<!-- UTSJSON.UniActivityCallback.onPreTitleChanged.description -->

<!-- UTSJSON.UniActivityCallback.onPreTitleChanged.param -->

<!-- UTSJSON.UniActivityCallback.onPreTitleChanged.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreTitleChanged.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreTitleChanged.tutorial -->

#### onPreChildTitleChanged(params, childActivity, title)

<!-- UTSJSON.UniActivityCallback.onPreChildTitleChanged.description -->

<!-- UTSJSON.UniActivityCallback.onPreChildTitleChanged.param -->

<!-- UTSJSON.UniActivityCallback.onPreChildTitleChanged.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreChildTitleChanged.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreChildTitleChanged.tutorial -->

#### onPreContextMenuClosed(params, menu)

<!-- UTSJSON.UniActivityCallback.onPreContextMenuClosed.description -->

<!-- UTSJSON.UniActivityCallback.onPreContextMenuClosed.param -->

<!-- UTSJSON.UniActivityCallback.onPreContextMenuClosed.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreContextMenuClosed.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreContextMenuClosed.tutorial -->

#### onPreCreateContextMenu(params, menu, v, menuInfo)

<!-- UTSJSON.UniActivityCallback.onPreCreateContextMenu.description -->

<!-- UTSJSON.UniActivityCallback.onPreCreateContextMenu.param -->

<!-- UTSJSON.UniActivityCallback.onPreCreateContextMenu.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreCreateContextMenu.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreCreateContextMenu.tutorial -->

#### onPreOptionsMenuClosed(params, menu)

<!-- UTSJSON.UniActivityCallback.onPreOptionsMenuClosed.description -->

<!-- UTSJSON.UniActivityCallback.onPreOptionsMenuClosed.param -->

<!-- UTSJSON.UniActivityCallback.onPreOptionsMenuClosed.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreOptionsMenuClosed.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreOptionsMenuClosed.tutorial -->

#### onPrePrepareNavigateUpTaskStack(params, builder)

<!-- UTSJSON.UniActivityCallback.onPrePrepareNavigateUpTaskStack.description -->

<!-- UTSJSON.UniActivityCallback.onPrePrepareNavigateUpTaskStack.param -->

<!-- UTSJSON.UniActivityCallback.onPrePrepareNavigateUpTaskStack.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPrePrepareNavigateUpTaskStack.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPrePrepareNavigateUpTaskStack.tutorial -->

#### onPreProvideAssistData(params, data)

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistData.description -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistData.param -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistData.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistData.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistData.tutorial -->

#### onPreProvideAssistContent(params, outContent)

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistContent.description -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistContent.param -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistContent.returnValue -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistContent.compatibility -->

<!-- UTSJSON.UniActivityCallback.onPreProvideAssistContent.tutorial -->

## UniActivityComponentCallback


### 实例方法


#### onConfigurationChanged(params, newConfig)

<!-- UTSJSON.UniActivityComponentCallback.onConfigurationChanged.description -->

<!-- UTSJSON.UniActivityComponentCallback.onConfigurationChanged.param -->

<!-- UTSJSON.UniActivityComponentCallback.onConfigurationChanged.returnValue -->

<!-- UTSJSON.UniActivityComponentCallback.onConfigurationChanged.compatibility -->

<!-- UTSJSON.UniActivityComponentCallback.onConfigurationChanged.tutorial -->

#### onLowMemory(params)

<!-- UTSJSON.UniActivityComponentCallback.onLowMemory.description -->

<!-- UTSJSON.UniActivityComponentCallback.onLowMemory.param -->

<!-- UTSJSON.UniActivityComponentCallback.onLowMemory.returnValue -->

<!-- UTSJSON.UniActivityComponentCallback.onLowMemory.compatibility -->

<!-- UTSJSON.UniActivityComponentCallback.onLowMemory.tutorial -->

#### onTrimMemory(params, level)

<!-- UTSJSON.UniActivityComponentCallback.onTrimMemory.description -->

<!-- UTSJSON.UniActivityComponentCallback.onTrimMemory.param -->

<!-- UTSJSON.UniActivityComponentCallback.onTrimMemory.returnValue -->

<!-- UTSJSON.UniActivityComponentCallback.onTrimMemory.compatibility -->

<!-- UTSJSON.UniActivityComponentCallback.onTrimMemory.tutorial -->

#### onPreConfigurationChanged(params, newConfig)

<!-- UTSJSON.UniActivityComponentCallback.onPreConfigurationChanged.description -->

<!-- UTSJSON.UniActivityComponentCallback.onPreConfigurationChanged.param -->

<!-- UTSJSON.UniActivityComponentCallback.onPreConfigurationChanged.returnValue -->

<!-- UTSJSON.UniActivityComponentCallback.onPreConfigurationChanged.compatibility -->

<!-- UTSJSON.UniActivityComponentCallback.onPreConfigurationChanged.tutorial -->

#### onPreLowMemory(params)

<!-- UTSJSON.UniActivityComponentCallback.onPreLowMemory.description -->

<!-- UTSJSON.UniActivityComponentCallback.onPreLowMemory.param -->

<!-- UTSJSON.UniActivityComponentCallback.onPreLowMemory.returnValue -->

<!-- UTSJSON.UniActivityComponentCallback.onPreLowMemory.compatibility -->

<!-- UTSJSON.UniActivityComponentCallback.onPreLowMemory.tutorial -->

#### onPreTrimMemory(params, level)

<!-- UTSJSON.UniActivityComponentCallback.onPreTrimMemory.description -->

<!-- UTSJSON.UniActivityComponentCallback.onPreTrimMemory.param -->

<!-- UTSJSON.UniActivityComponentCallback.onPreTrimMemory.returnValue -->

<!-- UTSJSON.UniActivityComponentCallback.onPreTrimMemory.compatibility -->

<!-- UTSJSON.UniActivityComponentCallback.onPreTrimMemory.tutorial -->

## UniActivityKeyEventCallback


### 实例方法


#### onKeyDown(params, keyCode, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyDown.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyDown.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyDown.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyDown.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyDown.tutorial -->

#### onKeyLongPress(params, keyCode, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyLongPress.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyLongPress.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyLongPress.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyLongPress.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyLongPress.tutorial -->

#### onKeyUp(params, keyCode, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyUp.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyUp.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyUp.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyUp.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyUp.tutorial -->

#### onKeyMultiple(params, keyCode, repeatCount, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyMultiple.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyMultiple.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyMultiple.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyMultiple.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onKeyMultiple.tutorial -->

#### onPreKeyDown(params, keyCode, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyDown.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyDown.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyDown.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyDown.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyDown.tutorial -->

#### onPreKeyLongPress(params, keyCode, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyLongPress.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyLongPress.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyLongPress.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyLongPress.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyLongPress.tutorial -->

#### onPreKeyUp(params, keyCode, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyUp.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyUp.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyUp.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyUp.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyUp.tutorial -->

#### onPreKeyMultiple(params, keyCode, repeatCount, event)

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyMultiple.description -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyMultiple.param -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyMultiple.returnValue -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyMultiple.compatibility -->

<!-- UTSJSON.UniActivityKeyEventCallback.onPreKeyMultiple.tutorial -->

## UniActivityLifeCycleCallback


### 实例方法


#### onCreate(params, savedInstanceState)

<!-- UTSJSON.UniActivityLifeCycleCallback.onCreate.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onCreate.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onCreate.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onCreate.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onCreate.tutorial -->

#### onPreCreate(params, savedInstanceState)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreCreate.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreCreate.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreCreate.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreCreate.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreCreate.tutorial -->

#### onStart(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onStart.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStart.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStart.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStart.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStart.tutorial -->

#### onPreStart(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStart.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStart.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStart.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStart.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStart.tutorial -->

#### onRestart(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onRestart.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onRestart.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onRestart.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onRestart.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onRestart.tutorial -->

#### onPreRestart(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreRestart.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreRestart.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreRestart.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreRestart.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreRestart.tutorial -->

#### onResume(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onResume.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onResume.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onResume.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onResume.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onResume.tutorial -->

#### onPreResume(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreResume.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreResume.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreResume.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreResume.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreResume.tutorial -->

#### onPause(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPause.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPause.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPause.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPause.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPause.tutorial -->

#### onPrePause(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPrePause.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPrePause.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPrePause.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPrePause.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPrePause.tutorial -->

#### onStop(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onStop.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStop.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStop.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStop.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onStop.tutorial -->

#### onPreStop(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStop.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStop.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStop.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStop.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreStop.tutorial -->

#### onDestroy(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onDestroy.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onDestroy.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onDestroy.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onDestroy.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onDestroy.tutorial -->

#### onPreDestroy(params)

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreDestroy.description -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreDestroy.param -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreDestroy.returnValue -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreDestroy.compatibility -->

<!-- UTSJSON.UniActivityLifeCycleCallback.onPreDestroy.tutorial -->

## UniActivityWindowCallback


### 实例方法


#### onDetachedFromWindow(params)

<!-- UTSJSON.UniActivityWindowCallback.onDetachedFromWindow.description -->

<!-- UTSJSON.UniActivityWindowCallback.onDetachedFromWindow.param -->

<!-- UTSJSON.UniActivityWindowCallback.onDetachedFromWindow.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onDetachedFromWindow.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onDetachedFromWindow.tutorial -->

#### onContentChanged(params)

<!-- UTSJSON.UniActivityWindowCallback.onContentChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onContentChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onContentChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onContentChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onContentChanged.tutorial -->

#### onWindowAttributesChanged(params, attrs)

<!-- UTSJSON.UniActivityWindowCallback.onWindowAttributesChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowAttributesChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowAttributesChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowAttributesChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowAttributesChanged.tutorial -->

#### onWindowFocusChanged(params, hasFocus)

<!-- UTSJSON.UniActivityWindowCallback.onWindowFocusChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowFocusChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowFocusChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowFocusChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowFocusChanged.tutorial -->

#### onAttachedToWindow(params)

<!-- UTSJSON.UniActivityWindowCallback.onAttachedToWindow.description -->

<!-- UTSJSON.UniActivityWindowCallback.onAttachedToWindow.param -->

<!-- UTSJSON.UniActivityWindowCallback.onAttachedToWindow.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onAttachedToWindow.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onAttachedToWindow.tutorial -->

#### onPanelClosed(params, featureId, menu)

<!-- UTSJSON.UniActivityWindowCallback.onPanelClosed.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPanelClosed.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPanelClosed.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPanelClosed.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPanelClosed.tutorial -->

#### onSearchRequested(params)

<!-- UTSJSON.UniActivityWindowCallback.onSearchRequested.description -->

<!-- UTSJSON.UniActivityWindowCallback.onSearchRequested.param -->

<!-- UTSJSON.UniActivityWindowCallback.onSearchRequested.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onSearchRequested.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onSearchRequested.tutorial -->

#### onWindowStartingActionMode(params, callback)

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode.description -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode.param -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode.tutorial -->

#### onWindowStartingActionMode(params, callback, type)_1

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode_1.description -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode_1.param -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode_1.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode_1.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onWindowStartingActionMode_1.tutorial -->

#### onActionModeFinished(params, mode)

<!-- UTSJSON.UniActivityWindowCallback.onActionModeFinished.description -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeFinished.param -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeFinished.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeFinished.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeFinished.tutorial -->

#### onActionModeStarted(params, mode)

<!-- UTSJSON.UniActivityWindowCallback.onActionModeStarted.description -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeStarted.param -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeStarted.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeStarted.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onActionModeStarted.tutorial -->

#### onProvideKeyboardShortcuts(params, data, menu, deviceId)

<!-- UTSJSON.UniActivityWindowCallback.onProvideKeyboardShortcuts.description -->

<!-- UTSJSON.UniActivityWindowCallback.onProvideKeyboardShortcuts.param -->

<!-- UTSJSON.UniActivityWindowCallback.onProvideKeyboardShortcuts.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onProvideKeyboardShortcuts.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onProvideKeyboardShortcuts.tutorial -->

#### onPointerCaptureChanged(params, hasCapture)

<!-- UTSJSON.UniActivityWindowCallback.onPointerCaptureChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPointerCaptureChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPointerCaptureChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPointerCaptureChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPointerCaptureChanged.tutorial -->

#### onPreDetachedFromWindow(params)

<!-- UTSJSON.UniActivityWindowCallback.onPreDetachedFromWindow.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreDetachedFromWindow.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreDetachedFromWindow.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreDetachedFromWindow.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreDetachedFromWindow.tutorial -->

#### onPreContentChanged(params)

<!-- UTSJSON.UniActivityWindowCallback.onPreContentChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreContentChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreContentChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreContentChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreContentChanged.tutorial -->

#### onPreWindowAttributesChanged(params, attrs)

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowAttributesChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowAttributesChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowAttributesChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowAttributesChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowAttributesChanged.tutorial -->

#### onPreWindowFocusChanged(params, hasFocus)

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowFocusChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowFocusChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowFocusChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowFocusChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowFocusChanged.tutorial -->

#### onPreAttachedToWindow(params)

<!-- UTSJSON.UniActivityWindowCallback.onPreAttachedToWindow.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreAttachedToWindow.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreAttachedToWindow.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreAttachedToWindow.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreAttachedToWindow.tutorial -->

#### onPrePanelClosed(params, featureId, menu)

<!-- UTSJSON.UniActivityWindowCallback.onPrePanelClosed.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePanelClosed.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePanelClosed.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePanelClosed.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePanelClosed.tutorial -->

#### onPreSearchRequested(params)

<!-- UTSJSON.UniActivityWindowCallback.onPreSearchRequested.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreSearchRequested.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreSearchRequested.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreSearchRequested.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreSearchRequested.tutorial -->

#### onPreWindowStartingActionMode(params, callback)

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode.tutorial -->

#### onPreWindowStartingActionMode(params, callback, type)_1

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode_1.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode_1.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode_1.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode_1.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreWindowStartingActionMode_1.tutorial -->

#### onPreActionModeFinished(params, mode)

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeFinished.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeFinished.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeFinished.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeFinished.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeFinished.tutorial -->

#### onPreActionModeStarted(params, mode)

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeStarted.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeStarted.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeStarted.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeStarted.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreActionModeStarted.tutorial -->

#### onPreProvideKeyboardShortcuts(params, data, menu, deviceId)

<!-- UTSJSON.UniActivityWindowCallback.onPreProvideKeyboardShortcuts.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPreProvideKeyboardShortcuts.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPreProvideKeyboardShortcuts.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPreProvideKeyboardShortcuts.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPreProvideKeyboardShortcuts.tutorial -->

#### onPrePointerCaptureChanged(params, hasCapture)

<!-- UTSJSON.UniActivityWindowCallback.onPrePointerCaptureChanged.description -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePointerCaptureChanged.param -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePointerCaptureChanged.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePointerCaptureChanged.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.onPrePointerCaptureChanged.tutorial -->

#### dispatchKeyEvent(params, event)

<!-- UTSJSON.UniActivityWindowCallback.dispatchKeyEvent.description -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchKeyEvent.param -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchKeyEvent.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchKeyEvent.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchKeyEvent.tutorial -->

#### dispatchPreKeyEvent(params, event)

<!-- UTSJSON.UniActivityWindowCallback.dispatchPreKeyEvent.description -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchPreKeyEvent.param -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchPreKeyEvent.returnValue -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchPreKeyEvent.compatibility -->

<!-- UTSJSON.UniActivityWindowCallback.dispatchPreKeyEvent.tutorial -->

## 示例

uvue代码

```vue
  <template>
  <!-- #ifdef APP-ANDROID -->
  <scroll-view style="flex: 1">
    <view>
      <view class="uni-padding-wrap uni-common-mt">
        <view class="text-box" scroll-y="true">
          <text>{{ text }}</text>
        </view>
      </view>
      <button @tap="activityCallback">注册activity 回调方法</button>
      <view class="uni-padding-wrap uni-common-mt">
        <view class="uni-hello-text">
          点击注册activity 回调方法后，可以手动切换其他APP再返回，可在控制台和界面观察事件日志
        </view>
      </view>
      <view class="uni-padding-wrap uni-common-mt">
        <view class="text-box" scroll-y="true">
          <text>{{ cbText }}</text>
        </view>
      </view>
      <button @tap="unRegActivityCallback">取消注册activity 回调方法</button>
    </view>
  </scroll-view>
  <!-- #endif -->
</template>

<script>
  // #ifdef APP-ANDROID
  import {
    UTSAcvitiyLifeCycleCallback,
    UTSAcvitiyKeyEventCallback,
    UTSActivityWindowCallback,
    UTSActivityCallback,
    UTSActivityComponentCallback,
    onCallbackChange
  } from '@/uni_modules/uts-syntaxcase'
  // #endif


  import File from 'java.io.File';
  import Intent from 'android.content.Intent';


  export default {
    data() {
      return {
        cbText: "" as string,  
        text: '',
        callback: [] as Any[]
      }
    },
    unmounted() {
      // #ifdef APP-ANDROID
      this.unRegActivityCallback()
      // #endif

    },
    methods: {
      // #ifdef APP-ANDROID
      // #ifdef UNI-APP-X
      activityCallback() {
        var that = this
        onCallbackChange(function (eventLog : string) {
          // 展示捕捉到的声明周期日志
          let nextLine = that.cbText + eventLog
          that.cbText = nextLine
          let nextLineFlag = that.cbText + '\n'
          that.cbText = nextLineFlag
        })
        let index = getCurrentPages().length - 1
        let page = getCurrentPages()[index]
        console.log('page route=' + page.route)
        this.callback.push(new UTSAcvitiyLifeCycleCallback())
        this.callback.push(new UTSActivityWindowCallback())
        this.callback.push(new UTSAcvitiyKeyEventCallback())
        this.callback.push(new UTSActivityCallback(), page.route)
        this.callback.push(new UTSActivityComponentCallback())
        this.callback.forEach((value) => {
          if (value instanceof UTSAcvitiyLifeCycleCallback) {
            UTSAndroid.onActivityCallback(value,page.route)
          }
          if (value instanceof UTSActivityWindowCallback) {
            UTSAndroid.onActivityCallback(value)
          }
          if (value instanceof UTSAcvitiyKeyEventCallback) {
            UTSAndroid.onActivityCallback(value)
          }
          if (value instanceof UTSActivityCallback) {
            UTSAndroid.onActivityCallback(value)
          }
          if (value instanceof UTSActivityComponentCallback) {
            UTSAndroid.onActivityCallback(value)
          }

        })
      },
      unRegActivityCallback() {
        this.callback.forEach((value) => {

          if (value instanceof UTSAcvitiyLifeCycleCallback) {
            UTSAndroid.offActivityCallback(value)
          }
          if (value instanceof UTSActivityWindowCallback) {
            UTSAndroid.offActivityCallback(value)
          }
          if (value instanceof UTSAcvitiyKeyEventCallback) {
            UTSAndroid.offActivityCallback(value)
          }
          if (value instanceof UTSActivityCallback) {
            UTSAndroid.offActivityCallback(value)
          }
          if (value instanceof UTSActivityComponentCallback) {
            UTSAndroid.offActivityCallback(value)
          }
        })
      }
      // #endif
      // #endif
    },
  }
</script>
```
uts代码

```ts
import Bundle from "android.os.Bundle"  
import KeyEvent from "android.view.KeyEvent"  
import WindowManager from "android.view.WindowManager"   
import Menu from "android.view.Menu"  
import ActionMode from "android.view.ActionMode"  
import Configuration from "android.content.res.Configuration"  
import KeyboardShortcutGroup from "android.view.KeyboardShortcutGroup";  


let callback : (eventLog : string) => void = (res) => { };

export function onCallbackChange(fn : (eventLog : string) => void) {
  callback = fn
}

export class UTSAcvitiyLifeCycleCallback extends UniActivityLifeCycleCallback {
  constructor() {
    super()
  }
  override onCreate(params : UniActivityParams, savedInstanceState : Bundle | null) {
    console.log('UTSAcvitiyLifeCycle', 'onCreate', savedInstanceState)
    callback('onCreate')
  }

  override onResume(params : UniActivityParams) {
    console.log('UTSAcvitiyLifeCycle', 'onResume', params)
    callback('onResume')
  }
  override onPreResume(params : UniActivityParams) {
    console.log('UTSAcvitiyLifeCycle', 'onPreResume', params)
    callback('onPreResume')
  }
  override onStart(params : UniActivityParams) {
    console.log('UTSAcvitiyLifeCycle', 'onStart', params)
    callback('onStart')
  }
  override onPreStart(params : UniActivityParams) {
    console.log('UTSAcvitiyLifeCycle', 'onPreStart', params)
    callback('onPreStart')
  }
}
export class UTSAcvitiyKeyEventCallback extends UniActivityKeyEventCallback {
  constructor() {
    super()
  }
  override onKeyDown(params : UniActivityParams, keyCode : Int, event : KeyEvent | null) {
    console.log('UTSAcvitiyKeyEvent', 'onKeyDown', params, keyCode, '' + event)
    callback('onKeyDown')
  }
  override onPreKeyDown(params : UniActivityParams, keyCode : Int, event : KeyEvent | null) {
    console.log('UTSAcvitiyKeyEvent', 'onPreKeyDown', params, keyCode, '' + event)
    callback('onPreKeyDown')
  }
  override onKeyLongPress(params : UniActivityParams, keyCode : Int, event : KeyEvent | null) {
    console.log('UTSAcvitiyKeyEvent', 'onKeyLongPress', params, keyCode, '' + event)
    callback('onKeyLongPress')
  }
  override onPreKeyLongPress(params : UniActivityParams, keyCode : Int, event : KeyEvent | null) {
    console.log('UTSAcvitiyKeyEvent', 'onPreKeyLongPress', params, keyCode, '' + event)
    callback('onPreKeyLongPress')
  }
}

export class UTSActivityWindowCallback extends UniActivityWindowCallback {
  constructor() {
    super()
  }
  override dispatchPreKeyEvent(params : UniActivityParams, event : KeyEvent | null) {
    console.log('UTSActivityWindowCallback', 'dispatchPreKeyEvent', params, '' + event)
    callback('dispatchPreKeyEvent')
  }
  override dispatchKeyEvent(params : UniActivityParams, event : KeyEvent | null) {
    console.log('UTSActivityWindowCallback', 'dispatchKeyEvent', params, '' + event)
    callback('dispatchKeyEvent')
  }
  override  onWindowAttributesChanged(params : UniActivityParams, attrs : WindowManager.LayoutParams) {
    console.log('UTSActivityWindowCallback', 'onWindowAttributesChanged', '' + attrs)
    callback('onWindowAttributesChanged')

  }
  override onAttachedToWindow(params : UniActivityParams) {
    console.log('UTSActivityWindowCallback', 'onAttachedToWindow', params)
    callback('onAttachedToWindow')

  }
  override onPanelClosed(params : UniActivityParams, featureId : Int, menu : Menu) {
    console.log('UTSActivityWindowCallback', 'onPanelClosed', featureId, menu)
    callback('onPanelClosed')

  }
  override onWindowStartingActionMode(params : UniActivityParams, callback : ActionMode.Callback | null) {
    console.log('UTSActivityWindowCallback', 'onWindowStartingActionMode', callback)
    callback('onWindowStartingActionMode')
  }
  override onProvideKeyboardShortcuts(params : UniActivityParams, data : MutableList<KeyboardShortcutGroup> | null, menu : Menu | null, deviceId : Int) {
    console.log('UTSActivityWindowCallback', 'onProvideKeyboardShortcuts', data, menu)
    callback('onProvideKeyboardShortcuts')
  }
  override  onPreWindowAttributesChanged(params : UniActivityParams, attrs : WindowManager.LayoutParams) {
    console.log('UTSActivityWindowCallback', 'onPreWindowAttributesChanged', attrs)
    callback('onPreWindowAttributesChanged')
  }
  override  onPrePanelClosed(params : UniActivityParams, featureId : Int, menu : Menu) {
    console.log('UTSActivityWindowCallback', 'onPrePanelClosed', featureId, menu)
    callback('onPrePanelClosed')
  }
}

export class UTSActivityCallback extends UniActivityCallback {
  constructor() {
    super()
  }
  override onRequestPermissionsResult(params : UniActivityParams, requestCode : Int, permissions : MutableList<String>, grantResults : IntArray) {
    console.log('UTSActivityCallback', 'onRequestPermissionsResult', params)
    callback('onRequestPermissionsResult')
  }

}

export class UTSActivityComponentCallback extends UniActivityComponentCallback {
  constructor() {
    super()
  }
  override onConfigurationChanged(params : UniActivityParams, newConfig : Configuration) {
    console.log('UTSActivityComponentCallback', 'onConfigurationChanged', params, '' + newConfig)
    callback('onConfigurationChanged')
  }
  override onPreConfigurationChanged(params : UniActivityParams, newConfig : Configuration) {
    console.log('UTSActivityComponentCallback', 'onPreConfigurationChanged', params, '' + newConfig)
    callback('onPreConfigurationChanged')
  }
}
```




