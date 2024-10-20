module.exports = {
	Query: {
		async characters(
			_: undefined,
			__: object,
			{dataSources}: any
		): Promise<IResponse<ICharacters[]>> {
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
