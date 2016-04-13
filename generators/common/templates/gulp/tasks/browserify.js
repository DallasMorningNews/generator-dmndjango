var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var es = require('event-stream');
var path = require('path');
var glob = require('glob');


module.exports = function(done){

  glob('./src/js/main-**.js', function(err, files) {
      if(err) done(err);

      var tasks = files.map(function(entry){
            return browserify({
                entries: [entry],
                debug: true
              })
              .bundle()
              .pipe(source(path.basename(entry)))
              .pipe(buffer())
              .pipe(sourcemaps.init())
              .pipe(uglify())
              .pipe(rename({
                      extname: '.bundle.js'
                  }))
              .pipe(sourcemaps.write('./'))
              .pipe(gulp.dest('./../static/<%= appName %>/js/'));
        });

      es.merge(tasks).on('end', done);

  });
};
