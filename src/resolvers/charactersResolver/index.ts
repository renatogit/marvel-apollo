module.exports = {
	Query: {
		characters: async (_, {}, {dataSources}) => {
			const data = await dataSources.characters.getCharacters();
			return data;
		},
		charactersById: async (_, {charactersId}, {dataSources}) => {
			const data = await dataSources.characters.getCharactersById(charactersId);
			return data;
		},
		charactersComics: async (_, {charactersId}, {dataSources}) => {
			const data = await dataSources.characters.getCharactersComics(charactersId);
			return data;
		},
		charactersSeries: async (_, {charactersId}, {dataSources}) => {
			const data = await dataSources.characters.getCharactersSeries(charactersId);
			return data;
		},
		charactersEvents: async (_, {charactersId}, {dataSources}) => {
			const data = await dataSources.characters.getCharactersEvents(charactersId);
			return data;
		},
		charactersStories: async (_, {charactersId}, {dataSources}) => {
			const data = await dataSources.characters.getCharactersStories(charactersId);
			return data;
		},
	},
};
