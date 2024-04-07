## font-family


<!-- CSSJSON.font-family.description -->

<!-- CSSJSON.font-family.syntax -->

<!-- CSSJSON.font-family.values -->

<!-- CSSJSON.font-family.defaultValue -->

<!-- CSSJSON.font-family.unixTags -->

<!-- CSSJSON.font-family.compatibility -->

### 字体设置

对于系统中已经存在的字体，font-family里直接写字体名称即可。\
但对于系统中不存在的字体，需要通过src属性的url方法来指定字体路径。如下：
```css
@font-face {
    font-family: UniFontFamily;
    src: url('/static/uni.ttf');
  }
```

**关于自定义字体的格式**
- app-android: 支持ttf和otf字体。不支持woff和woff2和可变字体
- web: 支持的字体取决于浏览器，详见mdn或caniuse

自定义字体的加载，除了在css的src中设置，也可以使用API [uni.loadFontface](../api/load-font-face.md)


### App平台差异
- font-family 样式不支持继承，每层组件都需要设样式

<!-- CSSJSON.font-family.reference -->

[示例代码](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/CSS/text/font-family.uvue)