import ComicsDataSources from '.';

interface IComicsParams {
	params: {
		ts: string;
		apikey: string;
		hash: string;
	};
}

const paramsComicsApi: IComicsParams = {
	params: {
		ts: 'fake',
		apikey: 'fake',
		hash: 'fake',
	},
};

describe('dataSources/comics', () => {
	let comics;
	beforeEach(() => {
		comics = new ComicsDataSources();
		comics.get = jest.fn();
		comics.params = paramsComicsApi.params;
	});

	it('should fetch comics data', async () => {
		comics.getComics();
		expect(comics.get).toHaveBeenCalledWith('comics', paramsComicsApi);
	});

	it('should fetch comics by ID', async () => {
		comics.getComicsById('123');
		expect(comics.get).toHaveBeenCalledWith('comics/123', paramsComicsApi);
	});

	it('should fetch characters for a comic', async () => {
		comics.getComicsCharacters('456');
		expect(comics.get).toHaveBeenCalledWith(
			'comics/456/characters',
			paramsComicsApi
		);
	});

	it('should fetch creators for a comic', async () => {
		comics.getComicsCreators('789');
		expect(comics.get).toHaveBeenCalledWith(
			'comics/789/creators',
			paramsComicsApi
		);
	});

	it('should fetch events for a comic', async () => {
		comics.getComicsEvents('987');
		expect(comics.get).toHaveBeenCalledWith(
			'comics/987/events',
			paramsComicsApi
		);
	});

	it('should fetch stories for a comic', async () => {
		comics.getComicsStories('987');
		expect(comics.get).toHaveBeenCalledWith(
			'comics/987/stories',
			paramsComicsApi
		);
	});
});
