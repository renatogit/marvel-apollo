const DataSourcesComicsAPI = require('@/dataSources/comics');
const ComicsResolver = require('.');
const ServerGetComics = require('@/configs/test');
const QUERY_GET_COMICS = require('@query/comics/queryComics');
const MOCK_GET_COMICS = require('@mock/comics/mockComics');

describe('resolvers/comicsResolver/comics', () => {
	const errorMessage = 'mockError: Failed to fetch comics';
	it('should return the comics entity data', async () => {
		const {server, mockResponse} = await ServerGetComics(
			DataSourcesComicsAPI,
			ComicsResolver,
			MOCK_GET_COMICS
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({comics: mockResponse});
	});

	it('should return request error', async () => {
		const error = async () =>
			await ComicsResolver.Query.comics(null, null, {
				dataSources: {
					comics: {
						getComics: () =>
							Promise.reject(new Error(errorMessage)),
					},
				},
			});

		await expect(error).rejects.toThrow(errorMessage);
	});
});
