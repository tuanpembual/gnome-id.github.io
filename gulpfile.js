var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src(['public/**/*'])
    .pipe(deploy({origin: 'origin', branch: 'master'}));
});