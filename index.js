const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./server/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/MEVN-Shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB conect: OK'))
  .catch((err) => console.log(err));

app.use('/', express.static(path.join(__dirname, '/dist')));

routes.forEach((el) => {
  app.use(`/api/${el}`, require(path.join(__dirname, `/server/routes/${el}`)));
});

app.listen(port, () => console.log(`Server start on ${port} port`));
