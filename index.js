//'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '127.0.0.1';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 指定したポート番号で接続をlistenする
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
