const ComicsResolver = require('.');
const DataSourcesComicsAPI = require('@/dataSources/comics');
const TestServer = require('@/configs/test');
const QUERY_GET_COMICS = require('@query/comics/queryComics');
const MOCK_GET_COMICS = require('@mock/comics/mockComics');

describe('resolvers/comicsResolver/integration', () => {
	it('fetches comics and generate snapshots', async () => {
		const args = {
			dataSources: DataSourcesComicsAPI,
			resolver: ComicsResolver.Query.comics,
			mock: MOCK_GET_COMICS,
			variables: null,
			entity: 'comics',
			typeQuery: 'comics',
		};

		const {server} = await TestServer(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS,
		});

		expect(body).toMatchSnapshot();
	});
});
