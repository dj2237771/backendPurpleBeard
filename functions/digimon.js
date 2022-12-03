"use strict";
const superagent = require("superagent");

async function digimon(req, res) {
  const url = "https://digimon-api.vercel.app/api/digimon";
  superagent
    .get(url)
    .then((digiData) => {
      const dogiArra = digiData.body;
      res.status(200).send(dogiArra);
    })
    .catch((error) => {
      res.status(500).send(`somthing went wrong: ${error}`);
    });
}

async function digimonLevel(req, res) {
  const digilevel = req.query.level;
  const url = `https://digimon-api.vercel.app/api/digimon/level/${digilevel}`;
  superagent
    .get(url)
    .then((digiData) => {
      const dogiArra = digiData.body;
      res.status(200).send(dogiArra);
    })
    .catch((error) => {
      res.status(500).send(`somthing went wrong: ${error}`);
    });
}

module.exports = { digimon, digimonLevel };
