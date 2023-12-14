const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [
    './src/client/client.ts',
    './src/client/css/main.css',
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Three.js Learning',
      template: './src/client/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/client'),
  },
}
