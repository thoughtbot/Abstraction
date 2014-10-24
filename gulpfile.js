var gulp = require('gulp');

var sass = require('gulp-sass'),
	autoprefix = require('gulp-autoprefixer'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	notify = require('gulp-notify');

// Stylesheets

gulp.task('sass', function () {
	gulp.src('./assets/sass/*.scss')
		.pipe(sass({
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        }}))
		.pipe(autoprefix('last 2 versions'))
		.pipe(gulp.dest('./assets/css'))
});

// Javascript

gulp.task('jshint', function () {
	gulp.src('./assets/js/*')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
});

// Tasks

gulp.task('default', ['sass', 'jshint'], function() {

	// Watch sass files
	gulp.watch('./assets/sass/**/*.scss', ['sass']);

	// Watch js files
	gulp.watch('./assets/scripts/**/*.js', ['scripts']);

	// Watch image files
	gulp.watch('./assets/images/**/*', ['imagemin']);

});
