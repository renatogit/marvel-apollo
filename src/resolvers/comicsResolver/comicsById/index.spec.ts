const DataSourcesComicsByIdAPI = require('@/dataSources/comics');
const ComicsByIdResolver = require('.');
const ServerGetComicsById = require('@/configs/test');
const QUERY_GET_COMICS_BY_ID = require('@query/comics/queryComicsById');
const MOCK_GET_COMICS_BY_ID = require('@mock/comics/mockComicsById');

describe('resolvers/comicsResolver/comicsById', () => {
	it('should return the comicsById entity data', async () => {
		const {server, mockResponse} = await ServerGetComicsById(
			DataSourcesComicsByIdAPI,
			ComicsByIdResolver,
			MOCK_GET_COMICS_BY_ID,
			{comicsId: 'fake-code'}
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_BY_ID,
			variables: {comicsId: 'fake-code'},
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({comicsById: mockResponse});
	});

	it('should return request error', async () => {
		const error = async () =>
			await ComicsByIdResolver.Query.comicsById(
				null,
				{comicsId: 'fake-code'},
				{
					dataSources: {
						comics: {
							getComicsById: () =>
								Promise.reject(
									new Error(
										'mockError: Failed to fetch comicsById'
									)
								),
						},
					},
				}
			);

		await expect(error).rejects.toThrow(
			'mockError: Failed to fetch comicsById'
		);
	});
});
