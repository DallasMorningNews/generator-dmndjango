### This is no longer maintained. DMN devs should use [`django-admnin startapp`](https://docs.djangoproject.com/en/2.0/ref/django-admin/#startapp) and add static file processing using our [`yo dmninteractives`](https://github.com/DallasMorningNews/generator-dmninteractives) generator.

# generator-dmndjango [![NPM version][npm-image]][npm-url]

Built for pairing [Django](https://www.djangoproject.com/) with client-side frameworks like [Backbone](http://backbonejs.org/) and [React](https://facebook.github.io/react/), this [Yeoman](http://yeoman.io/) generator creates a [gulp](http://gulpjs.com/) and [browserify](http://browserify.org/)-based staticapp for transpiling, bundling, and rendering scss, js and responsive image sets into the static files directory of a Django app. It is designed to work with our [django-project-template](https://github.com/DallasMorningNews/django-project-template), but can be used in any standard Django app.

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

### CommonJS for Backbone/Marionette apps

The CommonJS subgenerator produces an app pre-architected for use with Backbone/[Marionette](http://marionettejs.com/) apps.

### ES6 for React/Redux apps

The ES6 subgenerator includes browserify [JSX](http://buildwithreact.com/tutorial/jsx) and [ES6 babel](https://babeljs.io/docs/learn-es2015/) transforms for use with React/[Redux](http://redux.js.org/) apps. It also includes starter files with useful boilerplate and [airbnb's eslint configuration](https://github.com/airbnb/javascript) to keep your code squeaky clean.

**Note:** If you're using Atom's `linter-eslint`, you will experience [errors](https://github.com/AtomLinter/linter-eslint/issues/422) if your editor is not opened at the staticapp root directory. Open a second project folder at the staticapp root while developing to get around the issue.


## Using the staticapp

The staticapp presumes your Django app's static directory is structured like this:

```
your_app/
  static/
    your_app/
      js/
      css/
      img/
```

After the staticapp is installed, you can simply run `gulp` in its root directory while developing your Django project. Any changes made to javascript and scss files will be automatically rendered into your app's local static file directory. Images must be processed explicitly.


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

The staticapp offers support for SCSS, only.

### IMG

Images must be processed explicitly by running:

```bash
$ gulp img
```




## License

MIT © [Jon McClure]()


[npm-image]: https://badge.fury.io/js/generator-dmndjango.svg
[npm-url]: https://npmjs.org/package/generator-dmndjango
