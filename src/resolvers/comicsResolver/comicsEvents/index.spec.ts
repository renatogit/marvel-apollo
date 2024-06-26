const DataSourcesComicsEventsAPI = require('@/dataSources/comics');
const ComicsEventsResolver = require('.');
const ServerGetComicsEvents = require('@/configs/test');
const QUERY_GET_COMICS_EVENTS = require('@query/comics/queryComicsEvents');
const MOCK_GET_COMICS_EVENTS = require('@mock/comics/mockComicsEvents');

describe('resolvers/comicsResolver/comicsEvents', () => {
	const comicsId = {comicsId: 'fake-code'};

	it('should return the comicsEvents entity data', async () => {
		const {server, mockResponse} = await ServerGetComicsEvents(
			DataSourcesComicsEventsAPI,
			ComicsEventsResolver,
			MOCK_GET_COMICS_EVENTS,
			comicsId
		);

		const {body} = await server.executeOperation({
			query: QUERY_GET_COMICS_EVENTS,
			variables: comicsId,
		});

		expect(body.singleResult.errors).toBeUndefined();
		expect(body.singleResult.data).toEqual({
			comicsEvents: mockResponse,
		});
	});

	it('should return request error', async () => {
		const errorMessage = 'mockError: Failed to fetch comicsEvents';

		const error = async () =>
			await ComicsEventsResolver.Query.comicsEvents(null, comicsId, {
				dataSources: {
					comics: {
						getComicsEvents: () =>
							Promise.reject(new Error(errorMessage)),
					},
				},
			});

		await expect(error).rejects.toThrow(errorMessage);
	});
});
