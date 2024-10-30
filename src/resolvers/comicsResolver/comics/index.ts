export default {
	Query: {
		async comics(_, __, {dataSources}) {
			try {
				const data = await dataSources.comics.getComics();
				return data;
			} catch (error) {
				throw new Error(
					`ERROR: Failed to fetch comics: ${error.message}`
				);
			}
		},
	},
};
