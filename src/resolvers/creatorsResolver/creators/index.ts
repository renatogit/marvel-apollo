import {
	ICreators,
	IDataSources,
	IEntity,
	ICreatorsDataSources,
	IResponse,
} from '@/types';

export default {
	Query: {
		async creators(
			_: ICreators,
			__: Record<string, unknown>,
			{dataSources}: IDataSources<IEntity<ICreatorsDataSources>>
		): Promise<IResponse<ICreators[]>> {
			try {
				const data = await dataSources.creators.getCreators();
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch creators: ${error.message}`
				);
			}
		},
	},
};
