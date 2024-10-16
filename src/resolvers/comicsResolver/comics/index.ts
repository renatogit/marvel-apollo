module.exports = {
	Query: {
		async comics(
			_: any,
			__: any,
			{dataSources}: any
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
