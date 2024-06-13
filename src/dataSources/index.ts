const ComicsAPI = require('./comics');

module.exports = (cache) => ({
	comics: new ComicsAPI({cache}),
});
