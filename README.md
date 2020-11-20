# 技术站
- `react-router-dom` 
- `redux`
- `react-redux` 
- `redux-thunk`
- `redux-actions`
- `高阶组件`
- `styled-components` css模块化
- `react-loadable` 路由的懒加载
- `whatwg-fetch` 数据请求
- `qs` 
- `antd`

```javascript
yarn add react-router-dom redux react-redux redux-thunk redux-actions styled-components 
react-loadable whatwg-fetch

yarn add antd
```

# 环境配置
- `craete-react-app` 创建项目
- `react-app-rewired && customize-cra` 对create-react-app的扩展配置
- `babel-plugin-import` 按需加载
- `http-proxy-middleware` 进行服务器代理跨域

```javascript
yarn add react-app-rewired customize-cra babel-plugin-import http-proxy-middleware --dev
```


# 思路（每日完成事项）
### 1、 环境配置
    全局安装 
        craete-react-app
    创建项目
        craete-react-app '项目名'
    安装常用的插件
        见上面
    高级配置
        将package.json中的react-scripts换成react-app-rewired
        然后在项目根目录创建一个config-overrides.js 用于修改默认配置
    配置路由文件
        在src下创建setupProxy.js文件
### 2、 路由配置
- 在pages中添加各个页面
- 在common中创建loading
- 在pages-->创建index.js文件，引入路由懒加载
- 在router中配置路径
- 在store中配置好react-redux
- 在index.js中渲染路由、引入stor、redux等，并对路由进行封装（@utils->routeEach）
- App.js中渲染的是侧边栏,使用layout进行布局
- 将layout中的侧边栏左侧单独拎出来，并进行封装（@utils->sliderEach）

### 3、登录注册
- common-->authRouter-->设置登录权限
- pages-->login-->静态页面搭建完毕（使用antd中的form和input组件）
- 登录完成

### 4、页面模块
- 个人信息模块
- 导出表格 npm install xlsx
- 添加用户信息
- 添加富文本 npm install wangeditor/yarn add wangeditor
- 用户信息
dev
# GitHub使用
### 创建自己的仓库
- `git init` 初始化仓库
- `git status` 查看git仓库是否有文件未提交
- `git add .` 
- `git commit -m "备注" `
- `git remote add origin https://github.com/xzb1996/bbreact.git` 连接远程仓库
- `git push -u origin master` 将主分支push到线上（新建的远程仓库是空的，需要加上-u这个参数）

### 拉取他人的仓库
- `git init` 初始化仓库
- `git remote add origin git@github.com:XXXX/nothing2.git` 与你要的远程仓库连接
- `git fetch origin dev` 拉取远程仓库，dev为你要拉取的分支
- `git checkout -b dev` 在拉取仓库之前你要先创建并切换到自己的分支
- `git pull origin dev` 把某个分支的内容拉取到本地 
