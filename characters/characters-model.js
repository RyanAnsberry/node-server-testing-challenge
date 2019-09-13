const db = require('../data/dbConfig.js');

module.exports = {
    find,
    create,
    remove
};

function find() {
    return db('characters')
}

function create() {

}

function remove() {

}
