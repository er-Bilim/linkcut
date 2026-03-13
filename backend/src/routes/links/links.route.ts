import type { Router, Request, Response } from 'express';
import express from 'express';
import type { ISourceLink } from '../../types/links/links.types.js';
import Link from '../../models/Link/Link.js';
import { Error } from 'mongoose';

const linksRouter: Router = express.Router();

linksRouter.get('/:shortUrl', async (req: Request, res: Response) => {
  const shortUrl = req.params.shortUrl as string;

  try {
    const link: ISourceLink | null = await Link.findOne({ shortUrl });
    if (link) {
      res.status(301).redirect(link.originalUrl);
    } else {
      res.status(404).json({
        error: 'Not Found',
      });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Server error',
    });
  }
});

export default linksRouter;

linksRouter.post('/', async (req: Request, res: Response, next) => {
  const data: ISourceLink = req.body;
  const correctLinkData: ISourceLink = {
    originalUrl: data.originalUrl,
  };

  try {
    const linkData = new Link(correctLinkData);
    await linkData.save();

    return res.json(linkData);
  } catch (error) {
    if (error instanceof Error.ValidationError) {
      res.status(400).json({
        error,
      });
    }

    return next(error);
  }
});
