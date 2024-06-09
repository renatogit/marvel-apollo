// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
	Query: {
		comics: async (_, {}, {dataSources}) => {
			const data = await dataSources.comics.getComics();
			return data;
		},
		comicsById: async (_, {comicsId}, {dataSources}) => {
			const data = await dataSources.comics.getComicsById(comicsId);
			return data;
		},
		comicsCharacters: async (_, {comicsId}, {dataSources}) => {
			const data = await dataSources.comics.getComicsCharacters(comicsId);
			return data;
		},
		comicsCreators: async (_, {comicsId}, {dataSources}) => {
			const data = await dataSources.comics.getComicsCreators(comicsId);
			return data;
		},
		comicsEvents: async (_, {comicsId}, {dataSources}) => {
			const data = await dataSources.comics.getComicsEvents(comicsId);
			return data;
		},
		comicsStories: async (_, {comicsId}, {dataSources}) => {
			const data = await dataSources.comics.getComicsStories(comicsId);
			return data;
		},
	},
};
