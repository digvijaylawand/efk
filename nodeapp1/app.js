const express = require('express');
const app = express();
const FluentClient = require('@fluent-org/logger').FluentClient;
const requestIp = require('request-ip');

const logger = new FluentClient(`${process.env.APP_NAME}`, {
  socket: {
    host: 'fluentd',
    port: 24224,
    timeout: 3000, // 3 seconds
  }
});

app.use(requestIp.mw());

// Logs API access
app.use((req, res, next) => {
  const start = new Date();
  res.on('finish', () => {
    const elapsed = new Date() - start;
    const logData = {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      responseTime: elapsed,
      clientIp: req.clientIp
    };
    logger.emit('access', logData);
  });
  next();
});

// Logs API errors
app.use((err, req, res, next) => {
  logger.emit('api.error', {
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.url
  });
  next(err);
});


// Your endpoint definitions
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.send('Fetching users...', a);
});

app.get('/api/posts', (req, res) => {
  res.send('Fetching posts...');
});

app.get('/api/comments', (req, res) => {
  const delay = parseInt(Math.random() * 1000);
  setTimeout(() => {
    res.send('Fetching comments...');
  }, delay);
});

app.get('/api/likes', (req, res) => {
  const delay = parseInt(Math.random() * 1000);
  setTimeout(() => {
    res.send('Fetching likes...');
  }, delay);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});