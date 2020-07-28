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

// app.get("/login", authEndpoints.login);
app.get("/login", async (request, response) => {
  console.log("hey login endpoijnt");
  return response.status(200).send("hey hello");
});

module.exports = app;
