# react-examples
React has a lot of moving parts, so this repository is intended to ease the pain of initial project setup. I hope this repository can be of help to anyone just starting out with `React` and `Flux`. 

The application provides a UI composed of three basic components: `app.jsx`, `button.jsx`, and `h1.jsx`. `app.jsx` is the entry point into the application. When rendered, the contents are placed into the `id` div found in `index.html`. If everything is running properly, you should see something like this:

![alt text](https://raw.githubusercontent.com/fortitudetec/react-examples/master/images/intial.png "Initial view")

When clicked, the button dispatches an event through the `Flux` dispatcher to the rest of the UI. Each component registered through the `ExampleStore` receives a notification that data has changed. The button component in this case dispatches an event with the current time on click. 

`app.jsx` is configured to handle events from the store, and subsequently forces updates to the UI with the timestamp supplied by the button. 

![alt text](https://raw.githubusercontent.com/fortitudetec/react-examples/master/images/clicked.png "Clicked view")

## Getting Started
This is a React project that uses JSX, you will need to have a current version of `node.js` installed in order to transpile to browser-native JavaScript. 

`webpack.config.js`, and `.babelrc` should contain everything needed to build `dist/bundle.js`. 

### Build
Running the application can be accomplished in a few ways. For development, I would recommend running with `webpack-dev-server`:

```
$> webpack-dev-server --progress --colors --debug --content-base dist/
```

This will monitor the directory for changes and automatically rebuild `bundle.js` as necessary. To view the app, point your browser to [http://localhost:8080](http://localhost:8080)

*OR* if you would prefer to point your browser to `index.html` manually, you can build `bundle.js` manually by running:

```
$> webpack
```

