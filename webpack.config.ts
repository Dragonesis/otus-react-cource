import path from 'path'
import webpack from 'webpack'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: path.resolve(__dirname, 'src/index.ts'),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    fallback: {
      os: false,
    },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].main.[contenthash:8].js',
    chunkFilename: 'static/js/[name].[id].[contenthash:8].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
}
