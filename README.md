```

    1. vue add  --  vue add 的设计意图是为了安装和调用 Vue CLI 插件
        |-- vue add @vue/eslint 解析为完整的包名 @vue/cli-plugin-eslint
    2. 
    3. vue.config.js 是一个可以被自动加载的配置文件
    4. 通过更换根目录下的.env.[mode] 文件 来 配置环境变量和模式  local文件不会被提交至仓库

    5. 开发自己的插件 -- 见 /documents/cli.md  以及 /cli
        |-- 本地直接测试
             npm install -save-dev ./cli
             vue invoke vue-cli-plugin-demo

```