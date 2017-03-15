/**
 * Created by chunyang.gao on 17/3/5.
 */
var path=require('path');
var webpack = require('webpack');
const CleanPlugin = require("clean-webpack-plugin");
var ROOT_PATH=path.resolve(__dirname);
const DEV_PATH = path.join(__dirname, '/../dist/assets');


//获取环境
var env=process.env.NODE_ENV;

module.exports = {
  entry:{index: './example/index'},
  output:{
    path: '/assets/',
    // path: DEV_PATH,
    filename:'[name].js',
    publicPath:"/assets/"
  },
  module: {
    rules: [{
    //   test: /\.js$/,
    //   loader: "eslint-loader",
    //   exclude: /node_modules/,
    //   enforce: 'pre' //webpack2写法
    // },{
    //   test: /\.scss$/,
    //   loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
    //   //loaders的处理顺序是从右到左的
    //   include: /src\/css/
    // }, {
      test: /\.(png|jpg|gif|jpeg)$/, //处理css文件中的背景图片
      loader: 'url-loader?limit=1&name=./static/assets/[name].[hash:4].[ext]'
      //当图片大小小于这个限制的时候，自动启用base64编码图片。
    },  {
      //当我们需要读取json格式文件时，webpack2中将会内置 json-loader，自动支持json格式的读取。
      test: /\.json$/, //获取json数据的loader
      loader: 'json-loader'
    },{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }],

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),   //dev-server-hot-function
  ],
  //webpack2 新增功能。限制bundle文件大小
  // warning时不影响打包进程，出现error会立即终止打包进程
  performance: {
    hints: false,
    maxEntrypointSize: 400000, //bytes,
    maxAssetSize: 400000 //bytes
  },
  resolve: {
    //extensions webpack2第一个不是空字符串! 对应不需要后缀的情况.
    extensions: ['.js', '.json', '.sass', '.scss', '.less',  '.vue'],
    //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    alias: {
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components')
    },
    // enforceExtension: false,
    // // 强制使用扩展名：如果值为 false，在解析一个文件时，也会尝试匹配无扩展名的文件。
  },
  // 配置了这个属性之后 vue 和 vue-router这些第三方的包都不会被构建进 js 中，那么我们就需要通过 cdn 进行文件的引用了
  //externals对象的key是给require时用的，比如require('vue'),，对象的value表示的是如何在global（即window）中访问到该对象，这里是window.Vue
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  },
  devServer: {
    contentBase:  './example/', //本地服务器所加载的页面所在的目录
    historyApiFallback: true,
    hot: true,
    open: true,
    inline: true, //实时刷新
    port: 8000
  },
}

switch (env) {
  case 'production':
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      //loader的最小化文件模式将会在webpack 3或者后续版本中被彻底取消掉.为了兼容部分旧式loader，你可以通过 LoaderOptionsPlugin 的配置项来提供这些功能。
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      //每次运行webpack清理上一次的文件夹
      new CleanPlugin(path.resolve(__dirname,'dist')),
      //压缩混淆JS插件,UglifyJsPlugin 将不再支持让 Loaders 最小化文件的模式。
      // debug 选项已经被移除。Loaders 不能从 webpack 的配置中读取到他们的配置项。

      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // warnings: true,   // 当因为副作用等原因DCE失败时，会在命令行中给出警告
          warnings: false,
          drop_console: true
        },
        comments: false,
        // beautify: true, // 添加适当的空格和换行
        beautify: false,
        sourceMap: false,
        // mangle: false   // 禁用变量混淆
      })
    ]);
    break;
}
