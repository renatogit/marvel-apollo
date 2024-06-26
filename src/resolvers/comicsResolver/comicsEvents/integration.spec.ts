const DataSourcesComicsEventsAPI = require('@/dataSources/comics');
const ComicsEventsResolver = require('.');
const ServerGetComicsEvents = require('@/configs/test');
const QUERY_GET_COMICS_EVENTS = require('@query/comics/queryComicsEvents');
const MOCK_GET_COMICS_EVENTS = require('@mock/comics/mockComicsEvents');

describe('resolvers/comicsEventsResolver/integration', () => {
	const comicsId = {comicsId: 'fake-code'};

	it('fetches comicsEvents and generate snapshots', async () => {
		const {server} = await ServerGetComicsEvents(
			DataSourcesComicsEventsAPI,
			ComicsEventsResolver,
			MOCK_GET_COMICS_EVENTS,
			comicsId
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_EVENTS,
			variables: comicsId,
		});

		expect(body).toMatchSnapshot();
	});
});
