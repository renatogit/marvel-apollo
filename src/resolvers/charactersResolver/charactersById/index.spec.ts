import DataSourcesCharactersAPI from '@/dataSources/characters';
import CharactersResolver from '.';
import ServerGetCharacters from '@/configs/test';
import testRequestError from '@/utils/testRequestError';
import MOCK_GET_CHARACTERS_BY_ID from '@mock/characters/mockCharactersById';
import {
	QUERY_GET_CHARACTERS_BY_ID,
	QUERY_GET_CHARACTERS_COMICS,
	QUERY_GET_CHARACTERS_EVENTS,
	QUERY_GET_CHARACTERS_SERIES,
	QUERY_GET_CHARACTERS_STORIES,
} from '@query/characters';

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
			if (body.kind == 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.charactersById).toEqual(
					mockResponse
				);
			}
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
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(({comics}) => ({
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

			if (body.kind == 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.charactersComics).toEqual(
					mockResponse
				);
			}
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
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(({events}) => ({
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

			if (body.kind == 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.charactersEvents).toEqual(
					mockResponse
				);
			}
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
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(({series}) => ({
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

			if (body.kind == 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.charactersSeries).toEqual(
					mockResponse
				);
			}
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
				MOCK_GET_CHARACTERS_BY_ID.data.results.map(({stories}) => ({
					data: {results: stories},
				}));

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

			if (body.kind == 'single') {
				expect(body.singleResult.errors).toBeUndefined();
				expect(body.singleResult.data.charactersStories).toEqual(
					mockResponse
				);
			}
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
