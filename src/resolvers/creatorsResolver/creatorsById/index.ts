/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	IComics,
	IID,
	IDataSources,
	IEntity,
	ICreatorsDataSources,
	IResponse,
	ISeries,
	ICreators,
	IEvents,
	IStories,
} from '@/types';

export default {
	Query: {
		async creatorsById(
			_: ICreators,
			{creatorsId}: IID,
			{dataSources}: IDataSources<IEntity<ICreatorsDataSources>>
		): Promise<IResponse<ICreators>> {
			try {
				const data =
					await dataSources.creators.getCreatorsById(creatorsId);
				return data;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
	},
	Creator: {
		comics: async (
			res: IComics,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICreatorsDataSources>>
		): Promise<IComics[]> => {
			const creatorsId = res.id;
			try {
				const {data} =
					await dataSources.creators.getCreatorsComics(creatorsId);
				return data.results.map(
					({
						creators,
						characters,
						stories,
						events,
						...rest
					}: IComics) => ({
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
			{dataSources}: IDataSources<IEntity<ICreatorsDataSources>>
		): Promise<IEvents[]> => {
			const creatorsId = res.id;

			try {
				const {data} =
					await dataSources.creators.getCreatorsEvents(creatorsId);
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
		series: async (
			res: ISeries,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICreatorsDataSources>>
		): Promise<ISeries[]> => {
			const creatorsId = res.id;

			try {
				const {data} =
					await dataSources.creators.getCreatorsSeries(creatorsId);
				return data.results.map(
					({
						comics,
						stories,
						events,
						characters,
						creators,
						...rest
					}: ISeries) => ({
						...rest,
					})
				);
			} catch (error) {
				throw new Error(`ERROR:  ${error.message}`);
			}
		},
		stories: async (
			res: IStories,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICreatorsDataSources>>
		): Promise<IStories[]> => {
			const creatorsId = res.id;

			try {
				const {data} =
					await dataSources.creators.getCreatorsStories(creatorsId);
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
