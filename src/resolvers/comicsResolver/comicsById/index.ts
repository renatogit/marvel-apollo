module.exports = {
	Query: {
		async comicsById(_, {comicsId}, {dataSources}) {
			try {
				const data = await dataSources.comics.getComicsById(comicsId);
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch getComicsById: ${error.message}`
				);
			}
		},
	},
};
