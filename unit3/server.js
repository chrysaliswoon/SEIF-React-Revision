const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/somedata", (request, response) => {
    // console.log('response: ', response);
    // console.log('===================');
    response.send("this is a new response for nodemon");
  });