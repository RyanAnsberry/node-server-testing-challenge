const router = require('express').Router();

const Characters = require('./characters-model.js');

router.get('/', (req, res) => {
    Characters.get()
    .then(characters => {
        res.status(200).json(characters);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;