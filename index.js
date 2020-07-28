const express = require("express");
const app = express();
const cors = require("cors");
const port = 4030;

const authEndpoints = require("./connector/login");

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

app.get("/login", authEndpoints.login);

module.exports = app;
