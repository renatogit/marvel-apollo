const CharactersResolver = require('.');
const DataSourcesCharactersAPI = require('@/dataSources/characters');
const ConfigServer = require('@/configs/test');
const QUERY_GET_CHARACTERS_BY_ID = require('@query/characters/queryCharactersById');
const MOCK_GET_CHARACTERS_BY_ID = require('@mock/characters/mockCharacters');

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
