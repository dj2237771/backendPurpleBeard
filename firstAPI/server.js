"use strict";
const express = require("express");
const axios = require("axios");
const superagent = require("superagent");
require("dotenv").config();
const app = express();

// localhost:3000

const PORT = process.env.PORT;
app.get("/test", (req, res) => {
  res.send("alive!");
});

app.get("/", (req, res) => {
  res.status(200).send("home route");
});
// localhost:3000/myPetsList
let myPetsList = ["sheep", "dog", "Fluffy"];
app.get("/myPetsList", (req, res) => {
  res.status(200).send(myPetsList);
});

// localhost:3000/all other routes*/

// localhost:3000/getPoke
// app.get("/getPoke", (req, res) => {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
//   superagent
//     .get(url)
//     .then((pokeData) => {
//       // console.log(pokeData);
//       // res.status(200).send(pokeData.body);
//       const pokeArr = pokeData.body.results.map((pokemons) => pokemons.name);
//       res.status(200).send(pokeArr);
//     })
//     .catch((error) => {
//       res.status(500).send(`somthing went wrong: ${error}`);
//     });
// });
// // localhost:3000/getPokebyname?name=charizard
// app.get("/getPokename", (req, res) => {
//   const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
//   let pokeName = req.query.name;
//   superagent
//     .get(url)
//     .then((pokeData) => {
//       // console.log(pokeData);
//       // res.status(200).send(pokeData.body);
//       const poke = pokeData.body.results.find(
//         (pokemon) => pokemon.name.toLowerCase() === pokeName.toLowerCase()
//       );
//       res.status(200).send(poke);
//     })
//     .catch((error) => {
//       res.status(500).send(`somthing went wrong: ${error}`);
//     });
//   app.listen(PORT, () => {
//     console.log(`listening on ${PORT}`);
//   });

//   app.get("/alldigimon", (req, res) => {
//     const url = "https://digimon-api.vercel.app/api/digimon";
//     superagent
//       .get(url)
//       .then((digiData) => {
//         // console.log(pokeData);
//         // res.status(200).send(pokeData.body);
//         const dogiArra = digiData.body.results.map((digimon) => digimon.name);
//         res.status(200).send(dogiArra);
//       })
//       .catch((error) => {
//         res.status(500).send(`somthing went wrong: ${error}`);
//       });
//   });
// });
//
app.get("*", (req, res) => {
  res.status(404).send("route not found");
});
