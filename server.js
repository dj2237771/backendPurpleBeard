"use strict";

const express = require("express");
const superagent = require("superagent"); // npm i superagent
const digiData = require("./functions/digimon");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

// localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("Im alive horraay");
});

app.get("/alldigimon", digiData.digimon);
app.get("/digimon-level", digiData.digimonLevel);

app.get("*", (req, res) => {
  res.status(404).send("not found");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
