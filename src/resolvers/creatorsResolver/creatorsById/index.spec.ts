import DataSourcesCreatorsByIdAPI from '@/dataSources/creators';
import CreatorResolver from '.';
import ServerGetCreatorById from '@/configs/test';
import MOCK_GET_CREATOR_BY_ID from '@mock/creators/mockCreatorById';
import testRequestError from '@/utils/testRequestError';

import {
	QUERY_GET_CREATOR_BY_ID,
	QUERY_GET_CREATOR_SERIES,
	QUERY_GET_CREATOR_COMICS,
	QUERY_GET_CREATOR_EVENTS,
	QUERY_GET_CREATOR_STORIES,
} from '@query/creators';

describe('resolvers/creatorsResolver', () => {
	const variables = {creatorsId: 'fake-code'};

	describe('creatorById', () => {
		it('should return the creatorsById entity data', async () => {
			const args = {
				dataSources: DataSourcesCreatorsByIdAPI,
				resolver: CreatorResolver.Query.creatorById,
				mock: MOCK_GET_CREATOR_BY_ID,
				variables,
				entity: 'creators',
				typeQuery: 'creatorById',
			};

			const {server, mockResponse} = await ServerGetCreatorById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CREATOR_BY_ID,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.creatorById).toEqual(
					mockResponse
				);
			}
		});

		it('should return a creatorById request error', () => {
			testRequestError(CreatorResolver.Query.creatorById, variables, {
				entity: 'creators',
				method: 'getCreatorById',
			});
		});
	});

	describe('Creator.comics', () => {
		it('should return the comics of creatorById ', async () => {
			const CREATOR_COMICS = MOCK_GET_CREATOR_BY_ID.data.results.map(
				({comics}) => ({
					data: {results: comics},
				})
			);

			const args = {
				dataSources: DataSourcesCreatorsByIdAPI,
				resolver: CreatorResolver.Creator.comics,
				mock: CREATOR_COMICS[0],
				variables,
				entity: 'creators',
				typeQuery: 'creatorComics',
			};

			const {server, mockResponse} = await ServerGetCreatorById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CREATOR_COMICS,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.creatorComics).toEqual(
					mockResponse
				);
			}
		});

		it('should return a CreatorComics request error ', () => {
			testRequestError(CreatorResolver.Creator.comics, variables, {
				entity: 'creators',
				method: 'getCreatorComics',
			});
		});
	});

	describe('Creator.events', () => {
		it('should return the events of creatorById ', async () => {
			const CREATOR_EVENTS = MOCK_GET_CREATOR_BY_ID.data.results.map(
				({events}) => ({
					data: {results: events},
				})
			);

			const args = {
				dataSources: DataSourcesCreatorsByIdAPI,
				resolver: CreatorResolver.Creator.events,
				mock: CREATOR_EVENTS[0],
				variables,
				entity: 'creators',
				typeQuery: 'creatorEvents',
			};

			const {server, mockResponse} = await ServerGetCreatorById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CREATOR_EVENTS,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.creatorEvents).toEqual(
					mockResponse
				);
			}
		});

		it('should return a CreatorEvents request error', () => {
			testRequestError(CreatorResolver.Creator.events, variables, {
				entity: 'creators',
				method: 'getCreatorEvents',
			});
		});
	});

	describe('Creator.series', () => {
		it('should return the series of creatorById ', async () => {
			const CREATOR_SERIES = MOCK_GET_CREATOR_BY_ID.data.results.map(
				({series}) => ({
					data: {results: series},
				})
			);

			const args = {
				dataSources: DataSourcesCreatorsByIdAPI,
				resolver: CreatorResolver.Creator.series,
				mock: CREATOR_SERIES[0],
				variables,
				entity: 'creators',
				typeQuery: 'creatorSeries',
			};

			const {server, mockResponse} = await ServerGetCreatorById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CREATOR_SERIES,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.creatorSeries).toEqual(
					mockResponse
				);
			}
		});

		it('should return a CreatorSeries request error', () => {
			testRequestError(CreatorResolver.Creator.series, variables, {
				entity: 'creators',
				method: 'getCreatorSeries',
			});
		});
	});

	describe('Creator.stories', () => {
		it('should return the stories of creatorById ', async () => {
			const CREATOR_STORIES = MOCK_GET_CREATOR_BY_ID.data.results.map(
				({stories}) => ({
					data: {results: stories},
				})
			);

			const args = {
				dataSources: DataSourcesCreatorsByIdAPI,
				resolver: CreatorResolver.Creator.stories,
				mock: CREATOR_STORIES[0],
				variables,
				entity: 'creators',
				typeQuery: 'creatorStories',
			};

			const {server, mockResponse} = await ServerGetCreatorById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CREATOR_STORIES,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.creatorStories).toEqual(
					mockResponse
				);
			}
		});

		it('should return a CreatorStories request error', () => {
			testRequestError(CreatorResolver.Creator.stories, variables, {
				entity: 'creators',
				method: 'getCreatorStories',
			});
		});
	});
});
