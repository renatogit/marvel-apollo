export default /* GraphQL */ `
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
		type: String
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
		returned: Float
		collectionURI: String
		items: [Uri]
	}

	extend type GenericCollections {
		name: String
		resourceURI: String
	}

	# Entidade Comics
	type GenericEntity {
		id: Float
		title: String
		urls: [Url]
		thumbnail: Image
		description: String
		modified: String
		pageCount: Float
		collections: [GenericCollections]
		dates: [Dates]
		prices: [Price]
		images: [Image]
	}

	# Entidade Characters
	extend type GenericEntity {
		name: String
	}

	# Entidade Creator
	extend type GenericEntity {
		suffix: String
		fullName: String
		series: GenericCollections
	}

	# Entidade Event
	extend type GenericEntity {
		urls: [Url]
		start: String
		end: String
	}

	# Entidade Story
	extend type GenericEntity {
		type: String
		originalissue: Uri
	}

	# Entidade Series
	extend type GenericEntity {
		startYear: Float
		endYear: Float
		rating: String
	}
`;
