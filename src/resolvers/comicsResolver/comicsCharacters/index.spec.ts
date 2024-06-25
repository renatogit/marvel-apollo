const DataSourcesComicsCharactersAPI = require('@/dataSources/comics');
const ComicsCharactersResolver = require('.');
const ServerGetComicsCharacters = require('@/configs/test');
const QUERY_GET_COMICS_CHARACTERS = require('@query/comics/queryComicsCharacters');
const MOCK_GET_COMICS_CHARACTERS = require('@mock/comics/mockComicsCharacters');

describe('resolvers/comicsResolver/comicsCharacters', () => {
	const errorMessage = 'mockError: Failed to fetch comicsCharacters';
	const comicsId = {comicsId: 'fake-code'};

	it('should return the comicsCharacters entity data', async () => {
		const {server, mockResponse} = await ServerGetComicsCharacters(
			DataSourcesComicsCharactersAPI,
			ComicsCharactersResolver,
			MOCK_GET_COMICS_CHARACTERS,
			comicsId
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_CHARACTERS,
			variables: comicsId,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({
			comicsCharacters: mockResponse,
		});
	});

	it('should return request error', async () => {
		const error = async () =>
			await ComicsCharactersResolver.Query.comicsCharacters(
				null,
				{comicsId: 'fake-code'},
				{
					dataSources: {
						comics: {
							getComicsCharacters: () =>
								Promise.reject(new Error(errorMessage)),
						},
					},
				}
			);

		await expect(error).rejects.toThrow(errorMessage);
	});
});
