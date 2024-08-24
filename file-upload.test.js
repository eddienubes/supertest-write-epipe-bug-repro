const express = require('express');
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const http = require("node:http");
const { request } = require("node:http");

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
  it.each([1, 2, 3, 4, 5, 6, 7, 8, 9])('should upload cat test 1', async (number) => {
    console.log(`
    +============================+
    | Test: ${ number }            <-------|
    +============================+
    `)
    await new Promise(async (resolve, reject) => {
      // const cat2Stream = createStream('cat2.png');
      const cat1Stream = createStream('cat1.png');
      const buffer = await fsPromises.readFile('cat1.png');

      const server = http.createServer(app, (req, res) => {
        if (req.method === 'POST' && req.url === '/api') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            console.log('Request body', body);
            res.json({ message: 'pass!' });
          });
        }
      });
      server.on('close', () => {
        console.log('Server closed');
        resolve();
      });
      server.on('error', (err) => {
        console.log('Server error', err);
      });
      server.on('dropRequest', () => {
        console.log('Server dropped request');
      });

      server.listen(0, async () => {
        console.log('Server listening on port', server.address().port);
        const { port, address } = server.address();
        const req = request({
          method: 'POST',
          host: address,
          port,
          path: '/api',
          agent: false,
          headers: {
            'content-length': buffer.length,
          }
        });
        req.on('error', (err) => {
          console.log(`Request error, test number: ${ number }`, err);
        });
        req.on('response', (res) => {
          console.log('Response', res.statusCode);
          res.on('data', (chunk) => {
            console.log('Response data', chunk.toString());
          });
          res.on('end', () => {
            console.log('Response end');
            server.close();
          });
        });
        cat1Stream.pipe(req);
      });
    })
  });
});