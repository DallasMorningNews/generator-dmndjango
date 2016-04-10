# generator-dmndjango [![NPM version][npm-image]][npm-url]
> Yeoman generator for use in django projects at The Dallas Morning News. 
> 
> Creates a gulp-based staticapp for rendering scss, js and responsive image sets into the static files directory of a django app created using the [django-project-template](https://github.com/DallasMorningNews/django-project-template).

## Installation

Be sure you have the same dependencies installed as needed by [generator-dmninteractives](https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Setting-up-your-computer#dependencies).

Then install generator-dmndjango using [npm](https://www.npmjs.com/).

```bash
$ npm install -g generator-dmndjango
```

## Generating the staticapp

Move to the `staticapp` directory created by the DMN django [app template](https://github.com/DallasMorningNews/django-project-template#using-the-app-template).

Then generate the app:

```bash
$ yo dmndjango
```

The generator will ask for the app name you used when creating your django app and for which module pattern you'd like to use, which will determine which subgenerator builds the app.

## Using the staticapp

Simply run gulp in the `staticapp` while developing your django project. Any changes made to javascript and scss files will be automatically rendered into your apps local static file directoty (presumes structure `<your_app>/static/<your_app>/<js/css/img>`). 

```bash
$ gulp
```

Images must be processed explicitly by running:

```bash
$ gulp img
```

## License

MIT © [Jon McClure]()


[npm-image]: https://badge.fury.io/js/generator-dmndjango.svg
[npm-url]: https://npmjs.org/package/generator-dmndjango
[travis-image]: https://travis-ci.org/DallasMorningNews/generator-dmndjango.svg?branch=master
[travis-url]: https://travis-ci.org/DallasMorningNews/generator-dmndjango
[daviddm-image]: https://david-dm.org/DallasMorningNews/generator-dmndjango.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/DallasMorningNews/generator-dmndjango