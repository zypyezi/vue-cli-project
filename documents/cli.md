
#### 当前插件的作用常用于 直接执行该插件，修改配置文件等，

#### 插件的作用是修改webpak的配置， 并注入内置命令
#### 是一个为@vue/cli项目添加额外特性的npm 包
#### 查看api 实例的相关方法和参数  https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/PluginAPI.js
#### generator APi https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli/lib/GeneratorAPI.js



```

     |-- index.js service文件， 导出一个一个函数
         |- 扩展/修改不同环境的内部webpack配置
         |- 并为其注入其他命令vue-cli-service
     |-- prompt.js  交互式命令
     |-- generator.js    导出一个函数
         |- 使用GeneratorAPI，允许一个 generator 向 package.json 注入额外的依赖或字段
         |- 并向项目中添加文件。
     |-- generator  需要使用模版的采用该种目录结构
        |-- index.js 
        |-- template 

```

#### 简单实现一个注入vue-router的插件， 参考vue官方的插件 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router


#### 涉及知识点 -- ejs 