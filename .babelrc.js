module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
    // {
    //   development: process.env.BABEL_ENV === "development",
    // },
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css', // 为true会加载less文件，当需要配置antd主题的时候要改为true
        libraryDirectory: 'es'
      }
    ],
    'transform-class-properties'
  ]
};
