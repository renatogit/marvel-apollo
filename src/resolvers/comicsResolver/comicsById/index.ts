module.exports = {
	Query: {
		async comicsById(
			_: IComics,
			{comicsId}: IID,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<IResponse<IComics>> {
			try {
				const data = await dataSources.comics.getComicsById(comicsId);

				return data;
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
	},
	Comic: {
		characters: async (
			res: ICharacters,
			__: object,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<ICharacters[]> => {
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
		creators: async (
			res: ICreators,
			__: object,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<ICreators[]> => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsCreators(comicsId);
				return data.results.map(
					({
						id,
						firstName,
						middleName,
						lastName,
						suffix,
						fullName,
						modified,
						urls,
						thumbnail,
					}: ICreators) => ({
						id,
						firstName,
						middleName,
						lastName,
						suffix,
						fullName,
						modified,
						urls,
						thumbnail,
					})
				);
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		events: async (
			res: IEvents,
			__: object,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<IEvents[]> => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsEvents(comicsId);
				return data.results.map(
					({
						id,
						title,
						description,
						resourceURI,
						urls,
						modified,
						start,
						end,
						thumbnail,
					}: IEvents) => ({
						id,
						title,
						description,
						resourceURI,
						urls,
						modified,
						start,
						end,
						thumbnail,
					})
				);
			} catch (error) {
				throw new Error(`ERROR: ${error.message}`);
			}
		},
		stories: async (
			res: IStories,
			__: object,
			{dataSources}: IDataSources<IEntity<IComicsDataSources>>
		): Promise<IStories[]> => {
			const comicsId = res.id;

			try {
				const {data} =
					await dataSources.comics.getComicsStories(comicsId);
				return data.results.map(
					({
						id,
						title,
						description,
						type,
						modified,
						thumbnail,
					}: IStories) => ({
						id,
						title,
						description,
						type,
						modified,
						thumbnail,
					})
				);
			} catch (error) {
				throw new Error(`ERROR:  ${error.message}`);
			}
		},
	},
};
