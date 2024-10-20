const DataSourcesCharactersAPI = require('@/dataSources/characters');
const CharactersResolver = require('.');
const ServerGetCharacters = require('@/configs/test');
const QUERY_GET_CHARACTERS_BY_ID = require('@query/characters/queryCharactersById');
const QUERY_GET_CHARACTERS_COMICS = require('@query/characters/queryCharactersComics');
const QUERY_GET_CHARACTERS_EVENTS = require('@query/characters/queryCharactersEvents');
const QUERY_GET_CHARACTERS_SERIES = require('@query/characters/queryCharactersSeries');
const QUERY_GET_CHARACTERS_STORIES = require('@query/characters/queryCharactersStories');
const MOCK_GET_CHARACTERS_BY_ID = require('@mock/characters/mockCharactersById');
const testRequestError = require('@utils/testRequestError');

describe('resolvers/charactersResolver/charactersById', () => {
	const variables = {charactersId: 'fake-code'};

	describe('charactersById', () => {
		it('should return the charactersById entity data', async () => {
			const args = {
				dataSources: DataSourcesCharactersAPI,
				resolver: CharactersResolver.Query.charactersById,
				mock: MOCK_GET_CHARACTERS_BY_ID,
				variables,
				entity: 'characters',
				typeQuery: 'charactersById',
			};

			const {server, mockResponse} = await ServerGetCharacters(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CHARACTERS_BY_ID,
				variables,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.charactersById).toEqual(mockResponse);
		});

		it('should return the charactersById request error', async () => {
			testRequestError(
				CharactersResolver.Query.charactersById,
				{},
				{
					entity: 'characters',
					method: 'getCharactersById',
				}
			);
		});
	});

	describe('Characters.comics', () => {
		it('should return the comics of charactersById ', async () => {
			const CHARACTERS_COMICS =
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(({comics}: any) => ({
					data: {results: comics},
				}));

			const args = {
				dataSources: DataSourcesCharactersAPI,
				resolver: CharactersResolver.Character.comics,
				mock: CHARACTERS_COMICS[0],
				variables,
				entity: 'characters',
				typeQuery: 'charactersComics',
			};

			const {server, mockResponse} = await ServerGetCharacters(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CHARACTERS_COMICS,
				variables,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.charactersComics).toEqual(
				mockResponse
			);
		});

		it('should return a CharactersComics request error ', () => {
			testRequestError(
				CharactersResolver.Character.comics,
				{},
				{
					entity: 'characters',
					method: 'getCharactersComics',
				}
			);
		});
	});

	describe('Characters.events', () => {
		it('should return the events of charactersById ', async () => {
			const CHARACTERS_EVENTS =
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(({events}: any) => ({
					data: {results: events},
				}));

			const args = {
				dataSources: DataSourcesCharactersAPI,
				resolver: CharactersResolver.Character.events,
				mock: CHARACTERS_EVENTS[0],
				variables,
				entity: 'characters',
				typeQuery: 'charactersEvents',
			};

			const {server, mockResponse} = await ServerGetCharacters(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CHARACTERS_EVENTS,
				variables,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.charactersEvents).toEqual(
				mockResponse
			);
		});

		it('should return a CharactersEvents request error ', () => {
			testRequestError(
				CharactersResolver.Character.events,
				{},
				{
					entity: 'characters',
					method: 'getCharactersEvents',
				}
			);
		});
	});

	describe('Characters.series', () => {
		it('should return the series of charactersById ', async () => {
			const CHARACTERS_SERIES =
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(({series}: any) => ({
					data: {results: series},
				}));

			const args = {
				dataSources: DataSourcesCharactersAPI,
				resolver: CharactersResolver.Character.series,
				mock: CHARACTERS_SERIES[0],
				variables,
				entity: 'characters',
				typeQuery: 'charactersSeries',
			};

			const {server, mockResponse} = await ServerGetCharacters(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CHARACTERS_SERIES,
				variables,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.charactersSeries).toEqual(
				mockResponse
			);
		});

		it('should return a CharactersSeries request error ', () => {
			testRequestError(
				CharactersResolver.Character.series,
				{},
				{
					entity: 'characters',
					method: 'getCharactersSeries',
				}
			);
		});
	});

	describe('Characters.stories', () => {
		it('should return the stories of charactersById ', async () => {
			const CHARACTERS_STORIES =
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(
					({stories}: any) => ({
						data: {results: stories},
					})
				);

			const args = {
				dataSources: DataSourcesCharactersAPI,
				resolver: CharactersResolver.Character.stories,
				mock: CHARACTERS_STORIES[0],
				variables,
				entity: 'characters',
				typeQuery: 'charactersStories',
			};

			const {server, mockResponse} = await ServerGetCharacters(args);

			const {body} = await server.executeOperation({
				query: QUERY_GET_CHARACTERS_STORIES,
				variables,
			});

			expect(body.singleResult.errors).toBeUndefined();
			expect(body.singleResult.data.charactersStories).toEqual(
				mockResponse
			);
		});

		it('should return a CharactersStories request error ', () => {
			testRequestError(
				CharactersResolver.Character.stories,
				{},
				{
					entity: 'characters',
					method: 'getCharactersStories',
				}
			);
		});
	});
});
