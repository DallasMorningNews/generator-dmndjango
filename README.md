# generator-dmndjango [![NPM version][npm-image]][npm-url]
Yeoman generator for use in django projects at _The Dallas Morning News_. 

Creates a gulp-based staticapp for rendering scss, js and responsive image sets into the static files directory of a django app created using the [django-project-template](https://github.com/DallasMorningNews/django-project-template).

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

The generator will ask for the app name you used when creating your django app and for which module pattern you'd like to use, which will determine which subgenerator builds the app. (Currently supports CommonJS.)

## Using the staticapp

Simply run gulp in the `staticapp` directory while developing your django project. Any changes made to javascript and scss files will be automatically rendered into your app's local static file directory (presumes you're app's static directory is structured like this: `<your_app>/static/<your_app>/<js/css/img directory>`). 

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
