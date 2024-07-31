const DataSourcesCharactersAPI = require('@/dataSources/characters');
const CharactersResolver = require('.');
const ServerGetCharacters = require('@/configs/test');
const QUERY_GET_CHARACTERS_BY_ID = require('@query/characters/queryCharactersById');
const MOCK_GET_CHARACTERS_BY_ID = require('@mock/characters/mockCharactersById');

describe('resolvers/charactersResolver/charactersById', () => {
	const charactersId = {charactersId: 'fake-code'};

	it('should return the charactersById entity data', async () => {
		const {server, mockResponse} = await ServerGetCharacters(
			DataSourcesCharactersAPI,
			CharactersResolver,
			MOCK_GET_CHARACTERS_BY_ID,
			charactersId
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CHARACTERS_BY_ID,
			variables: charactersId
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({charactersById: mockResponse});
	});

	it('should return request error', async () => {
		const errorMessage = 'mockError: Failed to fetch charactersById';

		const error = async () =>
			await CharactersResolver.Query.charactersById(null, charactersId, {
				dataSources: {
					characters: {
						getCharactersById: () =>
							Promise.reject(new Error(errorMessage)),
					},
				},
			});
		await expect(error).rejects.toThrow(errorMessage);
	});
});
