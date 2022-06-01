module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/demo_android/" : "/",
    devServer: {
        https: true,
        host: '0.0.0.0',
        public: '123.241.245.130:8080',//該網路地址為你聯網的ip地址
        port: 8080,
        
        hotOnly: false,
        disableHostCheck: true,
    },
}