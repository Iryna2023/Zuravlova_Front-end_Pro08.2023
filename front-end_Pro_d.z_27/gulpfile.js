const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

gulp.task('scripts', () => {
    return gulp.src('User_registration_form/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', () => {
    return gulp.src('User_registration_form/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(cssnano().on('error', function(e){
            console.log(e);
         }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.parallel('scripts', 'styles'));