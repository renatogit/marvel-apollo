const DataSourcesCharactersAPI = require('@/dataSources/characters');
const CharactersResolver = require('.');
const ServerGetCharacters = require('@/configs/test');
const QUERY_GET_CHARACTERS = require('@query/characters/queryCharacters');
const MOCK_GET_CHARACTERS = require('@mock/characters/mockCharacters');
const testRequestError = require('@utils/testRequestError');

describe('resolvers/charactersResolver/characters', () => {
	it('should return the characters entity data', async () => {
		const args = {
			dataSources: DataSourcesCharactersAPI,
			resolver: CharactersResolver.Query.characters,
			mock: MOCK_GET_CHARACTERS,
			variables: null,
			entity: 'characters',
			typeQuery: 'characters',
		};

		const {server, mockResponse} = await ServerGetCharacters(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CHARACTERS,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data.characters).toEqual(mockResponse);
	});

	it('should return request error', async () => {
		testRequestError(
			CharactersResolver.Query.characters,
			{},
			{
				entity: 'characters',
				method: 'getCharacters',
			}
		);
	});
});
