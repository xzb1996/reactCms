
const { override, addWebpackAlias,fixBabelImports } = require('customize-cra');
const path = require("path");
module.exports = override(
    // 按需加载组件代码和央视的babel插件
       fixBabelImports('import', {
             libraryName: 'antd',
             libraryDirectory: 'es',
             style: 'css',
        }),
    //别名配置
    addWebpackAlias({        
        ["@"]:path.resolve(__dirname,"./src"),
        ["@actions"]:path.resolve(__dirname,"./src/actions"),
        ["@api"]:path.resolve(__dirname,"./src/api"),
        ["@common"]:path.resolve(__dirname,"./src/common"),
        ["@components"]:path.resolve(__dirname,"./src/components"),
        ["@pages"]:path.resolve(__dirname,"./src/pages"),
        ["@router"]:path.resolve(__dirname,"./src/router"),
        ["@static"]:path.resolve(__dirname,"./src/static"),
        ["@store"]:path.resolve(__dirname,"./src/store"),
        ["@utils"]:path.resolve(__dirname,"./src/utils"),
        ["@layout"]:path.resolve(__dirname,"./src/layout"),        
    })
);