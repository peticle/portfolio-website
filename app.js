const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log(`Server started on port ${port}!`);
});