module.exports = {
	Query: {
		async comicsStories(_, {comicsId}, {dataSources}) {
			try {
				const data = await dataSources.comics.getComicsStories(
					comicsId
				);
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch getComicsStories: ${error.message}`
				);
			}
		},
	},
};
