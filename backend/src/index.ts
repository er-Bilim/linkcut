import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
import apiRoute from './routes/api.route.js';
import { PORT } from './constants/constants.js';
import mongoose from 'mongoose';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoute);

const run = async () => {
  
  await mongoose.connect('mongodb://localhost/linkcut-bilim');

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });

  process.on('exit', () => {
    mongoose.disconnect();
  });
};

run().catch((error) => console.error(error));
