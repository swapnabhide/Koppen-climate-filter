var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('Koppen Climate Filter RESTful API server started on: ' + port);