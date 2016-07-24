var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var path = require('path');


/**
 * Build (Webpack)
 */

gulp.task('clean:build', function() {
    del('./public/js/*')
})

gulp.task('build', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});

gulp.task('watch:build', function() {
  return gulp.watch('./app/**/*', ['build']);
});


/**
 * Node Server (Express)
 */

gulp.task('serve:node', function(done) {
  var babelPath = path.join(__dirname, 'node_modules/.bin/babel-node');
  nodemon({
    exec: babelPath + ' ./server.js',
    watch: ['server.js'],
    ext: 'js html'
  });
});


gulp.task('serve-test:build', function(done) {
  return gulp.src('./server.js')
    .pipe(babel())
    .on('error', function handleError() {
      this.emit('end'); 
    })
    .pipe(gulp.dest('./lib'));
  
});

gulp.task('serve-test:node', function(done) {
  nodemon({
    exec: 'node ./lib/server.js',
    watch: ['lib/server.js'],
    ext: 'js html'
  });
});


/**
 * Main tasks
 */

gulp.task('serve', ['serve:node']);
gulp.task('serve-test', ['serve-test:build', 'serve-test:node']);
gulp.task('watch', ['build', 'watch:build']);
gulp.task('default', ['serve']);
