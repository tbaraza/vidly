import express from 'express';

import path from 'path';

import configFile from './server/config/config';

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];
const router = require(`./server/${config.apiVersion}/routes`);
const app = express();
const port = process.env.PORT || 8000;

router(app);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`listening on port ${port}`);
  }
});
