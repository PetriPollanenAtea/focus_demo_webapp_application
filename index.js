const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Tervetuloa Focukseen!");
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
