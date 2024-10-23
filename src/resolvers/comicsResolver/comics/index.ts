module.exports = {
	Query: {
		async comics(
			_: IComics,
			__: object,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<IResponse<IComics>> {
			try {
				const data = await dataSources.comics.getComics();
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch comics: ${error.message}`
				);
			}
		},
	},
};
