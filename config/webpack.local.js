const merge = require('webpack-merge');
const baseConfig = require('./webpack.common');

const port = 8080;

const config = merge(
  baseConfig,
  {
    mode: 'development',
    cache: true,
    devtool: 'eval-source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      hot: true,
      port,
      publicPath: '/',
      noInfo: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      proxy: {
        '/api/weather': {
          target: 'http://localhost:7600',
          secure: false,
          changeOrigin: true,
          pathRewrite: {
            '^/api/weather': '/weather',
          },
        },
      },
    },
  },
);

module.exports = config;
