const DataSourcesComicsByIdAPI = require('@/dataSources/comics');
const ComicsByIdResolver = require('.');
const ServerGetComicsById = require('@/configs/test');
const QUERY_GET_COMICS_BY_ID = require('@query/comics/queryComicsById');
const MOCK_GET_COMICS_BY_ID = require('@mock/comics/mockComicsById');

describe('resolvers/comicsByIdResolver/integration', () => {
	it('fetches comicsById and generate snapshots', async () => {
		const {server} = await ServerGetComicsById(
			DataSourcesComicsByIdAPI,
			ComicsByIdResolver,
			MOCK_GET_COMICS_BY_ID,
			{comicsId: 'fake-code'}
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_BY_ID,
			variables: {comicsId: 'fake-code'},
		});

		expect(body).toMatchSnapshot();
	});
});
