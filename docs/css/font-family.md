## font-family


<!-- CSSJSON.font-family.description -->

<!-- CSSJSON.font-family.syntax -->

<!-- CSSJSON.font-family.values -->

<!-- CSSJSON.font-family.defaultValue -->

<!-- CSSJSON.font-family.unixTags -->

<!-- CSSJSON.font-family.compatibility -->

<!-- CSSJSON.font-family.example -->

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
- app-ios: 支持ttf、otf、woff、woff2，需要注意，css 中的 font-family 值可以随意取，这个名字不是字体真正的名字。字体真正的名字（font-family），也就是注册到系统中的名字是保存在字体二进制文件中的。你需要确保你使用的字体的真正名字（font-family）足够特殊，否则在向系统注册时可能发生冲突，导致注册失败，你的字符被显示为‘?’。如果你使用 [http://www.iconfont.cn/](http://www.iconfont.cn/) 来构建你的 iconfont。确保在项目设置中，设置一个特殊的 font-family 名字。默认是 “iconfont”，极大可能发生冲突。
- web: 支持的字体取决于浏览器，详见mdn或caniuse
- app平台: 指定自定义字体路径时，必须使用url()包裹，支持本地文件路径、远程地址，4.33 版本开始支持 base64 格式数据；
- HarmonyOS平台: 支持ttf、otf 使用 [@ohos.font](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/js-apis-font-V13?ha_source=Dcloud&ha_sourceId=89000448) 实现

自定义字体的加载，除了在css的src中设置，也可以使用API [uni.loadFontface](../api/load-font-face.md)


### App平台差异
- font-family 样式不支持继承，每层组件都需要设样式

<!-- CSSJSON.font-family.reference -->

[示例代码](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/CSS/text/font-family.uvue)
