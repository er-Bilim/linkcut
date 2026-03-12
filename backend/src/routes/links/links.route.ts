import type { Router, Request, Response } from 'express';
import express from 'express';

const linksRouter: Router = express.Router();

linksRouter.get('/:shortUrl', (req: Request, res: Response) => {
  const { shortUrl } = req.params;

  return res.json({ shortUrl });
});

export default linksRouter;
