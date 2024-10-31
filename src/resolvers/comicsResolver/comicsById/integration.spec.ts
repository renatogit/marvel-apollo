import DataSourcesComicsByIdAPI from '@/dataSources/comics';
import ComicsByIdResolver from '.';
import ServerGetComicsById from '@/configs/test';
import QUERY_GET_COMICS_BY_ID from '@query/comics/queryComicsById';
import MOCK_GET_COMICS_BY_ID from '@mock/comics/mockComicsById';

describe('resolvers/comicsByIdResolver/integration', () => {
	const variables = {comicsId: 'fake-code'};

	it('fetches comicsById and generate snapshots', async () => {
		const args = {
			dataSources: DataSourcesComicsByIdAPI,
			resolver: ComicsByIdResolver.Query.comicsById,
			mock: MOCK_GET_COMICS_BY_ID,
			variables,
			entity: 'comics',
			typeQuery: 'comicsById',
		};

		const {server} = await ServerGetComicsById(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_BY_ID,
			variables,
		});

		expect(body).toMatchSnapshot();
	});
});
