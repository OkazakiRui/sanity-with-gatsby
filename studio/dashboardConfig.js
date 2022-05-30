export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6294e5310bc61854827d9f95',
                  title: 'Sanity Studio',
                  name: 'sanity-with-gatsby-studio',
                  apiId: 'f3fb0dbb-2a40-427e-9d24-6224377fcb36'
                },
                {
                  buildHookId: '6294e531b52d86447202e789',
                  title: 'Portfolio Website',
                  name: 'sanity-with-gatsby',
                  apiId: 'd0d615bd-5cce-4e6a-a50e-7a50f7b45cf5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OkazakiRui/sanity-with-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-with-gatsby.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
