const DataSourcesComicsCharactersAPI = require('@/dataSources/comics');
const ComicsCharactersResolver = require('.');
const ServerGetComicsCharacters = require('@/configs/test');
const QUERY_GET_COMICS_CHARACTERS = require('@query/comics/queryComicsCharacters');
const MOCK_GET_COMICS_CHARACTERS = require('@mock/comics/mockComicsCharacters');

describe('resolvers/comicsCharactersResolver/integration', () => {
	const comicsId = {comicsId: 'fake-code'};

	it('fetches comicsCharacters and generate snapshots', async () => {
		const {server} = await ServerGetComicsCharacters(
			DataSourcesComicsCharactersAPI,
			ComicsCharactersResolver,
			MOCK_GET_COMICS_CHARACTERS,
			comicsId
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_CHARACTERS,
			variables: comicsId,
		});

		expect(body).toMatchSnapshot();
	});
});
