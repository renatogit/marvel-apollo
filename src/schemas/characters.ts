module.exports = /* GraphQL */ `
	type Data {
		offset: Float
		limit: Float
		total: Float
		count: Float
		results: [CharactersResult]
	}

	type CharactersResult {
		id: Float
		name: String
		description: String
		modified: String
		thumbnail: Image
		resourceURI: String
		comics: GenericCollections
		series: GenericCollections
		stories: GenericCollections
		events: GenericCollections
		urls: [Url]
	}

	type CharactersAPI {
		code: Float
		status: String
		data: Data
		attributionText: String
	}
`;
