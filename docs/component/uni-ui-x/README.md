# uni-ui-x 扩展组件

uni-ui-x 是 DCloud 官方提供的、适配 uni-app x 的扩展组件库。组件以 `uni_modules` 形式发布，可在插件市场单独下载，也可整体引入。

## 使用方式

uni-ui-x 组件遵循 easycom 规范，下载到项目的 `uni_modules` 目录后，无需 import 和注册，直接在 template 中使用即可。

```vue
<template>
  <uni-nav-bar title="标题" />
</template>
```

## 组件列表

### 导航

| 组件 | 说明 |
|---|---|
| [uni-nav-bar](uni-nav-bar.md) | 自定义导航栏，配合 `navigationStyle: custom` 使用 |
| [uni-tab-bar](uni-tab-bar.md) | 底部选项卡组件集，包含 uni-tab、uni-tab-item、uni-tab-bar、uni-tab-content、uni-tab-midbutton |

### 基础内容

| 组件 | 说明 |
|---|---|
| [uni-badge-view](uni-badge-view.md) | 数字角标（徽章），用于消息提醒 |
| [uni-fab-button](uni-fab-button.md) | 悬浮按钮，常见于页面右下角 |
| [uni-link](uni-link.md) | 链接组件，可自定义打开方式 |
| [uni-rate](uni-rate.md) | 评分组件，支持自定义图标大小和间隔 |
| [uni-time-format](uni-time-format.md) | 时间格式化组件 |

### 视图容器

| 组件 | 说明 |
|---|---|
| [uni-collapse](uni-collapse.md) | 折叠面板，包含 uni-collapse 和 uni-collapse-item |
| [uni-drag-cell](uni-drag-cell.md) | 可拖拽排序列表 |
| [uni-index-bar](uni-index-bar.md) | 索引条，适用于长列表快速定位 |
| [uni-refresh-box](uni-refresh-box.md) | 自定义下拉刷新，可嵌入 scroll-view / list-view |

### 表单组件

| 组件 | 说明 |
|---|---|
| [uni-number-box](uni-number-box.md) | 带加减按钮的数字输入框，支持小数 |

## 下载

前往 [GitCode](https://gitcode.com/dcloud/uni-ui-x) 下载。
前往 [uni 插件市场](https://ext.dcloud.net.cn/) 搜索组件名即可下载。
