const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const logger = require('./middleware/logger');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const mainRoutes = require('./routes/index')
app.use(compression());
app.use(express.json());
//form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('*', cors());
app.set('view engine', 'pug');
app.use('/', mainRoutes);




app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

if (app.get('env') === 'development') {
  app.use(morgan('dev'))
  app.use(logger);
}

mongoose.connect('mongodb://localhost/bookzone',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
  .then(() => {
    console.log("MongoDB ga ulanish hosil qilindi...");
  })
  .catch((err) => {
    console.log("MongoDBga ulanishda xatolik yuz berdi...", err);
  })

const port = process.env.PORT || 8000
console.log(port);


app.listen(port)