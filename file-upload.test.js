const express = require('express');
const request = require('supertest');

const app = express();

app.post('/api', (req, res) => {
  console.log('Body', req.body);
  res.json({ message: 'pass!' });
});
app.use((err, req, res, next) => {
  console.log('Body', req.body);
  res.status(500);
  res.json({ message: 'fail!' });
});

describe('File Upload Test', () => {
  it('should upload cat test 1', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 2', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 3', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 4', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 5', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 6', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 7', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 8', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 9', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 10', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 11', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 12', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 13', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 14', async () => {
    const res = await request(app).post('/api').field('some-field', 'what').attach('file', 'cat1.png').attach('file2', 'cat2.png');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
});