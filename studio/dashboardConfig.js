export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd3816addbbcc5782957b03',
                  title: 'Sanity Studio',
                  name: 'lone-scripter-blog-studio',
                  apiId: '6eb6c0a3-1d3e-4a85-8e4d-b4bbbac59c51'
                },
                {
                  buildHookId: '5fd3816a0b8f6a31354ab189',
                  title: 'Blog Website',
                  name: 'lone-scripter-blog',
                  apiId: '227800bf-9734-4b7c-8c22-5745efac81cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tydanel/lone-scripter-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lone-scripter-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
