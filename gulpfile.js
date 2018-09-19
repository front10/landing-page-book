const gulp = require('gulp');
const sass = require('gulp-sass');
const css = require('gulp-cssimport');
const tildeImporter = require('node-sass-tilde-importer');

const themes = ['default', 'graphql', 'react', 'webpack'];
const tasks = [];
const watch = ['src/components/**/*.scss', 'src/themes/**/scss/*.scss'];

themes.forEach(item => {
  gulp.task(`compile-theme-${item}`, () =>
    gulp
      .src(`src/themes/${item}/scss/index.scss`)
      .pipe(
        sass({
          includePaths: ['node_modules'],
          importer: tildeImporter
        })
      ) // Using gulp-sass
      .pipe(css())
      .pipe(gulp.dest(`assets/themes/${item}/style`))
      .pipe(gulp.dest(`src/themes/${item}/css`))
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

gulp.task('compile-themes-force', gulp.parallel(tasks));
