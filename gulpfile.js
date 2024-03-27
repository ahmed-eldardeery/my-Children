const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const del = require('del');

// Concat and minify CSS files
gulp.task('build-css', () => {
    return gulp.src('src/output.css')
    .pipe(concat('app.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/css'));
});

gulp.task("session-start", (cb) => {
    return gulp.series('build-css')(cb);
});

gulp.task('default', gulp.series('session-start'));

gulp.task('clean', async () => {
    return del.sync('build');
 });