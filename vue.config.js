const FileManagerPlugin = require('filemanager-webpack-plugin');
const version = "1.0";

module.exports = {
  devServer: {
    proxy: {
      '/es':{
        target: 'http://192.168.9.105:9200/',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  configureWebpack:{
    plugins: [
      new FileManagerPlugin({  //初始化 filemanager-webpack-plugin 插件实例
        onEnd: {
          archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
            {source: './dist', destination: `./deploy/dist-${version}.zip`},
          ]
        }
      })
    ]
  }
}
