import express from 'express';

const router = express.Router();

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/', (req, res, next) => {
  res.send('Hello!');
});

router.post('/save', (req, res, next) => {
  sendJSON(res, req.body);
});

export default router;