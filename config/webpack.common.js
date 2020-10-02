const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');

const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src') // 配置别名，方便引入
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // 超过限制大小，会由file-loader去处理，所以需要安装file-loader
            }
          }
        ]
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/, // 排除node_modules文件夹下面的样式文件
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // 开启css modules
              importLoaders: 2 // css-loader前的loader数量
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  // 给css属性加上浏览器前缀
                  overrideBrowserslist: [
                    'last 10 Chrome versions',
                    'last 5 Firefox versions',
                    'Safari >= 6',
                    'ie > 9',
                    '> 2%'
                  ]
                })
              ]
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(le|c)ss$/,
        include: /node_modules/, // 排除node_modules文件夹下面的样式文件
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new WebpackBar()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
      maxInitialRequests: 4, // 最大初始化请求数，该属性决定入口最多分成的代码块数量，太小的值会使你无论怎么分割，都无法让入口的代码块变小。
      automaticNameDelimiter: '~', // 打包分割符
      name: !isDevMode, // 值为 false 时，适合生产模式使用，webpack 会避免对 chunk 进行不必要的命名，以减小打包体积
      cacheGroups: {
        vendors: {
          // 项目基本框架等
          chunks: 'all',
          test: /(react|react-dom|react-router-dom)/,
          priority: 100,
          name: 'vendors'
        },
        'async-commons': {
          // 异步加载公共包、组件等
          chunks: 'async',
          minChunks: 2, // 引用次数
          name: 'async-commons',
          priority: 90
        },
        antd: {
          chunks: 'all',
          test: /antd/,
          minChunks: 1,
          name: 'antd',
          priority: 110
        },
        commons: {
          // 其他同步加载公共包
          chunks: 'all',
          minChunks: 2,
          name: 'commons',
          priority: 80
        }
        // default: false
      }
    }
  }
};
