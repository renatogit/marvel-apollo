import DataSourcesComicsAPI from '@/dataSources/comics';
import ComicsResolver from '.';
import ServerGetComics from '@/configs/test';
import QUERY_GET_COMICS from '@query/comics/queryComics';
import MOCK_GET_COMICS from '@mock/comics/mockComics';
import testRequestError from '@/utils/testRequestError';

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

		if (body.kind === 'single') {
			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.comics).toEqual(mockResponse);
		}
	});

	it('should return a comics request catch error', async () => {
		testRequestError(
			ComicsResolver.Query.comics,
			{},
			{
				entity: 'comics',
				method: 'getComics',
			}
		);
	});
});
