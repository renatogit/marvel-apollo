import ComicsResolver from '.';
import DataSourcesComicsAPI from '@/dataSources/comics';
import TestServer from '@/configs/test';
import QUERY_GET_COMICS from '@query/comics/queryComics';
import MOCK_GET_COMICS from '@mock/comics/mockComics';

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
