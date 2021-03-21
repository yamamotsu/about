// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'YamamotsuLab',
  siteUrl: 'https://yamamotsu.github.io',
  pathPrefix: '/about',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/works/**/*.md',
      }
    },
  ],
  templates:{
    Post: '/:year/:slug'
  },
  icon: {
    favicon: "./src/favicon.png"
  },
  build: {
    transpile: /@babel.*/ // transpile ESM modules within all fullcalendar packages
  },
  // Internal hostname provided by docker
  // host: process.env.HOSTNAME,
  // port: 8080,
}
