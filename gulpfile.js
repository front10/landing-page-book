const gulp = require('gulp');
const sass = require('gulp-sass');
const css = require('gulp-cssimport');
const tildeImporter = require('node-sass-tilde-importer');
const vars = require('gulp-vars');
const rename = require('gulp-rename');

const themes = ['default', 'graphql', 'react', 'webpack', 'minecraft'];
const tasks = [];
const watch = ['src/components/**/*.scss', 'src/themes/**/*.scss'];

themes.forEach(item => {
  gulp.task(`compile-theme-${item}`, () =>
    gulp
      .src(`src/themes/${item}/index.scss`)
      .pipe(
        sass({
          includePaths: ['node_modules'],
          importer: tildeImporter
        })
      ) // Using gulp-sass
      .pipe(css())
      .pipe(gulp.dest(`assets/themes/${item}`))
      .pipe(gulp.dest(`src/themes/${item}`))
  );

  tasks.push(`compile-theme-${item}`);
});

gulp.task(`compile-components`, () =>
  gulp
    .src(`src/components/**/style.scss`)
    .pipe(
      sass({
        includePaths: ['node_modules'],
        importer: tildeImporter
      })
    )
    .pipe(css())
    .pipe(gulp.dest(`src/components`))
);

gulp.task('compile-themes-watch', () => {
  gulp.watch(watch, gulp.parallel(tasks));
});

gulp.task('compile-components-watch', () => {
  gulp.watch(['src/components/**/*.scss'], gulp.parallel(['compile-components']));
});

gulp.task('compile-themes-force', gulp.series(tasks));
