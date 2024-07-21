const DataSourcesCharactersAPI = require('@/dataSources/characters');
const CharactersResolver = require('.');
const ServerGetCharacters = require('@/configs/test');
const QUERY_GET_CHARACTERS = require('@query/characters/queryCharacters');
const MOCK_GET_CHARACTERS = require('@mock/characters/mockCharacters');

describe('resolvers/charactersResolver/characters', () => {
	it('should return the characters entity data', async () => {
		const {server, mockResponse} = await ServerGetCharacters(
			DataSourcesCharactersAPI,
			CharactersResolver,
			MOCK_GET_CHARACTERS
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CHARACTERS,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({characters: mockResponse});
	});

	it('should return request error', async () => {
		const errorMessage = 'mockError: Failed to fetch characters';

		const error = async () =>
			await CharactersResolver.Query.characters(null, null, {
				dataSources: {
					characters: {
						getCharacters: () =>
							Promise.reject(new Error(errorMessage)),
					},
				},
			});

		await expect(error).rejects.toThrow(errorMessage);
	});
});
