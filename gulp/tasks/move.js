var gulp = require("gulp");

// Move JS Files to app/scripts
gulp.task('js', function() {
    return gulp.src([
    	'node_modules/bootstrap/dist/js/bootstrap.min.js',
    	'node_modules/jquery/dist/jquery.min.js',
    	'node_modules/popper.js/dist/umd/popper.min.js'
    	])
        .pipe(gulp.dest("app/assets/scripts"))
});

gulp.task("move", ["js"], function() {

});