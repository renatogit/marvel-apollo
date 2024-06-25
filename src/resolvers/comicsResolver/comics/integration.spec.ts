const ComicsResolver = require('.');
const DataSourcesComicsAPI = require('@/dataSources/comics');
const ConfigServer = require('@/configs/test');
const QUERY_GET_COMICS = require('@query/comics/queryComics');
const MOCK_GET_COMICS = require('@mock/comics/mockComics');

describe('resolvers/comicsResolver/integration', () => {
	it('fetches comics and generate snapshots', async () => {
		const {server} = await ConfigServer(
			DataSourcesComicsAPI,
			ComicsResolver,
			MOCK_GET_COMICS
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS,
		});

		expect(body).toMatchSnapshot();
	});
});
