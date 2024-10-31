import DataSourcesComicsByIdAPI from '@/dataSources/comics';
import ComicsByIdResolver from '.';
import ServerGetComicsById from '@/configs/test';
import MOCK_GET_COMICS_BY_ID from '@mock/comics/mockComicsById';
import testRequestError from '@/utils/testRequestError';

import {
	QUERY_GET_COMICS_BY_ID,
	QUERY_GET_COMICS_CHARACTERS,
	QUERY_GET_COMICS_CREATORS,
	QUERY_GET_COMICS_EVENTS,
	QUERY_GET_COMICS_STORIES,
} from '@query/comics';

describe('resolvers/comicsResolver', () => {
	const variables = {comicsId: 'fake-code'};

	describe('comicsById', () => {
		it('should return the comicsById entity data', async () => {
			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Query.comicsById,
				mock: MOCK_GET_COMICS_BY_ID,
				variables,
				entity: 'comics',
				typeQuery: 'comicsById',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_BY_ID,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.comicsById).toEqual(mockResponse);
			}
		});

		it('should return a comicsById request error', () => {
			testRequestError(ComicsByIdResolver.Query.comicsById, variables, {
				entity: 'comics',
				method: 'getComicsById',
			});
		});
	});

	describe('Comics.characters', () => {
		it('should return the characters of comicsById ', async () => {
			const COMICS_CHARACTERS = MOCK_GET_COMICS_BY_ID.data.results.map(
				({characters}) => ({
					data: {results: characters},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.characters,
				mock: COMICS_CHARACTERS[0],
				variables,
				entity: 'comics',
				typeQuery: 'comicsCharacters',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_CHARACTERS,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.comicsCharacters).toEqual(
					mockResponse
				);
			}
		});

		it('should return a ComicsCharacters request error ', () => {
			testRequestError(ComicsByIdResolver.Comic.characters, variables, {
				entity: 'comics',
				method: 'getComicsCharacters',
			});
		});
	});

	describe('Comics.creators', () => {
		it('should return the creators of comicsById ', async () => {
			const COMICS_CREATORS = MOCK_GET_COMICS_BY_ID.data.results.map(
				({creators}) => ({
					data: {results: creators},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.creators,
				mock: COMICS_CREATORS[0],
				variables,
				entity: 'comics',
				typeQuery: 'comicsCreators',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_CREATORS,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.comicsCreators).toEqual(
					mockResponse
				);
			}
		});

		it('should return a ComicsCreators request error', () => {
			testRequestError(ComicsByIdResolver.Comic.creators, variables, {
				entity: 'comics',
				method: 'getComicsCreators',
			});
		});
	});

	describe('Comics.events', () => {
		it('should return the events of comicsById ', async () => {
			const COMICS_EVENTS = MOCK_GET_COMICS_BY_ID.data.results.map(
				({events}) => ({
					data: {results: events},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.events,
				mock: COMICS_EVENTS[0],
				variables,
				entity: 'comics',
				typeQuery: 'comicsEvents',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_EVENTS,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.comicsEvents).toEqual(
					mockResponse
				);
			}
		});

		it('should return a ComicsEvents request error', () => {
			testRequestError(ComicsByIdResolver.Comic.events, variables, {
				entity: 'comics',
				method: 'getComicsEvents',
			});
		});
	});

	describe('Comics.stories', () => {
		it('should return the stories of comicsById ', async () => {
			const COMICS_STORIES = MOCK_GET_COMICS_BY_ID.data.results.map(
				({stories}) => ({
					data: {results: stories},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.stories,
				mock: COMICS_STORIES[0],
				variables,
				entity: 'comics',
				typeQuery: 'comicsStories',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_STORIES,
				variables,
			});

			if (body.kind === 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.comicsStories).toEqual(
					mockResponse
				);
			}
		});

		it('should return a ComicsEvents request error', () => {
			testRequestError(ComicsByIdResolver.Comic.stories, variables, {
				entity: 'comics',
				method: 'getComicsStories',
			});
		});
	});
});
