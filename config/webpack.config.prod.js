var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var packageContents = fs.readFileSync('./package.json', 'utf8');
var packageObject = JSON.parse(packageContents);

var build;
try {
  build = fs.readFileSync('.build');
} catch (err) {
  build = 0;
}
build++;
fs.writeFileSync('.build', build);
packageObject.version += '.' + build;

// Support overridden package name..
if (_.has(process, 'env.PACKAGENAME')) {
  packageObject.name = _.get(process, 'env.PACKAGENAME');
}

// Support additional build variation flag...
let packageVariation = _.get(process, 'env.PACKAGEVARIATION', 'default');

var filename = packageObject.name + '-' + packageObject.version;

console.log('Building: %s, Version: %s, Production: %s', packageObject.name, packageObject.version, process.env.NODE_ENV);

var parts = [];
if (!process.env.FLDEVTHEME) parts.push('babel-polyfill');

// Build variation - entry support!
if (packageVariation !== 'default' && fs.existsSync('./src/' + packageVariation + '.js')) {
  parts.push('./src/' + packageVariation + '.js');
} else {
  parts.push('./src/');
}

// Custom externals for theme mode
// These libraries include their own react and cause errors etc...
let externals = {};
if (process.env.FLDEVTHEME) {
  console.log('Externals!!');
  externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-addons-css-transition-group': 'ReactAddonsCssTransitionGroup',
    'redux-form': 'ReduxForm',
  };
}
module.exports = {
  entry: {
    app: parts,
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: filename + '.js',
  },
  externals: externals,
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode:'static'
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __ISPROD__: JSON.stringify(true),
      __FLPACKAGE__: JSON.stringify(packageObject.name),
      __FLPACKAGEVERSION__: JSON.stringify(packageObject.version),
      __FLVARIATION__: JSON.stringify(packageVariation),
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compressor: {
    //     warnings: false
    //   }
    // }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      append: '\n//# sourceURL=[url]',
    }),
  ],
  module: {
    loaders: [
      {
        // A loader specifically for theme mode...
        test: /\.scss$/,
        include: [/\/scss/],
        exclude: [/node_modules/],
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /\/scss/],
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
      },
      {
        test: /\.scss$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(ttf|eot|woff2?|svg|png|jpe?g|gif|otf)(\?.*)?$/, //the last ? part is for query strings in eg font awesome
        loader: 'url-loader?limit=10000000', // Inline for JT
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
