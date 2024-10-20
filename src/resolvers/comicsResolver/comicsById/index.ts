module.exports = {
	Query: {
		async comicsById(_: IComics, {comicsId}: IID, {dataSources}: any) {
			try {
				const data = await dataSources.comics.getComicsById(comicsId);

				return data;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
	},
	Comic: {
		characters: async (res: IComics, __: any, {dataSources}: any) => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsCharacters(comicsId);

				return data.results.map(
					({
						id,
						name,
						description,
						modified,
						urls,
						thumbnail,
					}: ICharacters) => ({
						id,
						name,
						description,
						modified,
						urls,
						thumbnail,
					})
				);
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		creators: async (res: IComics, __: any, {dataSources}: any) => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsCreators(comicsId);
				return data.results;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		events: async (res: IComics, __: any, {dataSources}: any) => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsEvents(comicsId);
				return data.results;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		stories: async (res: IComics, __: any, {dataSources}: any) => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsStories(comicsId);
				return data.results;
			} catch (error) {
				throw new Error(`ERROR:  ${error.message}`);
			}
		},
	},
};
