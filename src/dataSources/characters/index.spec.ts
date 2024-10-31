import CharactersDataSources from '.';

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
	let characters;
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

	it('should fetch characters for a comics', async () => {
		characters.getCharactersComics('123');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/123/comics',
			paramsCharactersApi
		);
	});

	it('should fetch characters for a events', async () => {
		characters.getCharactersEvents('123');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/123/events',
			paramsCharactersApi
		);
	});

	it('should fetch characters for a series', async () => {
		characters.getCharactersSeries('123');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/123/series',
			paramsCharactersApi
		);
	});

	it('should fetch characters for a stories', async () => {
		characters.getCharactersStories('123');
		expect(characters.get).toHaveBeenCalledWith(
			'characters/123/stories',
			paramsCharactersApi
		);
	});
});
