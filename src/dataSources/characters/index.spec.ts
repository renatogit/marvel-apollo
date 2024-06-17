const CharactersDataSources = require('.');

interface ICharactersParams {
	params: {
		ts: string;
		apikey: string;
		hash: string;
	};
}

const paramsCharactersApi: ICharactersParams = {
	params: {
		ts: 'fake',
		apikey: 'fake',
		hash: 'fake',
	},
};

describe('dataSources/characters', () => {
	let characters: typeof CharactersDataSources;
	beforeEach(() => {
		characters = new CharactersDataSources();
		characters.get = jest.fn();
		characters.params = paramsCharactersApi.params;
	});

	it('should fetch characters data', async () => {
		characters.getCharacters();
		expect(characters.get).toHaveBeenCalledWith(
			'characters',
			paramsCharactersApi
		);
	});

	it('should fetch characters by ID', async () => {
		characters.getCharactersById('123');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/123',
			paramsCharactersApi
		);
	});

	it('should fetch comics for a characters', async () => {
		characters.getCharactersComics('456');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/456/comics',
			paramsCharactersApi
		);
	});

	it('should fetch events for a comic', async () => {
		characters.getCharactersEvents('987');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/987/events',
			paramsCharactersApi
		);
	});

	it('should fetch series for a characters', async () => {
		characters.getCharactersSeries('789');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/789/series',
			paramsCharactersApi
		);
	});

	it('should fetch stories for a comic', async () => {
		characters.getCharactersStories('987');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/987/stories',
			paramsCharactersApi
		);
	});
});
