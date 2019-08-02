

module.exports = {
    // publicPath: process.env.NODE_ENV == 'development' ? 'http://test.net' : 'http://test.com', //部署应用包时的基本 URL
    // outputDir: 'dist', //output.path
    // assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    // indexPath: 'index.html', //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    // filenameHashing: 'true', 
    // runtimeCompiler: false, //是否使用包含运行时编译器的 Vue 构建版本, 支持使用template模版语法
    // configureWebpack: {}, //对象会通过webpack-merge合并， 函数
    // devServer: {
    //     proxy: {

    //     }
    // },
    pluginOptions: {
        demoOptions: {
          c: 1,
          d: 2
        }
      },

    // lintOnSave: true, //开发环境下是否使用eslint
    // pages: undefined,
    // transpileDependencies: [], //默认babel-loader忽略所有node_modules的文件
    productionSourceMap:false, // 生产环境的 source map
    // crossorigin: undefined, // 影响htmlwebpackplugin 生成的js css 文件的crossorigin 属性
    // integrity: false, //??
    // chainWebpack: () => {

    // }
}