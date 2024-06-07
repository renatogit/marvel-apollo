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
	},
};
