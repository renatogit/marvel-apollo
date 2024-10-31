import {
	ICharacters,
	IDataSources,
	IEntity,
	ICharactersDataSources,
	IResponse,
} from '@/types';

export default {
	Query: {
		async characters(
			_: ICharacters,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICharactersDataSources>>
		): Promise<IResponse<ICharacters>> {
			try {
				const data = await dataSources.characters.getCharacters();
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch characters: ${error.message}`
				);
			}
		},
	},
};
