module.exports = {
  bundle: {
    'js/vendor': {
      scripts: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
      ],
      options: {
        uglify: false,
        rev: false,
        maps: false,
        order: {
            scripts: [
                '**/jquery.min.js',
                '**/bootstrap.min.js',
                '!**/jquery.min.js'
            ]
        },
        watch: {
            scripts: [
                './bower_components/**/*.js',
                './node_modules/**/*.js'
            ]
        }
      }
    },
    'css/vendor': {
        styles: [
          './bower_components/bootstrap/dist/css/bootstrap.min.css',
          './bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
          './bower_components/font-awesome/css/font-awesome.min.css',
        ],
        options: {
          minCSS: false,
          rev: false,
          maps: false,
          watch: {
              styles: [
                  './bower_components/**/*.css',
                  './node_modules/**/*.css'
              ]
          }
        }
    }
  }
};
