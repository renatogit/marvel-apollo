const DataSourcesComicsCreatorsAPI = require('@/dataSources/comics');
const ComicsCreatorsResolver = require('.');
const ServerGetComicsCreators = require('@/configs/test');
const QUERY_GET_COMICS_CREATORS = require('@query/comics/queryComicsCreators');
const MOCK_GET_COMICS_CREATORS = require('@mock/comics/mockComicsCreators');

describe('resolvers/comicsResolver/comicsCreators', () => {
	const errorMessage = 'mockError: Failed to fetch comicsCreators';
	const comicsId = {comicsId: 'fake-code'};

	it('should return the comicsCreators entity data', async () => {
		const {server, mockResponse} = await ServerGetComicsCreators(
			DataSourcesComicsCreatorsAPI,
			ComicsCreatorsResolver,
			MOCK_GET_COMICS_CREATORS,
			comicsId
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_CREATORS,
			variables: comicsId,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({
			comicsCreators: mockResponse,
		});
	});

	it('should return request error', async () => {
		const error = async () =>
			await ComicsCreatorsResolver.Query.comicsCreators(
				null,
				{comicsId: 'fake-code'},
				{
					dataSources: {
						comics: {
							getComicsCreators: () =>
								Promise.reject(new Error(errorMessage)),
						},
					},
				}
			);

		await expect(error).rejects.toThrow(errorMessage);
	});
});
