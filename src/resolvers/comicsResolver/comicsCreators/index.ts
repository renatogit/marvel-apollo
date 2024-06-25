module.exports = {
	Query: {
		async comicsCreators(_, {comicsId}, {dataSources}) {
			try {
				const data = await dataSources.comics.getComicsCreators(
					comicsId
				);
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch getComicsCreators: ${error.message}`
				);
			}
		},
	},
};
