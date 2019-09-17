const Characters = require('./characters-model.js');

const db = require('../data/dbConfig.js');;

describe('The Character Model', () => {

    beforeEach(async () => {
        await db('characters').truncate();
    });

    describe('the insert function', () => {
        it('Should insert a new character', async () => {
            const characterData = { name: 'Kermit'};
            const character = await Characters.insert(characterData);
            const characters = await db('characters');
            expect(characters.length).toBe(1);
            expect(characters[0].name).toBe('Kermit');
        });
    });
});