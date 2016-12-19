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
    .pipe(gulp.dest('./lib'));
  
});

gulp.task('serve-test:node', function(done) {
  nodemon({
    exec: 'node ./lib/server.js',
    watch: ['./lib/server.js'],
    ext: 'js html'
  });
});

gulp.task('dev:watch', ['serve:build-app'], function(done) {
  gulp.watch('./app/**/*.js', ['serve:build-app']);
  gulp.watch('./server.js', ['serve:build-server']);
});


gulp.task('serve', ['serve:build-server', 'serve:build-app', 'serve:node']);
gulp.task('dev', ['serve', 'dev:watch']);
gulp.task('default', ['serve']);
