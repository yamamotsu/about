// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'YamamotsuLab',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/works/**/*.md',
      }
    }
  ],
  chainWebpack: config => { // it may be required for using dynamic image in <g-image>
    config.resolve.alias.set('@images', '@/assets/images')
  },
  templates:{
    Post: '/posts/:id'
  },
  icon: {
    favicon: "./src/favicon.png"
  },
  // Internal hostname provided by docker
  host: process.env.HOSTNAME,
  port: 8080,
}
