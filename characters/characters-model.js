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
    return db('characters').insert(character)
    .then(ids => {
      return db('characters').where({ id: ids[0] }).first();
    })
  }

function remove(id) {
    return null;
  }
