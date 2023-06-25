const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";` // Adjust the path to your main Sass file
      },
      sass: {
        implementation: require('sass'), // Add this line
      },
    },
  },
})

