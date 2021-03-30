// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'gui框架',
    link: '/gui/antdv-components',
    items: [
      {
        text: '关于',
        items: [
          { text: 'gui', link: '/pages/9002ed/' },
        ],
      },
      {
        text: '组件库',
        items: [
          { text: '组件一览', link: '/gui/antdv-components/' },
        ],
      },
    ]
  },
  // {
  //   text: '前端',
  //   link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  //   items: [
  //     // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
  //     {
  //       text: '前端文章',
  //       items: [
  //         { text: 'JavaScript', link: '/pages/8143cc480faf9a11/' },
  //         { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
  //       ],
  //     },
  //     {
  //       text: '学习笔记',
  //       items: [
  //         { text: '《JavaScript教程》笔记', link: '/note/javascript/' },
  //         { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
  //         { text: '《ES6 教程》笔记', link: '/note/es6/' },
  //         { text: '《Vue》笔记', link: '/note/vue/' },
  //         {
  //           text: '《TypeScript 从零实现 axios》',
  //           link: '/note/typescript-axios/',
  //         },
  //         {
  //           text: '《Git》学习笔记',
  //           link: '/note/git/',
  //         },
  //         {
  //           text: 'TypeScript笔记',
  //           link: '/pages/51afd6/',
  //         },
  //         {
  //           text: 'JS设计模式总结笔记',
  //           link: '/pages/4643cd/',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: '技术',
  //   link: '/technology/',
  //   items: [
  //     { 
  //       text: '系列文章',
  //       items:[
  //         { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
  //         { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
  //         { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
  //         { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
  //       ]  
  //     },
  //     { 
  //       text: '收藏',
  //       items: [
  //         { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
  //         { text: '资源', link: '/pages/eee83a9211a70f9d/' },
  //         { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
  //       ],
  //     },
      
  //   ],
  // },
  {
    text: '面试',
    link: '/interview/',
    items: [
      { text: '总论', link: '/pages/1fbe96/' },
      {
        text: '面试题',
        items: [
          { text: 'Vue', link: '/pages/b5e027/' },
          { text: 'React', link: '/pages/a7780a/' },
          { text: '小程序', link: '/pages/9aade0/' },
          { text: 'js基础', link: '/pages/0a4c33/' },
          { text: '框架类', link: '/pages/a90b53/' },
          { text: '框架类', link: '/pages/8c4bc7/' },
        ],
      },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  {
    text: '关于',
    link: '/about/',
    items: [
      { text: '框架概览', link: '/pages/82b12d/' },
      { text: '相关技术', link: '/pages/d3923a/' },
    ],
  },
]
