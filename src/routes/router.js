import express from 'express';
import content from '../content/content.json';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Server Home!');
});

router.get('/content', (req, res, next) => {
  res.send(content);
});

export default router;