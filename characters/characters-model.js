const db = require('../data/dbConfig.js');

module.exports = {
    getAll,
    insert,
    remove
};

function getAll() {
    return db('characters')
}

async function insert(character) {
    return null;
  }

function remove(id) {
    return null;
  }
