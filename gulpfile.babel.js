import gulp from "gulp";
import webserver from "gulp-webserver";

gulp.task("server", () => {
  gulp.src("./")
      .pipe(webserver());
});
