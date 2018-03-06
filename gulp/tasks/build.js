var gulp = require("gulp");
var imagemin = require('gulp-imagemin');
var del = require('del');
var cssnano = require("gulp-cssnano");

gulp.task("deleteDocsFolder", function() {
	return del("./docs");
});

gulp.task("copyGeneralFiles", ["deleteDocsFolder"], function() {
	
	return gulp.src("./app/**/*")
	.pipe(gulp.dest("./docs"));

});

gulp.task('optimizeImages', ["deleteDocsFolder"], function() {
  return gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('cssnano',["clean"], function() {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./docs/assets/styles'));
});

gulp.task("clean", function() {
	return del(["./docs/assets/styles/base", "./docs/assets/styles/modules", "./docs/assets/styles/styles-uncompiled.css"]);
});


gulp.task("build", ["deleteDocsFolder", "copyGeneralFiles", "optimizeImages"], function() {
	gulp.start("cssnano");
});