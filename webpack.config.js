var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})


module.exports = {
  entry: [
    './app/index.js'
  ], 
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig] 
}

// dirname = directory in which the curretly executing script resides in (e.g. our root directory - github-battle)

// webpack will take our entry file (./app/index.js), do some conversion to it that we specify and then its goint to output it to github-battle/dist as the file index_bundle.js

// tranformations are made via loaders

// require gets the module referenced in package.json and save it with the given name