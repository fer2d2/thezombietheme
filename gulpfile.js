var gulp = require('gulp');
var sass = require('gulp-sass');

var sassRoot = 'static/sass/**/*.scss'
var cssDest = 'static/css'

gulp.task('styles', function() {
    gulp.src(sassRoot)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
});

//Watch task
gulp.task('default',function() {
    gulp.watch(sassRoot, ['styles']);
});
