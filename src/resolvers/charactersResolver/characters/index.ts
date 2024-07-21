module.exports = {
	Query: {
		characters: async (_, __, {dataSources}) => {
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