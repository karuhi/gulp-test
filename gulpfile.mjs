import gulp from "gulp";
import imagemin from "gulp-imagemin";
import rev from "gulp-rev";

/**
 * source imageから画像を最適化してrevisioningする。
 */
gulp.task("default", () => {
  return gulp
    .src("src/image.jpeg")
    .pipe(imagemin())
    .pipe(rev())
    .pipe(gulp.dest("dist"));
});
