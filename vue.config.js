//
// const webpack = require('webpack')
//
module.exports = {
  devServer: {
    proxy: {
      '/es':{
        target: 'http://192.168.9.105:9200/',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    }
  }
}
