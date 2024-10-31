import DataSourcesCharactersAPI from '@/dataSources/characters';
import CharactersResolver from '.';
import ServerGetCharacters from '@/configs/test';
import QUERY_GET_CHARACTERS from '@query/characters/queryCharacters';
import MOCK_GET_CHARACTERS from '@mock/characters/mockCharacters';
import testRequestError from '@/utils/testRequestError';

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

		if (body.kind == 'single') {
			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.characters).toEqual(mockResponse);
		}
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
