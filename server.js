import express from 'express';
import path from 'path';
import configFile from './server/config/config';

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];
const router = require(`./server/${config.apiVersion}/routes`);

const app = express();
const port = process.env.PORT || 8000;

if (env === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  router(app);
} else {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    hot: true,
    stats: {
      colors: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
  });
  router(app);
}

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`listening on port ${port}`);
  }
});
