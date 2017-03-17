const webpack = require('webpack');
const path    = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd  = nodeEnv === 'production';

const sourcePath = path.join(__dirname, `./src`);
const distPath   = path.join(__dirname, `./dist`);

const plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name:      'vendor',
    minChunks: Infinity,
    filename:  'vendor.bundle.js'
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        require('precss'),
        require('autoprefixer'),
        require('cssnano')
      ]
    }
  })
];

if (isProd) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:     false,
        screw_ie8:    true,
        conditionals: true,
        unused:       true,
        comparisons:  true,
        sequences:    true,
        dead_code:    true,
        evaluate:     true,
        if_return:    true,
        join_vars:    true
      },
      output: {
        comments: false
      },
    })
  );
}

if (!isProd) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = {
  devtool: isProd ? 'source-map' : 'eval',
  context: sourcePath,
  entry: {
    js: './index.js',
    vendor: ['react']
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:10]',
          'postcss-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }, {
  		  test: /\.(png|jpg|gif)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
          {
            loader: 'url-loader',
            options: {
              limit: 2000
            }
          }
        ]
  	  }, {
  		  test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
  	  }
    ],
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  plugins,
  devServer: {
    contentBase:        './src/assets',
    historyApiFallback: true,
    port:               3000,
    compress:           isProd,
    inline:             !isProd,
    hot:                !isProd,
    stats: {
      assets:     true,
      children:   false,
      chunks:     false,
      hash:       false,
      modules:    false,
      publicPath: false,
      timings:    true,
      version:    false,
      warnings:   true,
      colors: {
        green: '\u001b[32m',
      }
    }
  }
};
