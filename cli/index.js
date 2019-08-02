

//  导出的是一个函数， 支持两个参数
// api 实例
// projectOptions 包含vue.config.js 配置的
module.exports = (api, projectOptions) => {

      api.chainWebpack(webpackConfig => {
        // 通过 webpack-chain 修改 webpack 配置
      })
    
      api.configureWebpack(webpackConfig => {
        // 修改 webpack 配置
        // 或返回通过 webpack-merge 合并的配置对象

      })

     /**
      *   注册  
      *   @param {object} [opts]
      *   {
      *     description: string,
      *     usage: string,
      *     options: { [string]: string }
      *   }
      **/
      api.registerCommand('demo', {
        description: 'this is a cli demo',
        usage: 'vue-cli-serve demo',
        options: {}
      }, args => {
        // 注册 `vue-cli-service demo`
        let options = projectOptions
        console.log('options', options)
      })
}


// 请确保为正确的环境变量指定默认模式
module.exports.defaultModes = {
  'demo': 'development'
}