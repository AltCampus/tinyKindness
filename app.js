// import modules
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const webpackConfig = require('./webpack.config');

const app = express();
const bootStrap = require('./server/modules/bootStrap');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './server/views'));
app.use(express.static(path.join(__dirname, 'public')));

// connect to mongoDB
mongoose.connect('mongodb://localhost/tinyKindness', { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  else {
    console.log('connected to mongodb');
    bootStrap.init();
  }
});

app.use(cors());

// Path for images
app.use('/images', express.static(path.join(__dirname, '/client/src/images')));

// initialize session
app.use(session({
  secret: 'tinyKindness',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ url: 'mongodb://localhost/tinyKindness-session' }),
}));

// Webpack config
if (process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
}

// use passport as middleware
app.use(passport.initialize());
app.use(passport.session());
require('./server/modules/passport')(passport);

// use cors
app.use(cors());

// Essential Middleware
app.use(bodyParser.json());


// Requiring routes
app.use('/api', require('./server/routers/api'));
app.use(require('./server/routers/index'));

// listen app on 8001 port
app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});
