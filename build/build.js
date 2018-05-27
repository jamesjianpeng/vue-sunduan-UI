const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.base');

rm(path.resolve(__dirname, '../dist'), function(err) {
  if (err) throw err;
  webpack(webpackConfig, function(err, stats) {
    if (err) throw err;
    if (stats.hasErrors()) {
      console.log(stats, 'has errors end', 'compilation' in stats, 'Compilation' in stats.compilation);
      // console.log(stats.compilation.options)
      // console.log(stats.compilation.modules)
    } else {
      console.log('webpack vue-sunduan-select finish!')
    }
  })
})

// webpack(webpackConfig, function(err, stats) {
//   if (err) throw err;
//   if (stats.hasErrors()) {
//     console.log(stats, 'has errors end', 'compilation' in stats, 'Compilation' in stats.compilation);
//     // console.log(stats.compilation.options)
//     // console.log(stats.compilation.modules)
//   } else {
//     console.log('webpack vue-sunduan-select finish!')
//   }
// })
