import {
	ICharacters,
	IID,
	IDataSources,
	IEntity,
	ICharactersDataSources,
} from '@/types';

export default {
	Query: {
		charactersById: async (
			_: ICharacters,
			{charactersId}: IID,
			{dataSources}: IDataSources<IEntity<ICharactersDataSources>>
		) => {
			try {
				const data =
					await dataSources.characters.getCharactersById(
						charactersId
					);
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch characters: ${error.message}`
				);
			}
		},
	},
	Character: {
		comics: async (
			res: ICharacters,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICharactersDataSources>>
		) => {
			const charactersId = res.id;

			try {
				const {data} =
					await dataSources.characters.getCharactersComics(
						charactersId
					);
				return data.results;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		stories: async (
			res: ICharacters,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICharactersDataSources>>
		) => {
			const charactersId = res.id;

			try {
				const {data} =
					await dataSources.characters.getCharactersStories(
						charactersId
					);
				return data.results;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		events: async (
			res: ICharacters,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICharactersDataSources>>
		) => {
			const charactersId = res.id;

			try {
				const {data} =
					await dataSources.characters.getCharactersEvents(
						charactersId
					);
				return data.results;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		series: async (
			res: ICharacters,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICharactersDataSources>>
		) => {
			const charactersId = res.id;

			try {
				const {data} =
					await dataSources.characters.getCharactersSeries(
						charactersId
					);
				return data.results;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
	},
};
