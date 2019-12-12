module.exports = {
    title: 'Git course',
    description: '',
    themeConfig: {
        nav: [
            { text: 'VIVES', link: 'https://www.vives.be' }
        ],
        displayAllHeaders: true,
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
            '/marp/'           
        ]           
        
    },
    markdown: {
        lineNumbers: true,
    },
    serviceWorker: true,
    plugins: [
      ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }]
    ],
}