const express = require('express');

const server = express();

server.use(express.json());

server.get('/characters', (req, res) => {
    Hobbits.getAll()
      .then(characters => {
        res.status(200).json(characters);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  

module.exports = server;