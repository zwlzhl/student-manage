module.exports = {
    // 它支持webPack-dev-server的所有选项
    devServer: {
      // 配置多个代理
      proxy: {
        "/api": {
          target: "http://148.70.121.59:9001/emstu",// 要访问的接口域名
          changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
          pathRewrite: {
              '^/api': '' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
            }
        }
      }
    }
}
