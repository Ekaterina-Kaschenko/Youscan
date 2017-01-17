const webpack = require('webpack');
const path    = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd  = nodeEnv === 'production';

const sourcePath = path.join(__dirname, `./src`);
const destPath   = path.join(__dirname, `./dest`);

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
];

if (isProd) {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false
    }),
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
    path: destPath,
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
        use: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
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

// CSS modules
const cssModulesNames = `${nodeEnv ? '[path][name]__[local]__' : ''}[hash:base64:5]`;

const matchCssLoaders = /(^|!)(css-loader)($|!)/;

const findLoader = (loaders, match) => {
  const found = loaders.filter(l => l && l.loader && l.loader.match(match));
  return found ? found[0] : null;
}

// existing css loader
const cssloader =
  findLoader(config.module.loaders, matchCssLoaders);

const newloader = Object.assign({}, cssloader, {
  test: /\.module\.css$/,
  include: [src],
  loader: cssloader.loader.replace(matchCssLoaders, `$1$2?modules&localIdentName=${cssModulesNames}$3`)
});
config.module.loaders.push(newloader);
cssloader.test = new RegExp(`[^module]${cssloader.test.source}`);
cssloader.loader = newloader.loader;

config.module.loaders.push({
  test: /\.css$/,
  include: [modules],
  loader: 'style!css'
});
// CSS modules

// postcss
config.postcss = [].concat([
  require('precss')({}),
  require('autoprefixer')({}),
  require('cssnano')({})
]);
// END postcss
