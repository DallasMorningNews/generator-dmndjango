var gulp = require('gulp');
var bundle = require('gulp-bundle-assets');


module.exports = function() {
    return gulp.src('./gulp/tasks/vendor.bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./../static/<%= appName %>/'));
};
