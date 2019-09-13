const Characters = require('./characters-model.js');

describe('The Character Model', () => {

    describe('the insert function', () => {
        it('Should insert a new character', () => {
            const character = { name: 'Kermit'};
            Characters.insert(character)
            .then(character => {

            });
        });
    });
});