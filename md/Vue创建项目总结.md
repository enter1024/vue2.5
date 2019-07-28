#### 一、如何创建一个VueDemo项目

1. 为了更好的管理使用vue框架创建项目，需要在全局中安装vue-cli

   - npm install --global vue-cli        //工具将被安装到当前使用的node版本的mode_modules下

   - vue-V                                             //查看是否安装成功,如果安装成功会出现当前vue-cli的版本

   - vue-cli是什么？（脚手架工具）

     - vue-cli是vue命令行工具，需要安装它才能直接通过vue命令来操作其他的操作
     - 如：vue init <template-name> <project-name>   
     - vue init webpack dirname

   - vue-cli的作用：

     - 目录结构

     - 本地测试

     - 单元测试

     - 热加载

     - 代码部署

       ​	

2. 使用github上提供的模板快速创建vue项目

   - github上提供了5种不同结构的单页面模板，根据情况选择使用

   - 可以使用vue list 查看模板的名称

   - **vue init webpack helloworld**        //vue init为固定的开始，后面的webpack为要创建的模板，helloworld为项目文件夹名称

   - ```
     此时会下载template
     Project name                     //项目名
     Project description              //项目描述
     Author                           //作者
     Vue build                        //构建项目
     	1.运行+编译（官方推荐）        //选择第一项
     	2.仅运行时
     	
     Install vue-router?(Y/n)		 //如果需要路由就Y，不需要就n    //Y
     Use ESLint to lint your code? (Y/n)         //是否使用ESLint管理代码   //n
     Setup unit tests with Karma + Mocha? (Y/n)  //是否安装单元测试，我选择n
     Setup e2e tests with Nightwatch(Y/n)?       //是否安装e2e测试 ，我选择n

     此时模板已经下载到电脑了，你会在cmd中看见如下信息
     To get started：           //叫你马上开始的意思
     	cd helloworld	       //进入项目文件夹
     	npm install            //使用npm 安装        如果安装了cnpm,也可以使用cnpm,
     	npm run dev            //在浏览器运行
     	
     	这一步必须要在npm run dev  之前执行
     cnpm install --production      //安装生产依赖，即package.json文件里面的dependencies
     	即：
     	"dependencies": {
         	"vue": "^2.3.3",
         	"vue-router": "^2.6.0"
     	},
     	
     ```




1. 在安装vue-cli的时候出现的警告

   ![npm-install-vue-cli-g](..\img\npm-install-vue-cli-g.png)

出现如图警告的原因：

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.2(node_modules\vue-cli\node_modules\fsevents):	//跳过可选的依赖

原因是我的系统不支持fsevents包，fsevents包需要在MaxOSX的环境下才能使用

npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.2: wanted {"os" : "darwin","arch" : "any"} (current: {"os":"win32","arch":"x64"})

“os”代表系统类型，darwin是苹果系统包含的一部分

“arch”代码系统的架构，我当前使用的是win32位，基于x64处理器



#### 二、目录结构分析

![vue-dir](..\img\vue-dir.png)

- 如下的目录有些是临时加上去的，如果图片上没有可以忽略（一级目录）


```javascript
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     	// 生产环境构建代码
|   |-- check-version.js             	// 检查node、npm等版本
|   |-- dev-client.js                	// 热重载相关
|   |-- dev-server.js                	// 构建本地服务器
|   |-- utils.js                     	// 构建工具相关
|   |-- webpack.base.conf.js         	// webpack基础配置
|   |-- webpack.dev.conf.js          	// webpack开发环境配置
|   |-- webpack.prod.conf.js         	// webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   	// 开发环境变量
|   |-- index.js                     	// 项目一些配置变量
|   |-- prod.env.js                  	// 生产环境变量
|   |-- test.env.js                  	// 测试环境变量
|-- src                              // 源码目录
|   |-- components                     // vue公共组件
|   |-- store                          // vuex的状态管理
|   |-- App.vue                        // 页面入口文件
|   |-- main.js                        // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|   |-- data                         	// 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // ES6语法编译配置,里面有一些插件，这些插件的作用是代码的转换
|-- .editorconfig                    // 编译器的配置,定义代码格式（我们使用的IPAD,如Hbuild）
|-- .eslintignore  					 //忽略语法检查的目录文件
|-- .eslintrc.js 					 //编译规则配置文件，规则定制文件，规则编译不过的时候可以在这里配置为0
|-- .gitignore                       // git上传需要忽略的文件格式,
|-- favicon.ico 					 // link图标
|--.postcssrc.js
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息如：可以配置script脚本  ^上箭头代表可以安装当前版本及以上的版本
|-- README.md                        // 项目说明
```



