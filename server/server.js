import express from 'express';
import { MongoClient } from 'mongodb';
import { DB_URL, DB_NAME, SERVER_PORT } from './config';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import equipmentRoutes from './api/routes/equipment.js'
import usersRoutes from './api/routes/users.js'
import examplesRoutes from './api/routes/examples.js'
import ordersRoutes from './api/routes/orders.js'

const app = express();

export let db;

MongoClient.connect(DB_URL, (err, client) => {

  if (err) {
    throw err;
  }

  db = client.db(DB_NAME);
  
  app.listen(SERVER_PORT);
  
});


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('img'));

app.use('/api/equipment', equipmentRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/examples', examplesRoutes);
app.use('/api/orders', ordersRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((err, req, res, next) =>{
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
})