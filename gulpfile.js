var gulp = require('gulp');
var del = require('del');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');

gulp.task('clean:build', function() {
    del('./public/js/*')
})

gulp.task('build:app', ['clean:build'], function() {
  return gulp.src('./app/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./'));
});

gulp.task('dev:watch', function() {
  gulp.watch('./app/**/*', ['build:app']);
  gulp.watch('./public/css/*.css', ['build:app']);
  gulp.watch('./server.js', ['build:server']);
});

gulp.task('build:server', function(done) {
  return gulp.src('./server.js')
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
  
});

gulp.task('serve:node', ['build:app', 'build:server'], function(done) {
  nodemon({
    exec: 'node ./lib/server.js',
    watch: ['./lib/server.js'],
    ext: 'js html'
  });
});

gulp.task('dev:watch', ['build:app'], function(done) {
  gulp.watch('./app/**/*.js', ['build:app']);
  gulp.watch('./server.js', ['build:server']);
});


gulp.task('build', ['build:app', 'build:server'])
gulp.task('serve', ['build', 'serve:node']);
gulp.task('dev', ['serve', 'dev:watch']);
gulp.task('default', ['serve']);
