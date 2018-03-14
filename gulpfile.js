var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var exec = require('child_process').exec;

gulp.task('deploy', ['build-deploy'] , function () {
  return gulp.src('./public/**/*')
    .pipe(deploy({origin: 'origin', branch: 'master'}));
});

gulp.task('build-deploy', function(cb) {
  exec('hexo generate', function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
})