const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use('/load',createProxyMiddleware({target:'http://localhost:9000/',changeOrigin: true,}))
    app.use('/user/account',createProxyMiddleware({target:'http://localhost:9000/',changeOrigin: true,}))
    app.use('/info',createProxyMiddleware({target:'http://localhost:9000/',changeOrigin: true,}))

}
