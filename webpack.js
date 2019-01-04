const webpack = require('webpack');
// 读取 webpack.config.js 文件中的配置
const config = require('./webpack.config');
// 如果不传 callback 回调函数，就会返回一个 Compiler 实例，用于让你去控制启动，而不是像上面那样立即启动
const compiler = webpack(config);

// webpack(config, (err, stats) => {
//   if (err || stats.hasErrors()) {
//     // 构建过程出错
//   }
//   // 成功执行完构建
// });

// 调用 compiler.watch 以监听模式启动，返回的 watching 用于关闭监听
const watching = compiler.watch({
  // watchOptions
  aggregateTimeout: 300,
},(err, stats)=>{
  // 每次因文件发生变化而重新执行完构建后
});

// 调用 watching.close 关闭监听 
// watching.close(()=>{
//   // 在监听关闭后
// });
