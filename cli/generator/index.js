/**
 * api  实例
 * options 读取vue.config.js 的配置
 */
module.exports = (api, options = {}) => {
    // cli 版本校验
    // api.assertCliVersion('^0.0.1')
    // api.assertCliServiceVersion('^4.0.0-alpha.3')
  
    // 添加import 文件 
    // entryFile 入口文件 {('src/main.ts'|'src/main.js')}
    api.injectImports(api.entryFile, `import router from './router'`)
    // 添加到 new Vue 实例
    api.injectRootOptions(api.entryFile, `router`)
    
    // 拓展package.json
    api.extendPackage({
      dependencies: {
        'vue-router': '^3.0.6'
      }
    })
  
    // 渲染模版 使用ejs语法 
    // template 里面的所有文件都会被渲染， 并且和最终生成的目录保持一致
    api.render('./template', {
      historyMode: options.historyMode,
      doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript')
    })
  
    if (api.invoking) {
      // 是否具有某个插件
      if (api.hasPlugin('typescript')) {
        /* eslint-disable-next-line node/no-extraneous-require */
        const convertFiles = require('@vue/cli-plugin-typescript/generator/convert')
        convertFiles(api)
      }
    }
  }