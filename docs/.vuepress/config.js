module.exports = {
    title: 'Git course',
    description: '',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Company', link: 'https://www.vives.be' },
          { text: 'License', link: '/LICENSE.md' },
        ],
        sidebarDepth: 2,
        repo: 'https://github.com/vives-devbit/git-course',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this page!',
        sidebar: [
            '/version-management/',
            '/git-tools/',
            '/git-intro/',
            '/markdown/',
            '/collaborating/',
            '/vuepress/',
            '/netlify/',
            '/marp/',
            '/migrating-to-markdown/',
        ]           
        
    },
    markdown: {
        lineNumbers: true,
    },
    serviceWorker: true,
    plugins: [
      ['vuepress-plugin-zooming', {
        // selector for images that you want to be zoomable
        // default: '.content img'
        selector: 'img',
  
        // make images zoomable with delay after entering a page
        // default: 500
        // delay: 1000,
  
        // options of zooming
        // default: {}
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      }],
      ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }]
    ],
}