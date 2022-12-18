const express = require('express')
const app = express()

const pokemon = require("./models/pokemon.json");
let jspokemon = JSON.parse(JSON.stringify(pokemon))

var port = process.env.PORT || 3000;
console.log(jspokemon[0]);

app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon");
  });
//   app.get("/bugs", (req, res) => {
//     res.send("99 little bugs in the code");
//   });

function pokeman(){
    jspokemon.map(e=>{{e.name}})
}

  app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    numberOfBugs<200 ? res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href=/bugs/:${Number(numberOfBugs)+2}>Pull one down, patch it around
    </a>`) : res.send(`<a href=/bugs>Too many bugs!! Start over!</a>`)

  });

  app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1><a href=/bugs/:101}>pull one down, patch it around</a>`)
    
      });

// respond with "hello world" when a GET request is made to the homepage
app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb,adjective,noun } = req.params
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get('/pokemon', (req, res) => {
  res.send(pokeman())
})

module.exports = app;
