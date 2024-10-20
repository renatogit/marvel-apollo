const DataSourcesComicsAPI = require('@/dataSources/comics');
const ComicsResolver = require('.');
const ServerGetComics = require('@/configs/test');
const QUERY_GET_COMICS = require('@query/comics/queryComics');
const MOCK_GET_COMICS = require('@mock/comics/mockComics');
const testRequestError = require('@utils/testRequestError');

describe('resolvers/comicsResolver/comics', () => {
	it('should return the comics entity data', async () => {
		const args = {
			dataSources: DataSourcesComicsAPI,
			resolver: ComicsResolver.Query.comics,
			mock: MOCK_GET_COMICS,
			variables: null,
			entity: 'comics',
			typeQuery: 'comics',
		};

		const {server, mockResponse} = await ServerGetComics(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data.comics).toEqual(mockResponse);
	});

	it('should return a comics request catch error', async () => {
		testRequestError(ComicsResolver.Query.comics, {}, {
			entity: 'comics',
			method: 'getComics',
		});
	});
});
