var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');

gulp.task('clean:build', function() {
    del('./public/js/*')
})

gulp.task('serve:build-app', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./'));
});

gulp.task('serve:build-server', function(done) {
  return gulp.src('./server.js')
    .pipe(babel())
    .on('error', function handleError() {
      this.emit('end'); 
    })
    .pipe(gulp.dest('./lib'));
  
});

gulp.task('serve:node', ['serve:build-app', 'serve:build-server'], function(done) {
  nodemon({
    exec: 'node ./lib/server.js',
    watch: ['lib/server.js'],
    ext: 'js html'
  });
});


gulp.task('serve', ['serve:build-server', 'serve:build-app', 'serve:node']);
gulp.task('default', ['serve']);
