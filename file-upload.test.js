const express = require('express');
const request = require('supertest');
const fs = require("node:fs");

const app = express();

app.get('/api', (req, res) => {
  console.log('Body', req.body);
  res.json({ message: 'pass!' });
});
app.use((err, req, res, next) => {
  console.log('Body', req.body);
  res.status(500);
  res.json({ message: 'fail!' });
});
const createStream = (filename) => {
  const stream = fs.createReadStream(filename);
  // stream.pause();
  stream.on('close', () => {
    console.log('Stream closed');
  });
  stream.on('end', () => {
    console.log('Stream ended');
  });

  return stream;
}
describe('File Upload Test', () => {
  it('should upload cat test 1', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 2', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 3', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 4', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 5', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 6', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 7', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 8', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 9', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
  it('should upload cat test 10', async () => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');
    const res = await request(app).get('/api')
      .attach('file', cat1Stream)
      .attach('file2', cat2Stream);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      message: 'pass!'
    })
  });
});