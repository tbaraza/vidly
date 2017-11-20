import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.info(`listening on port${port}`);
  }
});
