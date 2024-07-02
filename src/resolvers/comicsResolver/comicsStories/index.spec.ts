const DataSourcesComicsStoriesAPI = require('@/dataSources/comics');
const ComicsStoriesResolver = require('.');
const ServerGetComicsStories = require('@/configs/test');
const QUERY_GET_COMICS_STORIES = require('@query/comics/queryComicsStories');
const MOCK_GET_COMICS_STORIES = require('@mock/comics/mockComicsStories');

describe('resolvers/comicsResolver/comicsStories', () => {
	const comicsId = { comicsId: 'fake-code' };

	it('should return the comicsStories entity data', async () => {
		const { server, mockResponse } = await ServerGetComicsStories(
			DataSourcesComicsStoriesAPI,
			ComicsStoriesResolver,
			MOCK_GET_COMICS_STORIES,
			comicsId
		);

		const { body } = await server.executeOperation({
			query: QUERY_GET_COMICS_STORIES,
			variables: comicsId,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({
			comicsStories: mockResponse,
		});
	});

	it('should return request error', async () => {
		const errorMessage = 'mockError: Failed to fetch comicsStories';

		const error = async () =>
			await ComicsStoriesResolver.Query.comicsStories(null, comicsId, {
				dataSources: {
					comics: {
						getComicsStories: () =>
							Promise.reject(new Error(errorMessage)),
					},
				},
			});

		await expect(error).rejects.toThrow(errorMessage);
	});
});
