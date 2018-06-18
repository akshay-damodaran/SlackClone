const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: ['babel-polyfill', `${SRC_DIR}/app/index.js`],
  output: {
    path: `${DIST_DIR}/app`,
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        enforce: 'pre',
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.css?/,
        include: [SRC_DIR, /node_modules/],
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.svg$/,
      //   loaders: [
      //     'babel-loader',
      //     {
      //       loader: 'react-svg-loader',
      //       query: {
      //         jsx: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(eot|ttf|woff|woff2|png|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
};

module.exports = config;
