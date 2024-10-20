const CharactersResolver = require('.');
const DataSourcesCharactersAPI = require('@/dataSources/characters');
const ConfigServer = require('@/configs/test');
const QUERY_GET_CHARACTERS = require('@query/characters/queryCharacters');
const MOCK_GET_CHARACTERS = require('@mock/characters/mockCharacters');

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
