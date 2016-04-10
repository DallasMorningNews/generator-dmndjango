'use strict';
var yeoman = require('yeoman-generator');
var mkdirp = require('mkdirp');
var fs = require('fs');


module.exports = yeoman.Base.extend({

  constructor: function () {
  	console.log("Building CommonJS staticapp...");
    yeoman.Base.apply(this, arguments);
    this.option('appName');
  },

  writing: function () {

    this.fs.copyTpl(
		this.templatePath('package.json'),
		this.destinationPath('./package.json'),
		{ appName: this.options.appName }
	);
	this.fs.copyTpl(
		this.templatePath('bower.json'),
		this.destinationPath('./bower.json'),
		{ appName: this.options.appName }
	);
	this.fs.copy(
		this.templatePath('.bowerrc'),
		this.destinationPath('./.bowerrc')
	);
	this.fs.copy(
		this.templatePath('gulpfile.js'),
		this.destinationPath('./gulpfile.js')
	);
	// Gulp
	this.fs.copy(
		this.templatePath('gulp/index.js'),
		this.destinationPath('./gulp/index.js')
	);
	this.fs.copy(
		this.templatePath('gulp/tasks/watch.js'),
		this.destinationPath('./gulp/tasks/watch.js')
	);
	this.fs.copy(
		this.templatePath('gulp/tasks/vendor.bundle.config.js'),
		this.destinationPath('./gulp/tasks/vendor.bundle.config.js')
	);
	this.fs.copyTpl(
		this.templatePath('gulp/tasks/browserify.js'),
		this.destinationPath('./gulp/tasks/browserify.js'),
		{ appName: this.options.appName }
	);
	this.fs.copyTpl(
		this.templatePath('gulp/tasks/img.js'),
		this.destinationPath('./gulp/tasks/img.js'),
		{ appName: this.options.appName }
	);
	this.fs.copyTpl(
		this.templatePath('gulp/tasks/sass.js'),
		this.destinationPath('./gulp/tasks/sass.js'),
		{ appName: this.options.appName }
	);
	this.fs.copyTpl(
		this.templatePath('gulp/tasks/vendor.js'),
		this.destinationPath('./gulp/tasks/vendor.js'),
		{ appName: this.options.appName }
	);
	// SRC
	mkdirp('./src/img');
	this.fs.copy(
		this.templatePath('src/js/app.js'),
		this.destinationPath('./src/js/app.js')
	);
	this.fs.copy(
		this.templatePath('src/scss/main.scss'),
		this.destinationPath('./src/scss/main.scss')
	);

  },

  install: function () {
    this.installDependencies();
  }

});
