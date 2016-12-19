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

gulp.task('serve:build-app', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest('./'));
});

gulp.task('dev:watch', function() {
  gulp.watch('./app/**/*', ['serve:build-app']);
  gulp.watch('./public/css/*.css', ['serve:build-app']);
  gulp.watch('./server.js', ['serve:build-server']);
});

gulp.task('serve:build-server', function(done) {
  return gulp.src('./server.js')
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
  
});

gulp.task('serve:node', ['serve:build-app', 'serve:build-server'], function(done) {
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
