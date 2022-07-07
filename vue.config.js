module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    filenameHashing:false,
   

    devServer: {
        
        host: '0.0.0.0',
        public: '123.241.245.130:8090',//該網路地址為你聯網的ip地址
        port: 8090,
        
        hotOnly: false,
        disableHostCheck: true,

    },
}