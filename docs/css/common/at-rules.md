# At-rules

<!-- CSSJSON.at_rules_values.compatibility -->

不支持的css功能，并不影响业务开发。因为css本质是一种编写元素的样式属性的一种描述性写法。元素的所有样式设置，都可以脱离css这种写法，由API完成。

- `@keyframes关键帧动画`，在App平台，可以使用API方式实现，暂不支持通过css方式实现。详见[UniElement的animate方法](../../dom/unielement.md#animate)
- `@media媒体查询`，宽屏适配可使用`<match-media>组件`，[详见](../../component/match-media.md)。判断暗黑模式可使用API实现，[详见](https://doc.dcloud.net.cn/uni-app-x/api/theme-change.html)

## 字体 @font

@font-face自定义字体示例：
```html
<style>
@font-face {
    font-family: AlimamaDaoLiTiOTF;
    src: url('/static/font/AlimamaDaoLiTi.otf');
}
</style>
```

### 内置字体图标 uni-icon @uniicon
> HBuilderX4.33+

app平台的内置组件和API用到了一些字体，同时共享出来给开发者，也可以使用这些内置字体。

内置 `uni-icon` 字体图标示例：
```html
<template>
  <!-- #ifdef APP -->
  <scroll-view style="flex: 1;">
  <!-- #endif -->

  <text style="font-family: uni-icon;font-size: 64px;">{{uniIcon}}</text>

  <!-- #ifdef APP -->
  </scroll-view>
  <!-- #endif -->
</template>

<script lang="uts">
  export default {
    data() {
      return {
        uniIcon: '\ue605'
      }
    }
  }
</script>
```

内置 `uni-icon` 包括以下图标：

<div class="iconSample">
  <div class="iconContainer">
    <div class="iconItem">
      <span class="icon">&#xE600</span>
      <span class="code">\uE600</span>
      <span class="name">forward</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xE601</span>
      <span class="code">\uE601</span>
      <span class="name">back</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xE602</span>
      <span class="code">\uE602</span>
      <span class="name">share</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xE604</span>
      <span class="code">\uE604</span>
      <span class="name">favorites</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xE605</span>
      <span class="code">\uE605</span>
      <span class="name">home</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xE606</span>
      <span class="code">\uE606</span>
      <span class="name">more</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xE650</span>
      <span class="code">\uE650</span>
      <span class="name">close</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xE661</span>
      <span class="code">\uE661</span>
      <span class="name">down</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA01</span>
      <span class="code">\uEA01</span>
      <span class="name">circle</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA03</span>
      <span class="code">\uEA03</span>
      <span class="name">info</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA04</span>
      <span class="code">\uEA04</span>
      <span class="name">info circle</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA06</span>
      <span class="code">\uEA06</span>
      <span class="name">success</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA07</span>
      <span class="code">\uEA07</span>
      <span class="name">success circle</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA08</span>
      <span class="code">\uEA08</span>
      <span class="name">success no circle</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA0B</span>
      <span class="code">\uEA0B</span>
      <span class="name">cancel circle</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA0F</span>
      <span class="code">\uEA0F</span>
      <span class="name">warn</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA14</span>
      <span class="code">\uEA14</span>
      <span class="name">clear</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA19</span>
      <span class="code">\uEA19</span>
      <span class="name">download</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA1E</span>
      <span class="code">\uEA1E</span>
      <span class="name">waiting</span>
    </div>
    <div class="iconItem">
      <span class="icon">&#xEA23</span>
      <span class="code">\uEA23</span>
      <span class="name">search</span>
    </div>
  </div>
</div>



### Tips
- `字体路径`支持**网络**和**本地**，本地字体请注意放在项目或uni_modules的static目录下。

<style type="text/css">
@font-face {
    font-family: 'uni-icon';
    src: url(data:font/ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMhIACicAAACsAAAAYGNtYXBJB47VAAABDAAAAapnbHlm8llk8QAAArgAAAtEaGVhZCj1NF4AAA38AAAANmhoZWEHlQPxAAAONAAAACRobXR4DXMFkwAADlgAAAAybG9jYR7QHCgAAA6MAAAALm1heHABMgCPAAAOvAAAACBuYW1lne94ygAADtwAAAFlcG9zdHgRyWUAABBEAAAA7QAEA9oBkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAUAAIOojA8D/wABAA8AAQAAAAAEAAAAAAgACzQAAACAAAAAAAAMAAAADAAAAHAABAAAAAACkAAMAAQAAABwABACIAAAAHgAQAAMADgAg5gLmBuZQ5mHqAeoE6gjqC+oP6hTqGeoe6iP//wAAACDmAOYE5lDmYeoB6gPqBuoL6g/qFOoZ6h7qI////+EaAhoBGbgZqBYJFggWBxYFFgIV/hX6FfYV8gABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAWgAAAnMCzQADAAcAADcRIRElIREhWgIZ/kEBZf6bAALN/TNaAhkAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWAAcQLJAvIAFgAAASY0NzYyFwEeARUUBgcBBiInJjQ3CQEBaAgIBxYHATUEBAQE/ssHFgcICAEi/t4CxQcXBwgI/twECwUGCwT+3AgIBxcIARMBEwAAAQFYAHECwQLyABcAAAkCFhQHBiInAS4BNTQ2NwE2MhcWFAcxArn+3gEiCAgIFQj+zAUDAwUBNAgVCAgIAsX+7f7tCBcHCAgBJAQLBgULBAEkCAgHFwcAAAIA0ABpA7oDDQAcADYAACUUBiMhIiY1ETQ2OwE1IyIGFREUFjMhMjY9ASMVEycHFwcOAw8BMzU+ATc+AT8CBxc3JzcDUgcE/cIEBgYEsMARGBgRAl8RFy5opCFud0qCYz0FAS8FNi0tdUAGam4hpAEBpQQHBwQBqAUGMRkR/jQRGRkSpZQBvKwjcwEGPF9+RwgHPG4rKzIEAQF0IqwCAgACAJcAXgN2AxsAMQBKAAABLgEvAi4BIyIGDwIOAQcGFh8BBwYWFx4BMzI2PwEXHgEzMjY3PgEnNDA1Jzc+AScFNiYvATc+AT8BFx4BHwEHDgEfAScmBg8BA3QCCgbjZwMKBwYKA2TjBgoCAQMEpSUBBQUDBgQCBQPKzAIFAwYKAwIBASijBQMC/fwBAwSNwgUJAlZYAgkFw4wEAwEirgULBK4CFAYIAR/NBgYGBs4jAQgGBgwEn+IGDAQCAgIBbGoBAQYGAwkDAQHeoQUMBrYGCgSIHQEGBbGwBQYBG4kECwXBWgMBAlwAAgC/AHUDXAMRACEAPgAAASIGHQEUBiMhIiY9ATQmIyIGHQEeATMhMjY9ATQmJy4BIzcBLgEjIgYHAQYUFx4BMzI2NwE2MhcBFjI3PgEnAv0KDgsH/nUICw4KCQ8BJhsBjBsnBAMDCQVZ/uYKGA0NGAn+5gYHAwkFBAgEARkFEAUBGgcTBwYBBgGwDgniBwsLB+IJDg4J4hsnJxviBAkDBAM0ARoKCQkJ/uUHEwYEAwMDARkFBf7nBgcGEwcAAAAAAwDcAXYDMQH6AAsAFwAkAAABMjY1NCYjIgYVFBYhMjY1NCYjIgYVFBYhMjY1NCYjIgYVFBYzAR4cJyccGycnAQMcJyccGycnAQQbJycbHCcnHAF2JxsbJycbGycnGxsnJxsbJycbGycnGxsnAAAAAAEA7ACdAyYC1gAlAAABNzY0JyYiDwEnJiIHBhQfAQcGFBceATMyNj8BFx4BMzI2NzY0JwIx7AkJCBgI7OoIGAgJCersCQkECgYFCwTs7AQLBQYKBAkJAbvqCRcJCAjr6wgICBgI6+sIGAgEBAQE6+0FBAUECBcJAAEApADCA1UCNQARAAABJiIHCQEmIg4BFwEWMjcBNjQDTQgVCP7V/tUIFRABCAE+CBYIAT4HAi0ICP7WASoIEBYI/sIHBwE+CBYAAAACADz//APEA4UAEQAhAAABIg4BFRQXHgEzMjY3NjU0LgEDIi4BNTQ+ATMyHgEVFA4BAgF70Ho9PdB7es89PXrPenG9cHC9cHC+b2++A4V60Ht7aWZ6emZpe3vQevyab71wcL9vb79wcL1vAAADADf/9gPKA4oACwAUACwAACUUKwEiNQM0OwEyByciJjQ2MhYUBgMiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJgIcAjMDCAJEAwEkExkZJRoaF3lqZj0+Pj1manl/bGk8Pz88aWvHAgIBawICMhkkGhokGQEmQDxpbH95aWc8Pz88Z2l5gGtpPEAABAA8//wDxAOFAAgAEgAkADQAAAEyNjQmIgYUFhcjFTMRIxUzNSMDIg4BFRQXHgEzMjY3NjU0LgEDIi4BNTQ+ATMyHgEVFA4BAfEZISEyISFTkjo6zjwqe9B6PT3Qe3rPPT16z3pxvXBwvXBwvm9vvgJwIzAjIzAjOh7+vBwcArF60Ht7aWZ6emZpe3vQevyab71wcL9vb79wcL1vAAAAAAIAN//2A8oDigAVAC0AAAkBBiIvASY/ATYyHwEWMjcBNjIfARYBIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYDB/6qAQUBngMDFgEEAYECBQEBOQIFARUD/vF5amY9Pj49Zmp5f2xpPD8/PGlrAkf+rwEBowQEHgIBYwEBAQUCAhQEAUBAPGlsf3lpZzw/PzxnaXmAa2k8QAAABAA8//wDxAOFABUAGQArADsAAAEFDgEvASYGDwEGFh8BFjI3AT4BJiIXMB8BAyIOARUUFx4BMzI2NzY1NC4BAyIuATU0PgEzMh4BFRQOAQLc/u8GEgZjBg8FAwUBBoAFEAYBLAUCDBAVAQH3e9B6PT3Qe3rPPT16z3pxvXBwvXBwvm9vvgJS4gUBBUsFAgYECBEGgwYFASgFDwwFAQEBNHrQe3tpZnp6Zml7e9B6/JpvvXBwv29vv3BwvW8AAAAAAQAtAHID0QMPABcAABMuAT8BPgEfARY2NwE2FhcnFhQHAQYiJz0KBgcFBxsM0AwiCwIqDB8MDgsL/asKHwoBfgwhDwsNCAqWCQEKAckJAgoNCx4L/aILCgAAAAADADz//APEA4UACwAdAC0AAAEHJwcXBxc3FzcnNwMiDgEVFBceATMyNjc2NTQuAQMiLgE1ND4BMzIeARUUDgECnp6dHZ6eHZ2eHZ6eunvQej090Ht6zz09es96cb1wcL1wcL5vb74Cep2dHJ6eHJ2dHJ6eASd60Ht7aWZ6emZpe3vQevyab71wcL9vb79wcL1vAAAAAwA3//YDygOKAA8AGAAwAAABMzIWFQMUBisBIiY1AzQ2EyImNDYyFhQGAyIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAeQ4BAYNAwIoAwMMBiAPFxceFxcUeWpmPT4+PWZqeX9saTw/PzxpawKqBgX+uQIEBAIBRwUG/iwWIBYWIBYCtEA8aWx/eWlnPD8/PGdpeYBraTxAAAACADf/9gPKA4oAGwAzAAABFg4BIi8BBwYuATQ/AScmPgEWHwE3Nh4BBg8BAyIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAsoKARMbCZ2jCRsSCqKdCQETGgqdogoaEwEJozJ5amY9Pj49Zmp5f2xpPD8/PGlrARwJGxIKop0JARMaCp2iChoTAQmjnQoBExsJnQHLQDxpbH95aWc8Pz88Z2l5gGtpPEAAAAACADf/9gPKA4oAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTBwYiLwEmNjsBETQ2OwEyFhURMzIWAft5amY9Pj49Zmp5f2xpPD8/PGlrIHgPKQ55Dg0YXwsHJwcMXxcOA4pAPGlsf3lpZzw/PzxnaXmAa2k8QP3fnhISnhIbAR4ICwsI/uIbAAIAN//2A8oDigAUACwAAAEHBiclJicmNRM0NjsBMhYVExceAQMiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJgLfEAME/wAEAgQRAwIsAgMOygIB5XlqZj0+Pj1manl/bGk8Pz88aWsBAR0EAnoCAgMGAYMCAwMC/qWIAgQCh0A8aWx/eWlnPD8/PGdpeYBraTxAAAMALv/uA9MDkwAaAC8AMAAAJQYHBiMiJyYnJjQ3Njc2MhcWFxYVFAcGBwEHATI3Njc2NCcmJyYiBwYHBhQXFhcWMwKPMjs+QWZXUzMyMjNTV8tWVjEyFhYoARA1/gVRRUMoKCgoQ0WiRUUnKSknRUVR/SgWFjIxVlbLV1MzMzMzU1dmQT47Mv7xNAEGKChDRaNERScpKSdFRKNFQygoAAABAAAAAQAAItT7518PPPUADwQAAAAAAOL9ypAAAAAA4wElUAAA/+4D0wOTAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAALQPTAAEAAAAAAAAAAAAAAAAAAAADAs0AWgIAAAAEAAFgAVgA0ACXAL8A3ADsAKQAPAA3ADwANwA8AC0APAA3ADcANwA3AC4AAAAAABYAIABMAHgAyAE8AZwB1AIQAjYCbAKwAwADTAOsA9oEJARwBMQFCgVSBaIAAAABAAAAFgBLAAQAAAAAAAIAHABCAI0AAABuAAAAAAAAAAAADgCuAAEAAAAAAAEACAAAAAEAAAAAAAIABgAIAAEAAAAAAAMACAAOAAEAAAAAAAQACAAWAAEAAAAAAAUABAAeAAEAAAAAAAYACAAiAAEAAAAAAAoAEwAqAAMAAQQJAAEAEAA9AAMAAQQJAAIADABNAAMAAQQJAAMAEABZAAMAAQQJAAQAEABpAAMAAQQJAAUACAB5AAMAAQQJAAYAEACBAAMAAQQJAAoAJgCRdW5pLWljb25NZWRpdW11bmktaWNvbnVuaS1pY29uMS4wIHVuaS1pY29udW5pLWFwcCB4IGljb24gZm9udAB1AG4AaQAtAGkAYwBvAG4ATQBlAGQAaQB1AG0AdQBuAGkALQBpAGMAbwBuAHUAbgBpAC0AaQBjAG8AbgAxAC4AMAAgAHUAbgBpAC0AaQBjAG8AbgB1AG4AaQAtAGEAcABwACAAeAAgAGkAYwBvAG4AIABmAG8AbgB0AAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAFgAAAAMBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVB2ZvcndhcmQEYmFjawVzaGFyZQlmYXZvcml0ZXMEaG9tZQRtb3JlBWNsb3NlBGRvd24GY2lyY2xlBGluZm8KaW5mb2NpcmNsZQdzdWNjZXNzDXN1Y2Nlc3NjaXJjbGUPc3VjY2Vzc25vY2lyY2xlDGNhbmNlbGNpcmNsZQR3YXJuBWNsZWFyCGRvd25sb2FkB3dhaXRpbmcGc2VhcmNoAAAA) format('truetype');
}
.iconSample {
    background-color: #f8f8f8;
}
.iconSample .iconContainer {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  display: flex;
}
.iconSample .iconItem {
  width: 100px;
  height: 150px;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.iconSample .icon {
  width: 48px;
  height: 48px;
  font-family: uni-icon;
  font-size: 42px;
  line-height: 48px;
  color: #333;
  margin-bottom: 8px;
  display: block;
}
.iconSample .code {
  font-size: 14px;
  color: #f00;
  display: block;
}
.iconSample .name {
  font-size: 12px;
  color: #000;
  display: block;
}
</style>
