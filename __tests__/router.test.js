import supertest from 'supertest';
import {app} from '../src/app.js';
const myTester = supertest(app);

describe('Basic Express Server Tests', () => {
  it('should return 404 on bad route', async () => {
    const response = await myTester.get('/hellothere');
    expect(response.statusCode).toBe(404);
  });

  it('should return 500 if sending bad JSON', async () => {
    const response = await myTester.post('/save').send('{"invalid"}').type('json');
    expect(response.statusCode).toBe(500);
  });

  it('should return 200 if getting the home page', async () => {
    const response = await myTester.get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return 200 if sending valid JSON', async () => {
    const response = await myTester.get('/content');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
  });
});