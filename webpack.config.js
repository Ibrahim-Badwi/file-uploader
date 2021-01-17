const path = require('path');
const webpack = require('webpack');

const config = (env, argv) => {
  console.log('argv', argv.mode);

  const backend_url = argv.mode === 'production'
    ? 'https://file-uploader-0.herokuapp.com/api/files'
    : 'http://localhost:3001/api/files';

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 3000,
      hot: true
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', {
              'plugins': ['@babel/plugin-proposal-class-properties']}]
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url)
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
  };
};

module.exports = config;