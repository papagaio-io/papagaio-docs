module.exports = {
  title: 'Papagaio',
  description: 'Papagaio Documentation',
  base: '/papagaio-docs/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: false,
    logo: 'images/papagaio.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/papagaio-io/' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'login',
            'GitSourceCommands',
            'AddOrganizations',
            'Dashboard',
            'DelOrganizations',
            'ChangeUserRole',
            'Triggers',
            'ExternalEmails',
            'LocalInstallation',
            'K8sInstallation',
            'Database',
            'Swagger',
            'UsingBuildah',
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
  ]
}
