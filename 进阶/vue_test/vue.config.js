const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main1.js'
    }
  },
  lintOnSave: false, // 关闭语法检查
})
