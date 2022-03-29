const { defineConfig } = require('@vue/cli-service')
const publicPath = process.env.NODE_ENV === 'production' ? '/creatic2/' : '/'

module.exports = defineConfig({
  transpileDependencies: true,
    publicPath: publicPath,
})
