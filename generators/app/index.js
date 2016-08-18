'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    this.log('    ____  __  ____   _____\n   / __ \\/  |/  / | / /   |  ____  ____  _____\n  / / / / /|_/ /  |/ / /| | / __ \\/ __ \\/ ___/\n / /_/ / /  / / /|  / ___ |/ /_/ / /_/ (__  )\n/_____/_/  /_/_/ |_/_/  |_/ .___/ .___/____/\n                         /_/   /_/            \n');


    var prompts = [{
        name:'appName',
        message: 'What\'s your Django app\'s name?'
      },
      {
        type: 'list',
        name: 'module',
        message: 'What module pattern would you like to use?',
        choices: [
          {
            name: 'CommonJS (Browserify + Backbone/Marionette)',
            value: 'common'
          },{
            name: 'AMD (under construction)',
            value: 'amd'
          },{
            name: 'ES6 (Browserify + React/Redux)',
            value: 'es6'
          }
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  subgen: function () {
    if(this.props.module === 'common'){
      this.composeWith('dmndjango:common', {
        options: {
          appName: this.props.appName
        }
      });
    }else if(this.props.module === 'amd'){
      this.composeWith('dmndjango:amd', {
        options: {
          appName: this.props.appName
        }
      });
    }else if(this.props.module === 'es6'){
      this.composeWith('dmndjango:es6', {
        options: {
          appName: this.props.appName
        }
      });
    }
  },
});
