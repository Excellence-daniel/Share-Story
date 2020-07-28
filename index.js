const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  console.log("Server Started!");
});

module.exports = app;
