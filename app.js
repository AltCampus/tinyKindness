const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const cors = require('cors');
const mongoose = require('mongoose');
// const MongoStore = require('connect-mongo')(session);


const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './server/views'));

mongoose.connect('mongodb://localhost/tinyKindness', { useNewUrlParser: true }, function(err, connection) {
  if (err) throw err;
  else console.log('connected to mongodb');
});


// Webpack config
if (process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
}
app.use(cors());

// Essential Middleware
app.use(bodyParser.json());


// Requiring routes
app.use('/api', require('./server/routers/api'));
app.use(require('./server/routers/index'));

app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});
