# generator-dmndjango [![NPM version][npm-image]][npm-url]

Built for pairing [Django](https://www.djangoproject.com/) with client-side frameworks like [Backbone](http://backbonejs.org/) and [React](https://facebook.github.io/react/), this [Yeoman](http://yeoman.io/) generator creates a gulp-based staticapp for transpiling, bundling, and rendering scss, js and responsive image sets into the static files directory of a Django app. It is designed to work with our [django-project-template](https://github.com/DallasMorningNews/django-project-template), but can be used in any standard Django app.

## Installation

Requires the same dependencies used in [generator-dmninteractives](https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Setting-up-your-computer#dependencies), namely:

```bash
$ npm install -g gulp
$ npm install -g yo
$ npm install -g generator-dmndjango
```

As well as [ImageMagik](http://www.imagemagick.org/script/index.php) for image processing:

```bash
# Mac
brew install imagemagick
# Ubuntu/Linux
apt-get install imagemagick
```


## Generating the staticapp

If you're using our [django-project-template](https://github.com/DallasMorningNews/django-project-template#using-the-app-template), your app will contain an empty `staticapp` directory. If not, create one at the root of your Django app.

Move into the `staticapp` directory then generate the app:

```bash
$ yo dmndjango
```

The generator will ask for the app's name and for which module pattern you'd like to use, which will determine which subgenerator builds the app. (Currently supports CommonJS and ES6.)

## Using the staticapp

After your app is installed, you can simply run `gulp` in the `staticapp` directory while developing your django project. Any changes made to javascript and scss files will be automatically rendered into your app's local static file directory. Presumes your app's static directory is structured like this: `<your_app>/static/<your_app>/<js/css/img>/`.

```bash
$ gulp
```

### JS

The ES6 and CommonJS patterns bundle any javascript files prefixed with `main-`, allowing you to create multiple bundles for different Django views.

To uglify scripts in ES6, run:

```bash
gulp --production
```

### SCSS

This app offers support for SCSS, only.

### IMG

Images must be processed explicitly by running:

```bash
$ gulp img
```

## ES6 for React/Redux apps

The ES6 subgenerator includes browserify [JSX](http://buildwithreact.com/tutorial/jsx) and [ES6 babel](https://babeljs.io/docs/learn-es2015/) transforms for use with React/Redux. It also includes starter files for redux and airbnb's eslint configuration to keep your code squeeky clean.

#### Known issue -- Atom eslint:

If you're using Atom's `linter-eslint`, you will experience errors if the editor is not opened at the staticapp root directory. See this [open issue](https://github.com/AtomLinter/linter-eslint/issues/422). Open a second project folder at the staticapp root while developing to get around the issue.


## License

MIT © [Jon McClure]()


[npm-image]: https://badge.fury.io/js/generator-dmndjango.svg
[npm-url]: https://npmjs.org/package/generator-dmndjango
