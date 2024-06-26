module.exports = {
	Query: {
		async comicsEvents(_, {comicsId}, {dataSources}) {
			try {
				const data = await dataSources.comics.getComicsEvents(comicsId);
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch getComicsEvents: ${error.message}`
				);
			}
		},
	},
};
