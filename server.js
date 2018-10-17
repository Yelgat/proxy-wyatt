const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const path = require('path');

const REVIEWS_DOMAIN = 'localhost:4200';
app.use(express.static(path.join(__dirname, 'public')));
// app.use(
//   '/r/:namecitynumber',
//   proxy(`http://${REVIEWS_DOMAIN}/r/:namecitynumber`, {
//     proxyReqPathResolver: function(req) {
//       return `http://${REVIEWS_DOMAIN}/r/:namecitynumber/${req.params.namecitynumber}`;
//     }
//   })
// );

app.get('/r/:namecitynumber', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/img/:file', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/img/' + req.params.file));
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Proxy server live on port ${PORT}.`);
});
