let express = require("express");
let app = express();

app.use("/public", express.static());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
