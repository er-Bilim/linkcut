import express from 'express';
import type { Router } from 'express';
import linksRouter from './links/links.route.js';

const apiRoute: Router = express.Router();

apiRoute.use('/links', linksRouter);

export default apiRoute;
