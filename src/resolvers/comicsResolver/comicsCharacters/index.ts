module.exports = {
	Query: {
		async comicsCharacters(_, {comicsId}, {dataSources}) {
			try {
				const data = await dataSources.comics.getComicsCharacters(
					comicsId
				);
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch getComicsCharacters: ${error.message}`
				);
			}
		},
	},
};
