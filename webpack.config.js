var webpack=require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports={
  entry:"./js/es6.js",
  output:{
    path:__dirname,
    filename:'./dest/es-compile.js'
  },
  module:{
    loaders:[
      {
        test:/\.css$/,loader:'style!css'
      },
      {
        test:/\.(png|jpg)$/,loader:"url?limit=40000"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve:{
    root: '/Applications/MAMP/htdocs/webpackEs',
    alias:{
      jquery:"../plugins/jquery-1.11.3.min"
    },
    extensions: ['', '.js', '.json']
  },
  plugins:[
      new webpack.BannerPlugin('This file is created by pzl'),
      commonsPlugin,
      new uglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  ],
  //externals: [
  //  {
  //    'react': {
  //      root: 'React',
  //      commonjs2: 'react',
  //      commonjs: 'react',
  //      amd: 'react'
  //    }
  //  },
  //  {
  //    'react-dom': {
  //      root: 'ReactDOM',
  //      commonjs2: 'react-dom',
  //      commonjs: 'react-dom',
  //      amd: 'react-dom'
  //    }
  //  }
  //    ]
};