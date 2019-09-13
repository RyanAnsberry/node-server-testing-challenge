const express = require('express');

const charactersRouter = require('./characters/characters-router.js');

const server = express();

server.use(express.json());

server.use('/api/characters', charactersRouter);

module.exports = server;