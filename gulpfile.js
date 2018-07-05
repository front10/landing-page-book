var gulp = require('gulp');
var sass = require('gulp-sass');
var css = require('gulp-cssimport');
var tildeImporter = require('node-sass-tilde-importer');

var themes = ["default"];
var tasks = [];
var watch = ['src/components/**/*.scss', 'src/themes/**/style/*.scss'];

themes.forEach(function (item) {
    gulp.task('compile-theme-' + item, function () {
        return gulp.src('src/themes/' + item + '/style/index.scss')
            .pipe(sass({
                includePaths: ['node_modules'],
                importer: tildeImporter
            })) // Using gulp-sass
            .pipe(css())
            .pipe(gulp.dest("assets/themes/" + item + "/style"));
    });

    tasks.push('compile-theme-' + item);
});

gulp.task('compile-themes-watch', function () {
    gulp.watch(watch, tasks);
});

gulp.task('compile-themes-force', function () {
    themes.forEach(function (item) {
        gulp.start('compile-theme-' + item);
    });
});