#### 三、使用ESLint管理代码

- 出现错误:semi

  - semi    Missing semicolon           //缺少分号
  - missing  ['mɪsɪŋ]                           缺少
  - semicolon[semɪ'kəʊlən]              分号
  - 解决问题：在项目的根目录下找.eslintrc.js文件，打开后在rules属性中设置规则

  ```javascript
  'rules' : {
      'arrow-parens': 0,  					//允许less箭头功能
      'generator-star-spacing': 0,			
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    	'semi' : ['error', 'always']  		 //设置这行规则（没有分号就报错）
  }
  ```

  ​

  ​

- 格式化代码都出现的错误：indent

  - 连接：eslint.org/docs/rules/indent
  - 解决问题：在项目的根目录下找.eslintrc.js文件，打开后在rules属性中设置规则

  ```javascript
  'rules' : {
    'semi' : ['error', 'always'],  // 设置分号结尾
    'indent' : 0		//设置这行规则（空格还是缩进）
  }
  ```



- 错误：no-multiple-empty-lines

  - 在script标签中删除所有的空行

  ```javascript
  //不正确的
  <script>
    
  </script>

  //正确的
  <script>
  </script>
  ```



- 错误：no-new

```javascript
/* eslint-disable no-new */		//跳过校验 no-new 规则
new Vue({
  el : "#body",
  components : {App}	//使用一个组件
});
```




#### 四、package.json文件

##### 1.package.json

```json
{
  "name": "vue1",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "start": "node build/dev-server.js",
    "build": "node build/build.js"
  },
  "dependencies": {		//生产依赖
    "vue": "^2.3.3",
    "vue-router": "^2.6.0"
  },
  "devDependencies": {		//开发依赖
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-loader": "^7.1.1",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0",
    "chalk": "^2.0.1",
    "connect-history-api-fallback": "^1.3.0",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "cssnano": "^3.10.0",
    "eventsource-polyfill": "^0.9.6",
    "express": "^4.14.1",
    "extract-text-webpack-plugin": "^2.0.0",
    "file-loader": "^0.11.1",
    "friendly-errors-webpack-plugin": "^1.1.3",
    "html-webpack-plugin": "^2.28.0",
    "http-proxy-middleware": "^0.17.3",
    "webpack-bundle-analyzer": "^2.2.1",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "opn": "^5.1.0",
    "optimize-css-assets-webpack-plugin": "^2.0.0",
    "ora": "^1.2.0",
    "rimraf": "^2.6.0",
    "url-loader": "^0.5.8",
    "vue-loader": "^12.1.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.3.3",
    "webpack": "^2.6.1",
    "webpack-dev-middleware": "^1.10.0",
    "webpack-hot-middleware": "^2.18.0",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```



##### 2.dependencies与devDependencies

- dependencies生产时需要的依赖
- devDependencies开发时需要的依赖
- 运行npm install命令，会自动安装dependencies和devDependencies字段中的模块



##### 3.script 字段

- script字段是用来指定npm相关命令的缩写的


- 如在命令行中运行`npm run dev`就相当于在执行`node build/dev-server.js`

```json
"scripts": {
    "dev": "node build/dev-server.js",
    "start": "node build/dev-server.js",
    "build": "node build/build.js"
}
```