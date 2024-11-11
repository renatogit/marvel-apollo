/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	IComics,
	IID,
	IDataSources,
	IEntity,
	IComicsDataSources,
	IResponse,
	ICharacters,
	ICreators,
	IEvents,
	IStories,
} from '@/types';

export default {
	Query: {
		async comicsById(
			_: IComics,
			{comicsId}: IID,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<IResponse<IComics>> {
			try {
				const data = await dataSources.comics.getComicsById(comicsId);

				return data;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
	},
	Comic: {
		characters: async (
			res: ICharacters,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<ICharacters[]> => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsCharacters(comicsId);
				return data.results.map(
					({
						comics,
						series,
						stories,
						events,
						...rest
					}: ICharacters) => ({
						...rest,
					})
				);
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		creators: async (
			res: ICreators,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<ICreators[]> => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsCreators(comicsId);
				return data.results.map(
					({
						series,
						stories,
						comics,
						events,
						...rest
					}: ICreators) => ({
						...rest,
					})
				);
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		events: async (
			res: IEvents,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<IEvents[]> => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsEvents(comicsId);
				return data.results.map(
					({
						comics,
						stories,
						series,
						characters,
						creators,
						...rest
					}: IEvents) => ({
						...rest,
					})
				);
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		stories: async (
			res: IStories,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<IStories[]> => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsStories(comicsId);
				return data.results.map(
					({
						comics,
						series,
						events,
						characters,
						creators,
						...rest
					}: IStories) => ({
						...rest,
					})
				);
			} catch (error) {
				throw new Error(`ERROR:  ${error.message}`);
			}
		},
	},
};
