const ComicsAPI = require('./comics');
const CharactersAPI = require('./characters');

module.exports = (cache) => ({
	comics: new ComicsAPI({cache}),
	characters: new CharactersAPI({cache}),
});
