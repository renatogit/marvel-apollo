const DataSourcesComicsByIdAPI = require('@/dataSources/comics');
const ComicsByIdResolver = require('.');
const ServerGetComicsById = require('@/configs/test');
const MOCK_GET_COMICS_BY_ID = require('@mock/comics/mockComicsById');
const QUERY_GET_COMICS_BY_ID = require('@query/comics/queryComicsById');
const QUERY_GET_COMICS_CHARACTERS = require('@query/comics/queryComicsCharacters');
const QUERY_GET_COMICS_CREATORS = require('@query/comics/queryComicsCreators');
const QUERY_GET_COMICS_EVENTS = require('@query/comics/queryComicsEvents');
const QUERY_GET_COMICS_STORIES = require('@query/comics/queryComicsStories');
const {testRequestError, testPromiseError} = require('@utils/test');

describe('resolvers/comicsResolver', () => {
	const comicsId = {comicsId: 'fake-code'};

	const mockDataSources = {
		comics: {
			getComicsCharacters: jest.fn(),
			getComicsCreators: jest.fn(),
			getComicsEvents: jest.fn(),
			getComicsStories: jest.fn(),
		},
	};

	describe('comicsById', () => {
		it('should return the comicsById entity data', async () => {
			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Query.comicsById,
				mock: MOCK_GET_COMICS_BY_ID,
				variables: {comicsId},
				entity: 'comics',
				typeQuery: 'comicsById',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_BY_ID,
				variables: comicsId,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.comicsById).toEqual(mockResponse);
		});

		it('should return a comicsById request catch error', () => {
			testRequestError(
				'mockError: Failed to fetch comicsById',
				ComicsByIdResolver.Query.comicsById,
				comicsId,
				'comics',
				'getComicsById'
			);
		});
	});

	describe('Comics.characters', () => {
		it('should return the characters of comicsById ', async () => {
			const COMICS_CHARACTERS = MOCK_GET_COMICS_BY_ID.data.results.map(
				({characters}: any) => ({
					data: {results: characters},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.characters,
				mock: COMICS_CHARACTERS[0],
				variables: {comicsId},
				entity: 'comics',
				typeQuery: 'comicsCharacters',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_CHARACTERS,
				variables: comicsId,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.comicsCharacters).toEqual(
				mockResponse
			);
		});

		it('should return a ComicsCharacters request catch error ', () => {
			testPromiseError(
				mockDataSources,
				'comics',
				'getComicsCharacters',
				comicsId,
				ComicsByIdResolver.Comic.characters
			);
		});
	});

	describe('Comics.creators', () => {
		it('should return the creators of comicsById ', async () => {
			const COMICS_CREATORS = MOCK_GET_COMICS_BY_ID.data.results.map(
				({creators}: any) => ({
					data: {results: creators},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.creators,
				mock: COMICS_CREATORS[0],
				variables: {comicsId},
				entity: 'comics',
				typeQuery: 'comicsCreators',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_CREATORS,
				variables: comicsId,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.comicsCreators).toEqual(mockResponse);
		});

		it('should return a ComicsCreators request catch error', () => {
			testPromiseError(
				mockDataSources,
				'comics',
				'getComicsCreators',
				comicsId,
				ComicsByIdResolver.Comic.creators
			);
		});
	});

	describe('Comics.events', () => {
		it('should return the events of comicsById ', async () => {
			const COMICS_EVENTS = MOCK_GET_COMICS_BY_ID.data.results.map(
				({events}: any) => ({
					data: {results: events},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.events,
				mock: COMICS_EVENTS[0],
				variables: {comicsId},
				entity: 'comics',
				typeQuery: 'comicsEvents',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_EVENTS,
				variables: comicsId,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.comicsEvents).toEqual(mockResponse);
		});

		it('should return a ComicsEvents request catch error', () => {
			testPromiseError(
				mockDataSources,
				'comics',
				'getComicsEvents',
				comicsId,
				ComicsByIdResolver.Comic.events
			);
		});
	});

	describe('Comics.stories', () => {
		it('should return the stories of comicsById ', async () => {
			const COMICS_STORIES = MOCK_GET_COMICS_BY_ID.data.results.map(
				({stories}: any) => ({
					data: {results: stories},
				})
			);

			const args = {
				dataSources: DataSourcesComicsByIdAPI,
				resolver: ComicsByIdResolver.Comic.stories,
				mock: COMICS_STORIES[0],
				variables: {comicsId},
				entity: 'comics',
				typeQuery: 'comicsStories',
			};

			const {server, mockResponse} = await ServerGetComicsById(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_COMICS_STORIES,
				variables: comicsId,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.comicsStories).toEqual(mockResponse);
		});

		it('should return a ComicsEvents request catch error', () => {
			testPromiseError(
				mockDataSources,
				'comics',
				'getComicsStories',
				comicsId,
				ComicsByIdResolver.Comic.stories
			);
		});
	});
});
