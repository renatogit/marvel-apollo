const MarvelTest = require('.'); // Adjust the path based on your project structure

const paramsMarvelApi = {
	ts: 'fake',
	apikey: 'fake',
	hash: 'fake',
};

describe('consfigs/marvelAPI', () => {
	let marvel;

	beforeEach(() => {
		marvel = new MarvelTest();
		marvel.params = paramsMarvelApi;
	});

	it('should initialize with correct baseURL', () => {
		expect(marvel.baseURL).toBe('http://gateway.marvel.com/v1/public/');
	});

	it('should initialize with correct params', () => {
		expect(marvel.params.ts).toBe(paramsMarvelApi.ts);
		expect(marvel.params.apikey).toBe(paramsMarvelApi.apikey);
		expect(marvel.params.hash).toBe(paramsMarvelApi.hash);
	});
});
