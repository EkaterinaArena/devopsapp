const express = require('express');
const app = express();
const dir = `${__dirname}/`;

app.get("*", (req, res) => {
  res.sendFile(dir + "index.html");
});

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('demo listening on port ' + port);
});