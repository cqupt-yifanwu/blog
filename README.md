# blog
react+react router+node（express）+mongodb+webpack 栈

##### 简介
* 该项目是一个简单的个人网站（博客）
* 实现了浏览文章，发布新文章，文章下留言等功能
* 使用react组建前端组件（view）
* 使用react-router管理路由（单页应用）
* node(express4.X)搭建后台和接口
* mongodb(mongoose)管理数据存取
* 构建工具使用webpack

##### 部署
* 根据webpack.config.js和package.json，npm install 所有的依赖项
* 在mongodb的文件目录下运行mongodb
* webpack 命令编译所需的bundle.js文件
* node app.js 运行服务，访问localhost：3000

##### tips&other
* 所有的路由在app.js中定义
* 增删改查的操作在文件blog.js
* 关于数据库的Schema定义在model文件夹下（评论和文章），model层在blog.js中定义
* 关于view层的组件在public/asset/js/component
* 此项目链接两个数据库，评论的数据根据文章的_id存取（不同的文章拥有自己的评论）
* 评论列表利用react状态机的原理进行实时更新（setState）
* 由于时间原因该网站样式比较粗糙
* 样式选择了从html中外部引入的方法，可以使用写在js的方法中（据说推荐，还未深入了解）
* react组件之间的通信使用了嵌套关系，未使用redux，以后可以改进
* 感想：需要整个栈才能做出比较完整的东西，另外就是前端越来越好玩吸引力越来越大