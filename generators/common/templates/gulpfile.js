var gulp = require('./gulp')([
    'vendor',
    'sass',
    'browserify',
    'watch',
    'img'
]);

gulp.task('build', ['vendor','sass','browserify','watch']);
gulp.task('default', ['build']);