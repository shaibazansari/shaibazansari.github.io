const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");

const config = {
    styles: {
        source: "src/scss/style.scss",
        dest: "assets/css",
    }, 
    scripts: {
        source: "src/js/index.js",
        dest: "assets/js",
        destFilename: "script.js"
    }, 
}

gulp.task("styles", function () {
  return gulp
    .src(config.styles.source)
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task("scripts", function () {
  return gulp
    .src(config.scripts.source)
    .pipe(uglify())
    .pipe(rename(config.scripts.destFilename))
    .pipe(gulp.dest(config.scripts.dest));
});

gulp.task("start", function () {
    console.log(process.argv);
    gulp.watch(config.styles.source, gulp.series('styles'));
    gulp.watch(config.scripts.source, gulp.series('scripts'));
});
