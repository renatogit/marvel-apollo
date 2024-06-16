module.exports = /* GraphQL */ `
	type Url {
		type: String
		url: String
	}

	type Image {
		path: String
		extension: String
	}

	type Uri {
		name: String
		resourceURI: String
		role: String
	}

	type TextObjects {
		type: String
		text: String
		language: String
	}

	type Dates {
		type: String
		date: String
	}

	type Price {
		type: String
		price: Float
	}

	type GenericCollections {
		available: Float
		collectionURI: String
		items: [Uri]
		returned: Float
	}
`;