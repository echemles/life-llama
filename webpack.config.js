var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({ React: 'react', ReactDOM: 'react-dom' })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') },
      { test: /\.json(\?.*)?$/, loader: 'json' },
      { test: /\.scss$/, loaders: ["style", "css", "sass", "import-glob-loader"] },
      { test: /\.(jpe?g|png|gif)(\?.*)?$/i, loader: "file?name=[name].[ext]" },
      { test: /\.ico(\?.*)?$/, loader: 'file?name=[name].[ext]' },
      { test: /\.ttf(\?.*)?$/, loader: 'file?name=[name].[ext]' },
      { test: /\.eot(\?.*)?$/, loader: 'file?name=[name].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'file?name=[name].[ext]' },
      { test: /\.woff2?(\?.*)?$/, loader: 'file?name=[name].[ext]' }
    ]
  }
};
