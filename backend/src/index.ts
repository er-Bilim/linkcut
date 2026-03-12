import express from 'express';
import type { Express } from 'express';
import cors from 'cors';
import apiRoute from './routes/api.route.js';
import { PORT } from './constants/constants.js';
import linksRouter from './routes/links/links.route.js';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoute);

const run = async () => {
  app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
  });
};

run().catch((error) => console.error(error));
