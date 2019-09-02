const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    // 登录
    app.use(proxy("/users",{
        target:"http://10.60.11.61:3000",
        changeOrigin:true
    }))
    app.use(proxy("/app",{
        target:"http://rap2api.taobao.org",
        changeOrigin:true
    }))
}

// http://10.60.11.61:3000/users/login