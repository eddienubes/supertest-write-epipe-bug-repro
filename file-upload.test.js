const express = require('express');
const request = require('supertest');
const fs = require("node:fs");
const http = require("node:http");
const { request: nodeRequest } = require("node:http");

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
const createStream = (filename) => {
  const stream = fs.createReadStream(filename);
  // stream.pause();
  stream.on('error', (err) => {
    console.log('Stream error', err);
  });
  stream.on('open', () => {
    console.log('Stream opened');
  });
  stream.on('close', () => {
    console.log('Stream closed');
  });
  stream.on('end', () => {
    console.log('Stream ended');
  });

  return stream;
}
describe('File Upload Test', () => {
  it('should upload cat test 1', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      // cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 2', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 3', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 4', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 5', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 6', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 7', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 8', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 9', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 10', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 12', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
  it('should upload cat test 13', (done) => {
    const cat2Stream = createStream('cat2.png');
    const cat1Stream = createStream('cat1.png');

    const server = http.createServer(app)
    server.listen(0, async () => {
      console.log('Server listening on port', server.address().port);
      const { port, address } = server.address();
      const req = nodeRequest({
        method: 'POST',
        host: address,
        port,
        path: '/api'
      });
      cat1Stream.pipe(req);
      cat2Stream.pipe(req);
      req.on('response', (res) => {
        console.log('Response', res.statusCode);
        done();
      });
    });
  });
});