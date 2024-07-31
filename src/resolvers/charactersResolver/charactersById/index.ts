module.exports = {
	Query: {
		charactersById: async (_, {charactersId}, {dataSources}) => {
			try {
				const data = await dataSources.characters.getCharactersById(
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
};
