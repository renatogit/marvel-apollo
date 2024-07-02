const DataSourcesComicsStoriesAPI = require('@/dataSources/comics');
const ComicsStoriesResolver = require('.');
const ServerGetComicsStories = require('@/configs/test');
const QUERY_GET_COMICS_STORIES = require('@query/comics/queryComicsStories');
const MOCK_GET_COMICS_STORIES = require('@mock/comics/mockComicsStories');

describe('resolvers/comicsStoriesResolver/integration', () => {
	const comicsId = {comicsId: 'fake-code'};

	it('fetches comicsStories and generate snapshots', async () => {
		const {server} = await ServerGetComicsStories(
			DataSourcesComicsStoriesAPI,
			ComicsStoriesResolver,
			MOCK_GET_COMICS_STORIES,
			comicsId
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_STORIES,
			variables: comicsId,
		});

		expect(body).toMatchSnapshot();
	});
});
