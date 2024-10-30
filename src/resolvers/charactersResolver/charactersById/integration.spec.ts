import CharactersResolver from '.';
import DataSourcesCharactersAPI from '@/dataSources/characters';
import ConfigServer from '@/configs/test';
import QUERY_GET_CHARACTERS_BY_ID from '@query/characters/queryCharactersById';
import MOCK_GET_CHARACTERS_BY_ID from '@mock/characters/mockCharacters';

describe('resolvers/charactersResolver/integration', () => {
	it('fetches characters and generate snapshots', async () => {
		const charactersId = {charactersId: 'fake-code'};

		const args = {
			dataSources: DataSourcesCharactersAPI,
			resolver: CharactersResolver.Query.charactersById,
			mock: MOCK_GET_CHARACTERS_BY_ID,
			variables: {charactersId},
			entity: 'characters',
			typeQuery: 'charactersById',
		};

		const {server} = await ConfigServer(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CHARACTERS_BY_ID,
			variables: charactersId,
		});

		expect(body).toMatchSnapshot();
	});
});
