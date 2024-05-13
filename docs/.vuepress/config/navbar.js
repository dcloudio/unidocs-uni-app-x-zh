/**
 * text
 * target
 * link   // 有协议时是外链
 * items
 * type   // link、links。
 * rel
 * needOutbound // 是否显示外链图标
 */
export const navbar = [
  {
    text: 'uni-app',
    link: 'https://uniapp.dcloud.io/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: 'uni-app x',
    link: '/',
    items: [
      {
        text: '介绍',
        type: 'link',
        link: '/'
      },
      {
        text: '编译器',
        type: 'link',
        link: '/compiler/'
      },
      {
        text: 'UTS',
        type: 'link',
        link: '/uts/'
      },
      {
        text: 'VUE',
        type: 'link',
        link: '/vue/'
      },
      {
        text: '全局文件',
        type: 'link',
        link: '/collocation/pagesjson'
      },
      {
        text: '组件',
        type: 'link',
        link: '/component/'
      },
      {
        text: 'API',
        type: 'link',
        link: '/api/'
      },
      {
        text: 'CSS',
        type: 'link',
        link: '/css/'
      },
      {
        text: 'DOM',
        type: 'link',
        link: '/dom/'
      },
      {
        text: '插件',
        type: 'link',
        link: '/plugin/'
      },
      {
        text: '工程化',
        type: 'link',
        link: '/worktile/'
      }
    ]
  },
  {
    text: 'uniCloud',
    link: 'https://doc.dcloud.net.cn/uniCloud/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: 'HBuilder',
    link: 'https://hx.dcloud.net.cn/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: 'uni 小程序 sdk',
    link: 'https://nativesupport.dcloud.net.cn/README',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  /* {
    text: '问答社区',
    link: 'https://ask.dcloud.net.cn/explore/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: '插件市场',
    type: "link",
    target: '_blank',
    link: 'https://ext.dcloud.net.cn/',
    needOutbound: false
  } */
]

export const userNavIndex = 1

export const navbarLanguage = {
  default: 0,
  items: [
    {
      text: '简体中文'
    }
  ]
}
