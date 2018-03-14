var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var exec = require('child_process').exec;
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

gulp.task('deploy', ['build-deploy'] , function () {
  return gulp.src('./public/**/*')
    .pipe(deploy({origin: 'origin', branch: 'master'}));
});

gulp.task('build-deploy', function() {
  hexo.init();
  hexo.call('generate', {}, function() {
    console.log('Generating Hexo Files');
  });
});