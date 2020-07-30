const gulp = require('gulp');
const {watch} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

gulp.task('sass', () => {
    return gulp.src('./app/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'})) //nested, expanded, compressed, compact
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('imagemin', () => {
    gulp.src('./app/images/*.+(png|jpg|jpeg)')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
});

// gulp.task('watch', () => {
//     gulp.watch('./app/sass/*/*.scss', gulp.series('sass'))
// });

// changes based on a documentation gulpjs.com
exports.watch = function () {
    watch('./app/sass/*/*.scss', gulp.series('sass'))
}