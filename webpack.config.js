const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  vendor: path.join(__dirname, 'dist/vendor')
}

module.exports = {
  entry: {
    app: path.join(PATHS.app, "app.jsx")
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [ 
      {
        test: /\.css$/,
        loader: "style!css",
        include: [PATHS.app, PATHS.vendor]
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory,presets[]=react,presets[]=es2015'],
        include: [PATHS.app, PATHS.vendor]
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&minetype=application/font-woff",
        include: [PATHS.app, PATHS.vendor] 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader",
        include: [PATHS.app, PATHS.vendor]
      }
    ]
  }
}