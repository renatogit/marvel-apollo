import CharactersResolver from '.';
import DataSourcesCharactersAPI from '@/dataSources/characters';
import ConfigServer from '@/configs/test';
import QUERY_GET_CHARACTERS from '@query/characters/queryCharacters';
import MOCK_GET_CHARACTERS from '@mock/characters/mockCharacters';

describe('resolvers/charactersResolver/integration', () => {
	it('fetches characters and generate snapshots', async () => {
		const args = {
			dataSources: DataSourcesCharactersAPI,
			resolver: CharactersResolver.Query.characters,
			mock: MOCK_GET_CHARACTERS,
			variables: null,
			entity: 'characters',
			typeQuery: 'characters',
		};

		const {server} = await ConfigServer(args);

		const {body} = await server.executeOperation({
			query: QUERY_GET_CHARACTERS,
		});

		expect(body).toMatchSnapshot();
	});
});
